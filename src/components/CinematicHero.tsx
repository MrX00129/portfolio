"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe, Smartphone, TrendingUp, Bot, ShieldCheck, ArrowRight, ChevronDown,
} from "lucide-react";

/* ──────────────────────────────────────────────────────────────────────
   CINEMATIC TITLE SEQUENCE DATA
   ────────────────────────────────────────────────────────────────────── */
const cinematicSlides = [
  {
    id: "hero",
    line1: "We Fix. We Build.",
    line2: "We Grow Businesses.",
    subtitle: "Complete Digital Solutions — Websites, Apps, Marketing & AI",
    accent: "#06B6D4",
    glowColor: "rgba(6,182,212,0.3)",
    isHero: true,
  },
  {
    id: "web",
    line1: "Website",
    line2: "Development",
    subtitle: "WordPress · Next.js · E-Commerce · Custom Web Apps",
    icon: Globe,
    accent: "#3B82F6",
    glowColor: "rgba(59,130,246,0.25)",
  },
  {
    id: "app",
    line1: "App",
    line2: "Development",
    subtitle: "Android · iOS · Flutter · Cross-Platform",
    icon: Smartphone,
    accent: "#22C55E",
    glowColor: "rgba(34,197,94,0.25)",
  },
  {
    id: "marketing",
    line1: "Digital",
    line2: "Marketing",
    subtitle: "Google Ads · Meta Ads · SEO · Lead Generation",
    icon: TrendingUp,
    accent: "#F97316",
    glowColor: "rgba(249,115,22,0.25)",
  },
  {
    id: "ai",
    line1: "AI",
    line2: "Automation",
    subtitle: "Chatbots · AI Writer · Workflow · Business Intelligence",
    icon: Bot,
    accent: "#A855F7",
    glowColor: "rgba(168,85,247,0.25)",
  },
  {
    id: "maintenance",
    line1: "Maintenance",
    line2: "Zone",
    subtitle: "Security · Backups · Malware Removal · Performance Boost",
    icon: ShieldCheck,
    accent: "#EF4444",
    glowColor: "rgba(239,68,68,0.25)",
  },
  {
    id: "intro",
    line1: "WebFix",
    line2: "Expert",
    subtitle: "One Partner. Complete Digital Solutions.",
    accent: "#38BDF8",
    glowColor: "rgba(56,189,248,0.25)",
  },
];

/* ──────────────────────────────────────────────────────────────────────
   SINGLE CINEMATIC TITLE (movie-style 3D text reveal)
   ────────────────────────────────────────────────────────────────────── */
