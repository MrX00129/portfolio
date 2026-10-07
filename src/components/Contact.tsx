"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, Calendar, MapPin, User } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#001833]">
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-brand-cyan font-semibold tracking-wide uppercase text-sm mb-3">Contact Us</h2>
            <h3 className="text-4xl md:text-6xl font-bold text-white mb-6">Let's Work <br/>Together</h3>
            <p className="text-gray-400 text-lg mb-12 max-w-md">
              Ready to transform your digital presence? Get in touch with us to discuss your project requirements.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-brand-blue">
                  <User size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Founder</p>
                  <p className="text-lg font-semibold text-white">ALI</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-brand-cyan">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Website</p>
                  <Link href="https://webfix.expert" className="text-lg font-semibold text-white hover:text-brand-cyan transition-colors">
                    webfix.expert
                  </Link>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-brand-yellow">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="text-lg font-semibold text-white">West Bengal, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass p-8 md:p-12 rounded-3xl border border-white/10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/20 blur-[50px]"></div>
            
            <h4 className="text-2xl font-bold text-white mb-8">Start a Conversation</h4>
            
            <div className="space-y-4">
              <button className="w-full py-4 px-6 rounded-xl bg-brand-blue hover:bg-blue-600 text-white font-semibold flex items-center justify-center gap-3 transition-all shadow-lg shadow-brand-blue/20">
                <Mail size={20} /> Contact Us via Email
              </button>
              
              <button className="w-full py-4 px-6 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold flex items-center justify-center gap-3 transition-all shadow-lg shadow-[#25D366]/20">
                <MessageCircle size={20} /> Chat on WhatsApp
              </button>
              
              <button className="w-full py-4 px-6 rounded-xl glass border border-white/10 hover:bg-white/10 text-white font-semibold flex items-center justify-center gap-3 transition-all">
                <Calendar size={20} /> Schedule a Meeting
              </button>
            </div>
            
            <p className="text-center text-gray-500 text-sm mt-8">
              We typically reply within 2 hours during business days.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
