"use client";

import { motion } from "framer-motion";
import { PenTool, Rss, Share2, Settings, Search, Briefcase } from "lucide-react";

const products = [
  {
    title: "AI Article Writer",
    desc: "Generate high-quality, SEO-optimized articles in seconds with advanced AI.",
    icon: <PenTool size={28} className="text-purple-400" />
  },
  {
    title: "Auto Blog Publisher",
    desc: "Automate your content pipeline and publish directly to your CMS.",
    icon: <Rss size={28} className="text-orange-400" />
  },
  {
    title: "Social Media Auto Poster",
    desc: "Schedule and auto-post content across all major social networks.",
    icon: <Share2 size={28} className="text-brand-cyan" />
  },
  {
    title: "Website Manager",
    desc: "Centralized dashboard to manage multiple websites, updates, and backups.",
    icon: <Settings size={28} className="text-gray-400" />
  },
  {
    title: "SEO Automation Tool",
    desc: "Automatically track rankings, fix issues, and optimize on-page SEO.",
    icon: <Search size={28} className="text-brand-yellow" />
  },
  {
    title: "AI Business Assistant",
    desc: "A smart assistant to handle customer queries and automate workflows.",
    icon: <Briefcase size={28} className="text-brand-blue" />
  }
];

export default function Products() {
  return (
    <section id="products" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-purple-400 font-semibold tracking-wide uppercase text-sm mb-3">SaaS Products</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Our Products & Automation Tools</h3>
          <p className="text-gray-400 text-lg">Scale your operations with our proprietary suite of AI-powered automation tools.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass p-8 rounded-2xl border border-white/10 hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full"
            >
              <div className="w-14 h-14 rounded-full bg-surface-dark border border-white/10 flex items-center justify-center mb-6 shadow-inner">
                {product.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{product.title}</h4>
              <p className="text-gray-400 mb-8 flex-grow">{product.desc}</p>
              <button className="w-full py-3 rounded-xl bg-white/5 hover:bg-brand-blue hover:text-white border border-white/10 hover:border-brand-blue text-gray-300 font-medium transition-all duration-300">
                Learn More
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
