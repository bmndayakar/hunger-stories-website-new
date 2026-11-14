'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Phone, Mail, MessageCircle, Send, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import { siteConfig, getWhatsAppUrl } from '@/lib/config';

export default function FinalCTA() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    format: 'Catering & Celebrations (25+ Guests)',
    guests: '50 - 100 Guests',
    message: '',
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
      description: 'Order your favourite biryanis, tandoori starters, and North Indian curries delivered hot via Swiggy.',
      href: siteConfig.ordering.swiggy,
      actionText: 'Order on Swiggy',
      hoverBorder: 'hover:border-[#FC8019]',
    },
    {
      name: 'Zomato',
      platform: 'Delivery & Dining',
      tag: 'Top Rated Hyderabad',
      badgeClass: 'bg-[#E23744] text-white',
      description: 'Browse verified food photos, read reviews, and order fresh food directly on Zomato.',
      href: siteConfig.ordering.zomato,
      actionText: 'Order on Zomato',
      hoverBorder: 'hover:border-[#E23744]',
    },
    {
      name: 'Ownly',
      platform: 'Direct Kitchen Portal',
      tag: 'Direct Dispatch',
      badgeClass: 'bg-[#F69522] text-white',
      description: 'Order directly from our kitchen portal for freshly prepared food dispatched to your location.',
      href: siteConfig.ordering.ownly,
      actionText: 'Order on Ownly',
      hoverBorder: 'hover:border-[#F69522]',
    },
    {
      name: 'WhatsApp',
      platform: 'Direct Kitchen Chat',
      tag: 'Instant Chat',
      badgeClass: 'bg-[#25D366] text-white',
      description: 'Chat with our team for quick orders, party platters, and custom catering requests.',
      href: getWhatsAppUrl('Hi Hunger Stories, I would like to order fresh food from your Tellapur kitchen'),
      actionText: 'Chat on WhatsApp',
      hoverBorder: 'hover:border-[#25D366]',
    },
  ];

  return (
    <section id="order" className="relative py-32 lg:py-44 bg-[#FFF8EF] text-[#35363A] overflow-hidden border-t border-[#35363A]/10">
      {/* Anchor alias for #contact */}
      <div id="contact" className="sr-only" />

      {/* Decorative Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#F3E8D9]/70 rounded-full blur-[160px] pointer-events-none" />

      <div className="container-wide relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#35363A]/10 mb-16 lg:mb-24">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#F69522]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#F69522]">
              Order Online • Delivery & Catering
            </span>
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-[#35363A]/40">
            Tellapur & Manikonda Service
          </span>
        </div>

        {/* Master Headline Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold text-[#35363A] leading-[1.06] tracking-tight mb-6">
            Your Next Food Story <br />
            <span className="font-editorial-italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#F69522] via-[#F69522] to-[#EA2628]">
              Starts Here.
            </span>
          </h2>

          <p className="font-body text-base sm:text-lg text-[#35363A]/70 leading-relaxed font-normal max-w-xl mx-auto">
            Choose your preferred ordering platform below. Every order is freshly prepared upon confirmation and delivered steaming hot.
          </p>
        </div>

        {/* 4 Prominent External Channel Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {channels.map((ch, idx) => (
            <motion.a
              key={ch.name}
              href={ch.href}
              target="_blank"
              rel="noopener noreferrer"
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

        {/* Combined Event & Catering Touchpoint (Eliminates separate repetitive section) */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-14 border border-[#F3E8D9] shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Narrative & Direct Channels */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#F69522]">
                  Catering & Group Gatherings
                </span>
                <h3 className="font-display text-3xl sm:text-4xl font-bold text-[#35363A] mt-2">
                  Planning an Event or Large Order?
                </h3>
              </div>

              <p className="font-body text-sm sm:text-base text-[#35363A]/70 leading-relaxed font-normal">
                Whether you need packed meal boxes for an office lunch or full-service catering for a wedding or milestone birthday, our team is ready to help.
              </p>

              <div className="pt-2 space-y-3">
                <a
                  href={siteConfig.contact.phoneHref}
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#FFF8EF] border border-[#F3E8D9] hover:border-[#F69522] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-white border border-[#F69522]/20 flex items-center justify-center text-[#F69522] group-hover:bg-[#F69522] group-hover:text-white transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#35363A]/50">Call Directly</span>
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
                  <div className="w-10 h-10 rounded-lg bg-white border border-[#25D366]/20 flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#35363A]/50">WhatsApp Concierge</span>
                    <p className="text-sm font-bold text-[#35363A] group-hover:text-[#25D366] transition-colors">
                      Instant Chat with Our Team
                    </p>
                  </div>
                </a>

                <a
                  href={siteConfig.contact.emailHref}
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#FFF8EF] border border-[#F3E8D9] hover:border-[#F69522] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-white border border-[#F69522]/20 flex items-center justify-center text-[#F69522] group-hover:bg-[#F69522] group-hover:text-white transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#35363A]/50">Email</span>
                    <p className="text-sm font-bold text-[#35363A] group-hover:text-[#F69522] transition-colors">
                      {siteConfig.contact.email}
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Quick Inquiry Form */}
            <div className="lg:col-span-7 bg-[#FFF8EF] p-6 sm:p-8 rounded-2xl border border-[#F3E8D9]">
              {formSubmitted ? (
                <div className="py-10 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#F69522] text-white flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-display text-xl font-bold text-[#35363A]">
                    Enquiry Received!
                  </h4>
                  <p className="text-xs text-[#35363A]/70 max-w-sm mx-auto leading-relaxed">
                    Thank you, {formData.name}. Our catering manager will contact you directly at {formData.phone || 'your phone number'}.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs font-bold text-[#F69522] hover:underline pt-2 block mx-auto"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
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
                        value={formData.format}
                        onChange={(e) => setFormData({ ...formData, format: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#F3E8D9] text-[#35363A] text-xs focus:outline-none focus:border-[#F69522] transition-colors"
                      >
                        <option>Catering & Celebrations (25+ Guests)</option>
                        <option>Corporate Lunch Boxes & Buffets</option>
                        <option>Weddings & Family Celebrations</option>
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
                      Event Date & Food Preferences
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Share your planned date, venue area in Hyderabad, or dishes you'd like..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#F3E8D9] text-[#35363A] text-xs focus:outline-none focus:border-[#F69522] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-[#F69522] text-white text-xs font-bold uppercase tracking-[0.18em] shadow-lg shadow-[#F69522]/20 hover:bg-[#EA2628] transition-all flex items-center justify-center gap-2"
                  >
                    <span>Send Event Enquiry</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>

        {/* Brand Awareness Notice */}
        <div className="mt-14 text-center text-xs text-[#35363A]/50 max-w-lg mx-auto">
          <p>
            Hunger Stories is a dedicated multi-cuisine restaurant and catering brand. Deliveries are fulfilled through Swiggy, Zomato, Ownly, and direct WhatsApp concierge.
          </p>
        </div>

      </div>
    </section>
  );
}
