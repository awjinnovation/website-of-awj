import styles from './AdvantagesValuesSection.module.css';

// Maps one or more local CSS-module class names to their scoped, hashed
// identifiers. Because every class lives in the module, nothing here can be
// overridden by — or leak into — the global stylesheet or other sections.
const cx = (...names: string[]) => names.map((n) => styles[n] ?? '').filter(Boolean).join(' ');

interface AdvantageCardProps {
  icon: React.ReactNode;
  description: string;
}

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const AdvantageCard = ({ icon, description }: AdvantageCardProps) => (
  <div className={cx('advantage-card')}>
    <div className={cx('advantage-card-bg')} />
    <div className={cx('advantage-card-icon')}>{icon}</div>
    <p className={cx('advantage-card-text')}>{description}</p>
  </div>
);

const ValueCard = ({ icon, title, description }: ValueCardProps) => (
  <div className={cx('value-card')}>
    <div className={cx('value-card-top-accent')} />
    <div className={cx('value-card-header')}>
      <div className={cx('value-card-icon')}>{icon}</div>
      <h3 className={cx('value-card-title')}>{title}</h3>
    </div>
    <p className={cx('value-card-text')}>{description}</p>
  </div>
);

export const AdvantagesValuesSection = () => {
  const advantages = [
    {
      title: 'Market Understanding',
      description: 'Deep understanding of local and regional market needs in innovation and tech entrepreneurship.',
      icon: (
        <svg width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" />
          <circle cx="12" cy="12" r="10" />
        </svg>
      ),
    },
    {
      title: 'Advisory Team',
      description: 'An international advisory team.',
      icon: (
        <svg width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
          <path d="M2 12h20" />
        </svg>
      ),
    },
    {
      title: 'Customized Solutions',
      description: 'Innovative solutions and services, customized to the needs of each institution.',
      icon: (
        <svg width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="21" x2="14" y1="4" y2="4" />
          <line x1="10" x2="3" y1="4" y2="4" />
          <line x1="21" x2="12" y1="12" y2="12" />
          <line x1="8" x2="3" y1="12" y2="12" />
          <line x1="21" x2="16" y1="20" y2="20" />
          <line x1="12" x2="3" y1="20" y2="20" />
          <line x1="14" x2="14" y1="2" y2="6" />
          <line x1="8" x2="8" y1="10" y2="14" />
          <line x1="16" x2="16" y1="18" y2="22" />
        </svg>
      ),
    },
    {
      title: 'Technology Expertise',
      description: 'Global expertise in deploying the latest technologies.',
      icon: (
        <svg width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="16" height="16" x="4" y="4" rx="2" />
          <rect width="6" height="6" x="9" y="9" rx="1" />
          <path d="M15 2v2" />
          <path d="M15 20v2" />
          <path d="M2 15h2" />
          <path d="M2 9h2" />
          <path d="M20 15h2" />
          <path d="M20 9h2" />
          <path d="M9 2v2" />
          <path d="M9 20v2" />
        </svg>
      ),
    },
    {
      title: 'Sustainable Growth',
      description: 'Sustainable growth through world-class strategies and plans.',
      icon: (
        <svg width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 20h10" />
          <path d="M10 20c5.5-2.5.8-6.4 3-10" />
          <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z" />
          <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z" />
        </svg>
      ),
    },
    {
      title: 'Ideas to Reality',
      description: 'Transforming ideas into tangible reality.',
      icon: (
        <svg width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
          <path d="M9 18h6" />
          <path d="M10 22h4" />
        </svg>
      ),
    },
  ];

  const values = [
    {
      title: 'Authenticity',
      description: "We reflect Oman's vision by enhancing local talent capabilities according to international standards, a commitment deeply rooted in our heritage.",
      icon: (
        <svg width="29" height="29" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    },
    {
      title: 'Collaboration & Communication',
      description: 'We leverage collective expertise to create valuable opportunities and deliver impactful solutions in the consulting landscape.',
      icon: (
        <svg width="29" height="29" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m11 17 2 2a1 1 0 1 0 3-3" />
          <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
          <path d="M21 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
          <path d="M3 4h8" />
        </svg>
      ),
    },
    {
      title: 'Innovation & Progress',
      description: 'We embrace emerging technologies to stay ahead and deliver cutting-edge solutions that set industry benchmarks.',
      icon: (
        <svg width="29" height="29" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
          <path d="M4 22v-7" />
        </svg>
      ),
    },
    {
      title: 'Leadership',
      description: 'We open new horizons, set industry benchmarks, and take the initiative to shape the future.',
      icon: (
        <svg width="29" height="29" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z" />
          <path d="M5 21h14" />
        </svg>
      ),
    },
  ];

  return (
    <section className={cx('advantages-values-section')}>
      {/* Competitive Advantages */}
      <div className={cx('advantages-values-container')}>
        <div className={cx('section-header')}>
          <h2 className={cx('section-title')}>Our Competitive Advantages</h2>
          <div className={cx('section-divider')} />
        </div>

        <div className={cx('advantages-grid')}>
          {advantages.map((advantage) => (
            <AdvantageCard key={advantage.title} {...advantage} />
          ))}
        </div>
      </div>

      {/* Our Values */}
      <div className={cx('advantages-values-container', 'values-container')}>
        <div className={cx('section-header')}>
          <h2 className={cx('section-title')}>Our Values</h2>
          <div className={cx('section-divider')} />
        </div>

        <div className={cx('values-grid')}>
          {values.map((value) => (
            <ValueCard key={value.title} {...value} />
          ))}
        </div>
      </div>
    </section>
  );
};
