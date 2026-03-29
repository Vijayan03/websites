import { useScrollReveal } from '../hooks/useScrollReveal';
import { brand } from '../config/config';

export default function About() {
  const ref = useScrollReveal();

  return (
    <section id="about" className="section-pad bg-cream-50 relative overflow-hidden" ref={ref as React.RefObject<HTMLElement>}>
      {/* Background blobs */}
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-rose-100 rounded-full opacity-40 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-16 w-64 h-64 bg-cream-200 rounded-full opacity-40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image collage */}
        <div className="reveal relative h-96 md:h-[480px]">
          <img
            src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500&q=80"
            alt="Ice cream scoops"
            className="absolute top-0 left-0 w-3/5 h-4/5 object-cover rounded-3xl shadow-xl"
          />
          <img
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&q=80"
            alt="Wedding reception"
            className="absolute bottom-0 right-0 w-3/5 h-3/5 object-cover rounded-3xl shadow-xl border-4 border-white"
          />
          {/* Badge */}
          <div className="absolute top-4 right-4 bg-rose-500 text-white rounded-2xl px-4 py-3 shadow-lg text-center z-10">
            <p className="font-display font-bold text-2xl leading-none">500+</p>
            <p className="text-xs mt-0.5">Events Done</p>
          </div>
        </div>

        {/* Text */}
        <div className="space-y-5">
          <p className="reveal section-subtitle">Our Story</p>
          <h2 className="reveal section-title delay-100">
            Bringing Sweetness to <em>Every</em> Celebration
          </h2>
          <p className="reveal text-rose-900/70 leading-relaxed delay-200">
            {brand.name} was born from a simple belief — every celebration deserves a scoop of happiness.
            We started as a small family counter at local weddings and have grown into one of Tamil Nadu's
            most trusted event dessert and snacks partners.
          </p>
          <p className="reveal text-rose-900/70 leading-relaxed delay-300">
            From intimate engagement ceremonies to grand reception halls welcoming 2,000 guests, we scale
            with you. Our passionate team designs custom ice cream stations, live fruit salad counters,
            theatrical popcorn machines, and curated welcome kits — each crafted with heart.
          </p>

          <ul className="reveal space-y-3 delay-400">
            {[
              'Serving Tamil Nadu since 2015',
              'Own Ice Cream Factory & food-safety audited',
              'Events from 50 to 5,000+ guests',
              'Available 365 days a year',
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-rose-800 font-medium">
                <span className="w-6 h-6 bg-rose-500 rounded-full flex items-center justify-center text-white text-xs flex-shrink-0">✓</span>
                {item}
              </li>
            ))}
          </ul>

          <div className="reveal delay-500">
            <a href={`tel:${brand.phoneRaw}`} className="btn-primary mt-2">
              📞 Talk to Us Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
