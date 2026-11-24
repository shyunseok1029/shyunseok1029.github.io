import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({ site: 'https://shyunseok1029.github.io', base: '/', integrations: [sitemap()], vite: { plugins: [tailwindcss()] }, markdown: { shikiConfig: { theme: 'github-dark' } } });
