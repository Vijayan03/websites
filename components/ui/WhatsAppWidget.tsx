"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PHONE = "917904085435";

const QUICK_MESSAGES = [
  "I'd like to start a project with DevRatStudio.",
  "Can you tell me more about your services?",
  "I have a quick question for the team.",
] as const;

// ── Icons ─────────────────────────────────────────────────────────────────────
function WhatsAppIcon({ size = 24 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" width={18} height={18}>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

// ── Widget ────────────────────────────────────────────────────────────────────
export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);

  const openChat = (message: string) => {
    const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

      {/* ── Popup panel ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="wa-popup"
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="w-72 rounded-2xl border overflow-hidden"
            style={{
              background: "white",
              borderColor: "var(--sand)",
              boxShadow: "0 8px 40px rgba(13,31,39,0.12), 0 0 0 1px rgba(232,223,208,0.6)",
            }}
          >
            {/* Header */}
            <div
              className="flex items-center gap-3 px-5 py-4"
              style={{ background: "#25D366" }}
            >
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <WhatsAppIcon size={18} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-display font-semibold text-sm text-white leading-tight">
                  DevRatStudio
                </p>
                <p className="font-mono text-xs text-white/70 mt-0.5" style={{ letterSpacing: "0.04em" }}>
                  Typically replies in minutes
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-white/60 hover:text-white transition-colors"
                aria-label="Close"
              >
                <CloseIcon />
              </button>
            </div>

            {/* Body */}
            <div className="px-5 py-4 space-y-2.5">
              <p
                className="font-mono text-xs mb-3"
                style={{ color: "var(--stone)", letterSpacing: "0.06em" }}
              >
                START A CONVERSATION
              </p>
              {QUICK_MESSAGES.map((msg) => (
                <button
                  key={msg}
                  onClick={() => openChat(msg)}
                  className="w-full text-left px-4 py-3 rounded-xl border font-body text-sm transition-all duration-200 leading-snug"
                  style={{
                    borderColor: "var(--sand)",
                    color: "var(--ink)",
                    background: "var(--ivory)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "#25D366";
                    (e.currentTarget as HTMLButtonElement).style.background = "rgba(37,211,102,0.04)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--sand)";
                    (e.currentTarget as HTMLButtonElement).style.background = "var(--ivory)";
                  }}
                >
                  {msg}
                </button>
              ))}
            </div>

            {/* Footer */}
            <div
              className="px-5 py-3 border-t text-center"
              style={{ borderColor: "var(--sand)" }}
            >
              <p
                className="font-mono text-xs"
                style={{ color: "var(--stone)", letterSpacing: "0.05em" }}
              >
                Opens in WhatsApp
              </p>
            </div>
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
          background: "#25D366",
          boxShadow: "0 4px 20px rgba(37,211,102,0.4)",
        }}
        aria-label={open ? "Close WhatsApp chat" : "Open WhatsApp chat"}
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
              key="wa"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              <WhatsAppIcon size={26} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
