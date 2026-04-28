import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Download } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
    const { t, language } = useLanguage();
    const cvFile = t.hero.cvLink;
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-1/2 -left-1/2 w-[1000px] h-[1000px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute -bottom-1/2 -right-1/2 w-[1000px] h-[1000px] bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-slate-800/50 border border-slate-700 text-cyan-400 text-sm font-medium mb-6 backdrop-blur-sm">
                        {t.hero.available}
                    </span>
                    <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-4">
                        {t.hero.greeting}
                    </h1>
                    <h2 className="text-3xl md:text-4xl font-medium text-cyan-400 mb-6">
                        {t.hero.titleStart} <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">{t.hero.titleEnd}</span>
                    </h2>
                    <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto mb-10">
                        {t.hero.description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href="#projects"
                            className="group px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center gap-2"
                        >
                            {t.hero.viewWork}
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3.5 rounded-full bg-slate-800 text-white font-semibold border border-slate-700 hover:bg-slate-700 transition-all duration-300"
                        >
                            {t.hero.contactMe}
                        </a>
                        <a
                            href={cvFile}
                            download
                            aria-label="Download CV"
                            className="group relative p-3.5 rounded-full bg-transparent text-white border border-slate-700 hover:bg-slate-800 transition-all duration-300 flex items-center justify-center"
                        >
                            <Download className="w-5 h-5" />
                            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                {t.hero.downloadCv}
                            </span>
                        </a>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
                <ChevronDown className="w-6 h-6 text-gray-500" />
            </motion.div>
        </section>
    );
};

export default Hero;
