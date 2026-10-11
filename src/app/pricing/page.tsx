"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  Check,
  ShieldCheck,
  Globe,
  Monitor,
  ShoppingCart,
  Code2,
  Rocket,
  Crown,
  Smartphone,
  Wrench,
  Zap,
  ShieldAlert,
  ArrowRightLeft,
  Share2,
  TrendingUp,
  Target,
  BarChart3,
  Settings,
  RefreshCw,
  Code,
  Bot,
  Star,
  LineChart,
  ArrowRight,
  Headphones,
} from "lucide-react";
import Link from "next/link";

/* ──────────────────────────────────────────────────────────────────────
   DATA FROM REFERENCE IMAGE
   ────────────────────────────────────────────────────────────────────── */

const serviceCategories = [
  {
    title: "WEBSITE DEVELOPMENT",
    headerBg: "bg-gradient-to-r from-blue-700 to-indigo-700",
    borderGlow: "hover:border-blue-500/50 hover:shadow-blue-500/10",
    badgeColor: "text-blue-400",
    items: [
      { name: "Basic Business Website", price: "$150 – $500", icon: Globe },
      { name: "Professional Website", price: "$500 – $1,200", icon: Monitor },
      { name: "E-commerce Website", price: "$800 – $2,500", icon: ShoppingCart },
      { name: "Custom / Advanced Website", price: "$1,500 – $5,000+", icon: Code2 },
      { name: "Landing Page (High Converting)", price: "$150 – $400", icon: Rocket },
    ],
  },
  {
    title: "MAINTENANCE SERVICES (MONTHLY)",
    headerBg: "bg-gradient-to-r from-sky-700 to-blue-800",
    borderGlow: "hover:border-sky-500/50 hover:shadow-sky-500/10",
    badgeColor: "text-sky-400",
    items: [
      {
        name: "Website Basic Maintenance",
        sub: "(Updates, Backup, Security)",
        price: "$30 – $100",
        icon: ShieldCheck,
      },
      {
        name: "Website Standard",
        sub: "(SEO + Backup + Security)",
        price: "$100 – $250",
        icon: Monitor,
      },
      {
        name: "Website Premium",
        sub: "(Full Support & Optimization)",
        price: "$250 – $500",
        icon: Crown,
      },
      {
        name: "WordPress Maintenance",
        sub: "(Monthly Support)",
        price: "$80 – $200",
        icon: Globe,
      },
      {
        name: "Priority Support",
        sub: "(24/7 Quick Support)",
        price: "$150 – $400",
        icon: Headphones,
      },
    ],
  },
  {
    title: "WORDPRESS FIX / SUPPORT",
    headerBg: "bg-gradient-to-r from-purple-700 to-violet-800",
    borderGlow: "hover:border-purple-500/50 hover:shadow-purple-500/10",
    badgeColor: "text-purple-400",
    items: [
      { name: "Small Fix", price: "$20 – $80", icon: Wrench },
      { name: "Speed Optimization", price: "$80 – $200", icon: Zap },
      { name: "Full Website Fix", price: "$150 – $400", icon: Wrench },
      { name: "Malware Removal", price: "$100 – $300", icon: ShieldAlert },
      { name: "Website Migration", price: "$100 – $250", icon: ArrowRightLeft },
    ],
  },
  {
    title: "ADS MANAGEMENT (MONTHLY)",
    headerBg: "bg-gradient-to-r from-rose-700 to-red-800",
    borderGlow: "hover:border-rose-500/50 hover:shadow-rose-500/10",
    badgeColor: "text-rose-400",
    note: "Ad spend is separate and paid directly by the client.",
    items: [
      { name: "Meta Ads (Setup)", price: "$50 – $200", icon: Share2 },
      { name: "Meta Ads (Management)", price: "$150 – $600", icon: TrendingUp },
      { name: "Google Ads (Setup)", price: "$80 – $300", icon: Target },
      { name: "Google Ads (Management)", price: "$200 – $800", icon: BarChart3 },
    ],
  },
  {
    title: "MOBILE APP DEVELOPMENT (FLUTTER)",
    headerBg: "bg-gradient-to-r from-emerald-700 to-green-800",
    borderGlow: "hover:border-emerald-500/50 hover:shadow-emerald-500/10",
    badgeColor: "text-emerald-400",
    items: [
      { name: "Basic App", price: "$500 – $2,000", icon: Smartphone },
      { name: "Advanced App", price: "$2,000 – $8,000", icon: Smartphone },
      { name: "Enterprise App", price: "$8,000 – $20,000+", icon: Smartphone },
      { name: "App Maintenance (Monthly)", price: "$100 – $300", icon: Smartphone },
    ],
  },
  {
    title: "BUSINESS AUTOMATION / SOFTWARE",
    headerBg: "bg-gradient-to-r from-amber-600 to-orange-700",
    borderGlow: "hover:border-orange-500/50 hover:shadow-orange-500/10",
    badgeColor: "text-orange-400",
    items: [
      { name: "Basic Automation", price: "$200 – $800", icon: Settings },
      { name: "Workflow Automation", price: "$500 – $2,000", icon: RefreshCw },
      { name: "Custom Software", price: "$800 – $5,000+", icon: Code },
      { name: "CRM / SaaS Development", price: "$2,000 – $10,000+", icon: Bot },
    ],
  },
];

