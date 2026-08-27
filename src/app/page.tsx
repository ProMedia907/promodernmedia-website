import About from "@/components/About";
import BeforeAfter from "@/components/BeforeAfter";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Pricing from "@/components/Pricing";
import Process from "@/components/Process";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Work from "@/components/Work";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Stats />
        <BeforeAfter />
        <Work />
        <Services />
        <Reviews />
        <About />
        <Pricing />
        <Process />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
