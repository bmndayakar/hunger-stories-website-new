import FoodImage from '@/components/ui/FoodImage';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const cuisines = [
  {
    title: 'Hyderabadi Biryani',
    description: 'A visual look at Hyderabadi biryani in the Hunger Stories food portfolio.',
    image: '/images/food/hero-biryani.jpg',
    alt: 'Biryani presented in a traditional serving pot',
    layout: 'hs-food-page__item--feature',
  },
  {
    title: 'North Indian',
    description: 'North Indian food imagery from the multi-cuisine portfolio.',
    image: '/images/food/signature-chicken.jpg',
    alt: 'North Indian curry served in a pan',
    layout: '',
  },
  {
    title: 'South Indian',
    description: 'A look at South Indian food in the Hunger Stories portfolio.',
    image: '/images/food/cuisine-south.jpg',
    alt: 'South Indian dish presented on a banana leaf',
    layout: '',
  },
  {
    title: 'Chinese / Indo-Chinese',
    description: 'Chinese and Indo-Chinese food imagery from the portfolio.',
    image: '/images/food/cuisine-chinese.jpg',
    alt: 'Chinese and Indo-Chinese food with vegetables',
    layout: '',
  },
  {
    title: 'Tandoor',
    description: 'A visual introduction to the tandoor category.',
    image: '/images/food/signature-paneer.jpg',
    alt: 'Grilled paneer with vegetables and accompaniments',
    layout: '',
  },
  {
    title: 'Vegetarian favourites',
    description: 'Vegetarian food imagery from the multi-cuisine portfolio.',
    image: '/images/food/signature-dal.jpg',
    alt: 'A bowl of lentils served with accompaniments',
    layout: '',
  },
  {
    title: 'Starters & accompaniments',
    description: 'A visual selection of starters and accompaniments.',
    image: '/images/food/cuisine-starters.jpg',
    alt: 'Food and accompaniments arranged on a serving board',
    layout: '',
  },
];

function OurFoodHero() {
  return (
    <section className="hs-support-hero hs-food-page__hero" aria-labelledby="food-page-title">
      <div className="hs-container hs-support-hero__layout">
        <div className="hs-support-hero__copy">
          <p className="hs-eyebrow">Our food · A visual portfolio</p>
          <h1 id="food-page-title">
            A world of flavours.
            <br />
            <em>Stories to share.</em>
          </h1>
          <p className="hs-support-hero__lead">
            Explore the multi-cuisine identity of Hunger Stories through food
            photography. This is a portfolio, not an online menu.
          </p>
          <div className="hs-actions">
            <a className="hs-button hs-button--primary hs-button--editorial" href="#food-categories">
              Explore the cuisines
              <ArrowRight aria-hidden="true" size={16} />
            </a>
          </div>
        </div>
        <figure className="hs-support-hero__image">
          <FoodImage
            src="/images/food/catering-feast.jpg"
            alt="A table arranged with a variety of dishes"
            fill
            loading="eager"
            sizes="(max-width: 760px) 100vw, 56vw"
          />
          <figcaption>Food portfolio image · not a named customer event</figcaption>
        </figure>
      </div>
    </section>
  );
}

function CuisinePortfolio() {
  return (
    <section
      className="hs-section hs-food-page__portfolio"
      id="food-categories"
      aria-labelledby="food-categories-title"
    >
      <div className="hs-container">
        <div className="hs-section-heading hs-section-heading--split">
          <div>
            <p className="hs-eyebrow">Cuisine portfolio</p>
            <h2 id="food-categories-title">Seven ways into the story.</h2>
          </div>
          <p className="hs-section-heading__copy">
            Category photography only. Specific dishes and current availability
            are confirmed through the external ordering channels.
          </p>
        </div>
        <div className="hs-food-page__grid">
          {cuisines.map((cuisine, index) => (
            <article
              className={`hs-food-page__item ${cuisine.layout}`}
              key={cuisine.title}
            >
              <figure>
                <div className="hs-food-page__image">
                  <FoodImage
                    src={cuisine.image}
                    alt={cuisine.alt}
                    fill
                    sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 42vw"
                  />
                </div>
                <figcaption>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <h3>{cuisine.title}</h3>
                    <p>{cuisine.description}</p>
                  </div>
                </figcaption>
              </figure>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function OurFoodPageSections() {
  return (
    <>
      <OurFoodHero />
      <CuisinePortfolio />
      <section className="hs-food-page__closing" aria-label="Explore catering">
        <div className="hs-container">
          <p className="hs-eyebrow">For your next gathering</p>
          <h2>Bring the food story to your occasion.</h2>
          <Link className="hs-button hs-button--primary hs-button--editorial" href="/catering/">
            Explore Catering
            <ArrowRight aria-hidden="true" size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
