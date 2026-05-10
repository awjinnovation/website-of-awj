import { useEffect, useState } from 'react';
import { Magnetic } from '../components/Magnetic';

export const NavPill = () => {
  const [scrolled, setScrolled] = useState(false);
  const [onDark, setOnDark] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const y = 50;
      const sections = document.querySelectorAll(
        '.hero, .hero-v3, .news-hero, .pillars-stack, .showcase, .success, .contact, .marquee',
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

  return (
    <nav className={`nav-pill ${scrolled ? 'scrolled' : ''} ${onDark ? 'on-dark' : ''}`}>
      <a href="#top" className="brand" aria-label="AWJ">
        <img src="/assets/awj-horizontal.svg" alt="AWJ" className="lockup lockup-light" />
        <img src="/assets/awj-horizontal.svg" alt="" aria-hidden="true" className="lockup lockup-dark" />
      </a>
      <div className="links">
        <a href="#about">About</a>
        <a href="#pillars">Pillars</a>
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
