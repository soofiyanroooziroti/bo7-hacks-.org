import type { AcquisitionStep, ProductSlide, SystemRequirement } from './product-types';
import type { Block } from './product-locale-types';
import { BLACK_OPS_7_FEATURE_GROUPS } from './black-ops-7-feature-groups';
import { SPOOFER_FEATURE_GROUPS } from './spoofer-feature-groups';
import { UGC_FEATURE_GROUPS } from './ugc-feature-groups';
import { CHEAT_MENU_SCREENSHOT_SLIDES, HOME_HERO_MENU_SLIDES } from './menu-gallery-images';

export { CHEAT_MENU_SCREENSHOT_SLIDES } from './menu-gallery-images';

/** Home hero menu + gameplay gallery. */
export const cheatHomeHeroSlides: ProductSlide[] = [...HOME_HERO_MENU_SLIDES];

const spooferSlides: ProductSlide[] = [
  {
    src: '/images/products/hwid-spoofer-hero.webp',
    alt: 'Black Ops 7 HWID spoofer on Windows PC',
    caption: 'HWID spoofer',
    captionDesc: 'Hardware fingerprint tools before you relaunch Black Ops 7.',
  },
  {
    src: '/images/products/hwid-spoofer-board.webp',
    alt: 'Black Ops 7 HWID spoofer hardware fingerprint rotation on Windows PC',
    caption: 'Phoenix board',
    captionDesc: 'Disk, MAC, and GPU ID rotation.',
  },
  {
    src: '/images/products/hwid-spoofer-brand.webp',
    alt: 'Black Ops 7 HWID spoofer branding on Windows PC',
    caption: 'Phoenix WH',
    captionDesc: 'Spoofer workspace used on every store.',
  },
];

const ugcSlides: ProductSlide[] = [
  {
    src: '/images/products/ugc-account-recovery.webp',
    alt: 'BO7 unban tool — account recovery workspace on Windows PC',
    caption: 'Unban tool',
    captionDesc: 'Appeal templates and recovery steps for restricted Black Ops 7 accounts.',
  },
];

export const acquisitionSteps: AcquisitionStep[] = [
  {
    num: '01',
    title: 'Check status',
    desc: 'Confirm modules are online on bo7hacks.org before you buy—especially after an Black Ops 7 or RICOCHET update.',
  },
  {
    num: '02',
    title: 'Pick a plan',
    desc: 'Choose monthly or lifetime—same USD pricing on every product in the lineup.',
  },
  {
    num: '03',
    title: 'Secure checkout',
    desc: 'Complete checkout on the portal. Your license unlocks with instant delivery.',
  },
  {
    num: '04',
    title: 'Install & verify',
    desc: 'Follow the setup guide, load a conservative preset, and test in a low-stakes mode before main play.',
  },
];

export const utilitySlides = {
  spoofer: spooferSlides,
  ugc: ugcSlides,
} as const;

export const cheatsContent = {
  images: [] as ProductSlide[],
  goodToKnow:
    'Black Ops 7 and RICOCHET update often. Confirm availability on bo7hacks.org before you launch. Menu behavior may differ in multiplayer or Zombies after patches.',
  limitations:
    'Third-party software can violate game terms and lead to bans. You use this software at your own risk. Compatibility can change after game, RICOCHET, or Windows updates without notice.',
  systemRequirements: [
    { icon: 'reqWindows', text: 'Windows 10/11' },
    { icon: 'reqCpu', text: 'Intel/AMD' },
    { icon: 'reqShieldGuide', text: 'HVCI ON' },
    { icon: 'reqSettings', text: 'CORE ISOLATION ON' },
    { icon: 'shieldCheck', text: 'TPM ON' },
    { icon: 'reqShieldAccount', text: 'SECURE BOOT ON' },
  ] as SystemRequirement[],
  featureGroups: BLACK_OPS_7_FEATURE_GROUPS,
  overview: {
    title: 'Black Ops 7 hacks for Windows PC',
    paragraphs: [
      'Black Ops 7 hacks for Windows PC with Aimbot, ESP, Triggerbot, recoil control, Wallhack, Radar, Speed, and Stream-proof options.',
      'Always check availability on bo7hacks.org before you launch, especially after an RICOCHET or Black Ops 7 client patch.',
    ],
  },
  body: [
    { type: 'h2', text: 'Modules included' },
    {
      type: 'p',
      text: 'The package includes Aimbot, ESP, Wallhack, Radar, Triggerbot, No recoil control, Speed, and Stream-proof.',
    },
    { type: 'h2', text: 'Plans' },
    {
      type: 'p',
      text: 'Monthly $35 USD (P30D) or lifetime $150 USD (P99Y). Instant digital delivery worldwide after checkout.',
    },
  ] as Block[],
};

