/* AWJ v2 — Hero (4-quadrant), Nav (pill), Marquee, Stats */

const NavPill = () => {
  const [scrolled, setScrolled] = useState(false);
  const [onDark, setOnDark] = useState(true);
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const y = 50;
      const sections = document.querySelectorAll('.hero, .pillars-stack, .showcase, .success, .contact, .marquee');
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
    <nav className={`nav-pill ${scrolled ? 'scrolled' : ''} ${onDark ? 'on-dark' : ''}`}>
      <a href="#top" className="brand" aria-label="AWJ">
        <img src="assets/awj-horizontal.svg" alt="AWJ" className="lockup lockup-light" />
        <img src="assets/awj-horizontal.svg" alt="" aria-hidden="true" className="lockup lockup-dark" />
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
        <a href="#contact" className="cta">Get in touch</a>
      </Magnetic>
    </nav>
  );
};

/* ---------- Hero v3: split horizon, gradient mesh, AWJ watermark ---------- */
const Hero = () => {
  const pillars = [
    { id: "academy", name: "Academy", color: "var(--academy)", logo: "assets/logo-academy-onDark.svg" },
    { id: "sustain", name: "Sustain", color: "var(--sustain)", logo: "assets/logo-sustain-onDark.svg" },
    { id: "innovation", name: "Innovation", color: "var(--innovation)", logo: "assets/logo-innovation-onDark.svg" },
    { id: "systems", name: "Systems", color: "var(--systems)", logo: "assets/logo-systems-onDark.svg" },
  ];
  return (
    <section className="hero-v3" data-screen-label="01 Hero">
      <div className="hero-mesh"></div>
      <div className="hero-grain"></div>

      <div className="hero-v3-inner">
        <div className="hero-v3-left">
          <div className="hero-eyebrow reveal-up">
            <span className="dot"></span>
            Sustainable technologies & innovation development Co.
          </div>
          <h1 className="hero-headline">
            <span className="line reveal-up" style={{animationDelay: "0.1s"}}>Bridge,</span>
            <span className="line reveal-up" style={{animationDelay: "0.2s"}}>Empower,</span>
            <span className="line reveal-up ital" style={{animationDelay: "0.3s"}}>Accelerate.</span>
          </h1>
          <p className="hero-lede reveal-up" style={{animationDelay: "0.45s"}}>
            AWJ bridges the gaps in Oman's innovation ecosystem — accelerating sustainable technologies, empowering young Omani talent, and building the institutions that turn opportunity into national wealth.
          </p>
          <div className="hero-ctas reveal-up" style={{animationDelay: "0.55s"}}>
            <Magnetic strength={0.3}>
              <a href="#contact" className="hero-cta-primary">
                Get in touch
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </Magnetic>
            <a href="#pillars" className="hero-cta-secondary">
              Explore the group
            </a>
          </div>

        </div>

        <div className="hero-v3-right">
          <svg className="hero-watermark" viewBox="0 0 876.22 539.3" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <polygon className="awj-chev awj-chev-1" fill="rgba(255,255,255,0.06)" points="-7.42 214.36 -7.42 274.18 160.4 274.18 525.95 500.86 716.89 500.86 858.21 334.94 990.48 471.02 1033.37 429.32 855.29 246.11 689.26 441.04 542.99 441.04 177.44 214.36 -7.42 214.36" />
            <polygon className="awj-chev awj-chev-2" fill="rgba(255,255,255,0.10)" points="691.05 262.56 623.08 214.36 381.78 214.36 156.48 441.04 -3.09 441.04 -3.09 500.86 181.37 500.86 406.66 274.18 604.02 274.18 700.17 342.36 959.45 50.48 914.73 10.75 691.05 262.56" />
            <polygon className="awj-chev awj-chev-3" fill="rgba(255,255,255,0.14)" points="834.22 -46.35 495.86 327.7 155.03 327.7 -.56 187.72 -40.57 232.19 132.08 387.52 522.36 387.52 878.53 -6.16 834.22 -46.35" />
          </svg>
          <div className="hero-pillar-chips">
            <div className="chips-label">Pillars</div>
            <div className="chips-row">
              {pillars.map((p, i) => (
                <a key={p.id} href={"#" + p.id} className="chip chip-logo reveal-up" style={{animationDelay: `${0.6 + i * 0.08}s`}}>
                  <img src={p.logo} alt={`AWJ ${p.name}`} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

const Marquee = () => null;

/* Count-up tied to the column's entrance: only starts when the
   .stat-col has finished sliding in (--enter >= 0.95). After the
   count finishes, the number gets .is-pulsing (CSS micro-pulse)
   and begins idle drift ±1 every 4–7s for a "live data" feel. */
const useCounter = (end) => {
  const [v, setV] = useState(0);
  const [done, setDone] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const col = el.closest('.stat-col');
    let started = false;
    let raf = 0;
    const watch = () => {
      if (!started && col) {
        const enter = parseFloat(getComputedStyle(col).getPropertyValue('--enter')) || 0;
        const inView = el.getBoundingClientRect().top < window.innerHeight - 40;
        if (enter >= 0.95 && inView) {
          started = true;
          let t0; const step = (t) => {
            if (!t0) t0 = t;
            const k = Math.min(1, (t - t0) / 1500);
            setV(Math.round(end * (1 - Math.pow(1 - k, 3))));
            if (k < 1) requestAnimationFrame(step);
            else setDone(true);
          };
          requestAnimationFrame(step);
          return;
        }
      }
      raf = requestAnimationFrame(watch);
    };
    raf = requestAnimationFrame(watch);
    return () => cancelAnimationFrame(raf);
  }, [end]);
  return [v, ref, done];
};

const StatNum = ({ end, suffix }) => {
  const [v, ref, done] = useCounter(end);
  const [drift, setDrift] = useState(0);

  // E — idle drift: once count has settled, gently nudge ±1 every
  // 4–7s so the number reads as a live counter rather than a static
  // figure. Drift is small (max 1 unit) and randomized per tick.
  useEffect(() => {
    if (!done) return;
    let live = true;
    const tick = () => {
      if (!live) return;
      const next = Math.random() < 0.5 ? -1 : 1;
      setDrift(next);
      const back = setTimeout(() => live && setDrift(0), 900);
      const next2 = setTimeout(tick, 4000 + Math.random() * 3000);
      return () => { clearTimeout(back); clearTimeout(next2); };
    };
    const t = setTimeout(tick, 1200);
    return () => { live = false; clearTimeout(t); };
  }, [done]);

  return (
    <div className={"num" + (done ? " is-pulsing" : "")} ref={ref}>
      {Math.max(0, v + (done ? drift : 0))}<span className="suffix">{suffix}</span>
    </div>
  );
};

const STAT_ROWS = [
  { color: "var(--academy)",    glow: "rgba(255, 107, 53, 0.18)",  end: 50,  suffix: "+", label: "Projects delivered",       desc: "Across infrastructure, ventures, and learning mandates." },
  { color: "var(--sustain)",    glow: "rgba(0, 168, 150, 0.18)",   end: 500, suffix: "+", label: "Professionals trained",    desc: "Operators, engineers, and educators upskilled in-house." },
  { color: "var(--innovation)", glow: "rgba(255, 138, 0, 0.18)",   end: 25,  suffix: "+", label: "Strategic partners",       desc: "Long-term partners across the GCC, Asia, and Africa." },
  { color: "var(--systems)",    glow: "rgba(0, 105, 200, 0.18)",   end: 10,  suffix: "+", label: "Years combined experience",desc: "Founding team operating expertise pooled at AWJ." },
];

const Stats = () => {
  return (
    <section className="stats-band" data-screen-label="02 Stats">
      <div className="stats-band-row container reveal-stagger">
        {STAT_ROWS.map((s, i) => (
          <div
            className="stat-col"
            key={i}
            style={{"--accent": s.color, "--accent-glow": s.glow}}
          >
            <div className="stat-col-top">
              <span className="stat-label">{s.label}</span>
            </div>
            <StatNum end={s.end} suffix={s.suffix} />
            <div className="stat-foot">
              <div className="stat-desc">{s.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

window.NavPill = NavPill;
window.Hero = Hero;
window.Marquee = Marquee;
window.Stats = Stats;
