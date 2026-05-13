import { useLang } from '../i18n/LangContext';

const PARTNERS = [
  'MERIDIAN',
  'NORTHWIND',
  'Lumen Capital',
  'ATLAS Group',
  'VOLTA Energy',
  'Helix Labs',
];

export const Partners = () => {
  const { t } = useLang();
  return (
    <section className="partners" data-screen-label="09 Partners">
      <div className="container">
        <div className="partners-head reveal">
          <div className="eyebrow">{t('partners.eyebrow')}</div>
          <h3>
            {t('partners.title.before')}{' '}
            <em style={{ fontStyle: 'italic', fontWeight: 200 }}>
              {t('partners.title.highlight')}
            </em>
            {t('partners.title.after')}
          </h3>
        </div>
        <div className="partners-row reveal">
          {PARTNERS.map((p) => (
            <div key={p}>{p}</div>
          ))}
        </div>
      </div>
    </section>
  );
};
