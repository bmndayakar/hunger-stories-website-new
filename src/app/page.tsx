import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import BrandStory from '@/components/sections/BrandStory';
import CuisineDiscovery from '@/components/sections/CuisineDiscovery';
import ChefHighlights from '@/components/sections/ChefHighlights';
import FoodExperiences from '@/components/sections/FoodExperiences';
import Catering from '@/components/sections/Catering';
import Locations from '@/components/sections/Locations';
import FinalCTA from '@/components/sections/FinalCTA';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/ui/ScrollProgress';
import { StoryMotion } from '@/components/ui/StoryMotion';

export default function Home() {
  return (
    <StoryMotion>
      <div className="min-h-screen bg-[#FFF8EF] text-[#35363A] flex flex-col selection:bg-[#F69522] selection:text-white">
        <ScrollProgress />
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <BrandStory />
          <CuisineDiscovery />
          <ChefHighlights />
          <FoodExperiences />
          <Catering />
          <Locations />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </StoryMotion>
  );
}
