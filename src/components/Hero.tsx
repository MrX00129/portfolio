"use client";

import { motion } from "framer-motion";
import { ArrowRight, Monitor, Smartphone, Play, Code } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-cyan/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
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
              Hi, I&apos;m
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-4">
              ALI
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-medium mb-6">
              Founder & CEO of <span className="text-brand-blue">WebFix Expert</span>
            </p>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              We Fix. We Build. <br className="hidden md:block" />
              <span className="text-gradient">We Grow Businesses.</span>
            </h2>
            
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
              We don&apos;t just build websites. We provide Website Development, Mobile App Development, Digital Marketing, AI Automation, Website Maintenance, Cloud Solutions, and Business Growth Solutions.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="#services"
                className="px-8 py-4 rounded-full bg-brand-blue hover:bg-blue-600 text-white font-semibold flex items-center gap-2 transition-all shadow-lg shadow-brand-blue/30 hover:shadow-brand-blue/50 hover:-translate-y-1"
              >
                Explore Our Services <ArrowRight size={20} />
              </Link>
              <Link
                href="#portfolio"
                className="px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold flex items-center gap-2 transition-all hover:-translate-y-1"
              >
                View Our Portfolio <Monitor size={20} />
              </Link>
            </div>
          </motion.div>

          {/* Hero Visual Mockups */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] lg:h-[600px] w-full"
          >
            {/* Laptop Mockup */}
            <div className="absolute top-10 right-10 lg:right-0 w-[80%] h-auto glass rounded-xl border border-white/10 p-2 shadow-2xl rotate-[-5deg] hover:rotate-0 transition-transform duration-500 z-10">
              <div className="w-full h-6 bg-surface-dark rounded-t-lg flex items-center px-3 gap-1.5 border-b border-white/5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
              </div>
              <div className="w-full aspect-video bg-[#001833] rounded-b-lg overflow-hidden relative border border-white/5">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 to-brand-cyan/10 p-6 flex flex-col justify-center items-start">
                  <h3 className="text-2xl font-bold text-white mb-2">WebFix Expert <br/>Dashboard</h3>
                  <div className="w-full h-32 bg-white/5 rounded-lg border border-white/10 mt-4 flex items-center justify-center">
                    <Code className="text-brand-blue opacity-50" size={48} />
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Mockup */}
            <div className="absolute bottom-0 left-0 w-[35%] h-auto glass rounded-3xl border-4 border-surface-dark p-1 shadow-2xl rotate-[10deg] hover:rotate-0 transition-transform duration-500 z-20">
              <div className="w-full aspect-[9/19] bg-gradient-to-b from-[#003153] to-[#001833] rounded-2xl overflow-hidden relative">
                <div className="w-1/2 h-4 bg-surface-dark absolute top-0 left-1/4 rounded-b-xl z-30"></div>
                <div className="p-4 pt-8">
                  <div className="w-12 h-12 rounded-full bg-brand-cyan/20 flex items-center justify-center mb-4">
                     <Smartphone className="text-brand-cyan" size={24} />
                  </div>
                  <div className="h-4 w-3/4 bg-white/10 rounded mb-2"></div>
                  <div className="h-4 w-1/2 bg-white/10 rounded mb-6"></div>
                  
                  <div className="space-y-3">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-full h-16 bg-white/5 rounded-xl border border-white/5 flex items-center px-3 gap-3">
                         <div className="w-10 h-10 rounded-lg bg-brand-blue/20 flex items-center justify-center"><Play size={16} className="text-brand-blue" /></div>
                         <div className="flex-1">
                            <div className="h-3 w-full bg-white/10 rounded mb-1.5"></div>
                            <div className="h-2 w-2/3 bg-white/5 rounded"></div>
                         </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
