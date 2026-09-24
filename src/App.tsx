import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

type Language = "en" | "es";

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

  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen font-sans selection:bg-white selection:text-[#0f0f0f] relative overflow-x-hidden">
      {/* Top Navbar stays fixed and gives instant slider feedback while syncing text crossfade */}
      <Navbar
        language={language}
        displayedLanguage={displayedLanguage}
        isTransitioning={isTransitioning}
        setLanguage={handleLanguageChange}
      />

      {/* Main Content & Footer with Smooth Pure Opacity Crossfade */}
      <div
        className={`transition-opacity duration-300 ease-in-out ${
          isTransitioning ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <main className="relative z-10">
          <Hero language={displayedLanguage} />
          <About language={displayedLanguage} />
          <Projects language={displayedLanguage} />
          <Experience language={displayedLanguage} />
          <Skills language={displayedLanguage} />
          <Education language={displayedLanguage} />
          <Contact language={displayedLanguage} />
        </main>

        <Footer language={displayedLanguage} />
      </div>
    </div>
  );
}

export default App;
