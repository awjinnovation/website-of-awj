/* News page — featured + filterable list + article modal.
   Reuses NEWS data + NewsCover from news-data.jsx, NavPill + Cursor + Footer from main app.
*/

const { useState: useStateN, useEffect: useEffectN, useMemo: useMemoN } = React;

const NewsHero = () => (
  <section className="news-hero" data-screen-label="01 News Hero">
    <div className="news-hero-grain"></div>
    <div className="container">
      <div className="news-hero-top">
        <a href="AWJ Landing v2.html" className="news-back">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M19 12H5M11 18l-6-6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
          Back to AWJ
        </a>
        <div className="news-hero-meta">The Dispatch · {window.NEWS.length} stories</div>
      </div>
      <h1 className="news-hero-title">News &amp; <em>announcements</em>.</h1>
      <p className="news-hero-lede">
        Mandates, partnerships, and program milestones from across the AWJ group — Innovation, Academy, Sustain, and Systems.
      </p>
    </div>
  </section>
);

const FeaturedSection = ({ onOpen }) => {
  const featured = window.NEWS.filter(n => n.featured);
  return (
    <section className="news-page-featured">
      <div className="container">
        <div className="npf-head">
          <div className="eyebrow">— Featured stories</div>
          <h2 className="section-title">Top of the desk.</h2>
        </div>
        <div className="npf-grid">
          {featured.map(n => (
            <button key={n.id} type="button" className="npf-card" onClick={() => onOpen(n.id)}>
              <div className="npf-cover">
                <window.NewsCover category={n.category} />
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
                <span className="npf-read">Read story
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

const AllNewsSection = ({ onOpen }) => {
  const all = window.NEWS;
  const cats = useMemoN(() => ["All", ...new Set(all.map(n => n.category))], [all]);
  const [filter, setFilter] = useStateN("All");
  const [pillarFilter, setPillarFilter] = useStateN("All");
  const pillars = useMemoN(() => ["All", ...new Set(all.map(n => n.pillar))], [all]);

  const filtered = all.filter(n => {
    if (filter !== "All" && n.category !== filter) return false;
    if (pillarFilter !== "All" && n.pillar !== pillarFilter) return false;
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
          <div className="npa-count">{filtered.length} of {all.length}</div>
        </div>

        <div className="npa-filters">
          <div className="npa-filter-row">
            <span className="npa-filter-label">Topic</span>
            <div className="npa-chips">
              {cats.map(c => (
                <button key={c} type="button"
                  className={`npa-chip ${filter === c ? 'is-active' : ''}`}
                  onClick={() => setFilter(c)}>
                  {c}
                </button>
              ))}
            </div>
          </div>
          <div className="npa-filter-row">
            <span className="npa-filter-label">Pillar</span>
            <div className="npa-chips">
              {pillars.map(c => (
                <button key={c} type="button"
                  className={`npa-chip ${pillarFilter === c ? 'is-active' : ''}`}
                  onClick={() => setPillarFilter(c)}>
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="npa-grid">
          {filtered.map(n => (
            <button key={n.id} type="button" className="npa-card" onClick={() => onOpen(n.id)}>
              <div className="npa-cover">
                <window.NewsCover category={n.category} />
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
                <span className="npa-read">Read
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
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

const ArticleModal = ({ id, onClose }) => {
  const article = window.NEWS.find(n => n.id === id);
  useEffectN(() => {
    if (!article) return;
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [article, onClose]);

  if (!article) return null;
  return (
    <div className="article-modal" onClick={onClose}>
      <div className="am-backdrop"></div>
      <div className="am-card" onClick={e => e.stopPropagation()}>
        <button type="button" className="am-close" onClick={onClose} aria-label="Close">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
        </button>
        <div className="am-cover">
          <window.NewsCover category={article.category} />
          <div className="am-cover-overlay">
            <div className="am-cover-tag">{article.category}</div>
            <div className="am-cover-meta"><span>{article.dateLabel}</span><span className="dot">·</span><span>{article.pillar}</span></div>
          </div>
        </div>
        <div className="am-body">
          <h1 className="am-title">{article.title}</h1>
          <p className="am-dek">{article.dek}</p>
          <div className="am-rule"></div>
          <div className="am-text">
            {article.body.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <div className="am-footer">
            <span className="am-attrib">— {article.pillar}, {article.dateLabel}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const NewsApp = () => {
  window.useReveal();
  const [openId, setOpenId] = useStateN(null);

  // Open from URL hash on load
  useEffectN(() => {
    const fromHash = () => {
      const h = window.location.hash.replace('#', '');
      if (h && window.NEWS.find(n => n.id === h)) setOpenId(h);
    };
    fromHash();
    window.addEventListener('hashchange', fromHash);
    return () => window.removeEventListener('hashchange', fromHash);
  }, []);

  const handleClose = () => {
    setOpenId(null);
    if (window.location.hash) history.replaceState(null, "", window.location.pathname);
  };
  const handleOpen = (id) => {
    setOpenId(id);
    history.replaceState(null, "", '#' + id);
  };

  return (
    <>
      <window.Cursor />
      <NewsHero />
      <FeaturedSection onOpen={handleOpen} />
      <AllNewsSection onOpen={handleOpen} />
      <window.Footer />
      {openId && <ArticleModal id={openId} onClose={handleClose} />}
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<NewsApp />);
