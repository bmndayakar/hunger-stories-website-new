'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Phone, Mail, MessageCircle, Send, CheckCircle2, MapPin, Clock } from 'lucide-react';
import { siteConfig, getWhatsAppUrl } from '@/lib/config';
import { StoryReveal } from '@/components/ui/StoryMotion';

export default function FinalCTA() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: 'Catering & Celebrations (25+ Guests)',
    guests: '50 — 100 Guests',
    notes: '',
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const channels = [
    {
      name: 'Swiggy',
      platform: 'Doorstep Delivery',
      tag: 'Tellapur Hub',
      badgeClass: 'bg-[#FC8019] text-white',
      description: 'Order your favourite dum biryanis, clay oven tandoori grills, and rich curries delivered fast via Swiggy.',
      href: siteConfig.ordering.swiggy,
      actionText: 'Order on Swiggy',
      borderClass: 'hover:border-[#FC8019]',
    },
    {
      name: 'Zomato',
      platform: 'Delivery & Dining',
      tag: 'Top Rated Hyderabad',
      badgeClass: 'bg-[#E23744] text-white',
      description: 'Browse authentic food photography, verified reviews, and order freshly prepared meals directly on Zomato.',
      href: siteConfig.ordering.zomato,
      actionText: 'Order on Zomato',
      borderClass: 'hover:border-[#E23744]',
    },
    {
      name: 'Ownly',
      platform: 'Direct Kitchen Portal',
      tag: 'Active Direct Dispatch',
      badgeClass: 'bg-[#F69522] text-white',
      description: 'Order directly from our kitchen portal for freshly prepared food dispatched straight to your doorstep.',
      href: siteConfig.ordering.ownly,
      actionText: 'Order on Ownly',
      borderClass: 'hover:border-[#F69522]',
    },
    {
      name: 'WhatsApp',
      platform: 'Direct Kitchen Chat',
      tag: 'Instant Order Desk',
      badgeClass: 'bg-[#25D366] text-white',
      description: 'Chat directly with our kitchen team for express orders, party boxes, and customized catering menus.',
      href: getWhatsAppUrl(siteConfig.ordering.whatsappDefaultMessage),
      actionText: 'Order on WhatsApp',
      borderClass: 'hover:border-[#25D366]',
    },
  ];

  return (
    <section className="relative py-20 sm:py-28 lg:py-36 bg-[#FFF8EF] text-[#35363A] overflow-hidden border-t border-[#35363A]/10">
      {/* Decorative Warm Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#F3E8D9]/70 rounded-full blur-[140px] pointer-events-none" />

      <div className="container-wide relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-[#35363A]/10 mb-12 sm:mb-16 lg:mb-20">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#F69522]" />
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.24em] sm:tracking-[0.28em] text-[#F69522]">
              Chapter 07 / 07 • Your Next Food Story Starts Here
            </span>
          </div>
          <span className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-[#35363A]/50">
            Tellapur Hub & Manikonda Restaurant
          </span>
        </div>

        {/* Master Headline Block */}
        <StoryReveal className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          <h2 className="font-display text-3xl xs:text-4xl sm:text-6xl lg:text-7xl font-bold text-[#35363A] leading-[1.08] tracking-tight mb-4 sm:mb-6">
            Your Next Food Story <br />
            <span className="font-editorial-italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#F69522] via-[#F69522] to-[#EA2628]">
              Starts Here.
            </span>
          </h2>

          <p className="font-body text-sm sm:text-lg text-[#35363A]/75 leading-relaxed font-normal max-w-xl mx-auto">
            Choose your preferred ordering platform below. Every dish is freshly prepared upon confirmation and dispatched steaming hot across Hyderabad.
          </p>
        </StoryReveal>

        {/* 4 Prominent External Channel Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-16 sm:mb-20 lg:mb-28">
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

        {/* Catering Enquiry & Contact Desk */}
        <div id="contact" className="scroll-mt-24 bg-white rounded-3xl p-6 sm:p-10 lg:p-14 border border-[#F3E8D9] shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Narrative & Direct Hotlines */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#F69522] block mb-2">
                  Catering & Celebrations • Contact Us
                </span>
                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#35363A] leading-tight">
                  Planning an Event or Large Order?
                </h3>
              </div>

              <p className="font-body text-xs sm:text-sm text-[#35363A]/75 leading-relaxed font-normal">
                Whether you need packed meal boxes for an office event or full-service catering for a wedding or milestone birthday, speak directly with our team or share your details here.
              </p>

              {/* Direct Touch Channels */}
              <div className="space-y-3 pt-2">
                <a
                  href={siteConfig.contact.phoneHref}
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#FFF8EF] border border-[#F3E8D9] hover:border-[#F69522] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-white border border-[#F69522]/20 flex items-center justify-center text-[#F69522] group-hover:bg-[#F69522] group-hover:text-white transition-colors shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#35363A]/50 block">Direct Hotline</span>
                    <p className="text-sm font-bold text-[#35363A] group-hover:text-[#F69522] transition-colors">
                      {siteConfig.contact.phoneDisplay}
                    </p>
                  </div>
                </a>

                <a
                  href={getWhatsAppUrl(siteConfig.ordering.whatsappCateringMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#FFF8EF] border border-[#F3E8D9] hover:border-[#25D366] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-white border border-[#25D366]/20 flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-colors shrink-0">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#35363A]/50 block">WhatsApp Concierge</span>
                    <p className="text-sm font-bold text-[#35363A] group-hover:text-[#25D366] transition-colors">
                      Instant Event Chat
                    </p>
                  </div>
                </a>

                <a
                  href={siteConfig.contact.emailHref}
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#FFF8EF] border border-[#F3E8D9] hover:border-[#F69522] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-white border border-[#F69522]/20 flex items-center justify-center text-[#F69522] group-hover:bg-[#F69522] group-hover:text-white transition-colors shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#35363A]/50 block">Email Inquiries</span>
                    <p className="text-sm font-bold text-[#35363A] group-hover:text-[#F69522] transition-colors">
                      {siteConfig.contact.email}
                    </p>
                  </div>
                </a>
              </div>

              <div className="pt-2 border-t border-[#35363A]/10 text-xs text-[#35363A]/70 space-y-1.5 font-mono">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#F69522]" />
                  <span>Daily: {siteConfig.contact.hours}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#F69522]" />
                  <span>Manikonda (Dine-In) & Tellapur (Kitchen Hub)</span>
                </div>
              </div>
            </div>

            {/* Right Interactive Catering Enquiry Form */}
            <div className="lg:col-span-7 bg-[#FFF8EF] p-6 sm:p-8 rounded-2xl border border-[#F3E8D9] w-full">
              {formSubmitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#F69522] text-white flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-display text-2xl font-bold text-[#35363A]">
                    Catering Enquiry Received!
                  </h4>
                  <p className="text-xs sm:text-sm text-[#35363A]/75 max-w-sm mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#35363A]">{formData.name}</strong>. Our catering manager will contact you directly at <strong className="text-[#35363A]">{formData.phone || 'your phone number'}</strong> to discuss your menu and quote.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs font-bold text-[#F69522] hover:underline pt-2 block mx-auto"
                  >
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="pb-2">
                    <h4 className="font-display text-lg font-bold text-[#35363A]">
                      Share Your Event Details
                    </h4>
                    <p className="text-xs text-[#35363A]/60">
                      Our catering team will respond with a tailored menu and pricing estimate.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#35363A]/70 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#F3E8D9] text-[#35363A] text-xs focus:outline-none focus:border-[#F69522] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#35363A]/70 mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#F3E8D9] text-[#35363A] text-xs focus:outline-none focus:border-[#F69522] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#35363A]/70 mb-1.5">
                        Event Type
                      </label>
                      <select
                        value={formData.eventType}
                        onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#F3E8D9] text-[#35363A] text-xs focus:outline-none focus:border-[#F69522] transition-colors"
                      >
                        <option>Catering & Celebrations (25+ Guests)</option>
                        <option>Corporate Lunch Boxes & Buffets</option>
                        <option>Weddings & Family Receptions</option>
                        <option>Private Birthday Parties</option>
                        <option>Manikonda Table Reservation</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#35363A]/70 mb-1.5">
                        Estimated Guests
                      </label>
                      <select
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#F3E8D9] text-[#35363A] text-xs focus:outline-none focus:border-[#F69522] transition-colors"
                      >
                        <option>20 — 50 Guests</option>
                        <option>50 — 100 Guests</option>
                        <option>100 — 300 Guests</option>
                        <option>300+ Guests</option>
                        <option>Table Reservation (2 to 10 Guests)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#35363A]/70 mb-1.5">
                      Planned Date & Food Preferences
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Share your planned date, venue area in Hyderabad, or any specific dishes..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#F3E8D9] text-[#35363A] text-xs focus:outline-none focus:border-[#F69522] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-[#F69522] text-white text-xs font-bold uppercase tracking-[0.18em] shadow-lg shadow-[#F69522]/20 hover:bg-[#EA2628] transition-all flex items-center justify-center gap-2 min-h-[44px]"
                  >
                    <span>Send Catering Enquiry</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>

        {/* Brand Awareness Notice */}
        <div className="mt-10 sm:mt-12 text-center text-xs text-[#35363A]/55 max-w-xl mx-auto leading-relaxed">
          <p>
            Hunger Stories is a dedicated multi-cuisine restaurant and catering brand. Deliveries are fulfilled through Swiggy, Zomato, Ownly, and direct WhatsApp concierge. No direct payments or food checkouts are processed on this site.
          </p>
        </div>

      </div>
    </section>
  );
}
