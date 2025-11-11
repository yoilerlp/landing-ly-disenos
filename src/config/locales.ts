import { bannerEs, bannerEn } from '../locales/banner';
import { servicesEn, servicesEs } from '../locales/services';

export const localesText = {
  es: {
    ...bannerEs,
    services: servicesEs,
  },
  en: {
    ...bannerEn,
    services: servicesEn,
  },
} as const;

