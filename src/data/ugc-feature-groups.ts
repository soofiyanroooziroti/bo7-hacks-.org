import type { ProductFeatureGroup } from './product-types';

function ugcFeature(name: string, desc: string): ProductFeatureGroup {
  return { name, items: [{ name, desc }] };
}

/** Matches /products UGC card bullets. */
export const UGC_FEATURE_GROUPS: ProductFeatureGroup[] = [
  ugcFeature(
    'Windows 10 or 11 (64-bit) client',
    'Runs on the same Windows builds listed for the rest of the lineup.',
  ),
  ugcFeature(
    'Black Ops 7 account appeal workspace',
    'Organizes ban and restriction appeals for Black Ops 7 accounts.',
  ),
  ugcFeature(
    'Evidence checklists for restriction cases',
    'Checklists so each packet includes screenshots and timestamps.',
  ),
  ugcFeature(
    'Automation for repetitive steps',
    'Repeatable steps for multi-part appeals without retyping each field.',
  ),
  ugcFeature(
    'Restriction tracking dashboard',
    'Track case status and follow-ups in one workspace.',
  ),
  ugcFeature(
    'Secure portal delivery',
    'Instant digital delivery after checkout with portal access.',
  ),
];