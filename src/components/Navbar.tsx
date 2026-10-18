import { useState, useEffect } from "react";
import { Code2, Menu, X, Github } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import flagUS from "../assets/us.svg";
import flagMX from "../assets/mx.svg";

import { CONTACT_INFO } from "../constants/contact";

import { useLanguage } from "../i18n/LanguageContext";
import type { Language } from "../i18n/types";
import { translations } from "../i18n";

interface LanguageToggleProps {
  language: Language;
  onToggle: () => void;
  layoutPrefix: string;
}

const LanguageToggle = ({ language, onToggle, layoutPrefix }: LanguageToggleProps) => (
  <button
    onClick={onToggle}
    className="relative w-20 h-9 bg-[#171717] rounded-full border border-[#333333] p-1 cursor-pointer shadow-inner hover:border-white transition-colors"
    aria-label={translations[language].nav.switchLanguage}
  >
    <div className="relative w-full h-full flex z-10 pointer-events-none">
      <div className="relative flex-1 h-full flex items-center justify-center">
        {language === "en" && (
          <motion.div
            layoutId={`${layoutPrefix}-active-indicator`}
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
            layoutId={`${layoutPrefix}-active-indicator`}
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
);

const Navbar = () => {
  const { language, displayedLanguage, isTransitioning, setLanguage } = useLanguage();
  const t = translations[displayedLanguage];
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en");
  };

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 40;
          setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close the mobile menu as soon as the user scrolls.
  useEffect(() => {
    if (!isOpen) return;
    const closeOnScroll = () => setIsOpen(false);
    window.addEventListener("scroll", closeOnScroll, { passive: true });
    return () => window.removeEventListener("scroll", closeOnScroll);
  }, [isOpen]);

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
              <span className="group-hover:text-[#aaaaaa] transition-colors">Johan Fausto</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:block">
            <div
              className={`ml-10 flex items-baseline space-x-6 transition-opacity duration-300 ease-in-out ${
                isTransitioning ? "opacity-0" : "opacity-100"
              }`}
            >
              {t.nav.items.map((link) => (
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
              href={CONTACT_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-lg text-[#888888] hover:text-white hover:bg-[#171717] transition-all duration-200"
            >
              <Github className="w-5 h-5" />
            </a>

            {/* Sliding Language Toggle */}
            <LanguageToggle
              language={language}
              onToggle={toggleLanguage}
              layoutPrefix="desktop"
            />
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center gap-4">
            <LanguageToggle
              language={language}
              onToggle={toggleLanguage}
              layoutPrefix="mobile"
            />

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#888888] hover:text-white hover:bg-[#171717] focus:outline-none"
              aria-label={isOpen ? t.nav.menuClose : t.nav.menuOpen}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
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
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0f0f0f] border-b border-[#222222]"
          >
            <div
              className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 transition-opacity duration-300 ease-in-out ${
                isTransitioning ? "opacity-0" : "opacity-100"
              }`}
            >
              {t.nav.items.map((link) => (
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
                  href={CONTACT_INFO.github}
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
