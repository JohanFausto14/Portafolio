import { motion } from "framer-motion";
import { Github, Mail, Phone } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  return (
    <section id="contact" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t.contact.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-violet-600 mx-auto rounded-full" />
          <p className="mt-4 text-gray-400">{t.contact.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="self-center"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              {t.contact.infoTitle}
            </h3>
            <div className="space-y-6">
              {/* Email */}
              <a
                href={`mailto:${t.personal?.email}`}
                className="flex items-center gap-4 bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 hover:border-cyan-500/30 transition-colors group cursor-pointer"
              >
                <div className="p-3 bg-slate-800 rounded-lg text-cyan-400 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white">
                    {t.contact.email}
                  </h4>
                  <p className="text-gray-400 group-hover:text-cyan-400 transition-colors">
                    {t.personal?.email}
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${t.personal?.phone?.replace(/[^\d+]/g, "")}`}
                className="flex items-center gap-4 bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 hover:border-cyan-500/30 transition-colors group cursor-pointer"
              >
                <div className="p-3 bg-slate-800 rounded-lg text-cyan-400 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white">
                    {t.contact.phone}
                  </h4>
                  <p className="text-gray-400 group-hover:text-cyan-400 transition-colors">
                    {t.personal?.phone}
                  </p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href={t.personal?.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 hover:border-cyan-500/30 transition-colors group cursor-pointer"
              >
                <div className="p-3 bg-slate-800 rounded-lg text-gray-400 group-hover:text-white group-hover:scale-110 transition-all">
                  <Github className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white">GitHub</h4>
                  <p className="text-gray-400 group-hover:text-cyan-400 transition-colors">
                    {t.personal?.github?.replace("https://", "")}
                  </p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    {t.contact.form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none text-white transition-all"
                    placeholder={t.contact.form.placeholders.name}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    {t.contact.form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none text-white transition-all"
                    placeholder={t.contact.form.placeholders.email}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  {t.contact.form.subject}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none text-white transition-all"
                  placeholder={t.contact.form.placeholders.subject}
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  {t.contact.form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none text-white transition-all resize-none"
                  placeholder={t.contact.form.placeholders.message}
                />
              </div>
              <div className="pt-2 border-t border-slate-800">
                <p className="text-sm text-gray-400 mt-4 mb-3 text-center">
                  Enviar usando / Send using:
                </p>
                <div className="grid grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      const name = (
                        document.getElementById("name") as HTMLInputElement
                      ).value;
                      const subject = (
                        document.getElementById("subject") as HTMLInputElement
                      ).value;
                      const message = (
                        document.getElementById(
                          "message",
                        ) as HTMLTextAreaElement
                      ).value;
                      if (!name || !message) {
                        alert("Por favor llena tu nombre y mensaje.");
                        return;
                      }
                      const email =
                        t.personal?.email || "johanalvarado296@gmail.com";
                      const link = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)} - Portafolio (${encodeURIComponent(name)})&body=${encodeURIComponent(message)}`;
                      window.open(link, "_blank");
                    }}
                    className="py-2.5 bg-slate-800 text-white text-sm font-medium rounded-lg hover:bg-red-600/80 transition-colors border border-slate-700 hover:border-red-500"
                  >
                    Gmail
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      const name = (
                        document.getElementById("name") as HTMLInputElement
                      ).value;
                      const subject = (
                        document.getElementById("subject") as HTMLInputElement
                      ).value;
                      const message = (
                        document.getElementById(
                          "message",
                        ) as HTMLTextAreaElement
                      ).value;
                      if (!name || !message) {
                        alert("Por favor llena tu nombre y mensaje.");
                        return;
                      }
                      const email =
                        t.personal?.email || "johanalvarado296@gmail.com";
                      const link = `https://outlook.live.com/mail/0/deeplink/compose?to=${email}&subject=${encodeURIComponent(subject)} - Portafolio (${encodeURIComponent(name)})&body=${encodeURIComponent(message)}`;
                      window.open(link, "_blank");
                    }}
                    className="py-2.5 bg-slate-800 text-white text-sm font-medium rounded-lg hover:bg-blue-600/80 transition-colors border border-slate-700 hover:border-blue-500"
                  >
                    Outlook
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      const name = (
                        document.getElementById("name") as HTMLInputElement
                      ).value;
                      const subject = (
                        document.getElementById("subject") as HTMLInputElement
                      ).value;
                      const message = (
                        document.getElementById(
                          "message",
                        ) as HTMLTextAreaElement
                      ).value;
                      if (!name || !message) {
                        alert("Por favor llena tu nombre y mensaje.");
                        return;
                      }
                      const email =
                        t.personal?.email || "johanalvarado296@gmail.com";
                      const link = `mailto:${email}?subject=${encodeURIComponent(subject)} - Portafolio (${encodeURIComponent(name)})&body=${encodeURIComponent(message)}`;
                      window.location.href = link;
                    }}
                    className="py-2.5 bg-slate-800 text-white text-sm font-medium rounded-lg hover:bg-slate-600 transition-colors border border-slate-700"
                  >
                    Mail App
                  </button>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
