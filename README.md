# rose-omer.github.io

Ömer Faruk Köse'nin portföy sitesi: bilgisayarlı görü (YOLO, OCR, VLM) ve diğer projeler; metrik, ekran ve kod bağlantılarıyla.

- Canlı adres: https://rose-omer.github.io/
- Üretici: [Astro](https://astro.build) 7 (statik çıktı, sayfa başına çok az JS).
- Dağıtım: GitHub Actions → GitHub Pages.

## Yerel çalıştırma

Gerekenler: Node.js 22.23.4 ya da üstü.

```bash
npm ci
npm run dev        # http://127.0.0.1:8100
```

- Port 8100'dür. Bu makinede 8000 başka bir servise ayrıldı; Astro varsayılanı 4321 de kullanılmaz.
- Başka port: `npm run dev -- --port 8190`.

Diğer komutlar:

| Komut | Ne yapar |
|---|---|
| `npm run check` | Astro tip ve şablon denetimi (`astro check`) |
| `npm run build` | `dist/` klasörüne statik site üretir |
| `npm test` | `dist/` üzerinde testler: iskelet, SEO alanları, tek `h1`, `alt`, kırık iç bağlantı, sitemap, renk kontrastı |
| `npm run preview` | Derlenmiş siteyi 8100'de sunar |
| `npm run verify` | Üçünü sırayla koşar: check, build, test |
| `npm run cv:pdf -- [adres]` | Çalışan siteden `public/omer-kose-cv.pdf` üretir (varsayılan `http://127.0.0.1:8100/cv/`). Edge/Chrome başsız modu ya da `CHROME_PATH` kullanır. CV bilgisi değişince koş, sonra yeniden derle. |

## Yeni proje ekleme

`src/content/projects/<slug>.md` dosyası ekle. Adres `/projeler/<slug>/` olur. Şema `src/content.config.ts` içinde; uymayan alan derlemeyi durdurur.

```yaml
---
title: Proje adı
summary: En fazla 160 karakter, tek cümle özet.
tags: [YOLO, Görüntü]          # YOLO | OCR | VLM | LLM | Görüntü | ML | Veri | Web | Mobil
role: Tek geliştirici
year: 2026
stack: [Python, Ultralytics]
metrics:                        # İlki kartta rozet olur.
  - label: mAP@50
    value: "0,91"
    note: Doğrulama kümesi, 1.200 görüntü
cover: ../../assets/projects/kapak.png   # İsteğe bağlı; yoksa `motif` çizilir.
coverAlt: Kapakta ne göründüğü
motif: tespit                   # tespit | siniflandirma | metin | arayuz | akis
compare:                        # İsteğe bağlı önce/sonra kaydırıcısı
  before: ../../assets/projects/ham.png
  after: ../../assets/projects/cikti.png
  beforeLabel: Ham görüntü
  afterLabel: YOLO tespiti
  beforeAlt: ...
  afterAlt: "YOLO çıktısı: 4 baret tespiti"
  caption: ...
gallery: []                     # [{ src, alt, caption }]
learned: []                     # "Öğrendiklerim" maddeleri
repo: https://github.com/rose-omer/...
demo: https://...               # İsteğe bağlı
demoNote: İlk açılış ~1 dk      # Uyuyan ücretsiz sunucu için
featured: false                 # Ana sayfada ilk 3 öne çıkan gösterilir.
order: 10                       # Küçük sayı önce gelir.
---

## Problem
## Veri
## Yaklaşım
## Sonuç
```

Kişisel bilgiler (deneyim, eğitim, yetenekler, bağlantılar) `src/data/site.ts` içinde.

## Dağıtım

- `main` dalına her push `.github/workflows/deploy.yml` iş akışını tetikler: derleme (`withastro/action@v6`) ve yayın (`actions/deploy-pages@v5`).
- PR'larda `.github/workflows/check.yml` koşar: `npm ci`, `astro check`, derleme, testler ve lychee ile dış bağlantı denetimi.
- İlk kurulumda bir kez: Settings → Pages → Source: **GitHub Actions**. Actions ile yayında Jekyll çalışmaz; `.nojekyll` gerekmez.
- Özel alan adı (`omerksoft.com.tr`) hazır olunca: Settings → Pages → Custom domain, ardından `astro.config.mjs` içinde `site` ve `public/robots.txt` içindeki sitemap adresi, `src/data/site.ts` içinde `personalSite` güncellenir.

## Görseller ve lisans

- Ekran görüntüleri sahibin kendi açık depolarından alındı (`cs-clip/docs`, `Sketch-to-Code-AI/assets`).
- Gören Göz karşılaştırması şematik bir çizimdir; gerçek model çıktısı değildir. Gerçek çift eklenince değiştirilmeli.
- Ekran görüntüsü olmayan projelerde kapak, koddan çizilen motiftir (`src/components/CoverArt.astro`).
- Stok fotoğraf kullanılmaz.
- Yazı tipi: Archivo (SIL Open Font License), `@fontsource-variable/archivo` paketiyle siteyle birlikte sunulur.
- Paylaşım görselleri (`/og/*.png`) depodaki DejaVu yazı tipiyle çizilir (`src/assets/og-fonts/`, Latin + Türkçe alt kümesi, lisans dosyası yanında). Sistem yazı tipine bağlı değildir; Windows ve CI aynı görseli üretir.
