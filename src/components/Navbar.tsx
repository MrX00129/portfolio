"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, User as UserIcon, LogOut, LayoutDashboard } from "lucide-react";
import { useSession, signOut } from "next-auth/react";

const megaMenus = {
  services: [
    { name: "WordPress Development", href: "/services/wordpress-development" },
    { name: "Web Design & UI/UX", href: "/services/web-design-ui-ux" },
    { name: "Mobile App Development", href: "/services/mobile-app-development" },
    { name: "eCommerce Solutions", href: "/services/ecommerce-solutions" },
    { name: "ChatGPT Ads Expert", href: "/services/chatgpt-ads-expert" },
    { name: "Google & Meta Ads", href: "/services/google-ads" },
    { name: "SEO Optimization", href: "/services/seo-optimization" },
    { name: "AI Automation & Integrations", href: "/services/ai-automation-integrations" },
    { name: "Explore All 24 Services →", href: "/services" },
  ],
  products: [
    { name: "AI Article Writer", href: "/products/ai-article-writer" },
    { name: "Auto Blog Publisher", href: "/products/auto-blog-publisher" },
    { name: "SEO Automation Tool", href: "/products/seo-automation-tool" },
    { name: "Website Manager", href: "/products/website-manager" },
    { name: "Social Media Auto Poster", href: "/products/social-media-auto-poster" },
    { name: "AI Business Assistant", href: "/products/ai-business-assistant" },
  ],
  resources: [
    { name: "Free Tools", href: "/resources/free-tools" },
    { name: "Templates", href: "/resources/templates" },
    { name: "Documentation", href: "/resources/documentation" },
    { name: "Tutorials", href: "/resources/tutorials" },
  ]
};

export default function Navbar() {
  const { data: session } = useSession();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "glass py-4 shadow-lg border-b border-white/5" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/logo4.png"
            alt="WebFix Expert Logo"
            width={240}
            height={80}
            className="h-12 sm:h-14 md:h-16 w-auto object-contain group-hover:scale-105 transition-transform"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          <Link href="/" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Home</Link>
          <Link href="/about" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">About Us</Link>
          
          {/* Mega Menus */}
          {['services', 'products', 'resources'].map((menuType) => (
            <div 
              key={menuType}
              className="relative group"
              onMouseEnter={() => setActiveMenu(menuType)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-gray-300 hover:text-white transition-colors capitalize">
                {menuType} <ChevronDown size={14} className={`transition-transform duration-300 ${activeMenu === menuType ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {activeMenu === menuType && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 glass rounded-2xl border border-white/10 p-2 shadow-2xl overflow-hidden"
                  >
                    <div className="grid grid-cols-1 gap-1">
                      {megaMenus[menuType as keyof typeof megaMenus].map((item) => (
                        <Link 
                          key={item.name} 
                          href={item.href}
                          className="px-4 py-2.5 rounded-xl hover:bg-white/5 text-gray-300 hover:text-white transition-colors text-sm"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          <Link href="/portfolio" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Portfolio</Link>
          <Link href="/pricing" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Pricing</Link>
          <Link href="/blog" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Blog</Link>
          <Link href="/contact" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Contact</Link>
        </nav>

        {/* Desktop CTA & Auth */}
        <div className="hidden lg:flex items-center gap-4">
          {session ? (
             <div className="relative group">
                <button className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                  {session.user?.image ? (
                     <img src={session.user.image} alt="User" className="w-full h-full rounded-full object-cover" />
                  ) : (
                     <UserIcon size={18} />
                  )}
                </button>
                <div className="absolute right-0 top-full mt-2 w-48 glass rounded-xl border border-white/10 p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-right scale-95 group-hover:scale-100">
                   <div className="px-3 py-2 border-b border-white/10 mb-1">
                      <p className="text-sm text-white font-medium truncate">{session.user?.name}</p>
                      <p className="text-xs text-gray-400 truncate">{session.user?.email}</p>
                   </div>
                   <Link href="/dashboard" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/5 text-gray-300 text-sm">
                      <LayoutDashboard size={14} /> Dashboard
                   </Link>
                   <button onClick={() => signOut()} className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-red-500/10 text-red-400 text-sm mt-1">
                      <LogOut size={14} /> Logout
                   </button>
                </div>
             </div>
          ) : (
             <>
                <Link href="/login" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                   Login
                </Link>
                <Link
                   href="/contact"
                   className="px-6 py-2.5 rounded-full bg-brand-blue hover:bg-blue-600 text-white font-medium text-sm transition-all shadow-lg shadow-brand-blue/30 hover:shadow-brand-blue/50"
                >
                   Start Project
                </Link>
             </>
          )}
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Menu (Simplified) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass border-t border-white/5 overflow-hidden"
          >
            <div className="p-6 flex flex-col gap-4">
               <Link href="/" onClick={() => setIsOpen(false)} className="text-white font-medium">Home</Link>
               <Link href="/about" onClick={() => setIsOpen(false)} className="text-white font-medium">About Us</Link>
               <Link href="/services" onClick={() => setIsOpen(false)} className="text-white font-medium">Services</Link>
               <Link href="/products" onClick={() => setIsOpen(false)} className="text-white font-medium">Products</Link>
               <Link href="/portfolio" onClick={() => setIsOpen(false)} className="text-white font-medium">Portfolio</Link>
               <Link href="/pricing" onClick={() => setIsOpen(false)} className="text-white font-medium">Pricing</Link>
               <Link href="/blog" onClick={() => setIsOpen(false)} className="text-white font-medium">Blog</Link>
               <Link href="/contact" onClick={() => setIsOpen(false)} className="text-white font-medium">Contact</Link>
               
               {session ? (
                  <Link href="/dashboard" onClick={() => setIsOpen(false)} className="mt-4 px-6 py-3 rounded-xl bg-brand-blue text-white font-medium text-center">
                     Dashboard
                  </Link>
               ) : (
                  <div className="grid grid-cols-2 gap-3 mt-4">
                     <Link href="/login" onClick={() => setIsOpen(false)} className="px-6 py-3 rounded-xl border border-white/10 text-white font-medium text-center">
                        Login
                     </Link>
                     <Link href="/contact" onClick={() => setIsOpen(false)} className="px-6 py-3 rounded-xl bg-brand-blue text-white font-medium text-center">
                        Start Project
                     </Link>
                  </div>
               )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
