// @ts-check
import { defineConfig } from 'astro/config';
import devtoolsJson from 'vite-plugin-devtools-json';
import sitemap from '@astrojs/sitemap';
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: 'https://fayln.com',
  integrations: [icon(), sitemap()],
  prefetch: {
    defaultStrategy: 'viewport'
  },
  vite: {
    plugins: [
      devtoolsJson()
    ]
  }
});