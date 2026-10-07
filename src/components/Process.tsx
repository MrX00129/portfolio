"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Code, Rocket } from "lucide-react";

const steps = [
  {
    icon: <Search size={32} className="text-brand-blue" />,
    title: "1. Discovery & Strategy",
    desc: "We dive deep into your business goals, target audience, and requirements to create a bulletproof roadmap."
  },
  {
    icon: <PenTool size={32} className="text-brand-cyan" />,
    title: "2. UI/UX Design",
    desc: "Our design team crafts intuitive, beautiful, and conversion-focused interfaces tailored to your brand."
  },
  {
    icon: <Code size={32} className="text-purple-400" />,
    title: "3. Development",
    desc: "We build scalable, secure, and lightning-fast solutions using cutting-edge enterprise technologies."
  },
  {
    icon: <Rocket size={32} className="text-brand-yellow" />,
    title: "4. Launch & Scale",
    desc: "Rigorous testing, flawless deployment, and ongoing support to ensure your digital asset thrives."
  }
];

export default function Process() {
  return (
    <section className="py-24 bg-[#001833] relative overflow-hidden border-t border-white/5">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/10 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-cyan font-semibold tracking-wide uppercase text-sm mb-3">Our Workflow</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">How We Build Masterpieces</h3>
          <p className="text-sky-200/70 text-lg">A transparent, agile, and result-oriented process that guarantees success from idea to execution.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative p-8 rounded-3xl glass border border-white/10 hover:bg-white/[0.02] transition-colors group"
            >
              {/* Connecting line for larger screens */}
              {index !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 right-[-2rem] w-8 h-[1px] bg-gradient-to-r from-white/20 to-transparent z-0" />
              )}
              
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-4">{step.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
