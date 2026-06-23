import { useEffect, useRef, useState } from 'react';
import { useLang } from '../i18n/LangContext';
import type { TranslationKey } from '../i18n/dict';

type Row = {
  color: string;
  glow: string;
  end: number;
  suffix: string;
  labelKey: TranslationKey;
};

const STAT_ROWS: Row[] = [
  {
    color: '#0c0e14',
    glow: 'rgba(12, 14, 20, 0.18)',
    end: 50,
    suffix: '+',
    labelKey: 'stats.projects.label',
  },
  {
    color: '#0c0e14',
    glow: 'rgba(12, 14, 20, 0.18)',
    end: 7600,
    suffix: '+',
    labelKey: 'stats.professionals.label',
  },
  {
    color: '#0c0e14',
    glow: 'rgba(12, 14, 20, 0.18)',
    end: 25,
    suffix: '+',
    labelKey: 'stats.partners.label',
  },
  {
    color: '#0c0e14',
    glow: 'rgba(0, 105, 200, 0.18)',
    end: 10,
    suffix: '+',
    labelKey: 'stats.experience.label',
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
      {v.toLocaleString('en-US')}
      <span className="suffix">{suffix}</span>
    </div>
  );
};

export const Stats = () => {
  const { t } = useLang();
  return (
    <section className="stats-band" data-screen-label="02 Stats">
      <div className="stats-band-row container reveal-stagger">
        {STAT_ROWS.map((s) => (
          <div
            className="stat-col"
            key={s.labelKey}
            style={
              { '--accent': s.color, '--accent-glow': s.glow } as React.CSSProperties
            }
          >
            <div className="stat-col-top">
              <span className="stat-label">{t(s.labelKey)}</span>
            </div>
            <StatNum end={s.end} suffix={s.suffix} />
          </div>
        ))}
      </div>
    </section>
  );
};
