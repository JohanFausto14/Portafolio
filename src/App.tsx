import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { LanguageProvider } from "./context/LanguageContext";
import ScrollProgress from "./components/ScrollProgress";

import { useLanguage } from "./context/LanguageContext";

function App() {
  const { isTransitioning } = useLanguage();

  return (
    <div
      className={`bg-slate-950 min-h-screen text-white selection:bg-cyan-500/30 transition-opacity duration-300 ease-in-out ${
        isTransitioning ? "opacity-0" : "opacity-100"
      }`}
    >
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

const AppWrapper = () => {
  return (
    <LanguageProvider>
      <App />
    </LanguageProvider>
  );
};

export default AppWrapper;
