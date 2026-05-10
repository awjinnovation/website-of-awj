/* AWJ v2 — Pillars 3D stack + Showcase + Bento Services */

const PILLAR_DATA = [
  { id: "academy", name: "Academy", num: "01 / 04", cls: "stack-card-academy", icon: "assets/icon-academy.svg?v=3", desc: "Designs accredited learning systems, executive programs, and workforce platforms — equipping people and institutions for the work that does not yet exist.", meta: [["Established", "2009"], ["Reach", "12 countries"], ["Alumni", "38,000+"]] },
  { id: "sustain", name: "Sustain", num: "02 / 04", cls: "stack-card-sustain", icon: "assets/icon-sustain.svg", desc: "End-to-end ESG advisory — sustainability strategy, GRI/MSX-aligned reporting, ISO certification, climate services, and an AI-powered ESG index for MSX-listed companies.", meta: [["Partner", "CSR Company Intl."], ["Reach", "70+ countries"], ["Focus", "ESG · Reporting · AI"]] },
  { id: "innovation", name: "Innovation", num: "03 / 04", cls: "stack-card-innovation", icon: "assets/icon-innovation.svg", desc: "A consulting practice for talent enablement, capability building, advanced technology, strategy, innovation management, IP, and program design — aligned with Oman Vision 2040.", meta: [["Based", "Muscat, Oman"], ["Sectors", "Government · Private"], ["Focus", "Talent · Tech · Strategy"]] },
  { id: "systems", name: "Systems", num: "04 / 04", cls: "stack-card-systems", icon: "assets/icon-systems.svg", desc: "Mission-critical engineering and integration — infrastructure, digital backbone, and operational technology for the institutions that keep regions running.", meta: [["Established", "2003"], ["Mandates", "240+"], ["Focus", "OT · Digital"]] },
];

