import { useEffect, useRef } from 'react';

export const Cursor = () => {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const trailRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    const colors = ['#9674ce', '#00a19d', '#ff6b00', '#0069c8'];
    let trailIdx = 0;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
      }
      const t = trailRefs.current[trailIdx % trailRefs.current.length];
      if (t) {
        t.style.left = mx + 'px';
        t.style.top = my + 'px';
        t.style.background = colors[trailIdx % 4];
        t.style.opacity = '0.7';
        window.setTimeout(() => {
          t.style.opacity = '0';
        }, 350);
      }
      trailIdx++;

      const el = document.elementFromPoint(mx, my) as Element | null;
      const dark =
        el &&
        el.closest(
          '.hero, .hero-v3, .news-hero, .pillar-hero, .pillars-stack, .showcase, .success, .contact, .marquee, .nav-pill.on-dark',
        );
      document.body.classList.toggle('on-dark-cursor', !!dark);

      const active =
        el &&
        el.closest(
          'a, button, .stack-card, .project-row, .bento-card, .wizard-option, .stack-dot, .showcase-tab, .project-tile',
        );
      document.body.classList.toggle('cursor-active', !!active);
    };

    const tick = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    window.addEventListener('mousemove', onMove);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <div
          key={`trail-${i}`}
          ref={(el) => {
            trailRefs.current[i] = el;
          }}
          className="cursor-trail"
        />
      ))}
    </>
  );
};
