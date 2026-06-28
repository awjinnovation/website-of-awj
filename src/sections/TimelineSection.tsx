import { useEffect, useRef, useState } from 'react';
import '../styles/timeline-section.css';

type TimelineMilestone = {
  year: number;
  title: string;
  description: string;
  details?: string;
  founders?: { name: string; role: string }[];
  sectors?: string[];
};

const MILESTONES: TimelineMilestone[] = [
  {
    year: 2016,
    title: 'Institutional Beginnings',
    description: 'Origins within the Ministry of Foreign Affairs and the Research Council for Science & Technology.',
  },
  {
    year: 2020,
    title: 'Endowment Fund',
    description: 'Establishment of a company specialized in sustainable technology and innovation development.',
  },
  {
    year: 2023,
    title: 'Management Buyout & AWJ Innovation',
    description: 'Transition to a private company and the founding of AWJ Innovation, led by:',
    founders: [
      { name: 'Dr. Yousef Al–Balushi', role: 'Partner / Founder' },
      { name: 'Eng. Hamoud Al–Shukairi', role: 'Partner / Founder' },
    ],
  },
  {
    year: 2026,
    title: 'AWJ Corp',
    description: 'Establishment of AWJ Corp, built on four specialized sectors:',
    sectors: ['AWJ Systems', 'AWJ Innovation', 'AWJ Sustain', 'AWJ Academy'],
  },
];

