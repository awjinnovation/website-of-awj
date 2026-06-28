import { useEffect, useState } from 'react';
import { useLang } from '../i18n/LangContext';

type Project = {
  name: string;
  stat: string;
  statLabel: string;
  partner: string;
  pillar: string;
  color: string;
  bgGrad: string;
  icon: string;
  size: 'p-big' | 'p-med' | 'p-sm';
  light?: boolean;
  image?: string;
  summary: string;
  impact: string;
  achievements: { value: string; label: string }[];
};

const PROJECTS: Project[] = [
  {
    name: 'First 3D Printed Building in the Middle East',
    stat: '60%',
    statLabel: 'Material waste reduced',
    partner: 'with GUtech',
    pillar: 'Sustain',
    color: 'var(--sustain)',
    bgGrad: 'linear-gradient(135deg, #00736f, #00a19d)',
    icon: '/assets/brand/awj-sustain-icon.svg',
    size: 'p-big',
    image: '/assets/brand/3d-building-card.png',
    summary:
      'AWJ Sustain supported the development of the first and largest 3D-printed building in the Middle East, demonstrating sustainable construction practices and advanced manufacturing technologies that minimize environmental impact.',
    impact:
      'The project reduced construction waste by 60%, demonstrated the use of sustainable and recyclable materials, and positioned Oman as a leader in sustainable construction innovation. This landmark achievement proved that advanced manufacturing can deliver both economic and environmental benefits.',
    achievements: [
      { value: '60%', label: 'Waste reduction' },
      { value: '100%', label: 'Recyclable materials' },
      { value: 'First in ME', label: 'Regional milestone' },
    ],
  },
  {
    name: '.nxt Jadeer National Program',
    stat: '6,600+',
    statLabel: 'Participants empowered',
    partner: '2,700+ employed',
    pillar: 'Innovation',
    color: 'var(--innovation)',
    bgGrad: 'linear-gradient(135deg, #a13418, #ee6c11)',
    icon: '/assets/brand/awj-innovation-icon.svg',
    size: 'p-med',
    image: '/assets/brand/jadeer-project-card.png',
    summary:
      'Since 2020, .nxt Jadeer has empowered over 6,600 participants across Oman through comprehensive training in emerging technologies, entrepreneurship, and professional development, preparing them for future opportunities.',
    impact:
      'Participants completed over 300,000 learning hours across 136 educational tracks, earning 100,000+ certificates. The program has contributed to employing 2,700+ participants and supporting the development of 2,000+ entrepreneurial ideas.',
    achievements: [
      { value: '6,600+', label: 'Participants' },
      { value: '2,700+', label: 'Employed' },
      { value: '20+', label: 'Startups established' },
    ],
  },
  {
    name: 'Oman AI Studio',
    stat: '18',
    statLabel: 'Government entities served',
    partner: '33+ AI solutions',
    pillar: 'Systems',
    color: 'var(--systems)',
    bgGrad: 'linear-gradient(135deg, #003c80, #0069c8)',
    icon: '/assets/brand/awj-systems-icon.svg',
    size: 'p-med',
    image: '/assets/brand/ai-studio-project-card.jpeg',
    summary:
      'The National Artificial Intelligence Studio, operated by AWJ Systems on behalf of the Ministry of Transport, Communications and Information Technology, is a center of excellence for AI-driven innovation and digital transformation.',
    impact:
      'The Studio has delivered 33+ AI solutions to 18 government entities, enabling institutional transformation and data-driven decision-making. The ecosystem includes 7 active startups and 20+ technology partners advancing AI adoption across the nation.',
    achievements: [
      { value: '18', label: 'Government entities' },
      { value: '33', label: 'AI solutions' },
      { value: '7', label: 'Active startups' },
    ],
  },
  {
    name: 'Leadership in Cultural & Creative Industries',
    stat: '95%',
    statLabel: 'Satisfaction rate',
    partner: 'Accredited program',
    pillar: 'Academy',
    color: 'var(--academy)',
    bgGrad: 'linear-gradient(135deg, #7a5cb8, #9674ce)',
    icon: '/assets/brand/awj-academy-icon.svg',
    size: 'p-sm',
    light: true,
    image: '/assets/brand/academy-project-card.png',
    summary:
      "AWJ Academy developed a specialized leadership development program for the cultural and creative industries, equipping professionals to lead innovation and enhance competitiveness in Oman's growing creative sector.",
    impact:
      "The program achieved a 95% satisfaction rate, with graduates successfully implementing creative strategies across cultural institutions, media companies, and creative enterprises. Many have become industry leaders and mentors.",
    achievements: [
      { value: '95%', label: 'Satisfaction' },
      { value: '20+', label: 'Programs offered' },
      { value: '10', label: 'Strategic partners' },
    ],
  },
  {
    name: 'Planning & Strategy Platform',
    stat: '12',
    statLabel: 'Strategic initiatives',
    partner: 'Institutional clients',
    pillar: 'Systems',
    color: 'var(--systems)',
    bgGrad: 'linear-gradient(135deg, #0055a4, #0069c8)',
    icon: '/assets/brand/awj-systems-icon.svg',
    size: 'p-sm',
    light: false,
    summary:
      "AWJ Systems' Planning & Strategy platform empowers institutions to develop and execute strategic roadmaps through data-driven planning, scenario analysis, and AI-assisted decision-making, enabling leaders to navigate complex challenges with confidence.",
    impact:
      "The platform has supported strategic transformations across government and private sector institutions, helping leaders make informed decisions, align organizational goals, and track strategic progress in real-time through intelligent analytics and visualization.",
    achievements: [
      { value: '12', label: 'Strategic initiatives' },
      { value: 'AI-Assisted', label: 'Decision making' },
      { value: 'Real-time', label: 'Performance tracking' },
    ],
  },
  {
    name: 'Abraj Energy Sustainability Report',
    stat: 'Best Award',
    statLabel: '2025',
    partner: 'CSR Leadership',
    pillar: 'Sustain',
    color: 'var(--sustain)',
    bgGrad: 'linear-gradient(135deg, #009688, #00bfa5)',
    icon: '/assets/brand/awj-sustain-icon.svg',
    size: 'p-sm',
    image: '/assets/brand/abraj-project-card.jpg',
    summary:
      "AWJ Sustain prepared the comprehensive Sustainability Report for Abraj Energy Services, achieving the Best Sustainability Report Award 2025 and demonstrating world-class ESG disclosure and transparency practices.",
    impact:
      "The report sets new standards for sustainability disclosure in Oman, reflecting commitment to global best practices in ESG reporting. It enhanced the company's reputation, investor confidence, and demonstrated concrete sustainability commitment.",
    achievements: [
      { value: 'Best Award', label: '2025' },
      { value: 'GRI Standard', label: 'Compliant' },
      { value: 'Global', label: 'Best practices' },
    ],
  },
  {
    name: 'Gulf Urban Planning Hackathon',
    stat: '80',
    statLabel: 'Participants',
    partner: 'Aligned with Oman Vision 2040',
    pillar: 'Innovation',
    color: 'var(--innovation)',
    bgGrad: 'linear-gradient(135deg, #f5841e, #ee6c11)',
    icon: '/assets/brand/awj-innovation-icon.svg',
    size: 'p-med',
    image: '/assets/brand/hackathon-project-card.jpg',
    summary:
      'AWJ Innovation partnered with the Ministry of Housing and Urban Planning to organize the first Gulf Urban Planning Hackathon, bringing together 80 participants to develop innovative solutions for urban challenges aligned with Oman Vision 2040.',
    impact:
      "The hackathon generated innovative urban planning solutions focusing on sustainable city development, smart infrastructure, and community-centered design. Several concepts are being integrated into Oman's spatial strategy.",
    achievements: [
      { value: '80', label: 'Participants' },
      { value: '20', label: 'Solutions developed' },
      { value: 'Vision 2040', label: 'Strategic alignment' },
    ],
  },
  {
    name: 'Oman National Framework for CSR Governance',
    stat: '50+',
    statLabel: 'Organizations engaged',
    partner: 'with Ministry of Social Development',
    pillar: 'Sustain',
    color: 'var(--sustain)',
    bgGrad: 'linear-gradient(135deg, #00736f, #00a19d)',
    icon: '/assets/brand/awj-sustain-icon.svg',
    size: 'p-med',
    summary:
      'AWJ Sustain is collaborating with the Ministry of Social Development to develop and implement the Oman National Framework for CSR Governance, transforming fragmented philanthropy into strategic corporate social responsibility.',
    impact:
      'This framework is establishing Oman as a regional leader in CSR governance, providing clear guidelines for corporate giving, ensuring transparency, and maximizing social impact across the nation.',
    achievements: [
      { value: '50+', label: 'Organizations engaged' },
      { value: 'Implementation', label: 'Framework status' },
      { value: 'National', label: 'Impact level' },
    ],
  },
];

