import { useEffect, useMemo, useState } from 'react';
import { Cursor } from '../components/Cursor';
import { useReveal } from '../hooks/useReveal';
import { NavPill } from '../sections/NavPill';
import { Footer } from '../sections/Footer';
import { NEWS, type NewsItem } from '../data/news';

const NewsHero = () => (
  <section className="news-hero" data-screen-label="01 News Hero">
    <div className="news-hero-grain"></div>
    <div className="container">
      <div className="news-hero-top">
        <a href="/" className="news-back">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path
              d="M19 12H5M11 18l-6-6 6-6"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back to AWJ
        </a>
        <div className="news-hero-meta">The Dispatch · {NEWS.length} stories</div>
      </div>
      <h1 className="news-hero-title">
        News &amp; <em>announcements</em>.
      </h1>
      <p className="news-hero-lede">
        Mandates, partnerships, and program milestones from across the AWJ group —
        Innovation, Academy, Sustain, and Systems.
      </p>
    </div>
  </section>
);

type OpenHandler = (id: string) => void;

const FeaturedSection = ({ onOpen }: { onOpen: OpenHandler }) => {
  const featured = NEWS.filter((n) => n.featured);
  return (
    <section className="news-page-featured">
      <div className="container">
        <div className="npf-head">
          <div className="eyebrow">— Featured stories</div>
          <h2 className="section-title">Top of the desk.</h2>
        </div>
        <div className="npf-grid">
          {featured.map((n) => (
            <button
              key={n.id}
              type="button"
              className="npf-card"
              onClick={() => onOpen(n.id)}
            >
              <div className="npf-cover">
                <img className="news-cover-img" src={n.image} alt={n.title} loading="lazy" />
                <div className="npf-tag">{n.category}</div>
                <div className="npf-featured-badge">Featured</div>
              </div>
              <div className="npf-body">
                <div className="npf-meta">
                  <span>{n.dateLabel}</span>
                  <span className="dot">·</span>
                  <span>{n.pillar}</span>
                </div>
                <h3 className="npf-title">{n.title}</h3>
                <p className="npf-dek">{n.dek}</p>
                <span className="npf-read">
                  Read story
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
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
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

const AllNewsSection = ({ onOpen }: { onOpen: OpenHandler }) => {
  const cats = useMemo(() => ['All', ...new Set(NEWS.map((n) => n.category))], []);
  const pillars = useMemo(() => ['All', ...new Set(NEWS.map((n) => n.pillar))], []);
  const [filter, setFilter] = useState<string>('All');
  const [pillarFilter, setPillarFilter] = useState<string>('All');

  const filtered = NEWS.filter((n) => {
    if (filter !== 'All' && n.category !== filter) return false;
    if (pillarFilter !== 'All' && n.pillar !== pillarFilter) return false;
    return true;
  });

  return (
    <section className="news-page-all">
      <div className="container">
        <div className="npa-head">
          <div>
            <div className="eyebrow">— All stories</div>
            <h2 className="section-title">The complete archive.</h2>
          </div>
          <div className="npa-count">
            {filtered.length} of {NEWS.length}
          </div>
        </div>

        <div className="npa-filters">
          <div className="npa-filter-row">
            <span className="npa-filter-label">Topic</span>
            <div className="npa-chips">
              {cats.map((c) => (
                <button
                  key={c}
                  type="button"
                  className={`npa-chip ${filter === c ? 'is-active' : ''}`}
                  onClick={() => setFilter(c)}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
          <div className="npa-filter-row">
            <span className="npa-filter-label">Pillar</span>
            <div className="npa-chips">
              {pillars.map((c) => (
                <button
                  key={c}
                  type="button"
                  className={`npa-chip ${pillarFilter === c ? 'is-active' : ''}`}
                  onClick={() => setPillarFilter(c)}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="npa-grid">
          {filtered.map((n) => (
            <button
              key={n.id}
              type="button"
              className="npa-card"
              onClick={() => onOpen(n.id)}
            >
              <div className="npa-cover">
                <img className="news-cover-img" src={n.image} alt={n.title} loading="lazy" />
                <div className="npa-tag">{n.category}</div>
              </div>
              <div className="npa-body">
                <div className="npa-meta">
                  <span>{n.dateLabel}</span>
                  <span className="dot">·</span>
                  <span>{n.pillar}</span>
                </div>
                <h3 className="npa-title">{n.title}</h3>
                <p className="npa-dek">{n.dek}</p>
                <span className="npa-read">
                  Read
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M7 17L17 7M17 7H8M17 7V16"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </button>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="npa-empty">No stories match your filters.</div>
        )}
      </div>
    </section>
  );
};

const ArticleModal = ({ article, onClose }: { article: NewsItem; onClose: () => void }) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="article-modal" onClick={onClose}>
      <div className="am-backdrop"></div>
      <div className="am-card" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="am-close" onClick={onClose} aria-label="Close">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M6 6l12 12M18 6L6 18"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <div className="am-cover">
          <img className="news-cover-img" src={article.image} alt={article.title} />
          <div className="am-cover-overlay">
            <div className="am-cover-tag">{article.category}</div>
            <div className="am-cover-meta">
              <span>{article.dateLabel}</span>
              <span className="dot">·</span>
              <span>{article.pillar}</span>
            </div>
          </div>
        </div>
        <div className="am-body">
          <h1 className="am-title">{article.title}</h1>
          <p className="am-dek">{article.dek}</p>
          <div className="am-rule"></div>
          <div className="am-text">
            {article.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="am-footer">
            <span className="am-attrib">
              — {article.pillar}, {article.dateLabel}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const NewsPage = () => {
  useReveal();
  const [openId, setOpenId] = useState<string | null>(null);

  useEffect(() => {
    const fromHash = () => {
      const h = window.location.hash.replace('#', '');
      if (h && NEWS.find((n) => n.id === h)) setOpenId(h);
    };
    fromHash();
    window.addEventListener('hashchange', fromHash);
    return () => window.removeEventListener('hashchange', fromHash);
  }, []);

  const handleClose = () => {
    setOpenId(null);
    if (window.location.hash) {
      history.replaceState(null, '', window.location.pathname);
    }
  };

  const handleOpen: OpenHandler = (id) => {
    setOpenId(id);
    history.replaceState(null, '', '#' + id);
  };

  const article = openId ? NEWS.find((n) => n.id === openId) : null;

  return (
    <>
      <Cursor />
      <NavPill />
      <NewsHero />
      <FeaturedSection onOpen={handleOpen} />
      <AllNewsSection onOpen={handleOpen} />
      <Footer />
      {article && <ArticleModal article={article} onClose={handleClose} />}
    </>
  );
};
