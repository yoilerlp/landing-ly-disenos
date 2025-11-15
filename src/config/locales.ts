import { bannerEs, bannerEn } from '../locales/banner.ts';
import { servicesEn, servicesEs } from '../locales/services';
import { workFlowEn, workFlowEs } from '../locales/workflow';
import { footerEs, footerEn } from '../locales/footer';
import { contactEs, contactEn } from '../locales/contact';

export const localesText = {
  es: {
    ...bannerEs,
    services: servicesEs,
    workflow: workFlowEs,
    footer: footerEs,
    contact: contactEs,
  },
  en: {
    ...bannerEn,
    services: servicesEn,
    workflow: workFlowEn,
    footer: footerEn,
    contact: contactEn,
  },
} as const;

