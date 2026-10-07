"use client";

import { motion } from "framer-motion";
import { Target, DollarSign, Clock, Headset } from "lucide-react";

const reasons = [
  {
    icon: <Target size={24} className="text-brand-blue" />,
    title: "Result Driven",
    desc: "We focus on real business growth and ROI."
  },
  {
    icon: <DollarSign size={24} className="text-brand-yellow" />,
    title: "Affordable Pricing",
    desc: "Premium quality services at competitive rates."
  },
  {
    icon: <Clock size={24} className="text-green-400" />,
    title: "On-Time Delivery",
    desc: "We respect your time and meet deadlines."
  },
  {
    icon: <Headset size={24} className="text-brand-cyan" />,
    title: "24/7 Support",
    desc: "Always available to help and maintain your digital assets."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 border-t border-white/5 bg-gradient-to-b from-transparent to-surface-dark/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-4 p-6 glass rounded-2xl border border-white/5 hover:border-white/10 transition-colors"
            >
              <div className="w-12 h-12 shrink-0 rounded-full bg-white/5 flex items-center justify-center border border-white/5">
                {reason.icon}
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">{reason.title}</h4>
                <p className="text-gray-400 text-sm">{reason.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
