'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Sparkles, Flame, Clock, Award } from 'lucide-react';

const portfolio = [
  {
    id: 'biryani',
    index: 'I',
    title: 'The Dum Biryani Ritual',
    subtitle: 'Royal Nizami Heritage • Sealed Dough Dum',
    caption: 'Slow-simmered over dying charcoal embers in sealed unglazed clay handis. Aged long-grain basmati rice infused with saffron stigma extract, whole stone-crushed spices, and tender meat. Unsealed only at the center table.',
    image: '/images/food/signature-biryani.jpg',
    span: 'lg:col-span-7',
    aspect: 'h-[440px] sm:h-[520px]',
    technique: '180-Minute Clay Handi Dum',
    texture: 'Delicate, Fragrant, Layered',
  },
  {
    id: 'paneer',
    index: 'II',
    title: 'Paneer Tikka Angara',
    subtitle: 'Live Coconut Charcoal • Clay Tandoor',
    caption: 'Velvety malai paneer cubes marinated in stone-ground yellow mustard, toasted fenugreek leaves, and spiced hung curd. Fire-roasted to tender charred perfection with a delicate smoky kiss.',
    image: '/images/food/signature-paneer.jpg',
    span: 'lg:col-span-5',
    aspect: 'h-[440px] sm:h-[520px]',
    technique: 'Direct Skewer Broiling at 400°C',
    texture: 'Smoky Exterior, Melt-in-Mouth Core',
  },
  {
    id: 'chicken',
    index: 'III',
    title: 'Purani Dilli Butter Chicken',
    subtitle: 'North Indian Heritage Makhani Reduction',
    caption: 'Charcoal-smoked boneless chicken folded into a slow-simmered reduction of vine-ripened tomatoes, cashews, and churned white butter, finished with hand-rubbed kasuri methi.',
    image: '/images/food/signature-chicken.jpg',
    span: 'lg:col-span-5',
    aspect: 'h-[440px] sm:h-[520px]',
    technique: 'Slow Degchi Reduction with Cultured Butter',
    texture: 'Silken, Velvety, Rich',
  },
  {
    id: 'dal',
    index: 'IV',
    title: '12-Hour Simmered Dal Makhani',
    subtitle: 'Tandoor Warmth • Overnight Heritage',
    caption: 'Whole black urad and kidney beans slowly reduced overnight over gentle clay embers. Finished with clotted cream, ginger juliennes, and slow heat without shortcuts or thickeners.',
    image: '/images/food/signature-dal.jpg',
    span: 'lg:col-span-7',
    aspect: 'h-[440px] sm:h-[520px]',
    technique: 'Overnight Simmer on Tandoor Heat',
    texture: 'Creamy, Earthy, Comforting',
  },
];

export default function FoodExperiences() {
  return (
    <section id="story" className="relative py-32 lg:py-44 bg-[#F3E8D9]/40 text-[#35363A] overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#FFF8EF]/80 rounded-full blur-[140px] pointer-events-none" />

      <div className="container-wide relative z-10">
        
        {/* Section Chapter Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#35363A]/10 mb-16 lg:mb-24">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#F69522]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#F69522]">
              Chapter 04 / 07 • Signature Food Experiences
            </span>
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-[#35363A]/40">
            Editorial Showcase • Strictly No Menu Pricing
          </span>
        </div>

        {/* Section Headline */}
        <div className="text-center max-w-3xl mx-auto mb-20 lg:mb-28">
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold text-[#35363A] leading-[1.08] tracking-tight mb-6">
            Where Food Becomes <br />
            <span className="font-editorial-italic font-normal text-[#35363A]/80">An </span>
            <span className="font-editorial-italic font-normal text-[#EA2628]">Experience.</span>
          </h2>
          <p className="font-body text-base sm:text-lg text-[#35363A]/70 leading-relaxed font-normal">
            Each plate is an artisanal composition. We celebrate the sensory rhythm of Indian cooking — the crackle of whole spices, the fragrant perfume of slow steam, and the unmistakable depth of clay tandoor cooking.
          </p>
        </div>

        {/* Asymmetrical 4-Plate Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {portfolio.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8 }}
              className={`${item.span} group`}
            >
              <div className={`relative ${item.aspect} rounded-3xl overflow-hidden shadow-xl bg-[#35363A] border border-[#35363A]/10 flex flex-col justify-between p-8 sm:p-10 text-white`}>
                
                {/* Background Food Photography */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover object-center transition-transform duration-1000 group-hover:scale-106 filter brightness-[0.75] contrast-[1.08]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#30231F] via-[#30231F]/30 to-black/20" />
                
                {/* Top Badge: Roman Numeral & Technique Tag */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="font-display text-2xl font-bold text-[#F69522]">
                    {item.index}
                  </span>
                  <span className="px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 text-[#35363A] shadow-md backdrop-blur-sm">
                    {item.technique}
                  </span>
                </div>

                {/* Bottom Narrative Block */}
                <div className="relative z-10 space-y-3">
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#F69522]">
                    {item.subtitle}
                  </p>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold leading-tight">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-white/80 leading-relaxed font-normal max-w-xl">
                    {item.caption}
                  </p>

                  <div className="pt-3 flex items-center gap-2 text-[11px] text-[#FFF8EF]/60 font-mono">
                    <span className="text-[#F69522]">Texture Profile:</span>
                    <span>{item.texture}</span>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Master Sensory Quote Box */}
        <div className="mt-20 p-10 sm:p-14 rounded-3xl bg-[#FFF8EF] border border-[#F3E8D9] shadow-md flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl space-y-2 text-center lg:text-left">
            <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#F69522]">
              The Kitchen Covenant
            </span>
            <h4 className="font-display text-2xl sm:text-3xl font-bold text-[#35363A] leading-snug">
              &ldquo;No artificial essences. No recycled oils. Pure slow-cooked honesty at every table.&rdquo;
            </h4>
          </div>
          <a
            href="#catering"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#35363A] text-white text-xs font-bold uppercase tracking-[0.16em] hover:bg-[#F69522] transition-colors shrink-0 shadow-lg"
          >
            <span>Explore Event Feasts</span>
            <span>→</span>
          </a>
        </div>

      </div>
    </section>
  );
}
