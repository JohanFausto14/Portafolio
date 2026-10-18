import { motion } from "framer-motion";
import { Target, Zap, Rocket, ArrowRight, ArrowDown } from "lucide-react";
import InteractiveTitle from "./common/InteractiveTitle";

import { useLanguage } from "../i18n/LanguageContext";
import { translations } from "../i18n";

const About = () => {
  const { displayedLanguage: language } = useLanguage();
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
            <InteractiveTitle text={t.about.title} />
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
                    <p className="text-[13px] font-tech text-[#888888] leading-relaxed">
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

