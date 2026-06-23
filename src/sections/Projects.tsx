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
  summary: string;
  impact: string;
  achievements: { value: string; label: string }[];
};

const PROJECTS: Project[] = [
  {
    name: 'First 3D Printed Building in the Middle East',
    stat: '60%',
    statLabel: 'Less material waste',
    partner: 'with GUtech',
    pillar: 'Innovation',
    color: 'var(--innovation)',
    bgGrad: 'linear-gradient(135deg, #a13418, #ee6c11)',
    icon: '/assets/brand/awj-innovation-icon.svg',
    size: 'p-big',
    summary:
      'AWJ Innovation partnered with German University of Technology in Oman (GUtech) to create the first 3D printed building in the Middle East, a milestone in construction technology and sustainable building practices.',
    impact:
      'The project demonstrated the potential for advanced manufacturing in construction, reducing material waste by 60% and construction time by 70%. It paved the way for sustainable construction practices across the region and positioned Oman as a leader in construction technology.',
    achievements: [
      { value: '60%', label: 'Material waste reduction' },
      { value: '70%', label: 'Construction time saved' },
      { value: 'First in ME', label: 'Regional achievement' },
    ],
  },
  {
    name: '.NextJadeer Capacity Building',
    stat: '500+',
    statLabel: 'Graduates trained',
    partner: '85% employment rate',
    pillar: 'Academy',
    color: 'var(--academy)',
    bgGrad: 'linear-gradient(135deg, #5d3a9b, #9674ce)',
    icon: '/assets/brand/awj-academy-icon.svg',
    size: 'p-med',
    summary:
      ".NextJadeer is AWJ's flagship capacity-building program addressing skill gaps in the job market and fostering tech entrepreneurship through comprehensive training in emerging technologies.",
    impact:
      'The program has trained hundreds of participants, with many launching their own startups or securing employment in tech companies. The 4th edition saw record participation and success rates.',
    achievements: [
      { value: '500+', label: 'Graduates' },
      { value: '35', label: 'Startups launched' },
      { value: '85%', label: 'Employment rate' },
    ],
  },
  {
    name: '.NXT GIG Platform',
    stat: '2,500+',
    statLabel: 'Registered freelancers',
    partner: '1,000+ projects completed',
    pillar: 'Innovation',
    color: 'var(--innovation)',
    bgGrad: 'linear-gradient(135deg, #ee6c11, #f5841e)',
    icon: '/assets/brand/awj-innovation-icon.svg',
    size: 'p-med',
    summary:
      ".NXT GIG is AWJ's platform designed to empower Oman's gig economy by connecting freelancers with projects and opportunities, aligned with Oman Vision 2040's goals for economic diversification.",
    impact:
      "The platform has revolutionized freelancing in Oman, providing opportunities for thousands of freelancers and helping businesses access specialized talent. It has become a cornerstone of Oman's digital economy.",
    achievements: [
      { value: '2,500+', label: 'Registered freelancers' },
      { value: '1,000+', label: 'Projects completed' },
      { value: '500K+ OMR', label: 'Total value' },
    ],
  },
  {
    name: 'AEROHACK Aviation Hackathon',
    stat: '200+',
    statLabel: 'Participants',
    partner: 'with Oman Airports',
    pillar: 'Innovation',
    color: 'var(--innovation)',
    bgGrad: 'linear-gradient(135deg, #fde0ca, #fac99e)',
    icon: '/assets/brand/awj-innovation-icon.svg',
    size: 'p-sm',
    light: true,
    summary:
      'AWJ Innovation collaborated with Oman Airports to organize AEROHACK, the largest aviation hackathon in Oman, bringing together innovators, developers and aviation experts to revolutionize the industry through technology.',
    impact:
      'The hackathon generated innovative solutions for aviation challenges, with winning teams receiving mentorship and incubation support. Several solutions have been piloted at Oman airports, improving passenger experience and operational efficiency.',
    achievements: [
      { value: '200+', label: 'Participants' },
      { value: '45', label: 'Solutions generated' },
      { value: '5', label: 'Solutions piloted' },
    ],
  },
  {
    name: 'GUtech Technology Transfer Office',
    stat: '30+',
    statLabel: 'Research projects',
    partner: 'Established 2020',
    pillar: 'Innovation',
    color: 'var(--innovation)',
    bgGrad: 'linear-gradient(135deg, #fac99e, #f8a661)',
    icon: '/assets/brand/awj-innovation-icon.svg',
    size: 'p-sm',
    light: true,
    summary:
      'AWJ Innovation established the Technology Transfer Office (TTO) at German University of Technology in Oman to bridge the gap between theoretical knowledge and practical industry applications.',
    impact:
      'Since September 2020, the TTO has facilitated technology transfer for numerous research projects, created partnerships with industry leaders, and supported the commercialization of innovative academic research.',
    achievements: [
      { value: '30+', label: 'Research projects' },
      { value: '15', label: 'Industry partnerships' },
      { value: '8', label: 'Patents filed' },
    ],
  },
  {
    name: 'Energy & AI Hackathon',
    stat: '20',
    statLabel: 'Gulf teams',
    partner: '5 pilots initiated',
    pillar: 'Innovation',
    color: 'var(--innovation)',
    bgGrad: 'linear-gradient(135deg, #a13418, #f5841e)',
    icon: '/assets/brand/awj-innovation-icon.svg',
    size: 'p-sm',
    summary:
      'AWJ organized the Energy and AI Hackathon supporting 20 Gulf teams to develop innovative solutions combining artificial intelligence with sustainable energy technologies.',
    impact:
      'The hackathon produced breakthrough solutions in energy optimization, predictive maintenance, and smart grid management. Several solutions are being piloted with energy sector partners.',
    achievements: [
      { value: '20', label: 'Gulf teams' },
      { value: '20', label: 'Solutions developed' },
      { value: '5', label: 'Pilots initiated' },
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
            <div className="eyebrow">{t('projects.eyebrow')}</div>
            <h2 className="section-title" style={{ marginTop: 24 }}>
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
              onClick={() => setOpen(i)}
            >
              <img src={p.icon} className="pt-icon" alt="" aria-hidden="true" />
              <div className="pt-stat-block">
                <div className="pt-stat">{p.stat}</div>
                <div className="pt-stat-label">{p.statLabel}</div>
              </div>
              <div className="pt-foot">
                <div className="pt-name">{p.name}</div>
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
                <span className="swatch" style={{ background: 'var(--paper)' }}></span>
                AWJ {PROJECTS[open].pillar}
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
            </div>
            <div className="pm-body">
              <h3 className="pm-title">{PROJECTS[open].name}</h3>
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
