'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Phone, Mail, MessageCircle, ShieldCheck } from 'lucide-react';
import { siteConfig, getWhatsAppUrl } from '@/lib/config';

export default function FinalCTA() {
  const channels = [
    {
      name: 'Swiggy',
      platform: 'Doorstep Delivery',
      tag: 'Tellapur Hub',
      badgeClass: 'bg-[#FC8019] text-white',
      description: 'Order your favourite dum biryanis, clay oven tandoori grills, and rich curries delivered fast via Swiggy.',
      href: siteConfig.ordering.swiggy,
      actionText: 'Order on Swiggy',
      accentColor: '#FC8019',
      borderClass: 'hover:border-[#FC8019]',
    },
    {
      name: 'Zomato',
      platform: 'Delivery & Dining',
      tag: 'Top Rated Hyderabad',
      badgeClass: 'bg-[#E23744] text-white',
      description: 'Browse verified food photography, guest ratings, and order fresh food directly on Zomato.',
      href: siteConfig.ordering.zomato,
      actionText: 'Order on Zomato',
      accentColor: '#E23744',
      borderClass: 'hover:border-[#E23744]',
    },
    {
      name: 'Ownly',
      platform: 'Direct Kitchen Portal',
      tag: 'Direct Dispatch',
      badgeClass: 'bg-[#F69522] text-white',
      description: 'Order directly from our kitchen portal for freshly prepared food dispatched straight to your location.',
      href: siteConfig.ordering.ownly,
      actionText: 'Order on Ownly',
      accentColor: '#F69522',
      borderClass: 'hover:border-[#F69522]',
    },
    {
      name: 'WhatsApp',
      platform: 'Direct Kitchen Chat',
      tag: 'Instant Concierge',
      badgeClass: 'bg-[#25D366] text-white',
      description: 'Chat directly with our kitchen team for express orders, party boxes, and customized catering menus.',
      href: getWhatsAppUrl(siteConfig.ordering.whatsappDefaultMessage),
      actionText: 'Chat on WhatsApp',
      accentColor: '#25D366',
      borderClass: 'hover:border-[#25D366]',
    },
  ];

  return (
    <section id="order" className="relative py-20 sm:py-28 lg:py-36 bg-[#FFF8EF] text-[#35363A] overflow-hidden border-t border-[#35363A]/10">
      {/* Anchor alias for #contact */}
      <div id="contact" className="sr-only" />

      {/* Decorative Warm Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#F3E8D9]/70 rounded-full blur-[140px] pointer-events-none" />

      <div className="container-wide relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-[#35363A]/10 mb-12 sm:mb-16 lg:mb-20">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#F69522]" />
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.24em] sm:tracking-[0.28em] text-[#F69522]">
              Order Online • Delivery & Catering
            </span>
          </div>
          <span className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-[#35363A]/50">
            Tellapur & Manikonda Service
          </span>
        </div>

        {/* Master Headline Block */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          <h2 className="font-display text-3xl xs:text-4xl sm:text-6xl lg:text-7xl font-bold text-[#35363A] leading-[1.08] tracking-tight mb-4 sm:mb-6">
            Your Next Food Story <br />
            <span className="font-editorial-italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#F69522] via-[#F69522] to-[#EA2628]">
              Starts Here.
            </span>
          </h2>

          <p className="font-body text-sm sm:text-lg text-[#35363A]/75 leading-relaxed font-normal max-w-xl mx-auto">
            Choose your preferred ordering platform below. Every dish is freshly prepared upon confirmation and dispatched steaming hot across Hyderabad.
          </p>
        </div>

        {/* 4 Prominent External Channel Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-12 sm:mb-16 lg:mb-20">
          {channels.map((ch, idx) => (
            <motion.a
              key={ch.name}
              href={ch.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className={`group bg-white rounded-3xl p-6 sm:p-7 border border-[#F3E8D9] ${ch.borderClass} shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between`}
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${ch.badgeClass}`}>
                    {ch.tag}
                  </span>
                  <ExternalLink className="w-4 h-4 text-[#35363A]/30 group-hover:text-[#F69522] transition-colors" />
                </div>

                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#35363A]/50">
                  {ch.platform}
                </p>

                <h3 className="font-display text-2xl font-bold text-[#35363A] leading-tight group-hover:text-[#F69522] transition-colors">
                  {ch.name}
                </h3>

                <p className="font-body text-xs text-[#35363A]/75 leading-relaxed font-normal">
                  {ch.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#35363A]/10 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#35363A] group-hover:text-[#F69522] transition-colors min-h-[44px]">
                <span>{ch.actionText}</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Catering & Group Gatherings Direct Touchpoint (Clean, No Forms) */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#F3E8D9] shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF8EF] border border-[#F3E8D9]">
                <span className="w-2 h-2 rounded-full bg-[#F69522]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#F69522]">
                  Catering & Group Gatherings
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#35363A] leading-tight">
                Planning an Event or Large Order?
              </h3>

              <p className="font-body text-xs sm:text-sm text-[#35363A]/75 leading-relaxed font-normal">
                Whether you need packed meal boxes for an office event or full-service catering for a wedding or milestone birthday, speak directly with our team for customized menus and dedicated service.
              </p>

              <div className="flex items-center gap-2 pt-1 text-xs text-[#35363A]/60 font-mono">
                <span>Operational daily:</span>
                <span className="font-bold text-[#35363A]">{siteConfig.contact.hours}</span>
              </div>
            </div>

            {/* Right Direct Contact Channels */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              
              {/* Call Hotline */}
              <a
                href={siteConfig.contact.phoneHref}
                className="flex items-center gap-3.5 p-4 rounded-2xl bg-[#FFF8EF] border border-[#F3E8D9] hover:border-[#F69522] hover:bg-white transition-all group min-h-[64px]"
              >
                <div className="w-11 h-11 rounded-xl bg-white border border-[#F69522]/20 flex items-center justify-center text-[#F69522] group-hover:bg-[#F69522] group-hover:text-white transition-colors shrink-0 shadow-sm">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#35363A]/50 block">Direct Hotline</span>
                  <p className="text-xs sm:text-sm font-bold text-[#35363A] group-hover:text-[#F69522] transition-colors">
                    {siteConfig.contact.phoneDisplay}
                  </p>
                </div>
              </a>

              {/* WhatsApp Concierge */}
              <a
                href={getWhatsAppUrl(siteConfig.ordering.whatsappCateringMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-4 rounded-2xl bg-[#FFF8EF] border border-[#F3E8D9] hover:border-[#25D366] hover:bg-white transition-all group min-h-[64px]"
              >
                <div className="w-11 h-11 rounded-xl bg-white border border-[#25D366]/20 flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-colors shrink-0 shadow-sm">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#35363A]/50 block">WhatsApp Concierge</span>
                  <p className="text-xs sm:text-sm font-bold text-[#35363A] group-hover:text-[#25D366] transition-colors">
                    Instant Event Chat
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href={siteConfig.contact.emailHref}
                className="flex items-center gap-3.5 p-4 rounded-2xl bg-[#FFF8EF] border border-[#F3E8D9] hover:border-[#F69522] hover:bg-white transition-all group min-h-[64px]"
              >
                <div className="w-11 h-11 rounded-xl bg-white border border-[#F69522]/20 flex items-center justify-center text-[#F69522] group-hover:bg-[#F69522] group-hover:text-white transition-colors shrink-0 shadow-sm">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#35363A]/50 block">Email Inquiries</span>
                  <p className="text-xs sm:text-sm font-bold text-[#35363A] group-hover:text-[#F69522] transition-colors truncate">
                    {siteConfig.contact.email}
                  </p>
                </div>
              </a>

              {/* Quality Guarantee */}
              <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-[#FFF8EF] border border-[#F3E8D9] min-h-[64px]">
                <div className="w-11 h-11 rounded-xl bg-white border border-[#35363A]/10 flex items-center justify-center text-[#35363A]/70 shrink-0 shadow-sm">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#35363A]/50 block">Food Safety</span>
                  <p className="text-xs font-semibold text-[#35363A]">
                    Tamper-Evident Packing
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Brand Awareness Notice */}
        <div className="mt-10 sm:mt-12 text-center text-xs text-[#35363A]/55 max-w-xl mx-auto leading-relaxed">
          <p>
            Hunger Stories is a dedicated multi-cuisine restaurant and catering brand. Deliveries are fulfilled through Swiggy, Zomato, Ownly, and direct WhatsApp concierge. No direct payments are processed on this site.
          </p>
        </div>

      </div>
    </section>
  );
}