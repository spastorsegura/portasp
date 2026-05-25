"use client";

import { motion } from "framer-motion";
import { Database, Globe, Server, Cpu } from "lucide-react";

const About = () => {
  const skills = [
    {
      category: "Frontend Development",
      icon: <Globe className="w-6 h-6 text-[#79C7D9]" />,
      items: [
        "React.js",
        "Next.js",
        "Astro",
        "TypeScript",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Bootstrap",
        "Framer Motion",
      ],
    },

    {
      category: "Backend & APIs",
      icon: <Server className="w-6 h-6 text-[#79C7D9]" />,
      items: ["Node.js", "Express.js", "REST APIs", "Java", "Firebase"],
    },

    {
      category: "Base de Datos & CMS",
      icon: <Database className="w-6 h-6 text-[#79C7D9]" />,
      items: ["MongoDB", "MySQL", "PostgreSQL", "SQL", "WordPress", "Drupal"],
    },

    {
      category: "Herramientas & Diseño",
      icon: <Cpu className="w-6 h-6 text-[#79C7D9]" />,
      items: [
        "Git/GitHub",
        "Figma",
        "Adobe XD",
        "Postman",
        "VS Code",
        "Responsive Design",
        "UI/UX Design",
        "Performance Optimization",
        "SEO Basics",
      ],
    },
  ];

  return (
    <section
      id="about"
      aria-label="About Shashidhar Naik"
      className="py-20 bg-[#052F40]/30 relative"
    >
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#EAF6FA]">
            Sobre mí
          </h2>

          <p className="text-lg text-[#A9C7D1] leading-relaxed">
            Soy{" "}
            <span className="text-[#79C7D9] font-semibold">
              Frontend Developer
            </span>{" "}
            especializado en crear experiencias web modernas, interactivas y
            enfocadas en la experiencia de usuario. Trabajo principalmente con{" "}
            <span className="text-[#F2921D]">
              React, Next.js, Tailwind CSS y JavaScript
            </span>
            , desarrollando interfaces responsivas, plataformas digitales y
            productos web visualmente atractivos.
            <br />
            <br />
            También cuento con experiencia en diseño UI/UX, WordPress y
            desarrollo web para proyectos institucionales, culturales y
            freelance. Mi perfil combina programación, diseño y creatividad para
            construir experiencias digitales funcionales y modernas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#06384D]/40 p-6 rounded-xl border border-[#0E5A73]/40 hover:border-[#79C7D9]/50 transition-colors group"
            >
              {/* Icon */}
              <div className="mb-4 bg-[#052F40]/50 w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                {skill.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-4 text-[#EAF6FA]">
                {skill.category}
              </h3>

              {/* Items */}
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <span
                    key={i}
                    className="text-sm px-2 py-1 bg-[#052F40]/50 text-[#A9C7D1] border border-[#0E5A73] rounded hover:text-[#79C7D9] hover:border-[#79C7D9] transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
