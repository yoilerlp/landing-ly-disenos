import { localesText } from './locales';

export const ACCEPTED_LOCALES = ['es', 'en'] as const;

export const DEFAULT_LOCALE = ACCEPTED_LOCALES[0];

export type Locale = (typeof ACCEPTED_LOCALES)[number];

export function getLangFromUrl(url: URL) {
  // Quitar el base path si existe

  const BASE = import.meta.env.PUBLIC_REPOSITORY_PATH || '';

  let path = url.pathname;

  if (BASE && path.startsWith(BASE)) {
    path = path.slice(BASE.length);
  }

  // Partir por segmentos limpios
  const [, lang] = path.split('/');

  if (lang in localesText) {
    return lang as keyof typeof localesText;
  }

  return DEFAULT_LOCALE;
}

export function useTranslations(lang: Locale) {
  return function t(key: keyof (typeof localesText)[typeof DEFAULT_LOCALE]) {
    return localesText[lang][key] || localesText[DEFAULT_LOCALE][key];
  };
}

export function useTranslationsObject(lang: Locale) {
  return localesText[lang] || localesText[DEFAULT_LOCALE];
}

