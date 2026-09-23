import { useEffect, useMemo, useState } from 'react';
import { Cursor } from '../components/Cursor';
import { useReveal } from '../hooks/useReveal';
import { NavPill } from '../sections/NavPill';
import { Footer } from '../sections/Footer';
import {
  NEWS,
  NEWS_BY_DATE,
  newsCategory,
  newsDate,
  newsPillar,
  newsBody,
  newsDek,
  newsTitle,
  type NewsItem,
} from '../data/news';
import { useLang } from '../i18n/LangContext';
import { withBase } from '../base-path';

const NewsHero = () => {
  const { t } = useLang();
  return (
    <section className="news-hero" data-screen-label="01 News Hero">
      <div className="news-hero-grain"></div>
      <div className="container">
        <div className="news-hero-top">
          <a href={withBase('/')} className="news-back">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path
                d="M19 12H5M11 18l-6-6 6-6"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {t('newsPage.back')}
          </a>
          <div className="news-hero-meta">
            {t('newsPage.meta')} · {NEWS.length} {t('newsPage.stories')}
          </div>
        </div>
        <h1 className="news-hero-title">
          {t('newsPage.title.first')} <em>{t('newsPage.title.second')}</em>
        </h1>
        <p className="news-hero-lede">{t('newsPage.lede')}</p>
      </div>
    </section>
  );
};

type OpenHandler = (id: string) => void;

const AllNewsSection = ({ onOpen }: { onOpen: OpenHandler }) => {
  const { t, lang } = useLang();
  const all = useMemo(() => 'All', []);
  const cats = useMemo(() => [all, ...new Set(NEWS.map((n) => n.category))], [all]);
  const pillars = useMemo(() => [all, ...new Set(NEWS.map((n) => n.pillar))], [all]);
  const [filter, setFilter] = useState<string>(all);
  const [pillarFilter, setPillarFilter] = useState<string>(all);

  const filtered = NEWS_BY_DATE.filter((n) => {
    if (filter !== all && n.category !== filter) return false;
    if (pillarFilter !== all && n.pillar !== pillarFilter) return false;
    return true;
  });

  return (
    <section className="news-page-all">
      <div className="container">
        <div className="npa-head">
          <div>
            <div className="eyebrow">{t('newsPage.allEyebrow')}</div>
          </div>
          <div className="npa-count">
            {filtered.length} {t('newsPage.countOf')} {NEWS.length}
          </div>
        </div>

        <div className="npa-filters">
          <div className="npa-filter-row">
            <span className="npa-filter-label">{t('newsPage.filterTopic')}</span>
            <div className="npa-chips">
              {cats.map((c) => (
                <button
                  key={c}
                  type="button"
                  className={`npa-chip ${filter === c ? 'is-active' : ''}`}
                  onClick={() => setFilter(c)}
                >
                  {c === all ? t('newsPage.filterAll') : newsCategory(c as NewsItem['category'], lang)}
                </button>
              ))}
            </div>
          </div>
          <div className="npa-filter-row">
            <span className="npa-filter-label">{t('newsPage.filterPillar')}</span>
            <div className="npa-chips">
              {pillars.map((c) => (
                <button
                  key={c}
                  type="button"
                  className={`npa-chip ${pillarFilter === c ? 'is-active' : ''}`}
                  onClick={() => setPillarFilter(c)}
                >
                  {c === all ? t('newsPage.filterAll') : newsPillar(c, lang)}
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
                <img className="news-cover-img" src={n.image} alt="" aria-hidden="true" loading="lazy" />
                <div className="npa-tag">{newsCategory(n.category, lang)}</div>
              </div>
              <div className="npa-body">
                <div className="npa-meta">
                  <span>{newsDate(n, lang)}</span>
                  <span className="dot">·</span>
                  <span>{newsPillar(n.pillar, lang)}</span>
                </div>
                <h3 className="npa-title">{newsTitle(n, lang)}</h3>
                <p className="npa-dek">{newsDek(n, lang)}</p>
                <span className="npa-read">
                  {t('newsPage.read')}
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
          <div className="npa-empty">{t('newsPage.empty')}</div>
        )}
      </div>
    </section>
  );
};

const ArticleModal = ({ article, onClose }: { article: NewsItem; onClose: () => void }) => {
  const { lang } = useLang();
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
          <img className="news-cover-img" src={article.image} alt={newsTitle(article, lang)} />
          <div className="am-cover-overlay">
            <div className="am-cover-tag">{newsCategory(article.category, lang)}</div>
            <div className="am-cover-meta">
              <span>{newsDate(article, lang)}</span>
              <span className="dot">·</span>
              <span>{newsPillar(article.pillar, lang)}</span>
            </div>
          </div>
        </div>
        <div className="am-body">
          <h1 className="am-title">{newsTitle(article, lang)}</h1>
          {/* Stories that carry no separate summary use their opening paragraph
              as the card dek, so printing it here would repeat it. */}
          {newsDek(article, lang) !== newsBody(article, lang)[0] && (
            <p className="am-dek">{newsDek(article, lang)}</p>
          )}
          <div className="am-rule"></div>
          <div className="am-text">
            {newsBody(article, lang).map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="am-footer">
            <span className="am-attrib">
              {newsPillar(article.pillar, lang)}, {newsDate(article, lang)}
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
      <AllNewsSection onOpen={handleOpen} />
      <Footer />
      {article && <ArticleModal article={article} onClose={handleClose} />}
    </>
  );
};
