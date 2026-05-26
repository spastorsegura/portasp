"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Tag, X, Github, Globe } from "lucide-react";

interface Project {
  title: string;
  role: string;
  image: string;

  desc: string;

  fullDesc: string[];

  tags: string[];

  links: {
    label: string;
    url: string;
    type: string;
  }[];
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "Global Tourism Strategy Lab",
      role: "WordPress Frontend Developer",
      image: "/images/img1.jpg",

      desc: "Desarrollo y personalización frontend de una plataforma institucional enfocada en estrategia e innovación para el sector turismo.",

      fullDesc: [
        "Desarrollo de interfaces modernas y responsivas en WordPress.",
        "Personalización visual de componentes y secciones dinámicas.",
        "Optimización de experiencia de usuario y navegación.",
        "Implementación frontend orientada a contenido institucional y estratégico.",
      ],

      tags: ["WordPress", "Elementor", "CSS", "JavaScript"],

      links: [
        {
          label: "Ver proyecto",
          url: "https://globaltourismstrategylab.com/",
          type: "demo",
        },
        {
          label: "GitHub",
          url: "https://github.com/spastorsegura",
          type: "github",
        },
      ],
    },

    {
      title: "Climate Action Accelerator",
      role: "WordPress Frontend Developer",
      image: "/images/img2.jpg",

      desc: "Desarrollo y personalización frontend de una plataforma enfocada en sostenibilidad, acción climática e innovación ambiental.",

      fullDesc: [
        "Desarrollo de interfaces modernas y responsivas en WordPress.",
        "Personalización visual de secciones y componentes dinámicos.",
        "Optimización de experiencia de usuario y rendimiento frontend.",
        "Implementación de layouts enfocados en contenido institucional y proyectos climáticos.",
      ],

      tags: ["WordPress", "Elementor", "CSS", "JavaScript"],

      links: [
        {
          label: "Ver proyecto",
          url: "https://climateacc.org/",
          type: "demo",
        },
        {
          label: "GitHub",
          url: "https://github.com/spastorsegura",
          type: "github",
        },
      ],
    },

    {
      title: "La Ola Cevichera",
      role: "Frontend Developer",
      image: "/images/img3.jpg",

      desc: "Desarrollo de una landing page moderna para una cevichería peruana con enfoque visual y experiencia interactiva.",

      fullDesc: [
        "Desarrollo de una interfaz moderna y totalmente responsiva.",
        "Implementación de diseño visual enfocado en gastronomía peruana.",
        "Optimización de navegación y experiencia de usuario.",
        "Integración de animaciones y secciones dinámicas en frontend.",
      ],

      tags: ["React", "Next.js", "Tailwind CSS", "Frontend"],

      links: [
        {
          label: "Ver proyecto",
          url: "https://ola-cevichera.netlify.app/",
          type: "demo",
        },
        {
          label: "GitHub",
          url: "https://github.com/spastorsegura/la-ola-cevichera",
          type: "github",
        },
      ],
    },

    {
      title: "Code Café",
      role: "Frontend Developer",
      image: "/images/img4.jpg",

      desc: "Landing page moderna para una cafetería de especialidad con enfoque visual, branding y experiencia interactiva.",

      fullDesc: [
        "Desarrollo de una interfaz moderna y totalmente responsiva.",
        "Implementación de diseño visual inspirado en cafeterías de especialidad.",
        "Optimización de experiencia de usuario y navegación.",
        "Integración de animaciones y componentes dinámicos en frontend.",
      ],

      tags: ["React", "Next.js", "Tailwind CSS", "Frontend"],

      links: [
        {
          label: "Ver proyecto",
          url: "https://codecafeperu.netlify.app/",
          type: "demo",
        },
        {
          label: "GitHub",
          url: "https://github.com/spastorsegura/codecafe",
          type: "github",
        },
      ],
    },

    {
      title: "Bebidas & Cócteles App",
      role: "Frontend Developer",
      image: "/images/img5.jpg",

      desc: "Aplicación web interactiva para explorar recetas de bebidas y cócteles con búsqueda dinámica y diseño moderno.",

      fullDesc: [
        "Desarrollo de una interfaz moderna y totalmente responsiva.",
        "Integración de consumo de APIs para obtener recetas dinámicamente.",
        "Implementación de sistema de búsqueda y filtrado interactivo.",
        "Optimización de experiencia de usuario y navegación frontend.",
      ],

      tags: ["React", "API REST", "CSS", "JavaScript"],

      links: [
        {
          label: "Ver proyecto",
          url: "https://bebidasreactsp.netlify.app/",
          type: "demo",
        },
        {
          label: "GitHub",
          url: "https://github.com/spastorsegura/bebidasCoctail",
          type: "github",
        },
      ],
    },
    {
      title: "GuitarLA",
      role: "Frontend Developer",
      image: "/images/img6.jpg",

      desc: "E-commerce frontend moderno para una tienda de guitarras con carrito de compras y experiencia interactiva.",

      fullDesc: [
        "Desarrollo de una interfaz moderna y totalmente responsiva.",
        "Implementación de carrito de compras dinámico.",
        "Optimización de experiencia de usuario y navegación.",
        "Integración de componentes interactivos para catálogo de productos.",
      ],

      tags: ["React", "TypeScript", "CSS", "Frontend"],

      links: [
        {
          label: "Ver proyecto",
          url: "https://guitarlasp.netlify.app/",
          type: "demo",
        },
        {
          label: "GitHub",
          url: "https://github.com/spastorsegura/guitarla",
          type: "github",
        },
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-[#052F40]/30">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#EAF6FA]">
            Proyectos
          </h2>

          <p className="text-[#A9C7D1] max-w-2xl">
            Una selección de proyectos web, experiencias digitales e interfaces
            modernas que he desarrollado.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-[#06384D]/40 rounded-2xl overflow-hidden border border-[#0E5A73]/50 hover:border-[#79C7D9]/50 transition-all flex flex-col"
            >
              {/* Top */}
              <div
                className="h-48 relative flex items-center justify-center p-8 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.image})` }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60" />

                {/* Content */}
                <div className="relative text-center z-10">
                  <h3 className="text-xl font-bold text-[#EAF6FA] mb-2">
                    {project.title}
                  </h3>

                  <span className="text-sm text-[#79C7D9] font-medium">
                    {project.role}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-[#A9C7D1] mb-6 text-sm leading-relaxed">
                  {project.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-1 text-xs px-2 py-1 bg-[#052F40]/40 text-[#A9C7D1] rounded border border-[#0E5A73]"
                    >
                      <Tag className="w-3 h-3 text-[#79C7D9]" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-2 rounded-lg bg-[#052F40]/60 hover:bg-[#F2921D] hover:text-[#052F40] text-[#A9C7D1] text-sm font-medium transition-all flex items-center justify-center gap-2"
                >
                  Ver detalles
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              />

              {/* Modal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative bg-[#06384D] border border-[#0E5A73] rounded-2xl p-6 md:p-8 max-w-2xl w-full shadow-2xl max-h-[85vh] overflow-y-auto"
              >
                {/* Close */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-[#052F40] rounded-full hover:bg-[#0E5A73] transition-colors"
                >
                  <X className="w-5 h-5 text-[#A9C7D1]" />
                </button>

                {/* Title */}
                <h3 className="text-2xl font-bold text-[#EAF6FA] mb-2">
                  {selectedProject.title}
                </h3>

                <p className="text-[#79C7D9] font-medium mb-6">
                  {selectedProject.role}
                </p>

                {/* Details */}
                <div className="space-y-4 mb-8">
                  <h4 className="text-sm font-semibold text-[#A9C7D1] uppercase tracking-wider">
                    Responsabilidades y características principales
                  </h4>

                  <ul className="space-y-3">
                    {selectedProject.fullDesc?.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-[#A9C7D1]"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#F2921D] flex-shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech */}
                <div className="space-y-4">
                  <h4 className="text-sm font-semibold text-[#A9C7D1] uppercase tracking-wider">
                    Tecnologías utilizadas
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-[#052F40]/50 text-[#A9C7D1] rounded-md border border-[#0E5A73] text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                {selectedProject.links && (
                  <div className="space-y-4 mt-8 pt-6 border-t border-[#0E5A73]">
                    <h4 className="text-sm font-semibold text-[#A9C7D1] uppercase tracking-wider">
                      Proyecto y código fuente
                    </h4>

                    <div className="flex flex-wrap gap-3">
                      {selectedProject.links.map((link, i) => (
                        <a
                          key={i}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all text-sm font-medium border
                        ${
                          link.type === "github"
                            ? "bg-[#052F40] hover:bg-[#0E5A73] text-[#EAF6FA] border-[#0E5A73]"
                            : "bg-[#F2921D]/10 hover:bg-[#F2921D]/20 text-[#F2921D] border-[#F2921D]/20"
                        }`}
                        >
                          {link.type === "github" ? (
                            <Github className="w-4 h-4 text-[#79C7D9]" />
                          ) : (
                            <Globe className="w-4 h-4 text-[#F2921D]" />
                          )}

                          {link.label}

                          <ExternalLink className="w-4 h-4" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
