'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Sparkles, Flame, Clock, Award } from 'lucide-react';

const portfolio = [
  {
    id: 'biryani',
    index: 'I',
    title: 'Hyderabadi Dum Biryani',
    subtitle: 'Authentic Clay Handi Dum',
    caption: 'Aged long-grain basmati rice infused with pure saffron and whole roasted spices, slow-steamed with tender cuts in sealed clay handis.',
    image: '/images/food/signature-biryani.jpg',
    span: 'lg:col-span-7',
    aspect: 'h-[390px] sm:h-[460px] lg:h-[520px]',
    technique: 'Sealed Clay Handi Dum',
    texture: 'Fragrant, Tender, Layered',
  },
  {
    id: 'paneer',
    index: 'II',
    title: 'Paneer Tikka Angara',
    subtitle: 'Live Charcoal Tandoor',
    caption: 'Soft paneer cubes steeped in spiced hung curd and toasted fenugreek, fire-roasted on skewers to a succulent smoky finish.',
    image: '/images/food/signature-paneer.jpg',
    span: 'lg:col-span-5',
    aspect: 'h-[390px] sm:h-[460px] lg:h-[520px]',
    technique: 'Clay Tandoor Roasted',
    texture: 'Smoky & Tender',
  },
  {
    id: 'chicken',
    index: 'III',
    title: 'Purani Dilli Butter Chicken',
    subtitle: 'Rich Creamy Makhani Gravy',
    caption: 'Tandoor-charred chicken simmered in a slow reduction of ripe tomatoes, cashews, and churned butter, finished with hand-rubbed kasuri methi.',
    image: '/images/food/signature-chicken.jpg',
    span: 'lg:col-span-5',
    aspect: 'h-[390px] sm:h-[460px] lg:h-[520px]',
    technique: 'Slow Butter Simmer',
    texture: 'Silky, Rich & Comforting',
  },
  {
    id: 'dal',
    index: 'IV',
    title: '12-Hour Dal Makhani',
    subtitle: 'Overnight Slow Simmer',
    caption: 'Whole black lentils slowly reduced overnight over gentle embers, finished with clotted cream, ginger juliennes, and pure butter.',
    image: '/images/food/signature-dal.jpg',
    span: 'lg:col-span-7',
    aspect: 'h-[390px] sm:h-[460px] lg:h-[520px]',
    technique: 'Overnight Slow Simmer',
    texture: 'Creamy, Earthy & Hearty',
  },
];

export default function FoodExperiences() {
  return (
    <section id="experiences" className="relative py-20 sm:py-28 lg:py-36 bg-[#F3E8D9]/40 text-[#35363A] overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#FFF8EF]/80 rounded-full blur-[140px] pointer-events-none" />

      <div className="container-wide relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-[#35363A]/10 mb-10 sm:mb-16 lg:mb-24">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#F69522]" />
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.24em] text-[#F69522]">
              Chef&apos;s Highlights • Signature Dishes
            </span>
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-[#35363A]/50">
            Freshly Prepared Daily
          </span>
        </div>

        {/* Section Headline */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 lg:mb-24">
          <h2 className="font-display text-3xl xs:text-4xl sm:text-6xl lg:text-7xl font-bold text-[#35363A] leading-[1.08] tracking-tight mb-4 sm:mb-6">
            Where Food Becomes <br />
            <span className="font-editorial-italic font-normal text-[#35363A]/80">An </span>
            <span className="font-editorial-italic font-normal text-[#EA2628]">Experience.</span>
          </h2>
          <p className="font-body text-sm sm:text-lg text-[#35363A]/75 leading-relaxed font-normal max-w-2xl mx-auto">
            Every dish is prepared fresh with traditional techniques and authentic spices — from slow-steamed biryanis and clay-oven tandoori grills to velvety butter gravies.
          </p>
        </div>

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
                  className="object-cover object-center transition-transform duration-1000 group-hover:scale-106 filter brightness-[0.78] contrast-[1.08]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1b1412]/95 via-[#1b1412]/50 to-black/30" />
                
                {/* Top Badge: Roman Numeral & Technique Tag */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="font-display text-xl sm:text-2xl font-bold text-[#F69522]">
                    {item.index}
                  </span>
                  <span className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[9px] sm:text-[10px] font-bold uppercase tracking-wider bg-white/95 text-[#35363A] shadow-md backdrop-blur-sm">
                    {item.technique}
                  </span>
                </div>

                {/* Bottom Narrative Block */}
                <div className="relative z-10 space-y-2 sm:space-y-3 text-shadow-food">
                  <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-[#F69522]">
                    {item.subtitle}
                  </p>
                  <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold leading-tight">
                    {item.title}
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-white/90 leading-relaxed font-normal max-w-xl">
                    {item.caption}
                  </p>

                  <div className="pt-2 sm:pt-3 flex items-center gap-2 text-[10px] sm:text-[11px] text-[#FFF8EF]/75 font-mono">
                    <span className="text-[#F69522] font-semibold">Texture Profile:</span>
                    <span>{item.texture}</span>
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
              Our Quality Commitment
            </span>
            <h4 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-[#35363A] leading-snug">
              &ldquo;No artificial essences. No recycled oils. Pure slow-cooked honesty at every table.&rdquo;
            </h4>
          </div>
          <a
            href="#catering"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-[#35363A] text-white text-xs font-bold uppercase tracking-[0.16em] hover:bg-[#F69522] transition-colors shrink-0 shadow-lg min-h-[44px]"
          >
            <span>Explore Event Feasts</span>
            <span>→</span>
          </a>
        </div>

      </div>
    </section>
  );
}
