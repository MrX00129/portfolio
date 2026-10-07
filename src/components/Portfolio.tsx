"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";
import { PORTFOLIO_PROJECTS } from "@/lib/portfolioData";

export default function Portfolio() {
  const featuredProjects = PORTFOLIO_PROJECTS.slice(0, 4);

  return (
    <section id="portfolio" className="py-24 relative bg-surface-dark/20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-brand-yellow font-semibold tracking-wide uppercase text-sm mb-3">Portfolio</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">Our Recent Case Studies</h3>
            <p className="text-gray-400 text-lg">A showcase of our premium digital solutions built for clients worldwide.</p>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-brand-cyan font-semibold hover:text-white transition-colors group text-base"
          >
            View All Projects 
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl glass border border-white/10"
            >
              <div className="relative h-64 md:h-80 w-full overflow-hidden">
                <div className="absolute inset-0 bg-brand-blue/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#001833] via-[#001833]/80 to-transparent z-20 flex flex-col justify-end p-8 translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-brand-cyan font-medium text-sm mb-2">{project.category}</p>
                <h4 className="text-2xl font-bold text-white mb-2">{project.name}</h4>
                <p className="text-gray-300 text-xs line-clamp-1 mb-6">{project.tagline}</p>
                
                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-2.5 rounded-full bg-brand-blue hover:bg-blue-600 text-white font-medium text-sm transition-colors flex items-center gap-2"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-sm backdrop-blur-md transition-colors border border-white/10"
                  >
                    Case Study
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
