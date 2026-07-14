import { NEWS } from '../data/news';
import { useLang } from '../i18n/LangContext';

export const News = () => {
  const { t } = useLang();
  const featured = NEWS.filter((n) => n.featured).slice(0, 2);
  const recent = NEWS.filter((n) => !n.featured).slice(0, 4);

  return (
    <section className="news" id="news" data-screen-label="07 News">
      <div className="container">
        <div className="news-head reveal">
          <div>
            <h2 className="section-title">
              {t('news.title.first')} <em>{t('news.title.second')}</em>
            </h2>
          </div>
          <a className="news-viewall" href="/news">
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

        <div className="news-featured-grid reveal">
          {featured.map((n) => (
            <a key={n.id} className="news-feature-card" href={`/news#${n.id}`}>
              <div className="nfc-cover">
                <img className="news-cover-img" src={n.image} alt={n.title} loading="lazy" />
                <div className="nfc-tag">{n.category}</div>
              </div>
              <div className="nfc-body">
                <div className="nfc-meta">
                  <span>{n.dateLabel}</span>
                  <span className="dot">·</span>
                  <span>{n.pillar}</span>
                </div>
                <h3 className="nfc-title">{n.title}</h3>
                <p className="nfc-dek">{n.dek}</p>
                <span className="nfc-read">
                  {t('news.readStory')}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12h14M13 5l7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="news-recent reveal">
          <div className="news-recent-head">
            <span className="eyebrow">{t('news.latest')}</span>
            <a className="news-recent-link" href="/news">
              {t('news.allStories')} ({NEWS.length})
            </a>
          </div>
          <ul className="news-recent-list">
            {recent.map((n) => (
              <li key={n.id} className="news-recent-item">
                <a href={`/news#${n.id}`}>
                  <span className="nri-date">{n.dateLabel}</span>
                  <span className="nri-cat" data-cat={n.category}>
                    {n.category}
                  </span>
                  <span className="nri-title">{n.title}</span>
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
