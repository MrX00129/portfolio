"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { ArrowRight, Layout, Monitor, Layers, User, Mail } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function LaptopShowcaseHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const laptopRef = useRef<HTMLDivElement>(null);
  const screenContentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current || !laptopRef.current || !screenContentRef.current) return;

    // Pin the entire section
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=400%", // 4 screens of scrolling
        pin: true,
        scrub: 1, // Smooth scrubbing
      }
    });

    // 1. Initial zoom in of the laptop slightly
    tl.to(laptopRef.current, {
      scale: 1,
      duration: 1,
      ease: "power2.inOut",
    });

    // 2. Scroll through the inner website content
    // There are 5 sections, so we translate Y by -80% to see the last one.
    tl.to(screenContentRef.current, {
      y: "-80%",
      duration: 4,
      ease: "none",
    });

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative h-screen w-full bg-[#001833] flex flex-col items-center justify-center overflow-hidden border-b border-white/5">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-brand-blue/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Hero Intro (Fades out as user scrolls, or stays at top) */}
      <div className="absolute top-16 md:top-24 left-0 w-full z-20 px-6 text-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-brand-cyan mb-6 pointer-events-auto">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan"></span>
            </span>
            Next-Gen Digital Agency
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-4 leading-tight">
            Build. Fix. <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">Grow.</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8 pointer-events-auto">
            We create high-performance websites that look stunning, load fast, and convert visitors into customers.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pointer-events-auto">
            <Link
              href="#contact"
              className="px-8 py-4 rounded-full bg-brand-blue hover:bg-blue-600 text-white font-semibold flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] hover:-translate-y-1"
            >
              Start Your Project <ArrowRight size={20} />
            </Link>
            <Link
              href="/portfolio"
              className="px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold flex items-center gap-2 transition-all hover:-translate-y-1"
            >
              View Portfolio
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Laptop Mockup Container */}
      <div className="relative w-full max-w-6xl px-4 md:px-12 mt-40 md:mt-64 z-10 perspective-1000">
        <motion.div 
          ref={laptopRef}
          initial={{ scale: 0.85, rotateX: 5 }}
          animate={{ scale: 0.85, rotateX: 0 }}
          transition={{ duration: 1 }}
          className="relative w-full aspect-[16/10] mx-auto transform-style-3d"
        >
          {/* Laptop Screen / Bezel */}
          <div className="absolute inset-0 bg-[#001122] rounded-t-2xl md:rounded-t-3xl border-2 md:border-4 border-[#002240] shadow-[0_30px_60px_rgba(0,17,34,0.8)] overflow-hidden flex flex-col p-2 md:p-3 pb-4 md:pb-6 relative z-10">
            
            {/* Camera */}
            <div className="absolute top-1.5 md:top-2 left-1/2 -translate-x-1/2 w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-[#000810] border border-white/5 flex items-center justify-center">
               <div className="w-0.5 h-0.5 rounded-full bg-brand-cyan/50"></div>
            </div>

            {/* Screen Inner Display */}
            <div className="w-full h-full bg-[#001833] rounded-lg md:rounded-xl overflow-hidden relative border border-[#002240]/50 mt-2 md:mt-3">
              
              {/* Glass Glare Effect */}
              <div className="absolute top-0 right-0 w-[150%] h-[150%] bg-gradient-to-bl from-white/5 to-transparent rotate-12 -translate-y-1/4 translate-x-1/4 pointer-events-none z-50"></div>

              {/* The "Website" scrolling content */}
              <div ref={screenContentRef} className="absolute top-0 left-0 w-full h-[500%] flex flex-col will-change-transform">
                
                {/* 1. Dummy Home Section */}
                <div className="w-full h-1/5 bg-[#001833] relative p-6 flex flex-col items-center justify-center text-center border-b border-white/5">
                   <div className="w-full max-w-md">
                     <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-brand-blue to-brand-cyan mb-6 flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                        <Monitor size={32} className="text-white" />
                     </div>
                     <div className="h-4 w-3/4 bg-white/20 rounded-full mx-auto mb-4"></div>
                     <div className="h-8 w-full bg-white/10 rounded-full mx-auto mb-4"></div>
                     <div className="h-2 w-1/2 bg-white/5 rounded-full mx-auto mb-8"></div>
                     <div className="flex justify-center gap-4">
                       <div className="h-10 w-32 bg-brand-blue rounded-full"></div>
                       <div className="h-10 w-32 bg-white/10 rounded-full border border-white/10"></div>
                     </div>
                   </div>
                   <p className="absolute bottom-4 left-4 text-[10px] text-gray-500 font-mono flex items-center gap-1">
                     <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse"></span>
                     HOMEPAGE
                   </p>
                </div>

                {/* 2. Dummy Services Section */}
                <div className="w-full h-1/5 bg-[#001122] relative p-6 flex flex-col justify-center border-b border-white/5">
                   <div className="h-6 w-48 bg-white/10 rounded-full mb-8"></div>
                   <div className="grid grid-cols-3 gap-4">
                     {[1,2,3,4,5,6].map((i) => (
                       <div key={i} className="aspect-square bg-[#001833] rounded-xl border border-white/5 p-4 flex flex-col justify-between">
                         <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-brand-cyan">
                           <Layout size={16} />
                         </div>
                         <div className="space-y-2">
                           <div className="h-2 w-full bg-white/10 rounded-full"></div>
                           <div className="h-2 w-2/3 bg-white/5 rounded-full"></div>
                         </div>
                       </div>
                     ))}
                   </div>
                   <p className="absolute bottom-4 left-4 text-[10px] text-gray-500 font-mono">02 / SERVICES</p>
                </div>

                {/* 3. Dummy Portfolio Section */}
                <div className="w-full h-1/5 bg-[#001833] relative p-6 flex flex-col justify-center border-b border-white/5">
                   <div className="flex justify-between items-center mb-8">
                     <div className="h-6 w-32 bg-white/10 rounded-full"></div>
                     <div className="flex gap-2">
                        <div className="w-8 h-2 bg-brand-blue rounded-full"></div>
                        <div className="w-4 h-2 bg-white/10 rounded-full"></div>
                        <div className="w-4 h-2 bg-white/10 rounded-full"></div>
                     </div>
                   </div>
                   <div className="grid grid-cols-2 gap-4 h-64">
                     <div className="bg-gradient-to-br from-brand-blue/20 to-brand-cyan/20 rounded-xl border border-white/5 relative overflow-hidden flex items-center justify-center">
                        <Layers size={48} className="text-white/20" />
                     </div>
                     <div className="grid grid-rows-2 gap-4">
                       <div className="bg-white/5 rounded-xl border border-white/5"></div>
                       <div className="bg-white/5 rounded-xl border border-white/5"></div>
                     </div>
                   </div>
                   <p className="absolute bottom-4 left-4 text-[10px] text-gray-500 font-mono">03 / PORTFOLIO</p>
                </div>

                {/* 4. Dummy About Section */}
                <div className="w-full h-1/5 bg-[#001122] relative p-6 flex items-center gap-8 border-b border-white/5">
                   <div className="w-1/2 space-y-4">
                     <div className="h-6 w-32 bg-white/10 rounded-full mb-6"></div>
                     <div className="h-2 w-full bg-white/5 rounded-full"></div>
                     <div className="h-2 w-full bg-white/5 rounded-full"></div>
                     <div className="h-2 w-3/4 bg-white/5 rounded-full"></div>
                     <div className="h-2 w-full bg-white/5 rounded-full mt-4"></div>
                     <div className="h-2 w-5/6 bg-white/5 rounded-full"></div>
                     <div className="flex gap-4 mt-8">
                       <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400">
                         <User size={20} />
                       </div>
                       <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400">
                         <User size={20} />
                       </div>
                     </div>
                   </div>
                   <div className="w-1/2 aspect-square rounded-full bg-gradient-to-tr from-[#001833] to-[#002240] border border-white/5 shadow-2xl flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
                   </div>
                   <p className="absolute bottom-4 left-4 text-[10px] text-gray-500 font-mono">04 / ABOUT US</p>
                </div>

                {/* 5. Dummy Contact Section */}
                <div className="w-full h-1/5 bg-[#001833] relative p-6 flex flex-col items-center justify-center">
                   <div className="w-full max-w-sm glass p-6 rounded-2xl border border-white/10 text-center">
                      <div className="w-12 h-12 mx-auto rounded-full bg-brand-cyan/20 flex items-center justify-center text-brand-cyan mb-4">
                        <Mail size={24} />
                      </div>
                      <div className="h-6 w-48 bg-white/10 rounded-full mx-auto mb-8"></div>
                      <div className="space-y-4">
                        <div className="h-10 w-full bg-[#001122] rounded-lg border border-white/5"></div>
                        <div className="h-10 w-full bg-[#001122] rounded-lg border border-white/5"></div>
                        <div className="h-24 w-full bg-[#001122] rounded-lg border border-white/5"></div>
                        <div className="h-12 w-full bg-brand-blue rounded-lg mt-4"></div>
                      </div>
                   </div>
                   <p className="absolute bottom-4 left-4 text-[10px] text-gray-500 font-mono flex items-center gap-1">
                     <span className="w-2 h-2 rounded-full bg-green-500"></span>
                     SECURE CONTACT
                   </p>
                </div>

              </div>
            </div>
          </div>
          
          {/* Laptop Base (Keyboard area / bottom lip) */}
          <div className="absolute -bottom-3 md:-bottom-5 left-1/2 -translate-x-1/2 w-[115%] h-3 md:h-5 bg-gradient-to-b from-[#002240] to-[#001122] rounded-b-xl md:rounded-b-3xl border-t border-sky-800 flex justify-center shadow-[0_20px_40px_rgba(0,17,34,0.9)] z-0">
             {/* Touchpad Indentation */}
             <div className="w-1/4 h-1 md:h-1.5 bg-[#000810] rounded-b-md md:rounded-b-lg mt-0.5"></div>
          </div>
          
          {/* Desk Glow / Shadow */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[120%] h-8 bg-brand-blue/30 blur-[30px] rounded-[100%] z-[-1]"></div>
        </motion.div>
      </div>

    </section>
  );
}
