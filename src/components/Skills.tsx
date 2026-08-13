import { motion } from "framer-motion";
import { Code, Server, Database, Wrench } from "lucide-react";

type Language = "en" | "es";

interface SkillsProps {
  language: Language;
}

const translations = {
  en: {
    skills: {
      title: "TECHNOLOGIES & CAPABILITIES",
      techLabel: "Technologies:",
      categories: [
        {
          name: "Interfaces",
          icon: Code,
          capability: "Development of responsive web and mobile applications, reusable components, and user-centered experiences.",
          skills: ["React", "Next.js", "React Native", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
        },
        {
          name: "Backend & APIs",
          icon: Server,
          capability: "Design of business logic, authentication, and REST services for enterprise and educational applications.",
          skills: ["Node.js", "Express", "NestJS", "PHP", "JWT", "REST API"],
        },
        {
          name: "Data",
          icon: Database,
          capability: "Data modeling, queries, and persistence across relational and NoSQL databases.",
          skills: ["PostgreSQL", "MySQL", "SQL Server", "MongoDB", "Prisma", "TypeORM"],
        },
        {
          name: "Infrastructure & Tools",
          icon: Wrench,
          capability: "Version control, deployment, and development environment setup.",
          skills: ["Git", "GitHub", "Docker", "Vercel", "Render", "Postman", "Android Studio", "VS Code"],
        },
      ],
    },
  },
  es: {
    skills: {
      title: "TECNOLOGÍAS Y CAPACIDADES",
      techLabel: "Tecnologías:",
      categories: [
        {
          name: "Interfaces",
          icon: Code,
          capability: "Desarrollo de aplicaciones web y móviles responsivas, componentes reutilizables y experiencias centradas en el usuario.",
          skills: ["React", "Next.js", "React Native", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
        },
        {
          name: "Backend y APIs",
          icon: Server,
          capability: "Diseño de lógica de negocio, autenticación y servicios REST para aplicaciones empresariales y educativas.",
          skills: ["Node.js", "Express", "NestJS", "PHP", "JWT", "REST API"],
        },
        {
          name: "Datos",
          icon: Database,
          capability: "Modelado de información, consultas y persistencia en bases de datos relacionales y NoSQL.",
          skills: ["PostgreSQL", "MySQL", "SQL Server", "MongoDB", "Prisma", "TypeORM"],
        },
        {
          name: "Infraestructura y herramientas",
          icon: Wrench,
          capability: "Control de versiones, despliegue y entorno de desarrollo.",
          skills: ["Git", "GitHub", "Docker", "Vercel", "Render", "Postman", "Android Studio", "VS Code"],
        },
      ],
    },
  },
};

// Interactive letter component for section titles
const InteractiveTitleText = ({ text }: { text: string }) => {
  const words = text.split(" ");
  return (
    <span className="inline-block select-none">
      {words.map((word, wIdx) => (
        <span key={wIdx} className="inline-block whitespace-nowrap">
          {word.split("").map((char, cIdx) => (
            <span
              key={cIdx}
              className="inline-block transition-all duration-350 ease-out text-[#666666] hover:text-[#ffffff] hover:scale-105 hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] cursor-default"
            >
              {char}
            </span>
          ))}
          {wIdx < words.length - 1 && (
            <span className="inline-block w-[0.25em]">&nbsp;</span>
          )}
        </span>
      ))}
    </span>
  );
};

const Skills = ({ language }: SkillsProps) => {
  const t = translations[language];

  return (
    <section id="skills" className="py-20 md:py-28 bg-[#0f0f0f] border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title with Letter Illumination */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-black tracking-wide mb-3 max-w-4xl mx-auto">
            <InteractiveTitleText text={t.skills.title} />
          </h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full" />
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.skills.categories.map((cat, idx) => {
            const IconComp = cat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#151515] p-6 sm:p-8 rounded-3xl border border-[#222222] hover:border-white transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  {/* Category Title Header */}
                  <div className="flex items-center space-x-3 mb-4 pb-3 border-b border-[#262626]">
                    <div className="p-2.5 rounded-xl bg-[#0f0f0f] border border-[#222222] group-hover:border-[#444444] transition-colors">
                      <IconComp className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-display font-black text-white uppercase tracking-wide">
                      {cat.name}
                    </h3>
                  </div>

                  {/* Capability Statement */}
                  <p className="text-xs font-tech text-[#cccccc] leading-relaxed mb-6">
                    {cat.capability}
                  </p>
                </div>

                {/* Technologies List */}
                <div className="pt-4 border-t border-[#222222]">
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-[#0f0f0f] border border-[#262626] text-white font-tech font-semibold text-[11px] rounded-full hover:border-[#444444] transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
