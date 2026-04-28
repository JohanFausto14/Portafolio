import { motion } from 'framer-motion';
import { Database, Layout, Terminal, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Skills = () => {
    const { t } = useLanguage();

    const skills = [
        {
            category: t.skills.categories.frontend,
            icon: <Layout className="w-6 h-6" />,
            items: t.skills.lists?.frontend || []
        },
        {
            category: t.skills.categories.backend,
            icon: <Database className="w-6 h-6" />,
            items: t.skills.lists?.backend || []
        },
        {
            category: t.skills.categories.devops,
            icon: <Terminal className="w-6 h-6" />,
            items: t.skills.lists?.devops || []
        },
        {
            category: t.skills.categories.management,
            icon: <Users className="w-6 h-6" />,
            items: t.skills.lists?.management || []
        }
    ];

    return (
        <section id="skills" className="py-20 bg-slate-950 min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.skills.title}</h2>
                    <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full" />
                    <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                        {t.skills.subtitle}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-cyan-500/50 transition-colors duration-300 group"
                        >
                            <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-cyan-400 mb-6 group-hover:bg-cyan-500/10 transition-colors duration-300">
                                {skill.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-4">{skill.category}</h3>
                            <ul className="space-y-2">
                                {skill.items.map((item, idx) => (
                                    <li key={idx} className="flex items-center text-gray-400">
                                        <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
