import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Target, Zap, Trophy, ShieldCheck, Star, Award, Code, Sparkles, Heart, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us & Founder | WebFix Expert",
  description: "Learn about WebFix Expert, founded by ALI. Discover our mission, vision, core values, and digital engineering expertise.",
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#000a18] text-white">
      <Navbar />
      
      {/* Hero Header */}
      <section className="pt-32 pb-20 relative overflow-hidden border-b border-white/5 bg-gradient-to-b from-[#001428] to-[#000a18]">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-5xl">
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-bold text-cyan-400 tracking-widest uppercase px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 inline-block mb-4">
              ABOUT WEBFIX EXPERT
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
              Empowering Businesses Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">Innovation & Vision</span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-8">
              Founded and led by <strong className="text-cyan-400 font-bold">ALI</strong>, WebFix Expert is a complete digital partner engineered to build, fix, automate, and scale your business with enterprise-grade solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Founder Section */}
      <section className="py-24 relative overflow-hidden bg-[#000d20]">
        <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-6xl">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold text-cyan-400 tracking-widest uppercase px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 inline-block mb-3">
              LEADERSHIP & VISION
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white">
              Meet Our Founder
            </h2>
          </div>

          <div className="p-8 md:p-14 rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-white/[0.03] via-blue-950/20 to-cyan-950/20 shadow-2xl relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="grid md:grid-cols-12 gap-10 items-center relative z-10">
              
              {/* Founder Avatar / Card Visual */}
              <div className="md:col-span-5 flex flex-col items-center text-center">
                <div className="relative w-48 h-48 md:w-60 md:h-60 rounded-3xl overflow-hidden border-2 border-cyan-400/50 shadow-2xl shadow-cyan-500/20 mb-6 bg-gradient-to-tr from-blue-600 via-cyan-500 to-emerald-400 flex items-center justify-center text-white">
                  {/* Styled Initial Badge */}
                  <div className="flex flex-col items-center justify-center p-6 text-center">
                    <span className="text-6xl font-black tracking-tighter text-white drop-shadow-md">MA</span>
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-200 mt-2">ALI</span>
                  </div>
                </div>

                <h3 className="text-2xl font-black text-white">ALI</h3>
                <p className="text-sm font-semibold text-cyan-400 mb-3">Founder & Chief Executive Officer</p>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-bold">
                    Sole Founder
                  </span>
                  <span className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/40 text-blue-300 text-xs font-bold">
                    Full-Stack & AI Visionary
                  </span>
                </div>
              </div>

              {/* Founder Message & Bio */}
              <div className="md:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
                  <Sparkles size={14} /> Founder&apos;s Personal Statement
                </div>
                
                <blockquote className="text-xl md:text-2xl font-medium text-slate-100 italic leading-relaxed border-l-4 border-cyan-400 pl-6 my-4">
                  &ldquo;At WebFix Expert, our mission is clear — to eliminate technical barriers and empower businesses worldwide with modern web apps, high-ROI advertising, and cutting-edge AI automation.&rdquo;
                </blockquote>

                <p className="text-slate-300 text-base leading-relaxed">
                  Under the direction of <strong className="text-white">ALI</strong>, WebFix Expert has grown into a comprehensive digital suite offering 24 specialized services — spanning WordPress custom development, native app engineering, ChatGPT advertising, and enterprise AI workflows.
                </p>

                {/* Key Founder Highlights */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/10 text-center">
                  <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5">
                    <div className="text-2xl font-black text-cyan-400">6+</div>
                    <div className="text-[11px] text-slate-400">Years Experience</div>
                  </div>
                  <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5">
                    <div className="text-2xl font-black text-emerald-400">100+</div>
                    <div className="text-[11px] text-slate-400">Projects Built</div>
                  </div>
                  <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5">
                    <div className="text-2xl font-black text-blue-400">50+</div>
                    <div className="text-[11px] text-slate-400">Happy Clients</div>
                  </div>
                  <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5">
                    <div className="text-2xl font-black text-amber-400">100%</div>
                    <div className="text-[11px] text-slate-400">Dedication</div>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap gap-4 items-center">
                  <Link
                    href="/contact"
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-sm transition-all shadow-lg shadow-cyan-500/25 inline-flex items-center gap-2"
                  >
                    Connect With ALI <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-[#000a18]">
        <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-cyan-500/40 transition-all">
              <Target className="text-amber-400 w-12 h-12 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-slate-300 leading-relaxed">
                To democratize enterprise-level technology, making premium AI automation, robust web development, and effective digital marketing accessible to businesses of all sizes without technical friction.
              </p>
            </div>

            <div className="p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-cyan-500/40 transition-all">
              <Zap className="text-cyan-400 w-12 h-12 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-slate-300 leading-relaxed">
                To become the world&apos;s leading unified platform for business growth, where anyone can launch, automate, and scale their digital operations seamlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
