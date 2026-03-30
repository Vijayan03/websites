import { brand } from '../config/config';

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const waMsg = encodeURIComponent('Hi Deva Ice Cream! I would like to enquire about your event services.');

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=1800&q=80')",
        }}
      />
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-900/75 via-rose-700/55 to-cream-400/30" />

      {/* Floating ice cream emojis – decorative */}
      <span className="absolute top-28 left-8 text-5xl opacity-30 animate-float delay-100 select-none pointer-events-none">🍦</span>
      <span className="absolute top-40 right-12 text-4xl opacity-25 animate-float delay-300 select-none pointer-events-none">🍨</span>
      <span className="absolute bottom-32 left-16 text-3xl opacity-20 animate-float delay-500 select-none pointer-events-none">🍓</span>
      <span className="absolute bottom-24 right-10 text-4xl opacity-25 animate-float delay-200 select-none pointer-events-none">🍿</span>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Accent label */}
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-medium px-5 py-2 rounded-full mb-6 animate-fadeUp">
          <span>✨</span> Weddings · Parties · Special Occasions
        </div>

        {/* Main heading */}
        <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-tight mb-4 animate-fadeUp delay-100">
          {brand.name}
        </h1>

        {/* Tagline */}
        <p className="font-accent text-cream-200 text-2xl md:text-3xl mb-4 animate-fadeUp delay-200"
           style={{ color: '#fce48f' }}>
          {brand.tagline}
        </p>

        <p className="text-white/85 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed animate-fadeUp delay-300">
          {brand.subTagline}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeUp delay-400">
          <a
            href={`tel:${brand.phoneRaw}`}
            className="inline-flex items-center gap-2 bg-white text-rose-600 font-bold text-base px-9 py-4 rounded-full shadow-lg hover:bg-rose-50 hover:-translate-y-0.5 transition-all duration-300"
          >
            📞 Call Now
          </a>
          <a
            href={`https://wa.me/${brand.whatsapp}?text=${waMsg}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold text-base px-9 py-4 rounded-full shadow-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            💬 WhatsApp Us
          </a>
        </div>

        {/* Stats bar */}
        <div className="mt-14 flex flex-wrap justify-center gap-8 md:gap-14 animate-fadeUp delay-500">
          {[
            { num: '500+', label: 'Events Served' },
            { num: '50+', label: 'Flavours' },
            { num: '100%', label: 'Hygiene Certified' },
            { num: '5★', label: 'Client Rating' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl font-bold text-white">{stat.num}</p>
              <p className="text-white/70 text-sm mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0 wave-divider">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path fill="#fffdf5" d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z" />
        </svg>
      </div>
    </section>
  );
}
