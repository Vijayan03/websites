"use client";

import dynamic from "next/dynamic";
import Navigation from "@/components/layout/Navigation";
import ServicesSection from "@/sections/ServicesSection";
import AboutSection from "@/sections/AboutSection";
import ContactSection from "@/sections/ContactSection";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/ui/SmoothScroll";
import WhatsAppWidget from "@/components/ui/WhatsAppWidget";
import ChatbotWidget from "@/components/ui/ChatbotWidget";

// Lazy load the heavy hero with globe
const HeroSection = dynamic(() => import("@/sections/HeroSection"), {
  ssr: false,
  loading: () => (
    <div className="h-screen w-full flex items-center justify-center bg-ivory">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 rounded-full border border-stone animate-pulse" />
        <p className="font-mono text-xs text-stone tracking-widest uppercase">
          Loading
        </p>
      </div>
    </div>
  ),
});

export default function Home() {
  return (
    <SmoothScroll>
      <main className="relative bg-ivory overflow-x-hidden">
        <Navigation />
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </main>
      {/* Fixed floating widgets — outside <main> so they're never clipped */}
      <WhatsAppWidget />
      <ChatbotWidget />
    </SmoothScroll>
  );
}
