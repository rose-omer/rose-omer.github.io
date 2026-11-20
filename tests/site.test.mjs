// Derlenmiş siteyi (dist/) denetler. Önce `npm run build` koş.
// Bağımlılık yok: Node'un yerleşik test koşucusu ve düz metin taraması.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const dist = fileURLToPath(new URL('../dist/', import.meta.url));

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
}

assert.ok(existsSync(dist), 'dist/ yok: önce `npm run build` koş.');
const pages = walk(dist)
  .filter((f) => f.endsWith('.html'))
  .map((file) => ({ file, rel: relative(dist, file).split(sep).join('/'), html: readFileSync(file, 'utf8') }));

test('beklenen sayfalar derlendi', () => {
  const rels = pages.map((p) => p.rel);
  for (const must of ['index.html', 'projeler/index.html', 'cv/index.html', '404.html']) {
    assert.ok(rels.includes(must), `${must} eksik`);
  }
  const cases = rels.filter((r) => /^projeler\/[^/]+\/index\.html$/.test(r));
  assert.ok(cases.length >= 6, `en az 6 vaka sayfası olmalı, ${cases.length} var`);
});

test('her sayfada geçerli iskelet ve SEO alanları var', () => {
  for (const { rel, html } of pages) {
    assert.match(html, /^<!DOCTYPE html>/i, `${rel}: DOCTYPE yok`);
    assert.match(html, /<html lang="tr"/, `${rel}: lang="tr" yok`);
    assert.match(html, /<meta charset="utf-8"/i, `${rel}: charset yok`);
    assert.match(html, /<meta name="viewport"/, `${rel}: viewport yok`);
    assert.match(html, /<title>[^<]{5,}<\/title>/, `${rel}: title yok`);
    assert.match(html, /<meta name="description" content="[^"]{20,}"/, `${rel}: description yok`);
    assert.match(html, /<link rel="canonical" href="https:\/\/rose-omer\.github\.io\//, `${rel}: canonical yok`);
    assert.match(html, /<meta property="og:image" content="https:\/\/rose-omer\.github\.io\/og\/[^"]+\.png"/, `${rel}: og:image yok`);
  }
});

test('her sayfada tek h1 ve içeriğe atla bağlantısı var', () => {
  for (const { rel, html } of pages) {
    const h1 = html.match(/<h1[\s>]/g) ?? [];
    assert.equal(h1.length, 1, `${rel}: ${h1.length} adet h1`);
    assert.match(html, /href="#icerik"/, `${rel}: içeriğe atla bağlantısı yok`);
    assert.match(html, /id="icerik"/, `${rel}: #icerik hedefi yok`);
  }
});

test('her görselde alt niteliği, genişlik ve yükseklik var', () => {
  for (const { rel, html } of pages) {
    for (const img of html.match(/<img\b[^>]*>/g) ?? []) {
      // Astro boş alt'ı `alt` olarak yazar; ikisi de geçerli (süsleme görseli).
      assert.match(img, /\salt(="[^"]*")?[\s>]/, `${rel}: alt eksik → ${img.slice(0, 120)}`);
      assert.match(img, /\swidth="\d+"/, `${rel}: width eksik → ${img.slice(0, 120)}`);
      assert.match(img, /\sheight="\d+"/, `${rel}: height eksik → ${img.slice(0, 120)}`);
    }
  }
});

test('iç bağlantılar ve kaynaklar dist içinde var', () => {
  const broken = [];
  for (const { rel, html } of pages) {
    const refs = [...html.matchAll(/\s(?:href|src|srcset)="([^"]+)"/g)].flatMap((m) =>
      m[1].split(',').map((s) => s.trim().split(/\s+/)[0]),
    );
    for (const ref of refs) {
      if (!ref.startsWith('/') || ref.startsWith('//')) continue;
      const path = decodeURIComponent(ref.split(/[?#]/)[0]);
      const target = join(dist, path.endsWith('/') ? join(path, 'index.html') : path);
      if (!existsSync(target)) broken.push(`${rel} → ${ref}`);
    }
  }
  assert.deepEqual(broken, [], `kırık iç bağlantılar:\n${broken.join('\n')}`);
});

test('ana sayfada Person JSON-LD var ve geçerli JSON', () => {
  const home = pages.find((p) => p.rel === 'index.html');
  const m = home.html.match(/<script type="application\/ld\+json">(.+?)<\/script>/s);
  assert.ok(m, 'JSON-LD yok');
  const data = JSON.parse(m[1]);
  assert.equal(data['@type'], 'Person');
  assert.ok(data.sameAs.includes('https://github.com/rose-omer'));
});

test('sitemap ve robots.txt üretildi; 404 sitemapte yok', () => {
  assert.ok(existsSync(join(dist, 'robots.txt')));
  assert.ok(existsSync(join(dist, 'sitemap-index.xml')));
  const sm = readFileSync(join(dist, 'sitemap-0.xml'), 'utf8');
  assert.match(sm, /https:\/\/rose-omer\.github\.io\/projeler\//);
  assert.doesNotMatch(sm, /404/);
});

test('işverene ait ya da gizli kalması gereken içerik yayında yok', () => {
  const all = pages.map((p) => p.html).join('\n');
  // Plan §4.4: iyexvms-hesaplayici işveren onayı olmadan eklenmez.
  assert.doesNotMatch(all, /iyexvms/i);
  // Telefon numarası ve referans bilgisi yayınlanmaz.
  assert.doesNotMatch(all, /\(?\d{3}\)?[\s-]\d{3}[\s-]\d{2}[\s-]?\d{2}/);
  assert.doesNotMatch(all, /juxtapose|knightlab/i);
});

test('CV PDF yayında, tek sayfa ve CV sayfası ona bağlanıyor', () => {
  const pdf = join(dist, 'omer-kose-cv.pdf');
  assert.ok(existsSync(pdf), 'omer-kose-cv.pdf yok: `npm run cv:pdf` koş.');
  const bytes = readFileSync(pdf).toString('latin1');
  assert.ok(bytes.startsWith('%PDF-'), 'PDF imzası yok');
  assert.match(bytes, /\/Count 1\b/, 'PDF tek sayfa değil');
  const cv = pages.find((p) => p.rel === 'cv/index.html');
  assert.match(cv.html, /href="\/omer-kose-cv\.pdf" download/);
});

test('paylaşım görselleri PNG ve 1200×630', () => {
  const og = readdirSync(join(dist, 'og')).filter((f) => f.endsWith('.png'));
  assert.ok(og.includes('varsayilan.png'), 'varsayilan.png yok');
  for (const f of og) {
    const b = readFileSync(join(dist, 'og', f));
    assert.equal(b.toString('latin1', 1, 4), 'PNG', `${f}: PNG değil`);
    assert.equal(b.readUInt32BE(16), 1200, `${f}: genişlik`);
    assert.equal(b.readUInt32BE(20), 630, `${f}: yükseklik`);
  }
});