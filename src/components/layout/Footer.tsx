import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { getWhatsAppUrl, siteConfig } from '@/lib/config';

const footerNav = [
  { href: '/', label: 'Home' },
  { href: '/catering/', label: 'Catering' },
  { href: '/corporate-meals/', label: 'Corporate Meals' },
  { href: '/our-food/', label: 'Our Food' },
  { href: '/our-story/', label: 'Our Story' },
  { href: '/contact/', label: 'Contact' },
];

const orderingDestinations = [
  { href: siteConfig.ordering.zomato, label: 'Zomato' },
  { href: siteConfig.ordering.ownly, label: 'Ownly' },
  {
    href: getWhatsAppUrl(siteConfig.ordering.whatsappDefaultMessage),
    label: 'WhatsApp',
  },
  { href: siteConfig.ordering.swiggy, label: 'Swiggy' },
];

export default function Footer() {
  return (
    <footer className="hs-footer">
      <div className="hs-container hs-footer__main">
        <div className="hs-footer__brand">
          <Link href="/" aria-label="Hunger Stories home">
            <Image
              src="/images/logo-light.png"
              alt="Hunger Stories — Every Flavour Has A Story"
              width={915}
              height={265}
            />
          </Link>
          <p>Every Flavour Has A Story.</p>
          <span>Multi-cuisine food for gatherings and catering enquiries.</span>
        </div>

        <nav className="hs-footer__nav" aria-label="Footer navigation">
          <h2>Explore</h2>
          {footerNav.map((link) => (
            <Link key={link.href} href={link.href}>{link.label}</Link>
          ))}
        </nav>

        <div className="hs-footer__orders">
          <h2>Order externally</h2>
          {orderingDestinations.map((link) => (
            <a
              key={link.label}
              aria-label={link.label === 'WhatsApp' ? 'Order via WhatsApp' : `Order on ${link.label}`}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
              <ArrowUpRight aria-hidden="true" size={14} />
            </a>
          ))}
        </div>

        <address className="hs-footer__contact">
          <h2>Tellapur</h2>
          <p><MapPin aria-hidden="true" size={15} />{siteConfig.locations.tellapur.address}</p>
          <a href={siteConfig.contact.phoneHref}>
            <Phone aria-hidden="true" size={15} />
            {siteConfig.contact.phoneDisplay}
          </a>
          <a href={siteConfig.contact.cateringPhoneHref}>
            <Phone aria-hidden="true" size={15} />
            Catering: {siteConfig.contact.cateringPhoneDisplay}
          </a>
          <a href={siteConfig.contact.emailHref}>
            <Mail aria-hidden="true" size={15} />
            {siteConfig.contact.email}
          </a>
          <a href={siteConfig.locations.tellapur.mapHref} target="_blank" rel="noopener noreferrer">
            Get directions
            <ArrowUpRight aria-hidden="true" size={14} />
          </a>
        </address>
      </div>
      <div className="hs-footer__bottom">
        <div className="hs-container">
          <span>© 2024–2026 Hunger Stories</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
