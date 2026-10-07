import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BLOG_POSTS } from "@/lib/blogData";
import { Clock, ArrowLeft, Share2, Tag, Calendar, User, Sparkles, BookOpen } from "lucide-react";

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <main className="min-h-screen bg-brand-dark text-white selection:bg-brand-cyan selection:text-black">
      <Navbar />

      <article className="pt-32 pb-20">
        {/* Top Header & Breadcrumbs */}
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-brand-cyan mb-8 transition-colors"
          >
            <ArrowLeft size={16} /> Back to All Articles
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full bg-brand-cyan/20 border border-brand-cyan/40 text-brand-cyan text-xs font-semibold">
              {post.category}
            </span>
            <span className="text-gray-400 text-xs flex items-center gap-1">
              <Clock size={14} /> {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Author Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 py-6 border-y border-white/10 mb-8">
            <div className="flex items-center gap-4">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-brand-cyan/40"
              />
              <div>
                <p className="text-white text-base font-semibold">{post.author.name}</p>
                <p className="text-gray-400 text-xs">{post.author.role} • {post.date}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button className="px-4 py-2 rounded-full glass hover:bg-white/10 text-gray-300 text-xs font-medium flex items-center gap-2 transition-colors">
                <Share2 size={14} /> Share Article
              </button>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="container mx-auto px-6 md:px-12 max-w-5xl mb-12">
          <div className="relative h-[350px] md:h-[500px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <img
              src={post.featuredImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Article Body Content */}
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <div
            className="prose prose-invert prose-cyan max-w-none text-gray-200 leading-relaxed text-base md:text-lg"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Article Tags */}
          <div className="mt-12 pt-6 border-t border-white/10">
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
              <Tag size={14} /> Article Topics
            </h4>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-lg glass bg-white/5 border border-white/10 text-brand-cyan text-xs font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Author Box */}
          <div className="mt-10 p-6 md:p-8 glass rounded-2xl border border-white/10 flex items-start gap-4 md:gap-6 bg-gradient-to-r from-brand-blue/5 to-transparent">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-brand-cyan/40 shrink-0"
            />
            <div>
              <h4 className="text-lg font-bold text-white mb-1">Written by {post.author.name}</h4>
              <p className="text-brand-cyan text-xs mb-3">{post.author.role}</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                Expert software engineer and digital solutions architect at WebFix Expert. Specializing in high-performance web applications, serverless infrastructures, and automated workflows.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 border-t border-white/10 bg-white/[0.01]">
          <div className="container mx-auto px-6 md:px-12 max-w-5xl">
            <h3 className="text-2xl font-bold text-white mb-8">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((rPost) => (
                <Link
                  key={rPost.id}
                  href={`/blog/${rPost.slug}`}
                  className="glass rounded-2xl p-5 border border-white/10 hover:border-brand-cyan/40 transition-all group flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[11px] font-semibold text-brand-cyan block mb-2">
                      {rPost.category}
                    </span>
                    <h4 className="text-white font-bold text-base group-hover:text-brand-cyan transition-colors line-clamp-2 mb-2">
                      {rPost.title}
                    </h4>
                    <p className="text-gray-400 text-xs line-clamp-2">{rPost.excerpt}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-gray-400 flex items-center justify-between">
                    <span>{rPost.date}</span>
                    <span className="text-brand-cyan font-medium">Read Article →</span>
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
