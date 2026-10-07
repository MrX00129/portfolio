"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PORTFOLIO_PROJECTS, PortfolioProject } from "@/lib/portfolioData";
import { ExternalLink, ArrowRight, Sparkles, Filter, CheckCircle, Star, X, Layers, Code, TrendingUp, Users } from "lucide-react";

const CATEGORIES = ["All", "Business & SaaS", "Education & EdTech", "AI & Automation", "Fintech & E-Commerce", "Logistics & Cloud"];

export default function PortfolioIndexPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [previewProject, setPreviewProject] = useState<PortfolioProject | null>(null);

  // Extract all unique tech tags
  const allTechStack = useMemo(() => {
    const set = new Set<string>();
    PORTFOLIO_PROJECTS.forEach((p) => p.techStack.forEach((t) => set.add(t)));
    return Array.from(set);
  }, []);

  const filteredProjects = useMemo(() => {
    return PORTFOLIO_PROJECTS.filter((project) => {
      const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
      const matchesTech = !selectedTech || project.techStack.includes(selectedTech);
      return matchesCategory && matchesTech;
    });
  }, [selectedCategory, selectedTech]);

  const featuredProject = useMemo(() => {
    return PORTFOLIO_PROJECTS.find((p) => p.featured) || PORTFOLIO_PROJECTS[0];
  }, []);

  return (
    <main className="min-h-screen bg-brand-dark text-white selection:bg-brand-cyan selection:text-black">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-brand-blue/20 via-brand-cyan/20 to-purple-600/20 blur-[150px] pointer-events-none rounded-full" />

        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-brand-cyan/30 text-brand-cyan text-xs font-semibold uppercase tracking-wider mb-6 animate-pulse">
            <Sparkles size={14} /> Proven Excellence & Digital Impact
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Our Portfolio of <span className="bg-gradient-to-r from-brand-cyan via-blue-400 to-purple-500 bg-clip-text text-transparent">High-Impact Solutions</span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Explore our curated showcase of web applications, AI automation tools, cloud infrastructures, and custom digital platforms engineered for growth.
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 glass rounded-2xl p-6 border border-white/10 max-w-3xl mx-auto">
            <div>
              <p className="text-2xl md:text-3xl font-extrabold text-brand-cyan">60+</p>
              <p className="text-gray-400 text-xs">Projects Delivered</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-extrabold text-white">99.8%</p>
              <p className="text-gray-400 text-xs">Client Satisfaction</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-extrabold text-brand-cyan">15+</p>
              <p className="text-gray-400 text-xs">Global Industries</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-extrabold text-white">&lt; 100ms</p>
              <p className="text-gray-400 text-xs">Avg Page Load Time</p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter Tabs */}
      <section className="py-6 container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto no-scrollbar">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-medium transition-all whitespace-nowrap ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-brand-blue to-brand-cyan text-white shadow-lg shadow-brand-blue/30 font-semibold"
                    : "glass text-gray-300 hover:text-white hover:bg-white/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Tech Stack Reset Pills */}
          {selectedTech && (
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span>Filtered by tech: <strong className="text-brand-cyan">{selectedTech}</strong></span>
              <button
                onClick={() => setSelectedTech(null)}
                className="px-2.5 py-1 rounded-full glass bg-white/10 text-white hover:bg-white/20 text-xs"
              >
                Reset Filter
              </button>
            </div>
          )}
        </div>

        {/* Tech Badges Row */}
        <div className="flex items-center gap-2 overflow-x-auto py-4 no-scrollbar">
          <span className="text-xs text-gray-400 font-medium shrink-0 flex items-center gap-1 mr-2">
            <Code size={14} /> Tech Stack:
          </span>
          {allTechStack.map((tech) => (
            <button
              key={tech}
              onClick={() => setSelectedTech(selectedTech === tech ? null : tech)}
              className={`px-3 py-1 rounded-lg text-xs transition-colors shrink-0 ${
                selectedTech === tech
                  ? "bg-brand-cyan text-black font-semibold"
                  : "glass bg-white/5 border border-white/10 text-gray-300 hover:text-white"
              }`}
            >
              {tech}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Showcase Grid */}
      <section className="py-12 container mx-auto px-6 md:px-12">
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20 glass rounded-3xl border border-white/10">
            <Layers className="mx-auto text-gray-500 mb-4" size={48} />
            <h3 className="text-xl font-bold text-white mb-2">No Projects Found</h3>
            <p className="text-gray-400 text-sm max-w-md mx-auto">
              No projects match the selected category and tech stack filters. Try clearing your filters.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="glass rounded-3xl border border-white/10 overflow-hidden flex flex-col justify-between hover:border-brand-cyan/40 transition-all duration-300 group hover:-translate-y-1.5"
              >
                <div>
                  {/* Card Header Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-60" />

                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-3 py-1 rounded-full glass bg-black/60 border border-white/20 text-brand-cyan text-xs font-semibold backdrop-blur-md">
                        {project.category}
                      </span>
                    </div>

                    <button
                      onClick={() => setPreviewProject(project)}
                      className="absolute top-4 right-4 px-3 py-1.5 rounded-full glass bg-white/10 hover:bg-white/30 border border-white/20 text-white text-xs font-medium backdrop-blur-md transition-all opacity-0 group-hover:opacity-100"
                    >
                      Quick View
                    </button>
                  </div>

                  {/* Body Info */}
                  <div className="p-6">
                    <span className="text-xs text-gray-400 font-medium block mb-1">
                      {project.industry} • {project.completionYear}
                    </span>

                    <Link href={`/portfolio/${project.slug}`}>
                      <h3 className="text-2xl font-bold text-white group-hover:text-brand-cyan transition-colors mb-2">
                        {project.name}
                      </h3>
                    </Link>

                    <p className="text-gray-300 text-sm mb-4 line-clamp-2 leading-relaxed">
                      {project.tagline}
                    </p>

                    {/* Results Badges */}
                    <div className="grid grid-cols-2 gap-2 mb-6 bg-white/[0.02] p-3 rounded-xl border border-white/5">
                      {project.results.slice(0, 2).map((res, i) => (
                        <div key={i}>
                          <span className="text-brand-cyan font-bold text-sm block">{res.value}</span>
                          <span className="text-[11px] text-gray-400 line-clamp-1">{res.label}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <span key={tech} className="text-[11px] px-2.5 py-0.5 rounded-md bg-white/5 text-gray-400 border border-white/5">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Link Buttons */}
                <div className="px-6 py-4 border-t border-white/10 flex items-center justify-between bg-white/[0.02]">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-gray-300 hover:text-white flex items-center gap-1 font-medium"
                  >
                    <ExternalLink size={14} /> Live Site
                  </a>

                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="text-xs font-semibold text-brand-cyan hover:underline flex items-center gap-1"
                  >
                    Case Study <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Client Testimonials Section */}
      <section className="py-20 border-t border-white/10 bg-white/[0.01]">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-brand-cyan font-semibold uppercase text-xs tracking-wider mb-2">
              Client Feedback
            </h2>
            <h3 className="text-3xl font-extrabold text-white">
              Trusted by Visionary Founders Worldwide
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PORTFOLIO_PROJECTS.slice(0, 4).map((p) => (
              <div key={p.id} className="glass rounded-3xl p-8 border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="flex text-amber-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm md:text-base italic mb-6 leading-relaxed">
                    "{p.client.feedback}"
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  <img
                    src={p.client.avatar}
                    alt={p.client.name}
                    className="w-11 h-11 rounded-full object-cover border border-brand-cyan/40"
                  />
                  <div>
                    <h4 className="text-white text-sm font-semibold">{p.client.name}</h4>
                    <p className="text-gray-400 text-xs">{p.client.role} • {p.client.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Project Preview Modal */}
      {previewProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative glass rounded-3xl border border-white/20 max-w-2xl w-full p-6 md:p-8 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setPreviewProject(null)}
              className="absolute top-4 right-4 p-2 rounded-full glass hover:bg-white/20 text-white"
            >
              <X size={20} />
            </button>

            <span className="px-3 py-1 rounded-full bg-brand-cyan/20 text-brand-cyan text-xs font-semibold uppercase mb-3 inline-block">
              {previewProject.category}
            </span>

            <h3 className="text-2xl font-bold text-white mb-2">{previewProject.name}</h3>
            <p className="text-gray-300 text-sm mb-6">{previewProject.tagline}</p>

            <img
              src={previewProject.image}
              alt={previewProject.name}
              className="w-full h-64 object-cover rounded-2xl mb-6 border border-white/10"
            />

            <h4 className="text-white font-semibold text-sm mb-2">Key Problem & Solution</h4>
            <p className="text-gray-300 text-xs leading-relaxed mb-6">{previewProject.solution}</p>

            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <a
                href={previewProject.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2.5 rounded-full bg-brand-blue hover:bg-blue-600 text-white font-semibold text-xs flex items-center gap-2"
              >
                <ExternalLink size={14} /> Visit Live Website
              </a>
              <Link
                href={`/portfolio/${previewProject.slug}`}
                className="px-6 py-2.5 rounded-full glass hover:bg-white/10 text-brand-cyan font-semibold text-xs"
              >
                Full Case Study →
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action Banner */}
      <section className="py-20 container mx-auto px-6 md:px-12">
        <div className="relative glass rounded-3xl p-8 md:p-14 border border-brand-cyan/30 text-center max-w-4xl mx-auto overflow-hidden shadow-2xl bg-gradient-to-br from-brand-blue/10 via-transparent to-brand-purple/10">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
              Ready to Build Your Next Digital Breakthrough?
            </h2>
            <p className="text-gray-300 text-base md:text-lg max-w-xl mx-auto mb-8">
              Let's collaborate to engineer ultra-fast web platforms, custom AI tools, or scalable cloud systems for your enterprise.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan hover:opacity-90 text-white font-semibold text-sm transition-all shadow-lg shadow-brand-blue/30"
              >
                Start Your Project Today
              </Link>
              <Link
                href="/pricing"
                className="px-8 py-3.5 rounded-full glass hover:bg-white/10 text-white font-semibold text-sm border border-white/10"
              >
                View Pricing Packages
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
