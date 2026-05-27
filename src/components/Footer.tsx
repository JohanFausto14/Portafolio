import { Code2, Github, Mail, ArrowUp } from "lucide-react";

type Language = "en" | "es";

interface FooterProps {
  language: Language;
}

const translations = {
  en: {
    personal: {
      email: "johanalvarado296@gmail.com",
      github: "https://github.com/JohanFausto14",
    },
    footer: {
      rights: "All rights reserved.",
      backToTop: "Back to top",
    },
  },
  es: {
    personal: {
      email: "johanalvarado296@gmail.com",
      github: "https://github.com/JohanFausto14",
    },
    footer: {
      rights: "Todos los derechos reservados.",
      backToTop: "Volver arriba",
    },
  },
};

const Footer = ({ language }: FooterProps) => {
  const t = translations[language];

  return (
    <footer className="bg-slate-950 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo & Copyright */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2 text-cyan-400 font-bold text-lg">
            <Code2 className="w-5 h-5" />
            <span>Ari Johan</span>
          </div>
          <p className="text-gray-400 text-xs">
            &copy; {new Date().getFullYear()} Ari Johan Alvarado Fausto. {t.footer.rights}
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href={t.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${t.personal.email}`}
            aria-label="Email"
            className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        {/* Back to top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 text-xs font-medium transition-colors group hidden md:flex"
        >
          {t.footer.backToTop}
          <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