const PillarsStack = () => {
  const [idx, setIdx] = useState(0);
  const total = PILLAR_DATA.length;
  const cardOffset = (i) => {
    const d = (i - idx + total) % total;
    if (d === 0) return { transform: "translateX(-50%) translateZ(0) rotateY(0deg) scale(1)", opacity: 1, zIndex: 4 };
    if (d === 1) return { transform: "translateX(-50%) translateX(60px) translateZ(-120px) rotateY(-12deg) scale(0.92)", opacity: 0.7, zIndex: 3 };
    if (d === 2) return { transform: "translateX(-50%) translateX(120px) translateZ(-220px) rotateY(-18deg) scale(0.84)", opacity: 0.4, zIndex: 2 };
    return { transform: "translateX(-50%) translateX(-80px) translateZ(-300px) rotateY(8deg) scale(0.8)", opacity: 0.25, zIndex: 1 };
  };
  // Drag/swipe
  const dragRef = useRef({ x: 0, dragging: false });
  const onPointerDown = (e) => { dragRef.current = { x: e.clientX, dragging: true }; };
  const onPointerUp = (e) => {
    if (!dragRef.current.dragging) return;
    const dx = e.clientX - dragRef.current.x;
    if (dx < -40) setIdx((idx + 1) % total);
    else if (dx > 40) setIdx((idx - 1 + total) % total);
    dragRef.current.dragging = false;
  };
  return (
    <section className="pillars-stack" id="pillars" data-screen-label="03 Pillars">
      <div className="container pillars-stack-layout">
        <div className="pillars-stack-head reveal">
          <h2 className="section-title" style={{marginTop: 0}}>AWJ <em>Pillars</em></h2>
          <p>AWJ Corporate operates through four pillars: <strong>AWJ Academy</strong> develops people and institutions, <strong>AWJ Sustain</strong> drives sustainability transformation, <strong>AWJ Innovation</strong> enables talent, capability, and digital transformation, and <strong>AWJ Systems</strong> integrates infrastructure, digital backbone, and operational technology.</p>
        </div>
        <div className="pillars-stack-right">
          <div className="stack-stage reveal" onPointerDown={onPointerDown} onPointerUp={onPointerUp}>
            {PILLAR_DATA.map((p, i) => (
              <div key={p.id} className={`stack-card ${p.cls}`} style={cardOffset(i)}>
                <div className="top-row">
                  <div className="num">PILLAR / {p.num}</div>
                  <img src={p.icon} alt="" className="icon" />
                </div>
                <div>
                  <div className="name"><span className="awj">AWJ</span><span className="sub">{p.name}</span></div>
                  <p className="desc">{p.desc}</p>
                  <div className="meta-row">
                    {p.meta.map(([k, v]) => (
                      <div key={k}><div className="m-k">{k}</div><div className="m-v">{v}</div></div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="stack-controls">
            <button className="stack-btn" onClick={() => setIdx((idx - 1 + total) % total)} aria-label="Previous">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <div className="stack-dots">
              {PILLAR_DATA.map((_, i) => (
                <button key={i} className={`stack-dot ${i === idx ? 'active' : ''}`} onClick={() => setIdx(i)} aria-label={`Pillar ${i+1}`} />
              ))}
            </div>
            <button className="stack-btn" onClick={() => setIdx((idx + 1) % total)} aria-label="Next">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const SHOWCASE_DATA = [
  { id: "academy", name: "Academy", eyebrow: "Pillar 01 / Capability", bgGrad: "linear-gradient(135deg, #5d3a9b 0%, #9674ce 100%)", desc: "AWJ Academy designs accredited learning systems, executive programs, and workforce platforms — equipping people and institutions for the work that does not yet exist.", meta: [["Established", "2009"], ["Reach", "12 countries · 38k alumni"], ["Focus", "Executive · Vocational · Civic"]] },
  { id: "sustain", name: "Sustain", eyebrow: "Pillar 02 / Sustainability", bgGrad: "linear-gradient(135deg, #00736f 0%, #00a19d 100%)", desc: "AWJ Sustain is the group's dedicated sustainability advisory — ESG strategy, GRI/MSX-aligned reporting, ISO certification, climate services, training, and AI-powered ESG intelligence for Oman and the GCC.", meta: [["Partner", "CSR Company International (70+ countries)"], ["Frameworks", "GRI · MSX · IFRS S1/S2 · CSRD"], ["Focus", "ESG Reporting · Strategy · AI"]] },
  { id: "innovation", name: "Innovation", eyebrow: "Pillar 03 / Innovation", bgGrad: "linear-gradient(135deg, #c44a00 0%, #ff6b00 100%)", desc: "AWJ Innovation is a Muscat-based consultancy enabling talent, capability, and digital transformation — covering strategic advisory, advanced technology, innovation management, IP development, and program design across government and private sector clients.", meta: [["Based", "Muscat · Sultanate of Oman"], ["Aligned with", "Oman Vision 2040"], ["Focus", "Talent · Tech · Strategy · IP"]] },
  { id: "systems", name: "Systems", eyebrow: "Pillar 04 / Engineering", bgGrad: "linear-gradient(135deg, #003c80 0%, #0069c8 100%)", desc: "AWJ Systems is the group's engineering and integration arm — mission-critical infrastructure, digital backbone, and operational technology for the institutions that keep regions running.", meta: [["Established", "2003"], ["Delivered", "240+ active mandates"], ["Focus", "Infrastructure · OT"]] },
];

const Showcase = () => {
  const [idx, setIdx] = useState(0);
  const ref = useRef(null);
  const inView = useRef(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { inView.current = e.isIntersecting; }, { threshold: 0.4 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  useEffect(() => {
    const t = setInterval(() => { if (inView.current) setIdx(i => (i + 1) % SHOWCASE_DATA.length); }, 6000);
    return () => clearInterval(t);
  }, []);
  const cur = SHOWCASE_DATA[idx];
  return (
    <section className="showcase" id="showcase" ref={ref} data-screen-label="04 Companies" style={{background: cur.bgGrad}}>
      <div className="showcase-grid-overlay" />
      <AwjMark className="showcase-mark" key={cur.id} />
      <div className="container">
        <div className="showcase-content">
          <div key={"l"+cur.id} className="reveal in">
            <div className="showcase-eyebrow">{cur.eyebrow}</div>
            <div className="showcase-name"><span className="awj">AWJ</span><span className="sub">{cur.name}</span></div>
            <p className="showcase-desc">{cur.desc}</p>
            <Magnetic strength={0.2}><a href={"#" + cur.id} className="showcase-cta" onClick={e => e.preventDefault()}>
              Visit AWJ {cur.name}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a></Magnetic>
          </div>
          <div key={"r"+cur.id} className="reveal in">
            <div className="showcase-meta">
              {cur.meta.map(([k, v]) => (
                <div className="row" key={k}><div>{k}</div><div className="v">{v}</div></div>
              ))}
            </div>
          </div>
        </div>
        <div className="showcase-tabs">
          {SHOWCASE_DATA.map((s, i) => (
            <button key={s.id} className={`showcase-tab ${i === idx ? 'active' : ''}`} onClick={() => setIdx(i)}>
              <div><div className="num">P / 0{i+1}</div><div className="label">{s.name}</div></div>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{opacity: i === idx ? 1 : 0.4}}><path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => (
  <section className="services mesh-bg" id="services" data-screen-label="05 Services">
    <div className="container">
      <div className="services-head reveal">
        <div>
          <h2 className="section-title" style={{marginTop: 0}}>What we do <em>together.</em></h2>
        </div>
      </div>
      <div className="bento reveal-stagger">
        <div className="bento-card b-1 bento-ink">
          <div>
            <div className="title">Strategic <span style={{fontWeight: 800}}>Advisory</span></div>
            <p className="body" style={{marginTop: 18}}>Operating-model design, capital strategy, and group-level transformation programs delivered with cross-pillar discipline.</p>
          </div>
          <a href="#services" className="bento-cta" onClick={e => e.preventDefault()}>
            More services
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>
        <div className="bento-card b-2 bento-academy">
          <div className="title">Capability Building</div>
          <p className="body">Accredited learning systems and workforce development at scale.</p>
          <a href="#services" className="bento-cta" onClick={e => e.preventDefault()}>
            More services
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <img src="assets/icon-academy.svg?v=3" className="icon" alt="" />
        </div>
        <div className="bento-card b-3 bento-sustain">
          <div className="title">ISO Standards Implementation &amp; Certification</div>
          <p className="body">Practical implementation, auditing and certification support across ISO 26000, 20121, 19600, 20400 &amp; 37001.</p>
          <a href="#services" className="bento-cta" onClick={e => e.preventDefault()}>
            More services
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <img src="assets/icon-sustain.svg" className="icon" alt="" />
        </div>
        <div className="bento-card b-4 bento-innovation">
          <div className="title">Innovation &amp; Capability</div>
          <p className="body">Talent, advanced tech &amp; strategy.</p>
          <a href="#services" className="bento-cta" onClick={e => e.preventDefault()}>
            More services
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <img src="assets/icon-innovation.svg" className="icon" alt="" />
        </div>
        <div className="bento-card b-5 bento-systems">
          <div className="title">Systems Integration</div>
          <p className="body">Mission-critical engineering &amp; OT.</p>
          <a href="#services" className="bento-cta" onClick={e => e.preventDefault()}>
            More services
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <img src="assets/icon-systems.svg" className="icon" alt="" />
        </div>
      </div>
    </div>
  </section>
);

window.PillarsStack = PillarsStack;
window.Showcase = Showcase;
window.Services = Services;
