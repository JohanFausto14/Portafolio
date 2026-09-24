import { motion } from "framer-motion";
import { Briefcase, Calendar, ExternalLink } from "lucide-react";

type Language = "en" | "es";

interface ExperienceProps {
  language: Language;
}

const translations = {
  en: {
    experience: {
      title: "CAREER PATH",
      jobs: [
        {
          title: "Frontend Developer · Project Lead",
          company: "Private Institutional Client — Proyecto Lector (Freelance)",
          period: "Nov 2025 - Jul 2026",
          description:
            "Led a team of 3 in the development of this reading platform for high schools and higher education, stemming from an alliance formed during LIRA's presentation at Innovation Fest Guadalajara 2025.",
        },
        {
          title: "Full Stack Developer",
          company: "CONSOL NEGOCIOS SA DE CV SOFOM ENR (Contract)",
          period: "Jan 2026 - Apr 2026",
          description:
            "Participated in migrating a desktop financial system to a web platform during my professional internship, while continuing development on Proyecto Lector.",
        },
        {
          title: "Software Engineer · Project Lead",
          company: "LIRA Project (Independent Project)",
          period: "Jan 2025 - Nov 2025",
          description:
            "Led a team of 4 in developing an ecosystem that operates seamlessly across formats as diverse as a TV screen, a voice assistant, and a mobile device.",
          link: {
            text: "Presented at Innovation Fest Guadalajara 2025",
            url: "https://innovationfest.jalisco.gob.mx/",
          },
        },
        {
          title: "Full Stack Developer",
          company: "Tecnosol S.A. de C.V. (Contract)",
          period: "May 2024 - Aug 2024",
          description:
            "Collaborated within a 3-developer team operating under a flat structure without hierarchies or fixed roles, collaboratively defining every technical decision across the project.",
        },
        {
          title: "Software Developer · Project Lead",
          company: "MicroGreen Project (Independent Project)",
          period: "Jan 2024 - Apr 2024",
          description:
            "Led a team of 5 in the design and construction of a domestic smart greenhouse, coordinating multidisciplinary development spanning physical structure, electronics, and software, culminating in a fully functional prototype.",
        },
        {
          title: "Software Developer",
          company: "Universidad Tecnológica de la Zona Metropolitana de Guadalajara (UTZMG)",
          period: "Sep 2022 - Jan 2023",
          description:
            "Developed a web application for student attendance tracking, participating in building the solution from data modeling to user interface.",
        },
      ],
    },
  },
  es: {
    experience: {
      title: "TRAYECTORIA PROFESIONAL",
      jobs: [
        {
          title: "Frontend Developer · Líder de Proyecto",
          company: "Cliente Institucional Privado — Proyecto Lector (freelance)",
          period: "Nov 2025 - Jul 2026",
          description:
            "Lideré a un equipo de 3 integrantes en el desarrollo de esta plataforma de lectura para nivel medio superior y superior, surgida de una alianza establecida durante la presentación de LIRA en Innovation Fest Guadalajara 2025.",
        },
        {
          title: "Full Stack Developer",
          company: "CONSOL NEGOCIOS SA DE CV SOFOM ENR (por contrato)",
          period: "Ene 2026 - Abr 2026",
          description:
            "Participé en la migración de un sistema financiero de escritorio a una plataforma web durante mi periodo de estadías profesionales, mientras continuaba el desarrollo de Proyecto Lector.",
        },
        {
          title: "Software Engineer · Líder de Proyecto",
          company: "Proyecto LIRA (proyecto propio)",
          period: "Ene 2025 - Nov 2025",
          description:
            "Lideré a un equipo de 4 integrantes en el desarrollo de un ecosistema que funciona de forma coherente en formatos tan distintos como una pantalla de TV, un asistente de voz y un dispositivo móvil.",
          link: {
            text: "Presentado en Innovation Fest Guadalajara 2025",
            url: "https://innovationfest.jalisco.gob.mx/",
          },
        },
        {
          title: "Full Stack Developer",
          company: "Tecnosol S.A. de C.V. (por contrato)",
          period: "May 2024 - Ago 2024",
          description:
            "Formé parte de un equipo de 3 desarrolladores con una estructura completamente horizontal, sin jerarquías ni roles fijos, definiendo juntos cada decisión técnica del proyecto.",
        },
        {
          title: "Software Developer · Líder de Proyecto",
          company: "Proyecto MicroGreen (proyecto propio)",
          period: "Ene 2024 - Abr 2024",
          description:
            "Lideré a un equipo de 5 integrantes en el diseño y construcción de un invernadero inteligente doméstico, coordinando un desarrollo multidisciplinario que abarcó desde la estructura física hasta la electrónica y el software, culminando en un prototipo completamente funcional.",
        },
        {
          title: "Software Developer",
          company: "Universidad Tecnológica de la Zona Metropolitana de Guadalajara (UTZMG)",
          period: "Sep 2022 - Ene 2023",
          description:
            "Desarrollo de una aplicación web para el control de asistencia estudiantil, participando en la construcción de la solución desde el modelo de datos hasta la interfaz de usuario.",
        },
      ],
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
              className="inline-block transition-[color,transform] duration-200 ease-out text-[#666666] hover:text-[#ffffff] hover:scale-105 hover:[text-shadow:0_0_16px_rgba(255,255,255,0.7)] cursor-default transform-gpu"
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

const Experience = ({ language }: ExperienceProps) => {
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
            <InteractiveTitleText text={t.experience.title} />
          </h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full" />
        </motion.div>

        {/* Timeline Original Structure */}
        <div className="max-w-3xl mx-auto">
          {t.experience.jobs.map((exp, index) => (
            <motion.div
              key={index}
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

                <p className="text-xs sm:text-sm font-tech text-[#888888] group-hover:text-[#dddddd] transition-colors leading-relaxed mb-3">
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
