const Arrow = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <path
      d="M5 12h14M13 5l7 7-7 7"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Services = () => (
  <section className="services mesh-bg" id="services" data-screen-label="05 Services">
    <div className="container">
      <div className="services-head reveal">
        <div>
          <h2 className="section-title" style={{ marginTop: 0 }}>
            What we do <em>together.</em>
          </h2>
        </div>
      </div>
      <div className="bento reveal-stagger">
        <div className="bento-card b-1 bento-ink">
          <div>
            <div className="title">
              Strategic <span style={{ fontWeight: 800 }}>Advisory</span>
            </div>
            <p className="body" style={{ marginTop: 18 }}>
              Operating-model design, capital strategy, and group-level transformation
              programs delivered with cross-pillar discipline.
            </p>
          </div>
          <a
            href="#services"
            className="bento-cta"
            onClick={(e) => e.preventDefault()}
          >
            More services
            <Arrow />
          </a>
        </div>
        <div className="bento-card b-2 bento-academy">
          <div className="title">Capability Building</div>
          <p className="body">
            Accredited learning systems and workforce development at scale.
          </p>
          <a
            href="#services"
            className="bento-cta"
            onClick={(e) => e.preventDefault()}
          >
            More services
            <Arrow />
          </a>
          <img src="/assets/icon-academy.svg?v=3" className="icon" alt="" />
        </div>
        <div className="bento-card b-3 bento-sustain">
          <div className="title">ISO Standards Implementation &amp; Certification</div>
          <p className="body">
            Practical implementation, auditing and certification support across ISO
            26000, 20121, 19600, 20400 &amp; 37001.
          </p>
          <a
            href="#services"
            className="bento-cta"
            onClick={(e) => e.preventDefault()}
          >
            More services
            <Arrow />
          </a>
          <img src="/assets/icon-sustain.svg" className="icon" alt="" />
        </div>
        <div className="bento-card b-4 bento-innovation">
          <div className="title">Innovation &amp; Capability</div>
          <p className="body">Talent, advanced tech &amp; strategy.</p>
          <a
            href="#services"
            className="bento-cta"
            onClick={(e) => e.preventDefault()}
          >
            More services
            <Arrow />
          </a>
          <img src="/assets/icon-innovation.svg" className="icon" alt="" />
        </div>
        <div className="bento-card b-5 bento-systems">
          <div className="title">Systems Integration</div>
          <p className="body">Mission-critical engineering &amp; OT.</p>
          <a
            href="#services"
            className="bento-cta"
            onClick={(e) => e.preventDefault()}
          >
            More services
            <Arrow />
          </a>
          <img src="/assets/icon-systems.svg" className="icon" alt="" />
        </div>
      </div>
    </div>
  </section>
);
