"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Send, Bot, Sparkles, Minimize2, X } from "lucide-react";

interface Message {
  id: string;
  type: "bot" | "user";
  text: string;
  timestamp: Date;
}

const PortfolioAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) setShowGreeting(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isOpen) setShowGreeting(false);
  }, [isOpen]);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "bot",
      text: "¡Hola! Soy el asistente virtual de Sergio Pastor. Puedes preguntarme sobre su experiencia como Frontend Developer, desarrollo web con React y Next.js, proyectos en WordPress, diseño UI/UX, animaciones web y experiencia profesional.",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // ── Experience Data (all 6 roles) ──────────────────────────────────────
  const experienceData = [
    {
      company: "Gran Teatro Nacional",
      role: "Webmaster | Diseño y gestión de plataformas web",
      period: "Ene 2026 - Actualidad",
      aliases: [
        "gran teatro nacional",
        "webmaster",
        "drupal",
        "frontend",
        "gtn",
      ],
      points: [
        "Gestión y mantenimiento de plataformas web institucionales.",
        "Implementación y actualización de contenidos digitales utilizando Drupal.",
        "Desarrollo y ajustes frontend con HTML, CSS y JavaScript.",
        "Diseño y optimización de interfaces para campañas y eventos culturales.",
        "Coordinación con equipos de sistemas y comunicación digital.",
        "Análisis de métricas web y comportamiento de usuarios.",
      ],
    },
    {
      company: "Freelance",
      role: "Frontend Developer & WordPress Developer",
      period: "2020 - Actualidad",
      aliases: [
        "freelance",
        "wordpress",
        "frontend developer",
        "react",
        "nextjs",
      ],
      points: [
        "Desarrollo de sitios web modernos y landing pages personalizadas.",
        "Creación de interfaces responsivas utilizando React, Next.js y JavaScript.",
        "Implementación y personalización de sitios WordPress.",
        "Optimización visual, experiencia de usuario y rendimiento web.",
        "Colaboración con clientes en proyectos de diseño y desarrollo frontend.",
      ],
    },
    {
      company: "Bicentenario Perú",
      role: "Diseñador Web",
      period: "Jun 2021 - Jun 2025",
      aliases: ["bicentenario", "diseñador web", "web designer"],
      points: [
        "Diseño y desarrollo de plataformas y contenidos digitales.",
        "Implementación de interfaces web para campañas institucionales.",
        "Optimización de experiencia de usuario mediante herramientas de análisis web.",
        "Gestión y actualización de plataformas digitales institucionales.",
      ],
    },
    {
      company: "Universidad San Ignacio de Loyola",
      role: "Diseñador Gráfico Sr.",
      period: "May 2018 - May 2021",
      aliases: ["usil", "diseñador gráfico", "graphic designer senior"],
      points: [
        "Diseño y diagramación de contenidos universitarios e institucionales.",
        "Desarrollo de piezas digitales y material gráfico.",
        "Gestión de contenido visual y soporte para plataformas web.",
      ],
    },
    {
      company: "Universidad San Ignacio de Loyola",
      role: "Diseñador Gráfico Jr.",
      period: "Abr 2016 - Abr 2018",
      aliases: ["usil junior", "graphic designer jr"],
      points: [
        "Creación de piezas gráficas para comunicación institucional.",
        "Apoyo en diseño digital y contenido web.",
      ],
    },
    {
      company: "MADISON MK",
      role: "Diseñador Gráfico",
      period: "Sep 2015 - Mar 2016",
      aliases: ["madison", "marketing", "graphic designer"],
      points: [
        "Desarrollo de materiales visuales para campañas y activaciones de marca.",
        "Diseño de piezas gráficas publicitarias.",
      ],
    },
    {
      company: "FRAVATEL",
      role: "Diseñador Gráfico",
      period: "2010 - 2011",
      aliases: ["fravatel", "web maintenance"],
      points: [
        "Creación de piezas web y mantenimiento de plataformas digitales.",
      ],
    },
  ];

  // ── Project Data (all 6 projects) ──────────────────────────────────────
  const projectData = [
    {
      title: "Portafolio Frontend Interactivo",
      aliases: ["portfolio", "frontend", "react", "nextjs", "portfolio web"],
      desc: "un portafolio moderno enfocado en experiencias interactivas, animaciones y diseño visual.",
      tech: "React.js, Next.js, Tailwind CSS, Framer Motion",
      highlights: [
        "Desarrollo de una interfaz moderna y responsiva.",
        "Implementación de animaciones y transiciones interactivas.",
        "Optimización de rendimiento y experiencia de usuario.",
        "Diseño visual enfocado en frontend creativo.",
      ],
    },

    {
      title: "Plataformas Web Institucionales",
      aliases: ["drupal", "gran teatro nacional", "web institucional", "cms"],
      desc: "gestión y desarrollo frontend de plataformas institucionales para contenido cultural y eventos.",
      tech: "Drupal, HTML, CSS, JavaScript",
      highlights: [
        "Implementación y actualización de contenidos digitales.",
        "Desarrollo de interfaces para campañas y eventos.",
        "Optimización visual y experiencia de usuario.",
        "Mantenimiento y soporte de plataformas web institucionales.",
      ],
    },

    {
      title: "Sitios Web WordPress",
      aliases: ["wordpress", "landing pages", "cms", "websites"],
      desc: "desarrollo de sitios web personalizados y landing pages para clientes y proyectos freelance.",
      tech: "WordPress, Elementor, JavaScript, CSS",
      highlights: [
        "Creación de sitios web modernos y responsivos.",
        "Personalización de themes y componentes.",
        "Optimización SEO y velocidad de carga.",
        "Integración de formularios y herramientas de marketing.",
      ],
    },

    {
      title: "Aplicaciones Web MERN",
      aliases: ["mern", "mongodb", "nodejs", "express", "react"],
      desc: "desarrollo de aplicaciones web full stack utilizando tecnologías modernas del ecosistema JavaScript.",
      tech: "MongoDB, Express.js, React.js, Node.js",
      highlights: [
        "Construcción de APIs REST y frontend dinámico.",
        "Integración de bases de datos y autenticación.",
        "Desarrollo de dashboards y paneles administrativos.",
        "Arquitectura escalable para aplicaciones web.",
      ],
    },

    {
      title: "Proyecto Orgullosos por Nuestra Historia",
      aliases: ["mapa peru", "canvas", "interactive map", "orgullosos"],
      desc: "plataforma interactiva donde usuarios podían subir fotografías y visualizarlas dinámicamente dentro de un mapa del Perú.",
      tech: "React.js, Node.js, Canvas API, SQL",
      highlights: [
        "Implementación de mapa interactivo usando Canvas.",
        "Sistema dinámico de carga y visualización de imágenes.",
        "Integración con base de datos para almacenamiento de contenido.",
        "Experiencia visual enfocada en interacción y participación.",
      ],
    },

    {
      title: "Interfaces y Experiencias UI/UX",
      aliases: ["ui", "ux", "design", "figma", "interactive ui"],
      desc: "diseño y desarrollo de interfaces modernas enfocadas en experiencia de usuario y estética visual.",
      tech: "Figma, Adobe XD, HTML, CSS, JavaScript",
      highlights: [
        "Diseño de interfaces modernas y minimalistas.",
        "Creación de prototipos y sistemas visuales.",
        "Implementación frontend pixel-perfect.",
        "Enfoque en accesibilidad y usabilidad.",
      ],
    },
  ];

  // ── Open Source Packages ───────────────────────────────────────────────
  const openSourceData = [
    {
      name: "qrlayout-core",
      aliases: ["qrlayout-core", "core library", "qr core"],
      desc: "A powerful core logic library for QR layout generation, handling complex calculations for sizing and positioning.",
      url: "https://www.npmjs.com/package/qrlayout-core",
      stats: "1k+ downloads",
    },
    {
      name: "qrlayout-ui",
      aliases: ["qrlayout-ui", "ui library", "qr ui"],
      desc: "A framework-agnostic UI component library for qrlayout-core. Works seamlessly with React, Vue, Angular, or Vanilla JS.",
      url: "https://www.npmjs.com/package/qrlayout-ui",
      stats: "800+ downloads",
    },
    {
      name: "env-drift-check",
      aliases: [
        "env-drift-check",
        "envwise",
        "env cli",
        "dotenv check",
        "environment check",
      ],
      desc: "A CLI tool to detect drift between .env.example / .env.template and your actual .env files, ensuring environment consistency across teams.",
      url: "https://www.npmjs.com/package/env-drift-check",
      stats: "200+ downloads",
    },
  ];

  // ── Skills Data ────────────────────────────────────────────────────────
  const skillsData = {
    frontend: [
      "React.js",
      "Next.js",
      "Astro",
      "JavaScript (ES6+)",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "Framer Motion",
    ],

    backend: ["Node.js", "Express.js", "REST APIs", "Java", "Firebase"],

    database: ["MongoDB", "PostgreSQL", "MySQL", "SQL"],

    tools: [
      "Git & GitHub",
      "Figma",
      "Adobe XD",
      "WordPress",
      "Drupal",
      "Postman",
      "VS Code",
      "Hotjar",
      "SEO Basics",
      "Responsive Design",
      "UI/UX Design",
      "Performance Optimization",
    ],
  };

  // ── Education Data ─────────────────────────────────────────────────────
  const educationData = [
    {
      degree: "Ingeniería de Sistemas",
      school: "Universidad Peruana de Ciencias Aplicadas (UPC)",
      year: "2018 - 2023",
    },
    {
      degree: "UX/UI Designer",
      school: "Toulouse Lautrec",
      year: "2021",
    },
    {
      degree: "Bootcamp Desarrollo Full Stack",
      school: "TECSUP",
      year: "2020 - 2021",
    },
    {
      degree: "Bootcamp Desarrollo Web Full Stack con Java",
      school: "Bootcamp especializado",
      year: "2024 - 2025",
    },
    {
      degree: "Arte y Diseño Empresarial",
      school: "Universidad San Ignacio de Loyola",
      year: "2011 - 2015",
    },
    {
      degree: "HTML + CSS + jQuery",
      school: "Area 51 Training Center",
      year: "2014",
    },
    {
      degree: "Diseño Gráfico Digital",
      school: "IPAD - Instituto Peruano de Arte y Diseño",
      year: "2009 - 2010",
    },
    {
      degree: "Redes y Comunicaciones",
      school: "CIBERTEC",
      year: "2005 - 2009",
    },
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, isOpen]);

  const generateResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();

    // ── Greetings ──────────────────────────────────────────────────────
    if (lowerInput.match(/^(hi|hello|hey|greetings|howdy|sup|yo)[\s!?]*$/)) {
      return "Hello! Great to have you here. I can tell you about Shashidhar's WMS expertise, his open-source packages, or his full work history. What would you like to know?";
    }

    // ── Identity ───────────────────────────────────────────────────────
    if (
      lowerInput.includes("who are you") ||
      lowerInput.includes("your name") ||
      lowerInput.includes("about yourself") ||
      lowerInput.includes("intro") ||
      lowerInput.includes("quién eres") ||
      lowerInput.includes("sobre ti") ||
      lowerInput.includes("presentación")
    ) {
      return "¡Hola! Soy el asistente virtual del portafolio de Sergio Pastor. Puedo ayudarte a conocer su experiencia como Frontend Developer, proyectos web, habilidades en React, Next.js, WordPress, UI/UX y desarrollo frontend moderno. También puedes preguntarme sobre su experiencia profesional, tecnologías y proyectos freelance.";
    }

    // ── About / Bio ────────────────────────────────────────────────────
    if (
      lowerInput.includes("sobre") ||
      lowerInput.includes("bio") ||
      lowerInput.includes("acerca") ||
      lowerInput.includes("presentación")
    ) {
      return "Sergio Pastor es Frontend Developer con experiencia en desarrollo web, diseño UI/UX y creación de experiencias digitales modernas. Trabaja con tecnologías como React, Next.js, JavaScript, WordPress y Astro, desarrollando interfaces interactivas, sitios web responsivos y plataformas digitales. Además, cuenta con experiencia en diseño gráfico y desarrollo frontend para proyectos institucionales, culturales y freelance.";
    }

    // ── Open Source ────────────────────────────────────────────────────
    if (
      lowerInput.includes("open source") ||
      lowerInput.includes("npm") ||
      lowerInput.includes("package") ||
      lowerInput.includes("library") ||
      lowerInput.includes("publish") ||
      lowerInput.includes("github")
    ) {
      return "Sergio desarrolla proyectos frontend y web de manera freelance, compartiendo parte de su trabajo y experimentos en GitHub. Sus proyectos están enfocados en React, Next.js, interfaces modernas, experiencias interactivas y desarrollo web creativo. Puedes revisar sus repositorios y proyectos en: https://github.com/spastorsegura";
    }

    // ── Specific Package check ─────────────────────────────────────────
    for (const pkg of openSourceData) {
      if (pkg.aliases.some((a) => lowerInput.includes(a))) {
        return `**${pkg.name}**: ${pkg.desc} It has ${pkg.stats}. Check it out at: ${pkg.url}`;
      }
    }

    // ── Specific Company / Experience ──────────────────────────────────
    for (const exp of experienceData) {
      if (exp.aliases.some((alias) => lowerInput.includes(alias))) {
        return `At **${exp.company}** as *${exp.role}* (${exp.period}): ${exp.points.join(" ")}`;
      }
    }

    // ── Specific Project ───────────────────────────────────────────────
    for (const proj of projectData) {
      if (proj.aliases.some((alias) => lowerInput.includes(alias))) {
        return `**${proj.title}** is ${proj.desc} Built using: ${proj.tech}. Key highlights: ${proj.highlights.join(" | ")}`;
      }
    }

    // ── Broad: Experience / Career ─────────────────────────────────────
    if (
      lowerInput.includes("experiencia") ||
      lowerInput.includes("carrera") ||
      lowerInput.includes("trabajo") ||
      lowerInput.includes("empleo") ||
      lowerInput.includes("historial") ||
      lowerInput.includes("background")
    ) {
      return "Sergio Pastor cuenta con experiencia en desarrollo frontend, diseño web y plataformas digitales. Actualmente se desempeña como Webmaster en el Gran Teatro Nacional, gestionando plataformas web institucionales y desarrollo frontend con Drupal, HTML, CSS y JavaScript. También trabaja como Frontend Developer & WordPress Freelancer desarrollando sitios web modernos y experiencias digitales interactivas. Anteriormente trabajó como Diseñador Web en Bicentenario Perú y como Diseñador Gráfico Senior y Junior en la Universidad San Ignacio de Loyola.";
    }

    // ── Broad: Projects ────────────────────────────────────────────────
    if (
      lowerInput.includes("proyecto") ||
      lowerInput.includes("portfolio") ||
      lowerInput.includes("trabajos") ||
      lowerInput.includes("desarrollos") ||
      lowerInput.includes("caso de estudio")
    ) {
      return "Sergio ha desarrollado proyectos enfocados en frontend, diseño web y experiencias digitales modernas. Entre ellos se encuentran plataformas institucionales con Drupal, sitios web en WordPress, aplicaciones web con React y proyectos interactivos utilizando Next.js, JavaScript y tecnologías MERN. También ha trabajado en portafolios creativos, landing pages y experiencias UI/UX interactivas.";
    }

    // ── Skills / Tech Stack ────────────────────────────────────────────
    if (
      lowerInput.includes("habilidad") ||
      lowerInput.includes("skills") ||
      lowerInput.includes("tecnologías") ||
      lowerInput.includes("stack") ||
      lowerInput.includes("lenguaje") ||
      lowerInput.includes("framework") ||
      lowerInput.includes("herramientas")
    ) {
      return `Tecnologías y herramientas de Sergio: **Frontend**: ${skillsData.frontend.join(", ")} | **Backend & APIs**: ${skillsData.backend.join(", ")} | **Bases de Datos**: ${skillsData.database.join(", ")} | **Herramientas & Diseño**: ${skillsData.tools.join(", ")}`;
    }

    // ── Specific skill queries ─────────────────────────────────────────
    if (lowerInput.includes("react"))
      return "Sergio trabaja con React para desarrollar interfaces modernas, aplicaciones web dinámicas y experiencias frontend interactivas. También utiliza Next.js y TypeScript para crear proyectos escalables y optimizados.";

    if (lowerInput.includes("next"))
      return "Sergio utiliza Next.js para desarrollar aplicaciones web modernas, optimizadas para rendimiento, SEO y experiencia de usuario.";

    if (lowerInput.includes("wordpress") || lowerInput.includes("elementor"))
      return "Sergio desarrolla y personaliza sitios web en WordPress, incluyendo landing pages, sitios corporativos y proyectos freelance enfocados en diseño responsive y experiencia de usuario.";

    if (lowerInput.includes("javascript") || lowerInput.includes("typescript"))
      return "JavaScript es una de las principales tecnologías utilizadas por Sergio en desarrollo frontend. También trabaja con TypeScript para crear aplicaciones más escalables y mantenibles.";

    if (lowerInput.includes("node") || lowerInput.includes("express"))
      return "Sergio utiliza Node.js y Express para desarrollar APIs REST y aplicaciones full stack dentro del ecosistema JavaScript.";

    if (
      lowerInput.includes("mongodb") ||
      lowerInput.includes("mysql") ||
      lowerInput.includes("postgresql") ||
      lowerInput.includes("sql")
    )
      return "Sergio trabaja con bases de datos relacionales y no relacionales como MySQL, PostgreSQL y MongoDB en proyectos web y aplicaciones full stack.";

    if (
      lowerInput.includes("figma") ||
      lowerInput.includes("ui") ||
      lowerInput.includes("ux")
    )
      return "Sergio también cuenta con experiencia en diseño UI/UX utilizando herramientas como Figma y Adobe XD para crear interfaces modernas y centradas en el usuario.";

    // ── Education ──────────────────────────────────────────────────────
    if (
      lowerInput.includes("educación") ||
      lowerInput.includes("estudios") ||
      lowerInput.includes("universidad") ||
      lowerInput.includes("carrera") ||
      lowerInput.includes("bootcamp") ||
      lowerInput.includes("formación")
    ) {
      const eduList = educationData
        .map((e) => `${e.degree} - ${e.school} (${e.year})`)
        .join(" | ");

      return `Formación académica de Sergio: ${eduList}. Su perfil combina desarrollo frontend, ingeniería de sistemas, diseño UI/UX y experiencia en diseño digital, lo que le permite integrar programación, creatividad y experiencia de usuario en sus proyectos web.`;
    }

    // ── Contact / Hire ─────────────────────────────────────────────────
    if (
      lowerInput.includes("contacto") ||
      lowerInput.includes("email") ||
      lowerInput.includes("correo") ||
      lowerInput.includes("hire") ||
      lowerInput.includes("trabajar") ||
      lowerInput.includes("disponible") ||
      lowerInput.includes("linkedin")
    ) {
      return "Sergio está disponible para nuevas oportunidades y proyectos freelance. Puedes contactarlo al +51 976317906, escribirle a sergio.cybert@gmail.com o conectar con él en LinkedIn: https://www.linkedin.com/in/sergio-pastor-segura-b5211a19 y GitHub: https://github.com/spastorsegura";
    }

    // ── Resume / CV ────────────────────────────────────────────────────
    if (
      lowerInput.includes("cv") ||
      lowerInput.includes("currículum") ||
      lowerInput.includes("resume") ||
      lowerInput.includes("descargar")
    ) {
      return "Puedes descargar el CV actualizado de Sergio Pastor desde la sección de contacto o navegación de este portafolio.";
    }

    // ── Social Links ───────────────────────────────────────────────────
    if (
      lowerInput.includes("github") ||
      lowerInput.includes("linkedin") ||
      lowerInput.includes("redes") ||
      lowerInput.includes("social") ||
      lowerInput.includes("perfil")
    ) {
      return "Puedes encontrar a Sergio en: GitHub → https://github.com/spastorsegura | LinkedIn → https://www.linkedin.com/in/sergio-pastor-segura-b5211a19";
    }

    // ── Why Hire ───────────────────────────────────────────────────────
    if (
      lowerInput.includes("por qué contratar") ||
      lowerInput.includes("fortalezas") ||
      lowerInput.includes("habilidades") ||
      lowerInput.includes("valor") ||
      lowerInput.includes("por qué tú")
    ) {
      return "Sergio combina experiencia en desarrollo frontend, diseño UI/UX y desarrollo web moderno para crear productos digitales funcionales y visualmente atractivos. Tiene experiencia trabajando en proyectos institucionales, plataformas web y desarrollo freelance utilizando tecnologías como React, Next.js, WordPress y JavaScript. Además, cuenta con una sólida base en diseño visual y experiencia de usuario, lo que le permite desarrollar interfaces modernas, responsivas y enfocadas en rendimiento.";
    }

    // ── Default fallback ───────────────────────────────────────────────
    return "Aún estoy aprendiendo 😊 Puedes preguntarme sobre experiencia, proyectos, tecnologías, frontend, React, Next.js, WordPress, educación o habilidades de Sergio.";
  };

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      type: "user",
      text: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    // Simulate thinking delay
    setTimeout(() => {
      const responseText = generateResponse(userMsg.text);
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        type: "bot",
        text: responseText,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 1000);
  };

  const quickAsks = [
    "Experiencia",
    "Proyectos",
    "Habilidades",
    "Educación",
    "Contacto",
  ];

  const handleQuickAsk = (text: string) => {
    setInputValue(text);
    const userMsg: Message = {
      id: Date.now().toString(),
      type: "user",
      text: text,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      const responseText = generateResponse(text);
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        type: "bot",
        text: responseText,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <>
      {/* Greeting Bubble */}
      <AnimatePresence>
        {!isOpen && showGreeting && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed bottom-24 right-6 z-50 max-w-[280px]"
          >
            <div className="bg-slate-800 text-slate-200 px-4 py-3 rounded-2xl rounded-br-sm shadow-xl border border-slate-700/50 flex items-start gap-3 relative before:content-[''] before:absolute before:bottom-[-6px] before:right-6 before:w-3 before:h-3 before:bg-slate-800 before:border-r before:border-b before:border-slate-700/50 before:rotate-45">
              <div className="flex-1">
                <p className="text-sm font-medium">
                  👋 ¡Hola! Puedo ayudarte a conocer más sobre mi experiencia,
                  proyectos y habilidades como Frontend Developer.
                </p>
              </div>
              <button
                onClick={() => setShowGreeting(false)}
                className="p-1 hover:bg-slate-700 rounded-full transition-colors text-slate-400 hover:text-white"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all duration-300 ${
          isOpen
            ? "scale-0 opacity-0 pointer-events-none"
            : "bg-violet-600 text-white"
        }`}
      >
        <MessageSquare className="w-6 h-6" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className="fixed bottom-6 right-6 w-[90vw] md:w-[380px] h-[600px] max-h-[85vh] bg-slate-900 border border-slate-700/50 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50 backdrop-blur-xl"
            style={{ boxShadow: "0 0 50px -12px rgba(0,0,0,0.5)" }}
          >
            <div className="p-4 border-b border-slate-700/50 bg-slate-800/50 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-violet-600 to-indigo-600 flex items-center justify-center relative">
                  <Bot className="w-6 h-6 text-white" />
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-slate-900 rounded-full"></span>
                </div>
                <div>
                  <h3 className="font-bold text-slate-100">Asistente</h3>
                  <p className="text-xs text-violet-400 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Online
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-slate-700/50 rounded-lg transition-colors text-slate-400 hover:text-white"
              >
                <Minimize2 className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
              {messages.map((msg) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={msg.id}
                  className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl shadow-sm ${
                      msg.type === "user"
                        ? "bg-violet-600 text-white rounded-tr-sm"
                        : "bg-slate-800 text-slate-200 border border-slate-700/50 rounded-tl-sm"
                    }`}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">
                      {msg.text}
                    </p>
                    <span className="text-[10px] opacity-50 mt-1 block px-1">
                      {msg.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-slate-800 border border-slate-700/50 p-3 rounded-2xl rounded-tl-sm flex gap-2 items-center">
                    <span className="w-2 h-2 bg-violet-500/50 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-violet-500/50 rounded-full animate-bounce delay-75"></span>
                    <span className="w-2 h-2 bg-violet-500/50 rounded-full animate-bounce delay-150"></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {messages.length < 4 && !isTyping && (
              <div className="px-4 pb-2">
                <p className="text-xs text-slate-500 mb-2 pl-1">
                  Temas sugeridos:
                </p>

                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
                  {quickAsks.map((qa) => (
                    <button
                      key={qa}
                      onClick={() => handleQuickAsk(qa)}
                      className="whitespace-nowrap px-3 py-1.5 bg-slate-800/50 border border-slate-700 hover:border-violet-500/50 hover:bg-violet-500/10 rounded-full text-xs text-slate-300 transition-colors"
                    >
                      {qa}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <form
              onSubmit={handleSendMessage}
              className="p-4 border-t border-slate-700/50 bg-slate-800/30"
            >
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Pregúntame lo que quieras..."
                  className="flex-1 bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-2 text-sm text-slate-200 focus:outline-none focus:border-violet-500/50 transition-colors placeholder:text-slate-600"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isTyping}
                  className="bg-violet-600 hover:bg-violet-700 disabled:opacity-50 disabled:cursor-not-allowed text-white p-2.5 rounded-xl transition-colors shadow-lg shadow-violet-600/20"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PortfolioAssistant;
