import { motion } from "framer-motion";
import { Briefcase, Calendar, ExternalLink } from "lucide-react";
import InteractiveTitle from "./common/InteractiveTitle";

import { useLanguage } from "../i18n/LanguageContext";
import { translations } from "../i18n";

const Experience = () => {
  const { displayedLanguage: language } = useLanguage();
  const t = translations[language];

  return (
    <section id="experience" className="py-20 md:py-28 bg-[#0f0f0f] border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title with Letter Illumination */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          viewport={{ once: true, margin: "-40px" }}
          className="text-center mb-16 md:mb-24 transform-gpu"
        >
          <h2 className="text-4xl md:text-6xl font-display font-black tracking-wide mb-3">
            <InteractiveTitle text={t.experience.title} />
          </h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full" />
        </motion.div>

        {/* Timeline Original Structure */}
        <div className="max-w-3xl mx-auto">
          {t.experience.jobs.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
              viewport={{ once: true, margin: "-40px" }}
              className="relative pl-8 pb-10 md:pb-14 last:pb-0 border-l-2 border-[#222222] last:border-l-0 transform-gpu"
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-9px] top-0 w-4 h-4 bg-white rounded-full ring-4 ring-[#0f0f0f]" />

              <div className="bg-[#151515] p-6 sm:p-8 rounded-2xl border border-[#222222] hover:border-white transition-colors duration-200 group">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                  <h3 className="text-lg sm:text-xl font-tech font-bold text-white flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-[#aaaaaa] group-hover:text-white transition-colors" />
                    {exp.title}
                  </h3>
                  <span className="flex items-center text-xs font-tech text-[#888888] mt-2 sm:mt-0 font-bold">
                    <Calendar className="w-4 h-4 mr-1.5" />
                    {exp.period}
                  </span>
                </div>

                <h4 className="text-sm font-tech font-bold text-[#aaaaaa] group-hover:text-white transition-colors mb-3">
                  {exp.company}
                </h4>

                <p className="text-[13px] sm:text-sm font-tech text-[#888888] group-hover:text-[#dddddd] transition-colors leading-relaxed mb-3">
                  {exp.description}
                </p>

                {exp.link && (
                  <a
                    href={exp.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-tech font-bold text-white hover:underline uppercase tracking-wider"
                  >
                    <span>{exp.link.text}</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-1" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
