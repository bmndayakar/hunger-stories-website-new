'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Users, Cake, Home, PartyPopper, PackageCheck, CheckCircle2, ChevronRight, Phone } from 'lucide-react';
import { siteConfig } from '@/lib/config';

const occasions = [
  {
    id: 'corporate',
    icon: Users,
    title: 'Corporate Galas & IT Summits',
    couverts: '50 — 2,000+ Guests',
    location: 'Hitec City, Financial District, Gachibowli',
    headline: 'Executive buffets, seamless conference lunch boxes & gala spreads.',
    narrative: 'Tailored specifically for Hyderabad’s tech and financial corridors. We provide hot, tamper-evident executive meal boxes for boardrooms or full-service live buffet spreads for annual galas and multinational town halls.',
    perks: ['Tamper-evident sealed executive boxes', 'Hot chafing setup with banquet stewards', 'Flexible invoicing & corporate GST billing'],
  },
  {
    id: 'weddings',
    icon: PartyPopper,
    title: 'Weddings & Reception Banquets',
    couverts: '100 — 2,500+ Guests',
    location: 'Hyderabad All-Zones Banquets & Venues',
    headline: 'Royal Nizami dum handis and theatrical live counters.',
    narrative: 'Create an unforgettable wedding feast. Our Nizami chefs prepare royal dum handis sealed live at your venue, accompanied by tandoor naan stations, chaat counters, and elaborate saffron dessert displays.',
    perks: ['Live coal tandoor bread stations', 'Dedicated executive banquet captain', 'Royal unsealed handi presentation'],
  },
  {
    id: 'birthdays',
    icon: Cake,
    title: 'Birthday Celebrations & Milestones',
    couverts: '25 — 150 Guests',
    location: 'Homes, Clubhouses & Private Venues',
    headline: 'Vibrant party platters and crowd-pleasing signature mains.',
    narrative: 'Milestone birthdays deserve festive dining without host fatigue. We curate finger foods, smoky tandoori skewers, and fragrant biryanis that satisfy both elders and younger guests.',
    perks: ['Kid-friendly & mild spice options', 'Compact tabletop chafing setup', 'Biodegradable premium cutlery options'],
  },
  {
    id: 'family',
    icon: Home,
    title: 'Intimate Family Gatherings & House Parties',
    couverts: '20 — 80 Guests',
    location: 'Direct to Your Doorstep',
    headline: 'Warm homestyle hospitality without spending hours in the kitchen.',
    narrative: 'For housewarmings, anniversaries, or Sunday family reunions. Delivered hot in specialized insulated containers with easy-serve chafing trays, ensuring the host spends time celebrating rather than cooking.',
    perks: ['Delivered piping hot with zero reheating needed', 'Pre-portioned family platters', 'Complimentary accompaniments & salan'],
  },
  {
    id: 'bulk',
    icon: PackageCheck,
    title: 'Bulk Food & Packed Meal Box Solutions',
    couverts: '50 — 3,000 Boxes Daily',
    location: 'Direct Institutional & Site Dispatch',
    headline: 'Consistent high-volume executive dining engineered for hygiene.',
    narrative: 'Reliable, nutritional, and hot meal trays for university fests, corporate trainings, and large community events. Balanced multi-compartment trays containing biryani, curry, bread, dessert, and salad.',
    perks: ['High-throughput sanitized packaging', 'Eco-friendly sugarcane bagasse trays', 'Scheduled timed delivery fleets'],
  },
];

