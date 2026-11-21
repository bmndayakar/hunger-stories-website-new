import FoodImage from '@/components/ui/FoodImage';
import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
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

function LocationHero() {
  const location = siteConfig.locations.tellapur;

  return (
    <section className="hs-support-hero hs-contact-page__hero" aria-labelledby="contact-page-title">
      <div className="hs-container hs-support-hero__layout">
        <div className="hs-support-hero__copy">
          <p className="hs-eyebrow">Locations · Contact</p>
          <h1 id="contact-page-title">
            Find us in
            <br />
            <em>Tellapur.</em>
          </h1>
          <p className="hs-support-hero__lead">
            One active business location, with takeaway and delivery ordering
            through external channels.
          </p>
          <a
            className="hs-button hs-button--primary hs-button--editorial"
            href={location.mapHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get directions
            <ArrowUpRight aria-hidden="true" size={16} />
          </a>
        </div>
        <figure className="hs-support-hero__image">
          <FoodImage
            src="/images/food/location-tellapur.jpg"
            alt="A kitchen scene with food preparation"
            fill
            loading="eager"
            sizes="(max-width: 760px) 100vw, 56vw"
          />
          <figcaption>Food and kitchen photography</figcaption>
        </figure>
      </div>
    </section>
  );
}

function ContactDetails() {
  const location = siteConfig.locations.tellapur;

  return (
    <section className="hs-section hs-contact-details" aria-labelledby="contact-details-title">
      <div className="hs-container hs-contact-details__layout">
        <div className="hs-contact-details__location">
          <p className="hs-eyebrow">The active location</p>
          <h2 id="contact-details-title">{location.name}</h2>
          <address>
            <MapPin aria-hidden="true" size={18} />
            <span>{location.address}</span>
          </address>
          <p>{location.serviceFormat}</p>
          <p>
            {siteConfig.contact.operatingDays}
            <br />
            {siteConfig.contact.hours}
          </p>
          <a
            className="hs-text-link"
            href={location.mapHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open directions
            <ArrowUpRight aria-hidden="true" size={15} />
          </a>
        </div>
        <div className="hs-contact-details__channels">
          <p className="hs-eyebrow">Talk to Hunger Stories</p>
          <h2>Choose the right way to reach us.</h2>
          <a href={siteConfig.contact.phoneHref}>
            <Phone aria-hidden="true" size={17} />
            <span>{siteConfig.contact.phoneDisplay}</span>
          </a>
          <a href={siteConfig.contact.cateringPhoneHref}>
            <Phone aria-hidden="true" size={17} />
            <span>Catering · {siteConfig.contact.cateringPhoneDisplay}</span>
          </a>
          <a
            href={getWhatsAppUrl(siteConfig.ordering.whatsappDefaultMessage)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle aria-hidden="true" size={17} />
            <span>WhatsApp for food orders</span>
            <ArrowUpRight aria-hidden="true" size={14} />
          </a>
          <a
            aria-label="WhatsApp the catering team"
            href={getWhatsAppUrl(siteConfig.ordering.whatsappCateringMessage, 'catering')}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle aria-hidden="true" size={17} />
            <span>WhatsApp for catering enquiries</span>
            <ArrowUpRight aria-hidden="true" size={14} />
          </a>
          <a href={siteConfig.contact.emailHref}>
            <Mail aria-hidden="true" size={17} />
            <span>{siteConfig.contact.email}</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function ExternalOrdering() {
  return (
    <section className="hs-contact-ordering" aria-labelledby="contact-ordering-title">
      <div className="hs-container hs-contact-ordering__inner">
        <div>
          <p className="hs-eyebrow">External ordering</p>
          <h2 id="contact-ordering-title">Order through the approved channels.</h2>
          <p>Takeaway and delivery; no dine-in service.</p>
        </div>
        <div className="hs-contact-ordering__links">
          {orderLinks.map((link) => (
            <a
              key={link.label}
              aria-label={link.label === 'WhatsApp' ? 'Order via WhatsApp' : `Order on ${link.label}`}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
              <ArrowUpRight aria-hidden="true" size={16} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ContactPageSections() {
  return (
    <>
      <LocationHero />
      <ContactDetails />
      <ExternalOrdering />
    </>
  );
}
