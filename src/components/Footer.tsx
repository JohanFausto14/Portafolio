import { ArrowUp } from "lucide-react";

type Language = "en" | "es";

interface FooterProps {
  language: Language;
}

const translations = {
  en: {
    rights: "Software Development & Frontend Engineering.",
    backToTop: "BACK TO TOP",
  },
  es: {
    rights: "Desarrollo de Software & Ingeniería Frontend.",
    backToTop: "VOLVER ARRIBA",
  },
};

const Footer = ({ language }: FooterProps) => {
  const t = translations[language];

  return (
    <footer className="bg-[#0f0f0f] py-10 border-t border-[#222222]">
      <div className="max-w-[1450px] mx-auto px-6 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-xs font-tech font-bold text-white block uppercase tracking-widest">
            ARI JOHAN ALVARADO FAUSTO
          </span>
          <p className="text-[11px] font-tech text-[#aaaaaa] mt-1">
            &copy; {new Date().getFullYear()} — Ari Johan Alvarado Fausto
          </p>
        </div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center space-x-2 text-xs font-tech text-[#888888] hover:text-white transition-colors cursor-pointer uppercase tracking-widest"
          aria-label={t.backToTop}
        >
          <span>{t.backToTop}</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
