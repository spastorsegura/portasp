"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bootcamp Desarrollo Web Full Stack con Java",
      school: "Bootcamp especializado",
      year: "2024 - 2025",
      score: "",
      details:
        "Formación intensiva en desarrollo web full stack con Java, frontend moderno, bases de datos y desarrollo de aplicaciones web. Programa de 240 horas.",
    },
    {
      degree: "Ingeniería de Sistemas",
      school: "Universidad Peruana de Ciencias Aplicadas (UPC)",
      year: "2018 - 2023",
      score: "",
      details:
        "Formación en desarrollo de software, bases de datos, arquitectura de sistemas y tecnologías web.",
    },
    {
      degree: "UX/UI Designer",
      school: "Toulouse Lautrec",
      year: "2021",
      score: "",
      details:
        "Especialización en diseño de interfaces, experiencia de usuario y recursos digitales.",
    },
    {
      degree: "Bootcamp Desarrollo Full Stack",
      school: "TECSUP",
      year: "2020 - 2021",
      score: "",
      details:
        "Desarrollo frontend y backend con HTML, CSS, JavaScript, React, Node.js, Express, Python, Django, MySQL y MongoDB.",
    },
    {
      degree: "Design Thinking",
      school: "Crehana",
      year: "2019",
      score: "",
      details:
        "Metodologías centradas en el usuario para innovación y resolución de problemas.",
    },
    {
      degree: "Arte y Diseño Empresarial",
      school: "Universidad San Ignacio de Loyola",
      year: "2011 - 2015",
      score: "",
      details:
        "Formación en diseño gráfico, comunicación visual y desarrollo creativo.",
    },
    {
      degree: "HTML + CSS + jQuery",
      school: "Area 51 Training Center",
      year: "2014",
      score: "",
      details: "Fundamentos de desarrollo y maquetación web.",
    },
    {
      degree: "Diseño Gráfico Digital",
      school: "IPAD - Instituto Peruano de Arte y Diseño",
      year: "2009 - 2010",
      score: "",
      details: "Formación en herramientas y procesos de diseño digital.",
    },
    {
      degree: "Redes y Comunicaciones",
      school: "CIBERTEC",
      year: "2005 - 2009",
      score: "",
      details:
        "Carrera técnica enfocada en redes, conectividad y soporte tecnológico.",
    },
  ];

  return (
    <section
  id="education"
  aria-label="Academic Background"
  className="py-20 bg-[#052F40]/30"
>
  <div className="container mx-auto px-4 md:px-8">

    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-12 text-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3 text-[#EAF6FA]">
        <GraduationCap className="text-[#79C7D9] w-10 h-10" />
        Educación
      </h2>

      <div className="w-20 h-1 bg-[#F2921D] rounded-full mx-auto"></div>
    </motion.div>

    {/* Cards */}
    <div className="max-w-4xl mx-auto space-y-8">

      {education.map((edu, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="bg-[#06384D]/40 p-6 rounded-xl border border-[#0E5A73]/50 flex flex-col md:flex-row gap-6 items-start md:items-center hover:border-[#79C7D9]/30 transition-colors"
        >

          {/* Icon */}
          <div className="flex-shrink-0 bg-[#052F40]/50 p-4 rounded-lg">
            <Award className="w-8 h-8 text-[#79C7D9]" />
          </div>

          {/* Content */}
          <div className="flex-grow">
            <h3 className="text-xl font-bold text-[#EAF6FA] mb-1">
              {edu.degree}
            </h3>

            <p className="text-[#79C7D9] font-medium mb-2">
              {edu.school}
            </p>

            <p className="text-[#A9C7D1] text-sm">
              {edu.details}
            </p>
          </div>

          {/* Meta */}
          <div className="flex-shrink-0 flex items-center gap-2 text-[#A9C7D1] bg-[#052F40]/50 px-4 py-2 rounded-full border border-[#0E5A73]">
            <Calendar className="w-4 h-4 text-[#79C7D9]" />
            <span>{edu.year}</span>

            <span className="w-px h-4 bg-[#0E5A73] mx-2"></span>

            <span className="text-[#F2921D] font-bold">
              {edu.score}
            </span>
          </div>

        </motion.div>
      ))}

    </div>

  </div>
</section>
  );
};

export default Education;
