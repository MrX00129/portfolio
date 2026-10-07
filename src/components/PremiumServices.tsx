"use client";

import { motion } from "framer-motion";
import { 
  Globe, Smartphone, Megaphone, Bot, ShieldCheck, Cpu, Cloud, Award,
  MonitorPlay, LayoutTemplate, ShoppingCart, Layout, Code2,
  CheckCircle2, TrendingUp
} from "lucide-react";

const cardsData = [
  {
    id: "web",
    title: "Website\nDevelopment",
    icon: Globe,
    watermark: LayoutTemplate,
    gradient: "from-[#003f9a] to-[#001f4d]", // Blue
    accent: "text-blue-400",
    bulletColor: "bg-blue-400",
    items: [
      "WordPress",
      "Elementor Pro",
      "E-Commerce",
      "Landing Pages",
      "Custom Websites"
    ]
  },
  {
    id: "app",
    title: "App\nDevelopment",
    icon: Smartphone,
    watermark: Code2,
    gradient: "from-[#156015] to-[#0a300a]", // Green
    accent: "text-green-400",
    bulletColor: "bg-green-400",
    items: [
      "Android Apps",
      "iOS Apps",
      "Flutter Apps",
      "Custom Business Apps"
    ]
  },
  {
    id: "marketing",
    title: "Digital\nMarketing",
    icon: Megaphone,
    watermark: TrendingUp,
    gradient: "from-[#cc5200] to-[#662900]", // Orange
    accent: "text-orange-400",
    bulletColor: "bg-orange-400",
    items: [
      "Google Ads",
      "Facebook Ads",
      "Lead Generation",
      "SEO Optimization"
    ]
  },
  {
    id: "web-automation",
    title: "Website\nAutomation",
    icon: Bot,
    watermark: Cpu,
    gradient: "from-[#4b0082] to-[#260041]", // Purple
    accent: "text-purple-400",
    bulletColor: "bg-purple-400",
    items: [
      "AI Article Writer",
      "Auto Blog Posting",
      "Content Automation",
      "Social Media Auto Posting",
      "SEO Automation"
    ]
  },
  {
    id: "maintenance",
    title: "Website\nMaintenance",
    icon: ShieldCheck,
    watermark: ShieldCheck,
    gradient: "from-[#8b0000] to-[#450000]", // Red
    accent: "text-red-400",
    bulletColor: "bg-red-400",
    items: [
      "Security Monitoring",
      "Backups",
      "Performance Optimization",
      "Malware Removal",
      "Update Management"
    ]
  },
  {
    id: "ai-tools",
    title: "AI & Automation\nTools",
    icon: Cpu,
    watermark: Bot,
    gradient: "from-[#a80054] to-[#54002a]", // Pink/Magenta
    accent: "text-pink-400",
    bulletColor: "bg-pink-400",
    items: [
      "AI Content Generator",
      "Chatbot Solutions",
      "Business Automation",
      "Workflow Automation",
      "AI Integration"
    ]
  },
  {
    id: "cloud",
    title: "Hosting &\nCloud",
    icon: Cloud,
    watermark: MonitorPlay,
    gradient: "from-[#006666] to-[#003333]", // Teal
    accent: "text-teal-400",
    bulletColor: "bg-teal-400",
    items: [
      "VPS Hosting",
      "Linux Server",
      "Cloud Deployment",
      "Website Migration"
    ]
  },
  {
    id: "why-choose",
    title: "Why Choose\nWebFix Expert?",
    icon: Award,
    watermark: Award,
    gradient: "from-[#997300] to-[#4d3900]", // Gold
    accent: "text-yellow-400",
    bulletColor: "bg-yellow-400",
    items: [
      "6+ Years of Experience",
      "50+ Happy Clients",
      "100+ Projects Completed",
      "Latest Technologies",
      "Affordable Pricing",
      "Long-Term Support"
    ],
    isCheckmark: true
  }
];

export default function PremiumServices() {
  return (
    <section className="py-20 bg-[#000a18] relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {cardsData.map((card, index) => {
            const Icon = card.icon;
            const Watermark = card.watermark;
            
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative overflow-hidden rounded-xl bg-gradient-to-br ${card.gradient} p-6 border border-white/10 shadow-2xl hover:scale-[1.02] transition-transform duration-300`}
              >
                {/* Watermark Icon */}
                <div className="absolute -bottom-6 -right-6 opacity-[0.07] pointer-events-none">
                  <Watermark size={180} />
                </div>

                {/* Header */}
                <div className="flex items-center gap-4 mb-8 relative z-10">
                  <div className="w-14 h-14 rounded-lg bg-white/10 flex items-center justify-center border border-white/5 backdrop-blur-sm">
                    <Icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white leading-tight whitespace-pre-line">
                    {card.title}
                  </h3>
                </div>

                {/* List Items */}
                <ul className="space-y-3 relative z-10">
                  {card.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-[15px] text-white/90 font-medium">
                      {card.isCheckmark ? (
                        <CheckCircle2 size={18} className={card.accent} />
                      ) : (
                        <span className={`w-2 h-2 rounded-full ${card.bulletColor}`} />
                      )}
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
