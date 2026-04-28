import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
    const { t } = useLanguage();
    return (
        <section id="about" className="py-20 bg-slate-900 min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.about.title}</h2>
                    <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="relative max-w-sm mx-auto"
                    >
                        <div className="aspect-square rounded-2xl overflow-hidden bg-slate-800 border border-slate-700 flex items-center justify-center group">
                            {/* Placeholder for actual image */}
                            <User className="w-32 h-32 text-slate-600 group-hover:text-cyan-400 transition-colors duration-300" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <p className="text-white font-medium">{t.about.role}</p>
                            </div>
                        </div>
                        <div className="absolute -z-10 top-4 -left-4 w-full h-full border-2 border-cyan-500/30 rounded-2xl" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50"
                    >
                        <div className="space-y-4">
                            <p className="text-gray-300 text-lg leading-relaxed">
                                {t.about.p1}
                            </p>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                {t.about.p2}
                            </p>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                {t.about.p3}
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-6 mt-8">
                            <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700">
                                <h4 className="text-3xl font-bold text-cyan-400 mb-1">2+</h4>
                                <p className="text-sm text-gray-400">{t.about.yearsExp}</p>
                            </div>
                            <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700">
                                <h4 className="text-3xl font-bold text-cyan-400 mb-1">20+</h4>
                                <p className="text-sm text-gray-400">{t.about.projectsCompleted}</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
