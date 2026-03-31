import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { galleryImages, GalleryImage } from '../config/config';

export default function Gallery() {
  const ref = useScrollReveal();
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null);

  return (
    <section id="gallery" className="section-pad bg-rose-50 relative" ref={ref as React.RefObject<HTMLElement>}>
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="reveal section-subtitle">Our Work</p>
          <h2 className="reveal section-title delay-100">Live Event Gallery</h2>
          <p className="reveal text-rose-900/60 max-w-xl mx-auto mt-3 delay-200">
            Real moments from our event setups — serving joy, one cup at a time.
          </p>
        </div>

        {/* Single grid — no tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="reveal overflow-hidden rounded-2xl shadow-sm hover:shadow-xl cursor-pointer aspect-video bg-rose-100 transition-all duration-300 group"
              style={{ animationDelay: `${i * 0.08}s` }}
              onClick={() => setLightbox(img)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightbox.src.replace('w=600', 'w=1200')}
              alt={lightbox.alt}
              className="w-full rounded-2xl shadow-2xl"
            />
            <button
              className="absolute -top-3 -right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center text-rose-700 font-bold shadow-lg hover:bg-rose-50 text-xl"
              onClick={() => setLightbox(null)}
              aria-label="Close"
            >✕</button>
          </div>
        </div>
      )}
    </section>
  );
}
