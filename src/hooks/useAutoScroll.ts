import { useEffect } from 'react';

const SECTION_SELECTORS = [
  '.hero-v3',
  '.stats-band',
  '.pillars-stack',
  '.services',
  '.projects',
  '.news',
  '.partners',
  '.contact',
];

export const useAutoScroll = (intervalMs = 60_000) => {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let timer = 0;

    const getSections = () =>
      SECTION_SELECTORS
        .map((s) => document.querySelector<HTMLElement>(s))
        .filter((el): el is HTMLElement => el !== null);

    const scrollToNext = () => {
      const els = getSections();
      if (els.length === 0) return;
      const y = window.scrollY + 50;
      let cur = 0;
      els.forEach((el, i) => {
        if (el.offsetTop <= y) cur = i;
      });
      const next = (cur + 1) % els.length;
      window.scrollTo({ top: els[next].offsetTop, behavior: 'smooth' });
    };

    const reset = () => {
      window.clearInterval(timer);
      timer = window.setInterval(scrollToNext, intervalMs);
    };

    const onWheel = () => reset();
    const onTouch = () => reset();
    const onKey = (e: KeyboardEvent) => {
      if (
        e.key === 'ArrowDown' ||
        e.key === 'ArrowUp' ||
        e.key === 'PageDown' ||
        e.key === 'PageUp' ||
        e.key === 'Home' ||
        e.key === 'End' ||
        e.key === ' '
      ) {
        reset();
      }
    };

    reset();
    window.addEventListener('wheel', onWheel, { passive: true });
    window.addEventListener('touchmove', onTouch, { passive: true });
    window.addEventListener('keydown', onKey);

    return () => {
      window.clearInterval(timer);
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('touchmove', onTouch);
      window.removeEventListener('keydown', onKey);
    };
  }, [intervalMs]);
};
