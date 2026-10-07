import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SERVICES_DATA, Service } from "@/lib/servicesData";
import { 
  Globe, Layout, Sparkles, ShoppingCart, Smartphone, Code2, Cloud, Wrench,
  Megaphone, TrendingUp, Share2, Bot, Target, Users, Play, Briefcase,
  MessageSquare, Zap, Image as ImageIcon, ShoppingBag, Monitor, Mail, Cpu, Lightbulb,
  CheckCircle2, ArrowRight, ShieldCheck, Clock, Coins
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Globe, Layout, Sparkles, ShoppingCart, Smartphone, Code2, Cloud, Wrench,
  Megaphone, TrendingUp, Share2, Bot, Target, Users, Play, Briefcase,
  MessageSquare, Zap, Image: ImageIcon, ShoppingBag, Monitor, Mail, Cpu, Lightbulb
};

export async function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);
  const title = service ? service.title : slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  return {
    title: `${title} Services | WebFix Expert`,
    description: service ? service.description : `Premium ${title} services provided by WebFix Expert for modern businesses.`,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);

  // Fallback title if slug doesn't match predefined list directly
  const title = service ? service.title : slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  const description = service ? service.description : `High-performance ${title.toLowerCase()} solutions tailored to your business goals.`;
  const IconComponent = service ? (iconMap[service.iconName] || Globe) : Globe;

  return (
    <main className="flex min-h-screen flex-col bg-[#000a18] text-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-32 pb-20 relative overflow-hidden min-h-[60vh] flex flex-col justify-center border-b border-white/5">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-5xl">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-6">
            <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-cyan-400 transition-colors">Services</Link>
            <span>/</span>
            <span className="text-cyan-400">{title}</span>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 justify-between">
            <div className="max-w-3xl">
              {service?.badge && (
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4 inline-block">
                  {service.badge}
                </span>
              )}
              <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">
                {title}
              </h1>
              {service?.subtitle && (
                <p className="text-lg font-semibold text-cyan-400 mb-4">
                  {service.subtitle}
                </p>
              )}
              <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-8">
                {description}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold transition-all shadow-lg shadow-cyan-500/25 inline-flex items-center gap-2"
                >
                  Get Started Today <ArrowRight size={18} />
                </Link>
                <Link
                  href="/pricing"
                  className="px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-all inline-flex items-center gap-2"
                >
                  View Pricing Plans
                </Link>
              </div>
            </div>

            {/* Icon Visual Badge */}
            <div className="w-32 h-32 md:w-44 md:h-44 rounded-3xl bg-white/[0.03] border border-cyan-500/30 flex items-center justify-center shrink-0 shadow-2xl relative group">
              <div className="absolute inset-0 rounded-3xl bg-cyan-500/10 blur-xl group-hover:blur-2xl transition-all" />
              <IconComponent size={72} className="text-cyan-400 relative z-10" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content & Features */}
      <section className="py-20 container mx-auto px-6 md:px-12 max-w-5xl">
        <div className="grid md:grid-cols-3 gap-10">
          
          {/* Main Features Column */}
          <div className="md:col-span-2 space-y-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                What We Deliver in {title}
              </h2>
              <div className="space-y-4">
                {(service?.features || [
                  "Tailored solutions built specifically for your target audience.",
                  "High performance architecture and clean code standards.",
                  "Dedicated ongoing support, updates, and maintenance."
                ]).map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                    <CheckCircle2 size={22} className="text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-slate-200 font-medium text-base">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {service?.tags && (
              <div>
                <h3 className="text-lg font-bold text-white mb-3">Core Expertise & Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1.5 rounded-lg bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar Box */}
          <div className="space-y-6">
            <div className="p-6 rounded-3xl bg-gradient-to-b from-blue-950/40 to-slate-900/60 border border-cyan-500/20">
              <h3 className="text-xl font-bold text-white mb-4">Why Work With Us?</h3>
              <ul className="space-y-4 text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <ShieldCheck size={18} className="text-cyan-400" />
                  100% Satisfaction Guarantee
                </li>
                <li className="flex items-center gap-2">
                  <Clock size={18} className="text-cyan-400" />
                  On-Time Delivery Guarantee
                </li>
                <li className="flex items-center gap-2">
                  <Coins size={18} className="text-cyan-400" />
                  Transparent, Affordable Rates
                </li>
              </ul>
              
              <div className="mt-8 pt-6 border-t border-white/10 text-center">
                <p className="text-xs text-slate-400 mb-4">Ready to elevate your business?</p>
                <Link
                  href="/contact"
                  className="w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-sm block text-center transition-colors"
                >
                  Book Free Call
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
