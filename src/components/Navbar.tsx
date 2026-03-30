import { useState, useEffect } from 'react';
import { Menu, X, IceCream } from 'lucide-react';
import { brand, navLinks } from '../config/config';

export default function Navbar() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <span className="text-2xl group-hover:animate-float inline-block">🍦</span>
          <span className="font-display font-bold text-xl md:text-2xl text-rose-700 leading-none">
            {brand.name}
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="px-4 py-2 text-sm font-medium text-rose-900 hover:text-rose-500 rounded-full hover:bg-rose-50 transition-all duration-200"
            >
              {link.label}
            </button>
          ))}
          <a
            href={`tel:${brand.phoneRaw}`}
            className="ml-2 text-sm font-semibold text-rose-700 hover:text-rose-500 px-3 py-2 rounded-full hover:bg-rose-50 transition-all duration-200"
          >
            📞 {brand.phone}
          </a>
          <a
            href={`tel:${brand.phoneRaw}`}
            className="ml-2 btn-primary text-sm py-2.5 px-5"
          >
            <IceCream size={16} /> Book Now
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-full text-rose-700 hover:bg-rose-50"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white/97 backdrop-blur-md border-t border-rose-100 shadow-lg">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-left px-4 py-3 font-medium text-rose-900 hover:text-rose-500 hover:bg-rose-50 rounded-xl transition-all duration-200"
              >
                {link.label}
              </button>
            ))}
            <a
              href={`tel:${brand.phoneRaw}`}
              className="mt-2 btn-primary justify-center"
            >
              📞 Call Us Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
