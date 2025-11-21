import { BASE } from './constants';

export const withLocale = (locale: string, path: string) => {
  // Asegurar que path siempre empieza con slash

  // remover initial slash
  const cleanPath = path.startsWith('/') ? path.slice(1) : `${path}`;

  // Ensamblar: BASE + /locale + path
  return `${BASE}/${locale}/${cleanPath}`;
};

