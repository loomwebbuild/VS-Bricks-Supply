"use client";

import React, { createContext, useContext, useState } from "react";
import { TRANSLATIONS, Language, TranslationSchema } from "@/lib/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationSchema;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    try {
      if (typeof window !== "undefined") {
        const saved = localStorage.getItem("preferred_lang") as Language;
        if (saved === "en" || saved === "te") {
          return saved;
        }
      }
    } catch {
      // safe fallback
    }
    return "en";
  });

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    try {
      if (typeof window !== "undefined") {
        localStorage.setItem("preferred_lang", lang);
      }
    } catch {
      // safe fallback
    }
  };

  const toggleLanguage = () => {
    handleSetLanguage(language === "en" ? "te" : "en");
  };

  const t: TranslationSchema = TRANSLATIONS[language];

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: handleSetLanguage,
        t,
        toggleLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
