import { useState, useEffect } from "react";
import { Menu, X, Code2, Github } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Language = "en" | "es";

interface NavbarProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const translations = {
  en: {
    personal: {
      github: "https://github.com/JohanFausto14",
    },
    nav: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      education: "Education",
      projects: "Projects",
      contact: "Contact",
    },
  },
  es: {
    personal: {
      github: "https://github.com/JohanFausto14",
    },
    nav: {
      about: "Sobre Mí",
      skills: "Habilidades",
      experience: "Experiencia",
      education: "Educación",
      projects: "Proyectos",
      contact: "Contacto",
    },
  },
};

const Navbar = ({ language, setLanguage }: NavbarProps) => {
  const t = translations[language];
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" },
    );
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const navLinks = [
    { name: t.nav.about, href: "#about" },
    { name: t.nav.skills, href: "#skills" },
    { name: t.nav.experience, href: "#experience" },
    { name: t.nav.education, href: "#education" },
    { name: t.nav.projects, href: "#projects" },
    { name: t.nav.contact, href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-slate-900/95 py-4 shadow-lg" : "bg-transparent py-6"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex-shrink-0 cursor-pointer"
            onClick={() => window.scrollTo(0, 0)}
          >
            <div className="flex items-center gap-2 text-cyan-400 font-bold text-xl">
              <Code2 className="w-8 h-8" />
              <span>Ari Johan</span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    activeSection === link.href.substring(1)
                      ? "text-cyan-400 bg-slate-800/50"
                      : "text-gray-300 hover:text-cyan-400"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop Right — Social Icons + Language Toggle */}
          <div className="hidden md:flex items-center gap-4">
            {/* GitHub */}
            <a
              href={t.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-slate-800 transition-all duration-200"
            >
              <Github className="w-5 h-5" />
            </a>

            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === "en" ? "es" : "en")}
              className="relative w-20 h-9 bg-slate-900 rounded-full border border-slate-700 p-1 cursor-pointer shadow-inner hover:border-cyan-500/50 transition-colors"
              title={
                language === "en" ? "Cambiar a Español" : "Switch to English"
              }
            >
              <div className="relative w-full h-full flex z-10 pointer-events-none">
                <div className="relative flex-1 h-full flex items-center justify-center">
                  {language === "en" && (
                    <motion.div
                      layoutId="desktop-active-indicator"
                      className="absolute inset-0 bg-cyan-500 rounded-full shadow-sm"
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    />
                  )}
                  <img
                    src="https://flagcdn.com/us.svg"
                    alt="EN"
                    className={`relative z-10 w-5 h-3.5 rounded-[3px] object-cover transition-opacity duration-200 ${language === "en" ? "opacity-100" : "opacity-50"}`}
                  />
                </div>
                <div className="relative flex-1 h-full flex items-center justify-center">
                  {language === "es" && (
                    <motion.div
                      layoutId="desktop-active-indicator"
                      className="absolute inset-0 bg-cyan-500 rounded-full shadow-sm"
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    />
                  )}
                  <img
                    src="https://flagcdn.com/mx.svg"
                    alt="ES"
                    className={`relative z-10 w-5 h-3.5 rounded-[3px] object-cover transition-opacity duration-200 ${language === "es" ? "opacity-100" : "opacity-50"}`}
                  />
                </div>
              </div>
            </button>
          </div>

          {/* Mobile — Language Toggle + Hamburger */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setLanguage(language === "en" ? "es" : "en")}
              className="relative w-20 h-9 bg-slate-900 rounded-full border border-slate-700 p-1 cursor-pointer shadow-inner hover:border-cyan-500/50 transition-colors"
            >
              <div className="relative w-full h-full flex z-10 pointer-events-none">
                <div className="relative flex-1 h-full flex items-center justify-center">
                  {language === "en" && (
                    <motion.div
                      layoutId="mobile-active-indicator"
                      className="absolute inset-0 bg-cyan-500 rounded-full shadow-sm"
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    />
                  )}
                  <img
                    src="https://flagcdn.com/us.svg"
                    alt="EN"
                    className={`relative z-10 w-5 h-3.5 rounded-[3px] object-cover transition-opacity duration-200 ${language === "en" ? "opacity-100" : "opacity-50"}`}
                  />
                </div>
                <div className="relative flex-1 h-full flex items-center justify-center">
                  {language === "es" && (
                    <motion.div
                      layoutId="mobile-active-indicator"
                      className="absolute inset-0 bg-cyan-500 rounded-full shadow-sm"
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    />
                  )}
                  <img
                    src="https://flagcdn.com/mx.svg"
                    alt="ES"
                    className={`relative z-10 w-5 h-3.5 rounded-[3px] object-cover transition-opacity duration-200 ${language === "es" ? "opacity-100" : "opacity-50"}`}
                  />
                </div>
              </div>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-cyan-400 hover:bg-slate-800 focus:outline-none"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900 border-b border-slate-800"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    activeSection === link.href.substring(1)
                      ? "text-cyan-400 bg-slate-800/50"
                      : "text-gray-300 hover:text-cyan-400"
                  }`}
                >
                  {link.name}
                </a>
              ))}

              {/* Mobile Social Icons */}
              <div className="flex gap-3 px-3 pt-2 pb-1">
                <a
                  href={t.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-slate-800 transition-all duration-200"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
