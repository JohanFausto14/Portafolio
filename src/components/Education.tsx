import { motion } from "framer-motion";
import { GraduationCap, ExternalLink, Award, Code2, Database, Cpu, Layers } from "lucide-react";

type Language = "en" | "es";

interface EducationProps {
  language: Language;
}

const translations = {
  en: {
    education: {
      title: "CREDENTIALS & EDUCATION",
      institution: "Universidad Tecnológica de la Zona Metropolitana de Guadalajara (UTZMG)",
      location: "Guadalajara, Jalisco",
      degrees: [
        {
          title: "Software Development & Management Engineering",
          period: "Sep 2024 – Apr 2026",
          badge: "Bachelor's Degree",
        },
        {
          title: "Associate Degree in Multiplatform Software Development (TSU)",
          period: "Sep 2022 – Aug 2024",
          badge: "Associate Degree",
        },
      ],
      desc: "Education focused on web and mobile application development, software architecture, and database design, applied through projects centered on automation, enterprise systems, and IoT.",
      focusTitle: "Core Competencies",
      focuses: [
        { label: "Full Stack Development (Web & Mobile)", icon: <Code2 className="w-3.5 h-3.5 text-sky-400" /> },
        { label: "Relational & NoSQL Databases", icon: <Database className="w-3.5 h-3.5 text-amber-400" /> },
        { label: "Software Architecture & REST APIs", icon: <Cpu className="w-3.5 h-3.5 text-indigo-400" /> },
        { label: "Agile Methodologies (Scrum & Kanban)", icon: <Layers className="w-3.5 h-3.5 text-emerald-400" /> },
      ],
      certCategory: "English",
      certSubtitle: "B2 · Upper Intermediate",
      certDesc: "Official international English assessment aligned with the Common European Framework of Reference for Languages (CEFR).",
      skillsTitle: "Assessed Competencies",
      skills: ["Reading Comprehension", "Listening Comprehension", "Written Expression", "Oral Expression"],
      certBtn: "Verify Certificate",
      certUrl: "https://cert.efset.org/es/cJAZXi",
    },
  },
  es: {
    education: {
      title: "FORMACIÓN & CERTIFICACIONES",
      institution: "Universidad Tecnológica de la Zona Metropolitana de Guadalajara (UTZMG)",
      location: "Guadalajara, Jalisco",
      degrees: [
        {
          title: "Ingeniería en Desarrollo y Gestión de Software",
          period: "Sep 2024 – Abr 2026",
          badge: "Título de Ingeniería",
        },
        {
          title: "Técnico Superior Universitario en Desarrollo de Software Multiplataforma",
          period: "Sep 2022 – Ago 2024",
          badge: "Título de TSU",
        },
      ],
      desc: "Formación enfocada en el desarrollo de aplicaciones web y móviles, arquitectura de software y diseño de bases de datos, aplicada mediante proyectos orientados a automatización, sistemas empresariales e IoT.",
      focusTitle: "Enfoques principales",
      focuses: [
        { label: "Desarrollo Full Stack (web y móvil)", icon: <Code2 className="w-3.5 h-3.5 text-sky-400" /> },
        { label: "Bases de datos relacionales y NoSQL", icon: <Database className="w-3.5 h-3.5 text-amber-400" /> },
        { label: "Arquitectura de software y APIs REST", icon: <Cpu className="w-3.5 h-3.5 text-indigo-400" /> },
        { label: "Metodologías ágiles (Scrum y Kanban)", icon: <Layers className="w-3.5 h-3.5 text-emerald-400" /> },
      ],
      certCategory: "Inglés",
      certSubtitle: "B2 · Intermedio Alto",
      certDesc: "Evaluación internacional oficial de inglés conforme al Marco Común Europeo de Referencia para las Lenguas (MCER).",
      skillsTitle: "Habilidades evaluadas",
      skills: ["Comprensión lectora", "Comprensión auditiva", "Expresión escrita", "Expresión oral"],
      certBtn: "Ver certificado",
      certUrl: "https://cert.efset.org/es/cJAZXi",
    },
  },
};

// Interactive letter component for section titles
const InteractiveTitleText = ({ text }: { text: string }) => {
  const words = text.split(" ");
  return (
    <span className="inline-block select-none">
      {words.map((word, wIdx) => (
        <span key={wIdx} className="inline-block whitespace-nowrap">
          {word.split("").map((char, cIdx) => (
            <span
              key={cIdx}
              className="inline-block transition-all duration-350 ease-out text-[#666666] hover:text-[#ffffff] hover:scale-105 hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] cursor-default"
            >
              {char}
            </span>
          ))}
          {wIdx < words.length - 1 && (
            <span className="inline-block w-[0.25em]">&nbsp;</span>
          )}
        </span>
      ))}
    </span>
  );
};

const Education = ({ language }: EducationProps) => {
  const t = translations[language];

  return (
    <section id="education" className="py-16 md:py-24 bg-[#0f0f0f] border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-black tracking-wide mb-3">
            <InteractiveTitleText text={t.education.title} />
          </h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-stretch">
          {/* University Degree & Focus Areas Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-[#151515] border border-[#222222] hover:border-white transition-all duration-300 p-6 sm:p-8 rounded-3xl group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start space-x-4 mb-5">
                <div className="p-3.5 rounded-2xl bg-[#0f0f0f] border border-[#222222] group-hover:border-[#444444] transition-colors flex-shrink-0">
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>
                <div>
                  <span className="text-xs font-tech text-[#888888] font-bold uppercase tracking-widest block mb-0.5">
                    {t.education.location}
                  </span>
                  <p className="text-xs font-tech text-[#aaaaaa] font-semibold">
                    {t.education.institution}
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

              <p className="text-xs font-tech text-[#cccccc] leading-relaxed mb-6">
                {t.education.desc}
              </p>

              <div className="pt-4 border-t border-[#222222]">
                <span className="text-[11px] font-tech text-[#888888] font-bold uppercase tracking-wider block mb-3">
                  {t.education.focusTitle}
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {t.education.focuses.map((focus, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-2.5 rounded-xl bg-[#0f0f0f] border border-[#222222] text-xs font-tech text-[#dddddd]"
                    >
                      {focus.icon}
                      <span className="text-[11.5px] font-medium">{focus.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Rich Balanced English Certification Card (EF SET) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-5 bg-[#151515] border border-emerald-500/30 hover:border-emerald-400 transition-all duration-300 p-6 sm:p-8 rounded-3xl group flex flex-col justify-between shadow-lg"
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
                <p className="text-xs font-tech text-[#bbbbbb] leading-relaxed mt-2">
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
                href={t.education.certUrl}
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
