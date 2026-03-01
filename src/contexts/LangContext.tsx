import React, { createContext, useContext, useState, useCallback } from "react";

type Lang = "en" | "ar";

interface LangContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (en: string, ar: string) => string;
  isRTL: boolean;
}

const LangContext = createContext<LangContextType>({
  lang: "en",
  toggleLang: () => {},
  t: (en) => en,
  isRTL: false,
});

export const useLang = () => useContext(LangContext);

export const LangProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Lang>("en");

  const toggleLang = useCallback(() => {
    setLang((prev) => {
      const next = prev === "en" ? "ar" : "en";
      document.documentElement.dir = next === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = next;
      return next;
    });
  }, []);

  const t = useCallback(
    (en: string, ar: string) => (lang === "en" ? en : ar),
    [lang]
  );

  return (
    <LangContext.Provider value={{ lang, toggleLang, t, isRTL: lang === "ar" }}>
      <div className={lang === "ar" ? "font-arabic" : "font-sans"}>{children}</div>
    </LangContext.Provider>
  );
};
