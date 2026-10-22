// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://azizferiani.com',
  trailingSlash: 'ignore',
  // Inline the CSS so the first paint doesn't wait for extra stylesheet requests.
  build: { inlineStylesheets: 'always' },
  i18n: {
    locales: ['en', 'de', 'ar'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'en', locales: { en: 'en', de: 'de', ar: 'ar' } },
    }),
  ],
  // Keep the novel's straight quotes: curly ones render mirrored in right-to-left text.
  markdown: { smartypants: false },
  vite: { plugins: [tailwindcss()] },
});
