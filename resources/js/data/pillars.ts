export const PILLAR_IDS = ['academy', 'sustain', 'innovation', 'systems'] as const;
export type PillarId = (typeof PILLAR_IDS)[number];
export const isPillarId = (v: string): v is PillarId =>
  (PILLAR_IDS as readonly string[]).includes(v);

export type Pillar = {
  id: PillarId;
  name: string;
  accent: string;
  accent2: string;
  deep: string;
  desc: string;
  blurb: string;
  /** ~30-char tagline used in the nav mega-panel cards. */
  tagline: string;
  /** Pillar mark only (3-color icon). */
  icon: string;
  /** Horizontal lockup (icon + AWJ + pillar name). Light backgrounds. */
  logo: string;
  /** Vertical lockup (icon above text). */
  logoV: string;
  /** Watermark asset 1 (decorative, full opacity on light bg). */
  asset1: string;
  /** Watermark asset 2 (decorative). */
  asset2: string;
};

export const PILLARS: Pillar[] = [
  {
    id: 'academy',
    name: 'Academy',
    accent: 'var(--academy)',
    accent2: 'var(--academy-2)',
    deep: 'var(--academy-deep)',
    desc: 'Knowledge, training, and capability building for the next generation of leaders.',
    blurb: 'Education partnerships, accredited programs, and executive learning across disciplines.',
    tagline: 'Capability building & learning',
    icon: '/assets/brand/awj-academy-icon.svg',
    logo: '/assets/brand/awj-academy-logo-h.svg',
    logoV: '/assets/brand/awj-academy-logo-v.svg',
    asset1: '/assets/brand/awj-academy-asset-1.svg',
    asset2: '/assets/brand/awj-academy-asset-2.svg',
  },
  {
    id: 'sustain',
    name: 'Sustain',
    accent: 'var(--sustain)',
    accent2: 'var(--sustain-2)',
    deep: 'var(--sustain-deep)',
    desc: 'Environmental stewardship, ESG strategy, and regenerative infrastructure.',
    blurb: 'Climate-positive solutions, carbon advisory, and sustainable supply chains.',
    tagline: 'Climate & ESG advisory',
    icon: '/assets/brand/awj-sustain-icon.svg',
    logo: '/assets/brand/awj-sustain-logo-h.svg',
    logoV: '/assets/brand/awj-sustain-logo-v.svg',
    asset1: '/assets/brand/awj-sustain-asset-1.svg',
    asset2: '/assets/brand/awj-sustain-asset-2.svg',
  },
  {
    id: 'innovation',
    name: 'Innovation',
    accent: 'var(--innovation)',
    accent2: 'var(--innovation-2)',
    deep: 'var(--innovation-deep)',
    desc: 'Venture building, R&D, and emerging technology incubated for real-world impact.',
    blurb: 'Innovation labs, applied AI, deeptech ventures, and cross-sector partnerships.',
    tagline: 'Ventures, R&D & applied tech',
    icon: '/assets/brand/awj-innovation-icon.svg',
    logo: '/assets/brand/awj-innovation-logo-h.svg',
    logoV: '/assets/brand/awj-innovation-logo-v.svg',
    asset1: '/assets/brand/awj-innovation-asset-1.svg',
    asset2: '/assets/brand/awj-innovation-asset-2.svg',
  },
  {
    id: 'systems',
    name: 'Systems',
    accent: 'var(--systems)',
    accent2: 'var(--systems-2)',
    deep: 'var(--systems-deep)',
    desc: 'Engineering, integration, and large-scale infrastructure delivery.',
    blurb: 'Smart infrastructure, systems integration, mission-critical engineering.',
    tagline: 'Engineering & integration',
    icon: '/assets/brand/awj-systems-icon.svg',
    logo: '/assets/brand/awj-systems-logo-h.svg',
    logoV: '/assets/brand/awj-systems-logo-v.svg',
    asset1: '/assets/brand/awj-systems-asset-1.svg',
    asset2: '/assets/brand/awj-systems-asset-2.svg',
  },
];

/** Corporate brand assets (not pillar-specific). */
export const AWJ_BRAND = {
  logo: '/assets/brand/awj-logo.svg',      // horizontal lockup
  logoV: '/assets/brand/awj-logo-v.svg',   // vertical lockup
  icon: '/assets/brand/awj-icon.svg',      // mark only
  asset1: '/assets/brand/awj-asset-1.svg',
  asset2: '/assets/brand/awj-asset-2.svg',
} as const;
