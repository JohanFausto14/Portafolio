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
          title: "Frontend Developer",
          company: "Private Educational Client (Freelance Project)",
          period: "Nov 2025 - Jul 2026",
          description:
            "Project stemming from an alliance formed during LIRA's presentation at Innovation Fest Guadalajara 2025. I was part of a development team focused on building an educational platform for learning institutions.",
        },
        {
          title: "Full Stack Developer",
          company: "CONSOL NEGOCIOS SA DE CV SOFOM ENR (Contract Project)",
          period: "Jan 2026 - Apr 2026",
          description:
            "Participated in migrating a desktop financial system to a web platform during my professional internship, while continuing development on Proyecto Lector.",
        },
        {
          title: "Software Engineer · Project Lead",
          company: "LIRA Project (Intellectual Property)",
          period: "Jan 2025 - Nov 2025",
          description:
            "Led a team of 4 during product planning and development, coordinating technical execution and component integration. Presented the project at Innovation Fest Guadalajara 2025.",
          link: {
            text: "Presented at Innovation Fest 2025",
            url: "https://innovationfest.jalisco.gob.mx/",
          },
        },
        {
          title: "Software Engineer · Project Lead",
          company: "MicroGreen Project (IoT & Smart Agriculture)",
          period: "Jan 2024 - Dec 2024",
          description:
            "Led a team of 5 during the development of a smart greenhouse prototype, coordinating embedded system engineering and hardware/software component integration.",
        },
        {
          title: "Full Stack Developer",
          company: "Tecnosol S.A. de C.V.",
          period: "Apr 2024 - Aug 2024",
          description:
            "Collaborated with a 3-developer team under a horizontal workflow to build an ERP/CRM platform digitizing sales and administrative processes.",
        },
        {
          title: "Software Developer",
          company: "UTZMG University",
          period: "Sep 2022 - Jan 2023",
          description:
            "Development of a web application for student attendance tracking, building the solution from data modeling through user interface.",
        },
      ],
    },
  },
  es: {
    experience: {
      title: "TRAYECTORIA PROFESIONAL",
      jobs: [
        {
          title: "Frontend Developer",
          company: "Cliente Institucional Privado (Proyecto freelance)",
          period: "Nov 2025 - Jul 2026",
          description:
            "Proyecto surgido de una alianza establecida durante la presentación de LIRA en Innovation Fest Guadalajara 2025. Formé parte de un equipo de desarrollo enfocado en construir una plataforma educativa para instituciones de enseñanza.",
        },
        {
          title: "Full Stack Developer",
          company: "CONSOL NEGOCIOS SA DE CV SOFOM ENR (Proyecto por contrato)",
          period: "Ene 2026 - Abr 2026",
          description:
            "Participé en la migración de un sistema financiero de escritorio a una plataforma web durante mi periodo de estadías profesionales, mientras continuaba el desarrollo de Proyecto Lector.",
        },
        {
          title: "Software Engineer · Encargado de Proyecto",
          company: "Proyecto LIRA (Propiedad Intelectual)",
          period: "Ene 2025 - Nov 2025",
          description:
            "Lideré un equipo de 4 integrantes durante la planificación y desarrollo del producto, coordinando el trabajo técnico y la integración de sus diferentes componentes. El proyecto fue presentado en Innovation Fest Guadalajara 2025.",
          link: {
            text: "Presentado en Innovation Fest 2025",
            url: "https://innovationfest.jalisco.gob.mx/",
          },
        },
        {
          title: "Software Engineer · Encargado de Proyecto",
          company: "Proyecto MicroGreen (IoT & Smart Agriculture)",
          period: "Ene 2024 - Dic 2024",
          description:
            "Lideré un equipo de 5 integrantes durante el desarrollo de un prototipo de invernadero inteligente, coordinando el desarrollo del sistema embebido y la integración de sus componentes de hardware y software.",
        },
        {
          title: "Full Stack Developer",
          company: "Tecnosol S.A. de C.V.",
          period: "Abr 2024 - Ago 2024",
          description:
            "Participé junto a un equipo de 3 desarrolladores, bajo una estructura de trabajo horizontal, en el desarrollo de una plataforma ERP/CRM para digitalizar procesos comerciales y administrativos.",
        },
        {
          title: "Software Developer",
          company: "Universidad Tecnológica de la Zona Metropolitana de Guadalajara",
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
  return (
    <span className="inline-block select-none">
      {text.split("").map((char, index) => {
        if (char === " ") {
          return <span key={index} className="inline-block w-[0.25em]">&nbsp;</span>;
        }
        return (
          <span
            key={index}
            className="inline-block transition-all duration-350 ease-out text-[#666666] hover:text-[#ffffff] hover:scale-105 hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] cursor-default"
          >
            {char}
          </span>
        );
      })}
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 md:mb-24"
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative pl-8 pb-10 md:pb-14 last:pb-0 border-l-2 border-[#222222] last:border-l-0"
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-9px] top-0 w-4 h-4 bg-white rounded-full ring-4 ring-[#0f0f0f]" />

              <div className="bg-[#151515] p-6 sm:p-8 rounded-2xl border border-[#222222] hover:border-white transition-all duration-300 group">
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
