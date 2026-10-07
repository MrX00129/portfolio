"use client";

import { motion } from "framer-motion";
import { Globe, Smartphone, TrendingUp, Bot, ShieldCheck, Cloud, CheckCircle2 } from "lucide-react";

const services = [
  {
    id: "web",
    title: "Website Development",
    icon: Globe,
    color: "text-brand-blue",
    glow: "shadow-[0_0_30px_rgba(37,99,235,0.6)]",
    border: "border-brand-blue/30",
    bg: "bg-brand-blue/10",
    description: "High-performance WordPress, React, and Custom Enterprise architectures built for scale and speed. We design websites that convert visitors into customers.",
    features: ["WordPress & Elementor Pro", "React, Next.js & Tailwind", "E-Commerce (WooCommerce/Shopify)", "High-Converting Landing Pages", "Custom Web Applications"],
  },
  {
    id: "app",
    title: "App Development",
    icon: Smartphone,
    color: "text-brand-cyan",
    glow: "shadow-[0_0_30px_rgba(6,182,212,0.6)]",
    border: "border-brand-cyan/30",
    bg: "bg-brand-cyan/10",
    description: "Native and Cross-Platform mobile applications delivering seamless user experiences across all devices. We turn your ideas into powerful mobile solutions.",
    features: ["Android Native Apps", "iOS / Swift Apps", "Flutter Cross-Platform", "Custom Business Apps", "API & Backend Integration"],
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    icon: TrendingUp,
    color: "text-yellow-400",
    glow: "shadow-[0_0_30px_rgba(250,204,21,0.6)]",
    border: "border-yellow-400/30",
    bg: "bg-yellow-400/10",
    description: "Data-driven SEO, Performance Marketing, and Conversion Rate Optimization to scale your revenue and maximize your ROI.",
    features: ["Google Ads & PPC", "Facebook & Meta Ads", "Advanced SEO Optimization", "Lead Generation Strategies", "Conversion Rate Optimization"],
  },
  {
    id: "ai",
    title: "AI & Automation",
    icon: Bot,
    color: "text-purple-400",
    glow: "shadow-[0_0_30px_rgba(192,132,252,0.6)]",
    border: "border-purple-400/30",
    bg: "bg-purple-400/10",
    description: "Custom AI Agents, Chatbots, and automated workflows replacing hundreds of manual hours and supercharging your business operations.",
    features: ["Custom AI Chatbots", "Automated Content & Blog Posting", "Business Workflow Automation", "Social Media Auto-posting", "CRM & AI Integration"],
  },
  {
    id: "cloud",
    title: "Hosting & Cloud",
    icon: Cloud,
    color: "text-orange-400",
    glow: "shadow-[0_0_30px_rgba(251,146,60,0.6)]",
    border: "border-orange-400/30",
    bg: "bg-orange-400/10",
    description: "Enterprise-grade Linux Servers, VPS setups, and Cloud infrastructure with 99.99% uptime guarantees for ultimate reliability.",
    features: ["VPS & Dedicated Hosting", "Linux Server Management", "Cloud Deployment (AWS/GCP)", "Seamless Website Migration", "Domain & DNS Management"],
  },
  {
    id: "security",
    title: "Security & Maintenance",
    icon: ShieldCheck,
    color: "text-green-400",
    glow: "shadow-[0_0_30px_rgba(74,222,128,0.6)]",
    border: "border-green-400/30",
    bg: "bg-green-400/10",
    description: "Proactive monitoring, malware protection, and automated backups keeping your digital assets bulletproof and always up to date.",
    features: ["Proactive Security Monitoring", "Automated Daily Backups", "Malware Detection & Removal", "Performance & Speed Optimization", "Theme & Plugin Updates"],
  }
];

export default function DetailedServices() {
  return (
    <div className="w-full bg-[#001833] flex flex-col pt-20">
      <div className="text-center max-w-3xl mx-auto mb-20 px-6">
        <h2 className="text-brand-cyan font-semibold tracking-wide uppercase text-sm mb-3">Our Expertise</h2>
        <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Complete Digital Solutions</h3>
        <p className="text-sky-200/70 text-lg">Scroll down to explore our comprehensive range of services tailored to grow your business.</p>
      </div>

      {services.map((service, index) => {
        const isEven = index % 2 === 0;
        const Icon = service.icon;

        return (
          <section key={service.id} className="relative py-24 min-h-[70vh] flex items-center overflow-hidden border-t border-white/5">
            {/* Background ambient glow */}
            <div className={`absolute top-1/2 ${isEven ? 'left-0' : 'right-0'} -translate-y-1/2 w-[500px] h-[500px] ${service.bg} rounded-full blur-[120px] pointer-events-none opacity-50`} />

            <div className="container mx-auto px-6 md:px-12 relative z-10">
              <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-16`}>
                
                {/* Visual Side */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7 }}
                  className="w-full md:w-1/2 flex justify-center"
                >
                  <div className={`w-64 h-64 md:w-80 md:h-80 rounded-[40px] border border-white/10 glass flex items-center justify-center ${service.glow}`}>
                    <Icon size={120} className={`${service.color}`} />
                  </div>
                </motion.div>

                {/* Content Side */}
                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="w-full md:w-1/2"
                >
                  <h2 className={`text-4xl md:text-6xl font-bold text-white mb-6`}>{service.title}</h2>
                  <p className="text-xl text-sky-200/80 mb-10 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-4">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <CheckCircle2 className={`${service.color}`} size={24} />
                        <span className="text-lg text-white/90">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
