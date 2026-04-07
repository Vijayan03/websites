export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink py-12 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="relative w-7 h-7">
              <div className="absolute inset-0 rounded-full border border-glow/30" />
              <div className="absolute inset-1.5 rounded-full bg-glow/10" />
              <div className="absolute inset-3 rounded-full bg-glow/60" />
            </div>
            <span className="font-display text-lg font-light text-ivory/80">
              DevRat<span className="text-glow">Studio</span>
            </span>
          </div>

          {/* Middle */}
          <p className="font-mono text-xs text-stone/50 tracking-widest uppercase text-center">
            Building digital futures · Globally
          </p>

          {/* Copyright */}
          <p className="font-body text-xs text-stone/40 font-light">
            © {year} DevRatStudio. All rights reserved.
          </p>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex gap-8">
            {["Services", "About", "Contact"].map((link) => (
              <button
                key={link}
                onClick={() => {
                  const el = document.querySelector(`#${link.toLowerCase()}`);
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className="font-body text-xs text-stone/40 hover:text-stone/80 transition-colors duration-300 font-light"
              >
                {link}
              </button>
            ))}
          </div>
          <a
            href="mailto:devratstudio2006@gmail.com"
            className="font-mono text-xs text-stone/40 hover:text-glow/60 transition-colors duration-300"
          >
            devratstudio2006@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
