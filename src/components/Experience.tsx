"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Calendar, ChevronDown, ChevronUp } from "lucide-react";

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0); // First item expanded by default

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const jobs = [
    {
      role: "Webmaster | Diseño y gestión de plataformas web",
      company: "Gran Teatro Nacional",
      period: "Ene 2026 - Actualidad",
      tech: ["Drupal", "HTML", "CSS", "JavaScript"],
      points: [
        "Gestión y mantenimiento de plataformas web institucionales.",
        "Implementación y actualización de contenidos digitales en Drupal.",
        "Maquetación y ajustes frontend utilizando HTML, CSS y JavaScript.",
        "Diseño y optimización de interfaces para campañas y eventos culturales.",
        "Coordinación con equipos de sistemas y comunicación digital.",
        "Análisis de métricas web y comportamiento de usuarios.",
      ],
    },
    {
      role: "Frontend Developer & WordPress Freelancer",
      company: "Freelance",
      period: "2020 - Actualidad",
      tech: ["React", "Next.js", "WordPress", "JavaScript", "Figma"],
      points: [
        "Desarrollo de sitios web modernos y landing pages personalizadas.",
        "Implementación de interfaces responsivas enfocadas en experiencia de usuario.",
        "Creación y personalización de sitios WordPress.",
        "Optimización visual, rendimiento y accesibilidad web.",
        "Trabajo con clientes en proyectos de diseño y desarrollo frontend.",
      ],
    },
    {
      role: "Diseñador Web",
      company: "Bicentenario Perú",
      period: "Jun 2021 - Jun 2025",
      tech: ["JavaScript", "Hotjar", "WordPress", "HTML", "CSS"],
      points: [
        "Diseño y desarrollo de plataformas y contenidos digitales.",
        "Implementación de interfaces web para campañas institucionales.",
        "Optimización de experiencia de usuario mediante análisis y métricas.",
        "Gestión y actualización de sitios web institucionales.",
      ],
    },
    {
      role: "Diseñador Gráfico Sr.",
      company: "Universidad San Ignacio de Loyola",
      period: "May 2018 - May 2021",
      tech: ["Photoshop", "WordPress", "Diseño UI"],
      points: [
        "Diseño y diagramación de contenidos universitarios e institucionales.",
        "Desarrollo de piezas digitales y material gráfico.",
        "Soporte en gestión de plataformas web y contenido visual.",
      ],
    },
    {
      role: "Diseñador Gráfico Jr.",
      company: "Universidad San Ignacio de Loyola",
      period: "Abr 2016 - Abr 2018",
      tech: ["WordPress", "Diseño gráfico"],
      points: [
        "Creación de piezas gráficas para comunicación institucional.",
        "Apoyo en diseño digital y contenido web.",
      ],
    },
    {
      role: "Diseñador Gráfico",
      company: "MADISON Experience Marketing",
      period: "Sep 2015 - Mar 2016",
      tech: ["Diseño gráfico", "Branding"],
      points: [
        "Desarrollo de materiales visuales para campañas y activaciones de marca.",
        "Diseño de piezas gráficas publicitarias.",
      ],
    },
    {
      role: "Diseñador Gráfico",
      company: "FRAVATEL",
      period: "2010 - 2011",
      tech: ["Diseño web", "Mantenimiento web"],
      points: [
        "Creación de piezas web y soporte en mantenimiento de plataformas digitales.",
      ],
    },
  ];

  return (
    <section
  id="experience"
  aria-label="Professional Experience"
  className="py-20 relative"
>
  <div className="container mx-auto px-4 md:px-8">

    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-12"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#EAF6FA]">
        Experiencia
      </h2>
      <div className="w-20 h-1 bg-[#F2921D] rounded-full"></div>
    </motion.div>

    {/* Timeline */}
    <div className="relative border-l-2 border-[#0E5A73] ml-4 md:ml-10 space-y-8">

      {jobs.map((job, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative pl-8 md:pl-12"
        >

          {/* Dot */}
          <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#052F40] border-2 border-[#79C7D9] z-10" />

          {/* Card */}
          <div
            className="bg-[#06384D]/30 rounded-xl border border-[#0E5A73]/50 p-6 cursor-pointer hover:bg-[#06384D]/50 transition-colors"
            onClick={() => toggleExpand(index)}
          >

            {/* Header row */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">

              <div>
                <h3 className="text-xl font-bold text-[#EAF6FA]">
                  {job.role}
                </h3>
                <p className="text-[#79C7D9] font-medium text-lg">
                  {job.company}
                </p>
              </div>

              <div className="flex items-center gap-2 text-sm text-[#A9C7D1] bg-[#052F40]/50 px-3 py-1.5 rounded-full whitespace-nowrap">
                <Calendar className="w-4 h-4 text-[#79C7D9]" />
                {job.period}
              </div>

            </div>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {job.tech.map((t, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-1 rounded-full border border-[#0E5A73] bg-[#052F40]/40 text-[#A9C7D1]"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Toggle */}
            <div className="flex items-center gap-2 text-sm text-[#A9C7D1] font-medium mt-2">
              {expandedIndex === index ? (
                <>
                  Ocultar responsabilidades
                  <ChevronUp className="w-4 h-4 text-[#79C7D9]" />
                </>
              ) : (
                <>
                  Ver responsabilidades
                  <ChevronDown className="w-4 h-4 text-[#79C7D9]" />
                </>
              )}
            </div>

            {/* Expanded content */}
            <AnimatePresence>
              {expandedIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <ul className="mt-4 space-y-3 pt-4 border-t border-[#0E5A73]/50">

                    {job.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-[#A9C7D1] text-sm leading-relaxed"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#F2921D] flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}

                  </ul>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </motion.div>
      ))}

    </div>
  </div>
</section>
  );
};

export default Experience;
