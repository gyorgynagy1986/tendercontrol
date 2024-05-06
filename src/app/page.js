"use client"
import React, {useEffect } from "react";

import About from "@/layout/About";
import Hero from "@/layout/Hero";
import Services from "@/layout/Services";
import Contact from "@/layout/Contact";
import Footer from "@/components/Footer/Footer";
import Aos from "aos";

export default function Home() {

  useEffect(() => {
    Aos.init({
      // easing: 'ease-in-sine',
    });
    // Cleanup function to reset AOS when components using this hook unmount
   return () => Aos.refresh();
  }, []); // Only re-run if options change

  return (
    <>
      <Hero />
      <main>
        <Services />
        <About />
      </main>
      <Contact />
      <Footer />
    </>
  );
}
