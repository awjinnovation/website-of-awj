import { useEffect } from 'react';
import { Cursor } from './components/Cursor';
import { useReveal } from './hooks/useReveal';
import { useAutoScroll } from './hooks/useAutoScroll';
import { NavPill } from './sections/NavPill';
import { Hero } from './sections/Hero';
import { Stats } from './sections/Stats';
import { PillarsStack } from './sections/PillarsStack';
import { Services } from './sections/Services';
import { Projects } from './sections/Projects';
import { News } from './sections/News';
import { Success } from './sections/Success';
import { Partners } from './sections/Partners';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';

export const App = () => {
  useReveal();
  useAutoScroll(30_000);

  // Drives --scroll-p (0..1) across the hero→stats handoff for the
  // chevron exit / stat column entry choreography defined in styles-v2.css.
  useEffect(() => {
    let raf = 0;
    const tick = () => {
      const hero = document.querySelector<HTMLElement>('.hero-v3');
      if (hero) {
        const h = hero.offsetHeight || 1;
        const y = window.scrollY;
        const p = Math.max(0, Math.min(1, y / h));
        document.documentElement.style.setProperty('--scroll-p', p.toFixed(4));
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <>
      <Cursor />
      <NavPill />
      <div id="top" />
      <div className="hero-stats-bridge">
        <Hero />
        <Stats />
      </div>
      <PillarsStack />
      <Services />
      <Projects />
      <News />
      <Success />
      <Partners />
      <Contact />
      <Footer />
    </>
  );
};
