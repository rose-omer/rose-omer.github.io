import type { APIRoute, GetStaticPaths } from 'astro';
import { resolve } from 'node:path';
import sharp from 'sharp';
import { getProjects } from '../../lib/projects';
import { site } from '../../data/site';

/**
 * Paylaşım görselleri (1200×630). Derlemede PNG üretilir;
 * her proje için bir tane ve sitenin geneli için `varsayilan`.
 */
export const getStaticPaths = (async () => {
  const projects = await getProjects();
  return [
    { params: { slug: 'varsayilan' }, props: { title: site.name, subtitle: site.role, tags: ['YOLO', 'OCR', 'VLM'] } },
    ...projects.map((p) => ({
      params: { slug: p.id },
      props: { title: p.data.title, subtitle: p.data.summary, tags: p.data.tags },
    })),
  ];
}) satisfies GetStaticPaths;

interface Props {
  title: string;
  subtitle: string;
  tags: readonly string[];
}

/**
 * Yazı tipleri depoyla gelir (DejaVu, Latin + Türkçe alt kümesi). Sistem yazı
 * tipine bağlı kalınca Windows ve CI (ubuntu) farklı görsel üretiyordu.
 * Satırları Pango gerçek glif genişliğiyle sarar.
 */
const fontDir = resolve(process.cwd(), 'src/assets/og-fonts');
const fonts = {
  bold: { name: 'DejaVu Sans Bold', file: resolve(fontDir, 'DejaVuSans-Bold.ttf') },
  regular: { name: 'DejaVu Sans', file: resolve(fontDir, 'DejaVuSans.ttf') },
  mono: { name: 'DejaVu Sans Mono Bold', file: resolve(fontDir, 'DejaVuSansMono-Bold.ttf') },
};

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Uzun metni kelime sınırından kırpar; kırpılınca sona … koyar. */
function clip(text: string, max: number): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max).replace(/\s+\S*$/, '');
  return cut.replace(/[.,;:]?$/, '…');
}

interface TextLayer {
  input: Buffer;
  width: number;
  height: number;
}

/**
 * Metni saydam PNG katmanına çizer. Satır `width` içinde sarılır.
 * Yükseklik `maxHeight`i aşarsa metin kutuya sığacak kadar küçülür.
 */
async function text(
  content: string,
  font: { name: string; file: string },
  size: number,
  color: string,
  width: number,
  maxHeight: number,
): Promise<TextLayer> {
  const base = {
    text: `<span foreground="${color}">${esc(content)}</span>`,
    font: `${font.name} ${size}`,
    fontfile: font.file,
    width,
    rgba: true,
    wrap: 'word' as const,
  };
  let { data, info } = await sharp({ text: base }).png().toBuffer({ resolveWithObject: true });
  if (info.height > maxHeight) {
    ({ data, info } = await sharp({ text: { ...base, height: maxHeight } })
      .png()
      .toBuffer({ resolveWithObject: true }));
  }
  return { input: data, width: info.width, height: info.height };
}

export const GET: APIRoute<Props> = async ({ props }) => {
  const [tags, title, sub, url] = await Promise.all([
    text(props.tags.join('  '), fonts.mono, 22, '#0e1519', 900, 32),
    text(props.title, fonts.bold, 70, '#e1eaeb', 940, 180),
    text(clip(props.subtitle, 120), fonts.regular, 30, '#9daeb3', 1040, 84),
    text('rose-omer.github.io', fonts.mono, 24, '#4dcfdb', 600, 40),
  ]);

  const boxY = 150;
  const boxH = title.height + 64;
  const subY = boxY + boxH + 36;

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#0e1519"/>
  <g stroke="#1b2a31" stroke-width="1">
    ${Array.from({ length: 19 }, (_, i) => `<line x1="${(i + 1) * 60}" y1="0" x2="${(i + 1) * 60}" y2="630"/>`).join('')}
    ${Array.from({ length: 10 }, (_, i) => `<line x1="0" y1="${(i + 1) * 60}" x2="1200" y2="${(i + 1) * 60}"/>`).join('')}
  </g>
  <rect x="72" y="${boxY}" width="1000" height="${boxH}" fill="none" stroke="#2fb8c5" stroke-width="3"/>
  <rect x="72" y="${boxY - 34}" width="${tags.width + 28}" height="34" fill="#4dcfdb"/>
</svg>`;

  const png = await sharp(Buffer.from(svg))
    .composite([
      { input: tags.input, left: 86, top: boxY - 34 + Math.round((34 - tags.height) / 2) },
      { input: title.input, left: 104, top: boxY + 32 },
      { input: sub.input, left: 76, top: subY },
      { input: url.input, left: 76, top: 556 },
    ])
    .png({ compressionLevel: 9 })
    .toBuffer();
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
};
