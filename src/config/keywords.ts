/** Primary keyword per core URL (null = no dedicated keyword). Value may be an array when multiple phrases belong to one page. */
export const PAGE_KEYWORDS: Record<string, string | string[] | null> = {
  '/': 'bo7 hacks',
  '/products/': 'bo7 hacks price',
  '/product/bo7-hack/': 'black ops 7 hacks',
  '/product/spoofer/': ['call of duty spoof', 'black ops 7 hwid spoofer'],
  '/product/ugc/': 'black ops 7 unban tool',
  '/blog/': null,
  '/forum/': null,
  '/faq/': null,
  '/support/': null,
  '/about/': null,
  '/privacy/': null,
  '/terms/': null,
  '/status/': null,
};

/** noindex routes — not in the indexable keyword map; overlap with home primaries is fine. */
export const NOINDEX_CANNIBALISM_SKIP = new Set(['/404/']);

export const PRODUCT_H1: Record<string, string> = {
  'bo7-hack': 'Black Ops 7 Hacks',
  spoofer: 'Call of Duty Spoof and Black Ops 7 HWID Spoofer',
  ugc: 'Black Ops 7 Unban Tool',
};

export const PRODUCT_PAGE_KEYWORDS: Record<string, string | string[]> = {
  'bo7-hack': 'black ops 7 hacks',
  spoofer: ['call of duty spoof', 'black ops 7 hwid spoofer'],
  ugc: 'black ops 7 unban tool',
};

export function primaryKeywords(): string[] {
  const out: string[] = [];
  for (const value of Object.values(PAGE_KEYWORDS)) {
    if (!value) continue;
    if (Array.isArray(value)) out.push(...value);
    else out.push(value);
  }
  return out;
}

export function keywordsForPath(pathname: string): string[] {
  const entry = PAGE_KEYWORDS[pathname];
  if (!entry) return [];
  return Array.isArray(entry) ? entry : [entry];
}
