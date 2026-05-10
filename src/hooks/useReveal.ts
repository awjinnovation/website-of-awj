import { useEffect } from 'react';

/**
 * Toggles `.in` on `.reveal`, `.reveal-stagger`, and `.reveal-up`
 * elements based on whether they're intersecting the viewport.
 *
 * Unlike a one-shot reveal, this keeps observing — so when the
 * auto-scroll cycle comes back to a section, its entrance animations
 * replay as if the user were arriving for the first time.
 */
export const useReveal = () => {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .reveal-stagger, .reveal-up');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('in');
          else e.target.classList.remove('in');
        });
      },
      { threshold: 0.15 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
};
