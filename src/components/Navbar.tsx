import { useState, useEffect } from "react";
import { Code2, Menu, X, Github } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import flagUS from "../assets/us.svg";
import flagMX from "../assets/mx.svg";

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
    nav: [
      { name: "My Approach", href: "#about" },
      { name: "Featured Projects", href: "#projects" },
      { name: "Career Path", href: "#experience" },
      { name: "Tech & Tools", href: "#skills" },
      { name: "Credentials", href: "#education" },
      { name: "Get in Touch", href: "#contact" },
    ],
  },
  es: {
    personal: {
      github: "https://github.com/JohanFausto14",
    },
    nav: [
      { name: "Mi Enfoque", href: "#about" },
      { name: "Proyectos Destacados", href: "#projects" },
      { name: "Trayectoria", href: "#experience" },
      { name: "Tecnologías", href: "#skills" },
      { name: "Formación", href: "#education" },
      { name: "Contacto", href: "#contact" },
    ],
  },
};

const Navbar = ({ language, setLanguage }: NavbarProps) => {
  const t = translations[language];
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
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

  return (
    <nav
      className={`fixed w-full z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-[#0f0f0f]/95 border-b border-[#222222] py-3 shadow-md"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Brand Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="flex items-center gap-2 text-white font-tech font-bold text-xl">
              <Code2 className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
              <span className="group-hover:text-[#aaaaaa] transition-colors">Ari Johan</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {t.nav.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-xs font-tech font-bold tracking-wider transition-colors duration-200 uppercase ${
                    activeSection === link.href.substring(1)
                      ? "text-white bg-[#171717] border border-[#333333]"
                      : "text-[#888888] hover:text-white"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop Right — GitHub + Language Toggle */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={t.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-lg text-[#888888] hover:text-white hover:bg-[#171717] transition-all duration-200"
            >
              <Github className="w-5 h-5" />
            </a>

            {/* Sliding Language Toggle */}
            <button
              onClick={() => setLanguage(language === "en" ? "es" : "en")}
              className="relative w-20 h-9 bg-[#171717] rounded-full border border-[#333333] p-1 cursor-pointer shadow-inner hover:border-white transition-colors"
              aria-label={language === "en" ? "Switch language to Spanish" : "Cambiar idioma a Español"}
            >
              <div className="relative w-full h-full flex z-10 pointer-events-none">
                <div className="relative flex-1 h-full flex items-center justify-center">
                  {language === "en" && (
                    <motion.div
                      layoutId="desktop-active-indicator"
                      className="absolute inset-0 bg-[#333333] rounded-full shadow-sm"
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    />
                  )}
                  <img
                    src={flagUS}
                    alt="EN"
                    width={20}
                    height={14}
                    className={`relative z-10 w-5 h-3.5 rounded-[3px] object-cover transition-opacity duration-200 ${
                      language === "en" ? "opacity-100" : "opacity-40"
                    }`}
                  />
                </div>
                <div className="relative flex-1 h-full flex items-center justify-center">
                  {language === "es" && (
                    <motion.div
                      layoutId="desktop-active-indicator"
                      className="absolute inset-0 bg-[#333333] rounded-full shadow-sm"
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    />
                  )}
                  <img
                    src={flagMX}
                    alt="ES"
                    width={20}
                    height={14}
                    className={`relative z-10 w-5 h-3.5 rounded-[3px] object-cover transition-opacity duration-200 ${
                      language === "es" ? "opacity-100" : "opacity-40"
                    }`}
                  />
                </div>
              </div>
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setLanguage(language === "en" ? "es" : "en")}
              className="relative w-20 h-9 bg-[#171717] rounded-full border border-[#333333] p-1 cursor-pointer shadow-inner hover:border-white transition-colors"
              aria-label={language === "en" ? "Switch language to Spanish" : "Cambiar idioma a Español"}
            >
              <div className="relative w-full h-full flex z-10 pointer-events-none">
                <div className="relative flex-1 h-full flex items-center justify-center">
                  {language === "en" && (
                    <motion.div
                      layoutId="mobile-active-indicator"
                      className="absolute inset-0 bg-[#333333] rounded-full shadow-sm"
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    />
                  )}
                  <img
                    src={flagUS}
                    alt="EN"
                    width={20}
                    height={14}
                    className={`relative z-10 w-5 h-3.5 rounded-[3px] object-cover transition-opacity duration-200 ${
                      language === "en" ? "opacity-100" : "opacity-40"
                    }`}
                  />
                </div>
                <div className="relative flex-1 h-full flex items-center justify-center">
                  {language === "es" && (
                    <motion.div
                      layoutId="mobile-active-indicator"
                      className="absolute inset-0 bg-[#333333] rounded-full shadow-sm"
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    />
                  )}
                  <img
                    src={flagMX}
                    alt="ES"
                    width={20}
                    height={14}
                    className={`relative z-10 w-5 h-3.5 rounded-[3px] object-cover transition-opacity duration-200 ${
                      language === "es" ? "opacity-100" : "opacity-40"
                    }`}
                  />
                </div>
              </div>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#888888] hover:text-white hover:bg-[#171717] focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
            className="md:hidden bg-[#0f0f0f] border-b border-[#222222]"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {t.nav.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-sm font-tech font-bold uppercase ${
                    activeSection === link.href.substring(1)
                      ? "text-white bg-[#171717]"
                      : "text-[#888888] hover:text-white"
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex gap-3 px-3 pt-2 pb-1">
                <a
                  href={t.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-2 rounded-lg text-[#888888] hover:text-white hover:bg-[#171717] transition-all duration-200"
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
