import type { Metadata } from 'next';
import SitePage from '@/components/layout/SitePage';
import OurFoodPageSections from '@/components/sections/OurFoodPageSections';

export const metadata: Metadata = {
  title: 'Our Food & Cuisine Portfolio | Hunger Stories Hyderabad',
  description:
    'Explore the Hunger Stories multi-cuisine food portfolio, including Hyderabadi biryani, North Indian, South Indian and more.',
  keywords: [
    'Hyderabadi biryani',
    'multi-cuisine food Hyderabad',
    'North Indian food Hyderabad',
    'South Indian food Hyderabad',
    'Hunger Stories food',
  ],
  alternates: {
    canonical: '/our-food/',
  },
  openGraph: {
    title: 'Our Food & Cuisine Portfolio | Hunger Stories Hyderabad',
    description:
      'A visual portfolio of food and cuisine categories from Hunger Stories.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Hunger Stories',
    images: [
      {
        url: '/images/food/hero-biryani.jpg',
        alt: 'Biryani presented in a traditional serving pot',
      },
    ],
  },
};

export default function OurFoodPage() {
  return (
    <SitePage className="hs-our-food-page">
      <OurFoodPageSections />
    </SitePage>
  );
}
