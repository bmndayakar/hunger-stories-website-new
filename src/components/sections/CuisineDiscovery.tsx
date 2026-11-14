'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Autoplay, Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight, Sparkles, Flame, UtensilsCrossed } from 'lucide-react';

const cuisines = [
  {
    id: 'biryani',
    index: '01',
    title: 'Hyderabadi Dum Biryani',
    region: 'Nizami Heritage • Sealed Handi',
    headline: 'Slow-steamed basmati with tender cuts and saffron aromatics.',
    description: 'Long-grain basmati rice layered with marinated cuts and whole spices, sealed in clay handis and served piping hot with mirchi ka salan and dahi raita.',
    image: '/images/food/hero-biryani.jpg',
    method: 'Clay Handi Dum',
    aromatics: ['Shahi Saffron', 'Green Cardamom', 'Mace Flower', 'Desi Ghee'],
    dishes: ['Royal Mutton Dum Biryani', 'Kachhi Chicken Biryani', 'Saffron Subz Handi'],
  },
  {
    id: 'north-indian',
    index: '02',
    title: 'North Indian Classics',
    region: 'Rich Butter Gravies & Curries',
    headline: 'Velvety butter chicken and slow-simmered regional favourites.',
    description: 'Slow-cooked tomato gravies, clotted butter reductions, and rich paneer curries served alongside hot tandoori breads.',
    image: '/images/food/signature-chicken.jpg',
    method: 'Slow-Simmered Gravies',
    aromatics: ['Kasuri Methi', 'Fresh Churned Butter', 'Charred Garlic', 'Kashmiri Chili'],
    dishes: ['Purani Dilli Butter Chicken', '12-Hour Dal Makhani', 'Paneer Butter Masala'],
  },
  {
    id: 'tandoori',
    index: '03',
    title: 'Charcoal Tandoor & Grills',
    region: 'Smoky Clay Oven Skewers',
    headline: 'Live coconut charcoal embers yielding tender smoky char.',
    description: 'Soft paneer cubes, spiced seekh kebabs, and succulent chicken skewers marinated in yogurt and spices, fire-roasted to perfection.',
    image: '/images/food/signature-paneer.jpg',
    method: 'Live Charcoal Tandoor',
    aromatics: ['Yellow Mustard', 'Crushed Fenugreek', 'Smoked Cumin', 'Mint Reduction'],
    dishes: ['Paneer Tikka Angara', 'Murgh Malai Kebabs', 'Smoked Seekh Platter'],
  },
  {
    id: 'south-indian',
    index: '04',
    title: 'South Indian Coastal & Deccan',
    region: 'Guntur, Telangana & Rayalaseema',
    headline: 'Crisp golden dosas, fiery roasts and fragrant rice.',
    description: 'Spicy Andhra pepper chicken, fragrant bagara rice, and crisp golden ghee roasts tempered with fresh curry leaves and black pepper.',
    image: '/images/food/cuisine-south.jpg',
    method: 'Cast Iron Tawa & Fresh Tempering',
    aromatics: ['Fresh Curry Leaves', 'Guntur Peppercorns', 'Toasted Mustard', 'Pure Desi Ghee'],
    dishes: ['Andhra Pepper Fry', 'Bagara Rice Special', 'Golden Ghee Roast Dosa'],
  },
  {
    id: 'chinese',
    index: '05',
    title: 'Indo-Chinese Wok Art',
    region: 'High-Flame Wok Specials',
    headline: 'Tossed hakka noodles, fried rice, and fiery chili appetizers.',
    description: 'High-heat wok specials loaded with crisp scallions, scorched garlic noodles, and spicy schezwan gravies crafted from scratch.',
    image: '/images/food/cuisine-chinese.jpg',
    method: 'High-Flame Wok Toss',
    aromatics: ['Charred Scallion', 'Burnt Garlic Crisp', 'Sichuan Peppercorn', 'Dark Soy'],
    dishes: ['Crispy Chili Chicken', 'Burnt Garlic Noodles', 'Schezwan Tossed Wok'],
  },
];

