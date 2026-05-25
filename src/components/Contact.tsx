"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      aria-label="Contact Information"
      className="py-20 relative overflow-hidden bg-[#052F40]/50"
    >
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#79C7D9]/10 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-4 md:px-8 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#EAF6FA]">
            Contacto
          </h2>

          <p className="text-[#A9C7D1] text-lg">
            Actualmente estoy disponible para nuevas oportunidades. Ya sea que
            tengas una consulta o simplemente quieras saludar, haré lo posible
            por responderte pronto.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {/* Email */}
          <div className="bg-[#06384D]/40 p-8 rounded-2xl border border-[#0E5A73]/50 hover:border-[#79C7D9]/50 transition-all group flex flex-col items-center">
            <div className="p-4 bg-[#052F40]/50 rounded-full text-[#79C7D9] mb-4 group-hover:scale-110 transition-transform">
              <Mail className="w-8 h-8 text-[#79C7D9]" />
            </div>

            <h3 className="text-lg font-semibold text-[#EAF6FA] mb-2">Email</h3>

            <a
              href="mailto:sergio.cybert@gmail.com"
              className="text-[#A9C7D1] hover:text-[#79C7D9] transition-colors break-all"
            >
              sergio.cybert@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="bg-[#06384D]/40 p-8 rounded-2xl border border-[#0E5A73]/50 hover:border-[#79C7D9]/50 transition-all group flex flex-col items-center">
            <div className="p-4 bg-[#052F40]/50 rounded-full text-[#F2921D] mb-4 group-hover:scale-110 transition-transform">
              <Phone className="w-8 h-8 text-[#F2921D]" />
            </div>

            <h3 className="text-lg font-semibold text-[#EAF6FA] mb-2">Tel.</h3>

            <a
              href="tel:+91976317906"
              className="text-[#A9C7D1] hover:text-[#79C7D9] transition-colors"
            >
              +91 976317906
            </a>
          </div>

          {/* Location */}
          <div className="bg-[#06384D]/40 p-8 rounded-2xl border border-[#0E5A73]/50 hover:border-[#79C7D9]/50 transition-all group flex flex-col items-center">
            <div className="p-4 bg-[#052F40]/50 rounded-full text-[#79C7D9] mb-4 group-hover:scale-110 transition-transform">
              <MapPin className="w-8 h-8 text-[#79C7D9]" />
            </div>

            <h3 className="text-lg font-semibold text-[#EAF6FA] mb-2">
              Dirección
            </h3>

            <a
              href="https://www.google.com/maps?q=San+Borja,+Lima,+Peru"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A9C7D1] hover:text-[#79C7D9] transition-colors"
            >
              San Borja, Lima
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
