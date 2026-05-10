/* Hero — bold headline with animated AWJ chevron mark + four pillar entry points */

const Hero = () => {
  const heroRef = React.useRef(null);
  const glowRef = React.useRef(null);

  React.useEffect(() => {
    const onMove = (e) => {
      if (!glowRef.current) return;
      glowRef.current.style.left = e.clientX + 'px';
      glowRef.current.style.top = e.clientY + 'px';
      glowRef.current.style.opacity = '1';
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section className="hero" ref={heroRef} data-screen-label="01 Hero">
      <div className="hero-grid" />
      <AwjMark className="hero-mark hero-mark-anim draw" />
      <div ref={glowRef} className="cursor-glow" />

      <div className="container hero-content">
        <div className="hero-eyebrow">
          <span className="dot"></span>
          <span>AWJ Group · Est. 2003</span>
          <span style={{ opacity: 0.4 }}>·</span>
          <span>Riyadh / Dubai / London</span>
        </div>

        <h1>
          <span className="word"><span>Building</span></span>{" "}
          <span className="word"><span>what</span></span>{" "}
          <span className="word"><span>comes</span></span>{" "}
          <span className="word"><span><em className="ital">next.</em></span></span>
        </h1>

        <p className="hero-sub">
          AWJ is a holding group operating across four pillars — Academy, Sustain,
          Innovation, and Systems — engineered to deliver durable progress for
          the regions, sectors, and societies we serve.
        </p>

        <div className="hero-actions">
          <a href="#pillars" className="btn btn-primary">
            Explore the pillars
            <svg className="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <a href="#contact" className="btn btn-ghost">Talk to us</a>
        </div>
      </div>

      <div className="hero-pillars">
        {PILLARS.map((p, i) => (
          <a
            key={p.id}
            href={"#" + p.id}
            className="hero-pillar"
            style={{ "--pillar-color": p.accent }}
          >
            <div className="num">P / 0{i + 1}</div>
            <div className="name">AWJ <em>{p.name}</em></div>
            <div className="desc">{p.desc}</div>
            <div className="arrow-icn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

window.Hero = Hero;
