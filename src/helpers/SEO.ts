export const SEO_KEYWORDS_ES = [
  'consultoría transformación digital',
  'agencia estrategia digital b2b',
  'empresa de consultoría tecnológica',
  'desarrollo ecommerce a medida',
  'expertos en plataformas de comercio electrónico',
  'agencia de marketing digital b2b',
  'estrategias de captación de leads',
  'transformación digital',
  'agencia de transformación digital',
  'estrategia digital',
  'desarrollo de e-commerce',
  'tienda online',
  'desarrollo web',
  'marketing digital',
  'mercadeo digital',
  'consultoría digital',
  'soluciones tecnológicas',
  'desarrollo de software a medida',
  'optimización digital para empresas',
  'agencia de marketing y tecnología',
  'desarrollo de tiendas online',
  'integración de herramientas digitales',
  'automatización de procesos',
  'servicios digitales para negocios',
  'transformación digital para empresas',
  'creación de plataformas digitales',
  'innovación tecnológica empresarial',
];

export const SEO_KEYWORDS_EN = [
  'digital transformation consulting',
  'b2b digital strategy agency',
  'technology consulting company',
  'custom ecommerce development',
  'experts in ecommerce platforms',
  'b2b digital marketing agency',
  'lead generation strategies',
  'digital transformation agency',
  'digital strategy',
  'e-commerce development',
  'online store development',
  'web development',
  'digital marketing',
  'business digital consulting',
  'technology solutions',
  'custom software development',
  'business digital optimization',
  'marketing and technology agency',
  'online shop development',
  'digital tools integration',
  'automation solutions',
  'digital services for businesses',
  'digital transformation for companies',
  'building digital platforms',
  'business technology innovation',
];

const metaEn = {
  title: 'Fusion Tower | Digital Transformation, E-commerce, Marketing',
  description: `Drive business growth with Fusion Tower. We specialize in
digital transformation strategy, e-commerce solutions, and marketing. Let's discuss your project
today!`,
  keywords: SEO_KEYWORDS_EN.join(', '),
  author: 'Fusion Tower',
  publisher: 'Fusion Tower Digital Agency',
};

const metaEs: typeof metaEn = {
  title: 'Fusion Tower | Transformación digital, e-commerce y mercadeo',
  description:
    'Transformamos tu negocio con soluciones de estrategia digital, e-commerce y mercadeo. En Fusion Tower elevamos tu impacto tecnológico. ¡Hablemos de tu proyecto!',
  keywords: SEO_KEYWORDS_ES.join(', '),
  author: 'Fusion Tower',
  publisher: 'Fusion Tower Agencia Digital',
};

export const baseMetaData = {
  en: metaEn,
  es: metaEs,
} as const;

