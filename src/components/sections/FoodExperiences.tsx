'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { StoryReveal } from '@/components/ui/StoryMotion';

const portfolio = [
  {
    id: 'biryani',
    index: '01',
    title: 'Hyderabadi Dum Biryani',
    badge: 'Clay Handi Dum',
    caption:
      'Aged long-grain basmati rice slow-cooked with tender marinated cuts and saffron in dough-sealed handis. Served piping hot with authentic mirchi ka salan and chilled dahi raita.',
    image: '/images/food/signature-biryani.jpg',
    span: 'lg:col-span-7',
    aspect: 'h-[390px] sm:h-[460px] lg:h-[520px]',
  },
  {
    id: 'paneer',
    index: '02',
    title: 'Paneer Tikka Angara',
    badge: 'Clay Oven Roasted',
    caption:
      'Soft cottage cheese cubes marinated in spiced yogurt and roasted over hot embers until tender with a light smoky char. Served with fresh mint dip and spiced onions.',
    image: '/images/food/signature-paneer.jpg',
    span: 'lg:col-span-5',
    aspect: 'h-[390px] sm:h-[460px] lg:h-[520px]',
  },
  {
    id: 'chicken',
    index: '03',
    title: 'Purani Dilli Butter Chicken',
    badge: 'Rich Butter Gravy',
    caption:
      'Tender grilled chicken pieces simmered gently in a velvety tomato and butter reduction finished with crushed fenugreek leaves. A rich North Indian classic perfect with hot garlic naan.',
    image: '/images/food/signature-chicken.jpg',
    span: 'lg:col-span-5',
    aspect: 'h-[390px] sm:h-[460px] lg:h-[520px]',
  },
  {
    id: 'dal',
    index: '04',
    title: '12-Hour Dal Makhani',
    badge: 'Slow-Simmered Lentils',
    caption:
      'Whole black lentils slow-simmered overnight over gentle embers, finished with churned butter and fresh cream. Comforting, hearty, and deeply satisfying with every spoonful.',
    image: '/images/food/signature-dal.jpg',
    span: 'lg:col-span-7',
    aspect: 'h-[390px] sm:h-[460px] lg:h-[520px]',
  },
];

export default function FoodExperiences() {
  return (
    <section id="experiences" className="relative py-20 sm:py-28 lg:py-36 bg-[#FAF2E6] text-[#35363A] overflow-hidden">
      {/* Decorative Warm Glow */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#FFF8EF]/80 rounded-full blur-[140px] pointer-events-none" />

      <div className="container-wide relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-[#35363A]/10 mb-10 sm:mb-16 lg:mb-24">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#F69522]" />
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.24em] text-[#F69522]">
              Chapter 04 / 07 • Signature Food Experiences
            </span>
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-[#35363A]/50">
            Freshly Prepared Daily
          </span>
        </div>

        {/* Section Headline */}
        <StoryReveal className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 lg:mb-24">
          <h2 className="font-display text-3xl xs:text-4xl sm:text-6xl lg:text-7xl font-bold text-[#35363A] leading-[1.08] tracking-tight mb-4 sm:mb-6">
            Where Food Becomes <br />
            <span className="font-editorial-italic font-normal text-[#35363A]/80">An </span>
            <span className="font-editorial-italic font-normal text-[#EA2628]">Experience.</span>
          </h2>
          <p className="font-body text-sm sm:text-lg text-[#35363A]/75 leading-relaxed font-normal max-w-2xl mx-auto">
            Every dish is prepared fresh with traditional recipes and authentic spices — from slow-steamed biryanis and clay-oven tandoori grills to comforting North Indian curries.
          </p>
        </StoryReveal>

        {/* Asymmetrical 4-Plate Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10">
          {portfolio.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8 }}
              className={`${item.span} group`}
            >
              <div className={`relative ${item.aspect} rounded-3xl overflow-hidden shadow-xl bg-[#35363A] border border-[#35363A]/10 flex flex-col justify-between p-6 sm:p-8 lg:p-10 text-white`}>
                
                {/* Background Food Photography */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover object-center transition-transform duration-1000 group-hover:scale-105 filter brightness-[0.78] contrast-[1.08]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1b1412]/95 via-[#1b1412]/50 to-black/30" />
                
                {/* Top Badge: Number & Category */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="font-mono text-sm sm:text-base font-bold text-white/90 bg-black/40 px-3 py-1 rounded-full">
                    {item.index}
                  </span>
                  <span className="px-3.5 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-wider bg-white/95 text-[#35363A] shadow-md backdrop-blur-sm">
                    {item.badge}
                  </span>
                </div>

                {/* Bottom Narrative Block */}
                <div className="relative z-10 space-y-2 sm:space-y-3 text-shadow-food">
                  <h3 className="font-display text-2xl sm:text-3xl font-bold leading-tight">
                    {item.title}
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-white/90 leading-relaxed font-normal max-w-xl">
                    {item.caption}
                  </p>

                  <div className="pt-2">
                    <a
                      href="#order"
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#F69522] hover:text-white transition-colors"
                    >
                      <span>Order on delivery platforms</span>
                      <span>→</span>
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Master Sensory Quote Box */}
        <div className="mt-12 sm:mt-16 lg:mt-20 p-6 sm:p-10 lg:p-12 rounded-3xl bg-[#FFF8EF] border border-[#F3E8D9] shadow-md flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
          <div className="max-w-2xl space-y-2 text-center lg:text-left">
            <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#F69522]">
              Our Food Philosophy
            </span>
            <h4 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-[#35363A] leading-snug">
              &ldquo;No artificial essences. No recycled oils. Pure slow-cooked honesty at every table.&rdquo;
            </h4>
          </div>
          <a
            href="#catering"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-[#35363A] text-white text-xs font-bold uppercase tracking-[0.16em] hover:bg-[#F69522] transition-colors shrink-0 shadow-lg min-h-[44px]"
          >
            <span>Explore Catering Options</span>
            <span>→</span>
          </a>
        </div>

      </div>
    </section>
  );
}
