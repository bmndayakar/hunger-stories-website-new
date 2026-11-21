import { ArrowUpRight, Mail, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl, siteConfig } from '@/lib/config';

const orderLinks = [
  { href: siteConfig.ordering.swiggy, label: 'Swiggy' },
  { href: siteConfig.ordering.zomato, label: 'Zomato' },
  { href: siteConfig.ordering.ownly, label: 'Ownly' },
  {
    href: getWhatsAppUrl(siteConfig.ordering.whatsappDefaultMessage),
    label: 'WhatsApp',
  },
];

export default function FinalCTA() {
  return (
    <section className="hs-final" id="contact" aria-labelledby="contact-title">
      <div className="hs-container hs-final__inner">
        <p className="hs-eyebrow hs-eyebrow--light">Your next food story starts here</p>
        <h2 id="contact-title">Planning a gathering? Let’s talk food.</h2>
        <p className="hs-final__lead">
          Tell us about your occasion, and let’s explore how Hunger Stories can
          be part of it.
        </p>
        <div className="hs-final__actions">
          <a className="hs-button hs-button--primary" href="/catering/#catering-enquiry">
            Request a Catering Quote
            <ArrowUpRight aria-hidden="true" size={17} />
          </a>
          <a
            className="hs-button hs-button--light-outline"
            href={getWhatsAppUrl(siteConfig.ordering.whatsappCateringMessage, 'catering')}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle aria-hidden="true" size={17} />
            Discuss on WhatsApp
          </a>
        </div>
        <a className="hs-final__email" href={siteConfig.contact.emailHref}>
          <Mail aria-hidden="true" size={16} />
          {siteConfig.contact.email}
        </a>
      </div>
      <div className="hs-final__orders">
        <div className="hs-container">
          <span>Looking for a meal?</span>
          <div>
            {orderLinks.map((link) => (
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
        </div>
      </div>
    </section>
  );
}
