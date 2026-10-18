import { useEffect } from 'react';

const SELECTOR = '.reveal, .reveal-stagger, .reveal-up, .hero-v3';

/**
 * Toggles `.in` on `.reveal`, `.reveal-stagger`, and `.reveal-up`
 * elements based on whether they're intersecting the viewport.
 *
 * Unlike a one-shot reveal, this keeps observing, so when the
 * auto-scroll cycle comes back to a section, its entrance animations
 * replay as if the user were arriving for the first time.
 *
 * Elements mounted after the first render (e.g. lists React rebuilds when
 * the language changes and their keys change) are picked up through a
 * MutationObserver; otherwise they would keep opacity 0 until a reload.
 */
export const useReveal = () => {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('in');
          else e.target.classList.remove('in');
        });
      },
      { threshold: 0.15 },
    );
    document.querySelectorAll(SELECTOR).forEach((el) => io.observe(el));

    const mo = new MutationObserver((mutations) => {
      mutations.forEach((m) => {
        m.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) return;
          if (node.matches(SELECTOR)) io.observe(node);
          node.querySelectorAll(SELECTOR).forEach((el) => io.observe(el));
        });
      });
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      mo.disconnect();
      io.disconnect();
    };
  }, []);
};
