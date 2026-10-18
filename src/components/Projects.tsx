import { useState, useEffect, useCallback, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X, Maximize, ChevronLeft, ChevronRight, AlertCircle, ShieldCheck, Cpu, CheckCircle2, ZoomIn, ZoomOut } from "lucide-react";
import InteractiveTitle from "./common/InteractiveTitle";

import { useLanguage } from "../i18n/LanguageContext";
import { translations } from "../i18n";

import proyectoLectorImg from "../assets/ProyectoLector.webp";
import liraImg from "../assets/LIRA.webp";
import invernaderoImg from "../assets/Invernadero.webp";
import tecnosolLogin from "../assets/Login Tecnosol.webp";
import tecnosolInicio from "../assets/inicio.webp";
import tecnosolRegistroUsuarios from "../assets/Registro_usuarios.webp";
import tecnosolRegistroPedidos from "../assets/Registro_pedidos.webp";
import tecnosolTablaRegistros from "../assets/Tabla_registros.webp";
import tecnosolPagos from "../assets/Pagos.webp";
import tecnosolEstadisticas from "../assets/Estadisticas.webp";
import tecnosolMantenimiento from "../assets/Mantenimiento.webp";
import tecnosolQuejas from "../assets/Quejas.webp";
import tecnosolAsesores from "../assets/Asesores.webp";
import tecnosolModelos from "../assets/Modelos.webp";

/**
 * Language-invariant media for each case, keyed by the case `id`.
 * Copy lives in `src/i18n`; assets, tags and links stay here.
 */
const PROJECT_MEDIA: Record<
  string,
  { tags: string[]; demoUrl?: string; image: string; gallery?: string[] }
