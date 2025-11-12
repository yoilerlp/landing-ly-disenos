import { bannerEs, bannerEn } from '../locales/banner';
import { servicesEn, servicesEs } from '../locales/services';
import { workFlowEn, workFlowEs } from '../locales/workflow';

export const localesText = {
  es: {
    ...bannerEs,
    services: servicesEs,
    workflow: workFlowEs,
  },
  en: {
    ...bannerEn,
    services: servicesEn,
    workflow: workFlowEn,
  },
} as const;

