"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import HeroVisual from "@/components/ui/HeroVisual";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToServices = () => {
    document
      .querySelector("#services")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
        id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background — flat ivory, no gradient */}

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle, #C8BBAA 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Hero Visual (right side on desktop, centered/faded on mobile) */}
      <div className="absolute inset-0 top-32 md:top-0 md:left-[45%] lg:left-[40%] pointer-events-none flex items-center justify-center opacity-30 md:opacity-100 scale-75 md:scale-100 md:pr-10 z-0">
        {mounted && <HeroVisual />}
      </div>

      {/* Hero content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-24 pb-16 w-full">
        <div className="max-w-xl">
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="pill">Digital Innovation Studio</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="mt-7 font-display font-semibold leading-[1.06] tracking-tight"
            style={{
              fontSize: "clamp(2.75rem, 5.5vw, 5rem)",
              color: "var(--ink)",
            }}
          >
            We build
            <br />
            <em
              className="not-italic"
              style={{ fontStyle: "italic", color: "var(--ocean)" }}
            >
              digital worlds
            </em>
            <br />
            that matter.
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.65 }}
            className="mt-7 font-body font-light text-slate leading-relaxed max-w-sm"
            style={{ fontSize: "1.0625rem" }}
          >
            From concept to launch — we design and engineer premium digital
            experiences for companies ready to make a global impact.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.85 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <button
              onClick={scrollToServices}
              className="px-7 py-3.5 bg-ocean text-ivory font-body font-light text-sm tracking-wide rounded-full hover:bg-deep transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
            >
              Explore our work
            </button>
            <button
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-7 py-3.5 border border-stone text-slate font-body font-light text-sm tracking-wide rounded-full hover:border-accent hover:text-ocean transition-all duration-300"
            >
              Start a project
            </button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="mt-16 flex gap-8 border-t border-sand pt-8"
          >
            {[
              { num: "50+", label: "Projects delivered" },
              { num: "12+", label: "Countries reached" },
              { num: "5★", label: "Client satisfaction" },
            ].map((stat) => (
              <div key={stat.label}>
                <p
                  className="font-display font-medium"
                  style={{
                    fontSize: "1.75rem",
                    color: "var(--ocean)",
                    lineHeight: 1,
                  }}
                >
                  {stat.num}
                </p>
                <p
                  className="mt-1 font-mono text-xs text-stone"
                  style={{ letterSpacing: "0.08em" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={scrollToServices}
      >
        <span className="font-mono text-xs text-stone/60 tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-10 bg-stone/30 relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full h-4 bg-accent/60"
            animate={{ y: ["-100%", "300%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </motion.div>
      </section>
  );
}
