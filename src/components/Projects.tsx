import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X, Maximize, ChevronLeft, ChevronRight, AlertCircle, ShieldCheck, Cpu, CheckCircle2 } from "lucide-react";

type Language = "en" | "es";

interface ProjectsProps {
  language: Language;
}

interface ProjectCase {
  id: string;
  title: string;
  tagline: string;
  problem: string;
  responsibility: string;
  solution: string;
  result: string;
  tags: string[];
  demoUrl?: string;
  image: string;
  gallery?: string[];
}

import proyectoLectorImg from "../assets/ProyectoLector.png";
import liraImg from "../assets/LIRA.png";
import invernaderoImg from "../assets/Invernadero.png";
import tecnosolLogin from "../assets/Login Tecnosol.png";
import tecnosolInicio from "../assets/inicio.webp";
import tecnosolRegistroUsuarios from "../assets/Registro_usuarios.png";
import tecnosolRegistroPedidos from "../assets/Registro_pedidos.png";
import tecnosolTablaRegistros from "../assets/Tabla_registros.png";

const translations = {
  en: {
    projects: {
      title: "FEATURED PROJECTS",
      exploreCaptures: "Explore System",
      labels: {
        problem: "Context",
        responsibility: "My Contribution",
        solution: "The Solution",
        result: "Result",
        technologies: "TECHNOLOGIES USED",
      },
      cases: [
        {
          id: "lector",
          title: "Proyecto Lector",
          tagline: "Educational platform to strengthen reading comprehension and streamline student progress tracking.",
          problem: "Educational institutions struggled with low reading comprehension metrics and a lack of centralized visibility into student progress.",
          responsibility: "Led project planning and built the platform's frontend, including student, parent, and license modules, while collaborating on database design.",
          solution: "Combines digital reading, dynamic assessments, license management, and progress tracking through dashboards tailored to each user type.",
          result: "Centralized student progress tracking and license management into a single platform, streamlining operations for teachers, administrators, and families.",
          tags: ["Next.js", "React", "Node.js", "PostgreSQL", "PDF.js", "Tailwind CSS", "REST API"],
          demoUrl: "https://proyectolector.com/",
          image: proyectoLectorImg,
        },
        {
          id: "lira",
          title: "Ecosistema LIRA",
          tagline: "Multiplatform ecosystem built to drive children's reading comprehension through interactive experiences on web, mobile, Android TV, and Alexa.",
          problem: "Traditional reading instruction methods offered low interactivity, scarce personalization, and limited progress tracking.",
          responsibility: "Led project planning and participated in architectural and development decisions, including component integration for Android TV, web, and interactive experiences, as well as database model design.",
          solution: "Integrates gamified activities, progress tracking, and synchronization across web, mobile, Android TV, and Alexa.",
          result: "Allowed children to continue their learning from any device while parents and tutors tracked their progress in real time.",
          tags: ["React Native", "Node.js", "Express", "MongoDB", "Android TV", "Alexa Skills", "REST API"],
          demoUrl: "https://educacion-lira.vercel.app/",
          image: liraImg,
        },
        {
          id: "invernadero",
          title: "Proyecto MicroGreen",
          tagline: "IoT system developed to automate the monitoring and care of small greenhouses using sensors, ESP32, and a mobile app.",
          problem: "Small greenhouses lacked a simple way to monitor environmental conditions and optimize plant care.",
          responsibility: "Defined sensor placement around crop conditions, programmed the ESP32 microcontroller, and participated in mobile application integration.",
          solution: "Combines environmental sensors, an ESP32, and a mobile app to display real-time data and support crop automation.",
          result: "Demonstrated the feasibility of automating small greenhouse monitoring through an accessible, scalable, real-time data-driven system.",
          tags: ["Arduino", "ESP32", "BLE", "React Native", "Node.js", "MongoDB"],
          image: invernaderoImg,
          gallery: [invernaderoImg],
        },
        {
          id: "tecnosol",
          title: "Tecnosol ERP / CRM",
          tagline: "ERP/CRM platform developed to replace manual processes and centralize company sales and administrative operations.",
          problem: "Managing operations through Excel spreadsheets created error risks, slow data lookups, and scaling bottlenecks.",
          responsibility: "Implemented the authentication system, multisector business logic for orders, and the maintenance notification module.",
          solution: "Platform that unifies client management, commercial operations, and maintenance into a single environment, featuring role-based access and real-time visibility.",
          result: "Replaced manual spreadsheets with an automated system, streamlining order tracking and commercial operations.",
          tags: ["React", "TypeScript", "JavaScript", "Node.js", "Vite", "MySQL", "CSS", "cPanel"],
          image: tecnosolLogin,
          gallery: [
            tecnosolLogin,
            tecnosolInicio,
            tecnosolRegistroUsuarios,
            tecnosolRegistroPedidos,
            tecnosolTablaRegistros,
          ],
        },
      ] as ProjectCase[],
    },
  },
  es: {
    projects: {
      title: "PROYECTOS DESTACADOS",
      exploreCaptures: "Explorar Capturas",
      labels: {
        problem: "Contexto",
        responsibility: "Mi Aporte",
        solution: "La Solución",
        result: "Resultado",
        technologies: "TECNOLOGÍAS UTILIZADAS",
      },
      cases: [
        {
          id: "lector",
          title: "Proyecto Lector",
          tagline: "Plataforma educativa para fortalecer la comprensión lectora y facilitar el seguimiento del avance estudiantil.",
          problem: "Las instituciones educativas enfrentaban baja comprensión lectora y poca visibilidad centralizada sobre el avance estudiantil.",
          responsibility: "Lideré la planificación del proyecto y construí el frontend de la plataforma, incluyendo los módulos de alumnos, padres y licencias, además de colaborar en el diseño de la base de datos.",
          solution: "Reúne lectura digital, evaluaciones dinámicas, gestión de licencias y seguimiento del progreso mediante paneles adaptados a cada tipo de usuario.",
          result: "Centralizó el seguimiento del progreso estudiantil y la gestión de licencias en una sola plataforma, facilitando el trabajo de docentes, directivos y familias.",
          tags: ["Next.js", "React", "Node.js", "PostgreSQL", "PDF.js", "Tailwind CSS", "REST API"],
          demoUrl: "https://proyectolector.com/",
          image: proyectoLectorImg,
        },
        {
          id: "lira",
          title: "Ecosistema LIRA",
          tagline: "Ecosistema multiplataforma creado para impulsar el aprendizaje de la lectura infantil mediante experiencias interactivas en web, móvil, Android TV y Alexa.",
          problem: "Los métodos tradicionales de enseñanza de la lectura ofrecían poca interactividad, personalización y seguimiento del progreso de los estudiantes.",
          responsibility: "Lideré la planificación del proyecto y participé en decisiones de arquitectura y desarrollo, incluyendo la integración de componentes para Android TV, web y experiencias interactivas, así como en el diseño del modelo de datos.",
          solution: "Integra actividades gamificadas, seguimiento del progreso y sincronización entre web, aplicación móvil, Android TV y Alexa.",
          result: "Permitió que los niños continuaran su aprendizaje desde cualquier dispositivo mientras padres y tutores daban seguimiento a su progreso en tiempo real.",
          tags: ["React Native", "Node.js", "Express", "MongoDB", "Android TV", "Alexa Skills", "REST API"],
          demoUrl: "https://educacion-lira.vercel.app/",
          image: liraImg,
        },
        {
          id: "invernadero",
          title: "Proyecto MicroGreen",
          tagline: "Sistema IoT desarrollado para automatizar el monitoreo y cuidado de pequeños invernaderos mediante sensores, ESP32 y una aplicación móvil.",
          problem: "Los pequeños invernaderos carecían de una forma sencilla de supervisar las condiciones ambientales y optimizar el cuidado de las plantas.",
          responsibility: "Definí la distribución de sensores según las condiciones del cultivo, programé el microcontrolador ESP32 y participé en la integración con la aplicación móvil.",
          solution: "Combina sensores ambientales, un ESP32 y una aplicación móvil para visualizar información en tiempo real y apoyar la automatización del cultivo.",
          result: "Demostró la viabilidad de automatizar el monitoreo de pequeños invernaderos mediante un sistema accesible, escalable y basado en datos en tiempo real.",
          tags: ["Arduino", "ESP32", "BLE", "React Native", "Node.js", "MongoDB"],
          image: invernaderoImg,
          gallery: [invernaderoImg],
        },
        {
          id: "tecnosol",
          title: "Tecnosol ERP / CRM",
          tagline: "Plataforma ERP/CRM desarrollada para reemplazar procesos manuales y centralizar la operación comercial y administrativa de la empresa.",
          problem: "La gestión de operaciones mediante archivos Excel generaba riesgo de errores, lentitud en consultas y dificultades para escalar los registros.",
          responsibility: "Implementé el sistema de autenticación, la lógica de negocio multisectorial para pedidos y el módulo de notificaciones de mantenimiento.",
          solution: "Plataforma que unifica clientes, operaciones comerciales y mantenimiento en un solo entorno, con acceso por roles y visibilidad en tiempo real.",
          result: "Reemplazó el uso de hojas de cálculo manuales por un sistema automatizado, agilizando el seguimiento de pedidos y la gestión comercial.",
          tags: ["React", "TypeScript", "JavaScript", "Node.js", "Vite", "MySQL", "CSS", "cPanel"],
          image: tecnosolLogin,
          gallery: [
            tecnosolLogin,
            tecnosolInicio,
            tecnosolRegistroUsuarios,
            tecnosolRegistroPedidos,
            tecnosolTablaRegistros,
          ],
        },
      ] as ProjectCase[],
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

const ModalCarousel = ({ images }: { images: string[] }) => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);

  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-[85vh] flex flex-col items-center justify-between overflow-hidden">
      <div className="relative w-full flex-1 h-[75vh] flex items-center justify-center overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.img
            key={index}
            custom={direction}
            initial={{ x: direction > 0 ? 90 : -90, opacity: 0, scale: 0.95 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            exit={{ x: direction < 0 ? 90 : -90, opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            src={images[index]}
            alt="Slide"
            className="max-w-full max-h-[75vh] object-contain border border-[#333333] bg-[#121212] p-2 rounded-2xl shadow-2xl select-none"
          />
        </AnimatePresence>
      </div>

      {images.length > 1 && (
        <div className="h-12 flex items-center space-x-4 mt-3 z-10 shrink-0">
          <button
            onClick={handlePrev}
            className="p-2.5 bg-[#171717] text-[#888888] hover:text-white border border-[#333333] rounded-full transition-all hover:scale-110 active:scale-95 cursor-pointer"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="text-xs font-tech font-bold text-white tracking-widest select-none min-w-[45px] text-center">
            {index + 1} / {images.length}
          </span>
          <button
            onClick={handleNext}
            className="p-2.5 bg-[#171717] text-[#888888] hover:text-white border border-[#333333] rounded-full transition-all hover:scale-110 active:scale-95 cursor-pointer"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
};

const Projects = ({ language }: ProjectsProps) => {
  const t = translations[language];
  const [selectedGallery, setSelectedGallery] = useState<string[] | null>(null);

  const tecnosolGallery = [
    tecnosolLogin,
    tecnosolInicio,
    tecnosolRegistroUsuarios,
    tecnosolRegistroPedidos,
    tecnosolTablaRegistros,
  ];

  return (
    <section id="projects" className="py-20 md:py-28 bg-[#0f0f0f] border-b border-[#222222]">
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
            <InteractiveTitleText text={t.projects.title} />
          </h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full" />
        </motion.div>

        {/* Projects List */}
        <div className="space-y-16 md:space-y-24">
          {t.projects.cases.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-6 lg:gap-12 bg-[#151515] p-6 md:p-8 rounded-3xl border border-[#222222] hover:border-white transition-all duration-300 group`}
            >
              {/* Media Preview Box */}
              <div className="w-full lg:w-1/2 flex justify-center">
                {project.demoUrl ? (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full aspect-video relative rounded-2xl overflow-hidden border border-[#333333] bg-[#0f0f0f] shadow-2xl group cursor-pointer p-1"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-150 z-20 flex items-center justify-center rounded-2xl">
                      <div className="p-3.5 bg-white text-[#0f0f0f] rounded-full shadow-2xl transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-150">
                        <ExternalLink className="w-6 h-6" />
                      </div>
                    </div>
                  </a>
                ) : (
                  <button
                    onClick={() =>
                      setSelectedGallery(
                        project.id === "invernadero"
                          ? [invernaderoImg]
                          : tecnosolGallery
                      )
                    }
                    className="block w-full aspect-video relative rounded-2xl overflow-hidden border border-[#333333] bg-[#0f0f0f] shadow-2xl group cursor-pointer p-1"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-150 z-20 flex items-center justify-center rounded-2xl">
                      {project.id === "tecnosol" ? (
                        <div className="px-5 py-2.5 bg-white text-[#0f0f0f] font-tech font-bold text-xs rounded-full flex items-center gap-2 uppercase shadow-xl transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-150">
                          <Maximize className="w-4 h-4" />
                          <span>{t.projects.exploreCaptures}</span>
                        </div>
                      ) : (
                        <div className="p-3.5 bg-white text-[#0f0f0f] rounded-full shadow-2xl transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-150">
                          <Maximize className="w-6 h-6" />
                        </div>
                      )}
                    </div>
                  </button>
                )}
              </div>

              {/* Content Panel */}
              <div className="w-full lg:w-1/2">
                {/* Number */}
                <div className="mb-1">
                  <span className="text-2xl font-display font-black text-[#444444] select-none">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="text-xl md:text-3xl font-display font-black text-white uppercase tracking-wide mb-1">
                  {project.title}
                </h3>
                
                {/* 1-Line Essence Tagline (No Quotes) */}
                <p className="text-xs font-tech text-[#888888] font-semibold mb-4 leading-relaxed">
                  {project.tagline}
                </p>

                {/* Narrative Hierarchy */}
                <div className="space-y-2 font-tech text-xs sm:text-xs leading-relaxed mb-4">
                  {/* 1. Contexto */}
                  <div className="p-2.5 rounded-xl bg-[#0f0f0f] border border-[#222222]">
                    <div className="flex items-center gap-1.5 text-amber-400 font-bold text-[11px] uppercase tracking-wider mb-0.5">
                      <AlertCircle className="w-3 h-3" />
                      <span>{t.projects.labels.problem}</span>
                    </div>
                    <p className="text-[#aaaaaa]">{project.problem}</p>
                  </div>

                  {/* 2. Mi Aporte */}
                  <div className="p-2.5 rounded-xl bg-[#0f0f0f] border border-[#222222]">
                    <div className="flex items-center gap-1.5 text-sky-400 font-bold text-[11px] uppercase tracking-wider mb-0.5">
                      <ShieldCheck className="w-3 h-3" />
                      <span>{t.projects.labels.responsibility}</span>
                    </div>
                    <p className="text-[#aaaaaa]">{project.responsibility}</p>
                  </div>

                  {/* 3. La Solución */}
                  <div className="p-2.5 rounded-xl bg-[#0f0f0f] border border-[#222222]">
                    <div className="flex items-center gap-1.5 text-indigo-400 font-bold text-[11px] uppercase tracking-wider mb-0.5">
                      <Cpu className="w-3 h-3" />
                      <span>{t.projects.labels.solution}</span>
                    </div>
                    <p className="text-[#aaaaaa]">{project.solution}</p>
                  </div>

                  {/* 4. Resultado */}
                  <div className="p-2.5 rounded-xl bg-[#0f0f0f] border border-[#222222]">
                    <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-[11px] uppercase tracking-wider mb-0.5">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>{t.projects.labels.result}</span>
                    </div>
                    <p className="text-[#aaaaaa]">{project.result}</p>
                  </div>
                </div>

                {/* 5. Tecnologías Utilizadas */}
                <div className="w-full pt-1">
                  <div className="flex flex-wrap items-center gap-1.5 w-full">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 text-[10px] sm:text-[11px] font-tech font-bold text-white bg-[#0f0f0f] border border-[#333333] rounded-full hover:border-white transition-colors shrink-0 shadow-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Gallery / Image Modal */}
      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {selectedGallery && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-12"
              >
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  onClick={() => setSelectedGallery(null)}
                  className="absolute top-6 right-6 p-3 rounded-full bg-[#171717] border border-[#333333] text-[#ffffff] hover:bg-white hover:text-[#0f0f0f] transition-all z-[10000] shadow-2xl cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-6 h-6" />
                </motion.button>
                <motion.div
                  initial={{ opacity: 0, scale: 0.82, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.85, y: 15 }}
                  transition={{ type: "spring", stiffness: 420, damping: 28 }}
                  className="w-full max-w-5xl h-full flex items-center justify-center"
                >
                  <ModalCarousel images={selectedGallery} />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </section>
  );
};

export default Projects;
