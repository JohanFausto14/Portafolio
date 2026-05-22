import { motion } from "framer-motion";
import { Database, Layout, Terminal, Users } from "lucide-react";
import { FaAws, FaDatabase } from "react-icons/fa";

type Language = "en" | "es";

interface SkillsProps {
  language: Language;
}

const translations = {
  en: {
    skills: {
      title: "Technical Skills",
      subtitle:
        "A comprehensive toolkit for building modern, scalable web and mobile applications.",
      categories: {
        frontend: "Frontend Development",
        backend: "Backend Development",
        devops: "DevOps & Tools",
        management: "Soft Skills",
      },
      lists: {
        frontend: [
          "React",
          "Next.js",
          "TypeScript",
          "JavaScript",
          "React Native",
          "Tailwind CSS",
          "HTML/CSS",
          "Responsive Design",
          "UI/UX",
          "Performance Optimization",
        ],
        backend: [
          "Node.js",
          "NestJS",
          "Express.js",
          "PHP",
          "REST APIs",
          "PostgreSQL",
          "MongoDB",
          "MySQL",
          "SQL Server",
        ],
        devops: [
          "Git",
          "GitHub",
          "Linux",
          "Postman",
          "Android Studio",
          "Vercel",
          "Render",
          "Docker",
          "AWS",
        ],
        management: [
          "Leadership",
          "Problem Solving",
          "Adaptability",
          "Communication",
          "Teamwork",
        ],
      },
    },
  },
  es: {
    skills: {
      title: "Habilidades Técnicas",
      categories: {
        frontend: "Desarrollo Frontend",
        backend: "Desarrollo Backend",
        devops: "DevOps y Herramientas",
        management: "Habilidades Blandas",
      },
      lists: {
        frontend: [
          "React",
          "Next.js",
          "TypeScript",
          "JavaScript",
          "React Native",
          "Tailwind CSS",
          "HTML/CSS",
          "Responsive Design",
          "UI/UX",
          "Optimización de Rendimiento",
        ],
        backend: [
          "Node.js",
          "NestJS",
          "Express.js",
          "PHP",
          "REST APIs",
          "PostgreSQL",
          "MongoDB",
          "MySQL",
          "SQL Server",
        ],
        devops: [
          "Git",
          "GitHub",
          "Linux",
          "Postman",
          "Android Studio",
          "Vercel",
          "Render",
          "Docker",
          "AWS",
        ],
        management: [
          "Liderazgo",
          "Resolución de Problemas",
          "Adaptabilidad",
          "Comunicación",
          "Trabajo en Equipo",
        ],
      },
    },
  },
};
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiNodedotjs,
  SiNestjs,
  SiExpress,
  SiPhp,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiLinux,
  SiPostman,
  SiAndroidstudio,
  SiVercel,
  SiRender,
  SiDocker,
} from "react-icons/si";

const getSkillIcon = (name: string) => {
  const props = (color?: string, alpha: string = "60") => ({
    className: "w-5 h-5",
    color,
    style: color ? { filter: `drop-shadow(0 0 6px ${color}${alpha})` } : undefined
  });
  switch (name.toLowerCase()) {
    case "react": return <SiReact {...props("#61DAFB")} />;
    case "next.js": return <SiNextdotjs {...props("#cbd5e1", "30")} />;
    case "typescript": return <SiTypescript {...props("#629CE0")} />;
    case "javascript": return <SiJavascript {...props("#F7DF1E")} />;
    case "react native": return <SiReact {...props("#61DAFB")} />;
    case "tailwind css": return <SiTailwindcss {...props("#06B6D4")} />;
    case "html/css": return <SiHtml5 {...props("#E34F26")} />;
    case "node.js": return <SiNodedotjs {...props("#53b453")} />;
    case "nestjs": return <SiNestjs {...props("#E0234E")} />;
    case "express.js": return <SiExpress {...props("#cbd5e1", "30")} />;
    case "php": return <SiPhp {...props("#A0A5D6")} />;
    case "postgresql": return <SiPostgresql {...props("#7DA2F9")} />;
    case "mongodb": return <SiMongodb {...props("#47A248")} />;
    case "mysql": return <SiMysql {...props("#75B0D6")} />;
    case "sql server": return <FaDatabase {...props("#CC292B")} />;
    case "git": return <SiGit {...props("#F05032")} />;
    case "github": return <SiGithub {...props("#cbd5e1", "30")} />;
    case "linux": return <SiLinux {...props("#FCC624")} />;
    case "postman": return <SiPostman {...props("#FF6C37")} />;
    case "android studio": return <SiAndroidstudio {...props("#3DDC84")} />;
    case "vercel": return <SiVercel {...props("#cbd5e1", "30")} />;
    case "render": return <SiRender {...props("#cbd5e1", "30")} />;
    case "docker": return <SiDocker {...props("#65B2F4")} />;
    case "aws": return <FaAws {...props("#FF9900")} />;
    default: return null;
  }
};

const categoryStyles = [
  {
    iconColor: "text-cyan-400",
    iconHover: "group-hover:bg-cyan-500/10",
    chipClass:
      "px-3 py-1.5 text-sm font-medium text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 rounded-lg",
    borderHover: "hover:border-cyan-500/50",
  },
  {
    iconColor: "text-violet-400",
    iconHover: "group-hover:bg-violet-500/10",
    chipClass:
      "px-3 py-1.5 text-sm font-medium text-violet-400 bg-violet-500/10 border border-violet-500/20 rounded-lg",
    borderHover: "hover:border-violet-500/50",
  },
  {
    iconColor: "text-emerald-400",
    iconHover: "group-hover:bg-emerald-500/10",
    chipClass:
      "px-3 py-1.5 text-sm font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-lg",
    borderHover: "hover:border-emerald-500/50",
  },
  {
    iconColor: "text-amber-400",
    iconHover: "group-hover:bg-amber-500/10",
    chipClass:
      "px-3 py-1.5 text-sm font-medium text-amber-400 bg-amber-500/10 border border-amber-500/20 rounded-lg",
    borderHover: "hover:border-amber-500/50",
  },
];

const Skills = ({ language }: SkillsProps) => {
  const t = translations[language];

  const skills = [
    {
      category: t.skills.categories.frontend,
      icon: <Layout className="w-6 h-6" />,
      items: t.skills.lists?.frontend || [],
    },
    {
      category: t.skills.categories.backend,
      icon: <Database className="w-6 h-6" />,
      items: t.skills.lists?.backend || [],
    },
    {
      category: t.skills.categories.devops,
      icon: <Terminal className="w-6 h-6" />,
      items: t.skills.lists?.devops || [],
    },
    {
      category: t.skills.categories.management,
      icon: <Users className="w-6 h-6" />,
      items: t.skills.lists?.management || [],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t.skills.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-violet-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => {
            const style = categoryStyles[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true, margin: "-50px" }}
                className={`bg-slate-900 p-6 rounded-xl border border-slate-800 ${style.borderHover} transition-colors duration-300 group`}
              >
                <div
                  className={`w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center ${style.iconColor} mb-6 ${style.iconHover} transition-colors duration-300`}
                >
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {skill.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skill.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      {getSkillIcon(item)}
                      <span className={style.chipClass}>
                        {item}
                      </span>
                    </div>
                  ))}
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
