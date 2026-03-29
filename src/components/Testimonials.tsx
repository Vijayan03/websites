import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { testimonials } from '../config/config';

export default function Testimonials() {
  const ref = useScrollReveal();
  const [active, setActive] = useState(0);

  return (
    <section id="testimonials" className="section-pad bg-rose-50 relative overflow-hidden" ref={ref as React.RefObject<HTMLElement>}>
      {/* Blob */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cream-200 rounded-full translate-x-1/3 translate-y-1/3 opacity-50 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="reveal section-subtitle">Happy Clients</p>
          <h2 className="reveal section-title delay-100">What They Say About Us</h2>
        </div>

        {/* Featured testimonial */}
        <div className="reveal card p-8 md:p-12 text-center delay-200 mb-8">
          <div className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-rose-200 shadow-md bg-rose-100 flex items-center justify-center text-rose-500 font-display text-2xl font-bold">
            {testimonials[active].name[0]}
          </div>
          <div className="flex justify-center gap-1 mb-4">
            {Array.from({ length: testimonials[active].rating }).map((_, i) => (
              <span key={i} className="text-yellow-400 text-xl">★</span>
            ))}
          </div>
          <blockquote className="font-display text-xl md:text-2xl italic text-rose-800 leading-relaxed mb-6">
            "{testimonials[active].quote}"
          </blockquote>
          <p className="font-semibold text-rose-700">{testimonials[active].name}</p>
          <p className="text-sm text-rose-900/50 mt-1">{testimonials[active].event}</p>
        </div>

        {/* Thumbnails */}
        <div className="reveal flex justify-center gap-3 flex-wrap delay-300">
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                active === i
                  ? 'bg-rose-500 text-white shadow-md shadow-rose-200'
                  : 'bg-white text-rose-700 hover:bg-rose-100 border border-rose-100'
              }`}
            >
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${active === i ? 'bg-white text-rose-500' : 'bg-rose-200 text-rose-700'}`}>
                {t.name[0]}
              </div>
              {t.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
