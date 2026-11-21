import FoodImage from '@/components/ui/FoodImage';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { siteConfig } from '@/lib/config';

export default function Locations() {
  const location = siteConfig.locations.tellapur;

  return (
    <section className="hs-section hs-location" id="locations" aria-labelledby="location-title">
      <div className="hs-container hs-location__inner">
        <div className="hs-location__image">
          <FoodImage
            src="/images/food/location-tellapur.jpg"
            alt="A kitchen scene with food preparation"
            fill
            sizes="(max-width: 800px) 100vw, 50vw"
          />
        </div>
        <div className="hs-location__copy">
          <p className="hs-eyebrow">Visit us · Hyderabad</p>
          <h2 id="location-title">One story, rooted in Tellapur.</h2>
          <p>
            Hunger Stories’ active business location is in Tellapur. There is
            no dine-in service; takeaway and delivery are available through
            external ordering channels.
          </p>
          <address>
            <MapPin aria-hidden="true" size={18} />
            <span>{location.address}</span>
          </address>
          <p className="hs-location__hours">
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
            Get directions
            <ArrowUpRight aria-hidden="true" size={16} />
          </a>
          <a className="hs-text-link" href="/contact/">
            Contact and ordering options
            <ArrowUpRight aria-hidden="true" size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
