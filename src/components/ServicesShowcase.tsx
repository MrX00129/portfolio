"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe, Layout, Sparkles, ShoppingCart, Smartphone, Code2, Cloud, Wrench,
  Megaphone, TrendingUp, Share2, Bot, Target, Users, Play, Briefcase,
  MessageSquare, Zap, Image as ImageIcon, ShoppingBag, Monitor, Mail, Cpu, Lightbulb,
  Rocket, ShieldCheck, Coins, Clock, Heart, CheckCircle2, ArrowRight, Star
} from "lucide-react";
import { SERVICES_DATA, CATEGORIES, AI_TOOLS, TRUST_PILLARS, SERVICE_PROCESS_STEPS, Service } from "@/lib/servicesData";

// Icon mapping helper
const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Globe, Layout, Sparkles, ShoppingCart, Smartphone, Code2, Cloud, Wrench,
  Megaphone, TrendingUp, Share2, Bot, Target, Users, Play, Briefcase,
  MessageSquare, Zap, Image: ImageIcon, ShoppingBag, Monitor, Mail, Cpu, Lightbulb,
  Rocket, ShieldCheck, Coins, Clock, Heart
};

export default function ServicesShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredServices = selectedCategory === "All"
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category === selectedCategory);

  return (
    <section id="services" className="bg-[#000a18] py-24 md:py-32 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-48 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 -right-48 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Top Banner Tagline */}
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-6">
            <Sparkles size={14} />
            ALL DIGITAL SOLUTIONS UNDER ONE ROOF
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-6">
            Our Complete <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">Services Suite</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
            From Custom Web Apps & Mobile Engineering to AI Automation and Precision Ad Campaigns — 
            we cover all 24 digital pillars to launch, run, and scale your business.
          </p>

          {/* 6 Process Pillars (Strategy, Design, Develop, Market, Automate, Grow) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mt-10">
            {SERVICE_PROCESS_STEPS.map((step) => (
              <div 
                key={step.step}
                className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 transition-all text-center group"
              >
                <div className="text-[10px] font-mono text-cyan-400 mb-1">STEP {step.step}</div>
                <div className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">{step.title}</div>
                <div className="text-[11px] text-slate-500 mt-1 line-clamp-1">{step.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/25 scale-105"
                    : "bg-white/[0.03] text-slate-400 hover:text-white hover:bg-white/[0.08] border border-white/5"
                }`}
              >
                {cat} {cat === "All" ? `(${SERVICES_DATA.length})` : ""}
              </button>
            );
          })}
        </div>

        {/* Services 24 Grid Showcase */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredServices.map((service) => {
              const IconComponent = iconMap[service.iconName] || Globe;
              const isHighlight = service.highlight;

              return (
                <motion.div
                  layout
                  key={service.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className={`group relative rounded-3xl p-6 flex flex-col justify-between transition-all duration-500 ${
                    isHighlight
                      ? "border-2 border-emerald-500/80 bg-emerald-950/20 shadow-[0_0_40px_rgba(16,185,129,0.25)] hover:shadow-[0_0_60px_rgba(16,185,129,0.4)]"
                      : "border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-cyan-500/40 hover:-translate-y-1 hover:shadow-2xl"
                  }`}
                >
                  {/* Glowing hover background */}
                  <div className={`absolute inset-0 rounded-3xl ${service.glowColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                  <div>
                    {/* Card Header: Number & Badge */}
                    <div className="flex items-center justify-between mb-6 relative z-10">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border ${service.borderColor} bg-white/[0.03]`}>
                        <IconComponent size={28} className={service.color} />
                      </div>
                      
                      {service.badge ? (
                        <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-[10px] font-bold tracking-wider uppercase animate-pulse">
                          {service.badge}
                        </span>
                      ) : (
                        <span className="text-xs font-mono font-bold text-white/30 group-hover:text-cyan-400 transition-colors">
                          #{service.number}
                        </span>
                      )}
                    </div>

                    {/* Title & Subtitle */}
                    <div className="relative z-10 mb-4">
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors leading-tight mb-2">
                        {service.title}
                      </h3>
                      <p className="text-xs font-medium text-cyan-300/80 bg-cyan-950/40 px-3 py-1 rounded-lg border border-cyan-500/20 inline-block mb-3">
                        {service.subtitle}
                      </p>
                      <p className="text-slate-400 text-xs leading-relaxed line-clamp-3">
                        {service.description}
                      </p>
                    </div>

                    {/* Sub-details / Tags */}
                    <div className="relative z-10 flex flex-wrap gap-1.5 mb-6">
                      {service.tags.slice(0, 4).map((tag) => (
                        <span 
                          key={tag}
                          className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-white/[0.04] border border-white/5 text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer Link */}
                  <div className="relative z-10 pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-400 group-hover:text-white transition-colors">
                      Learn More
                    </span>
                    <Link
                      href={`/services/${service.slug}`}
                      className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-cyan-500 group-hover:text-black flex items-center justify-center text-slate-300 transition-all duration-300"
                    >
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* AI TOOLS WE USE & EXPERT IN Section */}
        <div className="mt-24 p-8 md:p-12 rounded-3xl border border-cyan-500/20 bg-gradient-to-b from-blue-950/40 to-[#000a18] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">
                <Bot size={14} /> AI TECH STACK
              </div>
              <h3 className="text-2xl md:text-4xl font-black text-white">
                AI TOOLS WE USE & EXPERT IN
              </h3>
            </div>
            <p className="text-slate-400 text-sm max-w-md">
              We harness industry-leading artificial intelligence, automation platforms, and creative design suites to maximize your business efficiency.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 relative z-10">
            {AI_TOOLS.map((tool) => {
              const ToolIcon = iconMap[tool.icon] || Bot;
              return (
                <div
                  key={tool.name}
                  className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-cyan-500/40 hover:bg-white/[0.06] transition-all flex items-center gap-3 group"
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center text-white shadow-md`}>
                    <ToolIcon size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">{tool.name}</div>
                    <div className="text-[10px] text-slate-400">{tool.category}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Trust Pillars Ribbon */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {TRUST_PILLARS.map((pillar) => {
            const PillarIcon = iconMap[pillar.icon] || ShieldCheck;
            return (
              <div
                key={pillar.title}
                className="p-4 rounded-2xl bg-white/[0.015] border border-white/5 text-center flex flex-col items-center justify-center hover:border-blue-500/30 transition-all"
              >
                <div className="w-10 h-10 rounded-full bg-blue-500/10 text-cyan-400 flex items-center justify-center mb-3">
                  <PillarIcon size={20} />
                </div>
                <div className="text-xs font-bold text-white mb-1">{pillar.title}</div>
                <div className="text-[10px] text-slate-500">{pillar.desc}</div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