const popularPackages = [
  {
    name: "STARTER PACKAGE",
    subtitle: "Perfect for Small Businesses",
    tagColor: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
    headerGrad: "from-blue-600 to-indigo-600",
    priceColor: "text-blue-400",
    btnColor: "bg-blue-600 hover:bg-blue-500 text-white shadow-blue-500/25",
    oneTimePrice: "$450",
    maintenancePrice: "$50",
    features: [
      "Business Website (5 Pages)",
      "Basic Maintenance",
      "1 Month Support",
    ],
    isPopular: false,
  },
  {
    name: "GROWTH PACKAGE",
    subtitle: "Boost Leads & Sales",
    tagColor: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
    headerGrad: "from-emerald-600 to-teal-600",
    priceColor: "text-emerald-400",
    btnColor: "bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-500/25",
    oneTimePrice: "$1,200",
    maintenancePrice: "$200",
    features: [
      "Professional Website",
      "Meta & Google Ads Management",
      "Monthly Maintenance",
      "Priority Support",
    ],
    isPopular: true,
  },
  {
    name: "PREMIUM PACKAGE",
    subtitle: "Complete Growth Solution",
    tagColor: "bg-purple-500/10 text-purple-400 border border-purple-500/20",
    headerGrad: "from-purple-600 to-fuchsia-600",
    priceColor: "text-purple-400",
    btnColor: "bg-purple-600 hover:bg-purple-500 text-white shadow-purple-500/25",
    oneTimePrice: "$2,500+",
    maintenancePrice: "$400+",
    features: [
      "Custom Website / Landing Pages",
      "Ads Management (Meta + Google)",
      "Business Automation",
      "Full Maintenance & Priority Support",
    ],
    isPopular: false,
  },
];

const whyChooseUs = [
  "Experienced & Skilled Team",
  "ROI Focused Strategies",
  "Clear Communication",
  "On-Time Delivery",
  "Long Term Partnership",
];

