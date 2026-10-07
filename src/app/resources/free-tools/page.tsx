"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FREE_TOOLS, FreeTool } from "@/lib/freeToolsData";
import { Search, Sparkles, Zap, FileCode, Share2, Key, ArrowRight, ShieldCheck, Clock, Layers, Star } from "lucide-react";

const CATEGORIES = ["All", "Media & AI Tools", "Web Performance & Security", "SEO & Growth", "Developer Utilities", "Text & Content", "Design & UI"];

export default function FreeToolsIndexPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTools = useMemo(() => {
    return FREE_TOOLS.filter((tool) => {
      const matchesCategory = selectedCategory === "All" || tool.category === selectedCategory;
      const matchesSearch =
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const getToolIcon = (iconName: string) => {
    switch (iconName) {
      case "Zap":
        return <Zap className="text-amber-400" size={24} />;
      case "FileCode":
        return <FileCode className="text-brand-cyan" size={24} />;
      case "Sparkles":
        return <Sparkles className="text-purple-400" size={24} />;
      case "Share2":
        return <Share2 className="text-emerald-400" size={24} />;
      case "Key":
        return <Key className="text-rose-400" size={24} />;
      default:
        return <Zap className="text-brand-cyan" size={24} />;
    }
  };

  return (
    <main className="min-h-screen bg-brand-dark text-white selection:bg-brand-cyan selection:text-black">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-brand-blue/20 via-brand-cyan/20 to-emerald-500/20 blur-[140px] pointer-events-none rounded-full" />

        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-brand-cyan/30 text-brand-cyan text-xs font-semibold uppercase tracking-wider mb-6 animate-pulse">
            <Sparkles size={14} /> 100% Free Developer & Marketer Utilities
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Free Web & AI Tools to <span className="bg-gradient-to-r from-brand-cyan via-blue-400 to-emerald-400 bg-clip-text text-transparent">Accelerate Your Business</span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            No signup required, no hidden paywalls. Instant web speed audits, JSON-LD schema builders, AI SERP preview generators, and cryptographic secret tools.
          </p>

          {/* Search Input */}
          <div className="relative max-w-2xl mx-auto mb-10">
            <div className="relative glass rounded-full p-2 border border-white/10 shadow-2xl flex items-center">
              <Search className="ml-4 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search tools by keyword (e.g. speed, schema, meta, secret)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent px-4 py-3 text-white placeholder-gray-400 focus:outline-none text-sm md:text-base"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="mr-2 text-xs text-gray-400 hover:text-white px-3 py-1.5 rounded-full bg-white/10"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-4 container mx-auto px-6 md:px-12">
        <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar border-b border-white/10">
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
      </section>

      {/* Tools Grid */}
      <section className="py-12 container mx-auto px-6 md:px-12">
        {filteredTools.length === 0 ? (
          <div className="text-center py-20 glass rounded-3xl border border-white/10">
            <Layers className="mx-auto text-gray-500 mb-4" size={48} />
            <h3 className="text-xl font-bold text-white mb-2">No Free Tools Found</h3>
            <p className="text-gray-400 text-sm max-w-md mx-auto">
              No tools matched your search criteria. Try adjusting your query or category selection.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTools.map((tool) => (
              <div
                key={tool.id}
                className="glass rounded-3xl p-8 border border-white/10 flex flex-col justify-between hover:border-brand-cyan/40 transition-all duration-300 group hover:-translate-y-1.5 shadow-xl relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl glass bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {getToolIcon(tool.iconName)}
                    </div>

                    <span className="px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-[11px] font-semibold">
                      {tool.badge}
                    </span>
                  </div>

                  <span className="text-xs text-gray-400 font-medium block mb-2">
                    {tool.category}
                  </span>

                  <h3 className="text-xl font-bold text-white group-hover:text-brand-cyan transition-colors mb-3 leading-snug">
                    {tool.name}
                  </h3>

                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                    {tool.shortDescription}
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs text-gray-400 pt-4 border-t border-white/10 mb-6">
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> {tool.estimatedTime}
                    </span>
                    <span>{tool.usageCount}</span>
                  </div>

                  <Link
                    href={`/resources/free-tools/${tool.slug}`}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-blue to-brand-cyan hover:opacity-90 text-white font-semibold text-xs transition-all shadow-lg shadow-brand-blue/30 flex items-center justify-center gap-2"
                  >
                    Use Tool Now <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Value Prop Banner */}
      <section className="py-16 border-t border-white/10 bg-white/[0.01]">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Developers & Agencies Trust Our Tools</h2>
            <p className="text-gray-400 text-sm">Built by engineers for engineers. Fast, secure, and privacy-focused.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass rounded-2xl p-6 border border-white/10">
              <ShieldCheck className="text-brand-cyan mb-4" size={32} />
              <h4 className="text-white font-bold text-base mb-2">100% Client-Side Privacy</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                Secret keys and code generation happen locally in your browser. No sensitive inputs are ever saved or stored on remote servers.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 border border-white/10">
              <Zap className="text-amber-400 mb-4" size={32} />
              <h4 className="text-white font-bold text-base mb-2">Instant Execution</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                Get real-time feedback, interactive previews, and 1-click copy functionality without waiting in long server queues.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 border border-white/10">
              <Sparkles className="text-purple-400 mb-4" size={32} />
              <h4 className="text-white font-bold text-base mb-2">Updated for 2026 Tech</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                Our tools follow the latest Google Core Web Vitals guidelines, schema specs, and modern security standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
