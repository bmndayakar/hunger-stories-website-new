import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FinalCTA from '@/components/sections/FinalCTA';
import CateringPageSections from '@/components/sections/CateringPageSections';
import ScrollProgress from '@/components/ui/ScrollProgress';
import { StoryMotion } from '@/components/ui/StoryMotion';

export const metadata: Metadata = {
  title: 'Catering Services in Hyderabad | Hunger Stories',
  description:
    'Explore catering enquiries for corporate gatherings, weddings, traditional functions and private celebrations with Hunger Stories in Hyderabad.',
  keywords: [
    'catering services Hyderabad',
    'corporate catering Hyderabad',
    'office meal boxes Hyderabad',
    'wedding catering Hyderabad',
    'event catering Hyderabad',
  ],
  alternates: {
    canonical: '/catering/',
  },
  openGraph: {
    title: 'Catering Services in Hyderabad | Hunger Stories',
    description:
      'Food for corporate gatherings, weddings, traditional functions and private celebrations. Discuss your catering requirements with Hunger Stories.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Hunger Stories',
    images: [
      {
        url: '/images/food/catering-feast.jpg',
        alt: 'A food spread arranged for a shared meal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Catering Services in Hyderabad | Hunger Stories',
    description:
      'Discuss catering requirements for gatherings and celebrations in Hyderabad.',
    images: ['/images/food/catering-feast.jpg'],
  },
};

export default function CateringPage() {
  return (
    <StoryMotion>
      <div className="site-shell hs-catering-page">
        <a className="hs-skip-link" href="#main-content">Skip to content</a>
        <ScrollProgress />
        <Navbar />
        <main id="main-content">
          <CateringPageSections />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </StoryMotion>
  );
}
