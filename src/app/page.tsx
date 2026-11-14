import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import BrandStory from '@/components/sections/BrandStory';
import CuisineDiscovery from '@/components/sections/CuisineDiscovery';
import FoodExperiences from '@/components/sections/FoodExperiences';
import Catering from '@/components/sections/Catering';
import Locations from '@/components/sections/Locations';
import Testimonials from '@/components/sections/Testimonials';
import FinalCTA from '@/components/sections/FinalCTA';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/ui/ScrollProgress';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFF8EF] text-[#35363A] flex flex-col selection:bg-[#F69522] selection:text-white">
      <ScrollProgress />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <BrandStory />
        <CuisineDiscovery />
        <FoodExperiences />
        <Catering />
        <Locations />
        <Testimonials />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
