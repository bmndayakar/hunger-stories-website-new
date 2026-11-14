'use client';

import { useEffect, useState, useSyncExternalStore } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Autoplay, Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { StoryReveal } from '@/components/ui/StoryMotion';

const reducedMotionQuery = '(prefers-reduced-motion: reduce)';

function subscribeToMotionPreference(onChange: () => void) {
  const preference = window.matchMedia(reducedMotionQuery);
  preference.addEventListener('change', onChange);
  return () => preference.removeEventListener('change', onChange);
}

function getMotionPreference() {
  return window.matchMedia(reducedMotionQuery).matches;
}

const cuisines = [
  {
    id: 'biryani',
    index: '01',
    title: 'Hyderabadi Dum Biryani',
    badge: 'Signature Specialty',
    description:
      'Fragrant basmati rice layered with marinated tender cuts and spices, slow-cooked in sealed clay pots. Served steaming hot with rich mirchi ka salan and cooling raita.',
    image: '/images/food/hero-biryani.jpg',
  },
  {
    id: 'north-indian',
    index: '02',
    title: 'North Indian Classics',
    badge: 'Rich Curries & Gravies',
    description:
      'Velvety butter chicken, creamy paneer curries, and slow-simmered lentils prepared fresh every day. Enjoy them with hot tandoori rotis and naans for a deeply satisfying meal.',
    image: '/images/food/signature-chicken.jpg',
  },
  {
    id: 'tandoori',
    index: '03',
    title: 'Charcoal Tandoor & Grills',
    badge: 'Smoky Clay Oven Grills',
    description:
      'Tender chicken tikka, spiced kebabs, and soft paneer roasted over live charcoal embers. Crisp on the edges and juicy inside, served with fresh mint chutney.',
    image: '/images/food/signature-paneer.jpg',
  },
  {
    id: 'south-indian',
    index: '04',
    title: 'South Indian & Deccan Flavours',
    badge: 'Deccan & Coastal Classics',
    description:
      'Crisp ghee dosas, fragrant bagara rice, and spicy pepper roasts tempered with fresh curry leaves. Enjoy vibrant regional specialties that deliver authentic southern comfort.',
    image: '/images/food/cuisine-south.jpg',
  },
  {
    id: 'chinese',
    index: '05',
    title: 'Indo-Chinese Wok Specials',
    badge: 'High-Flame Wok Art',
    description:
      'Smoky hakka noodles, aromatic fried rice, and crispy chili chicken tossed over high heat. Made fresh to order with crunchy vegetables and bold, savory sauces.',
    image: '/images/food/cuisine-chinese.jpg',
  },
];

export default function CuisineDiscovery() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const reducedMotion = useSyncExternalStore(subscribeToMotionPreference, getMotionPreference, () => true);

  useEffect(() => {
    if (!swiperInstance) return;
    if (reducedMotion) {
      swiperInstance.autoplay.stop();
    } else {
      swiperInstance.autoplay.start();
    }
  }, [reducedMotion, swiperInstance]);

  const handleSelectTab = (idx: number) => {
    setActiveIndex(idx);
    swiperInstance?.slideTo(idx);
  };

  return (
    <section className="relative py-20 sm:py-28 lg:py-36 bg-white text-[#35363A] overflow-hidden">
      {/* Decorative Warm Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#F3E8D9]/40 rounded-full blur-[140px] pointer-events-none -translate-x-1/2" />

      <div className="container-wide relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-[#35363A]/10 mb-10 sm:mb-14 lg:mb-20">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#F69522]" />
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.24em] text-[#F69522]">
              Chapter 02 / 07 • A World of Flavours
            </span>
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-[#35363A]/50">
            5 Distinct Cuisine Styles
          </span>
        </div>

        {/* Header Block & Controls */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-end mb-8 sm:mb-12 lg:mb-16">
          <StoryReveal className="lg:col-span-8 space-y-3 sm:space-y-4">
            <h2 className="font-display text-3xl xs:text-4xl sm:text-6xl lg:text-7xl font-bold text-[#35363A] leading-[1.08] tracking-tight">
              A World Of <br />
              <span className="font-editorial-italic font-normal text-[#35363A]/80">Exceptional </span>
              <span className="font-editorial-italic font-normal text-[#F69522]">Flavours.</span>
            </h2>
            <p className="font-body text-sm sm:text-lg text-[#35363A]/75 max-w-xl font-normal leading-relaxed">
              From fragrant slow-dum biryanis and clay-oven tandoori grills to comforting North Indian curries and high-flame wok specials — cooked fresh daily with authentic spices.
            </p>
          </StoryReveal>

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

      {/* Swiper Carousel with Clean 2-3 Sentence Cards */}
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <Swiper
          modules={[Autoplay, Navigation]}
          onSwiper={setSwiperInstance}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          spaceBetween={16}
          slidesPerView={1.15}
          speed={reducedMotion ? 0 : 700}
          autoplay={reducedMotion ? false : {
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
              <div className="group h-full flex flex-col rounded-3xl overflow-hidden bg-[#FFF8EF] border border-[#F3E8D9] shadow-sm hover:shadow-xl transition-all duration-500">
                
                {/* Visual Frame */}
                <div className="relative h-64 sm:h-80 lg:h-96 w-full overflow-hidden bg-[#35363A]">
                  <Image
                    src={c.image}
                    alt={`${c.title} at Hunger Stories`}
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 36vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1f1715]/95 via-[#1f1715]/40 to-transparent" />
                  
                  {/* Top Bar with Badge & Number */}
                  <div className="absolute top-4 sm:top-5 left-4 sm:left-5 right-4 sm:right-5 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-wider bg-white/95 text-[#35363A] shadow-md">
                      {c.badge}
                    </span>
                    <span className="font-mono text-xs sm:text-sm font-bold text-white/90 bg-black/40 px-2.5 py-1 rounded-full">
                      {c.index}
                    </span>
                  </div>

                  {/* Title Over Image */}
                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 text-white text-shadow-food">
                    <h3 className="font-display text-2xl sm:text-3xl font-bold leading-tight">
                      {c.title}
                    </h3>
                  </div>
                </div>

                {/* Clean 2-3 Sentence Description & Customer CTA */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-5">
                  <p className="font-body text-sm sm:text-base text-[#35363A]/80 leading-relaxed font-normal">
                    {c.description}
                  </p>

                  <div className="pt-4 border-t border-[#35363A]/10 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#35363A]">
                    <a
                      href="#order"
                      className="inline-flex items-center gap-2 text-[#F69522] hover:text-[#EA2628] transition-colors py-1 group/link"
                    >
                      <span>Order On Delivery Platforms</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
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
