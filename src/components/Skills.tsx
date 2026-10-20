import { motion } from "framer-motion";
import { Code, Server, Database, Wrench } from "lucide-react";
import InteractiveTitle from "./common/InteractiveTitle";

import { useLanguage } from "../i18n/LanguageContext";
import { translations } from "../i18n";

/** Icons are language-invariant, so they live here (order matches `skills.categories`). */
const categoryIcons = [Code, Server, Database, Wrench];

const Skills = () => {
  const { displayedLanguage: language } = useLanguage();
  const t = translations[language];

  return (
    <section className="py-20 md:py-28 bg-[#0f0f0f] border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Anchor target. The title animates on mount (`animate`) rather than
            on scroll (`whileInView`): it is the element the section anchors
            point at, so it must never be able to land invisible. */}
        <div id="skills">
        {/* Title with Letter Illumination */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="text-center mb-16 md:mb-24 transform-gpu"
        >
          <h2 className="text-4xl md:text-6xl font-display font-black tracking-wide mb-3 max-w-4xl mx-auto">
            <InteractiveTitle text={t.skills.title} />
          </h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full" />
        </motion.div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.skills.categories.map((cat, idx) => {
            const IconComp = categoryIcons[idx];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: idx * 0.08, ease: "easeOut" }}
                viewport={{ once: true, margin: "-40px" }}
                className="bg-[#151515] p-6 sm:p-8 rounded-3xl border border-[#222222] hover:border-white transition-colors duration-200 group flex flex-col justify-between transform-gpu"
              >
                <div>
                  {/* Category Title Header */}
                  <div className="flex items-center space-x-3 mb-4 pb-3 border-b border-[#262626]">
                    <div className="p-2.5 rounded-xl bg-[#0f0f0f] border border-[#222222] group-hover:border-[#444444] transition-colors">
                      <IconComp className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-display font-black text-white uppercase tracking-wide">
                      {cat.name}
                    </h3>
                  </div>

                  {/* Capability Statement */}
                  <p className="text-[13px] font-tech text-[#cccccc] leading-relaxed mb-6">
                    {cat.capability}
                  </p>
                </div>

                {/* Technologies List */}
                <div className="pt-4 border-t border-[#222222]">
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-[#0f0f0f] border border-[#262626] text-white font-tech font-semibold text-[11px] rounded-full hover:border-[#444444] transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
