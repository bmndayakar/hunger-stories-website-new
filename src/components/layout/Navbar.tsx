'use client';

import { useRef } from 'react';
import type { KeyboardEvent, MouseEvent } from 'react';
import { ArrowUpRight, ChevronDown, Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { getWhatsAppUrl, siteConfig } from '@/lib/config';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/catering/', label: 'Catering' },
  { href: '/corporate-meals/', label: 'Corporate Meals' },
  { href: '/our-food/', label: 'Our Food' },
  { href: '/our-story/', label: 'Our Story' },
  { href: '/contact/', label: 'Contact' },
];

const orderingLinks = [
  { href: siteConfig.ordering.zomato, label: 'Zomato' },
  { href: siteConfig.ordering.ownly, label: 'Ownly' },
  {
    href: getWhatsAppUrl(siteConfig.ordering.whatsappDefaultMessage),
    label: 'WhatsApp',
  },
  { href: siteConfig.ordering.swiggy, label: 'Swiggy' },
];

export default function Navbar() {
  const mobileMenuRef = useRef<HTMLDetailsElement>(null);

  const closeMobileMenu = (event: MouseEvent<HTMLAnchorElement>) => {
    if (event.currentTarget.closest('.hs-mobile-menu')) {
      mobileMenuRef.current?.removeAttribute('open');
    }
  };

  const handleMobileMenuKeyDown = (event: KeyboardEvent<HTMLDetailsElement>) => {
    if (event.key === 'Escape' && mobileMenuRef.current?.open) {
      event.preventDefault();
      mobileMenuRef.current.open = false;
      mobileMenuRef.current.querySelector('summary')?.focus();
    }
  };

  return (
    <header className="hs-header" id="top">
      <div className="hs-container hs-header__inner">
        <Link className="hs-header__brand" href="/" aria-label="Hunger Stories home">
          <Image
            src="/images/logo.png"
            alt="Hunger Stories — Every Flavour Has A Story"
            width={915}
            height={265}
            loading="eager"
          />
        </Link>

        <nav className="hs-header__nav" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <details className="hs-orders">
          <summary>
            Order food
            <ChevronDown aria-hidden="true" size={14} />
          </summary>
          <ul className="hs-orders__list">
            {orderingLinks.map((link) => (
              <li key={link.label}>
                <a
                  aria-label={link.label === 'WhatsApp' ? 'Order via WhatsApp' : `Order on ${link.label}`}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                  <ArrowUpRight aria-hidden="true" size={14} />
                </a>
              </li>
            ))}
          </ul>
        </details>

        <details
          className="hs-mobile-menu"
          ref={mobileMenuRef}
          onKeyDown={handleMobileMenuKeyDown}
        >
          <summary aria-label="Toggle navigation menu">
            <Menu aria-hidden="true" size={21} />
            <span className="hs-sr-only">Menu</span>
          </summary>
          <div className="hs-mobile-menu__panel">
            <nav aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={closeMobileMenu}>
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="hs-mobile-menu__orders">
              <p>Order through</p>
              {orderingLinks.map((link) => (
                <a
                  aria-label={link.label === 'WhatsApp' ? 'Order via WhatsApp' : `Order on ${link.label}`}
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobileMenu}
                >
                  {link.label}
                  <ArrowUpRight aria-hidden="true" size={14} />
                </a>
              ))}
            </div>
          </div>
        </details>

        <Link
          aria-label="Request a Catering Quote"
          className="hs-button hs-button--primary hs-header__cta"
          href="/catering/#catering-enquiry"
        >
          <span className="hs-header__cta-label-long">Request a Catering Quote</span>
          <span aria-hidden="true" className="hs-header__cta-label-short">Catering</span>
          <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </header>
  );
}
