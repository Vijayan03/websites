"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ── Types ─────────────────────────────────────────────────────────────────────
type Role = "user" | "bot";
interface Message { id: number; role: Role; text: string }

// ── Canned responses (no backend needed) ─────────────────────────────────────
const RESPONSES: Record<string, string> = {
  services:
    "We offer Website Development, Web Apps, Mobile Apps, UI/UX Design, Product Design, Brand Strategy, and Digital Marketing. Which one interests you?",
  contact:
    "Reach us at devratstudio2006@gmail.com, WhatsApp +91 79040 85435, or use the contact form on this page. We reply within 24 hours!",
  pricing:
    "Pricing depends on project scope. Get in touch via the contact form or WhatsApp and we'll send a custom quote — usually within a day.",
  hello:
    "Hi there! 👋 I'm DevRat's assistant. Ask me about our services, pricing, or how to get in touch.",
  portfolio:
    "We've delivered 50+ projects across 12+ countries — from SaaS dashboards to mobile apps and brand identities. Use the contact form to request case studies.",
  timeline:
    "Project timelines vary: a landing page can take 1–2 weeks, while a full web app or mobile product typically takes 6–12 weeks. Let's discuss your specific needs.",
  default:
    "That's a great question! For the best answer, please use our contact form or WhatsApp — our team will get back to you within 24 hours.",
};

function getResponse(input: string): string {
  const q = input.toLowerCase();
  if (q.match(/service|offer|build|develop/))           return RESPONSES.services;
  if (q.match(/contact|email|phone|reach|whatsapp/))    return RESPONSES.contact;
  if (q.match(/price|cost|pricing|budget|quote/))       return RESPONSES.pricing;
  if (q.match(/portfolio|project|work|case|example/))   return RESPONSES.portfolio;
  if (q.match(/time|timeline|how long|duration|weeks/)) return RESPONSES.timeline;
  if (q.match(/hi|hello|hey|good morning|good evening/)) return RESPONSES.hello;
  return RESPONSES.default;
}

const QUICK_REPLIES = ["Services", "Pricing", "Contact", "Timeline"] as const;

let _id = 0;
const nextId = () => ++_id;

// ── Icons ─────────────────────────────────────────────────────────────────────
function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={20} height={20}>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" width={17} height={17}>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={16} height={16}>
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}

