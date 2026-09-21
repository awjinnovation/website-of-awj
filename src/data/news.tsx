import { DICT, type Lang, type TranslationKey } from '../i18n/dict';

/**
 * Stories live in the CMS and arrive through `useNews` in ./news-api.
 * This module keeps the shared type, the cover styles and the bilingual
 * helpers.
 */

export type NewsCategory =
  | 'Healthcare'
  | 'Digital Transformation'
  | 'Social Responsibility'
  | 'Logistics'
  | 'Aviation'
  | 'Training'
  | 'Digital Economy'
  | 'Urban Development';

export type NewsItem = {
  id: string;
  category: NewsCategory;
  title: string;
  /** Item 31: approved Arabic headline, where one exists. */
  titleAr?: string;
  date: string;
  dateLabel: string;
  pillar: string;
  dek: string;
  /** Arabic dek, where one exists. */
  dekAr?: string;
  featured: boolean;
  body: string[];
  /** Approved Arabic body, where one exists; paragraphs mirror `body`. */
  bodyAr?: string[];
  image: string;
  /** Social-share crop of the cover, from the CMS. */
  imageOg?: string;
  imageAlt?: string;
  imageAltAr?: string;
  metaDescription?: string;
  metaDescriptionAr?: string;
  publishedAt?: string;
};

type CategoryStyle = { ink: string; a: string; b: string; accent: string };

export const CATEGORY_STYLES: Record<NewsCategory, CategoryStyle> = {
  Healthcare: { ink: '#0d3a4a', a: '#0d3a4a', b: '#127a7a', accent: '#f5e6c5' },
  'Digital Transformation': { ink: '#1a1f3a', a: '#1a1f3a', b: '#3a4a8e', accent: '#9aa8d8' },
  'Social Responsibility': { ink: '#2a3d2a', a: '#2a3d2a', b: '#557a4a', accent: '#dde9c0' },
  Logistics: { ink: '#2a2a2a', a: '#2a2a2a', b: '#4a4a52', accent: '#ee6c11' },
  Aviation: { ink: '#0a1f3a', a: '#0a1f3a', b: '#1a4a7a', accent: '#f8a661' },
  Training: { ink: '#3a2a18', a: '#3a2a18', b: '#7a5a3a', accent: '#fac99e' },
  'Digital Economy': { ink: '#1a1a1a', a: '#1a1a1a', b: '#3a3a3a', accent: '#ee6c11' },
  'Urban Development': { ink: '#2a3a4a', a: '#2a3a4a', b: '#5a7a9a', accent: '#fde0ca' },
};

type CoverProps = { category: NewsCategory };

