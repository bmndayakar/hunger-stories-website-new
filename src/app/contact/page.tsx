import type { Metadata } from 'next';
import SitePage from '@/components/layout/SitePage';
import ContactPageSections from '@/components/sections/ContactPageSections';

export const metadata: Metadata = {
  title: 'Tellapur Location & Contact | Hunger Stories Hyderabad',
  description:
    'Find Hunger Stories in Tellapur, view verified operating hours and contact the team or use an external food ordering channel.',
  keywords: [
    'Hunger Stories Tellapur',
    'Hunger Stories contact',
    'food takeaway Tellapur',
    'Hunger Stories Hyderabad location',
  ],
  alternates: {
    canonical: '/contact/',
  },
  openGraph: {
    title: 'Tellapur Location & Contact | Hunger Stories Hyderabad',
    description:
      'Contact Hunger Stories, find the Tellapur location and choose an external ordering channel.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Hunger Stories',
    images: [
      {
        url: '/images/food/location-tellapur.jpg',
        alt: 'Food and kitchen photography',
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <SitePage className="hs-contact-page">
      <ContactPageSections />
    </SitePage>
  );
}
