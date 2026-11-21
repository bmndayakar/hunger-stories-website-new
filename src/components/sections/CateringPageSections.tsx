import FoodImage from '@/components/ui/FoodImage';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import CuisineDiscovery from '@/components/sections/CuisineDiscovery';
import EnquiryForm from '@/components/sections/EnquiryForm';
import FoodExperiences from '@/components/sections/FoodExperiences';
import { getWhatsAppUrl } from '@/lib/config';

const occasions = [
  {
    number: '01',
    title: 'Corporate Events',
    description:
      'Enquire about food for meetings, conferences, office celebrations and team gatherings.',
    image: '/images/food/catering-feast.jpg',
    alt: 'A table arranged with a variety of dishes',
    layout: 'hs-catering-occasion--corporate',
  },
  {
    number: '02',
    title: 'Weddings & Receptions',
    description:
      'Share what you are planning for a wedding, reception, engagement or pre-wedding gathering.',
    image: '/images/food/signature-biryani.jpg',
    alt: 'Biryani presented in a traditional serving pot',
    layout: 'hs-catering-occasion--wedding',
  },
  {
    number: '03',
    title: 'Traditional Functions',
    description:
      'Tell us about a puja, religious function, housewarming or family celebration.',
    image: '/images/food/cuisine-south.jpg',
    alt: 'A South Indian dish presented with accompaniments',
    layout: 'hs-catering-occasion--traditional',
  },
  {
    number: '04',
    title: 'Private Celebrations',
    description:
      'Discuss food ideas for birthdays, anniversaries, family gatherings and private parties.',
    image: '/images/food/cuisine-starters.jpg',
    alt: 'A selection of food and accompaniments arranged for sharing',
    layout: 'hs-catering-occasion--private',
  },
];

const formatsToConfirm = [
  'Buffet catering',
  'Individual meal boxes or trays',
  'Bulk food orders',
  'Customised multi-cuisine menus',
  'Traditional meal arrangements',
];

const corporateTopics = [
  'Office lunches',
  'Meeting meals',
  'Individual meal boxes or trays',
  'Bulk office requirements',
];

const processSteps = [
  {
    title: 'Share the event details',
    description: 'Tell us the occasion, preferred date, venue location and estimated attendance.',
  },
  {
    title: 'Discuss preferences',
    description: 'Share cuisine preferences, dietary questions and the kind of gathering you are planning.',
  },
  {
    title: 'Explore available options',
    description: 'The team can confirm which menu choices and formats are available for your requirements.',
  },
  {
    title: 'Request a proposal',
    description: 'Discuss proposal details directly with the catering team; this website does not generate instant quotes.',
  },
  {
    title: 'Confirm arrangements',
    description: 'Review and agree the event details with the team before considering the enquiry confirmed.',
  },
];

const faqs = [
  {
    question: 'What types of events does Hunger Stories cater for?',
    answer:
      'You can enquire about corporate gatherings, weddings and receptions, traditional functions, and private celebrations. The team confirms availability and fit for your date and requirements.',
  },
  {
    question: 'Can we discuss a customised menu?',
    answer:
      'Share the cuisines and dishes you have in mind with the catering team. Menu options and availability are discussed directly; there is no instant online quote or booking.',
  },
  {
    question: 'Do you offer vegetarian and non-vegetarian options?',
    answer:
      'The food portfolio includes vegetarian favourites. Ask the team about specific vegetarian or non-vegetarian dishes and their availability for your event.',
  },
  {
    question: 'Do you provide corporate meal boxes?',
    answer:
      'Meal-box requirements can be raised as an enquiry. Availability, packaging, quantities and timing must be confirmed by the catering team.',
  },
  {
    question: 'Can we discuss traditional South Indian meal requirements?',
    answer:
      'Yes, you can share the traditional meal style and dishes you are considering. The team will need to confirm the menu and availability for your date.',
  },
  {
    question: 'How do we request a catering proposal?',
    answer:
      'Call or message the catering team with your occasion, preferred date, venue location, estimated attendance and food preferences. Proposal details are discussed directly.',
  },
  {
    question: 'How far in advance should we enquire?',
    answer:
      'A standard lead time has not been published. Enquire once you have a date in mind so the team can confirm feasibility and availability.',
  },
  {
    question: 'Which locations do you currently serve?',
    answer:
      'Tellapur is the active business location published on this website. Catering service coverage is not listed as confirmed; please share your venue location and ask the team.',
  },
];

