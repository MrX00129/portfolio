import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Globe, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | WebFix Expert",
  description: "Get in touch with WebFix Expert for premium digital solutions.",
};

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Navbar />
      
      <div className="pt-32 pb-24 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl mb-16 text-center mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Let's Talk <span className="text-gradient">Business</span></h1>
            <p className="text-gray-400 text-lg">Ready to transform your digital presence? Send us a message or contact us directly via email.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
             
             {/* Contact Info */}
             <div className="space-y-6">
                <div className="glass p-8 rounded-2xl border border-white/10 flex items-start gap-5">
                   <div className="w-14 h-14 shrink-0 rounded-full bg-brand-blue/20 flex items-center justify-center text-brand-blue">
                      <Mail size={28} />
                   </div>
                   <div>
                      <h4 className="text-white font-bold text-xl mb-1">Direct Email</h4>
                      <p className="text-gray-400 text-sm mb-3">For general inquiries, custom quotes, and project proposals.</p>
                      <a href="mailto:ali@webfix.expert" className="text-lg font-semibold text-brand-cyan hover:underline">
                         ali@webfix.expert
                      </a>
                   </div>
                </div>

                <div className="glass p-8 rounded-2xl border border-white/10 flex items-start gap-5">
                   <div className="w-14 h-14 shrink-0 rounded-full bg-brand-cyan/20 flex items-center justify-center text-brand-cyan">
                      <Globe size={28} />
                   </div>
                   <div>
                      <h4 className="text-white font-bold text-xl mb-1">Official Website</h4>
                      <p className="text-gray-400 text-sm mb-3">Explore our services, SaaS products, and free web tools suite.</p>
                      <a href="https://webfix.expert" className="text-lg font-semibold text-brand-cyan hover:underline">
                         https://webfix.expert
                      </a>
                   </div>
                </div>

                <div className="glass p-8 rounded-2xl border border-white/10 flex items-start gap-5">
                   <div className="w-14 h-14 shrink-0 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                      <ShieldCheck size={28} />
                   </div>
                   <div>
                      <h4 className="text-white font-bold text-xl mb-1">Response Guarantee</h4>
                      <p className="text-gray-400 text-sm">
                         We reply to all legitimate project inquiries within 2 to 24 hours on business days.
                      </p>
                   </div>
                </div>
             </div>

             {/* Contact Form */}
             <div className="glass p-8 rounded-3xl border border-white/10 relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/10 blur-[50px]"></div>
                <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
                
                <form className="space-y-4">
                   <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                         <label className="text-sm text-gray-400 font-medium">First Name</label>
                         <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition-colors" placeholder="John" />
                      </div>
                      <div className="space-y-1.5">
                         <label className="text-sm text-gray-400 font-medium">Last Name</label>
                         <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition-colors" placeholder="Doe" />
                      </div>
                   </div>
                   <div className="space-y-1.5">
                      <label className="text-sm text-gray-400 font-medium">Email Address</label>
                      <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition-colors" placeholder="john@example.com" />
                   </div>
                   <div className="space-y-1.5">
                      <label className="text-sm text-gray-400 font-medium">Project Details</label>
                      <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition-colors resize-none" placeholder="Tell us about your project..."></textarea>
                   </div>
                   <button type="button" className="w-full py-4 rounded-xl bg-brand-blue hover:bg-blue-600 text-white font-bold transition-all shadow-lg shadow-brand-blue/30 mt-4">
                      Send Message
                   </button>
                </form>
             </div>

          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
