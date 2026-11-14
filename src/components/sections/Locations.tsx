'use client';

import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, ArrowUpRight, Navigation } from 'lucide-react';
import Image from 'next/image';
import { siteConfig } from '@/lib/config';
import { StoryReveal } from '@/components/ui/StoryMotion';

export default function Locations() {
  const location = siteConfig.locations.tellapur;

  return (
    <section className="relative py-20 sm:py-28 lg:py-36 bg-[#FFF8EF] text-[#35363A] overflow-hidden border-t border-[#35363A]/10">
      <div className="container-wide relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-[#35363A]/10 mb-12 sm:mb-16 lg:mb-20">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#F69522]" />
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.24em] sm:tracking-[0.28em] text-[#F69522]">
              Chapter 05 / 07 • Our Location
            </span>
          </div>
          <span className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-[#35363A]/50">
            Tellapur Kitchen
          </span>
        </div>

        <StoryReveal className="max-w-3xl mb-12 sm:mb-16 lg:mb-20">
          <h2 className="font-display text-3xl xs:text-4xl sm:text-6xl lg:text-7xl font-bold text-[#35363A] leading-[1.08] tracking-tight mb-4 sm:mb-6">
            From Our Kitchen <br />
            <span className="font-editorial-italic font-normal text-[#F69522]">To You.</span>
          </h2>
          <p className="font-body text-sm sm:text-lg text-[#35363A]/75 leading-relaxed font-normal max-w-2xl">
            Discover freshly prepared food from our Tellapur kitchen, available to order for delivery.
          </p>
        </StoryReveal>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group bg-white rounded-3xl overflow-hidden border border-[#F3E8D9] shadow-md grid grid-cols-1 lg:grid-cols-2"
        >
          <div className="relative h-60 sm:h-72 lg:h-full lg:min-h-[440px] overflow-hidden bg-[#35363A]">
            <Image
              src="/images/food/location-tellapur.jpg"
              alt="Food being prepared in a kitchen"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center filter brightness-[0.82] contrast-[1.05] transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#30231F] via-[#30231F]/40 to-transparent" />
            <div className="absolute top-5 left-5">
              <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#EA2628] text-white">
                Kitchen & Delivery
              </span>
            </div>
            <div className="absolute bottom-5 left-5 right-5 text-white text-shadow-food">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#F69522] mb-1">Our Kitchen</p>
              <h3 className="font-display text-2xl sm:text-3xl font-bold leading-tight">{location.name}</h3>
            </div>
          </div>

          <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
            <p className="font-display text-lg sm:text-xl italic text-[#35363A] leading-snug">
              Fresh flavours, prepared in Tellapur.
            </p>
            <div className="mt-6 pt-6 border-t border-[#35363A]/10 space-y-4 text-sm text-[#35363A]/85">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#F69522] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{location.address}</span>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#F69522] shrink-0 mt-0.5" />
                <span>{siteConfig.contact.hours}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#F69522] shrink-0" />
                <a href={siteConfig.contact.phoneHref} className="font-bold hover:text-[#F69522] transition-colors underline decoration-[#F69522]/30 underline-offset-4">
                  {siteConfig.contact.phoneDisplay}
                </a>
              </div>
            </div>
            <p className="mt-6 bg-[#FFF8EF] p-3.5 rounded-xl border border-[#F3E8D9] text-xs text-[#35363A]/80">
              Delivery availability is shown on your chosen ordering platform.
            </p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a href="#order" className="w-full inline-flex items-center justify-center gap-2 p-3.5 rounded-xl bg-[#F69522] text-white font-body text-xs font-bold uppercase tracking-[0.14em] shadow-md shadow-[#F69522]/20 hover:bg-[#EA2628] transition-all min-h-[44px]">
                <ArrowUpRight className="w-4 h-4" />
                <span>Order Online</span>
              </a>
              <a href={location.mapHref} target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center gap-2 p-3.5 rounded-xl bg-[#FFF8EF] border border-[#F3E8D9] text-[#35363A] font-body text-xs font-bold uppercase tracking-[0.14em] hover:bg-[#35363A] hover:text-white transition-all min-h-[44px]">
                <Navigation className="w-4 h-4 text-[#F69522]" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
