import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesShowcase from "@/components/ServicesShowcase";

export const metadata: Metadata = {
  title: "All Digital Services & Solutions | WebFix Expert",
  description: "Explore all 24 specialized digital services by WebFix Expert including WordPress development, mobile app engineering, SEO, Google/Meta/ChatGPT Ads, and AI automation.",
};

export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#000a18] overflow-x-hidden">
      <Navbar />
      
      {/* Hero Header */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[#001428] to-[#000a18] relative overflow-hidden border-b border-white/5">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 text-center relative z-10 max-w-4xl">
          <span className="text-xs font-mono font-bold text-cyan-400 tracking-widest uppercase px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 inline-block mb-4">
            WEBFIX EXPERT CATALOG
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
            All 24 Digital Services & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">Growth Solutions</span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed">
            Everything your business needs under one roof. Compare our core engineering, marketing, advertising, and AI automation capabilities below.
          </p>
        </div>
      </section>

      {/* Main 24 Services Grid & AI Tools */}
      <ServicesShowcase />

      <Footer />
    </main>
  );
}
