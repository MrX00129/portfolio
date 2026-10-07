import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PORTFOLIO_PROJECTS } from "@/lib/portfolioData";
import { ExternalLink, ArrowLeft, CheckCircle2, TrendingUp, Sparkles, Star, Code, Layers, Calendar } from "lucide-react";

export async function generateStaticParams() {
  return PORTFOLIO_PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export default async function PortfolioDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = PORTFOLIO_PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = PORTFOLIO_PROJECTS.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <main className="min-h-screen bg-brand-dark text-white selection:bg-brand-cyan selection:text-black">
      <Navbar />

      <article className="pt-32 pb-20">
        {/* Top Header & Breadcrumbs */}
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-brand-cyan mb-8 transition-colors"
          >
            <ArrowLeft size={16} /> Back to All Portfolio Projects
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full bg-brand-cyan/20 border border-brand-cyan/40 text-brand-cyan text-xs font-semibold">
              {project.category}
            </span>
            <span className="text-gray-400 text-xs flex items-center gap-1">
              <Calendar size={14} /> Completed in {project.completionYear}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
            {project.name}
          </h1>

          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mb-8 leading-relaxed">
            {project.tagline}
          </p>

          {/* Quick Specs Bar */}
          <div className="flex flex-wrap items-center justify-between gap-6 py-6 border-y border-white/10 mb-10">
            <div>
              <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">Client Organization</p>
              <p className="text-white font-semibold text-sm">{project.client.company}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">Industry Sector</p>
              <p className="text-white font-semibold text-sm">{project.industry}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">Tech Stack</p>
              <p className="text-brand-cyan font-semibold text-sm">{project.techStack.slice(0, 3).join(", ")}</p>
            </div>
            <div>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan hover:opacity-90 text-white font-semibold text-xs flex items-center gap-2 shadow-lg shadow-brand-blue/30"
              >
                <ExternalLink size={14} /> Visit Live Web App
              </a>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="container mx-auto px-6 md:px-12 max-w-5xl mb-16">
          <div className="relative h-[350px] md:h-[520px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Impact Results Callout Grid */}
        <div className="container mx-auto px-6 md:px-12 max-w-4xl mb-16">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <TrendingUp className="text-brand-cyan" size={20} /> Measurable Business Results & Impact
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.results.map((res, i) => (
              <div key={i} className="glass rounded-2xl p-6 border border-brand-cyan/30 text-center bg-gradient-to-br from-brand-blue/10 to-transparent">
                <p className="text-3xl md:text-4xl font-extrabold text-brand-cyan mb-2">{res.value}</p>
                <p className="text-gray-300 text-xs md:text-sm font-medium">{res.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Case Study Content Breakdown */}
        <div className="container mx-auto px-6 md:px-12 max-w-4xl space-y-12">
          {/* Section 1: Overview */}
          <section className="glass rounded-3xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">1. Project Overview & Objectives</h3>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">{project.description}</p>
          </section>

          {/* Section 2: Challenge */}
          <section className="glass rounded-3xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">2. The Technical Challenge</h3>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">{project.challenge}</p>
          </section>

          {/* Section 3: Solution */}
          <section className="glass rounded-3xl p-8 border border-white/10 bg-brand-blue/5">
            <h3 className="text-2xl font-bold text-brand-cyan mb-4">3. Engineering Solution & Architecture</h3>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">{project.solution}</p>

            <h4 className="text-white font-semibold text-sm mb-3">Technologies Deployed:</h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="px-3 py-1 rounded-lg bg-white/10 text-brand-cyan text-xs font-medium border border-white/10">
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Section 4: Client Testimonial */}
          <section className="glass rounded-3xl p-8 md:p-10 border border-brand-cyan/30 bg-gradient-to-r from-brand-blue/10 to-purple-900/10">
            <div className="flex text-amber-400 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="currentColor" />
              ))}
            </div>
            <p className="text-gray-200 text-lg md:text-xl italic mb-6 leading-relaxed">
              "{project.client.feedback}"
            </p>

            <div className="flex items-center gap-4">
              <img
                src={project.client.avatar}
                alt={project.client.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-brand-cyan/40"
              />
              <div>
                <p className="text-white font-semibold text-base">{project.client.name}</p>
                <p className="text-gray-400 text-xs">{project.client.role} • {project.client.company}</p>
              </div>
            </div>
          </section>
        </div>
      </article>

      {/* Related Case Studies */}
      {relatedProjects.length > 0 && (
        <section className="py-16 border-t border-white/10 bg-white/[0.01]">
          <div className="container mx-auto px-6 md:px-12 max-w-5xl">
            <h3 className="text-2xl font-bold text-white mb-8">Explore More Case Studies</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProjects.map((rProj) => (
                <Link
                  key={rProj.id}
                  href={`/portfolio/${rProj.slug}`}
                  className="glass rounded-2xl p-5 border border-white/10 hover:border-brand-cyan/40 transition-all group flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[11px] font-semibold text-brand-cyan block mb-2">
                      {rProj.category}
                    </span>
                    <h4 className="text-white font-bold text-base group-hover:text-brand-cyan transition-colors line-clamp-2 mb-2">
                      {rProj.name}
                    </h4>
                    <p className="text-gray-400 text-xs line-clamp-2">{rProj.tagline}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-gray-400 flex items-center justify-between">
                    <span>{rProj.completionYear}</span>
                    <span className="text-brand-cyan font-medium">Read Case Study →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
