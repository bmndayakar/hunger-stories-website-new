'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Sparkles, Utensils, Flame, Award } from 'lucide-react';

const pillars = [
  {
    number: '01',
    title: 'The Sacred Dum Tradition',
    subtitle: 'Slow Steaming Under Dough Seal',
    narrative: 'We refuse shortcut steaming or pressure cooking. Every handi is sealed with kneaded whole-wheat dough, trapping fragrant saffron steam and meat aromatics until cracked open at your table.',
  },
  {
    number: '02',
    title: 'Stone-Ground Masala Alchemy',
    subtitle: 'Zero Heat Friction Blending',
    narrative: 'Whole star anise, mace, shahi jeera, and stone flowers are roasted on iron tawas and pulverized using slow stone mills, retaining the delicate volatile oils lost in commercial processing.',
  },
  {
    number: '03',
    title: 'Purity & Virgin Oil Ethic',
    subtitle: 'No Re-heating, No Artificial Color',
    narrative: 'We prepare fresh batches daily. Never recycled cooking mediums, never commercial red powders. Pure desi ghee, mustard oil, and genuine saffron strands deliver honest depth.',
  },
];

export default function BrandStory() {
  return (
    <section id="about" className="relative py-32 lg:py-44 bg-[#FFF8EF] text-[#35363A] overflow-hidden">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-[#F3E8D9]/70 rounded-full blur-[150px] pointer-events-none translate-x-1/3" />
      
      <div className="container-wide relative z-10">
        
        {/* Section Chapter Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#35363A]/10 mb-16 lg:mb-24">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#F69522]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#F69522]">
              Chapter 02 / 07 • The Ancestry & Craft
            </span>
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-[#35363A]/40">
            Founded 2024 • Hyderabad, India
          </span>
        </div>

        {/* Hero Editorial Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start mb-24 lg:mb-32">
          
          {/* Left Column: Big Headline & Manifesto Essay */}
          <div className="lg:col-span-7 space-y-8">
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold text-[#35363A] leading-[1.08] tracking-tight">
              More Than <br />
              <span className="font-editorial-italic font-normal text-[#35363A]/80">Just A </span>
              <span className="font-editorial-italic font-normal text-[#EA2628]">Meal.</span>
            </h2>

            <p className="font-display text-xl sm:text-2xl text-[#35363A]/85 leading-snug font-normal italic max-w-2xl border-l-2 border-[#F69522] pl-6 py-2">
              &ldquo;In Hyderabad, food is not merely sustenance. It is living literature, a slow-simmered dialogue between earth, embers, and memories.&rdquo;
            </p>

            <div className="space-y-6 font-body text-base sm:text-lg text-[#35363A]/70 leading-relaxed max-w-xl font-normal pt-2">
              <p>
                Founded in Hyderabad in 2024, <strong className="text-[#35363A] font-semibold">Hunger Stories</strong> was conceived as a culinary atelier that respects ancestral Deccan and North Indian recipes while elevating their execution to modern luxury standards.
              </p>
              <p>
                From the fragrant steam that billows when unsealing our slow-dum biryani handis to the smoky char of live coconut-charcoal tandoor skewers, every dish honours the balance of time and fire.
              </p>
            </div>

            <div className="pt-4 flex items-center gap-8">
              <div>
                <span className="block font-display text-3xl font-bold text-[#F69522]">5+</span>
                <span className="text-[10px] uppercase tracking-widest text-[#35363A]/60 font-semibold">Master Cuisines</span>
              </div>
              <div className="h-10 w-px bg-[#35363A]/10" />
              <div>
                <span className="block font-display text-3xl font-bold text-[#F69522]">2</span>
                <span className="text-[10px] uppercase tracking-widest text-[#35363A]/60 font-semibold">Active Houses</span>
              </div>
              <div className="h-10 w-px bg-[#35363A]/10" />
              <div>
                <span className="block font-display text-3xl font-bold text-[#F69522]">100%</span>
                <span className="text-[10px] uppercase tracking-widest text-[#35363A]/60 font-semibold">Desi Ghee & Spices</span>
              </div>
            </div>
          </div>

          {/* Right Column: Asymmetric Vertical Photography Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Tall Vertical Spices Frame */}
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl bg-[#35363A] border-4 border-white">
                <Image
                  src="/images/food/craft-spices.jpg"
                  alt="Artisanal stone-ground spices at Hunger Stories"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-center filter contrast-[1.05] hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#30231F]/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#F69522] mb-1">
                    Whole Masala Alchemy
                  </p>
                  <p className="font-display text-lg font-bold">
                    Stone-Ground In Small Batches
                  </p>
                </div>
              </div>

              {/* Overlapping Offset Card */}
              <div className="hidden sm:block absolute -bottom-10 -left-10 w-64 p-5 rounded-2xl bg-white border border-[#F3E8D9] shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F69522]/15 flex items-center justify-center text-[#F69522] shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-display text-sm font-bold text-[#35363A]">
                      Zero Artificial Essences
                    </h5>
                    <p className="text-[10px] text-[#35363A]/60 mt-0.5">
                      Pure saffron, hand-picked spices
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 3 Editorial Pillars (Non-generic, magazine-style timeline) */}
        <div className="pt-16 border-t border-[#35363A]/10 grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {pillars.map((pillar) => (
            <div key={pillar.number} className="space-y-4">
              <div className="flex items-baseline gap-3">
                <span className="font-display text-4xl font-bold text-[#F69522]/40">
                  {pillar.number}
                </span>
                <div className="h-px flex-1 bg-[#35363A]/10" />
              </div>
              <h4 className="font-display text-2xl font-bold text-[#35363A] leading-snug">
                {pillar.title}
              </h4>
              <p className="text-xs uppercase tracking-wider text-[#F69522] font-semibold">
                {pillar.subtitle}
              </p>
              <p className="font-body text-sm text-[#35363A]/70 leading-relaxed font-normal">
                {pillar.narrative}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
