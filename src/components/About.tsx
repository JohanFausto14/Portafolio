import { motion } from "framer-motion";
import { Target, Zap, Rocket, ArrowRight, ArrowDown } from "lucide-react";

type Language = "en" | "es";

interface AboutProps {
  language: Language;
}

const translations = {
  en: {
    about: {
      title: "MY APPROACH",
      tagline: "Before writing code, I take time to understand the real problem behind the request. A system only provides value if the person using it every day can get their work done without friction.",
      metrics: "3+ years of experience · 20+ projects built",
      principles: [
        {
          num: "01",
          title: "UNDERSTAND",
          desc: "Analyze context, users, and requirements thoroughly before designing the solution.",
        },
        {
          num: "02",
          title: "SIMPLIFY",
          desc: "Reduce unnecessary complexity in architecture, interface, and workflow.",
        },
        {
          num: "03",
          title: "DELIVER",
          desc: "Build maintainable, scalable, and production-ready solutions.",
        },
      ],
    },
  },
  es: {
    about: {
      title: "MI ENFOQUE",
      tagline: "Antes de escribir código, dedico tiempo a entender el problema real detrás de la solicitud. Un sistema solo tiene valor si la persona que lo usa todos los días logra resolver su trabajo sin fricción.",
      metrics: "3+ años de experiencia · 20+ proyectos desarrollados",
      principles: [
        {
          num: "01",
          title: "ENTENDER",
          desc: "Analizar contexto, usuarios y requerimientos antes de diseñar la solución.",
        },
        {
          num: "02",
          title: "SIMPLIFICAR",
          desc: "Reducir complejidad innecesaria en arquitectura, interfaz y flujo de trabajo.",
        },
        {
          num: "03",
          title: "ENTREGAR",
          desc: "Construir soluciones mantenibles, escalables y listas para producción.",
        },
      ],
    },
  },
};

// Interactive letter component for section titles
const InteractiveTitleText = ({ text }: { text: string }) => {
  return (
    <span className="inline-block select-none">
      {text.split("").map((char, index) => {
        if (char === " ") {
          return <span key={index} className="inline-block w-[0.25em]">&nbsp;</span>;
        }
        return (
          <span
            key={index}
            className="inline-block transition-[color,transform] duration-200 ease-out text-[#666666] hover:text-[#ffffff] hover:scale-105 hover:[text-shadow:0_0_16px_rgba(255,255,255,0.7)] cursor-default transform-gpu"
          >
            {char}
          </span>
        );
      })}
    </span>
  );
};

const About = ({ language }: AboutProps) => {
  const t = translations[language];

  const principleIcons = [
    <Target className="w-5 h-5 text-amber-400" />,
    <Zap className="w-5 h-5 text-sky-400" />,
    <Rocket className="w-5 h-5 text-emerald-400" />,
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#0f0f0f] border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          viewport={{ once: true, margin: "-40px" }}
          className="text-center mb-12 md:mb-16 transform-gpu"
        >
          <h2 className="text-4xl md:text-6xl font-display font-black tracking-wide mb-3">
            <InteractiveTitleText text={t.about.title} />
          </h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full" />
        </motion.div>

        {/* Authentic Statement & Metrics Card */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          viewport={{ once: true, margin: "-40px" }}
          className="bg-[#151515] p-6 sm:p-10 rounded-3xl border border-[#222222] hover:border-white transition-colors duration-200 mb-14 text-center max-w-4xl mx-auto flex flex-col items-center gap-6 transform-gpu"
        >
          <p className="text-base sm:text-xl font-tech text-[#dddddd] font-medium leading-relaxed">
            "{t.about.tagline}"
          </p>
          <span className="inline-flex items-center px-4 py-2 bg-[#0f0f0f] border border-[#333333] text-xs font-tech font-bold text-white rounded-full uppercase tracking-widest">
            {t.about.metrics}
          </span>
        </motion.div>

        {/* 3 Principles Connected Process Flow */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {t.about.principles.map((item, index) => (
              <div key={item.num} className="relative flex flex-col">
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.1, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-40px" }}
                  className="bg-[#151515] p-6 rounded-3xl border border-[#222222] hover:border-white transition-colors duration-200 flex-1 flex flex-col justify-between group shadow-lg transform-gpu"
                >
                  <div>
                    {/* Top bar with step number & icon */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-3xl font-display font-black text-[#333333] group-hover:text-white transition-colors">
                        {item.num}
                      </span>
                      <div className="p-3 rounded-2xl bg-[#0f0f0f] border border-[#222222] group-hover:border-[#444444] transition-colors">
                        {principleIcons[index]}
                      </div>
                    </div>

                    <h3 className="text-lg font-display font-black text-white uppercase tracking-wider mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs font-tech text-[#888888] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>

                {/* Arrow Connector between steps */}
                {index < 2 && (
                  <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 p-1.5 rounded-full bg-[#151515] border border-[#333333] text-[#666666]">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
                {index < 2 && (
                  <div className="flex md:hidden justify-center my-2 text-[#444444]">
                    <ArrowDown className="w-5 h-5" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

