"use client";

import { useEffect, useRef } from "react";

export function useScrollProgress() {
  const scrollProgress = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const max =
        document.documentElement.scrollHeight - window.innerHeight;
      scrollProgress.current = max > 0 ? window.scrollY / max : 0;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return scrollProgress;
}

export function useIntersectionReveal(threshold = 0.15) {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
