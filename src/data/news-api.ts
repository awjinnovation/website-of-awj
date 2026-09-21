import { useEffect, useState } from 'react';
import type { NewsItem } from './news';

/**
 * Published stories come from the CMS. The API returns the same shape as
 * `NewsItem`, so the existing helpers keep working unchanged.
 */
const API_URL = (import.meta.env.VITE_API_URL as string | undefined)?.replace(/\/$/, '') ?? '';

export type NewsStatus = 'loading' | 'ready' | 'error';

let cache: NewsItem[] | null = null;
let inflight: Promise<NewsItem[]> | null = null;

export const fetchNews = (): Promise<NewsItem[]> => {
  if (cache) return Promise.resolve(cache);
  if (!inflight) {
    inflight = fetch(`${API_URL}/api/news`, { headers: { Accept: 'application/json' } })
      .then((res) => {
        if (!res.ok) throw new Error(`News API ${res.status}`);
        return res.json() as Promise<{ data: NewsItem[] }>;
      })
      .then(({ data }) => {
        cache = data;
        return data;
      })
      .finally(() => {
        inflight = null;
      });
  }
  return inflight;
};

/** Fetches one story from a signed preview link produced by the CMS. */
export const fetchPreview = (url: string): Promise<NewsItem> =>
  fetch(url, { headers: { Accept: 'application/json' } }).then((res) => {
    if (!res.ok) throw new Error(`Preview ${res.status}`);
    return res.json().then((j: { data: NewsItem }) => j.data);
  });

export const useNews = () => {
  const [news, setNews] = useState<NewsItem[]>(cache ?? []);
  const [status, setStatus] = useState<NewsStatus>(cache ? 'ready' : 'loading');

  useEffect(() => {
    let active = true;
    fetchNews()
      .then((data) => {
        if (!active) return;
        setNews(data);
        setStatus('ready');
      })
      .catch(() => {
        if (active) setStatus('error');
      });
    return () => {
      active = false;
    };
  }, []);

  return { news, status };
};
