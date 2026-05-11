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
  icon: string;
  logo: string;
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
    icon: '/assets/icon-academy.svg?v=3',
    logo: '/assets/logo-academy.svg',
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
    icon: '/assets/icon-sustain.svg',
    logo: '/assets/logo-sustain.svg',
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
    icon: '/assets/icon-innovation.svg',
    logo: '/assets/logo-innovation.svg',
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
    icon: '/assets/icon-systems.svg',
    logo: '/assets/logo-systems.svg',
  },
];
