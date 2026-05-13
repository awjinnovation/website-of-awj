import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { useLang } from '../i18n/LangContext';
import type { TranslationKey } from '../i18n/dict';

type MetaRow = { labelKey: TranslationKey; valueKey?: TranslationKey; literal?: string };

type PillarItem = {
  id: string;
  name: string;
  num: string;
  cls: string;
  icon: string;
  descKey: TranslationKey;
  meta: MetaRow[];
};

const PILLAR_DATA: PillarItem[] = [
  {
    id: 'academy',
    name: 'Academy',
    num: '01 / 04',
    cls: 'stack-card-academy',
    icon: '/assets/icon-academy.svg?v=3',
    descKey: 'pillar.academy.desc',
    meta: [
      { labelKey: 'pillar.meta.established', literal: '2009' },
      { labelKey: 'pillar.meta.reach', valueKey: 'pillar.academy.reach' },
      { labelKey: 'pillar.meta.alumni', valueKey: 'pillar.academy.alumni' },
    ],
  },
  {
    id: 'sustain',
    name: 'Sustain',
    num: '02 / 04',
    cls: 'stack-card-sustain',
    icon: '/assets/icon-sustain.svg',
    descKey: 'pillar.sustain.desc',
    meta: [
      { labelKey: 'pillar.meta.partner', valueKey: 'pillar.sustain.partner' },
      { labelKey: 'pillar.meta.reach', valueKey: 'pillar.sustain.reach' },
      { labelKey: 'pillar.meta.focus', valueKey: 'pillar.sustain.focus' },
    ],
  },
  {
    id: 'innovation',
    name: 'Innovation',
    num: '03 / 04',
    cls: 'stack-card-innovation',
    icon: '/assets/icon-innovation.svg',
    descKey: 'pillar.innovation.desc',
    meta: [
      { labelKey: 'pillar.meta.based', valueKey: 'pillar.innovation.based' },
      { labelKey: 'pillar.meta.sectors', valueKey: 'pillar.innovation.sectors' },
      { labelKey: 'pillar.meta.focus', valueKey: 'pillar.innovation.focus' },
    ],
  },
  {
    id: 'systems',
    name: 'Systems',
    num: '04 / 04',
    cls: 'stack-card-systems',
    icon: '/assets/icon-systems.svg',
    descKey: 'pillar.systems.desc',
    meta: [
      { labelKey: 'pillar.meta.established', literal: '2003' },
      { labelKey: 'pillar.meta.mandates', valueKey: 'pillar.systems.mandates' },
      { labelKey: 'pillar.meta.focus', valueKey: 'pillar.systems.focus' },
    ],
  },
];

export const PillarsStack = () => {
  const { t } = useLang();
  const [idx, setIdx] = useState(0);
  const total = PILLAR_DATA.length;

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const tmr = window.setTimeout(() => {
      setIdx((i) => (i + 1) % total);
    }, 6000);
    return () => window.clearTimeout(tmr);
  }, [idx, total]);

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
            {t('pillars.title.first')} <em>{t('pillars.title.second')}</em>
          </h2>
          <p>{t('pillars.intro')}</p>
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
                  <div className="num">{t('pillars.label')} / {p.num}</div>
                  <img src={p.icon} alt="" className="icon" />
                </div>
                <div>
                  <div className="name">
                    <span className="awj">AWJ</span>
                    <span className="sub">{p.name}</span>
                  </div>
                  <p className="desc">{t(p.descKey)}</p>
                  <div className="meta-row">
                    {p.meta.map((m, j) => (
                      <div key={j}>
                        <div className="m-k">{t(m.labelKey)}</div>
                        <div className="m-v">{m.valueKey ? t(m.valueKey) : m.literal}</div>
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
              aria-label={t('pillars.prev')}
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
              aria-label={t('pillars.next')}
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