export const Projects = () => {
  const { t } = useLang();
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(null);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = open !== null ? 'hidden' : '';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <section
      className="projects mesh-bg"
      id="projects"
      data-screen-label="06 Projects"
    >
      <div className="container">
        <div className="projects-head reveal">
          <div>
            <h2 className="section-title">
              {t('projects.title.first')} <em>{t('projects.title.second')}</em>
            </h2>
          </div>
        </div>
        <div className="project-bento">
          {PROJECTS.map((p, i) => (
            <button
              key={p.name}
              type="button"
              className={`project-tile ${p.size}${p.light ? ' p-light' : ''}`}
              style={{ background: p.bgGrad }}
              data-pillar={p.pillar}
              onClick={() => setOpen(i)}
            >
              {p.image && <img src={p.image} className="pt-bg-image" alt="" aria-hidden="true" />}
              <img src={p.icon} className="pt-icon" alt="" aria-hidden="true" />
              <img src={`/assets/brand/awj-${p.pillar.toLowerCase()}-logo-h.svg`} className="pt-pillar-logo" alt="" aria-hidden="true" />
              <div className="pt-name">{p.name}</div>
              <div className="pt-stat-block">
                <div className="pt-stat">{p.stat}</div>
                <div className="pt-stat-label">{p.statLabel}</div>
              </div>
              <div className="pt-foot">
                <div className="pt-meta">
                  <span className="pt-pillar">AWJ {p.pillar}</span>
                  <span className="pt-partner">{p.partner}</span>
                </div>
              </div>
              <div className="pt-arrow">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M7 17L17 7M17 7H8M17 7V16"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </button>
          ))}
        </div>
      </div>

      {open !== null && (
        <div className="project-modal" onClick={() => setOpen(null)}>
          <div className="pm-backdrop"></div>
          <div className="pm-card" onClick={(e) => e.stopPropagation()}>
            <div className="pm-cover" style={{ background: PROJECTS[open].bgGrad }}>
              <img src={PROJECTS[open].icon} className="pm-cover-icon" alt="" aria-hidden="true" />
              <div className="pm-cover-num">PROJECT / 0{open + 1}</div>
              <div className="pm-cover-pillar">
                <img
                  src={`/assets/brand/awj-${PROJECTS[open].pillar.toLowerCase()}-logo-h.svg`}
                  alt={`AWJ ${PROJECTS[open].pillar}`}
                  className="pm-pillar-logo"
                />
              </div>
              <button
                type="button"
                className="pm-close"
                onClick={() => setOpen(null)}
                aria-label={t('projects.modal.close')}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
              <h3 className="pm-title">{PROJECTS[open].name}</h3>
            </div>
            <div className="pm-body">
              {PROJECTS[open].image && <img src={PROJECTS[open].image} className="pm-body-image" alt="" aria-hidden="true" />}
              <p className="pm-summary">{PROJECTS[open].summary}</p>
              <p className="pm-impact">{PROJECTS[open].impact}</p>
              <div className="pm-achievements">
                <div className="pm-ach-head">{t('projects.modal.achievements')}</div>
                <div className="pm-ach-grid">
                  {PROJECTS[open].achievements.map((a) => (
                    <div key={`${a.value}-${a.label}`} className="pm-ach">
                      <div className="pm-ach-value">{a.value}</div>
                      <div className="pm-ach-label">{a.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
