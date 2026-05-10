import { AwjMark } from '../components/AwjMark';

export const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-base">
        <div className="footer-brand">
          <div className="wordmark" style={{ fontSize: 22 }}>
            <AwjMark style={{ width: 28, marginRight: 10 }} />
            <span className="awj">AWJ</span>
            <span className="sub" style={{ marginLeft: 6 }}>
              Group
            </span>
          </div>
          <p>
            An integrated holding group operating across Academy, Sustain, Innovation, and
            Systems — building durable progress for the regions and sectors we serve.
          </p>
          <form
            className="footer-newsletter"
            onSubmit={(e) => {
              e.preventDefault();
              alert('Subscribed.');
            }}
          >
            <input type="email" placeholder="your@email.com" required />
            <button type="submit" aria-label="Subscribe">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12h14M13 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </form>
          <div className="footer-social">
            <a href="#" aria-label="LinkedIn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.98 3.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM3 9.5h4V21H3V9.5zm6 0h3.8v1.6h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.65 4.78 6.1V21H17V15.7c0-1.27-.02-2.9-1.77-2.9-1.78 0-2.05 1.38-2.05 2.81V21H9V9.5z" />
              </svg>
            </a>
            <a href="#" aria-label="X">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231z" />
              </svg>
            </a>
            <a href="#" aria-label="IG">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
              </svg>
            </a>
          </div>
        </div>
        <div className="footer-col">
          <h4>Pillars</h4>
          <a href="#academy">AWJ Academy</a>
          <a href="#sustain">AWJ Sustain</a>
          <a href="#innovation">AWJ Innovation</a>
          <a href="#systems">AWJ Systems</a>
        </div>
        <div className="footer-col">
          <h4>Group</h4>
          <a href="#showcase">Companies</a>
          <a href="#services">Capabilities</a>
          <a href="#projects">Work</a>
          <a href="#news">News</a>
        </div>
        <div className="footer-col">
          <h4>Connect</h4>
          <a href="#contact">Contact</a>
          <a href="#">Careers</a>
          <a href="#">Press</a>
          <a href="#">Investor relations</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 AWJ Group · All rights reserved</span>
        <span>Riyadh · Dubai · London · Singapore</span>
      </div>
    </div>
  </footer>
);
