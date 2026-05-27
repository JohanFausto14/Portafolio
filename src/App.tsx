import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";

type Language = "en" | "es";

function App() {
  const [language, setLanguageState] = useState<Language>("es");
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const changeLanguage = (lang: Language) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setLanguageState(lang);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <div
      className={`bg-slate-950 min-h-screen text-white selection:bg-cyan-500/30 transition-opacity duration-300 ease-in-out ${
        isTransitioning ? "opacity-0" : "opacity-100"
      }`}
    >
      <ScrollProgress />
      <Navbar language={language} setLanguage={changeLanguage} />
      <main>
        <Hero language={language} />
        <About language={language} />
        <Skills language={language} />
        <Experience language={language} />
        <Education language={language} />
        <Projects language={language} />
        <Contact language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
}

export default App;
