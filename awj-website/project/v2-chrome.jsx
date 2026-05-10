/* AWJ v2 — chrome: cursor + magnetic + reveal */
const { useState, useEffect, useRef, useCallback } = React;

const useReveal = () => {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .reveal-stagger');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.15 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
};

const Cursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const trailRefs = useRef([]);
  useEffect(() => {
    let mx = window.innerWidth / 2, my = window.innerHeight / 2;
    let rx = mx, ry = my;
    const colors = ['#9674ce', '#00a19d', '#ff6b00', '#0069c8'];
    let trailIdx = 0;
    const onMove = (e) => {
      mx = e.clientX; my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
      }
      const t = trailRefs.current[trailIdx % trailRefs.current.length];
      if (t) {
        t.style.left = mx + 'px'; t.style.top = my + 'px';
        t.style.background = colors[trailIdx % 4];
        t.style.opacity = '0.7';
        setTimeout(() => { t.style.opacity = '0'; }, 350);
      }
      trailIdx++;
      // dark detection
      const el = document.elementFromPoint(mx, my);
      const dark = el && el.closest('.hero, .pillars-stack, .showcase, .success, .contact, .marquee, .nav-pill.on-dark');
      document.body.classList.toggle('on-dark-cursor', !!dark);
      // active for buttons/links
      const active = el && (el.closest('a, button, .stack-card, .project-row, .bento-card, .wizard-option, .stack-dot, .showcase-tab'));
      document.body.classList.toggle('cursor-active', !!active);
    };
    const tick = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      }
      requestAnimationFrame(tick);
    };
    tick();
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);
  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
      {[0,1,2,3,4,5,6,7].map(i => (
        <div key={i} ref={el => trailRefs.current[i] = el} className="cursor-trail" />
      ))}
    </>
  );
};

const Magnetic = ({ children, strength = 0.35, className = "" }) => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2);
      const y = e.clientY - (r.top + r.height / 2);
      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    };
    const onLeave = () => { el.style.transform = ''; };
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => { el.removeEventListener('mousemove', onMove); el.removeEventListener('mouseleave', onLeave); };
  }, [strength]);
  return <span ref={ref} className={`magnetic ${className}`}>{children}</span>;
};

window.useReveal = useReveal;
window.Cursor = Cursor;
window.Magnetic = Magnetic;
