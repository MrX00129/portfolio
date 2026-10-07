"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowRight, Lightbulb, PenTool, Code, Cpu, ShieldCheck, Rocket, TrendingUp } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const journeySteps = [
  {
    id: 1,
    title: "Business Idea",
    desc: "We start by understanding your vision, target audience, and business goals to formulate a winning strategy.",
    icon: <Lightbulb size={24} className="text-yellow-400" />,
    color: "from-yellow-400/20 to-transparent",
    screenContent: (
      <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
        <Lightbulb size={64} className="text-yellow-400 animate-pulse" />
        <div className="w-48 h-2 bg-white/10 rounded-full overflow-hidden">
          <div className="w-1/2 h-full bg-yellow-400/50 rounded-full animate-pulse"></div>
        </div>
        <p className="text-white/50 font-mono text-sm">Drafting Strategy...</p>
      </div>
    )
  },
  {
    id: 2,
    title: "UI/UX Design",
    desc: "Crafting premium, Apple-level interfaces that look beautiful and convert visitors into customers.",
    icon: <PenTool size={24} className="text-pink-400" />,
    color: "from-pink-400/20 to-transparent",
    screenContent: (
      <div className="w-full h-full p-6 flex flex-col gap-4">
        <div className="flex justify-between items-center mb-2">
          <div className="w-8 h-8 rounded-full bg-pink-400/30"></div>
          <div className="flex gap-2">
            <div className="w-16 h-2 bg-white/20 rounded"></div>
            <div className="w-16 h-2 bg-white/20 rounded"></div>
          </div>
        </div>
        <div className="w-full h-32 bg-gradient-to-br from-pink-400/20 to-purple-500/20 rounded-xl border border-white/10"></div>
        <div className="grid grid-cols-2 gap-4">
          <div className="h-16 bg-white/5 rounded-xl border border-white/5"></div>
          <div className="h-16 bg-white/5 rounded-xl border border-white/5"></div>
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: "Development",
    desc: "Writing clean, scalable, and enterprise-grade code using Next.js, Node.js, and modern tech stacks.",
    icon: <Code size={24} className="text-blue-400" />,
    color: "from-blue-400/20 to-transparent",
    screenContent: (
      <div className="w-full h-full bg-[#1E1E1E] p-4 font-mono text-sm text-green-400 flex flex-col items-start justify-start overflow-hidden relative">
        <div className="flex items-center gap-2 mb-4 w-full border-b border-white/10 pb-2">
          <span className="w-3 h-3 rounded-full bg-red-500"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
        </div>
        <p><span className="text-pink-500">import</span> {'{'} React {'}'} <span className="text-pink-500">from</span> 'react';</p>
        <p className="mt-2"><span className="text-blue-400">const</span> <span className="text-yellow-200">App</span> = () =&gt; {'{'}</p>
        <p className="ml-4 text-gray-400">// Building scalable architecture...</p>
        <p className="ml-4"><span className="text-pink-500">return</span> (</p>
        <p className="ml-8 text-blue-300">&lt;div className="app"&gt;</p>
        <div className="absolute bottom-4 right-4">
          <Code size={48} className="text-white/5" />
        </div>
      </div>
    )
  },
  {
    id: 4,
    title: "AI Integration",
    desc: "Embedding advanced AI automation to save you hundreds of hours and streamline business operations.",
    icon: <Cpu size={24} className="text-purple-400" />,
    color: "from-purple-400/20 to-transparent",
    screenContent: (
      <div className="flex flex-col items-center justify-center h-full relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <Cpu size={80} className="text-purple-400 relative z-10" />
        <div className="mt-8 flex items-center justify-center gap-2">
           {[...Array(5)].map((_, i) => (
             <motion.div 
               key={i}
               animate={{ height: ["10px", "30px", "10px"] }}
               transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
               className="w-1.5 bg-purple-400 rounded-full"
             />
           ))}
        </div>
      </div>
    )
  },
  {
    id: 5,
    title: "Testing & QA",
    desc: "Rigorous automated testing and quality assurance to ensure bug-free, robust performance.",
    icon: <ShieldCheck size={24} className="text-green-400" />,
    color: "from-green-400/20 to-transparent",
    screenContent: (
      <div className="w-full h-full p-8 flex flex-col justify-center">
        <div className="space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center gap-4 bg-white/5 p-3 rounded-lg border border-white/5">
               <div className="w-6 h-6 rounded-full bg-green-400/20 flex items-center justify-center">
                  <ShieldCheck size={14} className="text-green-400" />
               </div>
               <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                 <div className="w-full h-full bg-green-400"></div>
               </div>
               <span className="text-xs text-green-400 font-mono">PASS</span>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: 6,
    title: "Launch",
    desc: "Deploying your platform globally with optimized Cloud infrastructure and zero downtime.",
    icon: <Rocket size={24} className="text-orange-400" />,
    color: "from-orange-400/20 to-transparent",
    screenContent: (
      <div className="flex flex-col items-center justify-center h-full relative">
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Rocket size={100} className="text-orange-400 drop-shadow-[0_0_30px_rgba(251,146,60,0.5)]" />
        </motion.div>
        <div className="mt-8 text-xl font-bold tracking-widest text-white/80">DEPLOYING...</div>
      </div>
    )
  },
  {
    id: 7,
    title: "Growth & Scaling",
    desc: "Continuous monitoring, digital marketing, and scaling your business to new heights.",
    icon: <TrendingUp size={24} className="text-brand-cyan" />,
    color: "from-brand-cyan/20 to-transparent",
    screenContent: (
      <div className="w-full h-full p-6 flex items-end relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-brand-cyan/10 to-transparent"></div>
        <div className="w-full flex items-end justify-between gap-2 h-[60%] relative z-10">
          {[40, 55, 45, 70, 60, 85, 100].map((height, i) => (
            <motion.div 
              key={i} 
              initial={{ height: 0 }}
              animate={{ height: `${height}%` }}
              transition={{ duration: 1, delay: i * 0.1 }}
              className="w-full bg-gradient-to-t from-brand-blue to-brand-cyan rounded-t-sm"
            ></motion.div>
          ))}
        </div>
        <TrendingUp size={120} className="absolute top-1/4 right-1/4 text-white/5 z-0" />
      </div>
    )
  }
];

export default function StoryTellingHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useGSAP(() => {
    if (!containerRef.current || !scrollRef.current) return;

    // Pin the entire section while scrolling
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "+=350%", // Scroll distance
      pin: true,
      onUpdate: (self) => {
        // Calculate which step should be active based on scroll progress
        const progress = self.progress;
        const totalSteps = journeySteps.length;
        // e.g. 0 to 0.14 = step 1, 0.14 to 0.28 = step 2, etc.
        const newIndex = Math.min(
          Math.floor(progress * totalSteps),
          totalSteps - 1
        );
        setActiveIndex(newIndex);
      }
    });

  }, { scope: containerRef });

  return (
    <>
      {/* Static Hero Intro */}
      <section className="relative pt-32 pb-10 lg:pt-40 lg:pb-16 overflow-hidden bg-[#002240]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/20 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-brand-yellow mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-yellow opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-yellow"></span>
              </span>
              WebFix Expert
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
              We Fix. We Build. <br className="hidden md:block" />
              <span className="text-gradient">We Grow Businesses.</span>
            </h1>
            
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
              Complete Digital Solutions, AI Automation, Website Development, App Development and Growth Systems to scale your enterprise.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#contact"
                className="px-8 py-4 rounded-full bg-brand-blue hover:bg-blue-600 text-white font-semibold flex items-center gap-2 transition-all shadow-lg shadow-brand-blue/30 hover:shadow-brand-blue/50"
              >
                Get Started <ArrowRight size={20} />
              </Link>
              <Link
                href="/portfolio"
                className="px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold flex items-center gap-2 transition-all"
              >
                View Portfolio
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* GSAP Scroll Storytelling Section */}
      <section ref={containerRef} className="bg-[#002240] relative h-screen w-full flex items-center overflow-hidden border-t border-white/5">
        
        {/* Dynamic Background Glow based on active step */}
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[150px] pointer-events-none transition-colors duration-1000 bg-gradient-to-tr ${journeySteps[activeIndex].color}`} />

        <div className="container mx-auto px-6 md:px-12 h-full flex flex-col md:flex-row items-center justify-center gap-12 relative z-10">
          
          {/* Left Side: Scrolling Text (Indicators) */}
          <div className="w-full md:w-1/2 flex flex-col justify-center gap-8 md:pl-10">
            <h2 className="text-3xl font-bold text-white mb-8">The Development Journey</h2>
            
            <div className="space-y-6 relative border-l-2 border-white/10 pl-8 ml-4">
               {/* Progress Line */}
               <motion.div 
                 className="absolute left-[-2px] top-0 w-[2px] bg-brand-blue"
                 animate={{ height: `${(activeIndex / (journeySteps.length - 1)) * 100}%` }}
                 transition={{ duration: 0.3 }}
               />

               {journeySteps.map((step, index) => {
                 const isActive = index === activeIndex;
                 const isPassed = index < activeIndex;
                 
                 return (
                   <div 
                     key={step.id} 
                     className={`relative transition-all duration-500 ${isActive ? 'opacity-100 scale-105' : 'opacity-30 scale-100'} ${isPassed ? 'opacity-60' : ''}`}
                   >
                     {/* Bullet Point */}
                     <div className={`absolute -left-[41px] top-1 w-4 h-4 rounded-full border-2 border-[#002240] z-10 transition-colors duration-500 ${isActive ? 'bg-brand-blue shadow-[0_0_10px_#2563EB]' : isPassed ? 'bg-sky-500' : 'bg-white/20'}`} />
                     
                     <div className="flex items-center gap-3 mb-2">
                       <div className={`p-2 rounded-lg bg-white/5 border border-white/10 ${isActive ? 'bg-white/10 shadow-lg shadow-white/5' : ''}`}>
                         {step.icon}
                       </div>
                       <h3 className={`text-xl font-bold transition-colors ${isActive ? 'text-white' : 'text-gray-400'}`}>
                         {step.title}
                       </h3>
                     </div>
                     {isActive && (
                       <motion.p 
                         initial={{ opacity: 0, height: 0 }}
                         animate={{ opacity: 1, height: "auto" }}
                         className="text-gray-400 text-sm mt-2 leading-relaxed max-w-md"
                       >
                         {step.desc}
                       </motion.p>
                     )}
                   </div>
                 );
               })}
            </div>
          </div>

          {/* Right Side: Sticky Device Mockup */}
          <div className="w-full md:w-1/2 flex justify-center items-center h-[50vh] md:h-[80vh]">
             <div className="relative w-full max-w-2xl aspect-[16/10] glass rounded-xl md:rounded-2xl border border-white/20 shadow-2xl p-2 md:p-3 shadow-[#001122]/50">
                {/* Laptop Camera / Bezel */}
                <div className="absolute top-1 md:top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#001122]"></div>
                
                {/* Screen Content Window */}
                <div className="w-full h-full bg-[#001833] rounded-lg overflow-hidden border border-[#001122]/50 relative">
                   <AnimatePresence mode="wait">
                     <motion.div
                       key={activeIndex}
                       initial={{ opacity: 0, scale: 0.95 }}
                       animate={{ opacity: 1, scale: 1 }}
                       exit={{ opacity: 0, scale: 1.05 }}
                       transition={{ duration: 0.4 }}
                       className="w-full h-full"
                     >
                       {journeySteps[activeIndex].screenContent}
                     </motion.div>
                   </AnimatePresence>
                </div>
                
                {/* Laptop Base (Bottom lip) */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[110%] h-4 bg-[#002240] rounded-b-xl border-t border-sky-800 flex justify-center shadow-2xl shadow-[#001122]/50">
                   <div className="w-1/4 h-1 bg-[#001122] rounded-b-md mt-1"></div>
                </div>
             </div>
          </div>

        </div>
      </section>
    </>
  );
}
