import { BASE } from './constants';

export const withLocale = (locale: string, path: string) => {
  // Asegurar que path siempre empieza con slash
  const cleanPath = path.startsWith('/') ? path : `/${path}`;

  // Ensamblar: BASE + /locale + path
  return `${BASE}${locale}${cleanPath}`;
};