export const NewsCover = ({ category }: CoverProps) => {
  const s = CATEGORY_STYLES[category] ?? CATEGORY_STYLES['Digital Transformation'];
  const W = 1600;
  const H = 1000;
  const key = category.replace(/\s/g, '');

  const renderArt = () => {
    switch (category) {
      case 'Healthcare':
        return (
          <g>
            <path
              d="M0 600 L300 600 L360 380 L420 820 L500 600 L900 600 L960 460 L1020 720 L1100 600 L1600 600"
              stroke={s.accent}
              strokeWidth="6"
              fill="none"
              opacity="0.85"
            />
            <path
              d="M0 700 L400 700 L460 540 L520 860 L600 700 L1600 700"
              stroke="#fff"
              strokeWidth="2"
              fill="none"
              opacity="0.35"
            />
            <g transform="translate(1200, 280)">
              <rect x="-20" y="-90" width="40" height="180" fill={s.accent} opacity="0.9" />
              <rect x="-90" y="-20" width="180" height="40" fill={s.accent} opacity="0.9" />
              <circle r="160" fill="none" stroke={s.accent} strokeWidth="2" opacity="0.4" />
              <circle r="220" fill="none" stroke={s.accent} strokeWidth="1" opacity="0.25" />
            </g>
          </g>
        );
      case 'Digital Transformation':
        return (
          <g>
            <g stroke={s.accent} strokeWidth="0.6" opacity="0.4">
              {Array.from({ length: 11 }).map((_, i) => (
                <line key={`h${i}`} x1="0" y1={i * 100} x2={W} y2={i * 100} />
              ))}
              {Array.from({ length: 17 }).map((_, i) => (
                <line key={`v${i}`} x1={i * 100} y1="0" x2={i * 100} y2={H} />
              ))}
            </g>
            <g transform="translate(800, 500)" fill="none" stroke={s.accent} strokeWidth="2">
              <circle r="280" opacity="0.6" />
              <ellipse rx="280" ry="100" opacity="0.5" />
              <ellipse rx="280" ry="180" opacity="0.4" />
              <ellipse rx="100" ry="280" opacity="0.5" />
              <ellipse rx="180" ry="280" opacity="0.4" />
              <line x1="-280" y1="0" x2="280" y2="0" opacity="0.7" />
            </g>
            {[
              [200, 200],
              [1400, 300],
              [1300, 800],
              [300, 750],
              [1100, 150],
            ].map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r="8" fill={s.accent} />
            ))}
          </g>
        );
      case 'Social Responsibility':
        return (
          <g>
            <g fill="none" stroke={s.accent} strokeWidth="3" opacity="0.7">
              <circle cx="500" cy="500" r="240" />
              <circle cx="800" cy="500" r="240" />
              <circle cx="1100" cy="500" r="240" />
              <circle cx="650" cy="280" r="240" opacity="0.5" />
              <circle cx="950" cy="280" r="240" opacity="0.5" />
              <circle cx="650" cy="720" r="240" opacity="0.5" />
              <circle cx="950" cy="720" r="240" opacity="0.5" />
            </g>
            <g fill={s.accent} opacity="0.85">
              <circle cx="500" cy="500" r="14" />
              <circle cx="800" cy="500" r="14" />
              <circle cx="1100" cy="500" r="14" />
            </g>
          </g>
        );
      case 'Logistics':
        return (
          <g>
            <g transform="translate(900, 400)">
              {[0, 1, 2].map((row) =>
                [0, 1, 2, 3].map((col) => {
                  const x = col * 120 - row * 60;
                  const y = row * 70;
                  return (
                    <g key={`${row}-${col}`} transform={`translate(${x}, ${y})`}>
                      <path
                        d="M0 0 L120 0 L180 -40 L60 -40 Z"
                        fill={col % 2 ? s.accent : '#fff'}
                        opacity={0.85 - row * 0.15}
                      />
                      <path
                        d="M0 0 L0 120 L120 120 L120 0 Z"
                        fill={col % 2 ? '#fff' : s.accent}
                        opacity={0.65 - row * 0.15}
                      />
                      <path
                        d="M120 0 L180 -40 L180 80 L120 120 Z"
                        fill="#000"
                        opacity="0.25"
                      />
                    </g>
                  );
                }),
              )}
            </g>
            <g stroke={s.accent} strokeWidth="3" fill="none" opacity="0.6">
              <path d="M100 200 L600 200" markerEnd="url(#arr)" />
              <path d="M100 800 L600 800" markerEnd="url(#arr)" />
            </g>
            <defs>
              <marker
                id="arr"
                viewBox="0 0 10 10"
                refX="9"
                refY="5"
                markerWidth="8"
                markerHeight="8"
                orient="auto"
              >
                <path d="M0 0 L10 5 L0 10 Z" fill={s.accent} />
              </marker>
            </defs>
          </g>
        );
      case 'Aviation':
        return (
          <g>
            <g>
              <path d="M0 1000 L600 400 L1000 400 L1600 1000 Z" fill="#fff" opacity="0.06" />
              {Array.from({ length: 6 }).map((_, i) => {
                const t = i / 6;
                const w = 30 - t * 24;
                const cx = 800;
                const cy = 1000 - t * 600;
                return (
                  <rect
                    key={i}
                    x={cx - w / 2}
                    y={cy - (60 - t * 48)}
                    width={w}
                    height={40 - t * 32}
                    fill={s.accent}
                    opacity={0.85 - t * 0.4}
                  />
                );
              })}
            </g>
            <g fill="none" stroke={s.accent} strokeWidth="1.5" opacity="0.5">
              <path d="M0 400 Q800 340 1600 400" />
              <path d="M0 380 Q800 300 1600 380" opacity="0.4" />
              <path d="M0 360 Q800 260 1600 360" opacity="0.3" />
            </g>
            <g transform="translate(1200, 280) rotate(-20)" fill={s.accent} opacity="0.95">
              <path d="M0 0 L120 -10 L180 -8 L200 -4 L210 0 L200 4 L180 8 L120 10 L40 22 L20 22 L40 10 L0 8 L-30 22 L-40 22 L-25 8 L-30 0 L-25 -8 L-40 -22 L-30 -22 L0 -8 Z" />
            </g>
          </g>
        );
      case 'Training':
        return (
          <g>
            {[0, 1, 2, 3, 4].map((i) => (
              <path
                key={i}
                d={`M${100 + i * 200} 200 L${300 + i * 200} 500 L${100 + i * 200} 800`}
                fill="none"
                stroke={s.accent}
                strokeWidth="6"
                opacity={0.3 + i * 0.15}
              />
            ))}
            <g fill={s.accent} opacity="0.85">
              {[300, 600, 900, 1200].map((x, i) => (
                <g key={i} transform={`translate(${x}, 550)`}>
                  <circle cx="0" cy="-30" r="22" />
                  <path d="M-32 50 Q-32 0 0 0 Q32 0 32 50 Z" />
                </g>
              ))}
            </g>
          </g>
        );
      case 'Digital Economy':
        return (
          <g>
            <g stroke={s.accent} strokeWidth="1.2" opacity="0.7">
              <line x1="300" y1="300" x2="800" y2="500" />
              <line x1="800" y1="500" x2="1300" y2="280" />
              <line x1="800" y1="500" x2="1200" y2="780" />
              <line x1="800" y1="500" x2="400" y2="800" />
              <line x1="300" y1="300" x2="400" y2="800" />
              <line x1="1300" y1="280" x2="1200" y2="780" />
              <line x1="600" y1="200" x2="800" y2="500" />
              <line x1="1000" y1="900" x2="800" y2="500" />
            </g>
            <g>
              <circle cx="800" cy="500" r="36" fill={s.accent} />
              <circle cx="800" cy="500" r="60" fill="none" stroke={s.accent} strokeWidth="2" opacity="0.4" />
              <circle cx="800" cy="500" r="100" fill="none" stroke={s.accent} strokeWidth="1" opacity="0.25" />
              {[
                [300, 300],
                [1300, 280],
                [1200, 780],
                [400, 800],
                [600, 200],
                [1000, 900],
              ].map(([x, y], i) => (
                <g key={i}>
                  <circle cx={x} cy={y} r="18" fill="#fff" opacity="0.9" />
                  <circle cx={x} cy={y} r="8" fill={s.accent} />
                </g>
              ))}
            </g>
          </g>
        );
      case 'Urban Development':
        return (
          <g>
            <g transform="translate(400, 200)">
              {(
                [
                  [0, 0, 180, 1],
                  [200, 0, 140, 0.85],
                  [360, 0, 220, 0.7],
                  [0, 200, 260, 0.9],
                  [280, 200, 180, 1],
                  [480, 200, 140, 0.8],
                  [0, 420, 180, 0.75],
                  [200, 420, 260, 0.95],
                ] as [number, number, number, number][]
              ).map(([x, y, h, o], i) => (
                <g key={i} transform={`translate(${x}, ${y})`}>
                  <path
                    d={`M0 ${-h} L120 ${-h - 40} L240 ${-h} L120 ${-h + 40} Z`}
                    fill={s.accent}
                    opacity={o}
                  />
                  <path
                    d={`M0 ${-h} L120 ${-h + 40} L120 40 L0 0 Z`}
                    fill="#fff"
                    opacity={o * 0.7}
                  />
                  <path
                    d={`M240 ${-h} L120 ${-h + 40} L120 40 L240 0 Z`}
                    fill="#000"
                    opacity={0.35}
                  />
                  {Array.from({ length: Math.floor(h / 40) }).map((_, w) => (
                    <rect
                      key={w}
                      x="20"
                      y={-h + 30 + w * 40}
                      width="20"
                      height="14"
                      fill="#fff"
                      opacity={o * 0.5}
                    />
                  ))}
                </g>
              ))}
            </g>
          </g>
        );
      default:
        return <g />;
    }
  };

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid slice"
      className="news-cover-svg"
    >
      <defs>
        <linearGradient id={`bg-${key}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={s.a} />
          <stop offset="100%" stopColor={s.b} />
        </linearGradient>
        <pattern id={`grain-${key}`} width="3" height="3" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.4" fill="#fff" opacity="0.05" />
        </pattern>
      </defs>
      <rect width={W} height={H} fill={`url(#bg-${key})`} />
      <rect width={W} height={H} fill={`url(#grain-${key})`} />
      {renderArt()}
    </svg>
  );
};

