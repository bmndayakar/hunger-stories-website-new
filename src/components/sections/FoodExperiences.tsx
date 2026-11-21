import FoodImage from '@/components/ui/FoodImage';

const gallery = [
  {
    title: 'Food for the table',
    image: '/images/food/catering-feast.jpg',
    alt: 'A long table arranged with a variety of dishes',
    layout: 'hs-gallery__item--wide',
  },
  {
    title: 'Biryani, ready to share',
    image: '/images/food/signature-biryani.jpg',
    alt: 'Biryani served in a traditional pot',
    layout: '',
  },
  {
    title: 'From the tandoor portfolio',
    image: '/images/food/signature-paneer.jpg',
    alt: 'Grilled paneer with vegetables and accompaniments',
    layout: '',
  },
];

export default function FoodExperiences() {
  return (
    <section className="hs-section hs-gallery" id="food-gallery" aria-labelledby="gallery-title">
      <div className="hs-container">
        <div className="hs-section-heading hs-section-heading--split">
          <div>
            <p className="hs-eyebrow">Food &amp; catering portfolio</p>
            <h2 id="gallery-title">A closer look at the food.</h2>
          </div>
          <p className="hs-section-heading__copy">
            A growing gallery for food, catering spreads and meal presentations.
            Images here describe the food shown; they are not labelled as
            completed customer events.
          </p>
        </div>

        <div className="hs-gallery__grid">
          {gallery.map((item) => (
            <figure className={`hs-gallery__item ${item.layout}`} key={item.title}>
              <div className="hs-gallery__image">
                <FoodImage
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 60vw"
                />
              </div>
              <figcaption>{item.title}</figcaption>
            </figure>
          ))}
          <div className="hs-gallery__placeholder">
            <span>Future gallery image</span>
            <strong>Corporate meals &amp; individual trays</strong>
            <p>Owner-supplied photography needed</p>
          </div>
          <div className="hs-gallery__placeholder hs-gallery__placeholder--dark">
            <span>Future gallery image</span>
            <strong>Traditional functions &amp; event food</strong>
            <p>Use genuine, owner-approved event photography</p>
          </div>
        </div>
      </div>
    </section>
  );
}