export default function PricingPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#010816] text-white selection:bg-brand-cyan/30">
      <Navbar />

      <div className="pt-32 pb-24 relative overflow-hidden">
        {/* Glow ambient background lights */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-96 right-10 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
          
          {/* Header Title */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-brand-cyan text-xs font-bold tracking-widest uppercase mb-4">
              <Star size={14} className="fill-brand-cyan" /> Transparent & Value-Driven Pricing
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-5 tracking-tight">
              Agency-Grade Quality, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-blue-400 to-indigo-400">
                Transparent USD Pricing
              </span>
            </h1>
            <p className="text-gray-400 text-base sm:text-lg">
              Explore our individual service rate cards and high-value bundled packages. No surprise invoices, ever.
            </p>
          </div>

          {/* ──────────────────────────────────────────────────────────────────
              SECTION 1: 6 SERVICE CATEGORIES (GRID OF 3 COLS)
              ────────────────────────────────────────────────────────────────── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {serviceCategories.map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className={`rounded-2xl overflow-hidden bg-white/[0.02] border border-white/10 backdrop-blur-md flex flex-col justify-between transition-all duration-300 shadow-xl ${category.borderGlow}`}
              >
                <div>
                  {/* Category Header */}
                  <div className={`${category.headerBg} px-6 py-4 text-center shadow-md`}>
                    <h3 className="text-white font-black text-sm sm:text-base tracking-wider uppercase">
                      {category.title}
                    </h3>
                  </div>

                  {/* Table Sub-header */}
                  <div className="flex justify-between items-center px-6 py-3 bg-white/[0.03] border-b border-white/5 text-[11px] font-bold text-gray-400 tracking-wider uppercase">
                    <span>SERVICE</span>
                    <span>PRICE (USD)</span>
                  </div>

                  {/* Service Items List */}
                  <div className="divide-y divide-white/5 px-2">
                    {category.items.map((item, itemIdx) => {
                      const IconComponent = item.icon;
                      return (
                        <div
                          key={itemIdx}
                          className="flex items-center justify-between px-4 py-3.5 hover:bg-white/[0.03] transition-colors rounded-lg group"
                        >
                          <div className="flex items-center gap-3 pr-2">
                            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 border border-white/5 text-gray-300 group-hover:text-brand-cyan transition-colors">
                              <IconComponent size={16} />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-gray-200 leading-snug group-hover:text-white transition-colors">
                                {item.name}
                              </p>
                              {"sub" in item && item.sub && (
                                <p className="text-[11px] text-gray-400 font-normal">
                                  {item.sub}
                                </p>
                              )}
                            </div>
                          </div>
                          <div className="text-right shrink-0">
                            <span className="text-sm font-bold text-white bg-white/5 px-2.5 py-1 rounded-md border border-white/5 tracking-tight whitespace-nowrap">
                              {item.price}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Optional Note for Ads Management */}
                {"note" in category && category.note && (
                  <div className="p-4 mt-2">
                    <div className="bg-rose-500/10 border border-rose-500/20 rounded-xl px-4 py-2.5 text-center">
                      <p className="text-xs font-medium text-rose-300">
                        {category.note}
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* ──────────────────────────────────────────────────────────────────
              SECTION 2: POPULAR PACKAGES & WHY CHOOSE US
              ────────────────────────────────────────────────────────────────── */}
          <div className="relative pt-6">
            
            {/* Section Heading */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3">
                <Star className="text-yellow-400 fill-yellow-400 w-5 h-5 animate-pulse" />
                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-widest uppercase">
                  POPULAR PACKAGES
                </h2>
                <Star className="text-yellow-400 fill-yellow-400 w-5 h-5 animate-pulse" />
              </div>
              <p className="text-gray-400 text-sm mt-2">
                All-in-one bundled solutions tailored for accelerated business growth
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-stretch">
              
              {/* 3 POPULAR PACKAGES (Lg: spans 3 cols) */}
              <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
                {popularPackages.map((pkg, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className={`relative rounded-3xl bg-white/[0.02] border backdrop-blur-md p-6 flex flex-col justify-between transition-all duration-300 ${
                      pkg.isPopular
                        ? "border-emerald-500/50 shadow-2xl shadow-emerald-500/10 bg-gradient-to-b from-emerald-500/[0.04] to-transparent ring-1 ring-emerald-500/30"
                        : "border-white/10 hover:border-white/20"
                    }`}
                  >
                    {/* Ribbon for Most Popular */}
                    {pkg.isPopular && (
                      <div className="absolute -top-3.5 right-6 z-20">
                        <div className="bg-gradient-to-r from-red-600 to-rose-600 text-white text-[10px] font-black tracking-widest uppercase py-1 px-3.5 rounded-full shadow-lg border border-red-400/30">
                          ★ MOST POPULAR
                        </div>
                      </div>
                    )}

                    <div>
                      {/* Package Header */}
                      <div className="mb-6">
                        <h3 className="text-lg font-black text-white uppercase tracking-wider mb-2">
                          {pkg.name}
                        </h3>
                        <div className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${pkg.tagColor}`}>
                          {pkg.subtitle}
                        </div>
                      </div>

                      {/* Features List */}
                      <ul className="space-y-3.5 mb-8">
                        {pkg.features.map((feat, featIdx) => (
                          <li key={featIdx} className="flex items-start gap-3">
                            <div className="mt-0.5 w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-brand-cyan">
                              <Check size={13} strokeWidth={3} />
                            </div>
                            <span className="text-sm font-medium text-gray-300">
                              {feat}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Price Block & CTA */}
                    <div className="pt-6 border-t border-white/10">
                      <div className="grid grid-cols-2 gap-2 text-center mb-6 bg-white/[0.03] p-3 rounded-2xl border border-white/5">
                        <div className="border-r border-white/10 pr-2">
                          <p className={`text-2xl font-black ${pkg.priceColor}`}>
                            {pkg.oneTimePrice}
                          </p>
                          <p className="text-[11px] text-gray-400 font-medium uppercase tracking-wider mt-0.5">
                            One Time
                          </p>
                        </div>
                        <div className="pl-2">
                          <p className="text-2xl font-black text-white">
                            {pkg.maintenancePrice}
                            <span className="text-xs text-gray-400 font-normal">/mo</span>
                          </p>
                          <p className="text-[11px] text-gray-400 font-medium uppercase tracking-wider mt-0.5">
                            Maintenance
                          </p>
                        </div>
                      </div>

                      <Link
                        href="/contact"
                        className={`w-full py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-lg ${pkg.btnColor}`}
                      >
                        Choose Plan <ArrowRight size={16} />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* RIGHT SIDEBAR: WHY CHOOSE US & FREE AUDIT (Lg: spans 1 col) */}
              <div className="flex flex-col gap-6">
                
                {/* Why Choose Us Card */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="rounded-3xl bg-white/[0.02] border border-blue-500/20 backdrop-blur-md overflow-hidden flex flex-col justify-between shadow-xl"
                >
                  <div>
                    <div className="bg-gradient-to-r from-blue-700 to-indigo-800 px-6 py-4 text-center">
                      <h4 className="text-white font-black text-sm tracking-wider uppercase">
                        WHY CHOOSE US?
                      </h4>
                    </div>

                    <div className="p-6 space-y-4">
                      {whyChooseUs.map((reason, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-blue-500/20 text-brand-cyan flex items-center justify-center shrink-0">
                            <Check size={13} strokeWidth={3} />
                          </div>
                          <span className="text-sm font-semibold text-gray-200">
                            {reason}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Free Audit Banner */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="rounded-3xl bg-gradient-to-br from-blue-900/40 via-indigo-900/30 to-purple-900/30 border border-brand-cyan/30 p-6 flex-1 flex flex-col justify-between relative overflow-hidden group shadow-xl"
                >
                  <div className="absolute -top-10 -right-10 w-28 h-28 bg-brand-cyan/20 rounded-full blur-2xl group-hover:scale-150 transition-transform" />

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <LineChart className="text-brand-cyan w-6 h-6" />
                      <h4 className="text-base font-black text-white tracking-wide uppercase">
                        GET A <span className="text-red-500">FREE AUDIT!</span>
                      </h4>
                    </div>
                    <p className="text-xs text-gray-300 leading-relaxed mb-6">
                      Let us analyze your business, website performance, and ad efficiency to show you the best growth opportunities.
                    </p>
                  </div>

                  <Link
                    href="/contact"
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-brand-cyan to-blue-500 hover:from-cyan-400 hover:to-blue-600 text-[#010816] font-bold text-xs uppercase tracking-wider text-center transition-all shadow-lg shadow-cyan-500/20"
                  >
                    Claim Your Free Audit
                  </Link>
                </motion.div>

              </div>

            </div>

          </div>

          {/* ──────────────────────────────────────────────────────────────────
              SECTION 3: BOTTOM CONSULTATION CTA BANNER
              ────────────────────────────────────────────────────────────────── */}
          <div className="mt-20">
            <div className="relative rounded-3xl bg-gradient-to-r from-blue-900/50 via-slate-900/60 to-purple-900/50 border border-white/10 p-8 sm:p-12 text-center backdrop-blur-xl overflow-hidden">
              <div className="max-w-2xl mx-auto relative z-10">
                <h3 className="text-2xl sm:text-4xl font-black text-white mb-4">
                  Need a Custom Quote or Tailored Plan?
                </h3>
                <p className="text-gray-300 text-sm sm:text-base mb-8">
                  Whether you need a dedicated development team, complex SaaS architecture, or managed growth campaigns, we are ready to help.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link
                    href="/contact"
                    className="px-8 py-4 rounded-xl bg-brand-blue hover:bg-blue-600 text-white font-bold transition-all shadow-lg shadow-brand-blue/30 text-sm"
                  >
                    Talk to Founder ALI
                  </Link>
                  <a
                    href="mailto:ali@webfix.expert"
                    className="px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold border border-white/10 transition-all text-sm"
                  >
                    ali@webfix.expert
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}
