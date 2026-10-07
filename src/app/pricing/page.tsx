"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  Shield,
  Rocket,
  Crown,
  Infinity as InfinityIcon,
  Smartphone,
  Monitor,
  Briefcase,
  Zap,
  Phone,
  HeartHandshake,
  TrendingUp
} from "lucide-react";
import Link from "next/link";

/* ──────────────────────────────────────────────────────────────────────
   DATA STRUCTURES
   ────────────────────────────────────────────────────────────────────── */

const websitePackages = [
  {
    name: "Basic",
    price: "6,999",
    icon: Rocket,
    color: "from-green-400 to-emerald-500",
    shadow: "shadow-emerald-500/20",
    border: "border-emerald-500/30",
    features: [
      "5 Pages",
      "Responsive",
      "SEO Friendly",
      "Contact Form",
      "Basic SEO",
      "7 Days Support",
      "2 Revision",
    ],
  },
  {
    name: "Standard",
    price: "12,999",
    icon: Shield,
    color: "from-blue-400 to-cyan-500",
    shadow: "shadow-blue-500/20",
    border: "border-blue-500/30",
    features: [
      "10 Pages",
      "Responsive",
      "SEO Friendly",
      "Advanced SEO",
      "15 Days Support",
      "3 Revision",
      "Social Integration",
    ],
  },
  {
    name: "Premium",
    price: "19,999",
    icon: Crown,
    color: "from-purple-400 to-fuchsia-500",
    shadow: "shadow-purple-500/20",
    border: "border-purple-500/30",
    isPopular: true,
    features: [
      "15+ Pages",
      "Responsive",
      "SEO Friendly",
      "Advanced SEO",
      "30 Days Support",
      "Unlimited Revision",
      "Premium Features",
    ],
  },
  {
    name: "Ultimate",
    price: "29,999",
    icon: Zap,
    color: "from-orange-400 to-rose-500",
    shadow: "shadow-orange-500/20",
    border: "border-orange-500/30",
    features: [
      "Unlimited Pages",
      "Responsive",
      "SEO Friendly",
      "Premium SEO",
      "60 Days Support",
      "Unlimited Revision",
      "All Features",
    ],
  },
];

const websiteMaintenance = [
  {
    name: "Basic Care",
    price: "499",
    period: "/month",
    icon: Shield,
    color: "from-green-400 to-emerald-500",
    shadow: "shadow-emerald-500/20",
    border: "border-emerald-500/30",
    features: [
      "Plugin Updates",
      "Theme Updates",
      "Monthly Backup",
      "Security Check",
      "Email Support",
    ],
  },
  {
    name: "Business Care",
    price: "999",
    period: "/month",
    icon: Briefcase,
    color: "from-blue-400 to-cyan-500",
    shadow: "shadow-blue-500/20",
    border: "border-blue-500/30",
    isPopular: true,
    features: [
      "Everything in Basic",
      "Speed Optimization",
      "SEO Monitoring",
      "Weekly Backup",
      "Priority Support",
    ],
  },
  {
    name: "Premium Care",
    price: "1,999",
    period: "/month",
    icon: Crown,
    color: "from-purple-400 to-fuchsia-500",
    shadow: "shadow-purple-500/20",
    border: "border-purple-500/30",
    features: [
      "Everything in Business",
      "Content Updates",
      "Security Monitoring",
      "Performance Optimization",
      "WhatsApp Support",
    ],
  },
  {
    name: "Lifetime Care",
    price: "14,999",
    period: "ONE-TIME",
    icon: InfinityIcon,
    color: "from-yellow-400 to-amber-500",
    shadow: "shadow-yellow-500/20",
    border: "border-yellow-500/30",
    features: [
      "Lifetime Maintenance",
      "Security Updates",
      "Performance Monitor",
      "Backup Management",
      "Minor Changes",
      "No Monthly Fee",
    ],
  },
];

