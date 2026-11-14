'use client';

import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { siteConfig } from '@/lib/config';

const sanctuaries = [
  {
    id: 'manikonda',
    number: '01',
    name: siteConfig.locations.manikonda.name,
    role: siteConfig.locations.manikonda.type,
    badge: siteConfig.locations.manikonda.badge,
    badgeClass: 'bg-[#F69522] text-white',
    tagline: 'Comfortable family dining, warm hospitality, and fresh food.',
    narrative: 'Our welcoming dine-in restaurant in Manikonda features comfortable family tables, private booths, and a relaxed ambiance perfect for everyday lunches, dinners, and weekend get-togethers.',
    address: siteConfig.locations.manikonda.address,
    hours: siteConfig.locations.manikonda.hours,
    phone: siteConfig.locations.manikonda.phone,
    phoneHref: siteConfig.locations.manikonda.phoneHref,
    coverage: siteConfig.locations.manikonda.coverage,
    image: '/images/food/location-manikonda.jpg',
    actionText: 'Call Manikonda Branch',
    actionHref: siteConfig.locations.manikonda.phoneHref,
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
    image: '/images/food/location-tellapur.jpg',
    actionText: 'Order From Tellapur',
    actionHref: '#order',
  },
];

export default function Locations() {
  return (
    <section id="locations" className="relative py-32 lg:py-44 bg-[#FFF8EF] text-[#35363A] overflow-hidden border-t border-[#35363A]/10">
      <div className="container-wide relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#35363A]/10 mb-16 lg:mb-24">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#F69522]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#F69522]">
              Our Locations • Hyderabad
            </span>
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-[#35363A]/40">
            Dine-In Restaurant & Cloud Kitchen
          </span>
        </div>

        {/* Section Headline */}
        <div className="max-w-3xl mb-20 lg:mb-24">
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold text-[#35363A] leading-[1.08] tracking-tight mb-6">
            Visit Us or <br />
            <span className="font-editorial-italic font-normal text-[#35363A]/80">Order </span>
            <span className="font-editorial-italic font-normal text-[#F69522]">In.</span>
          </h2>
          <p className="font-body text-base sm:text-lg text-[#35363A]/70 leading-relaxed font-normal max-w-2xl">
            Enjoy relaxed sit-down dining with family and friends at our Manikonda restaurant, or order hot, freshly prepared meals delivered fast from our Tellapur kitchen.
          </p>
        </div>

        {/* Architectural 2-House Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          {sanctuaries.map((house) => (
            <motion.div
              key={house.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="group bg-white rounded-3xl overflow-hidden border border-[#F3E8D9] shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                {/* Visual Header with Image */}
                <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-[#35363A]">
                  <Image
                    src={house.image}
                    alt={house.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center filter brightness-[0.8] contrast-[1.05] transition-transform duration-1000 group-hover:scale-106"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#30231F] via-[#30231F]/30 to-transparent" />

                  {/* Top Bar Badges */}
                  <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${house.badgeClass}`}>
                      {house.badge}
                    </span>
                    <span className="font-mono text-sm font-bold text-white/80">
                      LOCATION {house.number}
                    </span>
                  </div>

                  {/* Name Over Image */}
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#F69522] mb-1">
                      {house.role}
                    </p>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold leading-tight">
                      {house.name}
                    </h3>
                  </div>
                </div>

                {/* Narrative & Practical Details */}
                <div className="p-8 sm:p-10 space-y-6">
                  <p className="font-display text-base italic text-[#35363A] leading-snug">
                    &ldquo;{house.tagline}&rdquo;
                  </p>
                  
                  <p className="font-body text-sm text-[#35363A]/70 leading-relaxed font-normal">
                    {house.narrative}
                  </p>

                  <div className="pt-4 border-t border-[#35363A]/10 space-y-3.5 text-xs text-[#35363A]/80">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-[#F69522] shrink-0 mt-0.5" />
                      <span>{house.address}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-[#F69522] shrink-0" />
                      <span>{house.hours}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-[#F69522] shrink-0" />
                      <a href={house.phoneHref} className="font-bold hover:text-[#F69522] transition-colors">
                        {house.phone}
                      </a>
                    </div>
                  </div>

                  <div className="pt-2">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#35363A]/40 mb-1">
                      Coverage Zones
                    </p>
                    <p className="text-xs text-[#35363A]/60 font-mono">
                      {house.coverage}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="p-8 sm:p-10 pt-0">
                <a
                  href={house.actionHref}
                  className="w-full inline-flex items-center justify-between p-4 rounded-2xl bg-[#FFF8EF] border border-[#F3E8D9] group-hover:bg-[#35363A] group-hover:text-white transition-all duration-300"
                >
                  <span className="text-xs font-bold uppercase tracking-[0.16em]">
                    {house.actionText}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#F69522]" />
                </a>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