export default function Catering() {
  const [selectedId, setSelectedId] = useState('corporate');
  const activeOccasion = occasions.find((o) => o.id === selectedId) || occasions[0];

  return (
    <section id="catering" className="relative py-32 lg:py-44 bg-[#FFF8EF] text-[#35363A] overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-[#F3E8D9]/70 rounded-full blur-[160px] pointer-events-none translate-x-1/3" />

      <div className="container-wide relative z-10">
        
        {/* Section Chapter Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#35363A]/10 mb-16 lg:mb-24">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#F69522]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#F69522]">
              Chapter 05 / 07 • The Banqueting Atelier
            </span>
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-[#35363A]/40">
            Capacity: 20 — 2,000+ Couverts
          </span>
        </div>

        {/* Master Center Table Hero Feature */}
        <div className="relative rounded-3xl overflow-hidden bg-[#30231F] text-white shadow-2xl mb-20 lg:mb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Left Narrative Panel */}
            <div className="lg:col-span-6 p-8 sm:p-14 lg:p-16 space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F69522] text-white text-[10px] font-bold uppercase tracking-widest">
                <span>Feasts Built For The Center Table</span>
              </div>

              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight">
                Made For <br />
                <span className="font-editorial-italic font-normal text-[#FFF8EF]/80">Every </span>
                <span className="font-editorial-italic font-normal text-[#F69522]">Occasion.</span>
              </h2>

              <p className="font-body text-base text-[#FFF8EF]/80 leading-relaxed font-normal">
                Whether orchestrating a 1,500-guest wedding banquet in Gachibowli or hosting 30 family members for a weekend milestone, Hunger Stories brings banquet mastery and sincere hospitality to your gathering.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#F69522] text-white text-xs font-bold uppercase tracking-[0.18em] hover:bg-[#EA2628] transition-all shadow-xl shadow-[#F69522]/30 hover:-translate-y-0.5"
                >
                  <span>Enquire For Catering</span>
                  <ChevronRight className="w-4 h-4" />
                </a>

                <a
                  href={siteConfig.contact.phoneHref}
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-white/20 text-white text-xs font-semibold uppercase tracking-[0.16em] hover:bg-white/10 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#F69522]" />
                  <span>Call Catering Desk</span>
                </a>
              </div>
            </div>

            {/* Right Large Banquet Photography */}
            <div className="lg:col-span-6 relative h-[360px] sm:h-[480px] lg:h-[580px] w-full">
              <Image
                src="/images/food/catering-feast.jpg"
                alt="Hunger Stories Grand Catering Feast"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center filter contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#30231F] via-transparent to-transparent" />
            </div>

          </div>
        </div>

        {/* Interactive Occasions Lookbook (Non-SaaS layout) */}
        <div className="space-y-8">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#F69522]">
              Select Your Gathering Type
            </span>
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-[#35363A] mt-1">
              Curated Occasion Formats
            </h3>
          </div>

          {/* Occasions Selector Ribbon */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {occasions.map((occ) => {
              const Icon = occ.icon;
              const isSelected = selectedId === occ.id;
              return (
                <button
                  key={occ.id}
                  onClick={() => setSelectedId(occ.id)}
                  className={`p-5 rounded-2xl text-left border transition-all duration-300 flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#35363A] text-white border-[#35363A] shadow-xl scale-[1.02]'
                      : 'bg-white text-[#35363A] border-[#F3E8D9] hover:border-[#F69522]/40'
                  }`}
                >
                  <Icon className={`w-5 h-5 mb-4 ${isSelected ? 'text-[#F69522]' : 'text-[#35363A]/60'}`} />
                  <div>
                    <p className={`text-[10px] uppercase tracking-wider font-semibold ${isSelected ? 'text-[#F69522]' : 'text-[#35363A]/40'}`}>
                      {occ.couverts}
                    </p>
                    <h4 className="font-display text-base font-bold leading-snug mt-1">
                      {occ.title.split(' ')[0]} {occ.title.split(' ')[1] || ''}
                    </h4>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Occasion Showcase Panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeOccasion.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="bg-white rounded-3xl p-8 sm:p-12 border border-[#F3E8D9] shadow-lg"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#FFF8EF] text-[#F69522] border border-[#F69522]/20">
                      {activeOccasion.couverts}
                    </span>
                    <span className="text-xs text-[#35363A]/50 font-mono">
                      {activeOccasion.location}
                    </span>
                  </div>

                  <h4 className="font-display text-2xl sm:text-3xl font-bold text-[#35363A]">
                    {activeOccasion.title}
                  </h4>
                  <p className="font-display text-base italic text-[#F69522] font-normal">
                    &ldquo;{activeOccasion.headline}&rdquo;
                  </p>
                  <p className="font-body text-sm sm:text-base text-[#35363A]/70 leading-relaxed font-normal">
                    {activeOccasion.narrative}
                  </p>
                </div>

                <div className="lg:col-span-4 bg-[#FFF8EF] p-6 rounded-2xl border border-[#F3E8D9] space-y-4">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#35363A]/60">
                    Banqueting Standards
                  </p>
                  <div className="space-y-3">
                    {activeOccasion.perks.map((perk) => (
                      <div key={perk} className="flex items-start gap-2.5 text-xs text-[#35363A]/80">
                        <CheckCircle2 className="w-4 h-4 text-[#F69522] shrink-0 mt-0.5" />
                        <span>{perk}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    <a
                      href="#contact"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-[#35363A] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#F69522] transition-colors"
                    >
                      <span>Inquire For This Format</span>
                      <span>→</span>
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
