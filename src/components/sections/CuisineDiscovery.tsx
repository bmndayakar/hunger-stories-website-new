import FoodImage from '@/components/ui/FoodImage';

const cuisines = [
  {
    title: 'Hyderabadi Biryani',
    image: '/images/food/hero-biryani.jpg',
    alt: 'Biryani presented in a traditional serving pot',
    layout: 'hs-cuisine--feature',
  },
  {
    title: 'North Indian',
    image: '/images/food/signature-chicken.jpg',
    alt: 'North Indian curry served in a pan',
    layout: '',
  },
  {
    title: 'South Indian',
    image: '/images/food/cuisine-south.jpg',
    alt: 'South Indian dish presented on a banana leaf',
    layout: '',
  },
  {
    title: 'Chinese / Indo-Chinese',
    image: '/images/food/cuisine-chinese.jpg',
    alt: 'Indo-Chinese food with vegetables and spices',
    layout: '',
  },
  {
    title: 'Tandoor',
    image: '/images/food/signature-paneer.jpg',
    alt: 'Grilled paneer with vegetables and accompaniments',
    layout: '',
  },
  {
    title: 'Vegetarian favourites',
    image: '/images/food/signature-dal.jpg',
    alt: 'A bowl of lentils served with accompaniments',
    layout: '',
  },
  {
    title: 'Starters & accompaniments',
    image: '/images/food/cuisine-starters.jpg',
    alt: 'Food and accompaniments arranged on a serving board',
    layout: '',
  },
];

export default function CuisineDiscovery() {
  return (
    <section className="hs-section hs-food-portfolio" id="our-food" aria-labelledby="food-title">
      <div className="hs-container">
        <div className="hs-section-heading hs-section-heading--split">
          <div>
            <p className="hs-eyebrow">Our food · A visual portfolio</p>
            <h2 id="food-title">A world of flavours, made for sharing.</h2>
          </div>
          <p className="hs-section-heading__copy">
            Explore the multi-cuisine identity of Hunger Stories. This is a food
            portfolio, not a priced or transactional menu.
          </p>
        </div>

        <div className="hs-cuisine-grid">
          {cuisines.map((cuisine, index) => (
            <figure className={`hs-cuisine ${cuisine.layout}`} key={cuisine.title}>
              <div className="hs-cuisine__image">
                <FoodImage
                  src={cuisine.image}
                  alt={cuisine.alt}
                  fill
                  sizes="(max-width: 700px) 50vw, (max-width: 1100px) 33vw, 25vw"
                />
              </div>
              <figcaption>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{cuisine.title}</h3>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
