const BASE_URL = "https://spastorsegura.github.io";

// ── 1. Person Schema ───────────────────────────────────────────────
export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${BASE_URL}/#person`,
  name: "Sergio Pastor Segura",
  givenName: "Sergio",
  familyName: "Pastor Segura",

  jobTitle: "Frontend Developer",
  description:
    "Frontend Developer especializado en React, Next.js, Astro y desarrollo de interfaces modernas. Experiencia en plataformas institucionales, WordPress, Drupal y aplicaciones web interactivas.",

  url: BASE_URL,
  email: "sergio.cybert@gmail.com",
  telephone: "511 976317906",

  image: `${BASE_URL}/portfolio_hero_section.png`,

  address: {
    "@type": "PostalAddress",
    addressLocality: "Lima",
    addressRegion: "Lima",
    addressCountry: "PE",
  },

  sameAs: [
    "https://github.com/spastorsegura",
    "https://www.linkedin.com/in/sergio-pastor-segura-b5211a19",
  ],

  knowsAbout: [
    "React.js",
    "Next.js",
    "Astro",
    "JavaScript",
    "TypeScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "WordPress",
    "Drupal",
    "UI/UX Design",
    "Frontend Development",
    "Responsive Design",
    "Web Performance",
    "SEO",
  ],
};

// ── 2. WebSite Schema ───────────────────────────────────────────────
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  name: "Sergio Pastor Segura — Frontend Developer Portfolio",
  url: BASE_URL,
  description:
    "Portfolio de Sergio Pastor Segura, Frontend Developer especializado en React, Next.js, WordPress, Drupal y experiencias web modernas.",

  inLanguage: "es-PE",

  author: {
    "@id": `${BASE_URL}/#person`,
  },
};

// ── 3. Projects Schema ─────────────────────────────────────────────
export const projectsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${BASE_URL}/#projects`,
  name: "Proyectos de Sergio Pastor Segura",
  numberOfItems: 6,

  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "CreativeWork",
        name: "Portafolio Interactivo",
        description:
          "Portafolio moderno con animaciones, diseño UI/UX y enfoque en experiencia de usuario.",
        url: `${BASE_URL}/#projects`,
        keywords: ["React", "Next.js", "Tailwind", "Framer Motion"],
      },
    },

    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "CreativeWork",
        name: "Plataformas Institucionales (Drupal)",
        description:
          "Desarrollo y mantenimiento de plataformas web culturales e institucionales usando Drupal y frontend personalizado.",
        url: `${BASE_URL}/#projects`,
        keywords: ["Drupal", "HTML", "CSS", "JavaScript"],
      },
    },

    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "CreativeWork",
        name: "Sitios WordPress Freelance",
        description:
          "Creación de sitios web personalizados, landing pages y optimización SEO en WordPress.",
        url: `${BASE_URL}/#projects`,
        keywords: ["WordPress", "Elementor", "SEO", "CSS"],
      },
    },

    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "CreativeWork",
        name: "Aplicaciones Web MERN",
        description:
          "Desarrollo de aplicaciones full stack con React, Node.js, Express y MongoDB.",
        url: `${BASE_URL}/#projects`,
        keywords: ["MERN", "React", "Node.js", "MongoDB"],
      },
    },

    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "CreativeWork",
        name: "Orgullosos por nuestra historia",
        description:
          "Plataforma interactiva con mapa del Perú usando Canvas API y visualización dinámica de imágenes.",
        url: `${BASE_URL}/#projects`,
        keywords: ["Canvas", "React", "Node.js", "SQL"],
      },
    },

    {
      "@type": "ListItem",
      position: 6,
      item: {
        "@type": "CreativeWork",
        name: "UI/UX & Diseño Digital",
        description:
          "Diseño de interfaces modernas centradas en experiencia de usuario, accesibilidad y prototipado.",
        url: `${BASE_URL}/#projects`,
        keywords: ["Figma", "Adobe XD", "UI/UX", "Frontend"],
      },
    },
  ],
};

// ── 4. Breadcrumb Schema ────────────────────────────────────────────
export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",

  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Inicio",
      item: BASE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Sobre mí",
      item: `${BASE_URL}/#about`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Experiencia",
      item: `${BASE_URL}/#experience`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Proyectos",
      item: `${BASE_URL}/#projects`,
    },
  ],
};