function CateringHero() {
  return (
    <section
      className="hs-catering-hero"
      id="catering-home"
      aria-labelledby="catering-page-title"
    >
      <div className="hs-container hs-catering-hero__layout">
        <div className="hs-catering-hero__copy">
          <p className="hs-eyebrow">Hyderabad · Multi-cuisine catering</p>
          <h1 id="catering-page-title">
            Food That Brings
            <br />
            <em>People Together.</em>
          </h1>
          <p className="hs-catering-hero__lead">
            From corporate gatherings and office meals to weddings and family
            celebrations, Hunger Stories brings a world of flavours to the table.
          </p>
          <div className="hs-actions">
            <a className="hs-button hs-button--primary" href="#catering-enquiry">
              Request a Catering Quote
              <ArrowRight aria-hidden="true" size={16} />
            </a>
            <a className="hs-button hs-catering-button--outline" href="#catering-occasions">
              Explore Catering
            </a>
          </div>
          <p className="hs-catering-hero__tagline">Every Flavour Has A Story.</p>
        </div>
        <figure className="hs-catering-hero__image">
          <FoodImage
            src="/images/food/catering-feast.jpg"
            alt="A table arranged with a variety of dishes"
            fill
            loading="eager"
            sizes="(max-width: 760px) 100vw, 58vw"
          />
          <figcaption>
            <strong>Food portfolio image</strong>
            <span>Not a named customer event</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function CateringOccasions() {
  return (
    <section
      className="hs-section hs-catering-occasions"
      id="catering-occasions"
      aria-labelledby="catering-occasions-title"
    >
      <div className="hs-container">
        <div className="hs-section-heading hs-section-heading--split">
          <div>
            <p className="hs-eyebrow">Catering by occasion</p>
            <h2 id="catering-occasions-title">One table. Many reasons to come together.</h2>
          </div>
          <p className="hs-section-heading__copy">
            Tell us what you are planning. We can discuss the food, format and
            practical details for your requirement.
          </p>
        </div>

        <div className="hs-catering-occasion-grid">
          {occasions.map((occasion) => (
            <article
              className={`hs-catering-occasion ${occasion.layout}`}
              key={occasion.title}
            >
              <div className="hs-catering-occasion__media">
                <FoodImage
                  src={occasion.image}
                  alt={occasion.alt}
                  fill
                  sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 58vw"
                />
              </div>
              <div className="hs-catering-occasion__copy">
                <span>{occasion.number} · Occasion</span>
                <h3>{occasion.title}</h3>
                <p>{occasion.description}</p>
                <a
                  className="hs-catering-occasion__link"
                  href={getWhatsAppUrl(
                    `Hi Hunger Stories, I would like to discuss catering for ${occasion.title.toLowerCase()}.`,
                    'catering',
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Discuss this occasion
                  <ArrowUpRight aria-hidden="true" size={15} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="hs-catering-inline-cta">
          <p>Formats and availability are confirmed through the enquiry.</p>
          <a className="hs-button hs-button--primary" href="#catering-enquiry">
            Discuss your requirement
            <ArrowRight aria-hidden="true" size={16} />
          </a>
        </div>
        <p className="hs-catering-photo-note">
          The photographs show food imagery and are not presented as completed customer events.
        </p>
      </div>
    </section>
  );
}

function CorporateMealSolutions() {
  return (
    <section
      className="hs-section hs-catering-corporate"
      id="corporate-meals"
      aria-labelledby="corporate-meals-title"
    >
      <div className="hs-container hs-catering-corporate__layout">
        <figure className="hs-catering-corporate__image">
          <FoodImage
            src="/images/food/signature-dal.jpg"
            alt="A prepared dish with accompaniments"
            fill
            sizes="(max-width: 800px) 100vw, 48vw"
          />
          <figcaption>Food portfolio image</figcaption>
        </figure>
        <div className="hs-catering-corporate__copy">
          <p className="hs-eyebrow">Corporate meals</p>
          <h2 id="corporate-meals-title">Food for meetings, workdays and team gatherings.</h2>
          <p>
            Tell us whether you are planning an office lunch, meeting meal or
            larger workplace requirement. The team can discuss food preferences
            and confirm which formats are currently available.
          </p>
          <ul>
            {corporateTopics.map((topic) => <li key={topic}>{topic}</li>)}
          </ul>
          <div className="hs-catering-meal-placeholder">
            <span>Meal-box / tray photography</span>
            <strong>Owner-supplied image needed</strong>
          </div>
          <a
            className="hs-button hs-button--dark"
            href={getWhatsAppUrl(
              'Hi Hunger Stories, I would like to discuss a corporate meal requirement.',
              'catering',
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            Discuss a corporate meal enquiry
            <ArrowUpRight aria-hidden="true" size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

function CateringFormats() {
  return (
    <section
      className="hs-section hs-catering-formats"
      id="catering-formats"
      aria-labelledby="catering-formats-title"
    >
      <div className="hs-container hs-catering-formats__layout">
        <div className="hs-catering-formats__intro">
          <p className="hs-eyebrow">Food &amp; service formats</p>
          <h2 id="catering-formats-title">Let’s find the right way to serve your gathering.</h2>
          <p>
            Share your preferences and requirements with the catering team.
            Each format below is an enquiry topic; availability is confirmed
            directly.
          </p>
          <a className="hs-button hs-button--primary" href="#catering-enquiry">
            Ask about availability
            <ArrowRight aria-hidden="true" size={16} />
          </a>
        </div>

        <ol className="hs-catering-formats__list">
          {formatsToConfirm.map((format, index) => (
            <li key={format}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{format}</h3>
              <small>Availability to confirm</small>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function CateringProcess() {
  return (
    <section
      className="hs-section hs-catering-process"
      id="catering-process"
      aria-labelledby="catering-process-title"
    >
      <div className="hs-container hs-catering-process__layout">
        <div>
          <p className="hs-eyebrow">How the enquiry works</p>
          <h2 id="catering-process-title">A thoughtful conversation, from first details to next steps.</h2>
          <p className="hs-catering-process__note">
            A catering proposal is discussed with the team, not generated
            automatically on this website.
          </p>
        </div>
        <ol className="hs-catering-process__steps">
          {processSteps.map((step, index) => (
            <li key={step.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function CateringFAQs() {
  return (
    <section
      className="hs-section hs-catering-faq"
      id="catering-faq"
      aria-labelledby="catering-faq-title"
    >
      <div className="hs-container hs-catering-faq__layout">
        <div className="hs-catering-faq__intro">
          <p className="hs-eyebrow">Good questions, clear answers</p>
          <h2 id="catering-faq-title">Before you get in touch.</h2>
          <p>
            Operational details such as quantities, formats, lead times and
            service locations are confirmed directly with the catering team.
          </p>
        </div>
        <div className="hs-catering-faq__items">
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function CateringPageSections() {
  return (
    <>
      <CateringHero />
      <CateringOccasions />
      <CorporateMealSolutions />
      <CateringFormats />
      <CuisineDiscovery />
      <FoodExperiences />
      <CateringProcess />
      <CateringFAQs />
      <section
        className="hs-section hs-catering-enquiry"
        id="catering-enquiry"
        aria-labelledby="catering-enquiry-title"
      >
        <div className="hs-container hs-catering-enquiry__layout">
          <div className="hs-catering-enquiry__intro">
            <p className="hs-eyebrow">Start a catering conversation</p>
            <h2 id="catering-enquiry-title">Tell us about your gathering.</h2>
            <p>
              Share the key details. We’ll prepare a WhatsApp message for you to
              review and send to the catering team.
            </p>
            <p className="hs-catering-enquiry__notice">
              Nothing is sent or stored by this website. The enquiry reaches the
              team only after you send the message in WhatsApp.
            </p>
          </div>
          <EnquiryForm mode="catering" />
        </div>
      </section>
    </>
  );
}
