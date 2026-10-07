"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

const rotatingServices = [
  "High-Performance Websites.",
  "Custom Mobile Apps.",
  "Automated AI Agents.",
  "Data-Driven Marketing.",
  "Scalable Cloud Systems.",
];

export default function ProfessionalHero() {
  const [currentService, setCurrentService] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % rotatingServices.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#000a18] pt-20">
      {/* ── BACKGROUND EFFECTS ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle animated mesh gradient */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[120px] animate-pulse mix-blend-screen" style={{ animationDuration: "8s" }} />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-500/10 blur-[120px] animate-pulse mix-blend-screen" style={{ animationDuration: "10s", animationDelay: "2s" }} />
        <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] rounded-full bg-indigo-500/10 blur-[100px] animate-pulse mix-blend-screen" style={{ animationDuration: "7s", animationDelay: "1s" }} />
        
        {/* Fine grid */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz48L3N2Zz4=')] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-6xl">
        <div className="flex flex-col items-center text-center">
          
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md mb-8"
          >
            <span className="flex h-2 w-2 rounded-full bg-cyan-400">
              <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-cyan-400 opacity-75"></span>
            </span>
            <span className="text-xs sm:text-sm font-medium text-slate-300 tracking-wide">
              The #1 Premium Digital Agency
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-4 leading-[1.1]"
          >
            One Partner. <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400">
              Complete Digital Solutions.
            </span>
          </motion.h1>

          {/* Rotating Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-12 sm:h-16 flex items-center justify-center mt-4 mb-8 overflow-hidden"
          >
            <span className="text-xl sm:text-2xl md:text-3xl font-medium text-slate-400 mr-2">
              We engineer
            </span>
            <div className="relative h-full flex items-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentService}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute left-0 text-xl sm:text-2xl md:text-3xl font-bold text-white whitespace-nowrap"
                >
                  {rotatingServices[currentService]}
                </motion.span>
              </AnimatePresence>
              {/* Invisible spacer to reserve width */}
              <span className="text-xl sm:text-2xl md:text-3xl font-bold invisible whitespace-nowrap px-2">
                High-Performance Websites.
              </span>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 items-center mt-6"
          >
            <Link
              href="#contact"
              className="group relative inline-flex h-14 items-center justify-center px-8 rounded-full bg-white text-black font-bold text-base transition-all hover:scale-[1.02] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-cyan-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center gap-2">
                Start Your Project
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            
            <Link
              href="#portfolio"
              className="inline-flex h-14 items-center justify-center px-8 rounded-full border border-white/10 bg-white/[0.02] text-white font-medium text-base hover:bg-white/[0.08] transition-all backdrop-blur-md"
            >
              Explore Our Work
            </Link>
          </motion.div>

          {/* Stats / Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-20 pt-8 border-t border-white/[0.05] grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 w-full max-w-4xl"
          >
            {[
              { value: "500+", label: "Projects Delivered" },
              { value: "99%", label: "Client Satisfaction" },
              { value: "24/7", label: "Dedicated Support" },
              { value: "10+", label: "Years Experience" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center justify-center text-center">
                <span className="text-3xl md:text-4xl font-black text-white tracking-tight">{stat.value}</span>
                <span className="text-xs font-medium text-slate-500 uppercase tracking-widest mt-2">{stat.label}</span>
              </div>
            ))}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
