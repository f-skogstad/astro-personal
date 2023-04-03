import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
import sanity from 'astro-sanity';

// https://astro.build/config
import solidJs from '@astrojs/solid-js';

// https://astro.build/config
export default defineConfig({
  site: 'https://astro-modern-personal-website.netlify.app',
  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
    sanity({
      projectId: 'pbjlgj2o',
      dataset: 'production',
      apiVersion: 'v2021-10-21',
      token: '',
      useCdn: true,
    }),
    solidJs(),
  ],
});
