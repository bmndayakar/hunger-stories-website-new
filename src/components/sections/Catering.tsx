'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Users, Cake, Home, PartyPopper, PackageCheck, CheckCircle2, ChevronRight, Phone } from 'lucide-react';
import { siteConfig } from '@/lib/config';
import { StoryReveal } from '@/components/ui/StoryMotion';

const occasions = [
  {
    id: 'corporate',
    icon: Users,
    title: 'Corporate Events & Summits',
    capacity: '50 — 500+ Guests',
    location: 'Hitec City, Financial District, Gachibowli',
    headline: 'Hot executive lunch boxes, conference buffets, and team celebrations.',
    narrative: 'Tailored for corporate teams and campus gatherings across Hyderabad. We offer hygienic executive meal boxes and complete buffet catering setups.',
    perks: ['Tamper-evident sealed executive boxes', 'Hot chafing setup with service team', 'Corporate GST invoicing & scheduled delivery'],
  },
  {
    id: 'weddings',
    icon: PartyPopper,
    title: 'Weddings & Receptions',
    capacity: '100+ Guests',
    location: 'Banquets & Venues Across Hyderabad',
    headline: 'Authentic Hyderabadi dum biryanis, tandoori stations, and rich curries.',
    narrative: 'Celebrate your special moments with a feast your guests will remember. Freshly prepared dum biryani handis, live naan stations, and signature desserts.',
    perks: ['Live tandoori bread stations', 'Dedicated event catering coordinator', 'Traditional clay handi presentation'],
  },
  {
    id: 'birthdays',
    icon: Cake,
    title: 'Birthdays & Private Parties',
    capacity: '25 — 150 Guests',
    location: 'Homes, Clubhouses & Private Venues',
    headline: 'Vibrant party platters and crowd-pleasing signature dishes.',
    narrative: 'Delicious party food made simple. We curate appetizers, smoky tandoori skewers, and flavorful biryanis that guests of all ages enjoy.',
    perks: ['Customizable spice levels & kids options', 'Tabletop warming setup included', 'Eco-friendly premium cutlery options'],
  },
  {
    id: 'family',
    icon: Home,
    title: 'Family Gatherings & House Parties',
    capacity: '20 — 80 Guests',
    location: 'Direct to Your Doorstep',
    headline: 'Warm homestyle dining without the kitchen stress.',
    narrative: 'Perfect for housewarmings, anniversaries, or Sunday family get-togethers. Delivered hot and ready to serve in insulated food containers.',
    perks: ['Delivered hot & fresh with zero reheating needed', 'Pre-portioned sharing platters', 'Complimentary accompaniments, raita & salan'],
  },
  {
    id: 'bulk',
    icon: PackageCheck,
    title: 'Bulk Orders & Box Meals',
    capacity: '50+ Meal Boxes',
    location: 'Office & Venue Delivery',
    headline: 'Consistent high-volume meal boxes packed with care and hygiene.',
    narrative: 'Reliable, well-balanced meal trays for corporate trainings, institutional events, and large gatherings. Includes biryani, curry, bread, dessert, and salad.',
    perks: ['Hygienic compartmentalized food packaging', 'Eco-friendly sugarcane bagasse trays', 'Scheduled on-time delivery fleets'],
  },
];

