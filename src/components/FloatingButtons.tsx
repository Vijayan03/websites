import { useState } from 'react';
import { Phone, X, MessageCircle } from 'lucide-react';
import { brand } from '../config/config';

export default function FloatingButtons() {
  const [open, setOpen] = useState(false);

  const waMsg = encodeURIComponent('Hi Deva Ice Cream! I would like to enquire about your event catering services. 🍦');

  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3">
      {/* Expanded options */}
      {open && (
        <div className="flex flex-col items-end gap-3 animate-fadeUp">
          {/* WhatsApp */}
          <a
            href={`https://wa.me/${brand.whatsapp}?text=${waMsg}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg transition-all duration-200 hover:-translate-y-0.5 text-sm font-semibold"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle size={18} />
            <span className="hidden sm:inline">WhatsApp Us</span>
          </a>

          {/* Call */}
          <a
            href={`tel:${brand.phoneRaw}`}
            className="flex items-center gap-2 bg-rose-500 hover:bg-rose-600 text-white px-4 py-3 rounded-full shadow-lg transition-all duration-200 hover:-translate-y-0.5 text-sm font-semibold"
            aria-label="Call us"
          >
            <Phone size={18} />
            <span className="hidden sm:inline">Call Us</span>
          </a>
        </div>
      )}

      {/* Main FAB */}
      <button
        onClick={() => setOpen(!open)}
        className={`w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 ${
          open
            ? 'bg-rose-600 hover:bg-rose-700 rotate-0'
            : 'bg-rose-500 hover:bg-rose-600 animate-pulse2'
        } text-white`}
        aria-label="Contact options"
      >
        {open ? <X size={24} /> : <span className="text-2xl">🍦</span>}
      </button>

      {/* Tooltip when closed */}
      {!open && (
        <span className="absolute right-16 bottom-3 bg-rose-800 text-white text-xs px-3 py-1.5 rounded-full whitespace-nowrap shadow-md pointer-events-none opacity-80">
          Book Your Event!
        </span>
      )}
    </div>
  );
}
