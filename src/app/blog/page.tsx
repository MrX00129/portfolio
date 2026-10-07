"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BLOG_POSTS, BlogPost } from "@/lib/blogData";
import { Search, Clock, ArrowRight, Sparkles, Tag, User, BookOpen } from "lucide-react";

const CATEGORIES = ["All", "Web Development", "AI & Automation", "SEO & Growth", "Hosting & Cloud"];

export default function BlogIndexPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const featuredPost = useMemo(() => {
    return BLOG_POSTS.find((post) => post.featured) || BLOG_POSTS[0];
  }, []);

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <main className="min-h-screen bg-brand-dark text-white selection:bg-brand-cyan selection:text-black">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-brand-blue/20 via-brand-purple/20 to-brand-cyan/20 blur-[140px] pointer-events-none rounded-full" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-brand-cyan/30 text-brand-cyan text-xs font-semibold uppercase tracking-wider mb-6 animate-pulse">
            <Sparkles size={14} /> WebFix Insights & Engineering Blog
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Latest Insights on <span className="bg-gradient-to-r from-brand-cyan via-blue-400 to-purple-500 bg-clip-text text-transparent">Web Tech, AI & Digital Growth</span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            In-depth guides, architectural blueprints, SEO automation tactics, and AI tools curated by our expert engineering team.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <div className="relative glass rounded-full p-2 border border-white/10 shadow-2xl flex items-center">
              <Search className="ml-4 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search articles by title, topic, or technology..."
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

      {/* Featured Spotlight Article */}
      {featuredPost && !searchQuery && selectedCategory === "All" && (
        <section className="pb-16 container mx-auto px-6 md:px-12">
          <div className="relative glass rounded-3xl border border-white/10 overflow-hidden shadow-2xl hover:border-brand-cyan/40 transition-all duration-300 group grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 md:p-8">
            <div className="lg:col-span-7 flex flex-col justify-between order-2 lg:order-1">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-brand-cyan/20 border border-brand-cyan/40 text-brand-cyan text-xs font-semibold">
                    Featured Article
                  </span>
                  <span className="text-gray-400 text-xs flex items-center gap-1">
                    <Clock size={14} /> {featuredPost.readTime}
                  </span>
                </div>

                <Link href={`/blog/${featuredPost.slug}`}>
                  <h2 className="text-2xl md:text-4xl font-bold text-white group-hover:text-brand-cyan transition-colors mb-4 leading-snug">
                    {featuredPost.title}
                  </h2>
                </Link>

                <p className="text-gray-300 text-base md:text-lg mb-6 line-clamp-3">
                  {featuredPost.excerpt}
                </p>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <img
                    src={featuredPost.author.avatar}
                    alt={featuredPost.author.name}
                    className="w-10 h-10 rounded-full object-cover border border-brand-cyan/40"
                  />
                  <div>
                    <p className="text-white text-sm font-semibold">{featuredPost.author.name}</p>
                    <p className="text-gray-400 text-xs">{featuredPost.author.role}</p>
                  </div>
                </div>

                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center gap-2 text-brand-cyan font-medium text-sm hover:underline"
                >
                  Read Full Article <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-64 lg:h-auto rounded-2xl overflow-hidden order-1 lg:order-2">
              <img
                src={featuredPost.featuredImage}
                alt={featuredPost.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
            </div>
          </div>
        </section>
      )}

      {/* Category Filter Tabs */}
      <section className="py-6 container mx-auto px-6 md:px-12">
        <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar border-b border-white/10">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
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

      {/* Articles Grid */}
      <section className="py-12 container mx-auto px-6 md:px-12">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-20 glass rounded-3xl border border-white/10">
            <BookOpen className="mx-auto text-gray-500 mb-4" size={48} />
            <h3 className="text-xl font-bold text-white mb-2">No Articles Found</h3>
            <p className="text-gray-400 text-sm max-w-md mx-auto">
              We couldn't find any articles matching your search query or category filter. Try clearing your search term.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="glass rounded-2xl border border-white/10 overflow-hidden flex flex-col justify-between hover:border-brand-cyan/40 transition-all duration-300 group hover:-translate-y-1.5"
              >
                <div>
                  {/* Article Card Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.featuredImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full glass bg-black/60 border border-white/20 text-brand-cyan text-xs font-semibold backdrop-blur-md">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} /> {post.readTime}
                      </span>
                    </div>

                    <Link href={`/blog/${post.slug}`}>
                      <h3 className="text-xl font-bold text-white group-hover:text-brand-cyan transition-colors mb-3 line-clamp-2 leading-snug">
                        {post.title}
                      </h3>
                    </Link>

                    <p className="text-gray-300 text-sm mb-4 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>

                    {/* Tag list */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="text-[11px] px-2.5 py-0.5 rounded-md bg-white/5 text-gray-400 border border-white/5">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="px-6 py-4 border-t border-white/10 flex items-center justify-between bg-white/[0.02]">
                  <div className="flex items-center gap-2">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-7 h-7 rounded-full object-cover"
                    />
                    <span className="text-xs text-gray-300 font-medium">{post.author.name}</span>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-xs font-semibold text-brand-cyan hover:underline flex items-center gap-1"
                  >
                    Read <ArrowRight size={12} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* Newsletter Subscription Banner */}
      <section className="py-20 container mx-auto px-6 md:px-12">
        <div className="relative glass rounded-3xl p-8 md:p-14 border border-brand-cyan/30 text-center max-w-4xl mx-auto overflow-hidden shadow-2xl bg-gradient-to-br from-brand-blue/10 via-transparent to-brand-purple/10">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Subscribe to WebFix Tech Insights
            </h2>
            <p className="text-gray-300 text-base md:text-lg max-w-xl mx-auto mb-8">
              Get our latest web development tutorials, AI automation tools, and SEO optimization guides delivered directly to your inbox.
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                required
                className="w-full px-5 py-3.5 rounded-full glass border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-brand-cyan text-sm"
              />
              <button
                type="submit"
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan hover:opacity-90 text-white font-semibold text-sm transition-all whitespace-nowrap shadow-lg shadow-brand-blue/30"
              >
                Subscribe Free
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
