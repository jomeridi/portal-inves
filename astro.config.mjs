// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  image: {
    domains: ["images.unsplash.com"],
  },
  i18n: {
    defaultLocale: "es",
    locales: ["es", "ca", "eu", "gl"],
    routing: {
      prefixDefaultLocale: true
    },
  },
  vite: {
    plugins: [tailwindcss()]
  }
});