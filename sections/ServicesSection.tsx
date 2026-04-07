"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";

const services = [
  {
    id: "01",
    title: "Website Development",
    subtitle: "Pixel-perfect. Performance-first.",
    description:
      "We craft responsive, blazing-fast websites that convert visitors into loyal users. Every line of code is intentional — clean architecture, semantic HTML, and flawless cross-device rendering.",
    tags: ["Next.js", "React", "WordPress", "Webflow"],
    color: "#2D5A6B",
    accent: "#5B8FA8",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    icon: "◈",
  },
  {
    id: "02",
    title: "Web Application Development",
    subtitle: "Scalable. Secure. Ship-ready.",
    description:
      "Complex SaaS platforms, dashboards, and business-critical apps — architected to scale. We bring full-stack expertise to transform your idea into a reliable product.",
    tags: ["Node.js", "PostgreSQL", "AWS", "Docker"],
    color: "#1A3A47",
    accent: "#7A9E8E",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
    icon: "⬡",
  },
  {
    id: "03",
    title: "Mobile Application Development",
    subtitle: "Native feel. Cross-platform reach.",
    description:
      "iOS and Android apps that users actually love. We build smooth, intuitive mobile experiences that keep engagement high and reviews glowing.",
    tags: ["React Native", "Flutter", "iOS", "Android"],
    color: "#3D6875",
    accent: "#8EA8B4",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    icon: "◎",
  },
  {
    id: "04",
    title: "UI/UX Design",
    subtitle: "Intuitive. Beautiful. Purposeful.",
    description:
      "Design that solves real problems beautifully. We research, prototype, and validate experiences so your users always know exactly where to go next.",
    tags: ["Figma", "Prototyping", "Research", "Design Systems"],
    color: "#2A4E5A",
    accent: "#A8C5D4",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    icon: "◇",
  },
  {
    id: "05",
    title: "Product Design",
    subtitle: "Strategy meets craft.",
    description:
      "From zero to polished product — we lead end-to-end product design that aligns business goals with human needs, creating experiences that drive retention and growth.",
    tags: ["Product Strategy", "Wireframing", "Testing", "Iteration"],
    color: "#1E3D4A",
    accent: "#C4794A",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
    icon: "◉",
  },
  {
    id: "06",
    title: "Brand Strategy",
    subtitle: "Voice. Vision. Identity.",
    description:
      "Your brand is more than a logo — it's a promise. We build cohesive brand systems that communicate your values and make you unforgettable in a crowded market.",
    tags: ["Brand Identity", "Positioning", "Logo", "Guidelines"],
    color: "#253C47",
    accent: "#7A9E8E",
    image:
      "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&q=80",
    icon: "△",
  },
  {
    id: "07",
    title: "Digital Marketing",
    subtitle: "Reach. Convert. Grow.",
    description:
      "Data-driven campaigns that turn attention into revenue. From SEO and paid ads to social media and content strategy — we craft full-funnel marketing that grows your brand and moves the needle on what matters.",
    tags: ["SEO", "Google Ads", "Social Media", "Analytics"],
    color: "#265060",
    accent: "#C4794A",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    icon: "◎",
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className="min-h-screen flex items-center py-20 px-6 md:px-10"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div
          className={`grid md:grid-cols-2 gap-12 md:gap-20 items-center ${
            isEven ? "" : "md:[direction:rtl]"
          }`}
        >
          {/* Text */}
          <div className={isEven ? "" : "md:[direction:ltr]"}>
            <motion.div
              initial={{ opacity: 0, x: isEven ? -30 : 30 }}
              animate={visible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {/* Number + icon */}
              <div className="flex items-center gap-4 mb-6">
                <span
                  className="font-display text-5xl font-light"
                  style={{ color: "var(--sand)" }}
                >
                  {service.id}
                </span>
                <div
                  className="w-px h-8"
                  style={{ background: "var(--sand)" }}
                />
                <span
                  className="text-2xl"
                  style={{ color: service.accent }}
                >
                  {service.icon}
                </span>
              </div>

              {/* Title */}
              <h3
                className="font-display font-semibold leading-tight mb-3"
                style={{
                  fontSize: "clamp(1.875rem, 3.5vw, 3rem)",
                  color: "var(--ink)",
                  letterSpacing: "-0.02em",
                }}
              >
                {service.title}
              </h3>

              {/* Subtitle */}
              <p
                className="font-mono text-sm mb-5"
                style={{ color: service.accent, letterSpacing: "0.06em" }}
              >
                {service.subtitle}
              </p>

              {/* Description */}
              <p
                className="font-body font-light text-slate leading-relaxed mb-8 max-w-md"
                style={{ fontSize: "1.0625rem" }}
              >
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-full font-mono text-xs border"
                    style={{
                      color: service.accent,
                      borderColor: `${service.accent}30`,
                      background: `${service.accent}08`,
                      letterSpacing: "0.06em",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            className={isEven ? "" : "md:[direction:ltr]"}
            initial={{ opacity: 0, x: isEven ? 30 : -30 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <div className="relative rounded-2xl overflow-hidden glow-ring">
              <Image
                src={service.image}
                alt={service.title}
                width={800}
                height={540}
                className="w-full h-72 md:h-96 object-cover"
                loading="lazy"
              />
              {/* Corner accent */}
              <div
                className="absolute top-4 left-4 z-20 w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: service.color }}
              >
                <span className="text-ivory text-xs font-mono">
                  {service.id}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="relative">
      {/* Section header */}
      <div className="py-24 px-6 md:px-10 text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="pill">What we do</span>
          <h2
            className="mt-6 font-display font-semibold leading-tight tracking-tight"
            style={{
              fontSize: "clamp(2.25rem, 4.5vw, 4rem)",
              color: "var(--ink)",
            }}
          >
            Services crafted for{" "}
            <em
              className="not-italic"
              style={{ fontStyle: "italic", color: "var(--ocean)" }}
            >
              exceptional outcomes
            </em>
          </h2>
          <p className="mt-5 font-body font-light text-slate leading-relaxed">
            End-to-end digital services — from the first sketch to the last
            pixel — designed to elevate your brand above the noise.
          </p>
        </motion.div>
      </div>

      {/* Horizontal divider */}
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="h-px bg-sand" />
      </div>

      {/* Service cards */}
      {services.map((service, i) => (
        <div
          key={service.id}
          className={i % 2 === 0 ? "bg-ivory" : "bg-cream"}
        >
          <ServiceCard service={service} index={i} />
          {i < services.length - 1 && (
            <div className="max-w-7xl mx-auto px-6 md:px-10">
              <div className="h-px bg-sand" />
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
