import { useEffect } from 'react';

/**
 * Shown for any route that does not match home, about, news or a valid pillar.
 * Sets the tab title and a noindex robots meta so crawlers do not index unknown
 * URLs, then cleans the meta up on unmount.
 */
export const NotFound = () => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = 'Page not found - AWJ';
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex';
    document.head.appendChild(meta);
    return () => {
      document.title = prevTitle;
      document.head.removeChild(meta);
    };
  }, []);

  return (
    <main className="app-error">
      <h1>Page not found</h1>
      <p>The page you are looking for does not exist or has moved.</p>
      <a href="/">Back to home</a>
    </main>
  );
};
