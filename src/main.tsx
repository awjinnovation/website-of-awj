import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { AboutPage } from './pages/AboutPage';
import { NewsPage } from './pages/NewsPage';
import { PillarPage } from './pages/PillarPage';
import { isPillarId, type PillarId } from './data/pillars';
import { LangProvider } from './i18n/LangContext';
import './tailwind.css';
import './styles-v2.css';
import './news-page.css';

const isAboutPath = (p: string) => p === '/about' || p === '/about/';
const isNewsPath = (p: string) => p === '/news' || p === '/news/';

const matchPillarPath = (p: string): PillarId | null => {
  const m = p.match(/^\/pillars\/([^/]+)\/?$/);
  if (!m) return null;
  return isPillarId(m[1]) ? m[1] : null;
};

const Router = () => {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  if (isAboutPath(path)) return <AboutPage />;
  if (isNewsPath(path)) return <NewsPage />;
  const pillarId = matchPillarPath(path);
  if (pillarId) return <PillarPage pillarId={pillarId} />;
  return <App />;
};

const rootEl = document.getElementById('root');
if (!rootEl) throw new Error('Missing #root element');

createRoot(rootEl).render(
  <StrictMode>
    <LangProvider>
      <Router />
    </LangProvider>
  </StrictMode>,
);
