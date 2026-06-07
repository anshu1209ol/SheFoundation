'use client';

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProgramsSection from "@/components/ProgramsSection";
import ImpactSection from "@/components/ImpactSection";
import StoriesSection from "@/components/StoriesSection";
import GallerySection from "@/components/GallerySection";
import JoinUsSection from "@/components/JoinUsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-quad",
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#FFF8FB] dark:bg-[#0F172A] text-[#1E293B] dark:text-slate-100 transition-colors duration-300">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProgramsSection />
        <ImpactSection />
        <StoriesSection />
        <GallerySection />
        <JoinUsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