function CinematicTitle({
  slide,
  onComplete,
}: {
  slide: (typeof cinematicSlides)[0];
  onComplete: () => void;
}) {
  const Icon = slide.icon;
  const isHero = !!(slide as { isHero?: boolean }).isHero;

  useEffect(() => {
    // Hero slide stays longer so user can see CTAs
    const timer = setTimeout(onComplete, isHero ? 6500 : 3800);
    return () => clearTimeout(timer);
  }, [onComplete, isHero]);

  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center z-20 pt-32 pb-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, delay: 0.4 } }}
    >
      {/* ── Professional Badge ─── */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md mb-8 z-30 pointer-events-none"
      >
        <span className="flex h-2 w-2 rounded-full" style={{ backgroundColor: slide.accent }}>
          <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full opacity-75" style={{ backgroundColor: slide.accent }}></span>
        </span>
        <span className="text-sm sm:text-base font-semibold text-white tracking-wider uppercase drop-shadow-md">
          Premium Digital Agency
        </span>
      </motion.div>

      {/* ── Dynamic glow behind text ─── */}
      <motion.div
        className="absolute w-[600px] h-[400px] rounded-full blur-[160px] pointer-events-none"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 1.2 }}
        style={{ backgroundColor: slide.glowColor }}
      />

      {/* ── Icon (services only) ─── */}
      {Icon && (
        <motion.div
          initial={{ opacity: 0, scale: 0, rotateY: -90 }}
          animate={{ opacity: 0.15, scale: 1, rotateY: 0 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute pointer-events-none"
        >
          <Icon size={400} style={{ color: slide.accent }} />
        </motion.div>
      )}

      {/* ── Horizontal accent line ─── */}
      <motion.div
        className="h-[1px] mb-8"
        style={{ background: `linear-gradient(to right, transparent, ${slide.accent}, transparent)` }}
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: 200, opacity: 0.6 }}
        exit={{ width: 0, opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      />

      {/* ── LINE 1 — 3D cinematic text ─── */}
      <div style={{ perspective: "1000px" }}>
        <motion.h2
          className={`font-black tracking-[-0.05em] leading-[0.85] text-white text-center select-none ${
            isHero
              ? "text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[6.5rem]"
              : "text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] xl:text-[11rem]"
          }`}
          style={{ transformStyle: "preserve-3d" }}
          initial={{
            opacity: 0,
            rotateX: 40,
            y: 80,
            scale: 0.7,
            filter: "blur(8px)",
          }}
          animate={{
            opacity: 1,
            rotateX: 0,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            textShadow: `0 0 80px ${slide.glowColor}, 0 0 160px ${slide.glowColor}`,
          }}
          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {slide.line1.split(" ").map((word, i, arr) => (
            <motion.span
              key={i}
              className="inline-block"
              exit={{
                opacity: 0,
                x: 100,
                rotateY: 45,
                filter: "blur(10px)",
                transition: {
                  duration: 0.5,
                  ease: "easeIn",
                  delay: (arr.length - 1 - i) * 0.1,
                },
              }}
            >
              {word}{i !== arr.length - 1 && "\u00A0"}
            </motion.span>
          ))}
        </motion.h2>
      </div>

      {/* ── LINE 2 — 3D cinematic text (delayed) ─── */}
      <div style={{ perspective: "1000px" }}>
        <motion.h2
          className={`font-black tracking-[-0.05em] leading-[0.85] text-center select-none ${
            isHero
              ? "text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[6.5rem]"
              : "text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] xl:text-[11rem]"
          }`}
          style={{
            transformStyle: "preserve-3d",
            WebkitTextStroke: "1px rgba(255,255,255,0.15)",
            color: "transparent",
            WebkitTextFillColor: "transparent",
            backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.9), ${slide.accent})`,
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
          }}
          initial={{
            opacity: 0,
            rotateX: -40,
            y: -80,
            scale: 0.7,
            filter: "blur(8px)",
          }}
          animate={{
            opacity: 1,
            rotateX: 0,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 0.9,
            delay: 0.15,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {slide.line2.split(" ").map((word, i, arr) => (
            <motion.span
              key={i}
              className="inline-block"
              exit={{
                opacity: 0,
                x: 100,
                rotateY: 45,
                filter: "blur(10px)",
                transition: {
                  duration: 0.5,
                  ease: "easeIn",
                  delay: (arr.length - 1 - i) * 0.1,
                },
              }}
            >
              {word}{i !== arr.length - 1 && "\u00A0"}
            </motion.span>
          ))}
        </motion.h2>
      </div>

      {/* ── Bottom accent line ─── */}
      <motion.div
        className="h-[1px] mt-6 mb-4"
        style={{ background: `linear-gradient(to right, transparent, ${slide.accent}, transparent)` }}
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: 200, opacity: 0.6 }}
        exit={{ width: 0, opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      />

      {/* ── Subtitle ─── */}
      <motion.p
        className="text-sm sm:text-base md:text-lg uppercase font-bold text-center px-6 drop-shadow-lg"
        style={{ color: slide.accent }}
        initial={{ opacity: 0, y: 20, letterSpacing: "0.4em" }}
        animate={{ opacity: 1, y: 0, letterSpacing: "0.15em" }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        {slide.subtitle}
      </motion.p>

      {/* ── CTA buttons + stats (hero slide only) ─── */}
      {isHero && (
        <>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 items-center mt-6"
          >
            <Link
              href="#contact"
              className="group relative inline-flex h-14 items-center justify-center px-8 rounded-full bg-white text-black font-bold text-base transition-all hover:scale-[1.02] overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.1)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-cyan-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center gap-2">
                Start Your Project
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            
            <Link
              href="#portfolio"
              className="inline-flex h-14 items-center justify-center px-8 rounded-full border border-white/10 bg-white/[0.02] text-white font-medium text-base hover:bg-white/[0.08] transition-all backdrop-blur-md"
            >
              View Our Work
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex gap-6 sm:gap-10 mt-6 p-4 sm:p-5 rounded-3xl border border-white/[0.05] bg-white/[0.01] backdrop-blur-sm"
          >
            {[
              { value: "500+", label: "Projects" },
              { value: "99%", label: "Satisfaction" },
              { value: "24/7", label: "Support" },
            ].map((stat) => (
              <div key={stat.label} className="text-center px-2 sm:px-4">
                <div className="text-2xl md:text-3xl font-black text-white">{stat.value}</div>
                <div className="text-xs sm:text-sm text-slate-400 mt-1 tracking-wider uppercase font-semibold">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </>
      )}
    </motion.div>
  );
}



/* ──────────────────────────────────────────────────────────────────────
   PARTICLES & VFX
   ────────────────────────────────────────────────────────────────────── */
function CinematicParticles() {
  const [particles, setParticles] = useState<Array<{ id: number, x: number, y: number, size: number, dur: number, delay: number }>>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 0.5 + Math.random() * 2,
        dur: 5 + Math.random() * 8,
        delay: Math.random() * 5,
      }))
    );
  }, []);

  if (particles.length === 0) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -60, 0],
            x: [0, Math.random() > 0.5 ? 15 : -15, 0],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: p.dur,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

/* Cinematic film grain overlay */
function FilmGrain() {
  return (
    <div
      className="absolute inset-0 pointer-events-none z-30 opacity-[0.03] mix-blend-overlay"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }}
    />
  );
}



/* ══════════════════════════════════════════════════════════════════════
   MAIN COMPONENT — INFINITE CINEMATIC LOOP
   ══════════════════════════════════════════════════════════════════════ */
export default function CinematicHero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Loop back to 0 after last slide
  const handleSlideComplete = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % cinematicSlides.length);
  }, []);

  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{ background: "radial-gradient(ellipse at 50% 50%, #050f22 0%, #010810 60%, #000205 100%)" }}
    >
      {/* ── BACKGROUND ─────────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)]" />

        {/* Atmospheric orbs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-blue-900/20 blur-[200px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[300px] rounded-full bg-indigo-900/10 blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[300px] rounded-full bg-cyan-900/10 blur-[150px]" />

        <CinematicParticles />
        <FilmGrain />
      </div>



      {/* ── Bottom gradient to merge with next section ──────────────── */}
      <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-[#000a18] to-transparent z-10 pointer-events-none" />

      {/* ── INFINITE CINEMATIC TITLE SEQUENCE ──────────────────────── */}
      <AnimatePresence mode="wait">
        <CinematicTitle
          key={`${cinematicSlides[currentSlide].id}-${currentSlide}`}
          slide={cinematicSlides[currentSlide]}
          onComplete={handleSlideComplete}
        />
      </AnimatePresence>

      {/* ── Progress indicator ────────────────────────────────────── */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-50 flex gap-2">
        {cinematicSlides.map((_, i) => (
          <div
            key={i}
            className="h-[2px] rounded-full transition-all duration-500 overflow-hidden"
            style={{ width: i === currentSlide ? 32 : 12 }}
          >
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                background: i === currentSlide ? cinematicSlides[i].accent : "rgba(255,255,255,0.1)",
                width: i === currentSlide ? "100%" : "0%",
              }}
            />
          </div>
        ))}
      </div>

      {/* ── Scroll indicator ─────────────────────────────────────── */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-50">
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={16} className="text-white/15" />
        </motion.div>
      </div>
    </section>
  );
}
