"use client";

import { motion } from "framer-motion";
import { Download, Github, Linkedin, Package } from "lucide-react";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section
      id="home"
      aria-label="Hero — Introduction"
      className="min-h-screen flex items-center pt-20 relative overflow-hidden bg-[#052F40]"
    >
      {/* Background Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#79C7D9]/20 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-[#F2921D]/20 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="inline-block px-3 py-1 mb-4 border border-[#79C7D9]/30 rounded-full bg-[#79C7D9]/10 text-[#79C7D9] text-sm font-medium">
            Disponible a oportunidades
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-[#EAF6FA]">
            Hola, soy <br />
            <span className="text-[#79C7D9]">Sergio Pastor</span>
          </h1>

          {/* Description */}
          <p className="text-xl text-[#A9C7D1] mb-8 max-w-lg leading-relaxed">
            Frontend Developer apasionado por construir experiencias web
            modernas, limpias e interactivas utilizando tecnologías frontend
            actuales.{" "}
            <span className="text-[#79C7D9] font-semibold">React</span>,{" "}
            <span className="text-[#79C7D9] font-semibold">Next.js</span> &{" "}
            <span className="text-[#F2921D] font-semibold">
              tecnologías frontend
            </span>
            .
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mb-10">
            <Link
              to="projects"
              smooth={true}
              offset={-100}
              className="px-8 py-3 bg-[#F2921D] hover:bg-[#F2762E] text-[#052F40] rounded-lg font-medium transition-all shadow-lg shadow-[#F2921D]/20 cursor-pointer"
            >
              Ver trabajos
            </Link>

            <a
              href="/CVSergioPastor.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-[#79C7D9]/30 hover:border-[#79C7D9] hover:text-[#79C7D9] text-[#A9C7D1] rounded-lg font-medium transition-all flex items-center gap-2 group"
            >
              <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              Ver CV
            </a>
          </div>

          {/* Socials */}
          <div className="flex gap-6" role="list" aria-label="Redes sociales">
            {[
              {
                icon: <Github aria-hidden="true" />,
                href: "https://github.com/spastorsegura",
                label: "GitHub de Sergio Pastor",
              },
              {
                icon: <Linkedin aria-hidden="true" />,
                href: "https://www.linkedin.com/in/sergio-pastor-segura-b5211a19",
                label: "LinkedIn de Sergio Pastor",
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer me"
                aria-label={social.label}
                role="listitem"
                className="p-3 bg-[#06384D]/50 hover:bg-[#79C7D9]/20 hover:text-[#79C7D9] text-[#A9C7D1] rounded-full transition-all border border-[#0E5A73]/50 hover:border-[#79C7D9]/50"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="w-full h-[500px] border border-[#0E5A73] bg-[#06384D]/50 rounded-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#79C7D9]/10 to-transparent opacity-50" />

            {/* Top bar */}
            <div className="flex items-center gap-2 p-4 border-b border-[#0E5A73]">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <div className="ml-4 text-xs text-[#A9C7D1] font-mono">
                Developer.tsx
              </div>
            </div>

            {/* Code */}
            <div className="p-6 font-mono text-sm space-y-4 text-[#A9C7D1]">
              <div>
                <span className="text-[#79C7D9]">const</span>{" "}
                <span className="text-[#EAF6FA]">developer</span> ={" "}
                <span className="text-[#F2921D]">{"{"}</span>
              </div>

              <div className="pl-6">
                <span className="text-[#A9C7D1]">nombre:</span>{" "}
                <span className="text-[#79C7D9]">'Sergio Pastor'</span>,
              </div>

              <div className="pl-6">
                <span className="text-[#A9C7D1]">rol:</span>{" "}
                <span className="text-[#79C7D9]">'Frontend Developer'</span>,
              </div>

              <div className="pl-6">
                <span className="text-[#A9C7D1]">experiencia:</span>{" "}
                <span className="text-[#F2921D]">3+</span>,
              </div>

              <div className="pl-6">
                <span className="text-[#A9C7D1]">habilidades:</span>{" "}
                <span className="text-[#F2921D]">
                  ['React','JavaScript','Zustand','Node.js','Express',
                  'TypeScript','TailwindCSS','MongoDB','PostgreSQL']
                </span>
                ,
              </div>

              <div className="pl-6">
                <span className="text-[#A9C7D1]">interes:</span>{" "}
                <span className="text-[#79C7D9]">
                  'Explorando nuevas tecnologías frontend y experiencias
                  interactivas.'
                </span>
              </div>

              <div>
                <span className="text-[#F2921D]">{"}"}</span>;
              </div>

              <div className="pt-4 animate-pulse">
                <span className="text-[#79C7D9]">developer</span>.
                <span className="text-[#F2921D]">
                  construyendoInterfacesAtractivas
                </span>
                ();
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
