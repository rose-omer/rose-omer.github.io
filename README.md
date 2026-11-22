# rose-omer.github.io

Ömer Faruk Köse'nin portföy sitesi: projeler, deneyim, CV ve iletişim.

- Canlı adres: https://rose-omer.github.io/
- Yapı: React 19 + Vite 6, Tailwind (CDN), HashRouter.
- Yayın: `main` dalına her push'ta GitHub Actions derler ve Pages'e yükler (`.github/workflows/deploy.yml`).
- Eski Astro sitesi `astro-plan-v1` dalında duruyor.

## Yerel çalıştırma

Gerekenler: Node.js 22 ya da üstü.

```powershell
npm ci
npm run dev -- --port 8190
```

- 8000, 1984, 8554, 8555 portlarını kullanma (bu makinede ayrılmış).

Diğer komutlar:

| Komut | Ne yapar |
|---|---|
| `npm run lint` | TypeScript denetimi (`tsc --noEmit`) |
| `npm run build` | `dist/` klasörüne statik site üretir |
| `npm run preview -- --port 8190` | Derlenmiş siteyi sunar |

## İçerik

- Kişisel bilgi, deneyim, projeler: `data.ts`.
- Proje görselleri: `public/projects/`.
- CV: `public/cv/Omer-Faruk-Kose-CV.pdf`.

## Sohbet asistanı

`GEMINI_API_KEY` tanımlıysa sağ altta Gemini sohbet düğmesi çıkar. Anahtar tarayıcıya giden koda gömülür. Bu yüzden canlı yayında anahtar verilmez ve düğme görünmez.
