"use client";

import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X, Code2, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", to: "home" },
    { name: "Sobre mí", to: "about" },
    { name: "Experiencia", to: "experience" },
    { name: "Proyectos", to: "projects" },
    // { name: 'Open Source', to: 'opensource' },
    { name: "Educación", to: "education" },
    { name: "Contacto", to: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-[#052F40]/80 shadow-lg py-4 border-b border-[#0E5A73]/30"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Brand */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => window.scrollTo(0, 0)}
          role="link"
          aria-label="Go to top of page"
        >
          <img
            src="/favicon.svg"
            alt="Logo"
            className="w-8 h-8 object-contain"
          />

          <span className="text-xl font-bold tracking-tight text-[#EAF6FA]">
            SergioPastor<span className="text-[#F2921D]">.</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              spy={true}
              offset={-100}
              className="text-[#A9C7D1] hover:text-[#79C7D9] cursor-pointer text-sm font-medium transition-colors"
              activeClass="text-[#79C7D9] font-semibold"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <a
          href="https://wa.me/51976317906"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar por WhatsApp"
          className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-[#F2921D] text-[#052F40] hover:bg-[#F2762E] transition-colors shadow-lg"
        >
          <MessageCircle className="w-5 h-5" />
        </a>

        {/* Mobile Button */}
        <button
          className="md:hidden text-[#A9C7D1] hover:text-[#EAF6FA] transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
        >
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-nav"
              role="navigation"
              aria-label="Mobile navigation"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-[#052F40]/95 backdrop-blur-md border-t border-[#0E5A73]/40 p-4 md:hidden flex flex-col gap-4 shadow-xl"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-100}
                  className="text-[#A9C7D1] hover:text-[#79C7D9] cursor-pointer block py-2 text-center transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
