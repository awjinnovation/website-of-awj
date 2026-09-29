import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';
import { DICT, type Lang, type TranslationKey } from './dict';

type LangContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggle: () => void;
  t: (key: TranslationKey) => string;
  /** "rtl" when Arabic is selected. */
  dir: 'ltr' | 'rtl';
};

const LangContext = createContext<LangContextValue | null>(null);
const STORAGE_KEY = 'awj.lang';

const readInitial = (): Lang => {
  if (typeof window === 'undefined') return 'en';
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'ar' || stored === 'en') return stored;
  return 'en';
};

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(readInitial);

  // Sync <html lang dir> + persist whenever the language changes.
  useEffect(() => {
    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === 'ar' ? 'rtl' : 'ltr';
    // index.html carries the English title/description for crawlers; swap them
    // whenever the reader switches language.
    document.title = DICT[lang]['meta.title'] ?? DICT.en['meta.title'] ?? 'AWJ';
    const desc = document.querySelector('meta[name="description"]');
    if (desc) {
      const next = DICT[lang]['meta.description'] ?? DICT.en['meta.description'];
      if (next) desc.setAttribute('content', next);
    }
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore storage errors (e.g. private mode)
    }
  }, [lang]);

  const setLang = useCallback((next: Lang) => setLangState(next), []);
  const toggle = useCallback(
    () => setLangState((cur) => (cur === 'en' ? 'ar' : 'en')),
    [],
  );

  const t = useCallback(
    (key: TranslationKey) => DICT[lang][key] ?? DICT.en[key] ?? key,
    [lang],
  );

  return (
    <LangContext.Provider
      value={{ lang, setLang, toggle, t, dir: lang === 'ar' ? 'rtl' : 'ltr' }}
    >
      {children}
    </LangContext.Provider>
  );
};

export const useLang = (): LangContextValue => {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used within <LangProvider>');
  return ctx;
};
