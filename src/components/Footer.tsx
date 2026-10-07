import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaLinkedin, FaInstagram, FaYoutube, FaGithub } from "react-icons/fa";

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
                alt="WebFix Expert Logo"
                width={280}
                height={90}
                className="h-14 sm:h-16 md:h-20 w-auto object-contain group-hover:scale-105 transition-transform"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Founded by <strong className="text-cyan-400">ALI</strong>. We Fix. We Build. We Grow Businesses. WebFix Expert provides complete digital solutions including websites, apps, digital marketing, AI automation tools to help your business scale efficiently.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-brand-blue transition-all">
                <FaFacebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#0077b5] transition-all">
                <FaLinkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#E1306C] transition-all">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#FF0000] transition-all">
                <FaYoutube size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#003153] transition-all">
                <FaGithub size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Portfolio', 'Case Studies', 'Pricing', 'Blog', 'Careers', 'Contact'].map((link, i) => (
                <li key={i}>
                  <Link href={`/${link.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-brand-cyan transition-colors text-sm">
                    {link}
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
                { name: 'ChatGPT Ads Expert', slug: 'chatgpt-ads-expert' },
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
            © {currentYear} WebFix Expert. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-gray-500 text-sm hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-500 text-sm hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/login" className="text-gray-500 text-sm hover:text-white transition-colors">Client Portal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
