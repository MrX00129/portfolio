import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#001833] pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[800px] h-[400px] bg-brand-blue/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
          
          <div className="lg:col-span-2 pr-8">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <Image
                src="/logo4.png"
                alt="WebFix Experts logo"
                width={280}
                height={90}
                className="h-14 sm:h-16 md:h-20 w-auto object-contain group-hover:scale-105 transition-transform"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Founded by <strong className="text-cyan-400">ALI</strong>. We Fix. We Build. We Grow Businesses. WebFix Experts provides digital solutions including websites, apps, digital marketing, AI automation, and maintenance support.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="mailto:ali@webfix.expert"
                className="px-4 py-2 rounded-full bg-white/5 text-gray-300 hover:text-white hover:bg-brand-blue transition-all text-sm"
              >
                ali@webfix.expert
              </a>
              <Link
                href="/contact"
                className="px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-300 hover:text-white hover:bg-cyan-500/20 transition-all text-sm"
              >
                Contact WebFix
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Products", href: "/products" },
                { name: "Portfolio", href: "/portfolio" },
                { name: "Pricing", href: "/pricing" },
                { name: "Blog", href: "/blog" },
                { name: "Free Tools", href: "/resources/free-tools" },
                { name: "Contact", href: "/contact" },
              ].map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-gray-400 hover:text-brand-cyan transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                { name: 'WordPress Development', slug: 'wordpress-development' },
                { name: 'Mobile App Development', slug: 'mobile-app-development' },
                { name: 'AI Search Visibility', slug: 'chatgpt-ads-expert' },
                { name: 'Google & Meta Ads', slug: 'google-ads' },
                { name: 'SEO Optimization', slug: 'seo-optimization' },
                { name: 'AI Automation & Integrations', slug: 'ai-automation-integrations' },
                { name: 'All 24 Services →', slug: '' }
              ].map((link, i) => (
                <li key={i}>
                  <Link href={link.slug ? `/services/${link.slug}` : '/services'} className="text-gray-400 hover:text-brand-cyan transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Products</h4>
            <ul className="space-y-3">
              {[
                { name: 'AI Article Writer', slug: 'ai-article-writer' },
                { name: 'Auto Blog Publisher', slug: 'auto-blog-publisher' },
                { name: 'SEO Automation Tool', slug: 'seo-automation-tool' },
                { name: 'Website Manager', slug: 'website-manager' },
                { name: 'Social Media Auto Poster', slug: 'social-media-auto-poster' }
              ].map((link, i) => (
                <li key={i}>
                  <Link href={`/products/${link.slug}`} className="text-gray-400 hover:text-brand-cyan transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} WebFix Experts. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="text-gray-500 text-sm hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-500 text-sm hover:text-white transition-colors">Terms</Link>
            <Link href="/login" className="text-gray-500 text-sm hover:text-white transition-colors">Client Portal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
