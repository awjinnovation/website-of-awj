import { NEWS, NEWS_BY_DATE, newsCategory, newsDate, newsDek, newsPillar, newsTitle, type NewsItem } from '../data/news';
import { useLang } from '../i18n/LangContext';
import { withBase } from '../base-path';

const ReadArrow = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
    <path
      d="M5 12h14M13 5l7 7-7 7"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const FeatureCard = ({ n, variant }: { n: NewsItem; variant: 'lead' | 'small' }) => {
  const { t, lang } = useLang();
  return (
    <a className={`news-feature-card news-${variant}`} href={withBase(`/news#${n.id}`)}>
      <div className="nfc-cover">
        <img className="news-cover-img" src={n.image} alt="" aria-hidden="true" loading="lazy" />
        <div className="nfc-tag">{newsCategory(n.category, lang)}</div>
      </div>
      <div className="nfc-body">
        <div className="nfc-meta">
          <span>{newsDate(n, lang)}</span>
          <span className="dot">·</span>
          <span>{newsPillar(n.pillar, lang)}</span>
        </div>
        <h3 className="nfc-title">{newsTitle(n, lang)}</h3>
        <p className="nfc-dek">{newsDek(n, lang)}</p>
        <span className="nfc-read">
          {t(n.bodyAr ? 'news.readStory' : 'news.readStoryEnOnly')}
          <ReadArrow />
        </span>
      </div>
    </a>
  );
};

export const News = () => {
  const { t, lang } = useLang();
  // Newest story leads, the next three get small cards, the rest go in the list.
  const [lead, ...rest] = NEWS_BY_DATE;
  const secondary = rest.slice(0, 3);
  const older = rest.slice(3, 7);

  return (
    <section className="news" id="news" data-screen-label="07 News">
      <div className="container">
        <div className="news-head reveal">
          <div>
            <h2 className="section-title">
              {t('news.title.first')} <em>{t('news.title.second')}</em>
            </h2>
          </div>
          <a className="news-viewall" href={withBase('/news')}>
            {t('news.viewAll')}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12h14M13 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        <div className="news-lead-wrap reveal">
          <FeatureCard n={lead} variant="lead" />
        </div>

        <div className="news-secondary-grid reveal">
          {secondary.map((n) => (
            <FeatureCard key={n.id} n={n} variant="small" />
          ))}
        </div>

        <div className="news-recent reveal">
          <div className="news-recent-head">
            <span className="eyebrow">{t('news.latest')}</span>
            <a className="news-recent-link" href={withBase('/news')}>
              {t('news.allStories')} ({NEWS.length})
            </a>
          </div>
          <ul className="news-recent-list">
            {older.map((n) => (
              <li key={n.id} className="news-recent-item">
                <a href={withBase(`/news#${n.id}`)}>
                  <span className="nri-date">{newsDate(n, lang)}</span>
                  <span className="nri-cat" data-cat={n.category}>
                    {newsCategory(n.category, lang)}
                  </span>
                  <span className="nri-title">{newsTitle(n, lang)}</span>
                  <span className="nri-arrow">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M7 17L17 7M17 7H8M17 7V16"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
