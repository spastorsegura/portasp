"use client";

import { Github, Linkedin, Code2 } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      label: "GitHub Profile — spastorsegura",
      href: "https://github.com/spastorsegura",
      icon: <Github className="w-4 h-4" aria-hidden="true" />,
      text: "GitHub",
    },
    {
      label: "LinkedIn Profile — Sergio Pastor",
      href: "https://www.linkedin.com/in/sergio-pastor-segura-b5211a19",
      icon: <Linkedin className="w-4 h-4" aria-hidden="true" />,
      text: "LinkedIn",
    },
  ];

  return (
    <footer
      role="contentinfo"
      aria-label="Site footer"
      className="py-10 border-t border-slate-800 bg-slate-950"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <img
              src="/favicon.svg"
              alt="Logo"
              className="w-8 h-8 object-contain"
            />

            <span className="font-bold text-[#EAF6FA] tracking-tight">
              SergioPastor
              <span className="text-[#F2921D]">.</span>
            </span>
          </div>

          {/* Social Links — these provide sameAs signals for Google */}
          <nav aria-label="Social media links">
            <ul className="flex items-center gap-6" role="list">
              {socialLinks.map((link) => (
                <li key={link.text}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer me"
                    aria-label={link.label}
                    className="flex items-center gap-1.5 text-[#A9C7D1] hover:text-[#79C7D9] transition-colors text-sm"
                  >
                    {link.icon}
                    <span>{link.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Copyright */}
          <p className="text-slate-600 text-sm">
            <span aria-label={`Copyright ${currentYear} Sergio Pastor`}>
              &copy; {currentYear}{" "}
              <span className="text-slate-500 font-medium">Sergio Pastor</span>.
              Todos los derechos reservados.
            </span>
          </p>
        </div>

        {/* SEO: Hidden but accessible description for crawlers */}
        <p className="sr-only">
          Sergio Pastor es Frontend Developer especializado en React, Next.js,
          WordPress y desarrollo de experiencias web modernas. Enfocado en
          interfaces interactivas, diseño UI/UX y aplicaciones web de alto
          rendimiento.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
