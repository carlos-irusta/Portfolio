"use client";

import { createContext, useContext, useState } from "react";
import { translations, type Lang } from "./i18n";

interface LangContextValue {
  lang: Lang;
  t: (typeof translations)[Lang];
  setLang: (l: Lang) => void;
}

const LangContext = createContext<LangContextValue>({
  lang: "en",
  t: translations.en,
  setLang: () => {},
});

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  const setLang = (l: Lang) => setLangState(l);

  return (
    <LangContext.Provider value={{ lang, t: translations[lang], setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
