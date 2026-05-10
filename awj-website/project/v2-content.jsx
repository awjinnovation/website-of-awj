/* AWJ v2 — Projects (hover preview), News (newspaper), Success (case-studies), Partners, Contact wizard, Footer */

const PROJECTS = [
  {
    name: "First 3D Printed Building in the Middle East",
    stat: "60%", statLabel: "Less material waste",
    partner: "with GUtech",
    pillar: "Innovation", color: "var(--innovation)",
    bgGrad: "linear-gradient(135deg, #a13418, #ee6c11)",
    icon: "assets/icon-innovation.svg",
    size: "p-big",
    summary: "AWJ Innovation partnered with German University of Technology in Oman (GUtech) to create the first 3D printed building in the Middle East — a milestone in construction technology and sustainable building practices.",
    impact: "The project demonstrated the potential for advanced manufacturing in construction, reducing material waste by 60% and construction time by 70%. It paved the way for sustainable construction practices across the region and positioned Oman as a leader in construction technology.",
    achievements: [
      { value: "60%", label: "Material waste reduction" },
      { value: "70%", label: "Construction time saved" },
      { value: "First in ME", label: "Regional achievement" },
    ],
  },
  {
    name: ".NextJadeer Capacity Building",
    stat: "500+", statLabel: "Graduates trained",
    partner: "85% employment rate",
    pillar: "Academy", color: "var(--academy)",
    bgGrad: "linear-gradient(135deg, #5d3a9b, #9674ce)",
    icon: "assets/icon-academy.svg?v=3",
    size: "p-med",
    summary: ".NextJadeer is AWJ's flagship capacity-building program addressing skill gaps in the job market and fostering tech entrepreneurship through comprehensive training in emerging technologies.",
    impact: "The program has trained hundreds of participants, with many launching their own startups or securing employment in tech companies. The 4th edition saw record participation and success rates.",
    achievements: [
      { value: "500+", label: "Graduates" },
      { value: "35", label: "Startups launched" },
      { value: "85%", label: "Employment rate" },
    ],
  },
  {
    name: ".NXT GIG Platform",
    stat: "2,500+", statLabel: "Registered freelancers",
    partner: "1,000+ projects completed",
    pillar: "Innovation", color: "var(--innovation)",
    bgGrad: "linear-gradient(135deg, #ee6c11, #f5841e)",
    icon: "assets/icon-innovation.svg",
    size: "p-med",
    summary: ".NXT GIG is AWJ's platform designed to empower Oman's gig economy by connecting freelancers with projects and opportunities — aligned with Oman Vision 2040's goals for economic diversification.",
    impact: "The platform has revolutionized freelancing in Oman, providing opportunities for thousands of freelancers and helping businesses access specialized talent. It has become a cornerstone of Oman's digital economy.",
    achievements: [
      { value: "2,500+", label: "Registered freelancers" },
      { value: "1,000+", label: "Projects completed" },
      { value: "500K+ OMR", label: "Total value" },
    ],
  },
  {
    name: "AEROHACK Aviation Hackathon",
    stat: "200+", statLabel: "Participants",
    partner: "with Oman Airports",
    pillar: "Innovation", color: "var(--innovation)",
    bgGrad: "linear-gradient(135deg, #fde0ca, #fac99e)",
    icon: "assets/icon-innovation.svg",
    size: "p-sm",
    light: true,
    summary: "AWJ Innovation collaborated with Oman Airports to organize AEROHACK — the largest aviation hackathon in Oman — bringing together innovators, developers and aviation experts to revolutionize the industry through technology.",
    impact: "The hackathon generated innovative solutions for aviation challenges, with winning teams receiving mentorship and incubation support. Several solutions have been piloted at Oman airports, improving passenger experience and operational efficiency.",
    achievements: [
      { value: "200+", label: "Participants" },
      { value: "45", label: "Solutions generated" },
      { value: "5", label: "Solutions piloted" },
    ],
  },
  {
    name: "GUtech Technology Transfer Office",
    stat: "30+", statLabel: "Research projects",
    partner: "Established 2020",
    pillar: "Innovation", color: "var(--innovation)",
    bgGrad: "linear-gradient(135deg, #fac99e, #f8a661)",
    icon: "assets/icon-innovation.svg",
    size: "p-sm",
    light: true,
    summary: "AWJ Innovation established the Technology Transfer Office (TTO) at German University of Technology in Oman to bridge the gap between theoretical knowledge and practical industry applications.",
    impact: "Since September 2020, the TTO has facilitated technology transfer for numerous research projects, created partnerships with industry leaders, and supported the commercialization of innovative academic research.",
    achievements: [
      { value: "30+", label: "Research projects" },
      { value: "15", label: "Industry partnerships" },
      { value: "8", label: "Patents filed" },
    ],
  },
  {
    name: "Energy & AI Hackathon",
    stat: "20", statLabel: "Gulf teams",
    partner: "5 pilots initiated",
    pillar: "Innovation", color: "var(--innovation)",
    bgGrad: "linear-gradient(135deg, #a13418, #f5841e)",
    icon: "assets/icon-innovation.svg",
    size: "p-sm",
    summary: "AWJ organized the Energy and AI Hackathon supporting 20 Gulf teams to develop innovative solutions combining artificial intelligence with sustainable energy technologies.",
    impact: "The hackathon produced breakthrough solutions in energy optimization, predictive maintenance, and smart grid management. Several solutions are being piloted with energy sector partners.",
    achievements: [
      { value: "20", label: "Gulf teams" },
      { value: "20", label: "Solutions developed" },
      { value: "5", label: "Pilots initiated" },
    ],
  },
  {
    name: "Gulf Urban Planning Hackathon",
    stat: "80", statLabel: "Participants",
    partner: "Aligned with Oman Vision 2040",
    pillar: "Innovation", color: "var(--innovation)",
    bgGrad: "linear-gradient(135deg, #f5841e, #ee6c11)",
    icon: "assets/icon-innovation.svg",
    size: "p-med",
    summary: "AWJ Innovation partnered with the Ministry of Housing and Urban Planning to organize the first Gulf Urban Planning Hackathon — bringing together 80 participants to develop innovative solutions for urban challenges aligned with Oman Vision 2040.",
    impact: "The hackathon generated innovative urban planning solutions focusing on sustainable city development, smart infrastructure, and community-centered design. Several concepts are being integrated into Oman's spatial strategy.",
    achievements: [
      { value: "80", label: "Participants" },
      { value: "20", label: "Solutions developed" },
      { value: "Vision 2040", label: "Strategic alignment" },
    ],
  },
  {
    name: "Oman National Framework for CSR Governance",
    stat: "50+", statLabel: "Organizations engaged",
    partner: "with Ministry of Social Development",
    pillar: "Sustain", color: "var(--sustain)",
    bgGrad: "linear-gradient(135deg, #00736f, #00a19d)",
    icon: "assets/icon-sustain.svg",
    size: "p-med",
    summary: "AWJ Sustain is collaborating with the Ministry of Social Development to develop and implement the Oman National Framework for CSR Governance — transforming fragmented philanthropy into strategic corporate social responsibility.",
    impact: "This framework is establishing Oman as a regional leader in CSR governance, providing clear guidelines for corporate giving, ensuring transparency, and maximizing social impact across the nation.",
    achievements: [
      { value: "50+", label: "Organizations engaged" },
      { value: "Implementation", label: "Framework status" },
      { value: "National", label: "Impact level" },
    ],
  },
];

