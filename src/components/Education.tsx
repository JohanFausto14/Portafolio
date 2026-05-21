import { motion } from "framer-motion";
import { Calendar, GraduationCap } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const Education = () => {
  const { t } = useLanguage();

  // We only have one item right now, but it's an array for future scalability
  const educationItems = t.education?.items || [];

  if (educationItems.length === 0) return null;

  return (
    <section id="education" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t.education?.title || "Education"}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-violet-600 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {educationItems.map((edu, index) => (
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
              <div className="absolute left-[-9px] top-0 w-4 h-4 bg-cyan-500 rounded-full ring-4 ring-slate-950" />

              <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 hover:border-cyan-500/30 transition-colors duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-cyan-400" />
                    {edu.degree}
                  </h3>
                  <span className="flex items-center text-sm text-gray-400 mt-2 sm:mt-0">
                    <Calendar className="w-4 h-4 mr-1" />
                    {edu.period}
                  </span>
                </div>
                <h4 className="text-xl text-cyan-400 mb-1">
                  {edu.institution}
                </h4>
                <p className="text-base text-gray-500 mb-4">{edu.location}</p>
                <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-5">
                  {edu.description}
                </p>
                {edu.achievements && edu.achievements.length > 0 && (
                  <ul className="space-y-3 mt-4 pt-5 border-t border-slate-700/50">
                    {edu.achievements.map(
                      (achievement: string, idx: number) => (
                        <li
                          key={idx}
                          className="flex items-start text-base md:text-lg text-gray-200"
                        >
                          <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ),
                    )}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
