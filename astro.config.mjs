// @ts-check
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://nc-new-website.vercel.app/',
  integrations: [mdx(), sitemap(), react()],

  vite: {
    plugins: [tailwindcss()],
  },

  server: {
    host: true, // listen on all interfaces (0.0.0.0)
    allowedHosts: true, // allow all hostnames (needed for Cloudflare/ngrok)
  },

  adapter: vercel(),
});
