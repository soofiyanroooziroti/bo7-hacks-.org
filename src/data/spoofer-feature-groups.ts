import type { ProductFeatureGroup } from './product-types';

function spooferFeature(name: string, desc: string): ProductFeatureGroup {
  return { name, items: [{ name, desc }] };
}

/** Matches catalog card bullets — no extra modules beyond the store lineup. */
export const SPOOFER_FEATURE_GROUPS: ProductFeatureGroup[] = [
  spooferFeature(
    'Hardware spoofer + cleaner',
    'Spoofer pass plus cleaner before you sign into Black Ops 7 on this PC.',
  ),
  spooferFeature(
    'Compatibility scan',
    'Checks Windows build, drivers, and security settings first.',
  ),
  spooferFeature(
    'Verification steps',
    'Reboot if needed, confirm green steps, then test a spare account.',
  ),
  spooferFeature(
    'Portal workflow',
    'Each on-screen step follows the portal order.',
  ),
];