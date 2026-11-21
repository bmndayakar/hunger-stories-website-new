import FoodImage from '@/components/ui/FoodImage';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hs-hero" id="home" aria-labelledby="home-title">
      <div className="hs-hero__media" aria-hidden="true">
        <FoodImage
          src="/images/food/hero-biryani.jpg"
          alt=""
          fill
          loading="eager"
          sizes="100vw"
          className="hs-hero__image"
        />
      </div>
      <div className="hs-container hs-hero__content">
        <p className="hs-eyebrow hs-eyebrow--light">Hyderabad · Catering &amp; multi-cuisine food</p>
        <h1 id="home-title">
          Exceptional Food.
          <br />
          <em>Memorable Gatherings.</em>
        </h1>
        <p className="hs-hero__lead">
          From corporate lunches to family celebrations, Hunger Stories brings
          flavour and thoughtful food experiences to the moments that bring
          people together.
        </p>
        <div className="hs-actions">
          <a className="hs-button hs-button--primary" href="/catering/#catering-enquiry">
            Request a Catering Quote
            <span aria-hidden="true">↗</span>
          </a>
          <Link className="hs-button hs-button--light-outline" href="/catering/">
            Explore Our Catering
          </Link>
        </div>
        <p className="hs-hero__tagline">Every Flavour Has A Story.</p>
      </div>
      <a className="hs-hero__scroll" href="#catering" aria-label="Scroll to catering">
        <span aria-hidden="true" />
        Catering for every occasion
      </a>
    </section>
  );
}