// ---- Arabic presentation (see content notes 30-34) ----------------------

/** Item 32: the first five are approved Arabic; the last three were added on request. */
const CATEGORY_AR: Partial<Record<NewsCategory, string>> = {
  'Healthcare': 'الصحّة',
  'Digital Transformation': 'التحوّل الرقمي',
  'Social Responsibility': 'المسؤولية الاجتماعية',
  'Logistics': 'اللوجستيات',
  'Aviation': 'الطيران',
  'Training': 'التدريب',
  'Digital Economy': 'الاقتصاد الرقمي',
  'Urban Development': 'التنمية العمرانية',
};

const PILLAR_KEY: Record<string, TranslationKey> = {
  'AWJ Innovation': 'pillar.innovation.fullName',
  'AWJ Academy': 'pillar.academy.fullName',
};

const AR_MONTHS = [
  'يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو',
  'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر',
];

export const newsTitle = (n: NewsItem, lang: Lang) =>
  (lang === 'ar' && n.titleAr) || n.title;

export const newsDek = (n: NewsItem, lang: Lang) =>
  (lang === 'ar' && n.dekAr) || n.dek;

export const newsBody = (n: NewsItem, lang: Lang) =>
  (lang === 'ar' && n.bodyAr) || n.body;

export const newsCategory = (c: NewsCategory, lang: Lang) =>
  (lang === 'ar' && CATEGORY_AR[c]) || c;

export const newsPillar = (p: string, lang: Lang) =>
  (lang === 'ar' && PILLAR_KEY[p] && DICT.ar[PILLAR_KEY[p]]) || p;

/** Item 30: derived from the ISO `date` so every article is covered, not just the listed five. */
export const newsDate = (n: NewsItem, lang: Lang) => {
  if (lang !== 'ar') return n.dateLabel;
  const [y, m, day] = n.date.split('-').map(Number);
  return `${day} ${AR_MONTHS[m - 1]} ${y}`;
};
