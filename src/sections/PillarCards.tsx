import { useLang } from '../i18n/LangContext';
import type { TranslationKey } from '../i18n/dict';
import { withBase } from '../base-path';
import styles from './PillarCards.module.css';

type CardItem = {
  id: 'innovation' | 'academy' | 'systems' | 'sustain';
  name: string;
  logo: string;
  /** Mark only, used for the faint watermark in the coloured panel. */
  icon: string;
  nameKey: TranslationKey;
  descKey: TranslationKey;
};

/* Same per-pillar copy as PillarsStack: the full name and its description
   sentence. Source order is the English reading order; RTL mirrors it. */
const CARDS: CardItem[] = [
  {
    id: 'innovation',
    name: 'Innovation',
    logo: '/assets/brand/awj-innovation-logo-h.svg',
    icon: '/assets/brand/awj-innovation-icon.svg',
    nameKey: 'pillar.innovation.fullName',
    descKey: 'pillar.innovation.desc',
  },
  {
    id: 'academy',
    name: 'Academy',
    logo: '/assets/brand/awj-academy-logo-h.svg',
    icon: '/assets/brand/awj-academy-icon.svg',
    nameKey: 'pillar.academy.fullName',
    descKey: 'pillar.academy.desc',
  },
  {
    id: 'systems',
    name: 'Systems',
    logo: '/assets/brand/awj-systems-logo-h.svg',
    icon: '/assets/brand/awj-systems-icon.svg',
    nameKey: 'pillar.systems.fullName',
    descKey: 'pillar.systems.desc',
  },
  {
    id: 'sustain',
    name: 'Sustain',
    logo: '/assets/brand/awj-sustain-logo-h.svg',
    icon: '/assets/brand/awj-sustain-icon.svg',
    nameKey: 'pillar.sustain.fullName',
    descKey: 'pillar.sustain.desc',
  },
];

export const PillarCards = () => {
  const { t } = useLang();

  return (
    <section className={styles.section} id="pillars" data-screen-label="03 Pillars">
      <div className={styles.inner}>
        <header className={`${styles.head} reveal`}>
          <h2 className={styles.title}>
            {t('pillars.title.first')} {t('pillars.title.second')}
          </h2>
        </header>

        <div className={`${styles.row} reveal`}>
          {CARDS.map((c) => {
            const name = t(c.nameKey);
            const full = t(c.descKey);
            // The card copy reads "Pillar name: sentence"; the name is the title.
            const body = full.startsWith(`${name}:`) ? full.slice(name.length + 1).trim() : full;
            return (
              <a
                key={c.id}
                href={withBase(`/pillars/${c.id}`)}
                className={`${styles.card} ${styles[c.id]}`}
              >
                <span className={styles.top}>
                  <img src={c.logo} alt={`AWJ ${c.name}`} className={styles.logo} />
                </span>
                <span className={styles.bottom}>
                  <img src={c.icon} alt="" aria-hidden="true" className={styles.watermark} />
                  <strong className={styles.cardTitle}>{name}</strong>
                  <span className={styles.desc}>{body}</span>
                  <span className={styles.more}>
                    <span className={styles.btn}>
                      {t('pillars.learnMore')}
                      <svg
                        className={styles.arrow}
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M5 12h14M13 6l6 6-6 6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </span>
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
