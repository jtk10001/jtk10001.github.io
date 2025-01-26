import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://jon-kaplan.com',
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => page !== undefined,
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date().toISOString()
    }),
    tailwind()
  ],
});