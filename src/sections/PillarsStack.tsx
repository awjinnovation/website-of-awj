import { useRef, useState, type CSSProperties } from 'react';

type PillarItem = {
  id: string;
  name: string;
  num: string;
  cls: string;
  icon: string;
  desc: string;
  meta: [string, string][];
};

const PILLAR_DATA: PillarItem[] = [
  {
    id: 'academy',
    name: 'Academy',
    num: '01 / 04',
    cls: 'stack-card-academy',
    icon: '/assets/icon-academy.svg?v=3',
    desc: 'Designs accredited learning systems, executive programs, and workforce platforms — equipping people and institutions for the work that does not yet exist.',
    meta: [
      ['Established', '2009'],
      ['Reach', '12 countries'],
      ['Alumni', '38,000+'],
    ],
  },
  {
    id: 'sustain',
    name: 'Sustain',
    num: '02 / 04',
    cls: 'stack-card-sustain',
    icon: '/assets/icon-sustain.svg',
    desc: 'End-to-end ESG advisory — sustainability strategy, GRI/MSX-aligned reporting, ISO certification, climate services, and an AI-powered ESG index for MSX-listed companies.',
    meta: [
      ['Partner', 'CSR Company Intl.'],
      ['Reach', '70+ countries'],
      ['Focus', 'ESG · Reporting · AI'],
    ],
  },
  {
    id: 'innovation',
    name: 'Innovation',
    num: '03 / 04',
    cls: 'stack-card-innovation',
    icon: '/assets/icon-innovation.svg',
    desc: 'A consulting practice for talent enablement, capability building, advanced technology, strategy, innovation management, IP, and program design — aligned with Oman Vision 2040.',
    meta: [
      ['Based', 'Muscat, Oman'],
      ['Sectors', 'Government · Private'],
      ['Focus', 'Talent · Tech · Strategy'],
    ],
  },
  {
    id: 'systems',
    name: 'Systems',
    num: '04 / 04',
    cls: 'stack-card-systems',
    icon: '/assets/icon-systems.svg',
    desc: 'Mission-critical engineering and integration — infrastructure, digital backbone, and operational technology for the institutions that keep regions running.',
    meta: [
      ['Established', '2003'],
      ['Mandates', '240+'],
      ['Focus', 'OT · Digital'],
    ],
  },
];

export const PillarsStack = () => {
  const [idx, setIdx] = useState(0);
  const total = PILLAR_DATA.length;

  const cardOffset = (i: number): CSSProperties => {
    const d = (i - idx + total) % total;
    if (d === 0)
      return {
        transform: 'translateX(-50%) translateZ(0) rotateY(0deg) scale(1)',
        opacity: 1,
        zIndex: 4,
      };
    if (d === 1)
      return {
        transform:
          'translateX(-50%) translateX(60px) translateZ(-120px) rotateY(-12deg) scale(0.92)',
        opacity: 0.7,
        zIndex: 3,
      };
    if (d === 2)
      return {
        transform:
          'translateX(-50%) translateX(120px) translateZ(-220px) rotateY(-18deg) scale(0.84)',
        opacity: 0.4,
        zIndex: 2,
      };
    return {
      transform:
        'translateX(-50%) translateX(-80px) translateZ(-300px) rotateY(8deg) scale(0.8)',
      opacity: 0.25,
      zIndex: 1,
    };
  };

  const dragRef = useRef({ x: 0, dragging: false });
  const onPointerDown = (e: React.PointerEvent) => {
    dragRef.current = { x: e.clientX, dragging: true };
  };
  const onPointerUp = (e: React.PointerEvent) => {
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
          <h2 className="section-title" style={{ marginTop: 0 }}>
            AWJ <em>Pillars</em>
          </h2>
          <p>
            AWJ Corporate operates through four pillars: <strong>AWJ Academy</strong>{' '}
            develops people and institutions, <strong>AWJ Sustain</strong> drives
            sustainability transformation, <strong>AWJ Innovation</strong> enables talent,
            capability, and digital transformation, and <strong>AWJ Systems</strong>{' '}
            integrates infrastructure, digital backbone, and operational technology.
          </p>
        </div>
        <div className="pillars-stack-right">
          <div
            className="stack-stage reveal"
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
          >
            {PILLAR_DATA.map((p, i) => (
              <div key={p.id} className={`stack-card ${p.cls}`} style={cardOffset(i)}>
                <div className="top-row">
                  <div className="num">PILLAR / {p.num}</div>
                  <img src={p.icon} alt="" className="icon" />
                </div>
                <div>
                  <div className="name">
                    <span className="awj">AWJ</span>
                    <span className="sub">{p.name}</span>
                  </div>
                  <p className="desc">{p.desc}</p>
                  <div className="meta-row">
                    {p.meta.map(([k, v]) => (
                      <div key={k}>
                        <div className="m-k">{k}</div>
                        <div className="m-v">{v}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="stack-controls">
            <button
              className="stack-btn"
              onClick={() => setIdx((idx - 1 + total) % total)}
              aria-label="Previous"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M19 12H5M12 19l-7-7 7-7"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className="stack-dots">
              {PILLAR_DATA.map((_, i) => (
                <button
                  key={i}
                  className={`stack-dot ${i === idx ? 'active' : ''}`}
                  onClick={() => setIdx(i)}
                  aria-label={`Pillar ${i + 1}`}
                />
              ))}
            </div>
            <button
              className="stack-btn"
              onClick={() => setIdx((idx + 1) % total)}
              aria-label="Next"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12h14M13 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
