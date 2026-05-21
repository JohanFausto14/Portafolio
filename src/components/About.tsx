import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const Counter = ({ end, suffix = "+" }: { end: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isInView) return;
    let current = 0;
    const step = end / 60;
    const timer = setInterval(() => {
      current = Math.min(current + step, end);
      setCount(Math.floor(current));
      if (current >= end) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, end]);
  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const About = () => {
  const { t } = useLanguage();
  return (
    <section id="about" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t.about.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-violet-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative max-w-sm mx-auto"
          >
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 border border-slate-700/80 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/8 via-transparent to-violet-600/8" />
              <span className="relative text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-violet-500 select-none">
                AJ
              </span>
            </div>
            <div className="absolute -z-10 top-4 -left-4 w-full h-full border-2 border-cyan-500/30 rounded-2xl" />
            <div className="absolute -z-10 top-8 -left-8 w-full h-full border-2 border-violet-500/10 rounded-2xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-slate-800/60 p-8 rounded-2xl border border-slate-700/50"
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
                <h4 className="text-3xl font-bold text-cyan-400 mb-1">
                  <Counter end={2} />
                </h4>
                <p className="text-sm text-gray-400">{t.about.yearsExp}</p>
              </div>
              <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700">
                <h4 className="text-3xl font-bold text-violet-400 mb-1">
                  <Counter end={20} />
                </h4>
                <p className="text-sm text-gray-400">
                  {t.about.projectsCompleted}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
