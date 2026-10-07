"use client";

import { motion } from "framer-motion";

const technologies = [
  { name: "WordPress", color: "hover:text-[#21759b]" },
  { name: "Elementor", color: "hover:text-[#92003B]" },
  { name: "WooCommerce", color: "hover:text-[#96588a]" },
  { name: "PHP", color: "hover:text-[#777BB4]" },
  { name: "Next.js", color: "hover:text-white" },
  { name: "TypeScript", color: "hover:text-[#3178C6]" },
  { name: "HTML5", color: "hover:text-[#E34F26]" },
  { name: "CSS3", color: "hover:text-[#1572B6]" },
  { name: "MySQL", color: "hover:text-[#4479A1]" },
  { name: "Linux", color: "hover:text-[#FCC624]" },
  { name: "Flutter", color: "hover:text-[#02569B]" },
  { name: "Firebase", color: "hover:text-[#FFCA28]" }
];

export default function TechStack() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-gray-400 font-semibold tracking-wide uppercase text-sm mb-2">Technologies We Use</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8 max-w-5xl mx-auto">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className={`px-6 py-3 rounded-full glass border border-white/5 text-gray-400 font-medium ${tech.color} transition-colors cursor-pointer select-none`}
            >
              {tech.name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
