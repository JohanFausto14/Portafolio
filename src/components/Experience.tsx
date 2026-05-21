import { motion } from "framer-motion";
import { Briefcase, Calendar, ExternalLink } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const Experience = () => {
  const { t } = useLanguage();
  return (
    <section id="experience" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t.experience.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-violet-600 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {t.experience.jobs.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative pl-8 pb-12 last:pb-0 border-l-2 border-slate-800 last:border-l-0"
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 bg-cyan-500 rounded-full ring-4 ring-slate-900" />

              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-500/30 transition-colors duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-cyan-400" />
                    {exp.title}
                  </h3>
                  <span className="flex items-center text-sm text-gray-400 mt-2 sm:mt-0">
                    <Calendar className="w-4 h-4 mr-1" />
                    {exp.period}
                  </span>
                </div>
                <h4 className="text-lg text-cyan-400 mb-3">{exp.company}</h4>
                <p className="text-gray-400 leading-relaxed mb-2">
                  {exp.description}
                </p>
                {exp.link && (
                  <a
                    href={exp.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                  >
                    {exp.link.text}
                    <ExternalLink className="w-4 h-4 ml-1" />
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
