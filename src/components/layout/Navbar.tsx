'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Phone, Clock } from 'lucide-react';
import Image from 'next/image';
import { siteConfig } from '@/lib/config';

const navLinks = [
  { href: '#story', label: 'Our Story', index: '01' },
  { href: '#cuisines', label: 'Cuisines', index: '02' },
  { href: '#catering', label: 'Catering', index: '03' },
  { href: '#locations', label: 'Our Location', index: '04' },
  { href: '#contact', label: 'Contact', index: '05' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') setIsMobileMenuOpen(false);
      };
      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        document.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isMobileMenuOpen
            ? 'bg-transparent py-4 border-transparent shadow-none'
            : isScrolled
            ? 'bg-[#FFF8EF]/95 backdrop-blur-xl border-b border-[#35363A]/10 shadow-[0_4px_30px_rgba(53,54,58,0.04)] py-3.5'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
        }`}
      >
        <div className="container-wide flex items-center justify-between">
          
          {/* Left Brand Unit with Heritage Edition Tag */}
          <div className="flex items-center gap-4 lg:gap-6">
            <a href="#" className="relative z-50 flex items-center group" aria-label="Hunger Stories Home">
              <div className="relative h-10 md:h-12 w-44 md:w-52 transition-transform duration-300 group-hover:scale-[1.02]">
                <Image
                  src={isMobileMenuOpen || !isScrolled ? "/images/logo-light.png" : "/images/logo.png"}
                  alt="Hunger Stories — Every Flavour Has A Story"
                  fill
                  priority
                  className="object-contain object-left"
                />
              </div>
            </a>

            <div className={`hidden 2xl:block pl-6 border-l transition-colors ${
              isScrolled ? 'border-[#35363A]/15 text-[#35363A]/60' : 'border-white/20 text-white/50'
            }`}>
              <p className="text-[10px] uppercase tracking-[0.25em] font-semibold">
                Hyderabad • Est. 2024
              </p>
              <p className="text-[9px] uppercase tracking-[0.18em] opacity-80">
                Tellapur Kitchen
              </p>
            </div>
          </div>

          {/* Desktop Editorial Navigation */}
          <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-4 xl:gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative group py-1 text-xs font-semibold uppercase tracking-[0.16em] transition-colors duration-300 ${
                  isScrolled ? 'text-[#35363A]/80 hover:text-[#F69522]' : 'text-white/85 hover:text-[#F69522]'
                }`}
              >
                <span className="text-[9px] font-mono mr-1.5 opacity-50 group-hover:text-[#F69522] group-hover:opacity-100 transition-opacity">
                  {link.index}
                </span>
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#F69522] group-hover:w-full transition-all duration-300 ease-out" />
              </a>
            ))}
          </nav>

          {/* Quick Contact Hotline & Order Online CTA */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href={siteConfig.contact.phoneHref}
              className={`hidden xl:flex items-center gap-2 text-xs font-semibold tracking-wider uppercase transition-colors duration-300 ${
                isScrolled ? 'text-[#35363A]/70 hover:text-[#F69522]' : 'text-white/80 hover:text-[#F69522]'
              }`}
            >
              <Phone className="w-3.5 h-3.5 text-[#F69522]" />
              <span>{siteConfig.contact.phoneDisplay}</span>
            </a>

            <a
              href="#order"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#F69522] text-white text-xs font-bold uppercase tracking-[0.15em] shadow-lg shadow-[#F69522]/20 hover:bg-[#EA2628] hover:shadow-[#EA2628]/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span>Order Online</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`relative z-50 lg:hidden min-h-[44px] min-w-[44px] p-2 rounded-xl flex items-center justify-center transition-colors ${
              isMobileMenuOpen || !isScrolled
                ? 'text-white hover:bg-white/10'
                : 'text-[#35363A] hover:bg-[#35363A]/5'
            }`}
            aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </header>

      {/* Full-Screen Luxury Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
            animate={{ opacity: 1, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
            exit={{ opacity: 0, clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#30231F] text-[#FFF8EF] flex flex-col justify-between p-6 sm:p-10 pt-28 pb-10 overflow-y-auto"
          >
            {/* Background Texture & Ambient Glow */}
            <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#F69522]/10 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="relative z-10 space-y-8">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#F69522]">
                  Hunger Stories • Hyderabad
                </span>
                <span className="text-[10px] uppercase tracking-widest text-white/40">
                  Hyderabad • 2024
                </span>
              </div>

              {/* Navigation Links with Staggered Entrance */}
              <nav className="flex flex-col gap-5">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: -25 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.06, duration: 0.4 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="group flex items-baseline justify-between py-2 border-b border-white/5 hover:border-[#F69522]/40 transition-colors"
                  >
                    <span className="font-display text-2xl sm:text-3xl font-bold tracking-tight group-hover:text-[#F69522] transition-colors">
                      {link.label}
                    </span>
                    <span className="font-mono text-xs text-[#F69522]/70 tracking-widest">
                      {link.index}
                    </span>
                  </motion.a>
                ))}
              </nav>
            </div>

            {/* Mobile Drawer Footer Actions */}
            <div className="relative z-10 space-y-6 pt-8 border-t border-white/10">
              <a
                href="#order"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-3 py-4 rounded-full bg-[#F69522] text-white font-body text-xs font-bold uppercase tracking-[0.2em] shadow-xl shadow-[#F69522]/20"
              >
                <span>Order Online • Direct & Delivery</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <div className="grid grid-cols-2 gap-4 text-xs text-white/60 pt-2">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#F69522] font-semibold mb-1">Direct Hotline</p>
                  <a href={siteConfig.contact.phoneHref} className="hover:text-white transition-colors">
                    {siteConfig.contact.phoneDisplay}
                  </a>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#F69522] font-semibold mb-1">Operating Hours</p>
                  <p>{siteConfig.contact.hours}</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
