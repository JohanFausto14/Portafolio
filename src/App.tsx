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

  useEffect(() => {
    localStorage.setItem("portfolio_lang", language);
    document.documentElement.lang = language;
  }, [language]);

  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen font-sans selection:bg-white selection:text-[#0f0f0f] relative overflow-x-hidden">
      {/* Top Navbar */}
      <Navbar language={language} setLanguage={setLanguage} />

      {/* Main Sections */}
      <main className="relative z-10">
        <Hero language={language} />
        <About language={language} />
        <Projects language={language} />
        <Experience language={language} />
        <Skills language={language} />
        <Education language={language} />
        <Contact language={language} />
      </main>

      {/* Footer */}
      <Footer language={language} />
    </div>
  );
}

export default App;
