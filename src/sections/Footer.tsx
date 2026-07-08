import { Instagram, Linkedin, MapPin } from 'lucide-react';
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
                <Linkedin size={16} strokeWidth={1.6} aria-hidden />
              </a>
              <a
                href="https://x.com/awj_corp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/awj.corp/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram size={16} strokeWidth={1.6} aria-hidden />
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
          <div className="footer-col">
            <div className="footer-col-header">
              <MapPin size={18} strokeWidth={1.6} aria-hidden />
              <h4>{t('footer.col.location')}</h4>
            </div>
            <p>{t('footer.col.address')}</p>
            <p>{t('footer.col.hours')}</p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>{t('footer.copyright')}</span>
        </div>
      </div>
    </footer>
  );
};
