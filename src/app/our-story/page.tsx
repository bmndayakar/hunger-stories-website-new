import type { Metadata } from 'next';
import SitePage from '@/components/layout/SitePage';
import OurStoryPageSections from '@/components/sections/OurStoryPageSections';

export const metadata: Metadata = {
  title: 'Our Story | Hunger Stories Hyderabad',
  description:
    'Learn about Hunger Stories, a Hyderabad-based multi-cuisine food and catering brand established in 2024. Every Flavour Has A Story.',
  keywords: [
    'Hunger Stories Hyderabad',
    'Hunger Stories catering',
    'Hunger Stories food brand',
  ],
  alternates: {
    canonical: '/our-story/',
  },
  openGraph: {
    title: 'Our Story | Hunger Stories Hyderabad',
    description:
      'A Hyderabad-based, multi-cuisine food and catering brand established in 2024.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Hunger Stories',
    images: [
      {
        url: '/images/food/craft-spices.jpg',
        alt: 'Spices and ingredients arranged for cooking',
      },
    ],
  },
};

export default function OurStoryPage() {
  return (
    <SitePage className="hs-our-story-page">
      <OurStoryPageSections />
    </SitePage>
  );
}
