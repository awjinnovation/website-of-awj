import type { PillarId } from './pillars';

/**
 * Client and partner logo walls for the pillar pages.
 *
 * Source of truth is the supplied "Partners and clients logos" drop, which is
 * organised one folder per pillar per relationship. The files were copied to
 * /assets/partners/<pillar>/, trimmed of their baked-in dead margin so every
 * mark fills its plate consistently, then downscaled and re-optimised. The
 * artwork itself is otherwise untouched.
 *
 * The section renders logos only, no text, so this list is shared verbatim by
 * the EN and AR pages. `name` is the accessible label (alt + tooltip) and is
 * never displayed, so no translation is involved.
 */
export type OrgLogo = {
  /** Organisation name, used for alt text and the hover tooltip. */
  name: string;
  /** Absolute path under /public. */
  src: string;
  /** Optional website; when set the logo card links to it in a new tab. */
  url?: string;
};

export type PillarOrgs = {
  clients?: OrgLogo[];
  partners?: OrgLogo[];
};

export const PILLAR_ORGS: Record<PillarId, PillarOrgs> = {
  academy: {
    partners: [
      {
        name: 'International Science Council',
        src: '/assets/partners/academy/international-science-council.jpeg',
      },
      {
        name: 'Oxford Oracle',
        src: '/assets/partners/academy/oxford-oracle.png',
      },
      {
        name: 'edX',
        src: '/assets/partners/academy/edx.png',
      },
      {
        // The supplied file was labelled "World Science Council", but the
        // artwork is the INGSA mark; filed and labelled under its real name.
        name: 'International Network for Government Science Advice (INGSA)',
        src: '/assets/partners/academy/ingsa.webp',
      },
    ],
  },

  innovation: {
    clients: [
      {
        name: 'Riyada (SME Development Authority)',
        src: '/assets/partners/innovation/riyada.png',
      },
      {
        name: 'Ministry of Labour',
        src: '/assets/partners/innovation/mol.png',
      },
      {
        name: 'Ministry of Foreign Affairs',
        src: '/assets/partners/innovation/foreign-ministry.png',
      },
      {
        name: 'Ministry of Housing and Urban Planning',
        src: '/assets/partners/innovation/moh.jpg',
      },
      {
        name: 'Ministry of Transport, Communications and Information Technology',
        src: '/assets/partners/innovation/mtcit.png',
      },
      {
        name: 'Office of the Governor of North Al Batinah',
        src: '/assets/partners/innovation/al-batinah-north-governorate.png',
      },
      { name: 'Asyad', src: '/assets/partners/innovation/asyad.webp' },
      {
        name: 'Oman Airports',
        src: '/assets/partners/innovation/oman-airports.webp',
      },
    ],
    partners: [
      {
        name: 'German University of Technology (GUtech)',
        src: '/assets/partners/innovation/gutech.png',
      },
      {
        name: 'Occidental Oman',
        src: '/assets/partners/innovation/oxy-zero-in.png',
      },
      {
        name: 'edX',
        src: '/assets/partners/innovation/edx.png',
      },
    ],
  },

  sustain: {
    clients: [
      { name: 'Abraj Energy Services', src: '/assets/partners/sustain/abraj.jpg' },
      {
        name: 'German University of Technology (GUtech)',
        src: '/assets/partners/sustain/gutech.png',
      },
      { name: 'Ministry of Social Development', src: '/assets/partners/sustain/mosd.png' },
    ],
    partners: [
      {
        name: 'CSR Company International',
        src: '/assets/partners/sustain/csr-company.png',
        url: 'https://www.csr-company.com/',
      },
      {
        name: 'Movesion',
        src: '/assets/partners/sustain/movesion.png',
        url: 'https://www.movesion.com/',
      },
      {
        name: 'APMG International',
        src: '/assets/partners/sustain/apmg.png',
        url: 'https://apmg-international.com/',
      },
      {
        name: 'Swiss Academy for Leadership and Sustainability',
        src: '/assets/partners/sustain/sals.png',
        url: 'https://sals.academy/',
      },
    ],
  },

  systems: {
    clients: [
      {
        name: 'Ministry of Transport, Communications and Information Technology',
        src: '/assets/partners/systems/mtcit.jpg',
      },
      {
        name: 'Ministry of Social Development',
        src: '/assets/partners/systems/mosd.png',
      },
      {
        name: 'National Center for Statistics and Information',
        src: '/assets/partners/systems/ncsi.png',
      },
      {
        name: 'North Al Batinah Governorate',
        src: '/assets/partners/systems/al-batinah-north-governorate.png',
      },
    ],
    partners: [
      {
        name: 'Ankaa Space & Technologies',
        src: '/assets/partners/systems/ankaa.jpg',
      },
      {
        name: 'Nashid',
        src: '/assets/partners/systems/nashid.png',
      },
    ],
  },
};
