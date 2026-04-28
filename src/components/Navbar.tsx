import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
    const { language, setLanguage, t } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        const sections = document.querySelectorAll('section[id]');
        sections.forEach((section) => observer.observe(section));

        return () => sections.forEach((section) => observer.unobserve(section));
    }, []);

    const navLinks = [
        { name: t.nav.about, href: '#about' },
        { name: t.nav.skills, href: '#skills' },
        { name: t.nav.experience, href: '#experience' },
        { name: t.nav.education, href: '#education' },
        { name: t.nav.projects, href: '#projects' },
        { name: t.nav.contact, href: '#contact' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/80 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <div className="flex-shrink-0 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
                        <div className="flex items-center gap-2 text-cyan-400 font-bold text-xl">
                            <Code2 className="w-8 h-8" />
                            <span>DevPortfolio</span>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${activeSection === link.href.substring(1)
                                        ? 'text-cyan-400 bg-slate-800/50'
                                        : 'text-gray-300 hover:text-cyan-400'
                                        }`}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        <button
                            onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
                            className="relative flex items-center w-20 h-9 bg-slate-900 rounded-full border border-slate-700 p-1 cursor-pointer shadow-inner hover:border-cyan-500/50 transition-colors"
                            title={language === 'en' ? 'Cambiar a Español' : 'Switch to English'}
                        >
                            <motion.div
                                className="absolute left-1 w-9 h-7 bg-cyan-500 rounded-full shadow-sm"
                                initial={false}
                                animate={{ x: language === 'en' ? 0 : 36 }}
                                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                            />
                            <div className="relative w-full flex justify-between items-center z-10 px-1.5 text-xs font-bold pointer-events-none">
                                <span className={`transition-colors duration-200 ${language === 'en' ? 'text-slate-950' : 'text-slate-400'}`}>
                                    EN
                                </span>
                                <span className={`transition-colors duration-200 ${language === 'es' ? 'text-slate-950' : 'text-slate-400'}`}>
                                    ES
                                </span>
                            </div>
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center gap-4">
                        <button
                            onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
                            className="relative flex items-center w-20 h-9 bg-slate-900 rounded-full border border-slate-700 p-1 cursor-pointer shadow-inner hover:border-cyan-500/50 transition-colors"
                            title={language === 'en' ? 'Cambiar a Español' : 'Switch to English'}
                        >
                            <motion.div
                                className="absolute left-1 w-9 h-7 bg-cyan-500 rounded-full shadow-sm"
                                initial={false}
                                animate={{ x: language === 'en' ? 0 : 36 }}
                                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                            />
                            <div className="relative w-full flex justify-between items-center z-10 px-1.5 text-xs font-bold pointer-events-none">
                                <span className={`transition-colors duration-200 ${language === 'en' ? 'text-slate-950' : 'text-slate-400'}`}>
                                    EN
                                </span>
                                <span className={`transition-colors duration-200 ${language === 'es' ? 'text-slate-950' : 'text-slate-400'}`}>
                                    ES
                                </span>
                            </div>
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-cyan-400 hover:bg-slate-800 focus:outline-none"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-slate-900/95 backdrop-blur-xl border-b border-slate-800"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`block px-3 py-2 rounded-md text-base font-medium ${activeSection === link.href.substring(1)
                                        ? 'text-cyan-400 bg-slate-800/50'
                                        : 'text-gray-300 hover:text-cyan-400'
                                        }`}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
