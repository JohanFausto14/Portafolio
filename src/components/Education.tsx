import { motion } from "framer-motion";
import { GraduationCap, ExternalLink, Award } from "lucide-react";
import InteractiveTitle from "./common/InteractiveTitle";
import { CONTACT_INFO } from "../constants/contact";

import { useLanguage } from "../i18n/LanguageContext";
import { translations } from "../i18n";

/** Language-invariant academic data. */
const UNIVERSITY = {
  institution: "Universidad Tecnológica de la Zona Metropolitana de Guadalajara (UTZMG)",
  location: "Guadalajara, Jalisco",
};

const Education = () => {
  const { displayedLanguage: language } = useLanguage();
  const t = translations[language];

  return (
    <section className="py-20 md:py-28 bg-[#0f0f0f] border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Anchor target. The title animates on mount (`animate`) rather than
            on scroll (`whileInView`): it is the element the section anchors
            point at, so it must never be able to land invisible. */}
        <div id="education">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="text-center mb-12 md:mb-16 transform-gpu"
        >
          <h2 className="text-4xl md:text-6xl font-display font-black tracking-wide mb-3">
            <InteractiveTitle text={t.education.title} />
          </h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full" />
        </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-stretch">
          {/* University Degree & Focus Areas Card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            viewport={{ once: true, margin: "-40px" }}
            className="lg:col-span-7 bg-[#151515] border border-[#222222] hover:border-white transition-colors duration-200 p-6 sm:p-8 rounded-3xl group flex flex-col justify-between transform-gpu"
          >
            <div>
              <div className="flex items-start space-x-4 mb-5">
                <div className="p-3.5 rounded-2xl bg-[#0f0f0f] border border-[#222222] group-hover:border-[#444444] transition-colors flex-shrink-0">
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>
                <div>
                  <span className="text-xs font-tech text-[#888888] font-bold uppercase tracking-widest block mb-0.5">
                    {UNIVERSITY.location}
                  </span>
                  <p className="text-xs font-tech text-[#aaaaaa] font-semibold">
                    {UNIVERSITY.institution}
                  </p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                {t.education.degrees.map((deg, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-[#0f0f0f] border border-[#222222] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h3 className="text-sm sm:text-base font-display font-bold text-white uppercase tracking-wide leading-snug">
                        {deg.title}
                      </h3>
                      <span className="text-[11px] font-tech text-[#888888] block mt-0.5">
                        {deg.period}
                      </span>
                    </div>
                    <span className="self-start sm:self-center text-[10px] font-tech font-bold uppercase px-2.5 py-1 rounded-full bg-[#1a1a1a] border border-[#333333] text-white shrink-0">
                      {deg.badge}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-5 border-t border-[#222222]">
                <p className="text-[13px] sm:text-sm font-tech text-[#bbbbbb] leading-relaxed">
                  {t.education.desc}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Rich Balanced English Certification Card (EF SET) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-40px" }}
            className="lg:col-span-5 bg-[#151515] border border-emerald-500/30 hover:border-emerald-400 transition-colors duration-200 p-6 sm:p-8 rounded-3xl group flex flex-col justify-between shadow-lg transform-gpu"
          >
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="p-3.5 rounded-2xl bg-[#0f0f0f] border border-emerald-500/30 group-hover:border-emerald-500/60 transition-colors flex-shrink-0">
                  <Award className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <span className="text-xs font-tech text-[#888888] font-bold uppercase tracking-widest block mb-0.5">
                    {t.education.certCategory}
                  </span>
                  <h3 className="text-lg sm:text-xl font-display font-black text-white uppercase tracking-wide">
                    EF SET Certificate
                  </h3>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#0f0f0f] border border-emerald-500/20 mb-4">
                <span className="text-xs font-tech text-emerald-400 font-bold block uppercase tracking-wider">
                  {t.education.certSubtitle}
                </span>
                <p className="text-[13px] font-tech text-[#bbbbbb] leading-relaxed mt-2">
                  {t.education.certDesc}
                </p>
              </div>

              <div className="pt-3">
                <span className="text-[11px] font-tech text-[#888888] font-bold uppercase tracking-wider block mb-2.5">
                  {t.education.skillsTitle}
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {t.education.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="p-2 rounded-xl bg-[#0f0f0f] border border-[#222222] text-[11px] font-tech text-[#cccccc] text-center font-medium"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#222222] mt-6">
              <a
                href={CONTACT_INFO.efSetCertUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 hover:border-emerald-500/60 text-emerald-400 text-xs font-tech font-bold tracking-widest uppercase transition-all duration-300"
              >
                <span>{t.education.certBtn}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
