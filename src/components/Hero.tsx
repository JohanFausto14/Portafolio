import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Download,
  Github,
} from "lucide-react";
import fotoPerfil from "../assets/FotoPortafolio.jpg";

/* ── Typewriter hook ── */
const useTypewriter = (
  texts: string[],
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDuration = 2200,
) => {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Reset when language changes (texts array content changes)
  const textsKey = texts.join("||");
  useEffect(() => {
    setDisplayText("");
    setTextIndex(0);
    setIsDeleting(false);
  }, [textsKey]);

  useEffect(() => {
    const currentText = texts[textIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === currentText) {
      timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    } else {
      timeout = setTimeout(
        () =>
          setDisplayText(
            isDeleting
              ? currentText.slice(0, displayText.length - 1)
              : currentText.slice(0, displayText.length + 1),
          ),
        isDeleting ? deletingSpeed : typingSpeed,
      );
    }
    return () => clearTimeout(timeout);
  }, [
    displayText,
    textIndex,
    isDeleting,
    texts,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ]);

  return displayText;
};

type Language = "en" | "es";

interface HeroProps {
  language: Language;
}

const translations = {
  en: {
    personal: {
      github: "https://github.com/JohanFausto14",
    },
    hero: {
      greeting: "Ari Johan Alvarado Fausto",
      available: "Available for Work",
      titleStart: "Full Stack",
      titleEnd: "Developer",
      description:
        "I build scalable web and mobile applications, integrating smooth frontend experiences with solid and scalable backend architectures. I focus on turning complex ideas into functional products, from projects from scratch to systems in production.",
      viewWork: "View My Work",
      contactMe: "Contact Me",
      downloadCv: "Download CV",
      cvLink: "/CV_en.pdf",
      roles: [
        "Full Stack Developer",
        "Web & Mobile Developer",
        "Software Engineer",
      ],
    },
  },
  es: {
    personal: {
      github: "https://github.com/JohanFausto14",
    },
    hero: {
      greeting: "Ari Johan Alvarado Fausto",
      available: "Disponible para Trabajar",
      titleStart: "Desarrollador",
      titleEnd: "Full Stack",
      description:
        "Construyo aplicaciones web y móviles escalables, integrando experiencias frontend fluidas con arquitecturas backend sólidas y escalables. Me enfoco en llevar ideas complejas a productos funcionales, desde proyectos de cero hasta sistemas en producción.",
      viewWork: "Ver Mi Trabajo",
      contactMe: "Contáctame",
      downloadCv: "Descargar CV",
      cvLink: "/CV_es.pdf",
      roles: [
        "Desarrollador Full Stack",
        "Desarrollador Web & Móvil",
        "Ingeniero de Software",
      ],
    },
  },
};

/* ── Component ── */
const Hero = ({ language }: HeroProps) => {
  const t = translations[language];
  const cvFile = t.hero.cvLink;
  const displayRole = useTypewriter(t.hero.roles);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-slate-950 overflow-hidden"
    >
      {/* Grid-dot background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(51,65,85,0.55) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/3 -left-1/4 w-[700px] h-[700px] bg-cyan-500/8 rounded-full blur-3xl transform-gpu" />
        <div className="absolute -bottom-1/3 -right-1/4 w-[700px] h-[700px] bg-violet-600/8 rounded-full blur-3xl transform-gpu" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 md:py-24 z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* ── LEFT: Text content ── */}
          <motion.div
            className="flex-1 text-center lg:text-left max-w-2xl mx-auto lg:mx-0 order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Available badge */}
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-slate-800 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              {t.hero.available}
            </motion.span>

            {/* Name */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4 leading-tight">
              {t.hero.greeting}
            </h1>

            {/* Typewriter role */}
            <div className="h-14 md:h-16 flex items-center justify-center lg:justify-start mb-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">
                  {displayRole}
                </span>
                <span className="inline-block w-[3px] h-7 md:h-9 bg-cyan-400 ml-1 align-middle rounded-full animate-pulse" />
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              {t.hero.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <a
                href="#projects"
                className="group px-7 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-[1.03] transition-all duration-300 flex items-center gap-2"
              >
                {t.hero.viewWork}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="px-7 py-3.5 rounded-full bg-slate-800/50 text-white font-semibold border border-slate-700 hover:bg-slate-700/70 hover:border-slate-600 transition-all duration-300"
              >
                {t.hero.contactMe}
              </a>
              <a
                href={cvFile}
                download
                className="group px-7 py-3.5 rounded-full border-2 border-cyan-500/40 text-cyan-400 font-semibold hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 flex items-center gap-2"
              >
                <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                {t.hero.downloadCv}
              </a>
              <a
                href={t.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-3 rounded-xl bg-slate-800/50 border border-slate-700 text-gray-400 hover:text-white hover:border-slate-500 hover:bg-slate-800 transition-all duration-300 flex items-center justify-center"
              >
                <Github className="w-5 h-5 hover:scale-110 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* ── RIGHT: Avatar ── */}
          <motion.div
            className="flex-shrink-0 flex justify-center order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[22rem] lg:h-[22rem]">
              {/* Ambient glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500/20 to-violet-600/20 blur-3xl scale-110 transform-gpu" />

              {/* Main circle */}
              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 border border-slate-700/80 flex items-center justify-center overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-violet-600/5" />
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
                className="absolute -inset-4 rounded-full border border-dashed border-cyan-500/25 transform-gpu"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-9 rounded-full border border-dashed border-violet-500/12 transform-gpu"
              />

              {/* Floating tech badges - hidden on mobile to avoid overflow clutter */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-12 md:-right-16 top-8 px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-cyan-400 text-xs font-bold shadow-xl z-20 hidden sm:block"
              >
                React
              </motion.div>
              <motion.div
                animate={{ y: [6, -6, 6] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -left-12 md:-left-16 bottom-12 px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-violet-400 text-xs font-bold shadow-xl z-20 hidden sm:block"
              >
                Node.js
              </motion.div>
              <motion.div
                animate={{ y: [-4, 7, -4] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.6,
                }}
                className="absolute -right-10 md:-right-14 bottom-16 px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-emerald-400 text-xs font-bold shadow-xl z-20 hidden sm:block"
              >
                TypeScript
              </motion.div>
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.3,
                }}
                className="absolute -left-10 md:-left-14 top-14 px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-blue-400 text-xs font-bold shadow-xl z-20 hidden sm:block"
              >
                PostgreSQL
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
