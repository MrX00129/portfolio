import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FREE_TOOLS } from "@/lib/freeToolsData";
import ToolRunners from "@/components/free-tools/ToolRunners";
import { ArrowLeft, Clock, ShieldCheck, Sparkles, Layers, ArrowRight } from "lucide-react";

export async function generateStaticParams() {
  return FREE_TOOLS.map((tool) => ({
    toolSlug: tool.slug,
  }));
}

export default async function FreeToolDetailPage({ params }: { params: Promise<{ toolSlug: string }> }) {
  const { toolSlug } = await params;
  const tool = FREE_TOOLS.find((t) => t.slug === toolSlug);

  if (!tool) {
    notFound();
  }

  const relatedTools = FREE_TOOLS.filter((t) => t.slug !== tool.slug).slice(0, 3);

  return (
    <main className="min-h-screen bg-brand-dark text-white selection:bg-brand-cyan selection:text-black">
      <Navbar />

      <article className="pt-32 pb-20">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          {/* Breadcrumbs */}
          <Link
            href="/resources/free-tools"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-brand-cyan mb-8 transition-colors"
          >
            <ArrowLeft size={16} /> Back to All Free Tools
          </Link>

          {/* Tool Title Banner */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-brand-cyan/20 border border-brand-cyan/40 text-brand-cyan text-xs font-semibold">
                {tool.badge}
              </span>
              <span className="text-gray-400 text-xs flex items-center gap-1">
                <Clock size={14} /> Execution time: {tool.estimatedTime}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
              {tool.name}
            </h1>

            <p className="text-gray-300 text-base md:text-lg max-w-3xl leading-relaxed">
              {tool.longDescription}
            </p>
          </div>

          {/* Interactive Tool Runner Component */}
          <div className="mb-16">
            <ToolRunners tool={tool} />
          </div>

          {/* Additional Tool Usage Benefits */}
          <div className="p-8 glass rounded-3xl border border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="flex items-start gap-3">
              <ShieldCheck className="text-brand-cyan shrink-0" size={24} />
              <div>
                <h4 className="text-white text-sm font-bold mb-1">Privacy Guaranteed</h4>
                <p className="text-gray-400 text-xs">All processing occurs locally in client browser memory.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Sparkles className="text-amber-400 shrink-0" size={24} />
              <div>
                <h4 className="text-white text-sm font-bold mb-1">No API Limits</h4>
                <p className="text-gray-400 text-xs">Run audits and schema generators as many times as you need.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Layers className="text-purple-400 shrink-0" size={24} />
              <div>
                <h4 className="text-white text-sm font-bold mb-1">Copy-Paste Ready</h4>
                <p className="text-gray-400 text-xs">Get validated output ready for direct production deployment.</p>
              </div>
            </div>
          </div>

          {/* Related Tools */}
          {relatedTools.length > 0 && (
            <div className="pt-12 border-t border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Explore Other Free Developer Tools</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedTools.map((rTool) => (
                  <Link
                    key={rTool.id}
                    href={`/resources/free-tools/${rTool.slug}`}
                    className="glass rounded-2xl p-5 border border-white/10 hover:border-brand-cyan/40 transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[11px] font-semibold text-brand-cyan block mb-2">
                        {rTool.category}
                      </span>
                      <h4 className="text-white font-bold text-base group-hover:text-brand-cyan transition-colors line-clamp-2 mb-2">
                        {rTool.name}
                      </h4>
                      <p className="text-gray-400 text-xs line-clamp-2">{rTool.shortDescription}</p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-gray-400 flex items-center justify-between">
                      <span>{rTool.estimatedTime}</span>
                      <span className="text-brand-cyan font-semibold flex items-center gap-1">Use Tool <ArrowRight size={12} /></span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <Footer />
    </main>
  );
}
