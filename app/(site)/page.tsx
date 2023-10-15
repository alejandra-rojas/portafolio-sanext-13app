"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

import WelcomeSection from "./sections/WelcomeSection";
import AboutSection from "./sections/AboutSection";
import ProjectsSection from "./sections/ProjectsSection";
import ContactSection from "./sections/ContactSection";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    // lenis.on("scroll", (e) => {
    //   console.log(e);
    // });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main>
      <WelcomeSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
