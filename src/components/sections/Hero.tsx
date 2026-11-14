'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDown, Sparkles, Flame, Clock } from 'lucide-react';
import Image from 'next/image';

const marqueeItems = [
  'Royal Hyderabadi Dum Biryani',
  'Clay Oven Tandoori Grills',
  'Rich Butter Gravies',
  'Slow-Simmered Heritage Dals',
  'Deccan Pepper Roasts',
  'Fiery High-Flame Wok',
  'Catering & Celebrations',
  'Pure Desi Ghee & Fresh Spices',
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[#30231F] text-[#FFF8EF]">
      {/* Cinematic Ambient Overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[650px] h-[650px] bg-[#F69522]/15 rounded-full blur-[160px]" />
        <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#EA2628]/10 rounded-full blur-[140px]" />
        {/* Subtle architectural grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,248,239,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,248,239,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Main Canvas Grid */}
      <div className="relative z-10 container-wide pt-28 sm:pt-36 lg:pt-40 pb-12 sm:pb-16 lg:pb-24 my-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 xl:gap-16 items-center">
          
          {/* Left Column: Monumental Editorial Narrative */}
          <div className="lg:col-span-7 xl:col-span-7 space-y-6 sm:space-y-8">
            
            {/* Prologue / Origin Tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 sm:gap-3 px-3.5 sm:px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#F69522] animate-ping" />
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.24em] text-[#F69522]">
                Hyderabad • Multi-Cuisine
              </span>
              <span className="text-white/20">•</span>
              <span className="text-[10px] sm:text-[11px] text-white/60 tracking-wider font-mono">
                Est. 2024
              </span>
            </motion.div>

            {/* Monumental Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <h1 className="font-display text-[2.75rem] xs:text-5xl sm:text-7xl md:text-8xl xl:text-[6.25rem] font-bold text-white leading-[1.04] tracking-tight">
                Every Flavour <br />
                <span className="font-editorial-italic font-normal text-white/90">Has A </span>
                <span className="font-editorial-italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#F69522] via-[#F69522] to-[#EA2628]">
                  Story.
                </span>
              </h1>
            </motion.div>

            {/* Supporting Literary Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="font-body text-[15px] sm:text-xl text-[#FFF8EF]/85 leading-relaxed max-w-xl font-normal"
            >
              Bringing people together through exceptional food, unforgettable flavours and experiences worth sharing.
            </motion.p>

            {/* Dual High-Touch Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-6 pt-1 sm:pt-2"
            >
              <a
                href="#story"
                className="group inline-flex items-center justify-center gap-3 px-8 sm:px-9 py-4 rounded-full bg-[#F69522] text-white font-body text-xs font-bold uppercase tracking-[0.18em] shadow-2xl shadow-[#F69522]/30 hover:bg-[#EA2628] hover:shadow-[#EA2628]/40 hover:-translate-y-0.5 transition-all duration-300 min-h-[48px]"
              >
                <span>Explore Our Story</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>

              <a
                href="#order"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-white/20 text-white font-body text-xs font-semibold uppercase tracking-[0.18em] hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm min-h-[48px]"
              >
                <span>Order Online</span>
                <ArrowUpRight className="w-4 h-4 text-[#F69522]" />
              </a>
            </motion.div>

            {/* Editorial Metadata Footnotes */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="pt-5 sm:pt-6 border-t border-white/10 grid grid-cols-3 gap-3 sm:gap-6 max-w-lg text-left"
            >
              <div>
                <span className="block font-display text-xl sm:text-2xl font-bold text-[#F69522]">Slow Dum</span>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-wider sm:tracking-widest text-white/60 font-semibold leading-tight block mt-0.5">Sealed Clay Handis</span>
              </div>
              <div className="border-l border-white/10 pl-3 sm:pl-6">
                <span className="block font-display text-xl sm:text-2xl font-bold text-[#F69522]">Live Coal</span>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-wider sm:tracking-widest text-white/60 font-semibold leading-tight block mt-0.5">Tandoori Grills</span>
              </div>
              <div className="border-l border-white/10 pl-3 sm:pl-6">
                <span className="block font-display text-xl sm:text-2xl font-bold text-[#F69522]">Pure Ghee</span>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-wider sm:tracking-widest text-white/60 font-semibold leading-tight block mt-0.5">Fresh Masalas</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Large Architectural Image Frame */}
          <div className="lg:col-span-5 xl:col-span-5 relative mt-4 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Outer Architectural Border Container */}
              <div className="relative rounded-3xl p-2.5 sm:p-3 bg-gradient-to-b from-white/15 via-white/5 to-transparent border border-white/15 backdrop-blur-sm shadow-2xl">
                
                {/* Image Frame with Golden Ratio Proportions */}
                <div className="relative aspect-[4/3] xs:aspect-[5/4] sm:aspect-[4/5] rounded-2xl overflow-hidden bg-[#35363A]">
                  <Image
                    src="/images/food/hero-biryani.jpg"
                    alt="Authentic Royal Hyderabadi Dum Biryani by Hunger Stories"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 42vw"
                    className="object-cover object-center filter brightness-[0.88] contrast-[1.05] hover:scale-105 transition-transform duration-1000 ease-out"
                  />
                  {/* Luxury Gradients */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#30231F] via-[#30231F]/30 to-transparent" />
                  
                  {/* Crosshair markers in corners */}
                  <div className="absolute top-4 left-4 text-white/40 font-mono text-[9px] tracking-widest">+ 17° 24&apos; N</div>
                  <div className="absolute top-4 right-4 text-white/40 font-mono text-[9px] tracking-widest">+ 78° 28&apos; E</div>

                  {/* Overlaid Bottom Title */}
                  <div className="absolute bottom-5 sm:bottom-6 left-5 sm:left-6 right-5 sm:right-6 text-white text-shadow-food">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#F69522] text-[#30231F] text-[9px] sm:text-[10px] font-bold uppercase tracking-wider mb-2">
                      <Flame className="w-3 h-3 fill-current" />
                      Fresh Dum Firing
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold leading-tight">
                      Royal Hyderabadi Dum Handi
                    </h3>
                    <p className="font-body text-xs text-white/80 mt-1">
                      Aged Basmati • Kashmir Saffron • Dough Sealed
                    </p>
                  </div>
                </div>

              </div>

              {/* Floating Plaque (Asymmetrical Overlap) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="hidden sm:block absolute -bottom-8 -left-8 bg-[#FFF8EF] text-[#35363A] p-6 rounded-2xl border border-[#F3E8D9] shadow-2xl max-w-xs"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F69522]/15 flex items-center justify-center text-[#F69522] shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#F69522] mb-0.5">
                      Fresh From Our Kitchen
                    </span>
                    <h4 className="font-display text-base font-bold text-[#35363A] leading-snug">
                      Served Steaming Hot
                    </h4>
                    <p className="text-[11px] text-[#35363A]/70 mt-1 leading-normal">
                      Piping-hot delivery and authentic dine-in hospitality across Hyderabad.
                    </p>
                  </div>
                </div>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>

      {/* Editorial Marquee Ribbon across Section Base */}
      <div className="relative z-10 w-full overflow-hidden border-y border-white/10 bg-black/30 backdrop-blur-md py-3 sm:py-4">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8 sm:gap-12 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.24em] text-white/75">
          {marqueeItems.concat(marqueeItems).map((text, i) => (
            <span key={i} className="flex items-center gap-6 sm:gap-8">
              <span>{text}</span>
              <span className="text-[#F69522] text-sm">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
