import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { Magnetic } from '../components/Magnetic';
import { PILLARS } from '../data/pillars';

export const NavPill = () => {
  const [scrolled, setScrolled] = useState(false);
  const [onDark, setOnDark] = useState(true);
  const [pillarsOpen, setPillarsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const y = 50;
      const sections = document.querySelectorAll(
        '.hero, .hero-v3, .news-hero, .pillar-hero, .pillars-stack, .showcase, .success, .contact, .marquee',
      );
      let dark = false;
      sections.forEach((s) => {
        const r = s.getBoundingClientRect();
        if (r.top <= y && r.bottom >= y) dark = true;
      });
      setOnDark(dark);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close desktop dropdown on Escape, outside click.
  useEffect(() => {
    if (!pillarsOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setPillarsOpen(false);
    };
    const onClick = (e: MouseEvent) => {
      const target = e.target as Element | null;
      if (target && !target.closest('.pillars-dropdown')) setPillarsOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('click', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('click', onClick);
    };
  }, [pillarsOpen]);

  // Mobile menu: lock body scroll while open, close on Escape.
  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [mobileOpen]);

  const openPanel = () => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setPillarsOpen(true);
  };
  const scheduleClose = () => {
    if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
    closeTimerRef.current = window.setTimeout(() => setPillarsOpen(false), 180);
  };

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <nav
        className={`nav-pill ${scrolled ? 'scrolled' : ''} ${onDark ? 'on-dark' : ''} ${mobileOpen ? 'mobile-open' : ''}`}
      >
        <a href="/" className="brand" aria-label="AWJ">
          <img src="/assets/awj-horizontal.svg" alt="AWJ" className="lockup lockup-light" />
          <img src="/assets/awj-horizontal.svg" alt="" aria-hidden="true" className="lockup lockup-dark" />
        </a>
        <div className="links">
          <a href="#about">About</a>

          <div
            className={`pillars-dropdown ${pillarsOpen ? 'is-open' : ''}`}
            onMouseEnter={openPanel}
            onMouseLeave={scheduleClose}
          >
            <button
              type="button"
              className="pillars-trigger"
              onClick={() => setPillarsOpen((o) => !o)}
              aria-expanded={pillarsOpen}
              aria-haspopup="menu"
            >
              Pillars
              <svg
                className="pillars-chev"
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M6 9l6 6 6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className="pillars-panel" role="menu">
              {PILLARS.map((p) => {
                const style: CSSProperties = { ['--accent' as string]: p.accent };
                const logoSrc = onDark ? p.logo.replace('.svg', '-onDark.svg') : p.logo;
                return (
                  <a
                    key={p.id}
                    href={`/pillars/${p.id}`}
                    className="chip chip-logo pillars-panel-chip"
                    style={style}
                    role="menuitem"
                    aria-label={`AWJ ${p.name}`}
                  >
                    <img src={logoSrc} alt={`AWJ ${p.name}`} />
                  </a>
                );
              })}
            </div>
          </div>

          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#events">Events</a>
          <a href="#news">News</a>
          <a href="#blog">Blog</a>
        </div>
        <Magnetic strength={0.25}>
          <a href="#contact" className="cta">
            Get in touch
          </a>
        </Magnetic>
        <button
          type="button"
          className="nav-burger"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((o) => !o)}
        >
          <span /><span /><span />
        </button>
      </nav>

      {mobileOpen && (
        <div className="nav-mobile-sheet" onClick={closeMobile}>
          <div className="nav-mobile-panel" onClick={(e) => e.stopPropagation()}>
            <div className="nav-mobile-list">
              <a href="#about" onClick={closeMobile}>About</a>

              <div className="nav-mobile-group">
                <div className="nav-mobile-group-label">Pillars</div>
                {PILLARS.map((p) => {
                  const style: CSSProperties = { ['--accent' as string]: p.accent };
                  return (
                    <a
                      key={p.id}
                      href={`/pillars/${p.id}`}
                      className="nav-mobile-pillar"
                      style={style}
                      onClick={closeMobile}
                    >
                      <span className="pdl-dot" aria-hidden="true" />
                      <span className="pdl-awj">AWJ</span>
                      <span className="pdl-name">{p.name}</span>
                    </a>
                  );
                })}
              </div>

              <a href="#services" onClick={closeMobile}>Services</a>
              <a href="#projects" onClick={closeMobile}>Projects</a>
              <a href="#events" onClick={closeMobile}>Events</a>
              <a href="#news" onClick={closeMobile}>News</a>
              <a href="#blog" onClick={closeMobile}>Blog</a>
            </div>

            <a href="#contact" className="nav-mobile-cta" onClick={closeMobile}>
              Get in touch
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      )}
    </>
  );
};
