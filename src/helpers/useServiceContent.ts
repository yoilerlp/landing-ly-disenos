import { icons, images } from '@/assets';
import type { useTranslationsObject } from '@/config/i18n';

export const useServiceContentOrganized = (
  t: ReturnType<typeof useTranslationsObject>
) => {
  const { onlinePresence, techSolutions, newDigitalPath } = t.services;

  const onlinePresenceServiceImages = [
    images.services.IPhone16,
    images.services.SabiaEsmeralda,
    images.services.GwsDashboard,
  ];

  const onlinePresenceServiceIcons = [
    icons.PhoneStar,
    icons.FavoriteIcon,
    icons.RobotIcon,
  ];

  const techSolutionsServiceImages = [
    images.services.CalendyNokiaXR21,
    images.services.Ecomerce,
    images.services.CalendyDesktop,
  ];

  const techSolutionsServiceIcons = [
    icons.PhoneIcon,
    icons.ShoppingCartIcon,
    icons.ExtensionIcon,
  ];

  const newDigitalPathServiceImages = [
    images.services.Ventas,
    images.services.WomenWithPhone,
    images.services.Cartera,
  ];

  const newDigitalPathServiceIcons = [
    icons.MediationIcon,
    icons.RocketIcon,
    icons.SunnySnowingIcon,
  ];

  const serviceData = [onlinePresence, techSolutions, newDigitalPath];

  const serviceImages = [
    onlinePresenceServiceImages,
    techSolutionsServiceImages,
    newDigitalPathServiceImages,
  ];

  const serviceIcons = [
    onlinePresenceServiceIcons,
    techSolutionsServiceIcons,
    newDigitalPathServiceIcons,
  ];

  return { serviceData, serviceImages, serviceIcons };
};