// ── Widget ────────────────────────────────────────────────────────────────────
export default function ChatbotWidget() {
  const [open, setOpen]         = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput]       = useState("");
  const [typing, setTyping]     = useState(false);
  const bottomRef               = useRef<HTMLDivElement>(null);
  const inputRef                = useRef<HTMLInputElement>(null);

  // Send initial greeting when chat opens for the first time
  const initialized = useRef(false);
  useEffect(() => {
    if (open && !initialized.current) {
      initialized.current = true;
      setTimeout(() => {
        setMessages([{
          id: nextId(),
          role: "bot",
          text: "Hi! 👋 I'm DevRat's assistant. How can I help you today?",
        }]);
      }, 400);
    }
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [open]);

  // Auto-scroll to latest message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const sendMessage = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    // Add user message
    setMessages((prev) => [...prev, { id: nextId(), role: "user", text: trimmed }]);
    setInput("");
    setTyping(true);

    // Simulate bot thinking (300–800 ms)
    const delay = 350 + Math.min(trimmed.length * 8, 450);
    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [
        ...prev,
        { id: nextId(), role: "bot", text: getResponse(trimmed) },
      ]);
    }, delay);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    // Bottom-left corner, clear of the WhatsApp button (bottom-right)
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-3">

      {/* ── Chat panel ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="chat-panel"
            initial={{ opacity: 0, y: 14, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.96 }}
            transition={{ duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="w-80 rounded-2xl border flex flex-col overflow-hidden"
            style={{
              background: "white",
              borderColor: "var(--sand)",
              boxShadow: "0 8px 40px rgba(13,31,39,0.12), 0 0 0 1px rgba(232,223,208,0.6)",
              height: 420,
            }}
          >
            {/* Header */}
            <div
              className="flex items-center gap-3 px-5 py-3.5 flex-shrink-0 border-b"
              style={{
                background: "var(--ink)",
                borderColor: "rgba(255,255,255,0.06)",
              }}
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(91,143,168,0.2)" }}
              >
                <span style={{ color: "var(--glow)", fontSize: "0.75rem" }}>AI</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-display font-medium text-sm" style={{ color: "var(--ivory)" }}>
                  DevRat Assistant
                </p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: "#22c55e" }}
                  />
                  <p className="font-mono text-xs" style={{ color: "rgba(168,197,212,0.6)", letterSpacing: "0.04em" }}>
                    Online
                  </p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="transition-colors"
                style={{ color: "rgba(168,197,212,0.5)" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "var(--glow)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "rgba(168,197,212,0.5)")}
                aria-label="Close chat"
              >
                <CloseIcon />
              </button>
            </div>

            {/* Messages */}
            <div
              className="flex-1 overflow-y-auto px-4 py-4 space-y-3"
              style={{ scrollbarWidth: "none" }}
            >
              <AnimatePresence initial={false}>
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className="max-w-[75%] px-3.5 py-2.5 rounded-2xl font-body text-sm leading-relaxed"
                      style={
                        msg.role === "user"
                          ? {
                              background: "var(--ocean)",
                              color: "var(--ivory)",
                              borderRadius: "16px 16px 4px 16px",
                            }
                          : {
                              background: "var(--cream)",
                              color: "var(--ink)",
                              border: "1px solid var(--sand)",
                              borderRadius: "16px 16px 16px 4px",
                            }
                      }
                    >
                      {msg.text}
                    </div>
                  </motion.div>
                ))}

                {/* Typing indicator */}
                {typing && (
                  <motion.div
                    key="typing"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex justify-start"
                  >
                    <div
                      className="px-4 py-3 rounded-2xl flex gap-1 items-center"
                      style={{
                        background: "var(--cream)",
                        border: "1px solid var(--sand)",
                        borderRadius: "16px 16px 16px 4px",
                      }}
                    >
                      {[0, 1, 2].map((i) => (
                        <motion.span
                          key={i}
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ background: "var(--stone)" }}
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <div ref={bottomRef} />
            </div>

            {/* Quick replies */}
            {messages.length <= 2 && !typing && (
              <div
                className="px-4 pb-2 flex flex-wrap gap-1.5 flex-shrink-0 border-t pt-2"
                style={{ borderColor: "var(--sand)" }}
              >
                {QUICK_REPLIES.map((label) => (
                  <button
                    key={label}
                    onClick={() => sendMessage(label)}
                    className="px-3 py-1.5 rounded-full font-mono text-xs border transition-all duration-200"
                    style={{ borderColor: "var(--accent)", color: "var(--accent)", background: "transparent" }}
                    onMouseEnter={(e) => {
                      const b = e.currentTarget as HTMLButtonElement;
                      b.style.background = "var(--accent)";
                      b.style.color = "white";
                    }}
                    onMouseLeave={(e) => {
                      const b = e.currentTarget as HTMLButtonElement;
                      b.style.background = "transparent";
                      b.style.color = "var(--accent)";
                    }}
                  >
                    {label}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-2 px-4 py-3 flex-shrink-0 border-t"
              style={{ borderColor: "var(--sand)" }}
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message…"
                className="flex-1 font-body text-sm bg-transparent outline-none"
                style={{ color: "var(--ink)" }}
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200 disabled:opacity-30"
                style={{ background: "var(--ocean)", color: "white" }}
              >
                <SendIcon />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Floating button ── */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg"
        style={{
          background: "var(--ocean)",
          boxShadow: "0 4px 20px rgba(45,90,107,0.35)",
        }}
        aria-label={open ? "Close chat" : "Open chat assistant"}
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              <CloseIcon />
            </motion.span>
          ) : (
            <motion.span
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              <ChatIcon />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
