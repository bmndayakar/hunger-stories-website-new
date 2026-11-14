'use client';

import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { siteConfig } from '@/lib/config';

const sanctuaries = [
  {
    id: 'manikonda',
    number: '01',
    name: siteConfig.sanctuaries.manikonda.name,
    role: siteConfig.sanctuaries.manikonda.type,
    badge: siteConfig.sanctuaries.manikonda.badge,
    badgeClass: 'bg-[#F69522] text-white',
    tagline: 'Warm amber ambiance, dedicated table stewards, and family dining.',
    narrative: 'Our flagship hospitality house in Manikonda where every meal is treated as an occasion. Features dedicated family seating, private group booths, and an open aroma counter.',
    address: siteConfig.sanctuaries.manikonda.address,
    hours: siteConfig.sanctuaries.manikonda.hours,
    phone: siteConfig.sanctuaries.manikonda.phone,
    phoneHref: siteConfig.sanctuaries.manikonda.phoneHref,
    coverage: siteConfig.sanctuaries.manikonda.coverage,
    image: '/images/food/location-manikonda.jpg',
    actionText: 'Reserve Table or Call',
    actionHref: siteConfig.sanctuaries.manikonda.phoneHref,
  },
  {
    id: 'tellapur',
    number: '02',
    name: siteConfig.sanctuaries.tellapur.name,
    role: siteConfig.sanctuaries.tellapur.type,
    badge: siteConfig.sanctuaries.tellapur.badge,
    badgeClass: 'bg-[#EA2628] text-white',
    tagline: 'Engineered for speed, heat retention, and tamper-evident delivery.',
    narrative: 'High-powered commercial ranges and clay tandoors operating at peak heat. Serving Hyderabad’s western IT corridors with steaming dum biryanis and warm gravies delivered within minutes.',
    address: siteConfig.sanctuaries.tellapur.address,
    hours: siteConfig.sanctuaries.tellapur.hours,
    phone: siteConfig.sanctuaries.tellapur.phone,
    phoneHref: siteConfig.sanctuaries.tellapur.phoneHref,
    coverage: siteConfig.sanctuaries.tellapur.coverage,
    image: '/images/food/location-tellapur.jpg',
    actionText: 'Order For Tellapur Dispatch',
    actionHref: '#order',
  },
];

export default function Locations() {
  return (
    <section id="locations" className="relative py-32 lg:py-44 bg-[#FFF8EF] text-[#35363A] overflow-hidden border-t border-[#35363A]/10">
      <div className="container-wide relative z-10">
        
        {/* Section Chapter Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#35363A]/10 mb-16 lg:mb-24">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#F69522]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#F69522]">
              Chapter 06 / 07 • The Two Sanctuaries
            </span>
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-[#35363A]/40">
            Dine-In Flagship & Express Kitchen
          </span>
        </div>

        {/* Section Headline */}
        <div className="max-w-3xl mb-20 lg:mb-24">
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold text-[#35363A] leading-[1.08] tracking-tight mb-6">
            Our Hyderabad <br />
            <span className="font-editorial-italic font-normal text-[#35363A]/80">Culinary </span>
            <span className="font-editorial-italic font-normal text-[#F69522]">Houses.</span>
          </h2>
          <p className="font-body text-base sm:text-lg text-[#35363A]/70 leading-relaxed font-normal max-w-2xl">
            Whether you desire relaxed sit-down hospitality with family in Manikonda or steaming-hot dum biryani dispatched rapidly to your Financial District home or office from Tellapur.
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
                      HOUSE {house.number}
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