export default function CuisineDiscovery() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelectTab = (idx: number) => {
    setActiveIndex(idx);
    swiperInstance?.slideTo(idx);
  };

  return (
    <section id="cuisines" className="relative py-20 sm:py-28 lg:py-36 bg-white text-[#35363A] overflow-hidden">
      {/* Decorative Warm Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#F3E8D9]/40 rounded-full blur-[140px] pointer-events-none -translate-x-1/2" />

      <div className="container-wide relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-[#35363A]/10 mb-10 sm:mb-14 lg:mb-20">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#F69522]" />
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.24em] text-[#F69522]">
              Menu Showcase • Explore Our Cuisines
            </span>
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-[#35363A]/50">
            5 Signature Food Styles
          </span>
        </div>

        {/* Header Block & Controls */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-end mb-8 sm:mb-12 lg:mb-16">
          <div className="lg:col-span-8 space-y-3 sm:space-y-4">
            <h2 className="font-display text-3xl xs:text-4xl sm:text-6xl lg:text-7xl font-bold text-[#35363A] leading-[1.08] tracking-tight">
              A World Of <br />
              <span className="font-editorial-italic font-normal text-[#35363A]/80">Exceptional </span>
              <span className="font-editorial-italic font-normal text-[#F69522]">Flavours.</span>
            </h2>
            <p className="font-body text-sm sm:text-lg text-[#35363A]/75 max-w-xl font-normal leading-relaxed">
              From fragrant slow-dum biryanis and clay-oven tandoori grills to comforting North Indian curries and high-flame wok specials — cooked fresh daily with authentic spices.
            </p>
          </div>

          {/* Navigation Controls & Counter */}
          <div className="lg:col-span-4 flex items-center justify-between lg:justify-end gap-6 pt-2 lg:pt-0">
            <div className="font-mono text-xs sm:text-sm tracking-widest text-[#35363A]/60">
              <span className="font-bold text-[#F69522]">0{activeIndex + 1}</span>
              <span className="mx-2 opacity-30">/</span>
              <span>0{cuisines.length}</span>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={() => swiperInstance?.slidePrev()}
                className="w-11 h-11 sm:w-12 sm:h-12 min-h-[44px] min-w-[44px] rounded-full border border-[#35363A]/20 flex items-center justify-center text-[#35363A] hover:bg-[#F69522] hover:border-[#F69522] hover:text-white transition-all duration-300 shadow-sm"
                aria-label="Previous Cuisine Slide"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={() => swiperInstance?.slideNext()}
                className="w-11 h-11 sm:w-12 sm:h-12 min-h-[44px] min-w-[44px] rounded-full border border-[#35363A]/20 flex items-center justify-center text-[#35363A] hover:bg-[#F69522] hover:border-[#F69522] hover:text-white transition-all duration-300 shadow-sm"
                aria-label="Next Cuisine Slide"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Tab Strip */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 sm:pb-4 mb-6 sm:mb-10 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
          {cuisines.map((c, idx) => (
            <button
              key={c.id}
              onClick={() => handleSelectTab(idx)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-[0.14em] sm:tracking-[0.16em] transition-all whitespace-nowrap shrink-0 ${
                activeIndex === idx
                  ? 'bg-[#35363A] text-white shadow-lg'
                  : 'bg-[#FFF8EF] text-[#35363A]/70 hover:text-[#35363A] border border-[#F3E8D9]'
              }`}
            >
              <span className="font-mono mr-1.5 text-[9px] sm:text-[10px] text-[#F69522]">{c.index}</span>
              {c.title}
            </button>
          ))}
        </div>

      </div>

      {/* Swiper Carousel with Asymmetrical Editorial Cards */}
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <Swiper
          modules={[Autoplay, Navigation]}
          onSwiper={setSwiperInstance}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          spaceBetween={16}
          slidesPerView={1.15}
          speed={700}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            640: { slidesPerView: 1.6, spaceBetween: 24 },
            1024: { slidesPerView: 2.3, spaceBetween: 32 },
            1400: { slidesPerView: 2.8, spaceBetween: 36 },
          }}
          className="!overflow-visible"
        >
          {cuisines.map((c) => (
            <SwiperSlide key={c.id} className="h-auto">
              <div className="group h-full flex flex-col rounded-3xl overflow-hidden bg-[#FFF8EF] border border-[#F3E8D9] shadow-sm hover:shadow-2xl transition-all duration-700">
                
                {/* Visual Frame */}
                <div className="relative h-64 sm:h-80 lg:h-96 w-full overflow-hidden bg-[#35363A]">
                  <Image
                    src={c.image}
                    alt={`${c.title} at Hunger Stories`}
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 36vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1f1715]/95 via-[#1f1715]/40 to-transparent" />
                  
                  {/* Top Bar with Method Badge & Number */}
                  <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 flex items-center justify-between">
                    <span className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-wider bg-white/95 text-[#35363A] shadow-md backdrop-blur-sm">
                      {c.method}
                    </span>
                    <span className="font-mono text-xs sm:text-sm font-bold text-white/90">
                      {c.index}
                    </span>
                  </div>

                  {/* Bottom Text Over Image */}
                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 text-white text-shadow-food">
                    <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.22em] text-[#F69522] mb-1">
                      {c.region}
                    </p>
                    <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold leading-tight">
                      {c.title}
                    </h3>
                  </div>
                </div>

                {/* Card Content & Aromatics Breakdown */}
                <div className="p-5 sm:p-8 flex-1 flex flex-col justify-between space-y-4 sm:space-y-6">
                  <div>
                    <p className="font-display text-sm sm:text-base font-semibold text-[#35363A] leading-snug mb-2 sm:mb-3">
                      &ldquo;{c.headline}&rdquo;
                    </p>
                    <p className="font-body text-xs sm:text-sm text-[#35363A]/75 leading-relaxed font-normal">
                      {c.description}
                    </p>
                  </div>

                  {/* Key Flavours Profile Pills */}
                  <div className="pt-4 border-t border-[#35363A]/10 space-y-3">
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-[#35363A]/50">
                      <Sparkles className="w-3.5 h-3.5 text-[#F69522]" />
                      <span>Key Flavours & Spices</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {c.aromatics.map((aroma) => (
                        <span
                          key={aroma}
                          className="text-[11px] font-medium px-3 py-1 rounded-full bg-white border border-[#35363A]/10 text-[#35363A]"
                        >
                          {aroma}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Featured Plates */}
                  <div className="pt-3 border-t border-[#35363A]/10">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#35363A]/50 mb-2">
                      Popular Dishes
                    </p>
                    <p className="text-xs text-[#35363A]/80 font-medium">
                      {c.dishes.join('  •  ')}
                    </p>
                  </div>

                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