const appMaintenance = [
  {
    name: "Basic App Care",
    price: "999",
    period: "/month",
    icon: Smartphone,
    color: "from-green-400 to-emerald-500",
    shadow: "shadow-emerald-500/20",
    border: "border-emerald-500/30",
    features: [
      "Bug Fixes",
      "Security Updates",
      "Performance",
      "Email Support",
    ],
  },
  {
    name: "Business App Care",
    price: "2,499",
    period: "/month",
    icon: Monitor,
    color: "from-blue-400 to-cyan-500",
    shadow: "shadow-blue-500/20",
    border: "border-blue-500/30",
    isPopular: true,
    features: [
      "Everything in Basic",
      "Feature Updates",
      "Play Store Support",
      "Priority Support",
    ],
  },
  {
    name: "Lifetime App Care",
    price: "49,999",
    period: "ONE-TIME",
    icon: InfinityIcon,
    color: "from-purple-400 to-fuchsia-500",
    shadow: "shadow-purple-500/20",
    border: "border-purple-500/30",
    features: [
      "Lifetime Maintenance",
      "Bug Fixes",
      "Security Updates",
      "Version Support",
      "Priority WhatsApp Support",
    ],
  },
];

const allInOnePlan = {
  name: "All-In-One Business Partner Plan",
  price: "99,999",
  period: "ONE-TIME",
  features: [
    "Business Website Development",
    "Android App Development",
    "Hosting & Domain Setup",
    "SEO & Analytics Setup",
    "AI Automation Setup",
    "Lifetime Maintenance (Web + App)",
    "Priority WhatsApp Support",
    "Dedicated Support",
  ],
};

/* ──────────────────────────────────────────────────────────────────────
   COMPONENTS
   ────────────────────────────────────────────────────────────────────── */

