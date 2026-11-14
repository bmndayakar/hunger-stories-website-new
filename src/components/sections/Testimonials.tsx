'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Autoplay } from 'swiper/modules';
import { Quote, ChevronLeft, ChevronRight, AlertCircle, Sparkles } from 'lucide-react';

const reviews = [
  {
    id: 1,
    quote: 'The slow-dum biryani unseals with an aroma that feels deeply ancestral. Perfectly layered grains, subtle saffron infusion, and exceptionally tender meat set Hunger Stories apart in Hyderabad.',
    author: '[Guest Review Placeholder]',
    context: 'Tellapur Cloud Kitchen • Weekend Family Feast',
    initial: 'HS',
    year: '2024',
  },
  {
    id: 2,
    quote: 'We commissioned Hunger Stories for a 200-guest IT leadership gala in Financial District. The live coal tandoor naan counter and royal mutton handis arrived piping hot and drew continuous praise.',
    author: '[Corporate Client Placeholder]',
    context: 'Financial District Corporate Gala',
    initial: 'CC',
    year: '2024',
  },
  {
    id: 3,
    quote: 'Their Purani Dilli butter chicken and 12-hour dal makhani possess that rare silky depth without artificial oiliness. Authentic North Indian flavours executed with remarkable restraint.',
    author: '[Dine-In Patron Placeholder]',
    context: 'Manikonda Dining Room • Dinner Table',
    initial: 'DP',
    year: '2024',
  },
  {
    id: 4,
    quote: 'Heat retention is where they won us over. Even during peak dinner traffic in Tellapur, the sealed clay handis and warm breads arrived steaming hot in tamper-evident packaging.',
    author: '[Direct Delivery Client Placeholder]',
    context: 'Tellapur & Kollur Express Order',
    initial: 'DC',
    year: '2024',
  },
];

export default function Testimonials() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section id="testimonials" className="relative py-32 lg:py-44 bg-[#30231F] text-[#FFF8EF] overflow-hidden">
      {/* Cinematic Ambient Glow */}
      <div className="absolute top-1/2 right-0 w-[550px] h-[550px] bg-[#F69522]/10 rounded-full blur-[160px] pointer-events-none translate-x-1/2" />
      <div className="absolute bottom-0 left-10 w-[450px] h-[450px] bg-[#EA2628]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container-wide relative z-10">
        
        {/* Section Chapter Marker */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-16 lg:mb-24">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#F69522]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#F69522]">
              Customer Experiences • Community Voices
            </span>
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-white/40">
            Tellapur & Manikonda Guests
          </span>
        </div>

        {/* Header Block & Carousel Controls */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 lg:mb-20">
          <div className="lg:col-span-8 space-y-4">
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight">
              Flavours That <br />
              <span className="font-editorial-italic font-normal text-white/80">Leave A </span>
              <span className="font-editorial-italic font-normal text-[#F69522]">Mark.</span>
            </h2>

            {/* Clearly marked placeholder notice */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white/70">
              <AlertCircle className="w-3.5 h-3.5 text-[#F69522]" />
              <span>Placeholder testimonials clearly labeled for verified guest reviews before production launch.</span>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="lg:col-span-4 flex items-center lg:justify-end gap-5">
            <div className="font-mono text-sm tracking-widest text-white/50">
              <span className="font-bold text-[#F69522]">0{activeIdx + 1}</span>
              <span className="mx-2 opacity-30">/</span>
              <span>0{reviews.length}</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => swiperInstance?.slidePrev()}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#F69522] hover:border-[#F69522] transition-all duration-300"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => swiperInstance?.slideNext()}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#F69522] hover:border-[#F69522] transition-all duration-300"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <Swiper
          modules={[Autoplay]}
          onSwiper={setSwiperInstance}
          onSlideChange={(swiper) => setActiveIdx(swiper.activeIndex)}
          spaceBetween={32}
          slidesPerView={1.1}
          speed={700}
          autoplay={{
            delay: 5500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            640: { slidesPerView: 1.5, spaceBetween: 28 },
            1024: { slidesPerView: 2.3, spaceBetween: 36 },
            1400: { slidesPerView: 2.8, spaceBetween: 40 },
          }}
          className="!overflow-visible"
        >
          {reviews.map((item) => (
            <SwiperSlide key={item.id} className="h-auto">
              <div className="h-full bg-white/5 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-white/10 flex flex-col justify-between hover:border-[#F69522]/40 transition-all duration-500 group">
                
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <Quote className="w-10 h-10 text-[#F69522]/50" />
                    <span className="font-mono text-xs text-white/40">
                      {item.year}
                    </span>
                  </div>

                  <p className="font-display text-lg sm:text-xl text-white/90 leading-relaxed italic font-normal">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-8 border-t border-white/10 flex items-center gap-4 mt-8">
                  <div className="w-12 h-12 rounded-full bg-[#F69522]/20 border border-[#F69522]/40 flex items-center justify-center text-[#F69522] font-display font-bold text-sm shrink-0">
                    {item.initial}
                  </div>
                  <div>
                    <h4 className="font-body text-sm font-bold text-white">
                      {item.author}
                    </h4>
                    <p className="text-xs text-white/50 font-mono">
                      {item.context}
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
