"use client";

import { motion } from "framer-motion";
import { Database, Globe, Server, Cpu } from "lucide-react";

const About = () => {
  const skills = [
  {
    category: "Frontend Development",
    icon: <Globe className="w-6 h-6 text-violet-400" />,
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
    icon: <Server className="w-6 h-6 text-pink-400" />,
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Java",
      "Firebase",
    ],
  },

  {
    category: "Base de Datos & CMS",
    icon: <Database className="w-6 h-6 text-blue-400" />,
    items: [
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "SQL",
      "WordPress",
      "Drupal",
    ],
  },

  {
    category: "Herramientas & Diseño",
    icon: <Cpu className="w-6 h-6 text-emerald-400" />,
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
      className="py-20 bg-slate-900/30 relative"
    >
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Sobre mí</h2>

          <p className="text-lg text-slate-400 leading-relaxed">
            Soy{" "}
            <span className="text-violet-400 font-semibold">
              Frontend Developer
            </span>{" "}
            especializado en crear experiencias web modernas, interactivas y
            enfocadas en la experiencia de usuario. Trabajo principalmente con{" "}
            <span className="text-pink-400">
              React, Next.js, Tailwindcss y JavaScript
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
              className="bg-slate-800/40 p-6 rounded-xl border border-slate-700/50 hover:border-violet-500/50 transition-colors group"
            >
              <div className="mb-4 bg-slate-900/50 w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-slate-200">
                {skill.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <span
                    key={i}
                    className="text-sm px-2 py-1 bg-slate-700/50 text-slate-300 rounded hover:text-white transition-colors"
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
