// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Alan adı (omerksoft.com.tr) hazır olunca `site` değeri değişir; README "Dağıtım" bölümüne bak.
export default defineConfig({
  site: 'https://rose-omer.github.io',
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
  server: { port: 8100, host: '127.0.0.1' },
});
