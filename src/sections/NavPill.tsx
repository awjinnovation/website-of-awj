import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { Magnetic } from '../components/Magnetic';
import { PILLARS } from '../data/pillars';

export const NavPill = () => {
  const [scrolled, setScrolled] = useState(false);
  const [onDark, setOnDark] = useState(true);
  const [pillarsOpen, setPillarsOpen] = useState(false);
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

  // Close dropdown on Escape, outside click, and window scroll (any nav).
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

  return (
    <nav className={`nav-pill ${scrolled ? 'scrolled' : ''} ${onDark ? 'on-dark' : ''}`}>
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
              return (
                <a
                  key={p.id}
                  href={`/pillars/${p.id}`}
                  className="pillars-panel-chip"
                  style={style}
                  role="menuitem"
                >
                  <span className="pdl-dot" aria-hidden="true" />
                  <span className="pdl-awj">AWJ</span>
                  <span className="pdl-name">{p.name}</span>
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
    </nav>
  );
};