const Projects = () => {
  const [open, setOpen] = useState(null);
  React.useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpen(null); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = open !== null ? 'hidden' : '';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [open]);

  return (
    <section className="projects mesh-bg" id="projects" data-screen-label="06 Projects">
      <div className="container">
        <div className="projects-head reveal">
          <div>
            <div className="eyebrow">Selected projects</div>
            <h2 className="section-title" style={{marginTop: 24}}>Success <em>stories.</em></h2>
          </div>
        </div>
        <div className="project-bento">
          {PROJECTS.map((p, i) => (
            <button key={i} type="button" className={`project-tile ${p.size}${p.light ? ' p-light' : ''}`} style={{background: p.bgGrad}} onClick={() => setOpen(i)}>
              <div className="pt-num">/ 0{i+1}</div>
              <img src={p.icon} className="pt-icon" alt="" />
              <div className="pt-stat-block">
                <div className="pt-stat">{p.stat}</div>
                <div className="pt-stat-label">{p.statLabel}</div>
              </div>
              <div className="pt-foot">
                <div className="pt-name">{p.name}</div>
                <div className="pt-meta">
                  <span className="pt-pillar">AWJ {p.pillar}</span>
                  <span className="pt-partner">{p.partner}</span>
                </div>
              </div>
              <div className="pt-arrow">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </button>
          ))}
        </div>
      </div>

      {open !== null && (
        <div className="project-modal" onClick={() => setOpen(null)}>
          <div className="pm-backdrop"></div>
          <div className="pm-card" onClick={e => e.stopPropagation()}>
            <div className="pm-cover" style={{background: PROJECTS[open].bgGrad}}>
              <img src={PROJECTS[open].icon} className="pm-cover-icon" alt="" />
              <div className="pm-cover-num">PROJECT / 0{open+1}</div>
              <div className="pm-cover-pillar"><span className="swatch" style={{background: 'var(--paper)'}}></span>AWJ {PROJECTS[open].pillar}</div>
              <button type="button" className="pm-close" onClick={() => setOpen(null)} aria-label="Close">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
              </button>
            </div>
            <div className="pm-body">
              <h3 className="pm-title">{PROJECTS[open].name}</h3>
              <p className="pm-summary">{PROJECTS[open].summary}</p>
              <p className="pm-impact">{PROJECTS[open].impact}</p>
              <div className="pm-achievements">
                <div className="pm-ach-head">Key achievements</div>
                <div className="pm-ach-grid">
                  {PROJECTS[open].achievements.map((a, j) => (
                    <div key={j} className="pm-ach">
                      <div className="pm-ach-value">{a.value}</div>
                      <div className="pm-ach-label">{a.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const News = () => {
  const items = window.NEWS || [];
  const featured = items.filter(n => n.featured).slice(0, 2);
  const recent = items.filter(n => !n.featured).slice(0, 4);
  const Cover = window.NewsCover;
  return (
    <section className="news" id="news" data-screen-label="07 News">
      <div className="container">
        <div className="news-head reveal">
          <div>
            <h2 className="section-title" style={{marginTop: 24}}>News &amp; <em>announcements.</em></h2>
          </div>
          <a className="news-viewall" href="News.html">
            View all news
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>

        <div className="news-featured-grid reveal">
          {featured.map(n => (
            <a key={n.id} className="news-feature-card" href={`News.html#${n.id}`}>
              <div className="nfc-cover">
                {Cover ? <Cover category={n.category} /> : null}
                <div className="nfc-tag">{n.category}</div>
              </div>
              <div className="nfc-body">
                <div className="nfc-meta"><span>{n.dateLabel}</span><span className="dot">·</span><span>{n.pillar}</span></div>
                <h3 className="nfc-title">{n.title}</h3>
                <p className="nfc-dek">{n.dek}</p>
                <span className="nfc-read">Read story
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="news-recent reveal">
          <div className="news-recent-head">
            <span className="eyebrow">— Latest</span>
            <a className="news-recent-link" href="News.html">All stories ({items.length})</a>
          </div>
          <ul className="news-recent-list">
            {recent.map(n => (
              <li key={n.id} className="news-recent-item">
                <a href={`News.html#${n.id}`}>
                  <span className="nri-date">{n.dateLabel}</span>
                  <span className="nri-cat" data-cat={n.category}>{n.category}</span>
                  <span className="nri-title">{n.title}</span>
                  <span className="nri-arrow">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

const CASES = [
  { pillar: "Systems", color: "#0069c8", quote: <>"AWJ delivered a system <em>we couldn't have built alone</em> — and trained the team that runs it now."</>, who: "H.E. Khalid Al-Mansoori", role: "Deputy Minister · National Programs Authority", outcomes: [["38%", "Latency reduction"], ["240k", "Citizens served daily"]] },
  { pillar: "Academy", color: "#9674ce", quote: <>"Their workforce program <em>shifted our hiring pipeline</em> by an order of magnitude."</>, who: "Yusuf Bin Ahmed", role: "CEO · Northwind Energy", outcomes: [["10×", "Pipeline volume"], ["2,400+", "Engineers trained"]] },
  { pillar: "Innovation", color: "#ff6b00", quote: <>"They <em>operate like a single firm</em> across four disciplines. That's rare. That's why we partner."</>, who: "Sara Reinhardt", role: "Chief Strategy Officer · Lumen Capital", outcomes: [["$120M", "Co-invested capital"], ["7", "Joint ventures"]] },
];

const Success = () => (
  <section className="success" id="success" data-screen-label="08 Success">
    <div className="container">
      <div className="success-head reveal">
        <div>
          <div className="eyebrow" style={{opacity: 0.85}}>Case studies</div>
          <h2 className="section-title" style={{marginTop: 24}}>The work, <em>by the numbers.</em></h2>
        </div>
        <p>Independent outcomes from named mandates across the group — measured, audited, and on the record.</p>
      </div>
      <div className="case-grid reveal-stagger">
        {CASES.map((c, i) => (
          <div className="case-card" key={i}>
            <div className="case-pillar"><span className="dot" style={{background: c.color}}></span>AWJ {c.pillar}</div>
            <div className="case-quote">{c.quote}</div>
            <div className="case-attr"><div className="who">{c.who}</div><div>{c.role}</div></div>
            <div className="case-outcomes">
              {c.outcomes.map(([n, l], j) => (
                <div key={j}><div className="o-num">{n}</div><div className="o-label">{l}</div></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Partners = () => (
  <section className="partners" data-screen-label="09 Partners">
    <div className="container">
      <div className="partners-head reveal">
        <div className="eyebrow">Partners &amp; clients</div>
        <h3>Working alongside <em style={{fontStyle: "italic", fontWeight: 200}}>institutions</em>, governments, and industry leaders.</h3>
      </div>
      <div className="partners-row reveal">
        {["MERIDIAN", "NORTHWIND", "Lumen Capital", "ATLAS Group", "VOLTA Energy", "Helix Labs"].map(p => (
          <div key={p}>{p}</div>
        ))}
      </div>
    </div>
  </section>
);

/* === CONTACT WIZARD === */
const Contact = () => {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({ pillar: "", area: "", name: "", email: "", org: "", message: "" });
  const update = (k, v) => setData(d => ({ ...d, [k]: v }));

  const PILLARS_OPT = [
    { id: "academy", label: "AWJ Academy", sub: "Capability building", color: "#9674ce" },
    { id: "sustain", label: "AWJ Sustain", sub: "Climate & ESG", color: "#00a19d" },
    { id: "innovation", label: "AWJ Innovation", sub: "Ventures & R&D", color: "#ff6b00" },
    { id: "systems", label: "AWJ Systems", sub: "Engineering & infra", color: "#0069c8" },
  ];
  const AREAS = [
    { id: "advisory", label: "Strategic advisory", sub: "Group-level mandates" },
    { id: "delivery", label: "Project delivery", sub: "Infrastructure / programs" },
    { id: "partnership", label: "Partnership / JV", sub: "Co-build with us" },
    { id: "press", label: "Press / Media", sub: "Editorial enquiry" },
  ];

  const steps = [
    { title: "Which pillar are you interested in?", body: (
      <div className="wizard-options">
        {PILLARS_OPT.map(p => (
          <button key={p.id} className={`wizard-option ${data.pillar === p.id ? 'selected' : ''}`} onClick={() => { update('pillar', p.id); setTimeout(() => setStep(1), 180); }}>
            <span className="swatch" style={{background: p.color}}></span>
            <span><div className="label">{p.label}</div><div className="sub">{p.sub}</div></span>
          </button>
        ))}
      </div>
    )},
    { title: "What's the area of engagement?", body: (
      <div className="wizard-options">
        {AREAS.map(a => (
          <button key={a.id} className={`wizard-option ${data.area === a.id ? 'selected' : ''}`} onClick={() => { update('area', a.id); setTimeout(() => setStep(2), 180); }}>
            <span><div className="label">{a.label}</div><div className="sub">{a.sub}</div></span>
          </button>
        ))}
      </div>
    )},
    { title: "Tell us about you.", body: (
      <div style={{display: "grid", gap: 8}}>
        <input placeholder="Full name" value={data.name} onChange={e => update('name', e.target.value)} />
        <input placeholder="Email" type="email" value={data.email} onChange={e => update('email', e.target.value)} />
        <input placeholder="Organisation (optional)" value={data.org} onChange={e => update('org', e.target.value)} />
        <textarea placeholder="Briefly, what would you like to discuss?" value={data.message} onChange={e => update('message', e.target.value)} />
      </div>
    )},
    { title: "Ready to send.", body: (
      <div className="wizard-summary">
        <div className="row"><div>Pillar</div><div className="v">{(PILLARS_OPT.find(p => p.id === data.pillar) || {}).label || "—"}</div></div>
        <div className="row"><div>Area</div><div className="v">{(AREAS.find(a => a.id === data.area) || {}).label || "—"}</div></div>
        <div className="row"><div>Name</div><div className="v">{data.name || "—"}</div></div>
        <div className="row"><div>Email</div><div className="v">{data.email || "—"}</div></div>
        <div className="row"><div>Organisation</div><div className="v">{data.org || "—"}</div></div>
      </div>
    )},
  ];

  return (
    <section className="contact" id="contact" data-screen-label="10 Contact">
      <div className="container contact-grid">
        <div className="reveal">
          <div className="eyebrow" style={{opacity: 0.85}}>Contact</div>
          <h2 style={{marginTop: 24}}>Tell us<br/><em>what's next.</em></h2>
          <p className="lede">A short, structured intake helps us route your enquiry to the right pillar and partner. Most replies within two business days.</p>
        </div>
        <div className="reveal">
          <div className="wizard">
            <div className="wizard-progress">
              {steps.map((_, i) => (
                <div key={i} className={`step ${i < step ? 'done' : ''} ${i === step ? 'active' : ''}`}><div className="fill"></div></div>
              ))}
              <div className="wizard-step-label">{String(step+1).padStart(2,'0')} / {String(steps.length).padStart(2,'0')}</div>
            </div>
            <h3>{steps[step].title}</h3>
            {steps[step].body}
            <div className="wizard-controls">
              <button className="wizard-back" onClick={() => setStep(s => Math.max(0, s-1))} disabled={step === 0}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Back
              </button>
              <Magnetic strength={0.2}>
                <button className="wizard-next" onClick={() => {
                  if (step < steps.length - 1) setStep(s => s + 1);
                  else { alert("Thanks — we'll be in touch."); setStep(0); setData({pillar:"",area:"",name:"",email:"",org:"",message:""}); }
                }}>
                  {step < steps.length - 1 ? 'Continue' : 'Send enquiry'}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              </Magnetic>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-base">
        <div className="footer-brand">
          <div className="wordmark" style={{fontSize: 22}}><AwjMark style={{width: 28, marginRight: 10}} /><span className="awj">AWJ</span><span className="sub" style={{marginLeft: 6}}>Group</span></div>
          <p>An integrated holding group operating across Academy, Sustain, Innovation, and Systems — building durable progress for the regions and sectors we serve.</p>
          <form className="footer-newsletter" onSubmit={e => { e.preventDefault(); alert("Subscribed."); }}>
            <input type="email" placeholder="your@email.com" required />
            <button type="submit" aria-label="Subscribe"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
          </form>
          <div className="footer-social">
            <a href="#" aria-label="LinkedIn"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM3 9.5h4V21H3V9.5zm6 0h3.8v1.6h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.65 4.78 6.1V21H17V15.7c0-1.27-.02-2.9-1.77-2.9-1.78 0-2.05 1.38-2.05 2.81V21H9V9.5z"/></svg></a>
            <a href="#" aria-label="X"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231z"/></svg></a>
            <a href="#" aria-label="IG"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg></a>
          </div>
        </div>
        <div className="footer-col"><h4>Pillars</h4><a href="#academy">AWJ Academy</a><a href="#sustain">AWJ Sustain</a><a href="#innovation">AWJ Innovation</a><a href="#systems">AWJ Systems</a></div>
        <div className="footer-col"><h4>Group</h4><a href="#showcase">Companies</a><a href="#services">Capabilities</a><a href="#projects">Work</a><a href="#news">News</a></div>
        <div className="footer-col"><h4>Connect</h4><a href="#contact">Contact</a><a href="#">Careers</a><a href="#">Press</a><a href="#">Investor relations</a></div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 AWJ Group · All rights reserved</span>
        <span>Riyadh · Dubai · London · Singapore</span>
      </div>
    </div>
  </footer>
);

window.Projects = Projects;
window.News = News;
window.Success = Success;
window.Partners = Partners;
window.Contact = Contact;
window.Footer = Footer;
