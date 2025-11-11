// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

import { ACCEPTED_LOCALES, DEFAULT_LOCALE } from './src/config/i18n';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  i18n: {
    locales: [...ACCEPTED_LOCALES],
    defaultLocale: DEFAULT_LOCALE,
    routing: {
      prefixDefaultLocale: true,
      fallbackType: 'rewrite',
      // redirectToDefaultLocale: true,
    },
  },

  integrations: [react()],

  site: process.env.PUBLIC_SITE_URL,
  base: process.env.PUBLIC_REPOSITORY_PATH,

  env: {
    schema: {
      PUBLIC_SITE_URL: envField.string({
        context: 'client',
        access: 'public',
        optional: true,
      }),
      PUBLIC_REPOSITORY_PATH: envField.string({
        context: 'client',
        access: 'public',
        optional: true,
      }),
    },
  },
});

