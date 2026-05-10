/* AWJ Landing — main app */
const { useState, useEffect, useRef } = React;

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [onDark, setOnDark] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      // detect dark sections under nav
      const y = 60;
      const sections = document.querySelectorAll('.hero, .showcase, .services, .contact, .footer');
      let dark = false;
      sections.forEach(s => {
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
    <nav className={`nav ${scrolled ? 'scrolled' : ''} ${onDark ? 'on-dark' : ''}`}>
      <a href="#top" className="nav-logo">
        <AwjMark className="mark" />
        <span>AWJ</span>
      </a>
      <div className="nav-links">
        <a href="#pillars">Pillars</a>
        <a href="#showcase">Companies</a>
        <a href="#services">Capabilities</a>
        <a href="#projects">Work</a>
        <a href="#news">News</a>
      </div>
      <a href="#contact" className="nav-cta">Get in touch</a>
    </nav>
  );
};

const App = () => {
  useReveal();

  // Tweaks
  const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
    "accentPillar": "innovation",
    "heroVariant": "headline",
    "showGrid": true,
    "scrollStyle": "A"
  }/*EDITMODE-END*/;
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Apply tweaks
  useEffect(() => {
    const accent = {
      academy: "var(--academy)",
      sustain: "var(--sustain)",
      innovation: "var(--innovation)",
      systems: "var(--systems)",
    }[tweaks.accentPillar] || "var(--innovation)";
    document.documentElement.style.setProperty('--hero-accent', accent);
    // recolor cursor glow + italic accents
    const style = document.getElementById('tweak-style') || (() => {
      const s = document.createElement('style'); s.id = 'tweak-style'; document.head.appendChild(s); return s;
    })();
    style.textContent = `
      .cursor-glow { background: radial-gradient(circle, ${accent.replace('var(', 'rgba(').replace(')', ', 0.18)')}, transparent 60%) !important; }
      .hero h1 .ital { color: ${accent} !important; opacity: 0.9; }
      .contact h2 em { color: ${accent} !important; }
      .hero-grid { display: ${tweaks.showGrid ? 'block' : 'none'}; }
      .services::before { display: ${tweaks.showGrid ? 'block' : 'none'}; }
    `;
  }, [tweaks]);

  // Apply scroll style (Variant: A | B | C | none)
  useEffect(() => {
    document.documentElement.setAttribute('data-scroll', tweaks.scrollStyle || 'none');
  }, [tweaks.scrollStyle]);

  // JS fallback for browsers without scroll-driven animations (Safari < 17.x)
  useEffect(() => {
    const supportsTimeline = CSS && CSS.supports && CSS.supports('animation-timeline: scroll()');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (supportsTimeline || reduced) return;

    const variant = tweaks.scrollStyle;
    if (!variant || variant === 'none') return;

    const hero = document.querySelector('.hero-v3');
    const heroLeft = document.querySelector('.hero-v3-left');
    const watermark = document.querySelector('.hero-watermark');
    const mesh = document.querySelector('.hero-mesh');
    const stripe = document.querySelector('.hero-stripe');
    const inner = document.querySelector('.hero-v3-inner');
    if (!hero) return;

    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const vh = window.innerHeight;
        const y = window.scrollY;
        const t = Math.max(0, Math.min(1, y / vh));   // 0..1 over first viewport

        if (variant === 'A') {
          if (mesh)      mesh.style.transform     = `translateY(${(-6  * t).toFixed(2)}vh) scale(${(1 + 0.04 * t).toFixed(3)})`;
          if (watermark) {
            watermark.style.transform = `translateY(${(-18 * t).toFixed(2)}vh)`;
            watermark.style.opacity   = (1 - 0.45 * t).toFixed(3);
          }
          if (heroLeft)  {
            heroLeft.style.transform  = `translateY(${(-32 * t).toFixed(2)}vh)`;
            heroLeft.style.opacity    = (1 - t).toFixed(3);
          }
          if (stripe)    {
            const ts = Math.min(1, y / (vh * 0.8));
            stripe.style.transform    = `translateY(${(-12 * ts).toFixed(2)}vh)`;
            stripe.style.opacity      = (1 - 0.6 * ts).toFixed(3);
          }
        } else if (variant === 'B') {
          if (inner) {
            const o = 1 - t;
            const s = 1 - 0.06 * t;
            const ty = -6 * t;
            const blur = 6 * t;
            inner.style.opacity = o.toFixed(3);
            inner.style.transform = `translateY(${ty.toFixed(2)}vh) scale(${s.toFixed(3)})`;
            inner.style.filter = `blur(${blur.toFixed(2)}px)`;
          }
          if (mesh) {
            mesh.style.transform = `scale(${(1 + 0.15 * t).toFixed(3)})`;
            mesh.style.opacity = (0.55 - 0.30 * t).toFixed(3);
          }
        } else if (variant === 'C') {
          hero.style.transform = `translateY(${(-40 * t).toFixed(2)}vh)`;
        }
      });
    };

    const reset = () => {
      [mesh, watermark, heroLeft, stripe, inner, hero].forEach(el => {
        if (!el) return;
        el.style.transform = '';
        el.style.opacity = '';
        el.style.filter = '';
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
      reset();
    };
  }, [tweaks.scrollStyle]);

  return (
    <>
      <Nav />
      <div id="top" />
      <Hero />
      <Marquee />
      <Stats />
      <PillarsRow />
      <Showcase />
      <Services />
      <Projects />
      <News />
      <Success />
      <Partners />
      <Contact />
      <Footer />

      <TweaksPanel title="Tweaks">
        <TweakSection title="Accent">
          <TweakSelect
            label="Accent pillar"
            value={tweaks.accentPillar}
            onChange={(v) => setTweak('accentPillar', v)}
            options={[
              { value: "academy", label: "Academy · purple" },
              { value: "sustain", label: "Sustain · teal" },
              { value: "innovation", label: "Innovation · orange" },
              { value: "systems", label: "Systems · blue" },
            ]}
          />
        </TweakSection>
        <TweakSection title="Display">
          <TweakToggle
            label="Show grid backgrounds"
            value={tweaks.showGrid}
            onChange={(v) => setTweak('showGrid', v)}
          />
        </TweakSection>
        <TweakSection title="Scroll into stats">
          <TweakSelect
            label="Scroll style"
            value={tweaks.scrollStyle}
            onChange={(v) => setTweak('scrollStyle', v)}
            options={[
              { value: "none", label: "None — no parallax" },
              { value: "A",    label: "A — Layered depth (recommended)" },
              { value: "B",    label: "B — Pinned reveal" },
              { value: "C",    label: "C — Slow push" },
            ]}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
