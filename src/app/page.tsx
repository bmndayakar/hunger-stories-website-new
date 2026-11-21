import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import BrandStory from '@/components/sections/BrandStory';
import CuisineDiscovery from '@/components/sections/CuisineDiscovery';
import FoodExperiences from '@/components/sections/FoodExperiences';
import Catering from '@/components/sections/Catering';
import Locations from '@/components/sections/Locations';
import HungerStoriesExperience from '@/components/sections/HungerStoriesExperience';
import FinalCTA from '@/components/sections/FinalCTA';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/ui/ScrollProgress';
import { StoryMotion } from '@/components/ui/StoryMotion';

export default function Home() {
  return (
    <StoryMotion>
      <div className="site-shell">
        <a className="hs-skip-link" href="#main-content">Skip to content</a>
        <ScrollProgress />
        <Navbar />
        <main id="main-content">
          <Hero />
          <Catering />
          <HungerStoriesExperience />
          <CuisineDiscovery />
          <FoodExperiences />
          <BrandStory />
          <Locations />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </StoryMotion>
  );
}
