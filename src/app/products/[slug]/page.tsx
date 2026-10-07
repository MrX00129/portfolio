import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export async function generateStaticParams() {
  return [
    { slug: "ai-article-writer" },
    { slug: "auto-blog-publisher" },
    { slug: "social-media-auto-poster" },
    { slug: "website-manager" },
    { slug: "seo-automation-tool" },
    { slug: "ai-business-assistant" },
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const title = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  return {
    title: `${title} | WebFix Expert Products`,
    description: `Automate and scale your business with ${title} by WebFix Expert.`,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const title = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Navbar />
      
      <div className="pt-32 pb-24 relative overflow-hidden min-h-[70vh] flex flex-col justify-center">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-brand-cyan/10 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
           <div className="inline-block px-4 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-sm font-bold mb-6">
              SaaS AUTOMATION TOOL
           </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 capitalize"><span className="text-gradient">{title}</span></h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-10">
            {title} is a proprietary AI-powered tool built to save you hundreds of hours. Fully automated, scalable, and designed for modern businesses.
          </p>
          
          <div className="flex justify-center gap-4">
             <button className="px-8 py-4 rounded-xl bg-brand-blue hover:bg-blue-600 text-white font-bold transition-all shadow-lg shadow-brand-blue/30 inline-flex">
               Start Free Trial
             </button>
             <button className="px-8 py-4 rounded-xl glass border border-white/10 hover:bg-white/5 text-white font-bold transition-all inline-flex">
               View Pricing
             </button>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
