'use client';

import Image from 'next/image';
import { Award } from 'lucide-react';
import { StoryReveal } from '@/components/ui/StoryMotion';

const pillars = [
  {
    number: '01',
    title: 'Authentic Dum Cooking',
    subtitle: 'Slow-Cooked In Sealed Clay Handis',
    narrative: 'We prepare our biryanis the traditional way — slow-cooked in clay handis sealed with dough to lock in natural moisture, rich flavours, and fragrant saffron aromatics.',
  },
  {
    number: '02',
    title: 'Freshly Roasted Spices',
    subtitle: 'Stone-Ground In Small Batches',
    narrative: 'Whole spices like green cardamom, mace flower, and star anise are gently roasted and ground in small batches, preserving their natural essential oils and vibrant taste.',
  },
  {
    number: '03',
    title: 'Honest, Wholesome Ingredients',
    subtitle: 'Fresh Daily Batches',
    narrative: 'We cook fresh every day using quality ghee, mustard oil, and authentic Indian spices. No artificial colors or preservatives — just honest, flavorful food.',
  },
];

export default function BrandStory() {
  return (
    <section id="story" className="relative py-20 sm:py-28 lg:py-36 bg-[#FFF8EF] text-[#35363A] overflow-hidden">
      {/* Anchor alias for #about */}
      <div id="about" className="sr-only" />

      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-[#F3E8D9]/70 rounded-full blur-[150px] pointer-events-none translate-x-1/3" />
      
      <div className="container-wide relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-[#35363A]/10 mb-12 sm:mb-16 lg:mb-24">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#F69522]" />
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.24em] text-[#F69522]">
              Chapter 01 / 07 • Our Food Philosophy
            </span>
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-[#35363A]/50">
            Founded 2024 • Hyderabad, India
          </span>
        </div>

        {/* Hero Editorial Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-20 items-start mb-14 sm:mb-20 lg:mb-28">
          
          {/* Left Column: Big Headline & Manifesto Essay */}
          <StoryReveal className="lg:col-span-7 space-y-6 sm:space-y-8">
            <h2 className="font-display text-3xl xs:text-4xl sm:text-6xl lg:text-7xl font-bold text-[#35363A] leading-[1.08] tracking-tight">
              More Than <br />
              <span className="font-editorial-italic font-normal text-[#35363A]/80">Just A </span>
              <span className="font-editorial-italic font-normal text-[#EA2628]">Meal.</span>
            </h2>

            <p className="font-display text-lg sm:text-2xl text-[#35363A]/85 leading-snug font-normal italic max-w-2xl border-l-2 border-[#F69522] pl-4 sm:pl-6 py-1 sm:py-2">
              &ldquo;Great food brings people together. Every recipe is crafted with deep respect for Indian culinary traditions, rich natural spices, and the joy of sharing a memorable meal.&rdquo;
            </p>

            <div className="space-y-4 sm:space-y-6 font-body text-sm sm:text-lg text-[#35363A]/75 leading-relaxed max-w-xl font-normal pt-1">
              <p>
                Founded in Hyderabad in 2024, <strong className="text-[#35363A] font-semibold">Hunger Stories</strong> was born from a simple belief: everyday dining and grand celebrations alike deserve exceptional flavour, honest ingredients, and genuine hospitality.
              </p>
              <p>
                From the aroma of our slow-dum biryanis unsealed fresh at your table to the smoky char of live tandoor grills and comforting curries, we cook food that creates lasting memories.
              </p>
            </div>

            <div className="pt-2 sm:pt-4 flex items-center justify-between sm:justify-start gap-4 sm:gap-8">
              <div>
                <span className="block font-display text-2xl sm:text-3xl font-bold text-[#F69522]">5</span>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-wider sm:tracking-widest text-[#35363A]/60 font-semibold">Cuisine Styles</span>
              </div>
              <div className="h-8 sm:h-10 w-px bg-[#35363A]/10" />
              <div>
                <span className="block font-display text-2xl sm:text-3xl font-bold text-[#F69522]">2</span>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-wider sm:tracking-widest text-[#35363A]/60 font-semibold">Hyderabad Hubs</span>
              </div>
              <div className="h-8 sm:h-10 w-px bg-[#35363A]/10" />
              <div>
                <span className="block font-display text-2xl sm:text-3xl font-bold text-[#F69522]">Fresh</span>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-wider sm:tracking-widest text-[#35363A]/60 font-semibold">Cooked Daily</span>
              </div>
            </div>
          </StoryReveal>

          {/* Right Column: Asymmetric Vertical Photography Composition */}
          <StoryReveal delay={0.15} className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Vertical Spices Frame */}
              <div className="relative aspect-[4/3] xs:aspect-[5/4] sm:aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl bg-[#35363A] border-4 border-white">
                <Image
                  src="/images/food/craft-spices.jpg"
                  alt="Artisanal stone-ground spices at Hunger Stories"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-center filter contrast-[1.05] hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#30231F]/90 via-transparent to-transparent" />
                
                <div className="absolute bottom-5 sm:bottom-6 left-5 sm:left-6 right-5 sm:right-6 text-white text-shadow-food">
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#F69522] mb-1">
                    Whole Spice Blends
                  </p>
                  <p className="font-display text-base sm:text-lg font-bold">
                    Roasted & Ground In Small Batches
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
                      Quality Ghee & Spices
                    </h5>
                    <p className="text-[10px] text-[#35363A]/60 mt-0.5">
                      Authentic recipes cooked fresh daily
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </StoryReveal>

        </div>

        {/* 3 Pillars */}
        <div className="pt-10 sm:pt-16 border-t border-[#35363A]/10 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
          {pillars.map((pillar) => (
            <div key={pillar.number} className="space-y-2.5 sm:space-y-4">
              <div className="flex items-baseline gap-3">
                <span className="font-display text-3xl sm:text-4xl font-bold text-[#F69522]/40">
                  {pillar.number}
                </span>
                <div className="h-px flex-1 bg-[#35363A]/10" />
              </div>
              <h4 className="font-display text-xl sm:text-2xl font-bold text-[#35363A] leading-snug">
                {pillar.title}
              </h4>
              <p className="text-[11px] sm:text-xs uppercase tracking-wider text-[#F69522] font-semibold">
                {pillar.subtitle}
              </p>
              <p className="font-body text-sm text-[#35363A]/75 leading-relaxed font-normal">
                {pillar.narrative}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
