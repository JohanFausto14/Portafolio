import { motion } from "framer-motion";
import { Briefcase, Calendar, ExternalLink } from "lucide-react";

type Language = "en" | "es";

interface ExperienceProps {
  language: Language;
}

const translations = {
  en: {
    experience: {
      title: "Work Experience",
      jobs: [
        {
          title: "Front End Developer",
          company: "Private Client",
          period: "Nov 2025 - Present",
          description:
            "Development of a web platform for interactive reading oriented to high school and higher education institutions. Frontend development focused on user experience and performance. Integration of REST APIs, database design, implementation of a digital reader with annotation tools, automatic assessments, PDF reports, role-based access control, and responsive interface development.",
        },
        {
          title: "Full Stack Developer",
          company: "CONSOL NEGOCIOS SA DE CV SOFOM ENR",
          period: "Jan 2026 - Apr 2026",
          description:
            "Development of a web system for credit management and centralized administration of financial information. Migration of features from desktop to web platform, integration with external APIs, development of individual credit, group credit, and insurance modules. Implementation of business logic and improvement in information traceability.",
        },
        {
          title: "Software Developer",
          company: "LIRA Project (Intellectual Property)",
          period: "Jan 2025 - Nov 2025",
          description:
            "Development of a multiplatform educational system focused on children's reading, available on Android TV, Alexa, smartwatches, web, and mobile app. Development and integration of the system in multiple platforms within the same ecosystem.",
          link: {
            text: "Presented at Innovation Fest 2025",
            url: "https://innovationfest.jalisco.gob.mx/",
          },
        },
        {
          title: "Software Developer",
          company: "MicroGreen Project (IoT & Smart Agriculture)",
          period: "Jan 2024 - Dec 2024",
          description:
            "Design and implementation of a greenhouse monitoring and automation system. Measurement of humidity, temperature, and light using sensors. Automated irrigation control through a mobile app. Integration with MongoDB and IoT devices (Arduino and ESP32).",
        },
        {
          title: "Full Stack Developer",
          company: "Tecnosol S.A. de C.V.",
          period: "Apr 2024 - Aug 2024",
          description:
            "Development and implementation of a web application for customer and order management with an e-commerce approach. Automation of administrative processes, REST API integration, development of order management features, and deployment on a dedicated server.",
        },
        {
          title: "Web Developer",
          company: "UTZMG University",
          period: "Sep 2022 - Jan 2023",
          description:
            'Complete development of the "Take Quick List" web application for student attendance registration and tracking. Participation in frontend, backend, and database management. Implementation of data validation and system logic.',
        },
      ],
    },
  },
  es: {
    experience: {
      title: "Experiencia Laboral",
      jobs: [
        {
          title: "Front End Developer",
          company: "Cliente privado",
          period: "Nov 2025 - Presente",
          description:
            "Desarrollo de plataforma web de lectura interactiva orientada a instituciones de educación media superior y superior. Desarrollo del frontend enfocado en experiencia de usuario y rendimiento. Integración de APIs REST, diseño de base de datos, implementación de lector digital con herramientas de anotación, evaluaciones automáticas, reportes PDF, control de acceso por roles y desarrollo de interfaz responsiva.",
        },
        {
          title: "Full Stack Developer",
          company: "CONSOL NEGOCIOS SA DE CV SOFOM ENR",
          period: "Ene 2026 - Abr 2026",
          description:
            "Desarrollo de sistema web para la gestión de créditos y administración centralizada de información financiera. Migración de funcionalidades desde sistema de escritorio a plataforma web, integración con APIs externas, desarrollo de módulos de crédito individual, crédito grupal y seguros. Implementación de lógica de negocio y mejora en la trazabilidad de la información.",
        },
        {
          title: "Software Developer",
          company: "Proyecto LIRA (Propiedad intelectual)",
          period: "Ene 2025 - Nov 2025",
          description:
            "Desarrollo de sistema educativo multiplataforma enfocado en lectura infantil, disponible en Android TV, Alexa, smartwatches, web y aplicación móvil. Desarrollo e integración del sistema en múltiples plataformas dentro de un mismo ecosistema.",
          link: {
            text: "Presentado en Innovation Fest 2025",
            url: "https://innovationfest.jalisco.gob.mx/",
          },
        },
        {
          title: "Software Developer",
          company: "Proyecto MicroGreen (IoT & Smart Agriculture)",
          period: "Ene 2024 - Dic 2024",
          description:
            "Diseño e implementación de sistema de monitoreo y automatización de invernaderos. Medición de humedad, temperatura y luz mediante sensores. Control automatizado de riego a través de aplicación móvil. Integración con MongoDB y dispositivos IoT (Arduino y ESP32).",
        },
        {
          title: "Full Stack Developer",
          company: "Tecnosol S.A. de C.V.",
          period: "Abr 2024 - Ago 2024",
          description:
            "Desarrollo e implementación de aplicación web para gestión de clientes y pedidos con enfoque tipo e-commerce. Automatización de procesos administrativos, integración de APIs REST, desarrollo de funcionalidades de gestión de pedidos y despliegue en servidor dedicado.",
        },
        {
          title: "Web Developer",
          company: "Universidad UTZMG",
          period: "Sep 2022 - Ene 2023",
          description:
            'Desarrollo completo de la aplicación web "Take Quick List" para el registro y seguimiento de asistencia estudiantil. Participación en frontend, backend y manejo de base de datos. Implementación de validación de datos y lógica del sistema.',
        },
      ],
    },
  },
};

const Experience = ({ language }: ExperienceProps) => {
  const t = translations[language];
  return (
    <section id="experience" className="py-16 md:py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-10 md:mb-16"
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
              className="relative pl-8 pb-8 md:pb-12 last:pb-0 border-l-2 border-slate-800 last:border-l-0"
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
