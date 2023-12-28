"use client";
import { useEffect } from "react";
// Animation pakage import
import Aos from "aos";
import "aos/dist/aos.css";

import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import About from "./components/About";
import ProjectSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";
import Fotter from "./components/Fotter";
import Achievement from "./components/Achievement";

export default function Home() {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
    });
  });
  return (
    <main className="flex min-h-screen flex-col bg-[#111827]">
      <div className="container mx-auto py-4 px-12">
        <Navbar />
        <HeroSection />
        <Achievement />
        <About />
        <ProjectSection />
        <ContactSection />
        <Fotter />
      </div>
    </main>
  );
}
