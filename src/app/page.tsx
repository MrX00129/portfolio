import Navbar from "@/components/Navbar";
import CinematicHero from "@/components/CinematicHero";
import ServicesShowcase from "@/components/ServicesShowcase";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#000a18] overflow-x-hidden">
      <Navbar />
      <CinematicHero />
      <div className="relative z-40 bg-[#000a18]">
        <ServicesShowcase />
        <WhyChooseUs />
        <Portfolio />
        <Process />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}

