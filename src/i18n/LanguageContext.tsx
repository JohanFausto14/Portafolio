import { createContext, useContext } from "react";
import type { Language } from "./types";

export interface LanguageContextValue {
  /** Target language — drives the toggle position feedback immediately. */
  language: Language;
  /** Language currently rendered in the content (lags behind during the crossfade). */
  displayedLanguage: Language;
  /** True while the content crossfade is in progress. */
  isTransitioning: boolean;
  /** Requests a language change (state + crossfade orchestration). */
  setLanguage: (lang: Language) => void;
}

export const LanguageContext = createContext<LanguageContextValue | null>(null);

export const useLanguage = (): LanguageContextValue => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageContext.Provider");
  }
  return context;
};
