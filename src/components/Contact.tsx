import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { brand } from '../config/config';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

interface FormState {
  name: string;
  phone: string;
  event: string;
  message: string;
}

export default function Contact() {
  const ref = useScrollReveal();
  const [form, setForm] = useState<FormState>({ name: '', phone: '', event: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission (replace with real API / EmailJS / Formspree)
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const whatsappMsg = encodeURIComponent(
    `Hi Deva Ice Cream! I'd like to enquire about your services for my event.\n\nName: ${form.name || '(not filled)'}\nPhone: ${form.phone || '(not filled)'}\nEvent: ${form.event || '(not filled)'}\nMessage: ${form.message || '(not filled)'}`
  );

  return (
    <section id="contact" className="section-pad bg-white relative overflow-hidden" ref={ref as React.RefObject<HTMLElement>}>
      {/* Decorative blob */}
      <div className="absolute -top-32 -left-24 w-96 h-96 bg-rose-50 rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="reveal section-subtitle">Get In Touch</p>
          <h2 className="reveal section-title delay-100">Book Us for Your Event</h2>
          <p className="reveal text-rose-900/60 max-w-xl mx-auto mt-3 delay-200">
            Fill the form below or reach us directly — we'll get back to you within 24 hours with a custom quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left — contact info + map */}
          <div className="lg:col-span-2 space-y-6">
            {/* Info cards */}
            {[
              { icon: <Phone size={20} />, label: 'Call Us Now', value: brand.phone, href: `tel:${brand.phoneRaw}` },
              { icon: <Mail size={20} />,  label: 'Email Us',    value: brand.email, href: `mailto:${brand.email}` },
              { icon: <MapPin size={20} />, label: 'Our Location', value: brand.address, href: '#' },
            ].map((item, i) => (
              <a
                key={item.label}
                href={item.href}
                className={`reveal flex items-start gap-4 p-5 card border border-rose-50 group`}
                style={{ animationDelay: `${i * 0.1}s` }}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
              >
                <div className="w-11 h-11 rounded-xl bg-rose-100 group-hover:bg-rose-500 flex items-center justify-center text-rose-600 group-hover:text-white transition-all duration-300 flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs font-semibold text-rose-400 uppercase tracking-wider mb-0.5">{item.label}</p>
                  <p className="text-rose-800 font-medium text-sm leading-snug">{item.value}</p>
                </div>
              </a>
            ))}

            {/* WhatsApp quick action */}
            <a
              href={`https://wa.me/${brand.whatsapp}?text=${encodeURIComponent('Hi Deva Ice Cream! I would like to enquire about your event services.')}`}
              target="_blank"
              rel="noreferrer"
              className="reveal flex items-center justify-center gap-3 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-2xl shadow-md hover:-translate-y-0.5 transition-all duration-300 delay-300"
            >
              <span className="text-xl">💬</span>
              <div className="text-left">
                <p className="text-xs font-normal opacity-90">Chat directly on</p>
                <p className="font-bold">WhatsApp: {brand.phone}</p>
              </div>
            </a>

            {/* Map embed */}
            <div className="reveal rounded-3xl overflow-hidden shadow-md border border-rose-100 delay-400">
              <iframe
                src={brand.mapEmbedUrl}
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Deva Ice Cream Location"
              />
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-3 reveal delay-200">
            {submitted ? (
              <div className="card p-10 text-center h-full flex flex-col items-center justify-center gap-5">
                <span className="text-6xl animate-float inline-block">🎉</span>
                <h3 className="font-display text-2xl text-rose-700 font-bold">Thank You!</h3>
                <p className="text-rose-900/60 max-w-sm">
                  We've received your enquiry and will contact you within 24 hours. Get ready for a sweet event!
                </p>
                <a
                  href={`https://wa.me/${brand.whatsapp}?text=${whatsappMsg}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                >
                  💬 Chat on WhatsApp
                </a>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', event: '', message: '' }); }}
                  className="text-rose-400 text-sm hover:underline"
                >
                  Submit another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card p-8 md:p-10 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-rose-700 mb-1.5">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Priya Sharma"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full border border-rose-200 rounded-xl px-4 py-3 text-rose-900 placeholder-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all duration-200 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-rose-700 mb-1.5">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full border border-rose-200 rounded-xl px-4 py-3 text-rose-900 placeholder-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all duration-200 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-rose-700 mb-1.5">Event Type *</label>
                  <select
                    name="event"
                    required
                    value={form.event}
                    onChange={handleChange}
                    className="w-full border border-rose-200 rounded-xl px-4 py-3 text-rose-900 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all duration-200 text-sm bg-white"
                  >
                    <option value="">Select event type...</option>
                    <option value="Wedding Reception">Wedding Reception</option>
                    <option value="Engagement Ceremony">Engagement Ceremony</option>
                    <option value="Birthday Party">Birthday Party</option>
                    <option value="Corporate Event">Corporate Event</option>
                    <option value="Baby Shower">Baby Shower</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-rose-700 mb-1.5">Message / Requirements</label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us about your event — date, guest count, services needed..."
                    value={form.message}
                    onChange={handleChange}
                    className="w-full border border-rose-200 rounded-xl px-4 py-3 text-rose-900 placeholder-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all duration-200 text-sm resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-1">
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary flex-1 justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <><Send size={16} /> Send Enquiry</>
                    )}
                  </button>

                  <a
                    href={`https://wa.me/${brand.whatsapp}?text=${encodeURIComponent('Hi Deva Ice Cream! I would like to enquire about your event services.')}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-outline flex-1 justify-center text-center"
                  >
                    💬 WhatsApp Us
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
