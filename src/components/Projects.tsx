import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Maximize, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import invernaderoImg from '../assets/Invernadero.png';

const Projects = () => {
    const { t } = useLanguage();
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const projectAssets = [
        {
            tags: ["Android TV", "Alexa", "React Native", "Node.js"],
            image: "",
            useIframe: true,
            demo: "https://educacion-lira.vercel.app/"
        },
        {
            tags: ["IoT", "MongoDB", "Arduino", "React Native"],
            image: invernaderoImg,
            demo: ""
        },
        {
            tags: ["React", "Next.js", "Node.js", "Tailwind CSS"],
            image: "",
            useIframe: true,
            demo: "https://proyectolector.com/"
        }
    ];

    const projects = t.projects.items.map((item, index) => ({
        ...item,
        ...(projectAssets[index] || projectAssets[0])
    }));

    return (
        <section id="projects" className="py-20 bg-slate-950 min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.projects.title}</h2>
                    <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="group bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10"
                        >
                            <div className="relative h-48 overflow-hidden bg-slate-800">
                                {project.useIframe ? (
                                    <div className="w-[400%] h-[400%] origin-top-left scale-[0.25] pointer-events-none">
                                        <iframe 
                                            src={project.demo} 
                                            className="w-full h-full border-0"
                                            title={project.title}
                                            tabIndex={-1}
                                        />
                                    </div>
                                ) : (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                )}
                                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-10">
                                    {project.demo ? (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-cyan-500 transition-colors"
                                        >
                                            <ExternalLink className="w-6 h-6" />
                                        </a>
                                    ) : !project.useIframe ? (
                                        <button
                                            onClick={() => setSelectedImage(project.image)}
                                            className="p-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-cyan-500 transition-colors"
                                            aria-label="Expandir imagen"
                                        >
                                            <Maximize className="w-6 h-6" />
                                        </button>
                                    ) : null}
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 text-xs font-medium text-cyan-400 bg-cyan-500/10 rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Image Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-sm p-4"
                    >
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-6 right-6 p-2 bg-slate-800 rounded-full text-gray-400 hover:text-white hover:bg-slate-700 transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>
                        <motion.img
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            src={selectedImage}
                            alt="Project details"
                            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl border border-slate-800"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
