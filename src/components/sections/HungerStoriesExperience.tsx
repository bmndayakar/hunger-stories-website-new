import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { StoryReveal } from '@/components/ui/StoryMotion';

const experiences = [
  { number: '01', title: 'Explore our cuisines', href: '#cuisines' },
  { number: '02', title: 'Order from Tellapur', href: '#order' },
  { number: '03', title: 'Gather over good food', href: '#catering' },
];

export default function HungerStoriesExperience() {
  return (
    <section className="relative overflow-hidden bg-[#30231F] text-[#FFF8EF]">
      <div className="container-wide py-20 sm:py-28 lg:py-32">
        <div className="flex flex-col gap-3 border-b border-white/15 pb-5 sm:flex-row sm:items-center sm:justify-between">
          <span className="eyebrow-tag text-[#F69522]">Chapter 06 / 07 • The Hunger Stories Experience</span>
          <span className="font-mono text-xs uppercase tracking-widest text-white/50">Hyderabad, India</span>
        </div>

        <div className="grid items-center gap-10 pt-12 sm:gap-16 sm:pt-16 lg:grid-cols-12 lg:pt-20">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-[#35363A] lg:col-span-6 lg:aspect-[4/5]">
            <Image
              src="/images/food/signature-biryani.jpg"
              alt="Hunger Stories biryani prepared for sharing"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#30231F]/60 to-transparent" />
          </div>

          <StoryReveal className="lg:col-span-6 lg:pl-8">
            <p className="eyebrow-tag mb-5 text-[#F69522]">The Hunger Stories Experience</p>
            <h2 className="font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-6xl">
              A story best <br />
              <span className="font-editorial-italic text-[#FFF8EF]/80">shared.</span>
            </h2>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-[#FFF8EF]/75 sm:text-lg">
              Freshly prepared flavours, warm hospitality, convenient delivery and catering bring people together, from everyday meals to celebrations.
            </p>
            <div className="mt-10 border-t border-white/15">
              {experiences.map((experience) => (
                <a
                  key={experience.number}
                  href={experience.href}
                  className="group flex min-h-[64px] items-center gap-4 border-b border-white/15 py-4 text-sm transition-colors hover:text-[#F69522] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F69522] sm:text-base"
                >
                  <span className="font-mono text-xs text-[#F69522]">{experience.number}</span>
                  <span className="flex-1">{experience.title}</span>
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                </a>
              ))}
            </div>
          </StoryReveal>
        </div>
      </div>
    </section>
  );
}
