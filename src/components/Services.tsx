"use client";

import { motion } from "framer-motion";
import { 
  Globe, 
  Smartphone, 
  Megaphone, 
  Bot, 
  ShieldCheck, 
  Cpu, 
  Cloud 
} from "lucide-react";

const services = [
  {
    title: "Website Development",
    icon: <Globe size={32} className="text-brand-blue" />,
    items: ["WordPress", "Elementor Pro", "E-Commerce", "Landing Pages", "Custom Websites"],
  },
  {
    title: "App Development",
    icon: <Smartphone size={32} className="text-brand-cyan" />,
    items: ["Android Apps", "iOS Apps", "Flutter Apps", "Custom Business Apps"],
  },
  {
    title: "Digital Marketing",
    icon: <Megaphone size={32} className="text-brand-yellow" />,
    items: ["Google Ads", "Facebook Ads", "Lead Generation", "SEO Optimization"],
  },
  {
    title: "Website Automation",
    icon: <Bot size={32} className="text-green-400" />,
    items: ["AI Article Writer", "Auto Blog Posting", "Content Automation", "Social Media Auto Posting", "SEO Automation"],
  },
  {
    title: "Website Maintenance",
    icon: <ShieldCheck size={32} className="text-red-400" />,
    items: ["Security Monitoring", "Backups", "Performance Optimization", "Malware Removal", "Update Management"],
  },
  {
    title: "AI & Automation Tools",
    icon: <Cpu size={32} className="text-purple-400" />,
    items: ["AI Content Generator", "Chatbot Solutions", "Business Automation", "Workflow Automation", "AI Integration"],
  },
  {
    title: "Hosting & Cloud",
    icon: <Cloud size={32} className="text-orange-400" />,
    items: ["VPS Hosting", "Linux Server", "Cloud Deployment", "Website Migration"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-cyan font-semibold tracking-wide uppercase text-sm mb-3">What We Do</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Premium Digital Solutions</h3>
          <p className="text-gray-400 text-lg">We provide an end-to-end suite of services designed to build, fix, and scale your business in the digital era.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative glass p-8 rounded-2xl border border-white/10 hover:border-brand-cyan/40 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(6,182,212,0.2)] transition-all duration-500 group overflow-hidden"
            >
              {/* Background Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/0 to-brand-cyan/0 group-hover:from-brand-blue/5 group-hover:to-brand-cyan/10 transition-colors duration-500 z-0"></div>
              
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-brand-blue to-brand-cyan group-hover:w-full transition-all duration-700 ease-in-out z-10"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-[#001833] border border-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-3 group-hover:shadow-[0_0_25px_rgba(6,182,212,0.25)] group-hover:border-brand-cyan/30 transition-all duration-500">
                  <div className="group-hover:scale-110 transition-transform duration-500">
                    {service.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-white mb-5 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-brand-cyan transition-all duration-300">{service.title}</h4>
                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-center text-gray-400 text-sm group/item cursor-default">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan/40 mr-3 group-hover/item:bg-brand-cyan group-hover/item:shadow-[0_0_8px_rgba(6,182,212,0.8)] group-hover/item:scale-125 transition-all duration-300"></span>
                      <span className="group-hover/item:text-white group-hover/item:translate-x-1.5 transition-all duration-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
