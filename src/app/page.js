import About from "@/layout/About";
import Hero from "@/layout/Hero";
import Services from "@/layout/Services";
import Contact from "@/layout/Contact";
import Footer from "@/components/Footer/Footer";

export default function Home() {
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
