import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, ArrowUpRight, MapPin, Linkedin, Copy, Check } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import InteractiveTitle from "./common/InteractiveTitle";

import { CONTACT_INFO } from "../constants/contact";

import { useLanguage } from "../i18n/LanguageContext";
import { translations } from "../i18n";

const Contact = () => {
  const { displayedLanguage: language } = useLanguage();
  const t = translations[language];
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#0f0f0f] border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title with Letter Illumination & tightened bottom margin */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          viewport={{ once: true, margin: "-40px" }}
          className="text-center mb-8 md:mb-12 transform-gpu"
        >
          <h2 className="text-4xl md:text-6xl font-display font-black tracking-wide mb-3">
            <InteractiveTitle text={t.contact.title} />
          </h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full mb-4" />
          <p className="text-sm sm:text-base font-tech text-[#888888] max-w-xl mx-auto">
            {t.contact.subtitle}
          </p>
        </motion.div>

        {/* Contact Hub: Option C (2 Primary Direct Channels + 3 Secondary/Context Channels) */}
        <div className="max-w-4xl mx-auto space-y-4">
          {/* Row 1: Primary Direct Contact Channels */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Email -> Click to Copy to Clipboard */}
            <button
              type="button"
              onClick={handleCopyEmail}
              title={copied ? t.contact.copied : `${t.contact.email} — ${t.contact.clickToCopy}`}
              aria-label={copied ? t.contact.copied : `${t.contact.email} — ${t.contact.clickToCopy}`}
              className={`w-full text-left flex items-center justify-between p-6 bg-[#151515] border transition-all duration-200 group rounded-2xl cursor-pointer ${
                copied
                  ? "border-emerald-500/60 shadow-[0_0_24px_rgba(16,185,129,0.12)]"
                  : "border-[#222222] hover:border-white"
              }`}
            >
              <div className="flex items-center space-x-4 min-w-0">
                <div
                  className={`p-3 rounded-xl bg-[#0f0f0f] border transition-colors shrink-0 ${
                    copied
                      ? "border-emerald-500/50 text-emerald-400"
                      : "border-[#222222] group-hover:border-white/40 text-[#888888] group-hover:text-white"
                  }`}
                >
                  <Mail className="w-6 h-6" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="text-[10px] font-tech text-[#aaaaaa] font-bold uppercase tracking-wider shrink-0">
                      {t.contact.email}
                    </span>
                    <span
                      className={`text-[10px] font-tech transition-colors truncate ${
                        copied ? "text-emerald-400 font-bold" : "text-[#999999] font-normal"
                      }`}
                    >
                      · {copied ? t.contact.copied : t.contact.clickToCopy}
                    </span>
                  </div>
                  <span className="text-sm sm:text-base font-tech font-bold text-white group-hover:text-white transition-colors truncate block">
                    {CONTACT_INFO.email}
                  </span>
                </div>
              </div>
              <div
                className={`p-2 rounded-lg transition-all shrink-0 ml-3 ${
                  copied
                    ? "text-emerald-400 bg-emerald-500/10"
                    : "text-[#888888] group-hover:text-white group-hover:scale-110"
                }`}
              >
                {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
              </div>
            </button>

            {/* WhatsApp -> Direct Chat */}
            <a
              href={`https://wa.me/${CONTACT_INFO.phoneDigits.replace(/[^\d]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-6 bg-[#151515] border border-[#222222] hover:border-white transition-colors duration-200 group rounded-2xl"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-xl bg-[#0f0f0f] border border-[#222222] group-hover:border-white/40 transition-colors">
                  <FaWhatsapp className="w-6 h-6 text-[#888888] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <span className="text-[10px] font-tech text-[#aaaaaa] font-bold block uppercase tracking-wider">
                    {t.contact.phone}
                  </span>
                  <span className="text-sm sm:text-base font-tech font-bold text-white group-hover:text-white transition-colors">
                    {CONTACT_INFO.phone}
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-[#888888] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-3" />
            </a>
          </div>

          {/* Row 2: Secondary Exploration & Context Channels */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* GitHub */}
            <a
              href={CONTACT_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-5 bg-[#151515] border border-[#222222] hover:border-white transition-colors duration-200 group rounded-2xl"
            >
              <div className="flex items-center space-x-3.5 min-w-0">
                <Github className="w-5 h-5 text-[#888888] group-hover:text-white transition-colors shrink-0" />
                <div className="min-w-0">
                  <span className="text-[10px] font-tech text-[#aaaaaa] font-bold block uppercase tracking-wider">
                    GITHUB
                  </span>
                  <span className="text-xs sm:text-sm font-tech font-bold text-[#888888] group-hover:text-white transition-colors truncate block">
                    {CONTACT_INFO.githubHandle}
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#888888] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-2" />
            </a>

            {/* LinkedIn */}
            <a
              href={CONTACT_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-5 bg-[#151515] border border-[#222222] hover:border-white transition-colors duration-200 group rounded-2xl"
            >
              <div className="flex items-center space-x-3.5 min-w-0">
                <Linkedin className="w-5 h-5 text-[#888888] group-hover:text-white transition-colors shrink-0" />
                <div className="min-w-0">
                  <span className="text-[10px] font-tech text-[#aaaaaa] font-bold block uppercase tracking-wider">
                    LINKEDIN
                  </span>
                  <span className="text-xs sm:text-sm font-tech font-bold text-[#888888] group-hover:text-white transition-colors truncate block">
                    {CONTACT_INFO.linkedinHandle}
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#888888] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-2" />
            </a>

            {/* Location (Informativa, sin flecha, sin cursor pointer, sin hover de enlace) */}
            <div className="flex items-center p-5 bg-[#151515] border border-[#222222] rounded-2xl cursor-default select-none">
              <div className="flex items-center space-x-3.5 min-w-0">
                <MapPin className="w-5 h-5 text-[#666666] shrink-0" />
                <div className="min-w-0">
                  <span className="text-[10px] font-tech text-[#aaaaaa] font-bold block uppercase tracking-wider">
                    {t.contact.location}
                  </span>
                  <span className="text-xs sm:text-sm font-tech font-bold text-[#888888] truncate block">
                    {t.contact.locationVal}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
