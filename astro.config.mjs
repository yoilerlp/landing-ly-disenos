// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

import {
  ACCEPTED_LOCALES,
  DEFAULT_LOCALE,
  DEFAULT_DOMAIN_URL,
} from './src/config/i18n';

import sitemap from '@astrojs/sitemap';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  i18n: {
    locales: [...ACCEPTED_LOCALES],
    defaultLocale: DEFAULT_LOCALE,
    // routing: {
    //   redirectToDefaultLocale: false,
    // },
  },

  integrations: [react(), sitemap()],

  site:
    import.meta.env.PUBLIC_SITE_URL ||
    process.env.PUBLIC_SITE_URL ||
    DEFAULT_DOMAIN_URL,

  base:
    import.meta.env.PUBLIC_REPOSITORY_PATH ||
    process.env.PUBLIC_REPOSITORY_PATH ||
    process.env.BASE_PATH,

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

  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});

