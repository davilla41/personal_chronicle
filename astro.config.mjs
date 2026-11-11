import { defineConfig, fontProviders } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // TODO: cambia por tu dominio real
  site: 'https://example.com',
  integrations: [mdx(), sitemap()],
  vite: { plugins: [tailwindcss()] },
  fonts: [
    { provider: fontProviders.fontsource(), name: 'Inter', cssVariable: '--font-inter', weights: [400, 500, 600, 700] },
    { provider: fontProviders.fontsource(), name: 'JetBrains Mono', cssVariable: '--font-mono', weights: [400, 500] },
  ],
});
