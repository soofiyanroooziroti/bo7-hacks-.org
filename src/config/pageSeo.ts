export interface PageSeoEntry {
  title: string;
  description: string;
}

export const PAGE_SEO: Record<string, PageSeoEntry> = {
  "/": {
    "title": "BO7 Hacks for Windows PC | Black Ops 7 Features & Plans",
    "description": "Explore BO7 Hacks for Black Ops 7 on Windows PC. Compare eight gameplay features, monthly and lifetime plans, hardware tools, and Discord support."
  },
  "/products/": {
    "title": "BO7 Hacks Price | Compare Windows PC Product Plans",
    "description": "Compare BO7 Hacks price options for the Windows PC loader, HWID spoofer and unban tool. Review monthly and lifetime USD plans before checkout today."
  },
  "/product/bo7-hack/": {
    "title": "Black Ops 7 Hacks | Eight Features and Windows PC Plans",
    "description": "Explore Black Ops 7 hacks with Aimbot, ESP, Wallhack, Radar, Triggerbot, No recoil control, Speed and Stream-proof. Compare monthly and lifetime plans."
  },
  "/product/spoofer/": {
    "title": "Call of Duty Spoof | Black Ops 7 HWID Spoofer Plans",
    "description": "Review Call of Duty spoof and Black Ops 7 HWID spoofer plans for Windows PC. Read hardware limitations, requirements and setup guidance before checkout."
  },
  "/product/ugc/": {
    "title": "Black Ops 7 Unban Tool | BO7 Unban Workflow and Plans",
    "description": "Explore the Black Ops 7 unban tool for Windows PC. Review BO7 unban appeal organization, evidence checklists, limitations and monthly or lifetime plans."
  },
  "/blog/": {
    "title": "Black Ops 7 Guides | Features, PC Setup and RICOCHET",
    "description": "Read Black Ops 7 guides covering the eight listed features, Windows PC setup, RICOCHET, hardware restrictions and account appeals before choosing a plan."
  },
  "/forum/": {
    "title": "BO7 Hacks Forum: Discussions, Feature Questions and Guides",
    "description": "Browse example Black Ops 7 discussions about Aimbot, ESP, Radar and other features. Read sample replies and follow linked guides for PC product questions."
  },
  "/faq/": {
    "title": "Black Ops 7 FAQ | Plans, Windows Setup and RICOCHET",
    "description": "FAQ: answers on Windows PC requirements, Black Ops 7 features, RICOCHET, checkout, license plans and the three products."
  },
  "/support/": {
    "title": "Black Ops 7 Support | Checkout and Windows PC Help",
    "description": "Get Black Ops 7 product support through Discord. Prepare your order details, Windows version and exact loader message for checkout and setup questions."
  },
  "/about/": {
    "title": "About BO7 Hacks: Black Ops 7 Products for Windows PC",
    "description": "Learn about BO7 Hacks, its Black Ops 7 Windows PC products, checkout options, digital delivery, Discord support and the account risks before purchase."
  },
  "/privacy/": {
    "title": "Privacy Policy | BO7 Hacks Analytics and Checkout Data",
    "description": "Read how BO7 Hacks handles analytics, cookies and contact information. Learn which details stay with the checkout provider when you purchase a PC product."
  },
  "/terms/": {
    "title": "Terms of Use | BO7 Hacks Licenses and Purchase Terms",
    "description": "Review BO7 Hacks license terms, acceptable use, checkout delivery and refund conditions for the Windows PC loader, HWID spoofer and unban tool products."
  },
  "/status/": {
    "title": "Black Ops 7 Status | Current PC Build and Patch Notes",
    "description": "Check the current Black Ops 7 PC build, Ready or Updating status, recent game patches and Windows requirements before launching after a RICOCHET update."
  }
};

export function normalizeSeoPath(pathname: string): string {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  return path;
}

export function getPageSeoEntry(pathname: string): PageSeoEntry | undefined {
  return PAGE_SEO[normalizeSeoPath(pathname)];
}