"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { dict, type Lang, type DictKey } from "./translations";

type I18nCtx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (k: DictKey) => string;
  pick: (mk: string, en: string) => string;
};

const Ctx = createContext<I18nCtx>({
  lang: "mk",
  setLang: () => {},
  t: (k) => dict.mk[k] ?? k,
  pick: (mk) => mk,
});

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("mk");

  useEffect(() => {
    const saved =
      (typeof window !== "undefined" &&
        (localStorage.getItem("citygym-lang") as Lang | null)) ||
      null;
    if (saved === "mk" || saved === "en") setLangState(saved);
    else {
      const nav = navigator.language?.toLowerCase() ?? "";
      if (nav.startsWith("en")) setLangState("en");
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("citygym-lang", l);
      document.cookie = `citygym-lang=${l};path=/;max-age=31536000`;
      document.documentElement.lang = l === "mk" ? "mk" : "en";
    } catch {}
  };

  useEffect(() => {
    document.documentElement.lang = lang === "mk" ? "mk" : "en";
  }, [lang]);

  const t = (k: DictKey): string => dict[lang][k] ?? dict.mk[k] ?? k;
  const pick = (mk: string, en: string) => (lang === "mk" ? mk : en);

  return <Ctx.Provider value={{ lang, setLang, t, pick }}>{children}</Ctx.Provider>;
}

export function useI18n() {
  return useContext(Ctx);
}
