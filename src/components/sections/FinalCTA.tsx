'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Sparkles, MessageCircle, Bike, ShieldCheck } from 'lucide-react';
import { siteConfig, getWhatsAppUrl } from '@/lib/config';

export default function FinalCTA() {
  const channels = [
    {
      name: 'Swiggy Express',
      platform: 'Swiggy Partner Dispatch',
      tag: 'Live in Tellapur',
      badgeClass: 'bg-[#FC8019] text-white',
      description: 'Order Dum Biryani, Butter Chicken, and starters delivered hot via Swiggy.',
      href: siteConfig.ordering.swiggy,
      actionText: 'Dispatch via Swiggy',
      hoverBorder: 'hover:border-[#FC8019]',
      isConfigured: siteConfig.ordering.swiggy !== '#',
    },
    {
      name: 'Zomato Dining & Delivery',
      platform: 'Zomato Verified Hub',
      tag: 'Top Rated Western Hyd',
      badgeClass: 'bg-[#E23744] text-white',
      description: 'Explore verified guest reviews, view food photos, and order on Zomato.',
      href: siteConfig.ordering.zomato,
      actionText: 'Dispatch via Zomato',
      hoverBorder: 'hover:border-[#E23744]',
      isConfigured: siteConfig.ordering.zomato !== '#',
    },
    {
      name: 'Ownly Direct Channel',
      platform: 'Direct Kitchen Portal',
      tag: 'Brand Direct',
      badgeClass: 'bg-[#F69522] text-white',
      description: 'Direct kitchen ordering with zero third-party markups and loyalty recognition.',
      href: siteConfig.ordering.ownly,
      actionText: siteConfig.ordering.ownly === '#' ? 'Coming Soon' : 'Order via Ownly',
      hoverBorder: 'hover:border-[#F69522]',
      isConfigured: siteConfig.ordering.ownly !== '#',
    },
    {
      name: 'WhatsApp VIP Concierge',
      platform: 'Direct Kitchen Desk',
      tag: 'Instant Chef Response',
      badgeClass: 'bg-[#25D366] text-white',
      description: 'Message our kitchen manager directly for customized meals and express dispatch.',
      href: getWhatsAppUrl('Hi Hunger Stories, I would like to order fresh food from your Tellapur kitchen'),
      actionText: 'Chat on WhatsApp',
      hoverBorder: 'hover:border-[#25D366]',
      isConfigured: true,
    },
  ];

  return (
    <section id="order" className="relative py-32 lg:py-44 bg-[#FFF8EF] text-[#35363A] overflow-hidden border-t border-[#35363A]/10">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#F3E8D9]/70 rounded-full blur-[160px] pointer-events-none" />

      <div className="container-wide relative z-10">
        
        {/* Section Chapter Marker */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#35363A]/10 mb-16 lg:mb-24">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#F69522]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#F69522]">
              Final Destination • The Dispatch Concierge
            </span>
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-[#35363A]/40">
            External Partner Fulfillment Only
          </span>
        </div>

        {/* Master Headline Block */}
        <div className="text-center max-w-3xl mx-auto mb-20 lg:mb-28">
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold text-[#35363A] leading-[1.06] tracking-tight mb-6">
            Your Next Food Story <br />
            <span className="font-editorial-italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#F69522] via-[#F69522] to-[#EA2628]">
              Starts Here.
            </span>
          </h2>

          <p className="font-body text-base sm:text-lg text-[#35363A]/70 leading-relaxed font-normal max-w-xl mx-auto">
            Choose your preferred dispatch channel. Every order is fired fresh to order upon confirmation and dispatched with heat-retention seals.
          </p>
        </div>

        {/* 4 Architectural Channel Passes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {channels.map((ch, idx) => (
            <motion.a
              key={ch.name}
              href={ch.href}
              target={ch.href.startsWith('http') ? '_blank' : undefined}
              rel={ch.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`group bg-white rounded-3xl p-8 border border-[#F3E8D9] ${ch.hoverBorder} shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${ch.badgeClass}`}>
                    {ch.tag}
                  </span>
                  <ExternalLink className="w-4 h-4 text-[#35363A]/30 group-hover:text-[#F69522] transition-colors" />
                </div>

                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#35363A]/50">
                  {ch.platform}
                </p>

                <h3 className="font-display text-2xl font-bold text-[#35363A] leading-tight group-hover:text-[#F69522] transition-colors">
                  {ch.name}
                </h3>

                <p className="font-body text-xs text-[#35363A]/70 leading-relaxed font-normal">
                  {ch.description}
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-[#35363A]/5 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#35363A]">
                <span>{ch.actionText}</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Brand Awareness Notice */}
        <div className="mt-16 text-center text-xs text-[#35363A]/50 max-w-lg mx-auto">
          <p>
            Hunger Stories is a dedicated culinary brand. All digital deliveries are managed exclusively through authorized partner channels and WhatsApp concierge.
          </p>
        </div>

      </div>
    </section>
  );
}
