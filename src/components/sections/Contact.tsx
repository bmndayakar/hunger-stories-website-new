'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, CheckCircle2, Sparkles } from 'lucide-react';
import { siteConfig, getWhatsAppUrl } from '@/lib/config';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    format: 'Catering Banquet (50—2,000 Couverts)',
    guests: '50 - 100 Guests',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-32 lg:py-44 bg-[#F3E8D9]/30 text-[#35363A] overflow-hidden border-t border-[#35363A]/10">
      <div className="container-wide relative z-10">
        
        {/* Section Chapter Marker */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#35363A]/10 mb-16 lg:mb-24">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#F69522]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#F69522]">
              Hospitality Desk • Banquet Concierge
            </span>
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-[#35363A]/40">
            Tellapur & Manikonda Enquiries
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Direct Inquiries & Brand Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="font-display text-4xl sm:text-6xl font-bold text-[#35363A] leading-[1.08] tracking-tight mb-6">
                Let&apos;s Craft <br />
                <span className="font-editorial-italic font-normal text-[#35363A]/80">Your Next </span>
                <span className="font-editorial-italic font-normal text-[#EA2628]">Gathering.</span>
              </h2>

              <p className="font-body text-base text-[#35363A]/70 leading-relaxed font-normal">
                Whether organizing a 2,000-guest wedding banquet, corporate lunch boxes for your tech campus, or reserving a private dining table in Manikonda, our banquet captains are at your service.
              </p>
            </div>

            {/* Direct Channels Cards */}
            <div className="space-y-4">
              <a
                href={siteConfig.contact.phoneHref}
                className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-[#F3E8D9] shadow-sm hover:border-[#F69522] transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FFF8EF] border border-[#F69522]/20 flex items-center justify-center text-[#F69522] group-hover:bg-[#F69522] group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#35363A]/50">Direct Hotline</span>
                  <p className="font-body text-base font-bold text-[#35363A] group-hover:text-[#F69522] transition-colors">
                    {siteConfig.contact.phoneDisplay}
                  </p>
                </div>
              </a>

              <a
                href={getWhatsAppUrl(siteConfig.ordering.whatsappCateringMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-[#F3E8D9] shadow-sm hover:border-[#25D366] transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FFF8EF] border border-[#25D366]/20 flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#35363A]/50">WhatsApp Concierge</span>
                  <p className="font-body text-base font-bold text-[#35363A] group-hover:text-[#25D366] transition-colors">
                    Instant Kitchen Chat Response
                  </p>
                </div>
              </a>

              <a
                href={siteConfig.contact.emailHref}
                className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-[#F3E8D9] shadow-sm hover:border-[#F69522] transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FFF8EF] border border-[#F69522]/20 flex items-center justify-center text-[#F69522] group-hover:bg-[#F69522] group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#35363A]/50">Executive Email</span>
                  <p className="font-body text-base font-bold text-[#35363A] group-hover:text-[#F69522] transition-colors">
                    {siteConfig.contact.email}
                  </p>
                </div>
              </a>
            </div>

            {/* Operating Times Pill */}
            <div className="p-6 rounded-2xl bg-[#FFF8EF] border border-[#F3E8D9] space-y-1">
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-[#F69522]">
                <Clock className="w-3.5 h-3.5" />
                <span>Kitchen Operating Hours</span>
              </div>
              <p className="text-sm font-semibold text-[#35363A]">
                11:30 AM – 11:30 PM Daily
              </p>
              <p className="text-xs text-[#35363A]/60">
                Manikonda Dine-In Restaurant & Tellapur Dispatch Hub
              </p>
            </div>
          </div>

          {/* Right Column: High-Touch Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#F3E8D9] shadow-2xl">
              <div className="mb-8">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#F69522]">
                  Direct Chef & Banquet Coordination
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#35363A] mt-1">
                  Send A Banquet or Table Enquiry
                </h3>
              </div>

              {submitted ? (
                <div className="py-12 px-6 rounded-2xl bg-[#FFF8EF] border border-[#F69522]/30 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#F69522] text-white flex items-center justify-center mx-auto shadow-lg shadow-[#F69522]/30">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="font-display text-2xl font-bold text-[#35363A]">
                    Enquiry Forwarded to Banquet Desk
                  </h4>
                  <p className="text-sm text-[#35363A]/70 max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.name}. Our culinary coordinator will review your guest requirements and reach out directly at {formData.phone || 'your provided contact'}.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold uppercase tracking-wider text-[#F69522] hover:underline pt-2 block mx-auto"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#35363A]/70 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Varma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#FFF8EF] border border-[#F3E8D9] text-[#35363A] text-sm focus:outline-none focus:border-[#F69522] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#35363A]/70 mb-2">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#FFF8EF] border border-[#F3E8D9] text-[#35363A] text-sm focus:outline-none focus:border-[#F69522] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#35363A]/70 mb-2">
                        Event Format
                      </label>
                      <select
                        value={formData.format}
                        onChange={(e) => setFormData({ ...formData, format: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#FFF8EF] border border-[#F3E8D9] text-[#35363A] text-sm focus:outline-none focus:border-[#F69522] transition-colors"
                      >
                        <option>Catering Banquet (50—2,000 Couverts)</option>
                        <option>Corporate Executive Meal Boxes</option>
                        <option>Weddings & Nizam Receptions</option>
                        <option>Intimate House Party (20–80 Guests)</option>
                        <option>Manikonda Table Reservation</option>
                        <option>General Feedback / Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#35363A]/70 mb-2">
                        Estimated Couverts (Guests)
                      </label>
                      <select
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#FFF8EF] border border-[#F3E8D9] text-[#35363A] text-sm focus:outline-none focus:border-[#F69522] transition-colors"
                      >
                        <option>20 — 50 Guests</option>
                        <option>50 — 100 Guests</option>
                        <option>100 — 300 Guests</option>
                        <option>300 — 1,000+ Guests</option>
                        <option>Table Reservation (2 to 12 Guests)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#35363A]/70 mb-2">
                      Event Date & Menu Desires
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Share event dates, venue location in Hyderabad, or dishes you love..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#FFF8EF] border border-[#F3E8D9] text-[#35363A] text-sm focus:outline-none focus:border-[#F69522] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-[#F69522] text-white text-xs font-bold uppercase tracking-[0.2em] shadow-xl shadow-[#F69522]/30 hover:bg-[#EA2628] hover:shadow-[#EA2628]/40 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-3"
                  >
                    <span>Transmit Banquet Enquiry</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
