import FoodImage from '@/components/ui/FoodImage';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { siteConfig } from '@/lib/config';

export default function OurStoryPageSections() {
  return (
    <>
      <section className="hs-support-hero hs-story-page__hero" aria-labelledby="story-page-title">
        <div className="hs-container hs-support-hero__layout">
          <div className="hs-support-hero__copy">
            <p className="hs-eyebrow">Hunger Stories · Hyderabad</p>
            <h1 id="story-page-title">
              Every Flavour
              <br />
              <em>Has A Story.</em>
            </h1>
            <p className="hs-support-hero__lead">
              Hunger Stories is a Hyderabad-based, multi-cuisine food and
              catering brand, established in {siteConfig.brand.foundingYear}.
            </p>
          </div>
          <figure className="hs-support-hero__image">
            <FoodImage
              src="/images/food/craft-spices.jpg"
              alt="Spices and ingredients arranged for cooking"
              fill
              loading="eager"
              sizes="(max-width: 760px) 100vw, 56vw"
            />
            <figcaption>Food photography from the portfolio</figcaption>
          </figure>
        </div>
      </section>

      <section className="hs-section hs-story-page__facts" aria-labelledby="story-facts-title">
        <div className="hs-container">
          <div className="hs-section-heading">
            <p className="hs-eyebrow">The story so far</p>
            <h2 id="story-facts-title">Based in Hyderabad. Made of many flavours.</h2>
          </div>
          <div className="hs-story-page__grid">
            <article>
              <span>01 · Roots</span>
              <h3>Hyderabad</h3>
              <p>Hunger Stories is based in Hyderabad, Telangana.</p>
            </article>
            <article>
              <span>02 · Since</span>
              <h3>{siteConfig.brand.foundingYear}</h3>
              <p>The brand was established in {siteConfig.brand.foundingYear}.</p>
            </article>
            <article>
              <span>03 · Identity</span>
              <h3>Multi-cuisine</h3>
              <p>A food and catering brand with a multi-cuisine identity.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="hs-story-page__statement" aria-labelledby="story-statement-title">
        <div className="hs-container">
          <p className="hs-eyebrow">Our tagline</p>
          <h2 id="story-statement-title">Every Flavour Has A Story.</h2>
          <p>
            We believe food belongs at the heart of moments people come
            together to share.
          </p>
          <Link className="hs-button hs-button--primary hs-button--editorial" href="/our-food/">
            Explore Our Food
            <ArrowRight aria-hidden="true" size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
