import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { NewsPage } from './pages/NewsPage';
import './styles-v2.css';
import './news-page.css';

const isNewsPath = (p: string) => p === '/news' || p === '/news/';

const Router = () => {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  return isNewsPath(path) ? <NewsPage /> : <App />;
};

const rootEl = document.getElementById('root');
if (!rootEl) throw new Error('Missing #root element');

createRoot(rootEl).render(
  <StrictMode>
    <Router />
  </StrictMode>,
);
