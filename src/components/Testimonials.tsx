"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Jenkins",
    designation: "CEO, TechNova",
    text: "WebFix Expert completely transformed our online presence. Their automated tools saved us hundreds of hours.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "David Chen",
    designation: "Founder, GrowthX",
    text: "ALI and the WebFix Expert team are the best development partners we've ever worked with. Delivered on time, flawless code, and amazing support.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Emily Rodriguez",
    designation: "Marketing Director, Elevate",
    text: "Their SEO automation and digital marketing strategies 10x'd our inbound leads within just three months.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 relative bg-surface-dark/50 border-y border-white/5">
      <div className="absolute left-0 top-1/2 w-[400px] h-[400px] bg-brand-cyan/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-yellow font-semibold tracking-wide uppercase text-sm mb-3">Testimonials</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">What Our Clients Say</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 rounded-3xl border border-white/10 relative"
            >
              <Quote className="absolute top-6 right-8 text-white/5" size={64} />
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-brand-yellow text-brand-yellow" />
                ))}
              </div>
              
              <p className="text-gray-300 text-lg mb-8 relative z-10 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-white/10"
                />
                <div>
                  <h4 className="text-white font-bold">{testimonial.name}</h4>
                  <p className="text-brand-cyan text-sm">{testimonial.designation}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