export default function Catering() {
  const [selectedId, setSelectedId] = useState('corporate');
  const activeOccasion = occasions.find((o) => o.id === selectedId) || occasions[0];

  return (
    <section className="relative py-20 sm:py-28 lg:py-36 bg-[#FFF8EF] text-[#35363A] overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-[#F3E8D9]/70 rounded-full blur-[160px] pointer-events-none translate-x-1/3" />

      <div className="container-wide relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-[#35363A]/10 mb-10 sm:mb-16 lg:mb-24">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#F69522]" />
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.24em] text-[#F69522]">
              Chapter 04 / 07 • The Art of Catering
            </span>
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-[#35363A]/50">
            Custom Events & Gathering Feasts
          </span>
        </div>

        {/* Master Center Table Hero Feature */}
        <div className="relative rounded-3xl overflow-hidden bg-[#30231F] text-white shadow-2xl mb-12 sm:mb-16 lg:mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Left Narrative Panel */}
            <StoryReveal className="lg:col-span-6 p-6 sm:p-12 lg:p-16 space-y-6 sm:space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F69522] text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-widest">
                <span>Made For Memorable Gatherings</span>
              </div>

              <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight">
                Made For <br />
                <span className="font-editorial-italic font-normal text-[#FFF8EF]/80">Every </span>
                <span className="font-editorial-italic font-normal text-[#F69522]">Occasion.</span>
              </h2>

              <p className="font-body text-sm sm:text-base text-[#FFF8EF]/80 leading-relaxed font-normal">
                Whether hosting a grand celebration or an intimate family gathering, Hunger Stories brings genuine hospitality, authentic taste, and dependable service to your event.
              </p>

              <div className="pt-1 sm:pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <a
                  href="#contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#F69522] text-white text-xs font-bold uppercase tracking-[0.18em] hover:bg-[#EA2628] transition-all shadow-xl shadow-[#F69522]/30 hover:-translate-y-0.5 min-h-[48px]"
                >
                  <span>Enquire For Catering</span>
                  <ChevronRight className="w-4 h-4" />
                </a>

                <a
                  href={siteConfig.contact.phoneHref}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-white/20 text-white text-xs font-semibold uppercase tracking-[0.16em] hover:bg-white/10 transition-colors min-h-[48px]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#F69522]" />
                  <span>Call Catering Team</span>
                </a>
              </div>
            </StoryReveal>

            {/* Right Large Banquet Photography */}
            <div className="lg:col-span-6 relative h-[260px] xs:h-[320px] sm:h-[440px] lg:h-[580px] w-full">
              <Image
                src="/images/food/catering-feast.jpg"
                alt="Hunger Stories Grand Catering Feast"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center filter contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#30231F] via-[#30231F]/30 lg:via-transparent to-transparent" />
            </div>

          </div>
        </div>

        {/* Interactive Occasions Lookbook */}
        <div className="space-y-6 sm:space-y-8">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#F69522]">
              Select Your Gathering Type
            </span>
            <h3 className="font-display text-2xl sm:text-4xl font-bold text-[#35363A] mt-1">
              Curated Event Formats
            </h3>
          </div>

          {/* Occasions Selector Ribbon: Horizontal swipe on mobile, grid on desktop */}
          <div className="flex items-center gap-2.5 overflow-x-auto pb-3 sm:pb-0 sm:grid sm:grid-cols-3 lg:grid-cols-5 sm:gap-3 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
            {occasions.map((occ) => {
              const Icon = occ.icon;
              const isSelected = selectedId === occ.id;
              return (
                <button
                  key={occ.id}
                  onClick={() => setSelectedId(occ.id)}
                  className={`min-w-[170px] sm:min-w-0 p-4 sm:p-5 rounded-2xl text-left border transition-all duration-300 flex flex-col justify-between shrink-0 sm:shrink ${
                    isSelected
                      ? 'bg-[#35363A] text-white border-[#35363A] shadow-xl scale-[1.02]'
                      : 'bg-white text-[#35363A] border-[#F3E8D9] hover:border-[#F69522]/40'
                  }`}
                >
                  <Icon className={`w-5 h-5 mb-3 sm:mb-4 ${isSelected ? 'text-[#F69522]' : 'text-[#35363A]/60'}`} />
                  <div>
                    <p className={`text-[9px] sm:text-[10px] uppercase tracking-wider font-semibold ${isSelected ? 'text-[#F69522]' : 'text-[#35363A]/50'}`}>
                      {occ.capacity}
                    </p>
                    <h4 className="font-display text-sm sm:text-base font-bold leading-snug mt-1">
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
              className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#F3E8D9] shadow-lg"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
                
                <div className="lg:col-span-8 space-y-3 sm:space-y-4">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#FFF8EF] text-[#F69522] border border-[#F69522]/20">
                      {activeOccasion.capacity}
                    </span>
                    <span className="text-xs text-[#35363A]/60 font-mono">
                      {activeOccasion.location}
                    </span>
                  </div>

                  <h4 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-[#35363A]">
                    {activeOccasion.title}
                  </h4>
                  <p className="font-display text-sm sm:text-base italic text-[#F69522] font-normal">
                    &ldquo;{activeOccasion.headline}&rdquo;
                  </p>
                  <p className="font-body text-xs sm:text-sm lg:text-base text-[#35363A]/75 leading-relaxed font-normal">
                    {activeOccasion.narrative}
                  </p>
                </div>

                <div className="lg:col-span-4 bg-[#FFF8EF] p-5 sm:p-6 rounded-2xl border border-[#F3E8D9] space-y-3.5 sm:space-y-4">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#35363A]/60">
                    Included Services
                  </p>
                  <div className="space-y-2.5 sm:space-y-3">
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
                      className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-[#35363A] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#F69522] transition-colors min-h-[44px]"
                    >
                      <span>Enquire For This Event</span>
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
