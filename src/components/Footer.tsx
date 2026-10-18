import { ArrowUp } from "lucide-react";

import { useLanguage } from "../i18n/LanguageContext";
import { translations } from "../i18n";

const Footer = () => {
  const { displayedLanguage: language } = useLanguage();
  const t = translations[language].footer;

  return (
    <footer className="bg-[#0f0f0f] py-6 border-t border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-xs font-tech font-bold text-white block uppercase tracking-widest">
            ARI JOHAN ALVARADO FAUSTO
          </span>
          <p className="text-[11px] font-tech text-[#aaaaaa] mt-1">
            {t.descriptor} · &copy; {new Date().getFullYear()}
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
