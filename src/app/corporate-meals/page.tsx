import type { Metadata } from 'next';
import SitePage from '@/components/layout/SitePage';
import CorporateMealsPageSections from '@/components/sections/CorporateMealsPageSections';

export const metadata: Metadata = {
  title: 'Corporate Meals & Office Catering in Hyderabad | Hunger Stories',
  description:
    'Discuss office lunches, corporate meal boxes, meeting meals and event food requirements with Hunger Stories in Hyderabad.',
  keywords: [
    'corporate catering in Hyderabad',
    'office meal boxes in Hyderabad',
    'corporate meals Hyderabad',
    'office lunch catering Hyderabad',
    'meeting catering Hyderabad',
  ],
  alternates: {
    canonical: '/corporate-meals/',
  },
  openGraph: {
    title: 'Corporate Meals & Office Catering in Hyderabad | Hunger Stories',
    description:
      'Discuss office meal and corporate event food requirements with Hunger Stories.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Hunger Stories',
    images: [
      {
        url: '/images/food/catering-feast.jpg',
        alt: 'Food spread from the Hunger Stories food portfolio',
      },
    ],
  },
};

export default function CorporateMealsPage() {
  return (
    <SitePage className="hs-corporate-page">
      <CorporateMealsPageSections />
    </SitePage>
  );
}
