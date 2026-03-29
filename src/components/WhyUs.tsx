import { useScrollReveal } from '../hooks/useScrollReveal';
import { whyUsItems } from '../config/config';

export default function WhyUs() {
  const ref = useScrollReveal();

  return (
    <section id="why-us" className="section-pad bg-white relative overflow-hidden" ref={ref as React.RefObject<HTMLElement>}>
      {/* Decorative arc */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-50 rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="reveal section-subtitle">Why Clients Love Us</p>
          <h2 className="reveal section-title delay-100">Why Choose Deva Ice Cream?</h2>
          <p className="reveal text-rose-900/60 max-w-xl mx-auto mt-3 delay-200">
            We don't just supply desserts — we deliver experiences that guests remember long after the event is over.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyUsItems.map((item, i) => (
            <div
              key={item.title}
              className="reveal group flex gap-5 p-7 rounded-3xl border border-rose-100 hover:border-rose-300 hover:bg-rose-50/60 transition-all duration-300"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-rose-100 group-hover:bg-rose-500 flex items-center justify-center text-2xl transition-all duration-300 flex-shrink-0 shadow-sm">
                <span className="group-hover:scale-110 transition-transform duration-300 inline-block">{item.icon}</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-rose-800 text-lg mb-1">{item.title}</h3>
                <p className="text-rose-900/60 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Banner */}
        <div className="reveal mt-14 delay-500 bg-gradient-to-r from-rose-500 to-rose-700 rounded-3xl p-8 md:p-12 text-white text-center shadow-xl shadow-rose-200">
          <h3 className="font-display text-3xl md:text-4xl font-bold mb-3">
            Ready to make your event unforgettable?
          </h3>
          <p className="opacity-85 mb-7 max-w-xl mx-auto">
            Tell us about your event and we'll craft a perfect sweet experience for your guests.
          </p>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="inline-flex items-center gap-2 bg-white text-rose-600 font-bold px-8 py-4 rounded-full shadow-lg hover:bg-rose-50 transition-all duration-300 hover:-translate-y-0.5"
          >
            🎉 Get Free Quote
          </a>
        </div>
      </div>
    </section>
  );
}
