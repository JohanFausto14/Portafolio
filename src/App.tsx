import { useState, useEffect } from "react";
import { MotionConfig } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { LanguageContext, type LanguageContextValue } from "./i18n/LanguageContext";
import type { Language } from "./i18n/types";
import { translations } from "./i18n";

function App() {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("portfolio_lang");
    return saved === "en" || saved === "es" ? saved : "es";
  });
  const [displayedLanguage, setDisplayedLanguage] = useState<Language>(language);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    localStorage.setItem("portfolio_lang", language);
    document.documentElement.lang = language;
  }, [language]);

  const handleLanguageChange = (newLang: Language) => {
    if (newLang === language || isTransitioning) return;
    setLanguage(newLang);
    setIsTransitioning(true);
    setTimeout(() => {
      setDisplayedLanguage(newLang);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 300);
  };

  const languageValue: LanguageContextValue = {
    language,
    displayedLanguage,
    isTransitioning,
    setLanguage: handleLanguageChange,
  };

  const t = translations[displayedLanguage];

  return (
    <MotionConfig reducedMotion="user">
      <LanguageContext.Provider value={languageValue}>
        <div className="bg-[#0f0f0f] text-white min-h-screen font-sans selection:bg-white selection:text-[#0f0f0f] relative overflow-x-hidden">
          {/* Keyboard-only skip link: visible on focus */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:font-tech focus:text-sm focus:font-bold focus:text-[#0f0f0f]"
          >
            {t.app.skipToContent}
          </a>

          {/* Top Navbar stays fixed and gives instant slider feedback while syncing text crossfade */}
          <Navbar />

          {/* Main Content & Footer with Smooth Pure Opacity Crossfade */}
          <div
            className={`transition-opacity duration-300 ease-in-out ${
              isTransitioning ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            <main id="main-content" className="relative z-10">
              <Hero />
              <About />
              <Projects />
              <Experience />
              <Skills />
              <Education />
              <Contact />
            </main>

            <Footer />
          </div>
        </div>
      </LanguageContext.Provider>
    </MotionConfig>
  );
}

export default App;
