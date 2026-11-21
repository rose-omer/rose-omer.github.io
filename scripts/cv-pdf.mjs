// CV sayfasından `public/omer-kose-cv.pdf` üretir. Sayfanın yazdırma stilini kullanır.
// Kullanım: önce `npm run build` ve `npm run preview` (ya da `npm run dev`), sonra
//   npm run cv:pdf -- [adres]       (varsayılan: http://127.0.0.1:8100/cv/)
// Tarayıcı: CHROME_PATH ya da kurulu Edge/Chrome (başsız mod). Yeni araç kurmaz.
import { execFileSync } from 'node:child_process';
import { existsSync, mkdtempSync, rmSync, statSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const url = process.argv[2] ?? 'http://127.0.0.1:8100/cv/';
const out = fileURLToPath(new URL('../public/omer-kose-cv.pdf', import.meta.url));

const candidates = [
  process.env.CHROME_PATH,
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
].filter(Boolean);
const browser = candidates.find((p) => existsSync(p));
if (!browser) {
  console.error('Chromium tabanlı tarayıcı bulunamadı. CHROME_PATH ortam değişkenini ayarla.');
  process.exit(1);
}

// Geçici profil: kullanıcının açık tarayıcısına ve tema tercihine dokunmaz.
const profile = mkdtempSync(join(tmpdir(), 'cv-pdf-'));
try {
  execFileSync(browser, [
    '--headless',
    '--disable-gpu',
    '--no-first-run',
    `--user-data-dir=${profile}`,
    '--no-pdf-header-footer',
    `--print-to-pdf=${out}`,
    url,
  ], { stdio: 'inherit', timeout: 60_000 });
} finally {
  rmSync(profile, { recursive: true, force: true });
}

const size = existsSync(out) ? statSync(out).size : 0;
if (size < 1000) {
  console.error(`PDF üretilemedi: ${out}`);
  process.exit(1);
}
console.log(`Yazıldı: ${out} (${Math.round(size / 1024)} KB)`);