function PricingCard({ plan }: { plan: any }) {
  const Icon = plan.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -5 }}
      className={`relative p-8 rounded-3xl bg-white/[0.02] border backdrop-blur-sm flex flex-col h-full transition-all duration-300 ${plan.border} ${
        plan.isPopular ? `shadow-2xl ${plan.shadow}` : "hover:bg-white/[0.04]"
      }`}
    >
      {/* Popular Badge */}
      {plan.isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <div className={`px-4 py-1 rounded-full bg-gradient-to-r ${plan.color} text-white text-xs font-bold tracking-wider uppercase shadow-lg`}>
            Most Popular
          </div>
        </div>
      )}

      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className={`p-3 rounded-2xl bg-gradient-to-br ${plan.color} bg-opacity-10`}>
          <Icon className="text-white w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-white uppercase tracking-wide">
          {plan.name}
        </h3>
      </div>

      {/* Price */}
      <div className="mb-8 pb-8 border-b border-white/10">
        <div className="flex items-baseline gap-1">
          <span className="text-2xl text-slate-400 font-medium">₹</span>
          <span className={`text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r ${plan.color}`}>
            {plan.price}
          </span>
        </div>
        {plan.period && (
          <div className="text-sm text-slate-400 font-medium mt-2 tracking-widest uppercase">
            {plan.period}
          </div>
        )}
      </div>

      {/* Features */}
      <ul className="space-y-4 mb-8 flex-1">
        {plan.features.map((feature: string, idx: number) => (
          <li key={idx} className="flex items-start gap-3 text-slate-300">
            <div className={`mt-1 rounded-full bg-gradient-to-r ${plan.color} p-0.5`}>
              <Check className="w-3 h-3 text-white" strokeWidth={3} />
            </div>
            <span className="text-sm font-medium leading-tight">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <Link
        href="#contact"
        className={`w-full py-4 rounded-xl font-bold text-center transition-all duration-300 shadow-lg ${
          plan.isPopular
            ? `bg-gradient-to-r ${plan.color} text-white hover:scale-[1.02] hover:shadow-xl ${plan.shadow}`
            : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
        }`}
      >
        Get Started
      </Link>
    </motion.div>
  );
}

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState<"web" | "web-care" | "app-care">("web");

  return (
    <main className="flex min-h-screen flex-col bg-[#010810] selection:bg-sky-500/30">
      <Navbar />

      <div className="pt-32 pb-24 relative overflow-hidden min-h-screen">
        {/* Background Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-900/20 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight"
            >
              We Build Powerful Websites & Apps. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
                We Maintain Them Forever.
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-400 font-medium"
            >
              Choose a package that fits your business needs. No hidden fees.
            </motion.p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-16 relative z-20">
            <div className="inline-flex flex-col sm:flex-row bg-white/5 border border-white/10 p-2 rounded-3xl sm:rounded-full backdrop-blur-md gap-2">
              <button
                onClick={() => setActiveTab("web")}
                className={`px-8 py-3 rounded-2xl sm:rounded-full font-bold transition-all duration-300 ${
                  activeTab === "web"
                    ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/25"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                Website Packages
              </button>
              <button
                onClick={() => setActiveTab("web-care")}
                className={`px-8 py-3 rounded-2xl sm:rounded-full font-bold transition-all duration-300 ${
                  activeTab === "web-care"
                    ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/25"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                Web Maintenance
              </button>
              <button
                onClick={() => setActiveTab("app-care")}
                className={`px-8 py-3 rounded-2xl sm:rounded-full font-bold transition-all duration-300 ${
                  activeTab === "app-care"
                    ? "bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white shadow-lg shadow-purple-500/25"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                App Maintenance
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="mb-24 min-h-[600px]">
            <AnimatePresence mode="wait">
              {activeTab === "web" && (
                <motion.div
                  key="web"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"
                >
                  {websitePackages.map((plan, i) => (
                    <PricingCard key={i} plan={plan} />
                  ))}
                </motion.div>
              )}

              {activeTab === "web-care" && (
                <motion.div
                  key="web-care"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"
                >
                  {websiteMaintenance.map((plan, i) => (
                    <PricingCard key={i} plan={plan} />
                  ))}
                </motion.div>
              )}

              {activeTab === "app-care" && (
                <motion.div
                  key="app-care"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
                >
                  {appMaintenance.map((plan, i) => (
                    <PricingCard key={i} plan={plan} />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* All-In-One Business Partner Plan */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-[1px] rounded-[2.5rem] bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 overflow-hidden"
          >
            {/* Animated border glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 blur-xl opacity-50 pointer-events-none" />
            
            <div className="relative bg-[#050f22] rounded-[2.45rem] p-8 md:p-12 z-10 flex flex-col lg:flex-row items-center gap-12">
              {/* Left Side: Title & Price */}
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-sm font-bold tracking-widest uppercase mb-6">
                  <Crown size={16} /> Ultimate Value
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                  All-In-One <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                    Business Partner
                  </span> Plan
                </h2>
                <div className="mb-8">
                  <div className="flex items-baseline justify-center lg:justify-start gap-1">
                    <span className="text-3xl text-slate-400 font-medium">₹</span>
                    <span className="text-6xl md:text-7xl font-black text-white">
                      99,999
                    </span>
                  </div>
                  <div className="text-yellow-500 font-bold mt-2 tracking-widest uppercase">
                    ONE-TIME PAYMENT
                  </div>
                </div>
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center w-full lg:w-auto px-10 py-5 rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold text-lg hover:scale-[1.02] hover:shadow-xl shadow-yellow-500/25 transition-all duration-300"
                >
                  <HeartHandshake className="mr-2" /> Become a Partner
                </Link>
              </div>

              {/* Right Side: Features Grid */}
              <div className="flex-1 w-full">
                <div className="grid sm:grid-cols-2 gap-4">
                  {allInOnePlan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                      <div className="mt-0.5 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 p-1">
                        <Check className="w-4 h-4 text-white" strokeWidth={3} />
                      </div>
                      <span className="text-slate-200 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-sm text-slate-400 font-medium border-t border-white/10 pt-8">
                  <div className="flex items-center gap-2">
                    <Rocket className="w-5 h-5 text-sky-400" /> Fast Delivery
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-emerald-400" /> Secure & Reliable
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-purple-400" /> Result Driven
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
      
      <Footer />
    </main>
  );
}
