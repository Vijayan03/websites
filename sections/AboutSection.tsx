"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const values = [
  {
    icon: "◈",
    title: "Craft Over Speed",
    desc: "We take the time to do it right — because quality compounds over time.",
  },
  {
    icon: "◉",
    title: "Partnership Mindset",
    desc: "Your growth is our mission. We're invested in your success beyond the launch.",
  },
  {
    icon: "△",
    title: "Global Perspective",
    desc: "Built in India. Delivered worldwide. We think and design without borders.",
  },
  {
    icon: "◇",
    title: "Continuous Innovation",
    desc: "We stay at the edge of technology so you never fall behind the curve.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-28 px-6 md:px-10 bg-ivory relative overflow-hidden">

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <span className="pill">Who we are</span>
            <h2
              className="mt-6 font-display font-semibold leading-tight tracking-tight"
              style={{
                fontSize: "clamp(2.25rem, 4vw, 3.75rem)",
                color: "var(--ink)",
              }}
            >
              A studio obsessed with{" "}
              <em
                className="not-italic"
                style={{ fontStyle: "italic", color: "var(--ocean)" }}
              >
                digital excellence
              </em>
            </h2>
            <p className="mt-6 font-body font-light text-slate leading-relaxed max-w-md">
              DevRatStudio is a boutique digital studio where technology meets
              artistry. We partner with ambitious startups and established
              companies to build products that are as beautiful as they are
              functional.
            </p>
            <p className="mt-4 font-body font-light text-slate leading-relaxed max-w-md">
              Our team combines deep technical expertise with a relentless
              pursuit of design excellence — creating digital products that
              stand apart and deliver results.
            </p>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="mt-8 inline-flex items-center gap-3 px-7 py-3.5 bg-ocean text-ivory font-body font-light text-sm tracking-wide rounded-full hover:bg-deep transition-colors duration-300"
            >
              Work with us
              <span className="text-glow/60">→</span>
            </motion.button>
          </motion.div>

          {/* Image collage */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="relative"
          >
            <div className="relative h-[420px]">
              {/* Main image */}
              <div className="absolute top-0 left-0 w-3/4 h-72 rounded-2xl overflow-hidden glow-ring">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="Team collaboration"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Secondary image */}
              <div className="absolute bottom-0 right-0 w-1/2 h-48 rounded-2xl overflow-hidden glow-ring border-4 border-ivory">
                <Image
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80"
                  alt="Team discussion"
                  width={400}
                  height={280}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute top-4 right-0 bg-white rounded-xl px-4 py-3 glow-ring shadow-sm">
                <p className="font-display text-2xl font-medium text-ocean">
                  50+
                </p>
                <p className="font-mono text-xs text-stone" style={{ letterSpacing: "0.08em" }}>
                  Projects
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values grid */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-12 text-center"
          >
            <p className="font-mono text-sm text-stone tracking-widest uppercase">
              Our Principles
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="service-card bg-cream rounded-2xl p-6 border border-sand"
              >
                <span className="text-2xl mb-4 block" style={{ color: "var(--accent)" }}>
                  {v.icon}
                </span>
                <h4 className="font-display font-medium text-lg text-ink mb-3">
                  {v.title}
                </h4>
                <p className="font-body font-light text-slate text-sm leading-relaxed">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-20 relative rounded-3xl overflow-hidden h-64 md:h-80 glow-ring"
        >
          <Image
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1400&q=80"
            alt="DevRatStudio team at work"
            width={1400}
            height={600}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div
            className="absolute inset-0"
            style={{ background: "rgba(13,31,39,0.45)" }}
          />
          <div className="absolute inset-0 flex items-center px-10 md:px-16">
            <div className="max-w-sm">
              <p
                className="font-display font-light italic text-ivory leading-snug"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
              >
                &ldquo;We don&rsquo;t just deliver projects — we build
                partnerships.&rdquo;
              </p>
              <p className="mt-3 font-mono text-xs text-glow/70 tracking-widest uppercase">
                — DevRatStudio Team
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
