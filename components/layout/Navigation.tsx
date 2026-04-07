"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-ivory/90 backdrop-blur-md border-b border-sand shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 rounded-full border border-ocean/40 group-hover:border-ocean transition-colors duration-300" />
              <div className="absolute inset-1.5 rounded-full bg-ocean/10 group-hover:bg-ocean/20 transition-colors duration-300" />
              <div className="absolute inset-3 rounded-full bg-ocean" />
            </div>
            <span
              className="font-display text-xl font-medium tracking-wide"
              style={{ color: "var(--ink)" }}
            >
              DevRat<span style={{ color: "var(--accent)" }}>Studio</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="hover-line font-body text-sm font-light tracking-wide text-slate hover:text-ocean transition-colors duration-300"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("#contact")}
              className="ml-4 px-5 py-2.5 bg-ocean text-ivory text-sm font-body font-light tracking-wide rounded-full hover:bg-deep transition-all duration-300 hover:shadow-lg"
            >
              Get in touch
            </button>
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-px bg-ink transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-px bg-ink transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-px bg-ink transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-ivory/98 backdrop-blur-sm flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => handleNavClick(link.href)}
                className="font-display text-4xl font-light text-ink hover:text-ocean transition-colors duration-300"
              >
                {link.label}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              onClick={() => handleNavClick("#contact")}
              className="mt-4 px-8 py-3 bg-ocean text-ivory font-body font-light rounded-full"
            >
              Get in touch
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
