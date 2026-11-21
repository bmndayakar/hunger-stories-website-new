import FoodImage from '@/components/ui/FoodImage';
import Link from 'next/link';

export default function BrandStory() {
  return (
    <section className="hs-section hs-story" id="our-story" aria-labelledby="story-title">
      <div className="hs-container hs-story__inner">
        <div className="hs-story__copy">
          <p className="hs-eyebrow">Our story · Hyderabad, since 2024</p>
          <h2 id="story-title">Every gathering has a story to share.</h2>
          <p className="hs-story__tagline">Every Flavour Has A Story.</p>
          <p>
            Hunger Stories is a Hyderabad-based, multi-cuisine food and
            catering brand. We believe food belongs at the heart of the moments
            people come together to share.
          </p>
          <Link className="hs-text-link" href="/our-food/">
            Explore our food
            <span aria-hidden="true">→</span>
          </Link>
        </div>
        <figure className="hs-story__image">
          <FoodImage
            src="/images/food/craft-spices.jpg"
            alt="Spices and ingredients arranged for cooking"
            fill
            sizes="(max-width: 800px) 100vw, 48vw"
          />
          <figcaption>Food portfolio image</figcaption>
        </figure>
      </div>
    </section>
  );
}
