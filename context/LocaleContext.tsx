"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import * as en from "@/content/en";
import * as de from "@/content/de";

type Locale = "en" | "de";

interface LocaleContextType {
  locale: Locale;
  content: typeof en;
}

const LocaleContext = createContext<LocaleContextType>({
  locale: "en",
  content: en,
});

export function LocaleProvider({
  initialLocale,
  children,
}: {
  initialLocale: Locale;
  children: React.ReactNode;
}) {
  const [locale, setLocale] = useState<Locale>(initialLocale);

  // Sync state if initialLocale changes (e.g., during router events)
  useEffect(() => {
    setLocale(initialLocale);
  }, [initialLocale]);

  const content = (locale === "de" ? de as unknown as typeof en : en);

  return (
    <LocaleContext.Provider value={{ locale, content }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useContent() {
  return useContext(LocaleContext).content;
}

export function useLocale() {
  return useContext(LocaleContext).locale;
}
