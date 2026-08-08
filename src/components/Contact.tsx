import { motion } from "framer-motion";
import { Mail, Github, ArrowUpRight, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

type Language = "en" | "es";

interface ContactProps {
  language: Language;
}

const translations = {
  en: {
    contact: {
      title: "GET IN TOUCH",
      subtitle: "If you think I can bring value to your team or next project, let's talk.",
      email: "Email",
      phone: "Phone",
      location: "Location",
      locationVal: "Guadalajara, Jalisco, Mexico",
      directEmail: "johanalvarado296@gmail.com",
      directPhone: "+52 3320131621",
      github: "https://github.com/JohanFausto14",
      validationAlert: "Please fill in your name and message before sending.",
      form: {
        name: "Name",
        email: "Email",
        subject: "Subject",
        message: "Message",
        placeholders: {
          name: "Your name",
          email: "your.email@example.com",
          subject: "Project subject",
          message: "Describe your project or inquiry...",
        },
      },
    },
  },
  es: {
    contact: {
      title: "CONTACTO",
      subtitle: "Si crees que puedo aportar a tu equipo o a tu próximo proyecto, hablemos.",
      email: "Correo",
      phone: "Teléfono",
      location: "Ubicación",
      locationVal: "Guadalajara, Jalisco, México",
      directEmail: "johanalvarado296@gmail.com",
      directPhone: "+52 3320131621",
      github: "https://github.com/JohanFausto14",
      validationAlert: "Por favor escribe tu nombre y mensaje antes de enviar.",
      form: {
        name: "Nombre",
        email: "Correo Electrónico",
        subject: "Asunto",
        message: "Mensaje",
        placeholders: {
          name: "Tu nombre",
          email: "tu.correo@ejemplo.com",
          subject: "Asunto del proyecto",
          message: "Describe tu proyecto o consulta...",
        },
      },
    },
  },
};

// Interactive letter component for section titles
const InteractiveTitleText = ({ text }: { text: string }) => {
  return (
    <span className="inline-block select-none">
      {text.split("").map((char, index) => {
        if (char === " ") {
          return <span key={index} className="inline-block w-[0.25em]">&nbsp;</span>;
        }
        return (
          <span
            key={index}
            className="inline-block transition-all duration-350 ease-out text-[#666666] hover:text-[#ffffff] hover:scale-105 hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] cursor-default"
          >
            {char}
          </span>
        );
      })}
    </span>
  );
};

const Contact = ({ language }: ContactProps) => {
  const t = translations[language];

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#0f0f0f] border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title with Letter Illumination */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-display font-black tracking-wide mb-3">
            <InteractiveTitleText text={t.contact.title} />
          </h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full mb-4" />
          <p className="text-sm sm:text-base font-tech text-[#888888] max-w-xl mx-auto">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email */}
            <a
              href={`mailto:${t.contact.directEmail}?subject=Contacto%20Portafolio`}
              className="flex items-center justify-between p-5 bg-[#151515] border border-[#222222] hover:border-white transition-all group rounded-2xl"
            >
              <div className="flex items-center space-x-4">
                <Mail className="w-5 h-5 text-[#888888] group-hover:text-white transition-colors" />
                <div>
                  <span className="text-[10px] font-tech text-[#555555] group-hover:text-[#aaaaaa] font-bold block uppercase">{t.contact.email}</span>
                  <span className="text-xs sm:text-sm font-tech font-bold text-[#888888] group-hover:text-white transition-colors">
                    {t.contact.directEmail}
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-[#555555] group-hover:text-white transition-colors" />
            </a>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${t.contact.directPhone.replace(/[^\d]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-5 bg-[#151515] border border-[#222222] hover:border-white transition-all group rounded-2xl"
            >
              <div className="flex items-center space-x-4">
                <FaWhatsapp className="w-5 h-5 text-[#888888] group-hover:text-white transition-colors" />
                <div>
                  <span className="text-[10px] font-tech text-[#555555] group-hover:text-[#aaaaaa] font-bold block uppercase">WHATSAPP</span>
                  <span className="text-xs sm:text-sm font-tech font-bold text-[#888888] group-hover:text-white transition-colors">
                    {t.contact.directPhone}
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-[#555555] group-hover:text-white transition-colors" />
            </a>

            {/* Location */}
            <div className="flex items-center p-5 bg-[#151515] border border-[#222222] rounded-2xl space-x-4">
              <MapPin className="w-5 h-5 text-[#888888]" />
              <div>
                <span className="text-[10px] font-tech text-[#555555] font-bold block uppercase">{t.contact.location}</span>
                <span className="text-xs sm:text-sm font-tech font-bold text-white">
                  {t.contact.locationVal}
                </span>
              </div>
            </div>

            {/* GitHub */}
            <a
              href={t.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-5 bg-[#151515] border border-[#222222] hover:border-white transition-all group rounded-2xl"
            >
              <div className="flex items-center space-x-4">
                <Github className="w-5 h-5 text-[#888888] group-hover:text-white transition-colors" />
                <div>
                  <span className="text-[10px] font-tech text-[#555555] group-hover:text-[#aaaaaa] font-bold block uppercase">GITHUB</span>
                  <span className="text-xs sm:text-sm font-tech font-bold text-[#888888] group-hover:text-white transition-colors">
                    github.com/JohanFausto14
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-[#555555] group-hover:text-white transition-colors" />
            </a>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7 bg-[#151515] border border-[#222222] hover:border-white transition-all duration-300 p-8 sm:p-10 rounded-2xl group">
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-tech text-[#aaaaaa] mb-1.5 font-bold uppercase">
                    {t.contact.form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-[#0f0f0f] border border-[#222222] focus:border-white outline-none text-white text-xs font-tech transition-colors rounded-xl"
                    placeholder={t.contact.form.placeholders.name}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-tech text-[#aaaaaa] mb-1.5 font-bold uppercase">
                    {t.contact.form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-[#0f0f0f] border border-[#222222] focus:border-white outline-none text-white text-xs font-tech transition-colors rounded-xl"
                    placeholder={t.contact.form.placeholders.email}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-xs font-tech text-[#aaaaaa] mb-1.5 font-bold uppercase">
                  {t.contact.form.subject}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 bg-[#0f0f0f] border border-[#222222] focus:border-white outline-none text-white text-xs font-tech transition-colors rounded-xl"
                  placeholder={t.contact.form.placeholders.subject}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-tech text-[#aaaaaa] mb-1.5 font-bold uppercase">
                  {t.contact.form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-[#0f0f0f] border border-[#222222] focus:border-white outline-none text-white text-xs font-tech transition-colors resize-none rounded-xl"
                  placeholder={t.contact.form.placeholders.message}
                />
              </div>
              <div className="pt-3 border-t border-[#222222]">
                <p className="text-xs font-tech text-[#888888] mb-3 text-center uppercase">
                  Enviar mensaje usando / Send using:
                </p>
                <div className="grid grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      const name = (document.getElementById("name") as HTMLInputElement).value;
                      const subject = (document.getElementById("subject") as HTMLInputElement).value;
                      const message = (document.getElementById("message") as HTMLTextAreaElement).value;
                      if (!name || !message) {
                        alert(t.contact.validationAlert);
                        return;
                      }
                      const email = t.contact.directEmail;
                      const link = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)} - Portafolio (${encodeURIComponent(name)})&body=${encodeURIComponent(message)}`;
                      window.open(link, "_blank");
                    }}
                    className="py-2.5 bg-[#0f0f0f] border border-[#333333] hover:border-white text-white font-tech font-bold text-xs uppercase transition-all rounded-full"
                  >
                    Gmail
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      const name = (document.getElementById("name") as HTMLInputElement).value;
                      const subject = (document.getElementById("subject") as HTMLInputElement).value;
                      const message = (document.getElementById("message") as HTMLTextAreaElement).value;
                      if (!name || !message) {
                        alert(t.contact.validationAlert);
                        return;
                      }
                      const email = t.contact.directEmail;
                      const link = `https://outlook.live.com/mail/0/deeplink/compose?to=${email}&subject=${encodeURIComponent(subject)} - Portafolio (${encodeURIComponent(name)})&body=${encodeURIComponent(message)}`;
                      window.open(link, "_blank");
                    }}
                    className="py-2.5 bg-[#0f0f0f] border border-[#333333] hover:border-white text-white font-tech font-bold text-xs uppercase transition-all rounded-full"
                  >
                    Outlook
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      const name = (document.getElementById("name") as HTMLInputElement).value;
                      const subject = (document.getElementById("subject") as HTMLInputElement).value;
                      const message = (document.getElementById("message") as HTMLTextAreaElement).value;
                      if (!name || !message) {
                        alert(t.contact.validationAlert);
                        return;
                      }
                      const email = t.contact.directEmail;
                      const link = `mailto:${email}?subject=${encodeURIComponent(subject)} - Portafolio (${encodeURIComponent(name)})&body=${encodeURIComponent(message)}`;
                      window.location.href = link;
                    }}
                    className="py-2.5 bg-[#0f0f0f] border border-[#333333] hover:border-white text-white font-tech font-bold text-xs uppercase transition-all rounded-full"
                  >
                    Mail App
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
