import { brand, navLinks, services } from '../config/config';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-rose-900 text-white relative overflow-hidden">
      {/* Wavy top */}
      <div className="wave-divider rotate-180">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path fill="#fff1f2" d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,38 1440,30 L1440,60 L0,60 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🍦</span>
              <span className="font-display font-bold text-2xl">{brand.name}</span>
            </div>
            <p className="text-rose-200 text-sm leading-relaxed mb-5">
              Premium ice cream and gourmet snacks for weddings, parties, and every special occasion.
              Making every event sweeter since 2015.
            </p>
            {/* Socials */}
            <div className="flex gap-3">
              <a
                href={brand.socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-rose-500 rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href={brand.socialLinks.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-rose-500 rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-rose-200 hover:text-white text-sm transition-colors duration-200 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((svc) => (
                <li key={svc.id} className="flex items-center gap-2 text-rose-200 text-sm">
                  <span>{svc.icon}</span> {svc.title}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href={`tel:${brand.phoneRaw}`} className="flex items-start gap-3 text-rose-200 hover:text-white text-sm transition-colors duration-200 group">
                  <Phone size={16} className="mt-0.5 flex-shrink-0 group-hover:text-rose-300" />
                  {brand.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${brand.email}`} className="flex items-start gap-3 text-rose-200 hover:text-white text-sm transition-colors duration-200 group">
                  <Mail size={16} className="mt-0.5 flex-shrink-0 group-hover:text-rose-300" />
                  {brand.email}
                </a>
              </li>
              <li>
                <p className="flex items-start gap-3 text-rose-200 text-sm">
                  <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                  {brand.address}
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-rose-300 text-xs text-center">
            © {year} {brand.name}. All rights reserved. | FSSAI Licensed
          </p>
          <p className="text-rose-400 text-xs">
            Made with ❤️ for sweet celebrations
          </p>
        </div>
      </div>
    </footer>
  );
}
