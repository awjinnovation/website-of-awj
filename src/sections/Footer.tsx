import { useLang } from '../i18n/LangContext';

export const Footer = () => {
  const { t } = useLang();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-base">
          <div className="footer-brand">
            <div className="wordmark footer-wordmark">
              <img
                src="/assets/brand/awj-logo-v.svg"
                alt="AWJ"
                className="footer-awj-logo"
              />
            </div>
            <p>{t('footer.brand.desc')}</p>
            <a className="footer-phone" href="tel:+96893909693" dir="ltr">
              +968 9390 9693
            </a>
            <div className="footer-social">
              <a
                href="https://www.linkedin.com/company/awj-om/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.98 3.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM3 9.5h4V21H3V9.5zm6 0h3.8v1.6h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.65 4.78 6.1V21H17V15.7c0-1.27-.02-2.9-1.77-2.9-1.78 0-2.05 1.38-2.05 2.81V21H9V9.5z" />
                </svg>
              </a>
              <a
                href="https://x.com/awj_corp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/awj.corp/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h4>{t('footer.col.pillars')}</h4>
            <a href="/pillars/academy">AWJ Academy</a>
            <a href="/pillars/sustain">AWJ Sustain</a>
            <a href="/pillars/innovation">AWJ Innovation</a>
            <a href="/pillars/systems">AWJ Systems</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>{t('footer.copyright')}</span>
        </div>
      </div>
    </footer>
  );
};
