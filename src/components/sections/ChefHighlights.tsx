'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { StoryReveal } from '@/components/ui/StoryMotion';

export default function ChefHighlights() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-4%', '4%']);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.12, 1.06, 1.12]);

  return (
    <section
      ref={sectionRef}
      id="people"
      aria-labelledby="people-heading"
      className="story-interlude relative overflow-hidden bg-[#30231F] text-[#FFF8EF]"
    >
      <div className="story-interlude-image absolute inset-0 overflow-hidden" aria-hidden="true">
        <motion.div className="story-parallax absolute inset-0" style={{ y, scale }}>
          <Image
            src="/images/food/craft-spices.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>
        <div className="absolute inset-0 bg-[#30231F]/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#30231F]/90 via-[#30231F]/50 to-transparent" />
      </div>

      <div className="container-wide relative z-10 flex min-h-[65svh] flex-col justify-between py-20 sm:py-28 lg:min-h-[100svh] lg:py-32">
        <div className="flex items-center justify-between gap-4 border-b border-white/20 pb-5">
          <span className="eyebrow-tag text-[#F69522]">Chapter 03 / 07</span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-white/60 sm:text-xs">
            The People Behind the Food
          </span>
        </div>

        <div className="max-w-3xl py-16 sm:py-24">
          <StoryReveal>
            <p className="eyebrow-tag mb-5 text-[#F69522]">The people behind the food</p>
            <h2 id="people-heading" className="font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
              Every story has <br />
              <span className="font-editorial-italic text-[#FFF8EF]/85">people behind it.</span>
            </h2>
          </StoryReveal>
          <StoryReveal delay={0.15}>
            <p className="mt-7 max-w-md text-sm leading-relaxed text-[#FFF8EF]/75 sm:text-lg">
              Chef stories are coming soon.
            </p>
          </StoryReveal>
        </div>

        <div className="border-t border-white/20 pt-5 text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">
          Hunger Stories · Hyderabad
        </div>
      </div>
    </section>
  );
}
