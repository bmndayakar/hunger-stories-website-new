'use client';

import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, ArrowUpRight, Navigation } from 'lucide-react';
import Image from 'next/image';
import { siteConfig } from '@/lib/config';

const branches = [
  {
    id: 'manikonda',
    number: '01',
    name: siteConfig.locations.manikonda.name,
    role: siteConfig.locations.manikonda.type,
    badge: siteConfig.locations.manikonda.badge,
    badgeClass: 'bg-[#F69522] text-white',
    tagline: 'Comfortable family dining, warm hospitality, and fresh food.',
    narrative: 'Our welcoming dine-in restaurant in Manikonda features comfortable family tables, private booths, and a relaxed ambiance perfect for lunches, dinners, and weekend get-togethers.',
    address: siteConfig.locations.manikonda.address,
    hours: siteConfig.locations.manikonda.hours,
    phone: siteConfig.locations.manikonda.phone,
    phoneHref: siteConfig.locations.manikonda.phoneHref,
    coverage: siteConfig.locations.manikonda.coverage,
    mapHref: `https://www.google.com/maps/search/?api=1&query=${siteConfig.locations.manikonda.mapQuery}`,
    image: '/images/food/location-manikonda.jpg',
    actionText: 'Call Branch',
    actionHref: siteConfig.locations.manikonda.phoneHref,
    isExternal: false,
  },
  {
    id: 'tellapur',
    number: '02',
    name: siteConfig.locations.tellapur.name,
    role: siteConfig.locations.tellapur.type,
    badge: siteConfig.locations.tellapur.badge,
    badgeClass: 'bg-[#EA2628] text-white',
    tagline: 'High-speed cloud kitchen delivering steaming-hot meals.',
    narrative: 'Serving Western Hyderabad’s IT corridors with steaming dum biryanis, tandoori grills, and fresh curries packed securely in tamper-evident containers.',
    address: siteConfig.locations.tellapur.address,
    hours: siteConfig.locations.tellapur.hours,
    phone: siteConfig.locations.tellapur.phone,
    phoneHref: siteConfig.locations.tellapur.phoneHref,
    coverage: siteConfig.locations.tellapur.coverage,
    mapHref: `https://www.google.com/maps/search/?api=1&query=${siteConfig.locations.tellapur.mapQuery}`,
    image: '/images/food/location-tellapur.jpg',
    actionText: 'Order Online',
    actionHref: '#order',
    isExternal: false,
  },
];

export default function Locations() {
  return (
    <section id="locations" className="relative py-20 sm:py-28 lg:py-36 bg-[#FFF8EF] text-[#35363A] overflow-hidden border-t border-[#35363A]/10">
      <div className="container-wide relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-[#35363A]/10 mb-12 sm:mb-16 lg:mb-20">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#F69522]" />
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.24em] sm:tracking-[0.28em] text-[#F69522]">
              Our Locations • Hyderabad
            </span>
          </div>
          <span className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-[#35363A]/50">
            Dine-In Restaurant & Cloud Kitchen
          </span>
        </div>

        {/* Section Headline */}
        <div className="max-w-3xl mb-12 sm:mb-16 lg:mb-20">
          <h2 className="font-display text-3xl xs:text-4xl sm:text-6xl lg:text-7xl font-bold text-[#35363A] leading-[1.08] tracking-tight mb-4 sm:mb-6">
            Visit Us or <br />
            <span className="font-editorial-italic font-normal text-[#35363A]/80">Order </span>
            <span className="font-editorial-italic font-normal text-[#F69522]">In.</span>
          </h2>
          <p className="font-body text-sm sm:text-lg text-[#35363A]/75 leading-relaxed font-normal max-w-2xl">
            Enjoy relaxed sit-down dining with family and friends at our Manikonda restaurant, or order hot, freshly prepared meals delivered fast from our Tellapur kitchen.
          </p>
        </div>

        {/* Two Operational Outlets Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14">
          {branches.map((branch) => (
            <motion.div
              key={branch.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group bg-white rounded-3xl overflow-hidden border border-[#F3E8D9] shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                {/* Visual Header with Image */}
                <div className="relative h-60 sm:h-72 lg:h-80 w-full overflow-hidden bg-[#35363A]">
                  <Image
                    src={branch.image}
                    alt={branch.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center filter brightness-[0.82] contrast-[1.05] transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#30231F] via-[#30231F]/40 to-transparent" />

                  {/* Top Bar Badges */}
                  <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${branch.badgeClass}`}>
                      {branch.badge}
                    </span>
                    <span className="font-mono text-xs font-bold text-white/80 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full">
                      OUTLET {branch.number}
                    </span>
                  </div>

                  {/* Name Over Image */}
                  <div className="absolute bottom-5 left-5 right-5 text-white text-shadow-food">
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#F69522] mb-1">
                      {branch.role}
                    </p>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold leading-tight">
                      {branch.name}
                    </h3>
                  </div>
                </div>

                {/* Narrative & Practical Details */}
                <div className="p-6 sm:p-8 lg:p-10 space-y-5">
                  <p className="font-display text-sm sm:text-base italic text-[#35363A] leading-snug">
                    &ldquo;{branch.tagline}&rdquo;
                  </p>
                  
                  <p className="font-body text-xs sm:text-sm text-[#35363A]/75 leading-relaxed font-normal">
                    {branch.narrative}
                  </p>

                  <div className="pt-4 border-t border-[#35363A]/10 space-y-3 text-xs text-[#35363A]/85">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-[#F69522] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{branch.address}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-[#F69522] shrink-0" />
                      <span>{branch.hours}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-[#F69522] shrink-0" />
                      <a href={branch.phoneHref} className="font-bold hover:text-[#F69522] transition-colors underline decoration-[#F69522]/30 underline-offset-4">
                        {branch.phone}
                      </a>
                    </div>
                  </div>

                  <div className="pt-2 bg-[#FFF8EF] p-3.5 rounded-xl border border-[#F3E8D9]">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#35363A]/60 mb-1">
                      Delivery & Dine-In Coverage
                    </p>
                    <p className="text-xs text-[#35363A]/80 font-mono leading-relaxed">
                      {branch.coverage}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Actions Footer (Direct Contact + Directions) */}
              <div className="p-6 sm:p-8 lg:p-10 pt-0 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={branch.actionHref}
                  className="w-full inline-flex items-center justify-center gap-2 p-3.5 rounded-xl bg-[#F69522] text-white font-body text-xs font-bold uppercase tracking-[0.14em] shadow-md shadow-[#F69522]/20 hover:bg-[#EA2628] transition-all min-h-[44px]"
                >
                  {branch.id === 'manikonda' ? <Phone className="w-4 h-4" /> : <ArrowUpRight className="w-4 h-4" />}
                  <span>{branch.actionText}</span>
                </a>

                <a
                  href={branch.mapHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 p-3.5 rounded-xl bg-[#FFF8EF] border border-[#F3E8D9] text-[#35363A] font-body text-xs font-bold uppercase tracking-[0.14em] hover:bg-[#35363A] hover:text-white transition-all min-h-[44px]"
                >
                  <Navigation className="w-4 h-4 text-[#F69522]" />
                  <span>Get Directions</span>
                </a>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
