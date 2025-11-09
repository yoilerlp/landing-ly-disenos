import { localesText } from './locales';

export const ACCEPTED_LOCALES = ['es', 'en'] as const;

export const DEFAULT_LOCALE = ACCEPTED_LOCALES[0];

export type Locale = (typeof ACCEPTED_LOCALES)[number];

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in localesText) return lang as keyof typeof localesText;
  return DEFAULT_LOCALE;
}

export function useTranslations(lang: Locale) {
  return function t(key: keyof (typeof localesText)[typeof DEFAULT_LOCALE]) {
    return localesText[lang][key] || localesText[DEFAULT_LOCALE][key];
  };
}

