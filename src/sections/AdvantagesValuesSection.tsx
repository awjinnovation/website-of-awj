import { useLang } from '../i18n/LangContext';
import { DICT, type TranslationKey } from '../i18n/dict';
import styles from './AdvantagesValuesSection.module.css';

// Maps one or more local CSS-module class names to their scoped, hashed
// identifiers. Because every class lives in the module, nothing here can be
// overridden by — or leak into — the global stylesheet or other sections.
const cx = (...names: string[]) => names.map((n) => styles[n] ?? '').filter(Boolean).join(' ');

interface AdvantageItem {
  id: string;
  titleKey: TranslationKey;
  descKey: TranslationKey;
  icon: string;
}

interface AdvantageCardProps {
  icon: string;
  title: string | null;
  description: string;
}

interface ValueCardProps {
  icon: string;
  title: string;
  description: string;
}

const AdvantageCard = ({ icon, title, description }: AdvantageCardProps) => (
  <div className={cx('advantage-card')}>
    <div className={cx('advantage-card-icon')}>
      <img src={icon} alt="" aria-hidden="true" />
    </div>
    {title && <h3 className={cx('advantage-card-title')}>{title}</h3>}
    <p className={cx('advantage-card-text')}>{description}</p>
  </div>
);

const ValueCard = ({ icon, title, description }: ValueCardProps) => (
  <div className={cx('value-card')}>
    <div className={cx('value-card-top-accent')} />
    <div className={cx('value-card-header')}>
      <div className={cx('value-card-icon')}>
        <img src={icon} alt="" aria-hidden="true" />
      </div>
      <h3 className={cx('value-card-title')}>{title}</h3>
    </div>
    <p className={cx('value-card-text')}>{description}</p>
  </div>
);

export const AdvantagesValuesSection = () => {
  const { t, lang } = useLang();
  // Card titles have approved English only; Arabic shows the description alone
  // until approved Arabic titles exist, rather than an English fallback.
  const titleFor = (k: TranslationKey) => (lang === 'ar' && !DICT.ar[k] ? null : t(k));

  // Icons are the supplied two-tone artwork (light strokes plus one pillar
  // colour), rendered as images so their colours stay exactly as delivered.
  const advantages: AdvantageItem[] = [
    { id: 'market', titleKey: 'about.adv.market.title', descKey: 'about.adv.market', icon: '/assets/advantages/market-insight.png' },
    { id: 'advisory', titleKey: 'about.adv.advisory.title', descKey: 'about.adv.advisory', icon: '/assets/advantages/global-advisory.png' },
    { id: 'solutions', titleKey: 'about.adv.solutions.title', descKey: 'about.adv.solutions', icon: '/assets/advantages/tailored-solutions.png' },
    { id: 'technology', titleKey: 'about.adv.technology.title', descKey: 'about.adv.technology', icon: '/assets/advantages/technology-expertise.png' },
    { id: 'growth', titleKey: 'about.adv.growth.title', descKey: 'about.adv.growth', icon: '/assets/advantages/sustainable-growth.png' },
    { id: 'ideas', titleKey: 'about.adv.ideas.title', descKey: 'about.adv.ideas', icon: '/assets/advantages/ideas-into-action.png' },
  ];

  const values = [
    { id: 'authenticity', title: t('about.value.authenticity.title'), description: t('about.value.authenticity.desc'), icon: '/assets/values-icons/authenticity.png' },
    { id: 'collaboration', title: t('about.value.collaboration.title'), description: t('about.value.collaboration.desc'), icon: '/assets/values-icons/collaboration.png' },
    { id: 'innovation', title: t('about.value.innovation.title'), description: t('about.value.innovation.desc'), icon: '/assets/values-icons/innovation.png' },
    { id: 'leadership', title: t('about.value.leadership.title'), description: t('about.value.leadership.desc'), icon: '/assets/values-icons/leadership.png' },
  ];

  return (
    <section className={cx('advantages-values-section')}>
      {/* Competitive Advantages */}
      <div className={cx('advantages-values-container')}>
        <div className={cx('section-header')}>
          <h2 className={cx('section-title')}>{t('about.advantages.title')}</h2>
          <div className={cx('section-divider')} />
        </div>

        <div className={cx('advantages-grid')}>
          {advantages.map((advantage) => (
            <AdvantageCard
              key={advantage.id}
              icon={advantage.icon}
              title={titleFor(advantage.titleKey)}
              description={t(advantage.descKey)}
            />
          ))}
        </div>
      </div>

      {/* Our Values */}
      <div className={cx('advantages-values-container', 'values-container')}>
        <div className={cx('section-header')}>
          <h2 className={cx('section-title')}>{t('about.values.title')}</h2>
          <div className={cx('section-divider')} />
        </div>

        <div className={cx('values-grid')}>
          {values.map((value) => (
            <ValueCard key={value.id} {...value} />
          ))}
        </div>
      </div>
    </section>
  );
};
