import { useEffect, useRef, useState } from 'react';

type Row = {
  color: string;
  glow: string;
  end: number;
  suffix: string;
  label: string;
  desc: string;
};

const STAT_ROWS: Row[] = [
  {
    color: 'var(--academy)',
    glow: 'rgba(255, 107, 53, 0.18)',
    end: 50,
    suffix: '+',
    label: 'Projects Delivered',
    desc: 'Across infrastructure, ventures, and learning mandates.',
  },
  {
    color: 'var(--sustain)',
    glow: 'rgba(0, 168, 150, 0.18)',
    end: 500,
    suffix: '+',
    label: 'Professionals Trained',
    desc: 'Operators, engineers, and educators upskilled in-house.',
  },
  {
    color: 'var(--innovation)',
    glow: 'rgba(255, 138, 0, 0.18)',
    end: 25,
    suffix: '+',
    label: 'Strategic Partners',
    desc: 'Long-term partners across the GCC, Asia, and Africa.',
  },
  {
    color: 'var(--systems)',
    glow: 'rgba(0, 105, 200, 0.18)',
    end: 10,
    suffix: '+',
    label: 'Years Combined Experience',
    desc: 'Founding team operating expertise pooled at AWJ.',
  },
];

const useCounter = (end: number) => {
  const [v, setV] = useState(0);
  const [done, setDone] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const col = el.closest<HTMLElement>('.stat-col');
    const colIndex =
      col?.parentElement
        ? Array.from(col.parentElement.children).indexOf(col)
        : 0;
    const startDelay = Math.max(0, colIndex) * 220;

    let countRaf = 0;
    let startTimer: number | undefined;

    const cancel = () => {
      if (startTimer) {
        clearTimeout(startTimer);
        startTimer = undefined;
      }
      if (countRaf) {
        cancelAnimationFrame(countRaf);
        countRaf = 0;
      }
    };

    const startCount = () => {
      let t0: number | undefined;
      const step = (t: number) => {
        if (t0 === undefined) t0 = t;
        const k = Math.min(1, (t - t0) / 1500);
        setV(Math.round(end * (1 - Math.pow(1 - k, 3))));
        if (k < 1) countRaf = requestAnimationFrame(step);
        else setDone(true);
      };
      countRaf = requestAnimationFrame(step);
    };

    // Restart the count-up every time the column re-enters view, so
    // auto-scroll cycling back to the stats band animates them fresh.
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            cancel();
            setV(0);
            setDone(false);
            startTimer = window.setTimeout(startCount, startDelay);
          } else {
            cancel();
          }
        });
      },
      { threshold: 0.35 },
    );
    io.observe(el);

    return () => {
      io.disconnect();
      cancel();
    };
  }, [end]);

  return [v, ref, done] as const;
};

const StatNum = ({ end, suffix }: { end: number; suffix: string }) => {
  const [v, ref, done] = useCounter(end);

  return (
    <div className={'num' + (done ? ' is-pulsing' : '')} ref={ref}>
      {v}
      <span className="suffix">{suffix}</span>
    </div>
  );
};

export const Stats = () => (
  <section className="stats-band" data-screen-label="02 Stats">
    <div className="stats-band-row container reveal-stagger">
      {STAT_ROWS.map((s, i) => (
        <div
          className="stat-col"
          key={i}
          style={
            { '--accent': s.color, '--accent-glow': s.glow } as React.CSSProperties
          }
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
