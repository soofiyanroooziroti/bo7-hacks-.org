import type { ProductSlide } from './product-types';

const visualsMenu: ProductSlide = {
  src: '/images/bo7-hack-menu-visuals.webp',
  alt: 'BO7 hack menu Visuals tab with player ESP, box, skeleton, name, distance and radar options',
  width: 1330,
  height: 840,
  objectFit: 'contain',
};

const aimbotMenu: ProductSlide = {
  src: '/images/bo7-hack-menu-aimbot.webp',
  alt: 'BO7 Aimbot menu showing aim assistance and no recoil control options',
  width: 1330,
  height: 840,
  objectFit: 'contain',
};

const miscMenu: ProductSlide = {
  src: '/images/bo7-hack-menu-misc.webp',
  alt: 'BO7 Misc tab with menu key, panic key, stream-proof and save/load config options',
  width: 1330,
  height: 840,
  objectFit: 'contain',
};

export const HOME_HERO_MENU_SLIDES: ProductSlide[] = [
  {
    src: '/images/bo7-rooftop-city-map-gameplay.webp',
    alt: 'BO7 first-person gameplay on a city map with the minimap and score visible',
    width: 2400,
    height: 1350,
  },
  miscMenu,
  {
    src: '/images/bo7-esp-box-storage-area.webp',
    alt: 'BO7 ESP box around an enemy in a storage area while aiming down sights',
    width: 1672,
    height: 941,
  },
  aimbotMenu,
  {
    src: '/images/bo7-esp-skeleton-garage-street.webp',
    alt: 'BO7 ESP skeleton and box overlay on enemies in a garage street',
    width: 1672,
    height: 941,
  },
  visualsMenu,
  {
    src: '/images/bo7-esp-garage-enemy-distance.webp',
    alt: 'BO7 ESP boxes showing enemy distance at a garage entrance',
    width: 1672,
    height: 941,
  },
];

export const CHEAT_MENU_SCREENSHOT_SLIDES: ProductSlide[] = [visualsMenu, aimbotMenu, miscMenu];
