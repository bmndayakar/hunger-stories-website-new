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
    headline: 'Slow-steamed basmati with saffron streams and dough seal.',
    description: 'Aged long-grain rice, whole roasted garam masalas, and tender cuts simmered under a sealed wheat-dough boundary over gentle coal embers. Served with artisanal mirchi ka salan and dahi raita.',
    image: '/images/food/hero-biryani.jpg',
    method: '180-Minute Clay Handi Dum',
    aromatics: ['Shahi Saffron', 'Green Cardamom', 'Mace Flower', 'Desi Ghee'],
    dishes: ['Royal Mutton Dum Handi', 'Kachhi Chicken Biryani', 'Saffron Subz Handi'],
  },
  {
    id: 'north-indian',
    index: '02',
    title: 'North Indian Classics',
    region: 'Purani Dilli & Awadh Traditions',
    headline: 'Velvety makhani reductions and slow-simmered gravies.',
    description: 'Slow-cooked tomatoes, cashew reductions, churned white butter, and fenugreek leaves meet smoky tandoori naans straight from clay walls heated to 400°C.',
    image: '/images/food/signature-chicken.jpg',
    method: 'Simmered in Heavy Bottom Degchis',
    aromatics: ['Kasuri Methi', 'Fresh Churned Butter', 'Charred Garlic', 'Kashmiri Chili'],
    dishes: ['Purani Dilli Butter Chicken', '12-Hour Dal Makhani', 'Shahi Paneer Lababdar'],
  },
  {
    id: 'tandoori',
    index: '03',
    title: 'Charcoal Tandoor & Grills',
    region: 'Northwest Frontier Skewers',
    headline: 'Live coconut charcoal embers yielding tender smoky char.',
    description: 'Velvety malai paneer, seasoned seekh kebabs, and whole spiced chicken skewers steeped in mustard oil and hung yogurt, fire-roasted to succulent charred perfection.',
    image: '/images/food/signature-paneer.jpg',
    method: 'Live Clay Oven at 400°C',
    aromatics: ['Yellow Mustard', 'Crushed Fenugreek', 'Smoked Cumin', 'Mint Reduction'],
    dishes: ['Paneer Tikka Angara', 'Murgh Malai Kebabs', 'Smoked Seekh Platter'],
  },
  {
    id: 'south-indian',
    index: '04',
    title: 'South Indian Coastal & Deccan',
    region: 'Guntur, Telangana & Rayalaseema',
    headline: 'Crisp golden dosas, fiery roasts and coconut gravies.',
    description: 'Fiery Andhra pepper chicken, fragrant bagara rice, crisp golden ghee roasts, and coconut-tempered seafood preparations cooked with fresh curry leaves and stone-crushed peppercorns.',
    image: '/images/food/cuisine-south.jpg',
    method: 'Cast Iron Tawa & Kadai Tempering',
    aromatics: ['Fresh Curry Leaves', 'Guntur Peppercorns', 'Toasted Mustard', 'Pure Desi Ghee'],
    dishes: ['Andhra Pepper Fry', 'Bagara Rice Special', 'Golden Ghee Roast Dosa'],
  },
  {
    id: 'chinese',
    index: '05',
    title: 'Indo-Chinese Wok Art',
    region: 'Tangra Wok Heritage',
    headline: 'High-flame wok toss with charred garlic and fiery chilies.',
    description: 'Intense high-temperature wok execution yielding crisp scallions, tossed hakka noodles, scorched garlic fried rice, and tangy schezwan reductions crafted from scratch.',
    image: '/images/food/cuisine-chinese.jpg',
    method: 'High-Flame Cast Wok Technique',
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
    <section id="cuisines" className="relative py-32 lg:py-44 bg-white text-[#35363A] overflow-hidden">
      {/* Decorative Warm Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#F3E8D9]/40 rounded-full blur-[140px] pointer-events-none -translate-x-1/2" />

      <div className="container-wide relative z-10">
        
        {/* Section Chapter Marker */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#35363A]/10 mb-14 lg:mb-20">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#F69522]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#F69522]">
              Chapter 03 / 07 • The Repertoire
            </span>
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-[#35363A]/40">
            5 Distinct Regional Traditions
          </span>
        </div>

        {/* Header Block & Controls */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12 lg:mb-16">
          <div className="lg:col-span-8 space-y-4">
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold text-[#35363A] leading-[1.08] tracking-tight">
              A World Of <br />
              <span className="font-editorial-italic font-normal text-[#35363A]/80">Exceptional </span>
              <span className="font-editorial-italic font-normal text-[#F69522]">Flavours.</span>
            </h2>
            <p className="font-body text-base sm:text-lg text-[#35363A]/70 max-w-xl font-normal leading-relaxed">
              Every cuisine at Hunger Stories is curated as an independent culinary atelier — respecting traditional ingredients, clay techniques, and uncompromised spice integrity.
            </p>
          </div>

          {/* Navigation Controls & Counter */}
          <div className="lg:col-span-4 flex items-center lg:justify-end gap-6">
            <div className="font-mono text-sm tracking-widest text-[#35363A]/60">
              <span className="font-bold text-[#F69522]">0{activeIndex + 1}</span>
              <span className="mx-2 opacity-30">/</span>
              <span>0{cuisines.length}</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => swiperInstance?.slidePrev()}
                className="w-12 h-12 rounded-full border border-[#35363A]/20 flex items-center justify-center text-[#35363A] hover:bg-[#F69522] hover:border-[#F69522] hover:text-white transition-all duration-300 shadow-sm"
                aria-label="Previous Cuisine Slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => swiperInstance?.slideNext()}
                className="w-12 h-12 rounded-full border border-[#35363A]/20 flex items-center justify-center text-[#35363A] hover:bg-[#F69522] hover:border-[#F69522] hover:text-white transition-all duration-300 shadow-sm"
                aria-label="Next Cuisine Slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Tab Strip */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {cuisines.map((c, idx) => (
            <button
              key={c.id}
              onClick={() => handleSelectTab(idx)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-[0.16em] transition-all whitespace-nowrap shrink-0 ${
                activeIndex === idx
                  ? 'bg-[#35363A] text-white shadow-lg'
                  : 'bg-[#FFF8EF] text-[#35363A]/70 hover:text-[#35363A] border border-[#F3E8D9]'
              }`}
            >
              <span className="font-mono mr-2 text-[10px] text-[#F69522]">{c.index}</span>
              {c.title}
            </button>
          ))}
        </div>

      </div>

      {/* Swiper Carousel with Asymmetrical Editorial Cards */}
      <div className="w-full pl-6 md:pl-12 lg:pl-16 xl:pl-24 pr-4">
        <Swiper
          modules={[Autoplay, Navigation]}
          onSwiper={setSwiperInstance}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          spaceBetween={32}
          slidesPerView={1.12}
          speed={700}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            640: { slidesPerView: 1.5, spaceBetween: 28 },
            1024: { slidesPerView: 2.3, spaceBetween: 36 },
            1400: { slidesPerView: 2.7, spaceBetween: 40 },
          }}
          className="!overflow-visible"
        >
          {cuisines.map((c) => (
            <SwiperSlide key={c.id} className="h-auto">
              <div className="group h-full flex flex-col rounded-3xl overflow-hidden bg-[#FFF8EF] border border-[#F3E8D9] shadow-sm hover:shadow-2xl transition-all duration-700">
                
                {/* Large Visual Frame */}
                <div className="relative h-80 sm:h-96 w-full overflow-hidden bg-[#35363A]">
                  <Image
                    src={c.image}
                    alt={`${c.title} at Hunger Stories`}
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 36vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#30231F]/90 via-[#30231F]/20 to-transparent" />
                  
                  {/* Top Bar with Method Badge & Number */}
                  <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
                    <span className="px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/95 text-[#35363A] shadow-md backdrop-blur-sm">
                      {c.method}
                    </span>
                    <span className="font-mono text-sm font-bold text-white/90">
                      {c.index}
                    </span>
                  </div>

                  {/* Bottom Text Over Image */}
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#F69522] mb-1">
                      {c.region}
                    </p>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold leading-tight">
                      {c.title}
                    </h3>
                  </div>
                </div>

                {/* Card Content & Aromatics Breakdown */}
                <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    <p className="font-display text-base font-semibold text-[#35363A] leading-snug mb-3">
                      &ldquo;{c.headline}&rdquo;
                    </p>
                    <p className="font-body text-sm text-[#35363A]/70 leading-relaxed font-normal">
                      {c.description}
                    </p>
                  </div>

                  {/* Aromatics Profile Pills */}
                  <div className="pt-4 border-t border-[#35363A]/10 space-y-3">
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-[#35363A]/50">
                      <Sparkles className="w-3.5 h-3.5 text-[#F69522]" />
                      <span>Signature Aromatics</span>
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
                      Notable Preparations
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
