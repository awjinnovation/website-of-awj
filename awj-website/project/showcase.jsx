/* Showcase — full-bleed pillar-color section that morphs through all 4 companies */

const SHOWCASE_DATA = [
  {
    id: "academy",
    name: "Academy",
    eyebrow: "Pillar 01 / Capability",
    bg: "#5d3a9b",
    bgGrad: "linear-gradient(135deg, #5d3a9b 0%, #9674ce 100%)",
    desc: "AWJ Academy designs accredited learning systems, executive programs, and workforce platforms — equipping people and institutions for the work that does not yet exist.",
    meta: [
      { k: "Established", v: "2009" },
      { k: "Reach", v: "12 countries · 38k alumni" },
      { k: "Focus", v: "Executive · Vocational · Civic" },
    ],
    icon: "assets/icon-academy.svg?v=3",
  },
  {
    id: "sustain",
    name: "Sustain",
    eyebrow: "Pillar 02 / Stewardship",
    bg: "#00736f",
    bgGrad: "linear-gradient(135deg, #00736f 0%, #00bab4 100%)",
    desc: "AWJ Sustain is the group's environmental and ESG arm — net-zero roadmaps, regenerative design, and assurance frameworks engineered for long-cycle stewardship.",
    meta: [
      { k: "Established", v: "2014" },
      { k: "Mandates", v: "1,200km² under stewardship" },
      { k: "Focus", v: "Climate · Regeneration · Assurance" },
    ],
    icon: "assets/icon-sustain.svg",
  },
  {
    id: "innovation",
    name: "Innovation",
    eyebrow: "Pillar 03 / Ventures",
    bg: "#c44a00",
    bgGrad: "linear-gradient(135deg, #c44a00 0%, #ff9331 100%)",
    desc: "AWJ Innovation is the group's venture builder and applied-R&D engine — corporate venturing, deeptech commercialisation, and labs spun out alongside sovereign and industry partners.",
    meta: [
      { k: "Established", v: "2018" },
      { k: "Portfolio", v: "23 ventures · 4 labs" },
      { k: "Focus", v: "AI · Energy · Materials · Health" },
    ],
    icon: "assets/icon-innovation.svg",
  },
  {
    id: "systems",
    name: "Systems",
    eyebrow: "Pillar 04 / Engineering",
    bg: "#003c80",
    bgGrad: "linear-gradient(135deg, #003c80 0%, #0069c8 100%)",
    desc: "AWJ Systems is the group's engineering and integration arm — mission-critical infrastructure, digital backbone, and operational technology for the institutions that keep regions running.",
    meta: [
      { k: "Established", v: "2003" },
      { k: "Delivered", v: "240+ active mandates" },
      { k: "Focus", v: "Infrastructure · OT · Digital" },
    ],
    icon: "assets/icon-systems.svg",
  },
];

const Showcase = () => {
  const [idx, setIdx] = React.useState(0);
  const [auto, setAuto] = React.useState(true);
  const sectionRef = React.useRef(null);
  const inView = React.useRef(false);

  // auto-advance only when in view
  React.useEffect(() => {
    if (!sectionRef.current) return;
    const io = new IntersectionObserver(([e]) => {
      inView.current = e.isIntersecting;
    }, { threshold: 0.4 });
    io.observe(sectionRef.current);
    return () => io.disconnect();
  }, []);

  React.useEffect(() => {
    if (!auto) return;
    const t = setInterval(() => {
      if (inView.current) setIdx(i => (i + 1) % SHOWCASE_DATA.length);
    }, 5500);
    return () => clearInterval(t);
  }, [auto]);

  const cur = SHOWCASE_DATA[idx];

  return (
    <section
      className="showcase"
      id="showcase"
      ref={sectionRef}
      data-screen-label="04 Companies"
      style={{ backgroundImage: cur.bgGrad, backgroundColor: cur.bg }}
    >
      <div className="showcase-bg" />
      <div className="showcase-grid" />
      <AwjMark className="showcase-mark" key={cur.id} />

      <div className="container">
        <div className="showcase-content">
          <div key={"l-" + cur.id} className="showcase-left reveal in">
            <div className="showcase-eyebrow">{cur.eyebrow}</div>
            <div className="showcase-name">AWJ <em>{cur.name}</em></div>
            <p className="showcase-desc">{cur.desc}</p>
            <a href={"#" + cur.id} className="showcase-cta" onClick={(e) => e.preventDefault()}>
              Visit AWJ {cur.name}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>
          <div key={"r-" + cur.id} className="showcase-right reveal in">
            <div className="showcase-meta">
              {cur.meta.map(m => (
                <div className="row" key={m.k}>
                  <div className="k">{m.k}</div>
                  <div className="v">{m.v}</div>
                </div>
              ))}
              <div style={{ marginTop: 12, opacity: 0.85, fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase" }}>
                Auto-advancing · {idx + 1} of {SHOWCASE_DATA.length}
              </div>
            </div>
          </div>
        </div>

        <div className="showcase-tabs">
          {SHOWCASE_DATA.map((s, i) => (
            <button
              key={s.id}
              className={`showcase-tab ${i === idx ? "active" : ""}`}
              onClick={() => { setIdx(i); setAuto(false); }}
            >
              <div>
                <div className="num">P/0{i + 1}</div>
                <div className="label">{s.name}</div>
              </div>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ opacity: i === idx ? 1 : 0.4 }}>
                <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

window.Showcase = Showcase;