export const TimelineSection = ({ accent = '#7fe0d8', roadWidth = 16 }) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(1600);

  useEffect(() => {
    const handleResize = () => {
      if (wrapRef.current) {
        setWidth(wrapRef.current.clientWidth);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const observer = new ResizeObserver(handleResize);
    if (wrapRef.current) {
      observer.observe(wrapRef.current);
    }

    const timeouts = [
      setTimeout(handleResize, 120),
      setTimeout(handleResize, 450),
    ];

    return () => {
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
      timeouts.forEach(t => clearTimeout(t));
    };
  }, []);

  const mobile = width < 760;
  const scale = Math.min(1, width / 1600);
  const deskHeight = Math.round(1000 * scale) + 'px';

  const positions = [
    { x: 250, y: 720 },
    { x: 640, y: 660 },
    { x: 1010, y: 540 },
    { x: 1330, y: 320 },
  ];

  const cardPositions = [
    { left: 120, bottom: 380, width: 250 },
    { left: 505, top: 760, width: 272 },
    { left: 855, bottom: 560, width: 312 },
    { left: 1190, top: 420, width: 322 },
  ];

  return (
    <section className="timeline-section-wrapper" ref={wrapRef}>
      <div
        className="timeline-main"
        style={{
          '--accent': accent,
          '--road-width': `${roadWidth}px`,
        } as React.CSSProperties}
      >
        {/* Desktop/Tablet View */}
        {!mobile && (
          <div className="timeline-desktop" style={{ height: deskHeight }}>
            <div className="timeline-stage" style={{ transform: `scale(${scale})` }}>
              {/* Aurora background */}
              <div className="timeline-aurora">
                <div className="aurora-blob aurora-blob-1" />
                <div className="aurora-blob aurora-blob-2" />
                <div className="aurora-blob aurora-blob-3" />
                <div className="aurora-blob aurora-blob-4" />
                <div className="aurora-overlay" />
              </div>

              {/* Title */}
              <div className="timeline-header">
                <h2 className="timeline-main-title">Our Timeline</h2>
                <p className="timeline-subtitle">
                  A decade of building, from institutional roots to AWJ Corp spanning four specialized sectors.
                </p>
              </div>

              {/* SVG Path and Markers */}
              <svg
                width="1600"
                height="1000"
                viewBox="0 0 1600 1000"
                className="timeline-svg"
                aria-hidden="true"
              >
                <path
                  d="M -40,805 C 70,775 150,742 250,720 C 400,692 470,648 640,660 C 810,672 850,588 1010,540 C 1175,492 1235,398 1330,320 C 1415,250 1490,232 1640,205"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth={roadWidth}
                  strokeLinecap="round"
                  className="timeline-path"
                />
                <g stroke="rgba(255,255,255,.5)" strokeWidth="2.5">
                  <line x1="250" y1="707" x2="250" y2="674" />
                  <line x1="640" y1="673" x2="640" y2="706" />
                  <line x1="1010" y1="527" x2="1010" y2="494" />
                  <line x1="1330" y1="333" x2="1330" y2="366" />
                </g>
                <g>
                  {positions.map((pos, i) => (
                    <g key={i}>
                      <circle cx={pos.x} cy={pos.y} r="13" fill="#ffffff" />
                      <circle cx={pos.x} cy={pos.y} r="7" fill="#0a0d13" />
                      <circle cx={pos.x} cy={pos.y} r="3.4" fill="var(--accent)" />
                    </g>
                  ))}
                </g>
              </svg>

              {/* Year Pills */}
              {MILESTONES.map((m, idx) => (
                <div
                  key={m.year}
                  className="timeline-year-pill"
                  style={{
                    left: `${positions[idx].x}px`,
                    top: idx % 2 === 0 ? `${positions[idx].y - 64}px` : `${positions[idx].y + 64}px`,
                  }}
                >
                  {m.year}
                </div>
              ))}

              {/* Cards */}
              {MILESTONES.map((m, idx) => (
                <div
                  key={m.year}
                  className="timeline-card"
                  style={{
                    left: `${cardPositions[idx].left}px`,
                    ...(cardPositions[idx].top !== undefined
                      ? { top: `${cardPositions[idx].top}px` }
                      : { bottom: `${cardPositions[idx].bottom}px` }),
                    width: `${cardPositions[idx].width}px`,
                  }}
                >
                  <h3>{m.title}</h3>
                  <p>{m.description}</p>
                  {m.founders && (
                    <div className="timeline-founders">
                      {m.founders.map((f, idx) => (
                        <div key={idx} className="founder-item">
                          <span className="founder-name">{f.name}</span>
                          <span className="founder-role">{f.role}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  {m.sectors && (
                    <div className="timeline-sectors">
                      {m.sectors.map((s, idx) => (
                        <span key={idx} className="sector-badge">
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Mobile View */}
        {mobile && (
          <div className="timeline-mobile">
            {/* Aurora background */}
            <div className="timeline-aurora timeline-aurora-mobile">
              <div className="aurora-blob aurora-blob-1" />
              <div className="aurora-blob aurora-blob-2" />
              <div className="aurora-blob aurora-blob-3" />
              <div className="aurora-blob aurora-blob-4" />
              <div className="aurora-overlay" />
            </div>

            {/* Title */}
            <div className="timeline-header timeline-header-mobile">
              <h2 className="timeline-main-title">Our Timeline</h2>
              <p className="timeline-subtitle">
                A decade of building, from institutional roots to AWJ Corp, a technology group spanning four specialized sectors.
              </p>
            </div>

            {/* Vertical spine and milestones */}
            <div className="timeline-spine-wrapper">
              <div className="timeline-spine" />

              {MILESTONES.map((m) => (
                <div key={m.year} className="timeline-milestone">
                  <div className="timeline-milestone-dot" />
                  <div className="timeline-year-pill timeline-year-pill-mobile">{m.year}</div>
                  <div className="timeline-card timeline-card-mobile">
                    <h3>{m.title}</h3>
                    <p>{m.description}</p>
                    {m.founders && (
                      <div className="timeline-founders">
                        {m.founders.map((f) => (
                          <div key={f.name} className="founder-item">
                            <span className="founder-name">{f.name}</span>
                            <span className="founder-role">{f.role}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    {m.sectors && (
                      <div className="timeline-sectors">
                        {m.sectors.map((s) => (
                          <span key={s} className="sector-badge">
                            {s}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
