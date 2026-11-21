import FoodImage from '@/components/ui/FoodImage';
import { ArrowUpRight } from 'lucide-react';
import { getWhatsAppUrl } from '@/lib/config';

const occasions = [
  {
    title: 'Corporate Catering',
    description:
      'Food for workplace occasions and corporate requirements. Share the setting and timing to begin a conversation.',
    image: '/images/food/catering-feast.jpg',
    alt: 'A long table arranged with a variety of dishes',
    layout: 'hs-occasion--wide',
  },
  {
    title: 'Weddings & Receptions',
    description:
      'A multi-cuisine food conversation for your celebration. Tell us about the gathering and menu you have in mind.',
    image: '/images/food/signature-biryani.jpg',
    alt: 'Biryani presented in a traditional serving pot',
    layout: 'hs-occasion--tall',
  },
  {
    title: 'Birthdays & Private Celebrations',
    description:
      'Explore food ideas for birthdays and private celebrations, shaped around the occasion.',
    image: '/images/food/cuisine-starters.jpg',
    alt: 'Food and accompaniments arranged on a serving board',
    layout: '',
  },
  {
    title: 'Pujas & Traditional Functions',
    description:
      'Start with the gathering, preferences and timing. Menu availability can be discussed directly.',
    image: '/images/food/cuisine-south.jpg',
    alt: 'A South Indian dish presented on a banana leaf',
    layout: '',
  },
  {
    title: 'Corporate Meal Boxes',
    description:
      'Ask the catering team whether individually packed meals are available for your requirement.',
    image: null,
    alt: '',
    layout: '',
  },
  {
    title: 'Bulk Food Requirements',
    description:
      'Tell us about the quantity and timing you are considering so the team can discuss availability.',
    image: '/images/food/signature-dal.jpg',
    alt: 'A bowl of lentils served with accompaniments',
    layout: 'hs-occasion--wide',
  },
];

const enquiryDetails = [
  {
    title: 'The occasion',
    description: 'What brings everyone together and what kind of gathering are you planning?',
  },
  {
    title: 'The food',
    description: 'Share cuisines, dishes or preferences you would like to discuss.',
  },
  {
    title: 'The details',
    description: 'Let us know timing, location and approximate headcount so availability can be confirmed.',
  },
];

export default function Catering() {
  return (
    <>
      <section className="hs-section hs-catering" id="catering" aria-labelledby="catering-title">
        <div className="hs-container">
          <div className="hs-section-heading hs-section-heading--split">
            <div>
              <p className="hs-eyebrow">Catering · Begin with the occasion</p>
              <h2 id="catering-title">Whatever the occasion, let’s make it memorable.</h2>
            </div>
            <p className="hs-section-heading__copy">
              From professional gatherings to family celebrations, tell us what
              you are planning and start a conversation about the food.
            </p>
          </div>

          <div className="hs-occasion-grid">
            {occasions.map((occasion, index) => {
              const message = `Hi Hunger Stories, I would like to enquire about catering for ${occasion.title.toLowerCase()}.`;

              return (
                <article
                  className={`hs-occasion ${occasion.layout} ${occasion.image ? '' : 'hs-occasion--placeholder'}`}
                  key={occasion.title}
                  id={occasion.title === 'Corporate Meal Boxes' ? 'corporate-meal-boxes' : undefined}
                >
                  {occasion.image ? (
                    <figure className="hs-occasion__image">
                      <FoodImage
                        src={occasion.image}
                        alt={occasion.alt}
                        fill
                        sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 42vw"
                      />
                    </figure>
                  ) : (
                    <div className="hs-occasion__placeholder" role="img" aria-label="Meal box photography needed">
                      <span>Meal-box photography</span>
                      <strong>Owner-supplied image needed</strong>
                    </div>
                  )}
                  <div className="hs-occasion__copy">
                    <span className="hs-occasion__number">{String(index + 1).padStart(2, '0')}</span>
                    <h3>{occasion.title}</h3>
                    <p>{occasion.description}</p>
                    <a
                      className="hs-text-link"
                      href={getWhatsAppUrl(message, 'catering')}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ask about this occasion
                      <ArrowUpRight aria-hidden="true" size={16} />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className="hs-section hs-format"
        id="corporate-meals"
        aria-labelledby="format-title"
      >
        <div className="hs-container hs-format__inner">
          <div className="hs-format__intro">
            <p className="hs-eyebrow">Catering formats · A conversation, not a fixed package</p>
            <h2 id="format-title">The details shape the way food comes together.</h2>
            <p>
              Share what you need for the gathering. The menu, service format
              and availability can be discussed directly with the catering team.
            </p>
          </div>
          <div className="hs-format__details">
            {enquiryDetails.map((detail, index) => (
              <div className="hs-format__detail" key={detail.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{detail.title}</h3>
                  <p>{detail.description}</p>
                </div>
              </div>
            ))}
            <a className="hs-button hs-button--dark" href="/catering/#catering-enquiry">
              Discuss a catering requirement
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
