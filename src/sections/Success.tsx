import type { ReactNode } from 'react';

type Case = {
  pillar: string;
  color: string;
  quote: ReactNode;
  who: string;
  role: string;
  outcomes: [string, string][];
};

const CASES: Case[] = [
  {
    pillar: 'Systems',
    color: '#0069c8',
    quote: (
      <>
        "AWJ delivered a system <em>we couldn't have built alone</em>, and trained the
        team that runs it now."
      </>
    ),
    who: 'H.E. Khalid Al-Mansoori',
    role: 'Deputy Minister · National Programs Authority',
    outcomes: [
      ['38%', 'Latency reduction'],
      ['240k', 'Citizens served daily'],
    ],
  },
  {
    pillar: 'Academy',
    color: '#9674ce',
    quote: (
      <>
        "Their workforce program <em>shifted our hiring pipeline</em> by an order of
        magnitude."
      </>
    ),
    who: 'Yusuf Bin Ahmed',
    role: 'CEO · Northwind Energy',
    outcomes: [
      ['10×', 'Pipeline volume'],
      ['2,400+', 'Engineers trained'],
    ],
  },
  {
    pillar: 'Innovation',
    color: '#ff6b00',
    quote: (
      <>
        "They <em>operate like a single firm</em> across four disciplines. That's rare.
        That's why we partner."
      </>
    ),
    who: 'Sara Reinhardt',
    role: 'Chief Strategy Officer · Lumen Capital',
    outcomes: [
      ['$120M', 'Co-invested capital'],
      ['7', 'Joint ventures'],
    ],
  },
];

export const Success = () => (
  <section className="success" id="success" data-screen-label="08 Success">
    <div className="container">
      <div className="success-head reveal">
        <div>
          <div className="eyebrow" style={{ opacity: 0.85 }}>
            Case studies
          </div>
          <h2 className="section-title" style={{ marginTop: 24 }}>
            The work, <em>by the numbers.</em>
          </h2>
        </div>
        <p>
          Independent outcomes from named mandates across the group, measured, audited,
          and on the record.
        </p>
      </div>
      <div className="case-grid reveal-stagger">
        {CASES.map((c, i) => (
          <div className="case-card" key={i}>
            <div className="case-pillar">
              <span className="dot" style={{ background: c.color }}></span>AWJ {c.pillar}
            </div>
            <div className="case-quote">{c.quote}</div>
            <div className="case-attr">
              <div className="who">{c.who}</div>
              <div>{c.role}</div>
            </div>
            <div className="case-outcomes">
              {c.outcomes.map(([n, l], j) => (
                <div key={j}>
                  <div className="o-num">{n}</div>
                  <div className="o-label">{l}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
