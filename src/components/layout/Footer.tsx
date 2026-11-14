'use client';

import { MapPin, Phone, Mail, ChevronUp, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { siteConfig, getWhatsAppUrl } from '@/lib/config';

const footerNav = [
  { href: '#story', label: 'Our Story', index: '01' },
  { href: '#cuisines', label: 'Cuisines', index: '02' },
  { href: '#catering', label: 'Catering', index: '03' },
  { href: '#locations', label: 'Our Location', index: '04' },
  { href: '#contact', label: 'Contact', index: '05' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const dispatchDestinations = [
    { href: siteConfig.ordering.ownly, label: 'Order on Ownly' },
    { href: getWhatsAppUrl('Hi Hunger Stories, I would like to order fresh food from your kitchen'), label: 'Order on WhatsApp' },
    { href: siteConfig.ordering.zomato, label: 'Order on Zomato' },
    { href: siteConfig.ordering.swiggy, label: 'Order on Swiggy' },
  ];

  return (
    <footer className="bg-[#30231F] text-[#FFF8EF]/80 border-t border-white/10 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F69522]/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Footer Container */}
      <div className="container-wide py-16 sm:py-20 lg:py-28 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-14">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-6">
            <a href="#" className="inline-block" aria-label="Hunger Stories Home">
              <div className="relative w-52 h-14">
                <Image
                  src="/images/logo-light.png"
                  alt="Hunger Stories — Every Flavour Has A Story"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </a>
            
            <p className="font-body text-sm sm:text-base text-white/60 leading-relaxed max-w-sm font-normal">
              A craft multi-cuisine restaurant and catering kitchen in Hyderabad, India. Bringing people together through exceptional food, unforgettable flavours, and shared celebration tables.
            </p>

            <div className="pt-2">
              <p className="text-[10px] font-bold tracking-[0.24em] text-[#F69522] uppercase mb-4">
                Follow The Story
              </p>
              <div className="flex items-center gap-3">
                {/* Instagram */}
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-[#F69522] hover:border-[#F69522] hover:bg-white/5 transition-all duration-300"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-[#F69522] hover:border-[#F69522] hover:bg-white/5 transition-all duration-300"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.597 0 9 1.583 9 4.615V8z"/>
                  </svg>
                </a>

                {/* WhatsApp */}
                <a
                  href={getWhatsAppUrl('Hi Hunger Stories, I would like to get in touch')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-[#25D366] hover:border-[#25D366] hover:bg-white/5 transition-all duration-300"
                  aria-label="WhatsApp"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Navigation Sitemap */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-lg text-white mb-6">Explore</h4>
            <ul className="space-y-3">
              {footerNav.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 font-body text-xs uppercase tracking-wider text-white/60 hover:text-[#F69522] transition-colors duration-200"
                  >
                    <span className="font-mono text-[10px] text-[#F69522]/60 group-hover:text-[#F69522]">{link.index}</span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Online Ordering Channels */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-lg text-white mb-6">Order Online</h4>
            <ul className="space-y-3">
              {dispatchDestinations.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-1.5 font-body text-xs text-white/60 hover:text-[#F69522] transition-colors duration-200 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations & Contact Details */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-lg text-white mb-6">Our Location</h4>
            <ul className="space-y-4 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F69522] shrink-0 mt-0.5" />
                <div className="text-white/60">
                  <p className="text-white/90 font-bold">{siteConfig.locations.tellapur.name}</p>
                  <p>{siteConfig.locations.tellapur.address}</p>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F69522] shrink-0" />
                <a
                  href={siteConfig.contact.phoneHref}
                  className="text-white/60 hover:text-[#F69522] font-semibold transition-colors"
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#F69522] shrink-0" />
                <a
                  href={siteConfig.contact.emailHref}
                  className="text-white/60 hover:text-[#F69522] transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 relative z-10">
        <div className="container-wide py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-white/40">
            © 2024–2026 Hunger Stories. All rights reserved.
          </p>
          <p className="font-display italic text-xs tracking-wider text-white/50">
            Every Flavour Has A Story.
          </p>
          <button
            onClick={scrollToTop}
            className="w-11 h-11 min-h-[44px] min-w-[44px] rounded-full border border-white/20 flex items-center justify-center hover:border-[#F69522] hover:bg-[#F69522] transition-all duration-300 group"
            aria-label="Scroll back to top"
          >
            <ChevronUp className="w-5 h-5 group-hover:text-white" />
          </button>
        </div>
      </div>
    </footer>
  );
}
