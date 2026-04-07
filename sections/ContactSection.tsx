"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build mailto link
    const subject = `Project inquiry from ${form.name}`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\nService: ${form.service}\n\nMessage:\n${form.message}`;
    window.open(
      `mailto:devratstudio2006@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    );
    setSent(true);
  };

  const inputClass =
    "w-full bg-white border border-sand rounded-xl px-5 py-3.5 font-body font-light text-sm text-ink placeholder:text-stone/60 focus:outline-none focus:border-accent transition-colors duration-300";

  return (
    <section
      id="contact"
      className="py-28 px-6 md:px-10 relative overflow-hidden"
      style={{ background: "var(--cream)" }}
    >

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <span className="pill">Get in touch</span>
            <h2
              className="mt-6 font-display font-semibold leading-tight tracking-tight"
              style={{
                fontSize: "clamp(2.25rem, 4vw, 3.75rem)",
                color: "var(--ink)",
              }}
            >
              Let&rsquo;s build something{" "}
              <em
                className="not-italic"
                style={{ fontStyle: "italic", color: "var(--ocean)" }}
              >
                extraordinary
              </em>{" "}
              together
            </h2>
            <p className="mt-6 font-body font-light text-slate leading-relaxed max-w-sm">
              Have a project in mind? We&rsquo;d love to hear about it. Reach
              out via the form, or use any of the channels below.
            </p>

            {/* Contact methods */}
            <div className="mt-10 space-y-4">
              <a
                href="mailto:devratstudio2006@gmail.com"
                className="contact-btn"
              >
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(91,143,168,0.1)" }}
                >
                  <span style={{ color: "var(--accent)" }}>✉</span>
                </div>
                <div>
                  <p className="font-mono text-xs text-stone mb-0.5" style={{ letterSpacing: "0.08em" }}>
                    EMAIL
                  </p>
                  <p className="font-body font-light text-sm text-ink">
                    devratstudio2006@gmail.com
                  </p>
                </div>
              </a>

              <a href="tel:+917904085435" className="contact-btn">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(91,143,168,0.1)" }}
                >
                  <span style={{ color: "var(--accent)" }}>✆</span>
                </div>
                <div>
                  <p className="font-mono text-xs text-stone mb-0.5" style={{ letterSpacing: "0.08em" }}>
                    PHONE
                  </p>
                  <p className="font-body font-light text-sm text-ink">
                    +91 79040 85435 · +91 80721 09512
                  </p>
                </div>
              </a>

              <a
                href="https://wa.me/917904085435"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-btn"
              >
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(122,158,142,0.1)" }}
                >
                  <span style={{ color: "var(--sage)" }}>◎</span>
                </div>
                <div>
                  <p className="font-mono text-xs text-stone mb-0.5" style={{ letterSpacing: "0.08em" }}>
                    WHATSAPP
                  </p>
                  <p className="font-body font-light text-sm text-ink">
                    +91 79040 85435 — Chat with us
                  </p>
                </div>
              </a>
            </div>

            {/* Response time badge */}
            <div className="mt-8 inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-sand bg-white">
              <div className="w-2 h-2 rounded-full bg-sage animate-pulse" />
              <span className="font-mono text-xs text-slate" style={{ letterSpacing: "0.06em" }}>
                Typically responds within 24 hours
              </span>
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15 }}
          >
            {sent ? (
              <div className="bg-white rounded-3xl p-10 glow-ring text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ background: "rgba(91,143,168,0.1)" }}
                >
                  <span className="text-2xl" style={{ color: "var(--accent)" }}>
                    ✓
                  </span>
                </div>
                <h3 className="font-display text-2xl font-light text-ink mb-3">
                  Message sent!
                </h3>
                <p className="font-body font-light text-slate text-sm leading-relaxed">
                  Your email client should have opened. We&rsquo;ll get back to you
                  within 24 hours.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 text-accent font-mono text-xs hover:text-ocean transition-colors"
                  style={{ letterSpacing: "0.08em" }}
                >
                  Send another
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-3xl p-8 md:p-10 glow-ring space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-mono text-xs text-stone mb-2" style={{ letterSpacing: "0.08em" }}>
                      NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      className={inputClass}
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs text-stone mb-2" style={{ letterSpacing: "0.08em" }}>
                      EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@company.com"
                      className={inputClass}
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-xs text-stone mb-2" style={{ letterSpacing: "0.08em" }}>
                    SERVICE NEEDED
                  </label>
                  <select
                    className={inputClass}
                    value={form.service}
                    onChange={(e) =>
                      setForm({ ...form, service: e.target.value })
                    }
                  >
                    <option value="">Select a service...</option>
                    <option>Website Development</option>
                    <option>Web Application Development</option>
                    <option>Mobile Application Development</option>
                    <option>UI/UX Design</option>
                    <option>Product Design</option>
                    <option>Brand Strategy</option>
                    <option>Other / Not Sure</option>
                  </select>
                </div>

                <div>
                  <label className="block font-mono text-xs text-stone mb-2" style={{ letterSpacing: "0.08em" }}>
                    TELL US ABOUT YOUR PROJECT *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Describe your project, goals, and timeline..."
                    className={`${inputClass} resize-none`}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-ocean text-ivory font-body font-light text-sm tracking-wide rounded-xl hover:bg-deep transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                >
                  Send message →
                </button>

                <p className="font-mono text-xs text-stone/50 text-center" style={{ letterSpacing: "0.06em" }}>
                  We reply within 24 hours · No spam, ever
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
