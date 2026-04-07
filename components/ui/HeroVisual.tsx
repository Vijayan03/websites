"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroVisual() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Very soft and smooth spring for the 'antigravity' feel
  const springConfig = { damping: 40, stiffness: 60, mass: 1 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Mapped transforms: Parallax translation (2-6px floating as requested)
  const translateX = useTransform(smoothX, [-0.5, 0.5], [-8, 8]);
  const translateY = useTransform(smoothY, [-0.5, 0.5], [-8, 8]);

  // Depth feel / Subtle tilt effect
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-6, 6]);

  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth) - 0.5);
      mouseY.set((e.clientY / window.innerHeight) - 0.5);
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div
      className="relative w-full max-w-[500px] aspect-square flex items-center justify-center z-10 p-8"
      style={{ perspective: 1000 }}
    >
      <motion.div
        // Continuous smooth floating effect (up/down slow motion, infinite loop)
        animate={{ y: [-15, 15, -15] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="w-full h-full flex items-center justify-center cursor-default"
      >
        <motion.div
          // Track Mouse for Parallax & Tilt (Antigravity interaction)
          style={{
            x: translateX,
            y: translateY,
            rotateX,
            rotateY,
            transformStyle: "preserve-3d"
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          animate={{
            scale: isHovered ? 1.05 : 1, // Slight scale increase on hover
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full h-full flex items-center justify-center"
        >
          {/* Central Animation / Image */}
          <div
            className="relative w-full h-full z-10"
            style={{ transform: "translateZ(40px)" }} // Pop out 3D effect
          >
            <img
              src="/images/professional-dev.png"
              alt="Professional Software Development workspace"
              className="w-full h-full object-contain pointer-events-none rounded-2xl drop-shadow-2xl"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
