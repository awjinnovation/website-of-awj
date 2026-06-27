import { useLang } from '../i18n/LangContext';

export const Services = () => {
  const { t } = useLang();
  return (
    <section className="services mesh-bg" id="services" data-screen-label="05 Services">
      <div className="container">
        <div className="services-head reveal">
          <div>
            <h2 className="section-title" style={{ marginTop: 0 }}>
              {t('services.title')}
            </h2>
          </div>
        </div>
        <div className="bento reveal-stagger">
          <div className="bento-card b-1 bento-ink">
            <img src="/assets/brand/awj-asset-1.svg" className="card-asset" alt="" aria-hidden="true" />
            <div>
              <div className="title">
                {t('services.b1.title.line1')}{' '}
                <span style={{ fontWeight: 800 }}>{t('services.b1.title.line2')}</span>
              </div>
              <p className="body" style={{ marginTop: 18 }}>
                {t('services.b1.body')}
              </p>
            </div>
          </div>
          <div className="bento-card b-2 bento-academy">
            <img src="/assets/brand/awj-academy-asset-1.svg" className="card-asset" alt="" aria-hidden="true" />
            <div className="title">{t('services.b2.title')}</div>
            <p className="body">{t('services.b2.body')}</p>
          </div>
          <div className="bento-card b-3 bento-sustain">
            <img src="/assets/brand/awj-sustain-asset-1.svg" className="card-asset" alt="" aria-hidden="true" />
            <div className="title">{t('services.b3.title')}</div>
            <p className="body">{t('services.b3.body')}</p>
          </div>
          <div className="bento-card b-4 bento-innovation">
            <img src="/assets/brand/awj-innovation-asset-1.svg" className="card-asset" alt="" aria-hidden="true" />
            <div className="title">{t('services.b4.title')}</div>
            <p className="body">{t('services.b4.body')}</p>
          </div>
          <div className="bento-card b-5 bento-systems">
            <img src="/assets/brand/awj-systems-asset-1.svg" className="card-asset" alt="" aria-hidden="true" />
            <div className="title">{t('services.b5.title')}</div>
            <p className="body">{t('services.b5.body')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
