import { motion } from "framer-motion";
import { ArrowRight, Download, ChevronDown } from "lucide-react";
import InteractiveTitle from "./common/InteractiveTitle";
import fotoPerfil from "../assets/FotoPortafolio.webp";

import { useLanguage } from "../i18n/LanguageContext";
import { translations } from "../i18n";

const Hero = () => {
  const { displayedLanguage: language } = useLanguage();
  const t = translations[language];
  const cvFile = language === "en" ? "/CV_en.pdf?v=v4" : "/CV_es.pdf?v=v3";

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-[#0f0f0f] pt-28 pb-16 overflow-hidden border-b border-[#222222]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-center lg:text-left">
          {/* ── LEFT: Info ── */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            {/* Available badge */}
            <motion.span
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05, ease: "easeOut" }}
              className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-[#171717] border border-[#333333] text-[#aaaaaa] hover:text-white transition-colors text-xs font-tech font-bold mb-6"
            >
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              {t.hero.available}
            </motion.span>

            {/* Display Headline - Dominant size with precise letter spacing */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.12, ease: "easeOut" }}
              className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-[clamp(2.75rem,5.3vw,5.25rem)] text-white tracking-normal mb-3 uppercase leading-none whitespace-nowrap"
            >
              <InteractiveTitle text="FULL STACK DEVELOPER" charClassName="px-[0.01em]" />
            </motion.div>

            {/* Greeting */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.2, ease: "easeOut" }}
              className="text-2xl sm:text-3xl font-tech font-bold text-white tracking-wide mb-3"
            >
              {t.hero.greeting}
            </motion.h1>

            {/* Role subtitle - Original spacing & height preserved */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.28, ease: "easeOut" }}
              className="h-12 flex items-center justify-center lg:justify-start mb-6"
            >
              <h2 className="text-xl sm:text-2xl font-tech font-semibold text-[#888888] hover:text-white transition-colors">
                {t.hero.role}
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.35, ease: "easeOut" }}
              className="text-sm sm:text-base font-tech text-[#888888] hover:text-white transition-colors duration-300 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              {t.hero.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.42, ease: "easeOut" }}
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 items-center justify-center lg:justify-start mb-4 w-full"
            >
              <a
                href="#projects"
                className="group w-full sm:w-auto px-7 py-3 rounded-full bg-white text-[#0f0f0f] font-tech font-bold text-xs tracking-widest hover:bg-[#dddddd] transition-all duration-300 flex items-center justify-center gap-2 uppercase shadow-md"
              >
                {t.hero.viewWork}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#171717] text-white font-tech font-bold text-xs tracking-widest border border-[#333333] hover:border-white transition-all duration-300 flex items-center justify-center uppercase"
              >
                {t.hero.contactMe}
              </a>
              <a
                href={cvFile}
                download
                className="group w-full sm:w-auto px-7 py-3 rounded-full border border-[#444444] text-[#aaaaaa] hover:text-white hover:border-white font-tech font-bold text-xs tracking-widest transition-all duration-300 flex items-center justify-center gap-2 uppercase"
              >
                <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                {t.hero.downloadCv}
              </a>
            </motion.div>
          </div>

          {/* ── RIGHT: Avatar with original rings (badges removed) ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.18, ease: "easeOut" }}
            className="lg:col-span-5 flex-shrink-0 flex justify-center order-1 lg:order-2"
          >
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[22rem] lg:h-[22rem]">
              {/* Ambient glow */}
              <div className="absolute inset-0 rounded-full bg-white/5 blur-3xl scale-110 transform-gpu" />

              {/* Main circle */}
              <div className="relative w-full h-full rounded-full bg-[#171717] border border-[#333333] flex items-center justify-center overflow-hidden shadow-2xl">
                <img
                  src={fotoPerfil}
                  alt="Johan Fausto"
                  width={352}
                  height={352}
                  fetchPriority="high"
                  className="relative w-full h-full object-cover object-[center_20%] z-10"
                />
              </div>

              {/* Rotating dashed rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-full border border-dashed border-[#444444]/40 transform-gpu will-change-transform pointer-events-none"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-9 rounded-full border border-dashed border-[#333333]/30 transform-gpu will-change-transform pointer-events-none"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-[#666666] hover:text-white transition-colors" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
