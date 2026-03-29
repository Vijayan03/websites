import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-24 right-5 z-50 w-10 h-10 bg-white border-2 border-rose-200 hover:border-rose-400 text-rose-500 hover:text-rose-700 rounded-full shadow-md flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
      aria-label="Scroll to top"
    >
      <ChevronUp size={20} />
    </button>
  );
}