> = {
  lector: {
    tags: ["Next.js", "React", "Node.js", "PostgreSQL", "PDF.js", "Tailwind CSS", "REST API"],
    demoUrl: "https://proyectolector.com/",
    image: proyectoLectorImg,
  },
  lira: {
    tags: ["React Native", "Node.js", "Express", "MongoDB", "Android TV", "Alexa Skills", "REST API"],
    demoUrl: "https://educacion-lira.vercel.app/",
    image: liraImg,
  },
  tecnosol: {
    tags: ["React", "TypeScript", "JavaScript", "Node.js", "Vite", "MySQL", "CSS", "cPanel"],
    image: tecnosolLogin,
    gallery: [
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
  },
  invernadero: {
    tags: ["Arduino", "ESP32", "BLE", "React Native", "Node.js", "MongoDB"],
    image: invernaderoImg,
    gallery: [invernaderoImg],
  },
};

interface ModalCarouselProps {
  images: string[];
  alts?: string[];
  onClose?: () => void;
}

const ModalCarousel = ({ images, alts, onClose }: ModalCarouselProps) => {
  const { displayedLanguage } = useLanguage();
  const g = translations[displayedLanguage].projects.gallery;
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [lastTap, setLastTap] = useState(0);

  const currentAlt =
    alts && alts[index] ? alts[index] : `${g.screenshot} ${index + 1} / ${images.length}`;

  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);

  const handleNext = useCallback(() => {
    setZoomLevel(1);
    setDirection(1);
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  const handlePrev = useCallback(() => {
    setZoomLevel(1);
    setDirection(-1);
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose?.();
      } else if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev, onClose]);

  const toggleZoom = () => {
    setZoomLevel((prev) => (prev === 1 ? 2.2 : 1));
  };

  const handleDoubleTap = () => {
    const now = Date.now();
    if (now - lastTap < 300) {
      toggleZoom();
    } else {
      setLastTap(now);
    }
  };

  const zoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.5, 3));
  };

  const zoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.5, 1));
  };

  return (
    <div className="relative w-full max-w-4xl h-full max-h-[85vh] flex flex-col items-center justify-between overflow-hidden select-none">
      {/* Zoom Controls Bar */}
      <div className="absolute top-2 z-40 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/85 backdrop-blur-md border border-white/20 text-white shadow-2xl">
        <button
          onClick={(e) => {
            e.stopPropagation();
            zoomOut();
          }}
          disabled={zoomLevel <= 1}
          className="p-1 text-white hover:text-sky-400 disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed transition-colors"
          aria-label={g.zoomOut}
        >
          <ZoomOut className="w-4 h-4" />
        </button>
        <span className="text-[11px] font-tech font-bold tracking-wider min-w-[38px] text-center">
          {Math.round(zoomLevel * 100)}%
        </span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            zoomIn();
          }}
          disabled={zoomLevel >= 3}
          className="p-1 text-white hover:text-sky-400 disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed transition-colors"
          aria-label={g.zoomIn}
        >
          <ZoomIn className="w-4 h-4" />
        </button>
        {zoomLevel > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setZoomLevel(1);
            }}
            className="ml-1 px-2 py-0.5 text-[9.5px] font-tech uppercase font-bold bg-white/20 hover:bg-white/30 text-white rounded-full transition-colors"
          >
            {g.reset}
          </button>
        )}
      </div>

      {/* Image Display Container with Touch Drag / Swipe & Zoom */}
      <div
        className="relative w-full flex-1 flex items-center justify-center overflow-hidden p-2 sm:p-4 touch-none"
        onClick={handleDoubleTap}
      >
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.img
            key={index}
            custom={direction}
            initial={{ x: direction > 0 ? 120 : -120, opacity: 0, scale: 0.95 }}
            animate={{ x: 0, opacity: 1, scale: zoomLevel }}
            exit={{ x: direction < 0 ? 120 : -120, opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            drag={zoomLevel > 1 ? true : "x"}
            dragConstraints={
              zoomLevel > 1
                ? { left: -250 * (zoomLevel - 1), right: 250 * (zoomLevel - 1), top: -180 * (zoomLevel - 1), bottom: 180 * (zoomLevel - 1) }
                : { left: 0, right: 0 }
            }
            dragElastic={0.2}
            onDragEnd={(_, info) => {
              if (zoomLevel === 1) {
                if (info.offset.x < -40) {
                  handleNext();
                } else if (info.offset.x > 40) {
                  handlePrev();
                }
              }
            }}
            src={images[index]}
            alt={currentAlt}
            className="max-w-full max-h-[62vh] sm:max-h-[72vh] object-contain border border-[#333333] bg-[#121212] p-2 rounded-2xl shadow-2xl transition-transform duration-200 cursor-grab active:cursor-grabbing"
          />
        </AnimatePresence>

        {/* Side Floating Next/Prev Buttons for Mobile & Desktop */}
        {images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-3 bg-black/75 hover:bg-white text-white hover:text-[#0f0f0f] border border-white/20 rounded-full transition-all shadow-2xl z-30 cursor-pointer active:scale-95"
              aria-label={g.previousSlide}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-3 bg-black/75 hover:bg-white text-white hover:text-[#0f0f0f] border border-white/20 rounded-full transition-all shadow-2xl z-30 cursor-pointer active:scale-95"
              aria-label={g.nextSlide}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}
      </div>

      {/* Bottom Counter & Indicator Dots with prominent slide caption */}
      <div className="flex flex-col items-center justify-center gap-2 shrink-0 z-30 pb-3 max-w-2xl px-4 w-full">
        {currentAlt && (
          <div className="px-4 py-1.5 rounded-full bg-black/85 backdrop-blur-md border border-white/20 shadow-2xl">
            <p className="text-xs sm:text-sm font-tech font-semibold text-white text-center select-none tracking-wide">
              {currentAlt}
            </p>
          </div>
        )}
        {images.length > 1 && (
          <div className="h-6 flex items-center justify-center space-x-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  setZoomLevel(1);
                  setDirection(i > index ? 1 : -1);
                  setIndex(i);
                }}
                className={`h-2.5 rounded-full transition-all cursor-pointer ${
                  i === index
                    ? "w-8 bg-white shadow-[0_0_10px_rgba(255,255,255,0.7)]"
                    : "w-2.5 bg-[#444444] hover:bg-[#888888]"
                }`}
                aria-label={`${g.goToSlide} ${i + 1}`}
              />
            ))}
            <span className="text-xs sm:text-sm font-tech font-bold text-white tracking-widest ml-3 select-none">
              {index + 1} / {images.length}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  const { displayedLanguage: language } = useLanguage();
  const t = translations[language];
  const [selectedGallery, setSelectedGallery] = useState<{ id: string; images: string[] } | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  // Copy comes from i18n; media (images, links, tags) from PROJECT_MEDIA.
  // Only projects that define their own `gallery` expose the screenshot viewer;
  // the rest (e.g. ones that just link to a live site) show the image as-is.
  const cases = t.projects.cases.map((project) => {
    const media = PROJECT_MEDIA[project.id];
    const gallery =
      media.gallery && media.gallery.length > 0 ? media.gallery : [media.image];
    return {
      ...project,
      ...media,
      gallery,
      hasGallery: Boolean(media.gallery && media.gallery.length > 0),
    };
  });

  // Body scroll lock + focus management: move focus into the dialog on open
  // and restore it to the trigger element on close.
  useEffect(() => {
    if (!selectedGallery) return;

    previouslyFocused.current = document.activeElement as HTMLElement | null;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusTimer = window.setTimeout(() => closeButtonRef.current?.focus(), 0);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.clearTimeout(focusTimer);
      previouslyFocused.current?.focus?.();
    };
  }, [selectedGallery]);

  // Trap keyboard focus inside the dialog while it is open.
  useEffect(() => {
    if (!selectedGallery) return;

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const root = dialogRef.current;
      if (!root) return;
      const focusable = Array.from(
        root.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (e.shiftKey) {
        if (active === first || !root.contains(active)) {
          e.preventDefault();
          last.focus();
        }
      } else if (active === last || !root.contains(active)) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleTab);
    return () => document.removeEventListener("keydown", handleTab);
  }, [selectedGallery]);

  return (
    <section id="projects" className="py-20 md:py-28 bg-[#0f0f0f] border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          viewport={{ once: true, margin: "-40px" }}
          className="text-center mb-16 md:mb-24 transform-gpu"
        >
          <h2 className="text-4xl md:text-6xl font-display font-black tracking-wide mb-3">
            <InteractiveTitle text={t.projects.title} />
          </h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-16 md:space-y-24">
          {cases.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              viewport={{ once: true, margin: "-40px" }}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-6 lg:gap-12 bg-[#151515] p-6 md:px-8 md:py-[clamp(20px,3svh,32px)] rounded-3xl border border-[#222222] hover:border-white transition-colors duration-200 group transform-gpu`}
            >
              <div className="w-full lg:w-1/2 flex justify-center">
                <div className="w-full aspect-video relative rounded-2xl overflow-hidden border border-[#333333] bg-[#0f0f0f] shadow-2xl group p-1 transition-transform duration-200">
                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full h-full relative cursor-pointer active:scale-[0.98] transition-transform duration-200 text-left"
                      aria-label={`${t.projects.labels.visitSite} — ${project.title}`}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-150 z-20 flex items-center justify-center rounded-2xl">
                        <div className="w-14 h-14 bg-white text-[#0f0f0f] rounded-full flex items-center justify-center shadow-2xl transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-150 hidden sm:flex">
                          <ExternalLink className="w-6 h-6 stroke-[2.2]" />
                        </div>
                      </div>
                    </a>
                  ) : project.hasGallery ? (
                    <button
                      type="button"
                      onClick={() =>
                        setSelectedGallery({ id: project.id, images: project.gallery })
                      }
                      className="block w-full h-full relative cursor-pointer active:scale-[0.98] transition-transform duration-200 text-left"
                      aria-label={`${t.projects.labels.viewCapture} — ${project.title}`}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-150 z-20 flex items-center justify-center rounded-2xl">
                        <div className="px-5 py-2.5 bg-white text-[#0f0f0f] font-tech font-bold text-xs rounded-full flex items-center gap-2 uppercase shadow-xl transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-150 hidden sm:flex">
                          <Maximize className="w-4 h-4" />
                          <span>
                            {project.gallery.length > 1
                              ? t.projects.exploreCaptures
                              : t.projects.labels.viewCapture}
                          </span>
                        </div>
                      </div>
                    </button>
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                    />
                  )}

                  {/* Top-right Action Badges */}
                  <div className="absolute top-3 right-3 z-30 flex items-center gap-2 pointer-events-auto">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-full bg-black/85 hover:bg-white text-white hover:text-[#0f0f0f] backdrop-blur-md border border-white/20 font-tech font-bold text-[10.5px] uppercase tracking-wider flex items-center gap-1.5 shadow-lg transition-colors cursor-pointer"
                        aria-label={`${t.projects.labels.visitSite} — ${project.title}`}
                      >
                        <span>{t.projects.labels.visitSite}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.hasGallery && (
                      <button
                        type="button"
                        onClick={() =>
                          setSelectedGallery({ id: project.id, images: project.gallery })
                        }
                        className="px-3 py-1.5 rounded-full bg-black/85 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-tech font-bold text-[10.5px] uppercase tracking-wider flex items-center gap-1.5 shadow-lg cursor-pointer transition-colors"
                        aria-label={`${t.projects.labels.viewCapture} — ${project.title}`}
                      >
                        <Maximize className="w-3.5 h-3.5 text-white" />
                        <span>
                          {project.gallery.length > 1
                            ? `${t.projects.labels.viewCaptures} (${project.gallery.length})`
                            : t.projects.labels.viewCapture}
                        </span>
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <div className="mb-1">
                  <span className="text-2xl font-display font-black text-[#444444] select-none">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="text-xl md:text-3xl font-display font-black text-white uppercase tracking-wide mb-1">
                  {project.title}
                </h3>
                
                <p className="text-[13px] font-tech text-[#888888] font-semibold mb-[clamp(8px,1.5svh,16px)] leading-normal">
                  {project.tagline}
                </p>

                <div className="space-y-[clamp(4px,0.9svh,8px)] font-tech text-[13px] leading-normal mb-[clamp(8px,1.5svh,16px)]">
                  <div className="px-2.5 py-[clamp(6px,1.2svh,10px)] rounded-xl bg-[#0f0f0f] border border-[#222222]">
                    <div className="flex items-center gap-1.5 text-amber-400 font-bold text-[11px] uppercase tracking-wider mb-0.5">
                      <AlertCircle className="w-3 h-3" />
                      <span>{t.projects.labels.problem}</span>
                    </div>
                    <p className="text-[#cccccc]">{project.problem}</p>
                  </div>

                  <div className="px-2.5 py-[clamp(6px,1.2svh,10px)] rounded-xl bg-[#0f0f0f] border border-[#222222]">
                    <div className="flex items-center gap-1.5 text-sky-400 font-bold text-[11px] uppercase tracking-wider mb-0.5">
                      <ShieldCheck className="w-3 h-3" />
                      <span>{t.projects.labels.responsibility}</span>
                    </div>
                    <p className="text-[#cccccc]">{project.responsibility}</p>
                  </div>

                  <div className="px-2.5 py-[clamp(6px,1.2svh,10px)] rounded-xl bg-[#0f0f0f] border border-[#222222]">
                    <div className="flex items-center gap-1.5 text-indigo-400 font-bold text-[11px] uppercase tracking-wider mb-0.5">
                      <Cpu className="w-3 h-3" />
                      <span>{t.projects.labels.solution}</span>
                    </div>
                    <p className="text-[#cccccc]">{project.solution}</p>
                  </div>

                  <div className="px-2.5 py-[clamp(6px,1.2svh,10px)] rounded-xl bg-[#0f0f0f] border border-[#222222]">
                    <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-[11px] uppercase tracking-wider mb-0.5">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>{t.projects.labels.result}</span>
                    </div>
                    <p className="text-[#cccccc]">{project.result}</p>
                  </div>
                </div>

                <div className="w-full pt-1">
                  <div className="flex flex-wrap items-center gap-1.5 w-full">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
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
                ref={dialogRef}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                role="dialog"
                aria-modal="true"
                aria-label={t.projects.gallery.ariaLabel}
                onClick={() => setSelectedGallery(null)}
                className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-md p-2 sm:p-4 md:p-12"
              >
                <motion.button
                  ref={closeButtonRef}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedGallery(null);
                  }}
                  className="absolute top-4 right-4 sm:top-6 sm:right-6 p-3.5 rounded-full bg-[#171717] border border-[#333333] text-[#ffffff] hover:bg-white hover:text-[#0f0f0f] transition-all z-[10000] shadow-2xl cursor-pointer active:scale-95"
                  aria-label={t.projects.gallery.close}
                >
                  <X className="w-6 h-6" />
                </motion.button>
                <motion.div
                  initial={{ opacity: 0, scale: 0.82, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.85, y: 15 }}
                  transition={{ type: "spring", stiffness: 420, damping: 28 }}
                  onClick={(e) => e.stopPropagation()}
                  className="w-full max-w-5xl h-full flex items-center justify-center"
                >
                  <ModalCarousel
                    images={selectedGallery.images}
                    alts={
                      (t.projects.gallery as unknown as Record<string, string[]>)[
                        selectedGallery.id
                      ]
                    }
                    onClose={() => setSelectedGallery(null)}
                  />
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
