import { motion } from "framer-motion";
import { Calendar, GraduationCap, ExternalLink, Award } from "lucide-react";

type Language = "en" | "es";

interface EducationProps {
  language: Language;
}

const translations = {
  en: {
    education: {
      title: "Education & Certifications",
      items: [
        {
          degree: "Software Development and Management Engineering",
          institution:
            "Universidad Tecnológica de la Zona Metropolitana de Guadalajara (UTZMG)",
          location: "Santa Cruz de las Flores, Jal.",
          period: "Sep 2022 - Apr 2026",
          description:
            "Comprehensive education focused on creating scalable technological solutions. Active participation in the development of multiple hands-on projects from conception to deployment, applying software engineering best practices.",
          achievements: [
            "Specialization in Web & Mobile Development (Full Stack)",
            "Relational and NoSQL Database Design",
            "Implementation of Agile Methodologies (Scrum, Kanban, Extreme Programming)",
            "Software Architecture and Cloud Deployment",
          ],
        },
        {
          degree: "EF SET English Certificate (B2 Upper-Intermediate)",
          institution: "EF Standard English Test",
          location: "Online Certification",
          period: "2026",
          description:
            "Official English proficiency certification at B2 Upper-Intermediate level according to the Common European Framework of Reference (CEFR).",
          certificateUrl: "https://cert.efset.org/es/cJAZXi",
          isCertification: true,
          achievements: [
            "Verifiable score: B2 Upper-Intermediate",
            "Reading & Listening Comprehension Verification",
            "Writing & Speaking Skill Verification",
          ],
        },
      ],
    },
  },
  es: {
    education: {
      title: "Educación y Certificaciones",
      items: [
        {
          degree: "Ingeniería en Desarrollo y gestión de software",
          institution:
            "Universidad Tecnológica de la Zona Metropolitana de Guadalajara (UTZMG)",
          location: "Santa Cruz de las Flores, Jal.",
          period: "Sep 2022 - Apr 2026",
          description:
            "Formación integral enfocada en la creación de soluciones tecnológicas escalables. Participación activa en el desarrollo de múltiples proyectos prácticos desde la concepción hasta el despliegue, aplicando buenas prácticas de ingeniería de software.",
          achievements: [
            "Especialización en desarrollo web y móvil (Full Stack)",
            "Diseño y administración de bases de datos relacionales y NoSQL",
            "Implementación de metodologías ágiles (Scrum, Kanban, Extreme Programming)",
            "Arquitectura de software y despliegue en la nube",
          ],
        },
        {
          degree: "Certificación de Inglés EF SET (B2 Intermedio Alto)",
          institution: "EF Standard English Test",
          location: "Certificación en línea",
          period: "2026",
          description:
            "Certificación oficial de dominio del idioma inglés nivel B2 Intermedio Alto según el Marco Común Europeo de Referencia (CEFR).",
          certificateUrl: "https://cert.efset.org/es/cJAZXi",
          isCertification: true,
          achievements: [
            "Puntuación verificable en línea: B2 Intermedio Alto",
            "Validación de comprensión lectora y auditiva",
            "Validación de expresión escrita y oral",
          ],
        },
      ],
    },
  },
};

const Education = ({ language }: EducationProps) => {
  const t = translations[language];

  // We only have items right now, but it's an array for future scalability
  const educationItems = t.education?.items || [];

  if (educationItems.length === 0) return null;

  return (
    <section id="education" className="py-16 md:py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t.education?.title || "Education & Certifications"}
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
              className="relative pl-8 pb-8 md:pb-12 last:pb-0 border-l-2 border-slate-800 last:border-l-0"
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 bg-cyan-500 rounded-full ring-4 ring-slate-950" />

              <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 hover:border-cyan-500/30 transition-colors duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    {edu.isCertification ? (
                      <Award className="w-5 h-5 text-amber-400" />
                    ) : (
                      <GraduationCap className="w-5 h-5 text-cyan-400" />
                    )}
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
                <p className="text-base text-gray-400 mb-4">{edu.location}</p>
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
                {edu.certificateUrl && (
                  <div className="mt-5 pt-4 border-t border-slate-800 flex justify-end">
                    <a
                      href={edu.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-sky-500 to-cyan-600 hover:from-sky-400 hover:to-cyan-500 text-white font-medium text-sm rounded-lg transition-all shadow-md hover:shadow-cyan-500/25"
                    >
                      <span>{language === "es" ? "Ver Certificado Oficial" : "View Official Certificate"}</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
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