export const spooferContent = {
  images: [...utilitySlides.spoofer],
  goodToKnow:
    'HWID tools change how your PC fingerprint appears—they do not remove account bans by themselves. Follow portal guides before launching Black Ops 7 again.',
  limitations:
    'Spoofing carries technical risk and may violate game terms. Results vary by ban type and driver setup. Use only on systems you own.',
  systemRequirements: [
    { icon: 'reqWindows', text: 'Windows 10 or 11 64-bit with administrator rights.' },
    { icon: 'reqRestorePoint', text: 'Create a restore point before running hardware tools.' },
    { icon: 'reqWifi', text: 'Stable internet for activation and verification steps.' },
  ] as SystemRequirement[],
  fullFeatures: SPOOFER_FEATURE_GROUPS.flatMap((group) => group.items.map((item) => item.name)),
  featureGroups: SPOOFER_FEATURE_GROUPS,
  overview: {
    title: 'Call of Duty spoof and Black Ops 7 HWID spoofer',
    paragraphs: [
      'Call of Duty spoof and Black Ops 7 HWID spoofer focuses on hardware profile rotation when you need a clean machine context before relaunching Black Ops 7 after a hardware flag.',
      'Monthly and lifetime USD plans use the same checkout flow as the rest of the lineup.',
    ],
  },
  body: [
    { type: 'h2', text: 'When to use it' },
    {
      type: 'p',
      text: 'Use when fresh accounts fail on one PC but work elsewhere—not for account-only bans. Pair with conservative cheat presets after verification.',
    },
    { type: 'h2', text: 'Plans' },
    { type: 'p', text: 'Monthly $50 USD (P30D) or lifetime $150 USD (P99Y).' },
  ] as Block[],
};

export const ugcContent = {
  images: [...utilitySlides.ugc],
  goodToKnow:
    'Gather order details, account facts, and restriction screenshots before opening a ticket. BO7 unban tool structures appeals—it does not bypass platform review.',
  limitations:
    'BO7 unban workflows do not guarantee account restoration. Results vary by case type and platform policy.',
  systemRequirements: [
    { icon: 'reqWindows', text: 'Windows 10 or 11 (64-bit).' },
    { icon: 'reqWifi', text: 'Internet access for workflow sync and updates.' },
    { icon: 'reqSettings', text: 'Administrator access for installation.' },
  ] as SystemRequirement[],
  fullFeatures: UGC_FEATURE_GROUPS.map((g) => g.name),
  featureGroups: UGC_FEATURE_GROUPS,
  overview: {
    title: 'BO7 unban tool workspace',
    paragraphs: [
      'BO7 unban tool helps organize ban appeals and recovery cases with templates, evidence lists, and follow-up reminders.',
      'Instant digital delivery after secure checkout, with Discord support for setup questions.',
    ],
  },
  body: [
    { type: 'h2', text: 'BO7 unban appeals' },
    {
      type: 'p',
      text: 'Build custom BO7 unban appeal paths, automate dispute steps, and track case status when Black Ops 7 accounts are locked or restricted.',
    },
    { type: 'h2', text: 'BO7 unban evidence' },
    {
      type: 'p',
      text: 'Use checklists so each BO7 unban packet includes screenshots, timestamps, and the policy section you are citing.',
    },
    { type: 'h2', text: 'Plans' },
    { type: 'p', text: 'Monthly $35 USD (P30D) or lifetime $150 USD (P99Y).' },
  ] as Block[],
};