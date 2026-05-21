import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  X,
  Maximize,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

type Language = "en" | "es";

interface ProjectsProps {
  language: Language;
}

const translations = {
  en: {
    projects: {
      title: "Featured Projects",
      subtitle:
        "A selection of my most impactful projects, built with a focus on real-world utility.",
      technologiesUsed: "Technologies Used",
      liveDemo: "Live Demo",
      viewGallery: "View Gallery",
      liveBadge: "Live",
      items: [
        {
          title: "Proyecto Lector",
          description:
            "Interactive web reading platform for educational institutions focused on measuring and improving student reading comprehension. It includes a custom PDF reader with highlighting, annotation, definition lookup, and note-taking tools, plus automatic assessments with a dynamic question variation engine to prevent repetitive answers. The system generates PDF performance reports for teachers and features role-based access control. Developed with Next.js, Tailwind CSS, Node.js, and PostgreSQL, with CI/CD integration and cloud deployment.",
          tags: [
            "Next.js",
            "React",
            "Node.js",
            "PostgreSQL",
            "Tailwind CSS",
            "PDF.js",
            "REST API",
          ],
        },
        {
          title: "LIRA (Lectura Interactiva de Rapido Aprendizaje)",
          description:
            "Multiplatform educational ecosystem focused on children's interactive reading, available on Android TV, Alexa, smartwatches, mobile app, web, and admin panel. It centralizes API services and progress synchronization across devices through a unified backend architecture. Includes gamified reading sessions and adaptive content to enhance child engagement. Developed with React Native, Node.js, Express, and MongoDB.",
          tags: [
            "React Native",
            "Node.js",
            "Express",
            "MongoDB",
            "Android TV",
            "Alexa Skills",
            "Multi-platform",
          ],
        },
        {
          title: "Invernadero",
          description:
            "IoT smart agriculture system designed to monitor and automate greenhouses in real time. Arduino and ESP32 sensors collect humidity, temperature, and ambient light data via Bluetooth Low Energy (BLE), triggering automated irrigation and climate control rules. It includes a React Native mobile app with real-time monitoring, historical charts, and manual system control.",
          tags: [
            "Arduino",
            "ESP32",
            "BLE",
            "React Native",
            "Node.js",
            "MongoDB",
            "IoT",
          ],
        },
        {
          title: "Tecnosol",
          description:
            "ERP/CRM administrative web system for comprehensive management of solar installation projects across residential, industrial, and commercial sectors. It manages orders, maintenance, equipment models, payments, and business statistics through interactive dashboards and PDF report generation. Developed with React, TypeScript, Node.js, Express, and MySQL, featuring role-based access control and REST API consumption.",
          tags: [
            "React",
            "TypeScript",
            "Vite",
            "React Router",
            "Bootstrap",
            "Node.js",
            "Express",
            "MySQL",
          ],
        },
      ],
    },
  },
  es: {
    projects: {
      title: "Proyectos Destacados",
      subtitle:
        "Una selección de mis proyectos más destacados, desarrollados con un enfoque en la utilidad y resolución de problemas reales.",
      technologiesUsed: "Tecnologías Utilizadas",
      liveDemo: "Demo en Vivo",
      viewGallery: "Ver Galería",
      liveBadge: "En Vivo",
      items: [
        {
          title: "Proyecto Lector",
          description:
            "Plataforma web de lectura interactiva para instituciones educativas enfocada en medir y mejorar la comprensión lectora estudiantil. Incluye un lector PDF personalizado con herramientas de subrayado, anotaciones, obtención de definiciones y toma de notas, además de evaluaciones automáticas con motor de variación dinámica de preguntas para evitar respuestas repetitivas. El sistema genera reportes PDF de desempeño para docentes y cuenta con control de acceso por roles. Desarrollada con Next.js, Tailwind CSS, Node.js y PostgreSQL, con integración CI/CD y despliegue en la nube.",
          tags: [
            "Next.js",
            "React",
            "Node.js",
            "PostgreSQL",
            "Tailwind CSS",
            "PDF.js",
            "API REST",
          ],
        },
        {
          title: "LIRA (Lectura Interactiva de Rapido Aprendizaje)",
          description:
            "Ecosistema educativo multiplataforma enfocado en lectura interactiva infantil, disponible en Android TV, Alexa, smartwatches, aplicación móvil, web y panel administrativo. Centraliza servicios API y sincronización de progreso entre dispositivos mediante una arquitectura backend unificada. Incluye sesiones de lectura gamificadas y contenido adaptativo para mejorar la interacción infantil. Desarrollado con React Native, Node.js, Express y MongoDB.",
          tags: [
            "React Native",
            "Node.js",
            "Express",
            "MongoDB",
            "Android TV",
            "Alexa Skills",
            "Multiplataforma",
          ],
        },
        {
          title: "Invernadero",
          description:
            "Sistema IoT de agricultura inteligente diseñado para monitorear y automatizar invernaderos en tiempo real. Sensores Arduino y ESP32 recopilan datos de humedad, temperatura y luz ambiental mediante Bluetooth Low Energy (BLE), permitiendo activar reglas automatizadas de riego y control climático. Incluye aplicación móvil en React Native con monitoreo en tiempo real, gráficas históricas y control manual del sistema.",
          tags: [
            "Arduino",
            "ESP32",
            "BLE",
            "React Native",
            "Node.js",
            "MongoDB",
            "IoT",
          ],
        },
        {
          title: "Tecnosol",
          description:
            "Sistema web administrativo ERP/CRM para la gestión integral de proyectos de instalación solar en sectores residenciales, industriales y comerciales. Permite administrar pedidos, mantenimientos, modelos de equipos, pagos y estadísticas empresariales mediante dashboards interactivos y generación de reportes PDF. Desarrollado con React, TypeScript, Node.js, Express y MySQL, incorporando control de acceso basado en roles y consumo de APIs REST.",
          tags: [
            "React",
            "TypeScript",
            "Vite",
            "React Router",
            "Bootstrap",
            "Node.js",
            "Express",
            "MySQL",
          ],
        },
      ],
    },
  },
};
import invernaderoImg from "../assets/Invernadero.png";
import tecnosolLogin from "../assets/Login Tecnosol.png";
import tecnosolInicio from "../assets/inicio.png";
import tecnosolRegistroUsuarios from "../assets/Registro_usuarios.png";
import tecnosolRegistroPedidos from "../assets/Registro_pedidos.png";
import tecnosolTablaRegistros from "../assets/Tabla_registros.png";
import tecnosolEstadisticas from "../assets/Estadisticas.png";
import tecnosolMantenimiento from "../assets/Mantenimiento.png";
import tecnosolQuejas from "../assets/Quejas.png";
import tecnosolPagos from "../assets/Pagos.png";
import tecnosolModelos from "../assets/Modelos.png";
import tecnosolAsesores from "../assets/Asesores.png";
const ModalCarousel = ({
  images,
}: {
  images: string[];
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center">
      <motion.img
        key={currentIndex}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        src={images[currentIndex]}
        alt="Project slide"
        className="max-w-full max-h-[85vh] rounded-lg object-contain shadow-2xl relative z-40"
      />

      {/* Navigation arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex((prev) =>
                prev === 0 ? images.length - 1 : prev - 1,
              );
            }}
            className="absolute left-2 md:-left-12 top-1/2 -translate-y-1/2 p-3 bg-slate-800/80 hover:bg-cyan-500 text-white rounded-full z-50 transition-colors shadow-lg"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex((prev) =>
                prev === images.length - 1 ? 0 : prev + 1,
              );
            }}
            className="absolute right-2 md:-right-12 top-1/2 -translate-y-1/2 p-3 bg-slate-800/80 hover:bg-cyan-500 text-white rounded-full z-50 transition-colors shadow-lg"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          {/* Dots */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-50">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(i);
                }}
                className={`w-3 h-3 rounded-full transition-all shadow-md ${i === currentIndex ? "w-8 bg-cyan-400" : "bg-white/40 hover:bg-white"}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const Projects = ({ language }: ProjectsProps) => {
  const t = translations[language];
  const [selectedGallery, setSelectedGallery] = useState<string[] | null>(null);

  const projectAssets = [
    {
      image: "",
      useIframe: true,
      demo: "https://proyectolector.com/",
    },
    {
      image: "",
      useIframe: true,
      demo: "https://educacion-lira.vercel.app/",
    },
    {
      image: invernaderoImg,
      useIframe: false,
      demo: invernaderoImg,
    },
    {
      images: [
        tecnosolLogin,
        tecnosolInicio,
        tecnosolRegistroUsuarios,
        tecnosolRegistroPedidos,
        tecnosolTablaRegistros,
        tecnosolEstadisticas,
        tecnosolMantenimiento,
        tecnosolQuejas,
        tecnosolPagos,
        tecnosolModelos,
        tecnosolAsesores,
      ],
      useIframe: false,
    },
  ];

  const projects = t.projects.items.map((item, index) => ({
    ...item,
    ...(projectAssets[index] || projectAssets[0]),
  }));

  return (
    <section id="projects" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t.projects.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-violet-600 mx-auto rounded-full mb-5" />
          <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
            {t.projects.subtitle}
          </p>
        </motion.div>

        {/* ── Project cards ── */}
        <div className="space-y-28">
          {projects.map((project, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, margin: "-80px" }}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-10 lg:gap-16 items-center`}
            >
              {/* ── Preview panel ── */}
              <div className="w-full lg:w-[52%] flex-shrink-0">
                {project.useIframe ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 h-72 md:h-[420px] shadow-2xl shadow-slate-950/60 group cursor-pointer"
                  >
                    <>
                      {/* Scaled iframe preview */}
                      <div className="w-[400%] h-[400%] origin-top-left scale-[0.25] pointer-events-none">
                        <iframe
                          src={project.demo}
                          className="w-full h-full border-0"
                          title={project.title}
                          tabIndex={-1}
                          loading="lazy"
                        />
                      </div>
                      {/* Live badge */}
                      <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 bg-slate-900 border border-slate-700/80 rounded-full z-10 shadow-md">
                        <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                        <span className="text-xs text-emerald-400 font-semibold tracking-wide">
                          {t.projects.liveBadge}
                        </span>
                      </div>
                    </>

                    {/* Hover overlay with arrow */}
                    <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/40 transition-colors duration-300 z-20 flex items-center justify-center">
                      <div className="bg-cyan-500 text-white p-4 rounded-full opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 shadow-xl shadow-cyan-500/20">
                        <ExternalLink className="w-6 h-6" />
                      </div>
                    </div>

                    {/* Depth gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-${index % 2 === 0 ? "r" : "l"
                        } from-transparent via-transparent to-slate-950/25 pointer-events-none z-10`}
                    />
                  </a>
                ) : (
                  <button
                    onClick={() => setSelectedGallery(project.images || [project.image as string])}
                    className="block w-fit mx-auto lg:mx-0 text-left relative rounded-2xl overflow-hidden border border-slate-800 bg-transparent shadow-2xl shadow-slate-950/60 group cursor-pointer"
                  >
                    <img
                      src={project.images ? project.images[0] : (project.image as string)}
                      alt={project.title}
                      className="w-auto h-auto max-w-full max-h-[350px] md:max-h-[420px] object-contain transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Hover overlay with expand icon or gallery button */}
                    <div className="absolute inset-0 bg-slate-700/0 group-hover:bg-slate-700/40 md:transition-colors duration-300 z-20 flex items-center justify-center pointer-events-none">
                      {project.images ? (
                        <div className="bg-slate-900/90 text-white px-6 py-3 rounded-full opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 shadow-xl shadow-cyan-500/20 flex items-center gap-2 border border-slate-700 pointer-events-auto hover:bg-slate-800">
                          <Maximize className="w-5 h-5 text-cyan-400" />
                          <span className="font-medium text-sm">{t.projects.viewGallery} ({project.images.length})</span>
                        </div>
                      ) : (
                        <div className="bg-cyan-500 text-white p-4 rounded-full opacity-100 scale-100 md:opacity-0 md:scale-50 md:group-hover:opacity-100 md:group-hover:scale-100 transition-all duration-300 shadow-xl shadow-cyan-500/20">
                          <Maximize className="w-6 h-6" />
                        </div>
                      )}
                    </div>

                    {/* Depth gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-${index % 2 === 0 ? "r" : "l"
                        } from-transparent via-transparent to-slate-950/25 pointer-events-none z-10`}
                    />
                  </button>
                )}
              </div>

              {/* ── Content panel ── */}
              <div className="w-full lg:flex-1">
                {/* Project number */}
                <span className="block text-[7rem] md:text-[8.5rem] font-black leading-none text-slate-800/55 select-none mb-0">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Title */}
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-5 -mt-6">
                  {project.title}
                </h3>

                {/* Full description – no truncation */}
                <p className="text-slate-300 leading-relaxed text-base md:text-[1.05rem] mb-8 whitespace-pre-line">
                  {project.description}
                </p>

                {/* Technologies used */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="h-px w-6 bg-cyan-500/60 inline-block flex-shrink-0" />
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                      {t.projects.technologiesUsed}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 text-sm font-medium text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 rounded-lg hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20 hover:bg-cyan-500/15 transition-all duration-300 cursor-default"
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

      {/* ── Image Modal ── */}
      <AnimatePresence>
        {selectedGallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-12"
          >
            <button
              onClick={() => setSelectedGallery(null)}
              className="absolute top-4 right-4 md:top-8 md:right-8 p-3 rounded-full bg-slate-800/80 text-white hover:bg-slate-700 hover:text-cyan-400 transition-all z-[70] shadow-xl border border-slate-700"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="w-full max-w-6xl h-full flex items-center justify-center relative">
              <ModalCarousel images={selectedGallery} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
