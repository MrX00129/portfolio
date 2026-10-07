import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, MessageCircle, MapPin, Phone } from "lucide-react";

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
            <p className="text-gray-400 text-lg">Ready to transform your digital presence? Send us a message or schedule a direct consultation.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
             
             {/* Contact Info */}
             <div className="space-y-8">
                <div className="glass p-6 rounded-2xl border border-white/10 flex items-start gap-4">
                   <div className="w-12 h-12 shrink-0 rounded-full bg-brand-blue/20 flex items-center justify-center text-brand-blue">
                      <Mail size={24} />
                   </div>
                   <div>
                      <h4 className="text-white font-semibold text-lg">Email Us</h4>
                      <p className="text-gray-400 text-sm mb-2">For general inquiries and project proposals.</p>
                      <a href="mailto:hello@webfix.expert" className="text-brand-cyan hover:underline">hello@webfix.expert</a>
                   </div>
                </div>

                <div className="glass p-6 rounded-2xl border border-white/10 flex items-start gap-4">
                   <div className="w-12 h-12 shrink-0 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                      <MessageCircle size={24} />
                   </div>
                   <div>
                      <h4 className="text-white font-semibold text-lg">WhatsApp</h4>
                      <p className="text-gray-400 text-sm mb-2">Instant messaging for quick support.</p>
                      <a href="#" className="text-brand-cyan hover:underline">+91 98745 67890</a>
                   </div>
                </div>

                <div className="glass p-6 rounded-2xl border border-white/10 flex items-start gap-4">
                   <div className="w-12 h-12 shrink-0 rounded-full bg-brand-yellow/20 flex items-center justify-center text-brand-yellow">
                      <MapPin size={24} />
                   </div>
                   <div>
                      <h4 className="text-white font-semibold text-lg">Our Office</h4>
                      <p className="text-gray-400 text-sm mb-2">West Bengal, India</p>
                      <a href="#" className="text-brand-cyan hover:underline">View on Google Maps</a>
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
