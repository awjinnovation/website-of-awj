/* Stats, Pillars row, Services, Projects, News, Success, Partners, Contact, Footer */

const Marquee = () => (
  <div className="marquee">
    <div className="marquee-track">
      <span>Bold ideas</span><span>Engineered with intent</span><span>Delivered at scale</span><span>Across four pillars</span><span>One AWJ</span>
      <span>Bold ideas</span><span>Engineered with intent</span><span>Delivered at scale</span><span>Across four pillars</span><span>One AWJ</span>
    </div>
  </div>
);

const useReveal = () => {
  React.useEffect(() => {
    const els = document.querySelectorAll('.reveal, .reveal-stagger');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
};

const useCounter = (end, duration = 1800) => {
  const [val, setVal] = React.useState(0);
  const ref = React.useRef(null);
  React.useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        let t0; const step = (t) => {
          if (!t0) t0 = t;
          const k = Math.min(1, (t - t0) / duration);
          const eased = 1 - Math.pow(1 - k, 3);
          setVal(Math.round(end * eased));
          if (k < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        io.disconnect();
      }
    }, { threshold: 0.4 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [end, duration]);
  return [val, ref];
};

const StatNum = ({ end, suffix }) => {
  const [v, ref] = useCounter(end);
  return <div className="num" ref={ref}>{v}<span className="suffix">{suffix}</span></div>;
};

const Stats = () => (
  <section className="stats" data-screen-label="02 Stats">
    <div className="container">
      <div className="stats-head reveal">
        <div>
          <div className="section-eyebrow">By the numbers</div>
          <h2 className="section-title" style={{ marginTop: 18 }}>Operating <em>at the scale</em> of ambition.</h2>
        </div>
        <p>Two decades of compounding capability across four operating companies — an integrated group that designs, builds, and stewards long-cycle outcomes.</p>
      </div>

      <div className="stat-grid reveal-stagger">
        <div className="stat">
          <StatNum end={22} suffix="yrs" />
          <div className="label">Operating history</div>
          <div className="desc">Founded 2003, scaled across the GCC and beyond.</div>
        </div>
        <div className="stat">
          <StatNum end={240} suffix="+" />
          <div className="label">Active projects</div>
          <div className="desc">Concurrent mandates across infrastructure, ventures, and learning.</div>
        </div>
        <div className="stat">
          <StatNum end={38} suffix="" />
          <div className="label">Countries served</div>
          <div className="desc">Local presence on four continents and growing.</div>
        </div>
        <div className="stat">
          <StatNum end={3800} suffix="+" />
          <div className="label">People in the group</div>
          <div className="desc">Engineers, educators, scientists, builders.</div>
        </div>
      </div>
    </div>
  </section>
);

const PillarsRow = () => (
  <section className="pillars" id="pillars" data-screen-label="03 Pillars">
    <div className="container">
      <div className="pillars-head reveal">
        <div>
          <div className="section-eyebrow">Four pillars · One group</div>
          <h2 className="section-title" style={{ marginTop: 18 }}>Specialised companies, <em>shared discipline.</em></h2>
        </div>
        <p>Each AWJ company is sovereign in its market and stack — yet bound by the same operating standards, ethics, and long-horizon thesis.</p>
      </div>

      <div>
        {PILLARS.map((p, i) => (
          <a
            key={p.id}
            href={"#" + p.id + "-page"}
            className="pillar-row reveal"
            id={p.id}
            style={{ "--pillar-color": p.accent }}
          >
            <div className="idx">— 0{i + 1} / 04</div>
            <div className="name">AWJ <em>{p.name}</em></div>
            <div className="desc">{p.blurb}</div>
            <div className="icon-wrap">
              <img src={p.icon} alt={p.name} />
              <div className="visit">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

const SERVICES = [
  { num: "S/01", title: "Strategic Advisory", body: "Operating-model design, capital strategy, and group-level transformation programs.", tag: "Cross-pillar", color: "rgba(255,255,255,0.08)", text: "rgba(245,243,238,0.7)", accent: "var(--awj-paper)" },
  { num: "S/02", title: "Capability Building", body: "Accredited learning systems, executive academies, and workforce development at scale.", tag: "Academy", color: "rgba(150,116,206,0.15)", text: "var(--academy-2)", accent: "var(--academy)" },
  { num: "S/03", title: "ESG & Climate", body: "Net-zero roadmaps, regenerative design, and sustainability assurance frameworks.", tag: "Sustain", color: "rgba(0,186,180,0.15)", text: "var(--sustain-2)", accent: "var(--sustain)" },
  { num: "S/04", title: "Venture Building", body: "Corporate venturing, applied R&D labs, and deeptech commercialisation.", tag: "Innovation", color: "rgba(255,107,0,0.15)", text: "var(--innovation-2)", accent: "var(--innovation)" },
  { num: "S/05", title: "Systems Integration", body: "Mission-critical engineering, digital infrastructure, and operational technology.", tag: "Systems", color: "rgba(0,105,200,0.15)", text: "var(--systems-2)", accent: "var(--systems)" },
  { num: "S/06", title: "Public-Private Partnerships", body: "Concession structuring, sovereign engagements, and long-cycle delivery vehicles.", tag: "Group", color: "rgba(255,255,255,0.08)", text: "rgba(245,243,238,0.7)", accent: "var(--awj-paper)" },
];

const Services = () => (
  <section className="services" id="services" data-screen-label="04 Services">
    <div className="container">
      <div className="services-head reveal">
        <div>
          <div className="section-eyebrow" style={{ color: "rgba(245,243,238,0.6)" }}>Capabilities</div>
          <h2 className="section-title" style={{ marginTop: 18, color: "var(--awj-paper)" }}>What we do <em>together.</em></h2>
        </div>
        <p>Six core practices, drawn from across the group, deployed against problems too complex for a single discipline.</p>
      </div>

      <div className="services-grid reveal-stagger">
        {SERVICES.map(s => (
          <div className="service" key={s.num} style={{ "--accent-color": s.accent }}>
            <div className="num">{s.num}</div>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
            <div className="tag" style={{ "--tag-color": s.color, "--tag-text": s.text }}>{s.tag}</div>
            <div className="accent" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

const PROJECTS = [
  { name: "Northern Corridor Smart Grid", loc: "NEOM, Saudi Arabia · 2024", pillar: "Systems", color: "var(--systems)", bg: "linear-gradient(135deg, #0069c8, #003c80)", icon: "assets/icon-systems.svg" },
  { name: "Regenerative Coastal Reserve", loc: "Red Sea · 2024", pillar: "Sustain", color: "var(--sustain)", bg: "linear-gradient(135deg, #00bab4, #00736f)", icon: "assets/icon-sustain.svg" },
  { name: "Future Workforce Academy", loc: "Riyadh / Dubai · Ongoing", pillar: "Academy", color: "var(--academy)", bg: "linear-gradient(135deg, #9674ce, #5d3a9b)", icon: "assets/icon-academy.svg?v=3" },
  { name: "Applied AI Venture Lab", loc: "London / Abu Dhabi · 2025", pillar: "Innovation", color: "var(--innovation)", bg: "linear-gradient(135deg, #ff9331, #c44a00)", icon: "assets/icon-innovation.svg" },
];

const Projects = () => (
  <section className="projects" id="projects" data-screen-label="05 Projects">
    <div className="container">
      <div className="projects-head reveal">
        <div>
          <div className="section-eyebrow">Selected projects</div>
          <h2 className="section-title" style={{ marginTop: 18 }}>Work <em>that compounds.</em></h2>
        </div>
        <p>A snapshot of mandates currently active across the group — engineered to outlast a single cycle, a single contract, a single hand.</p>
      </div>

      <div className="project-grid reveal-stagger">
        {PROJECTS.map((p, i) => (
          <a key={i} className="project" href="#" style={{ "--pillar-color": p.color }}>
            <div className="project-thumb">
              <div className="project-thumb-inner" style={{ "--proj-bg": p.bg }} />
              <div className="project-thumb-label">PROJECT / 00{i + 1}</div>
              <img src={p.icon} className="project-thumb-shape" alt="" />
            </div>
            <div className="project-meta">
              <div>
                <h3>{p.name}</h3>
                <div className="project-loc">{p.loc}</div>
              </div>
              <div className="pillar-tag">{p.pillar}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

const NEWS = [
  { date: "12 Apr 2026", title: "AWJ Innovation closes Series Ξ for applied AI lab", body: "The group's venture arm announces a $40M strategic round to scale its deeptech portfolio across the GCC." },
  { date: "29 Mar 2026", title: "Academy launches accredited Energy Transition program", body: "A 12-month executive program designed with three sovereign partners and two top-25 universities." },
  { date: "08 Mar 2026", title: "Sustain certifies first Type-IV regenerative reserve", body: "AWJ Sustain confirms a milestone independent audit on its 1,200km² coastal regeneration mandate." },
];

const News = () => (
  <section className="news" id="news" data-screen-label="06 News">
    <div className="container">
      <div className="news-head reveal">
        <div>
          <div className="section-eyebrow">News & insights</div>
          <h2 className="section-title" style={{ marginTop: 18 }}>From <em>the group.</em></h2>
        </div>
        <a href="#" className="btn" style={{ background: "var(--awj-ink)", color: "var(--awj-paper)", border: "1px solid var(--awj-ink)", justifySelf: "end", alignSelf: "end" }}>
          All updates
          <svg className="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </a>
      </div>

      <div className="news-grid reveal-stagger">
        {NEWS.map((n, i) => (
          <a key={i} className="news-card" href="#">
            <div className="date">{n.date}</div>
            <h3>{n.title}</h3>
            <p>{n.body}</p>
            <div className="read">Read <svg className="arrow" width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

const Success = () => {
  const [idx, setIdx] = React.useState(0);
  const stories = [
    { quote: <>"AWJ delivered a system <em>we couldn't have built alone</em> — and trained the team that runs it now."</>, who: "H.E. Khalid Al-Mansoori", role: "Deputy Minister · National Programs Authority" },
    { quote: <>"They <em>operate like a single firm</em> across four disciplines. That's rare. That's why we partner."</>, who: "Sara Reinhardt", role: "Chief Strategy Officer · Lumen Capital" },
    { quote: <>"The Academy and Innovation arms together <em>shifted our hiring pipeline</em> by an order of magnitude."</>, who: "Yusuf Bin Ahmed", role: "CEO · Northwind Energy" },
  ];
  const s = stories[idx];

  return (
    <section className="success" id="success" data-screen-label="07 Success Stories">
      <div className="container">
        <div className="success-grid">
          <div className="success-vis reveal">
            <AwjMark className="success-vis-mark" />
            <div className="success-vis-tag">
              <span>CASE / 00{idx + 1}</span>
              <span>{idx + 1} of {stories.length}</span>
            </div>
          </div>
          <div className="reveal">
            <div className="section-eyebrow">Success stories</div>
            <h2 className="section-title" style={{ marginTop: 18, fontSize: "clamp(28px, 3.4vw, 44px)" }}>The work, <em>in their words.</em></h2>
            <div className="success-quote" style={{ marginTop: 36 }}>{s.quote}</div>
            <div className="success-attr">
              <div style={{ width: 44, height: 44, borderRadius: "50%", background: "var(--awj-paper-2)", border: "1px solid var(--awj-line)" }} />
              <div>
                <div className="who">{s.who}</div>
                <div className="role">{s.role}</div>
              </div>
            </div>
            <div className="success-pager">
              <button onClick={() => setIdx((idx - 1 + stories.length) % stories.length)} aria-label="Previous">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ margin: "0 auto" }}><path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <button onClick={() => setIdx((idx + 1) % stories.length)} aria-label="Next">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ margin: "0 auto" }}><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Partners = () => (
  <section className="partners" data-screen-label="08 Partners">
    <div className="container">
      <div className="partners-head reveal">
        <div className="section-eyebrow">Partners & clients</div>
        <h3>Working alongside <em style={{ fontStyle: "italic" }}>institutions</em>, governments, and industry leaders.</h3>
      </div>
      <div className="partners-row reveal">
        {["MERIDIAN", "NORTHWIND", "Lumen Capital", "ATLAS Group", "VOLTA Energy", "Helix Labs"].map(p => (
          <div key={p}>{p}</div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section className="contact" id="contact" data-screen-label="09 Contact">
    <AwjMark className="contact-mark" />
    <div className="container contact-grid">
      <div className="reveal">
        <div className="section-eyebrow" style={{ color: "rgba(245,243,238,0.6)" }}>Contact</div>
        <h2 style={{ marginTop: 18 }}>Tell us <em>what's next.</em></h2>
        <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert("Thanks — we'll be in touch."); }}>
          <div className="row">
            <input type="text" placeholder="Full name" required />
            <input type="email" placeholder="Email" required />
          </div>
          <div className="row">
            <input type="text" placeholder="Organisation" />
            <select defaultValue="">
              <option value="" disabled>Area of interest</option>
              <option>Academy</option>
              <option>Sustain</option>
              <option>Innovation</option>
              <option>Systems</option>
              <option>Group / Other</option>
            </select>
          </div>
          <textarea placeholder="Briefly, what would you like to discuss?" />
          <button type="submit">
            Send enquiry
            <svg className="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </form>
      </div>
      <div className="contact-info reveal">
        <div className="row">
          <div className="label">Group HQ</div>
          <div className="val">King Abdullah Financial District<br/>Riyadh, Saudi Arabia</div>
        </div>
        <div className="row">
          <div className="label">Regional</div>
          <div className="val">Dubai · London · Abu Dhabi · Singapore</div>
        </div>
        <div className="row">
          <div className="label">General</div>
          <div className="val">hello@awj.group</div>
        </div>
        <div className="row" style={{ borderBottom: "none" }}>
          <div className="label">Press</div>
          <div className="val">press@awj.group</div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="nav-logo">
            <AwjMark className="mark" style={{ width: 40 }} />
            <span>AWJ Group</span>
          </div>
          <p>An integrated holding group operating across Academy, Sustain, Innovation, and Systems — building durable progress for the regions and sectors we serve.</p>
          <form className="footer-newsletter" onSubmit={(e) => { e.preventDefault(); alert("Subscribed."); }}>
            <input type="email" placeholder="your@email.com" required />
            <button type="submit" aria-label="Subscribe">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ margin: "0 auto" }}><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </form>
          <div className="footer-social">
            <a href="#" aria-label="LinkedIn"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM3 9.5h4V21H3V9.5zm6 0h3.8v1.6h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.65 4.78 6.1V21H17V15.7c0-1.27-.02-2.9-1.77-2.9-1.78 0-2.05 1.38-2.05 2.81V21H9V9.5z"/></svg></a>
            <a href="#" aria-label="X"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/></svg></a>
            <a href="#" aria-label="Instagram"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg></a>
            <a href="#" aria-label="YouTube"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12s0-3.65-.46-5.41a2.86 2.86 0 00-2.02-2.02C18.76 4.1 12 4.1 12 4.1s-6.76 0-8.52.47A2.86 2.86 0 001.46 6.59C1 8.35 1 12 1 12s0 3.65.46 5.41a2.86 2.86 0 002.02 2.02C5.24 19.9 12 19.9 12 19.9s6.76 0 8.52-.47a2.86 2.86 0 002.02-2.02C23 15.65 23 12 23 12zM9.75 15.5v-7l6.5 3.5-6.5 3.5z"/></svg></a>
          </div>
        </div>
        <div className="footer-col">
          <h4>Pillars</h4>
          <a href="#academy">AWJ Academy</a>
          <a href="#sustain">AWJ Sustain</a>
          <a href="#innovation">AWJ Innovation</a>
          <a href="#systems">AWJ Systems</a>
        </div>
        <div className="footer-col">
          <h4>Group</h4>
          <a href="#showcase">Companies</a>
          <a href="#services">Capabilities</a>
          <a href="#projects">Work</a>
          <a href="#news">News</a>
        </div>
        <div className="footer-col">
          <h4>Connect</h4>
          <a href="#contact">Contact</a>
          <a href="#">Careers</a>
          <a href="#">Press</a>
          <a href="#">Investor relations</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 AWJ Group. All rights reserved.</span>
        <span>Design system v2.4 · Riyadh</span>
      </div>
    </div>
  </footer>
);

window.Marquee = Marquee;
window.useReveal = useReveal;
window.Stats = Stats;
window.PillarsRow = PillarsRow;
window.Services = Services;
window.Projects = Projects;
window.News = News;
window.Success = Success;
window.Partners = Partners;
window.Contact = Contact;
window.Footer = Footer;
