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
  asset: string;
  descKey: TranslationKey;
  meta: MetaRow[];
};

const PILLAR_DATA: PillarItem[] = [
  {
    id: 'academy',
    name: 'Academy',
    num: '01 / 04',
    cls: 'stack-card-academy',
    icon: '/assets/brand/awj-academy-logo-v.svg',
    asset: '/assets/brand/awj-academy-asset-1.svg',
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
    icon: '/assets/brand/awj-sustain-logo-v.svg',
    asset: '/assets/brand/awj-sustain-asset-1.svg',
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
    icon: '/assets/brand/awj-innovation-logo-v.svg',
    asset: '/assets/brand/awj-innovation-asset-1.svg',
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
    icon: '/assets/brand/awj-systems-logo-v.svg',
    asset: '/assets/brand/awj-systems-asset-1.svg',
    descKey: 'pillar.systems.desc',
    meta: [
      { labelKey: 'pillar.meta.established', literal: '2003' },
      { labelKey: 'pillar.meta.mandates', valueKey: 'pillar.systems.mandates' },
      { labelKey: 'pillar.meta.focus', valueKey: 'pillar.systems.focus' },
    ],
  },
];

export const PillarsStack = () => {
  const { t, lang } = useLang();
  const [idx, setIdx] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const total = PILLAR_DATA.length;

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const tmr = window.setTimeout(() => {
      setIdx((i) => (i + 1) % total);
    }, 6000);
    return () => window.clearTimeout(tmr);
  }, [idx, total]);

  useEffect(() => {
    const handleWindowPointerUp = (e: PointerEvent) => {
      if (!dragRef.current.dragging) return;
      const dx = (e as any).clientX - dragRef.current.x;
      setDragOffset(0);
      if (dx < -40) setIdx((i) => (i + 1) % total);
      else if (dx > 40) setIdx((i) => (i - 1 + total) % total);
      dragRef.current.dragging = false;
    };
    window.addEventListener('pointerup', handleWindowPointerUp);
    return () => window.removeEventListener('pointerup', handleWindowPointerUp);
  }, [total]);

  // Each card's position state (0 = active, 1/2 = fanned back, 3 = behind).
  // The transforms live in CSS keyed on data-pos; only the active card's drag
  // nudge is dynamic, passed as the --drag-x custom property.
  const cardPos = (i: number) => (i - idx + total) % total;

  const dragRef = useRef({ x: 0, dragging: false });
  const onPointerDown = (e: React.PointerEvent) => {
    dragRef.current = { x: e.clientX, dragging: true };
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragRef.current.dragging) return;
    const dx = e.clientX - dragRef.current.x;
    setDragOffset(dx);
  };
  const handlePointerEnd = (e: React.PointerEvent) => {
    if (!dragRef.current.dragging) return;
    const dx = e.clientX - dragRef.current.x;
    setDragOffset(0);
    if (dx < -40) setIdx((idx + 1) % total);
    else if (dx > 40) setIdx((idx - 1 + total) % total);
    dragRef.current.dragging = false;
  };
  const onPointerUp = handlePointerEnd;
  const onPointerLeave = (e: React.PointerEvent) => {
    if (dragRef.current.dragging && e.buttons === 0) {
      handlePointerEnd(e);
    }
  };

  return (
    <section className="pillars-stack" id="pillars" data-screen-label="03 Pillars">
      <div className="container pillars-stack-layout">
        <div className="pillars-stack-head reveal">
          <h2 className="section-title">
            {lang === 'ar' ? (
              // Arabic: plain "قطاعات أوج" heading, no AWJ logo.
              <>{t('pillars.title.first')} <em>{t('pillars.title.second')}</em></>
            ) : (
              <>
                <img src="/assets/brand/awj-logo-v.svg" alt="AWJ" className="section-awj-logo" /> <em>{t('pillars.title.second')}</em>
              </>
            )}
          </h2>
          <p>{t('pillars.intro')}</p>
        </div>
        <div className="pillars-stack-right">
          <div
            className="stack-stage reveal"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerLeave={onPointerLeave}
          >
            {PILLAR_DATA.map((p, i) => (
              <div
                key={p.id}
                className={`stack-card ${p.cls}`}
                data-pos={cardPos(i)}
                data-dragging={dragOffset !== 0}
                style={
                  cardPos(i) === 0
                    ? ({ ['--drag-x']: `${dragOffset * 0.3}px` } as CSSProperties)
                    : undefined
                }
              >
                <img src={p.asset} alt="" aria-hidden="true" className="card-asset" />
                <div className="card-header">
                  <img src={p.icon} alt={`AWJ ${p.name}`} className="card-logo-img" />
                </div>
                <div className="card-content">
                  <p className="desc">{t(p.descKey)}</p>
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
              {PILLAR_DATA.map((p, i) => (
                <button
                  key={p.id}
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
