import { useScrollReveal } from '../hooks/useScrollReveal';
import { services } from '../config/config';

export default function Services() {
  const ref = useScrollReveal();

  return (
    <section id="services" className="section-pad bg-white relative" ref={ref as React.RefObject<HTMLElement>}>
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="reveal section-subtitle">What We Offer</p>
          <h2 className="reveal section-title delay-100">Our Services</h2>
          <p className="reveal text-rose-900/60 max-w-xl mx-auto mt-3 delay-200">
            Everything you need to make your event sweeter — set up with care, served with a smile.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <div
              key={svc.id}
              className={`reveal p-7 flex flex-col gap-4 border border-rose-100 bg-white rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-2 transition-all duration-300 delay-${(i + 1) * 100}`}
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              {/* Icon circle */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-sm"
                style={{ backgroundColor: svc.bgColor }}
              >
                {svc.icon}
              </div>

              <h3 className="font-display font-bold text-xl text-rose-800 leading-snug">
                {svc.title}
              </h3>

              <p className="text-rose-900/60 text-sm leading-relaxed flex-1">
                {svc.description}
              </p>

              {/* Feature bullets */}
              <ul className="space-y-1.5">
                {svc.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-rose-700 font-medium">
                    <span className="w-4 h-4 rounded-full flex items-center justify-center text-white text-[10px] flex-shrink-0"
                          style={{ backgroundColor: svc.color }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="reveal text-center mt-12 delay-500">
          <p className="text-rose-900/60 mb-4">Looking for a custom package?</p>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="btn-outline"
          >
            Get a Custom Quote
          </a>
        </div>
      </div>
    </section>
  );
}
