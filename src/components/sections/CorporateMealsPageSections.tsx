import FoodImage from '@/components/ui/FoodImage';
import { ArrowRight, ArrowUpRight, Mail, MessageCircle, Phone } from 'lucide-react';
import CuisineDiscovery from '@/components/sections/CuisineDiscovery';
import EnquiryForm from '@/components/sections/EnquiryForm';
import FoodExperiences from '@/components/sections/FoodExperiences';
import { getWhatsAppUrl, siteConfig } from '@/lib/config';

const corporateSolutions = [
  {
    title: 'Individual meal boxes',
    description:
      'Ask about individually packed meals and share the meal count and preferences you have in mind.',
    image: null,
    alt: '',
    caption: 'Owner-supplied meal-box photography needed',
  },
  {
    title: 'Office lunch trays',
    description:
      'Discuss office lunch requirements, preferred cuisines and the format that may suit your team.',
    image: '/images/food/signature-dal.jpg',
    alt: 'A prepared dish with accompaniments',
    caption: 'Food portfolio image, not a meal-tray photograph',
  },
  {
    title: 'Meetings & event meals',
    description:
      'Share the details of a meeting, conference or workplace event for a direct availability discussion.',
    image: '/images/food/catering-feast.jpg',
    alt: 'A table arranged with a variety of dishes',
    caption: 'Food spread image, not a named customer event',
  },
  {
    title: 'Bulk meal requirements',
    description:
      'Tell us the approximate quantity, timing and location you are considering. The team will confirm feasibility.',
    image: '/images/food/cuisine-chinese.jpg',
    alt: 'Chinese and Indo-Chinese food with vegetables',
    caption: 'Food portfolio image',
  },
];

const enquirySteps = [
  {
    title: 'Share the requirement',
    description:
      'Tell us the location, preferred date, approximate meal count and whether the need is one-time or recurring.',
  },
  {
    title: 'Discuss food preferences',
    description:
      'Share cuisine preferences and any relevant meal or event details with the team.',
  },
  {
    title: 'Confirm what is possible',
    description:
      'The team will discuss available formats and proposal details for the requirement.',
  },
  {
    title: 'Agree the arrangements',
    description:
      'Treat the enquiry as confirmed only after the details have been agreed directly.',
  },
];

function CorporateMealsHero() {
  return (
    <section className="hs-support-hero hs-corporate-hero" aria-labelledby="corporate-title">
      <div className="hs-container hs-support-hero__layout">
        <div className="hs-support-hero__copy">
          <p className="hs-eyebrow">Corporate meals · Hyderabad</p>
          <h1 id="corporate-title">
            Good Food.
            <br />
            <em>Better Workdays.</em>
          </h1>
          <p className="hs-support-hero__lead">
            Thoughtfully presented food solutions for office teams, business
            gatherings and corporate occasions.
          </p>
          <div className="hs-actions">
            <a className="hs-button hs-button--primary hs-button--editorial" href="#corporate-enquiry">
              Discuss Corporate Meal Requirements
              <ArrowRight aria-hidden="true" size={16} />
            </a>
            <a className="hs-button hs-button--outline" href="#corporate-solutions">
              Explore meal solutions
            </a>
          </div>
        </div>
        <figure className="hs-support-hero__image">
          <FoodImage
            src="/images/food/signature-dal.jpg"
            alt="A prepared dish with accompaniments"
            fill
            loading="eager"
            sizes="(max-width: 760px) 100vw, 56vw"
          />
          <figcaption>Food portfolio image</figcaption>
        </figure>
      </div>
    </section>
  );
}

function CorporateSolutions() {
  return (
    <section
      className="hs-section hs-corporate-solutions"
      id="corporate-solutions"
      aria-labelledby="corporate-solutions-title"
    >
      <div className="hs-container">
        <div className="hs-section-heading hs-section-heading--split">
          <div>
            <p className="hs-eyebrow">Corporate meal solutions</p>
            <h2 id="corporate-solutions-title">Start with the way your team eats.</h2>
          </div>
          <p className="hs-section-heading__copy">
            These are enquiry topics, not a fixed service list. Share your
            requirement and ask the team what is currently available.
          </p>
        </div>
        <div className="hs-corporate-solutions__grid">
          {corporateSolutions.map((solution, index) => (
            <article className="hs-corporate-solution" key={solution.title}>
              {solution.image ? (
                <figure className="hs-corporate-solution__image">
                  <FoodImage
                    src={solution.image}
                    alt={solution.alt}
                    fill
                    sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 34vw"
                  />
                  <figcaption>{solution.caption}</figcaption>
                </figure>
              ) : (
                <div className="hs-corporate-solution__placeholder">
                  <span>{solution.caption}</span>
                  <strong>Image requested from owner</strong>
                </div>
              )}
              <p className="hs-corporate-solution__number">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3>{solution.title}</h3>
              <p className="hs-corporate-solution__description">{solution.description}</p>
            </article>
          ))}
        </div>
        <div className="hs-corporate-solutions__cta">
          <a className="hs-button hs-button--dark" href="#corporate-enquiry">
            Talk through your requirement
            <ArrowRight aria-hidden="true" size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

function CorporateProcess() {
  return (
    <section className="hs-section hs-corporate-process" aria-labelledby="corporate-process-title">
      <div className="hs-container hs-corporate-process__layout">
        <div>
          <p className="hs-eyebrow">How corporate enquiries work</p>
          <h2 id="corporate-process-title">A direct conversation, not an instant booking.</h2>
        </div>
        <ol>
          {enquirySteps.map((step, index) => (
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

function CorporateEnquiry() {
  return (
    <section
      className="hs-section hs-corporate-enquiry"
      id="corporate-enquiry"
      aria-labelledby="corporate-enquiry-title"
    >
      <div className="hs-container hs-corporate-enquiry__layout">
        <div className="hs-corporate-enquiry__intro">
          <p className="hs-eyebrow">Corporate enquiries</p>
          <h2 id="corporate-enquiry-title">Tell us what your team needs.</h2>
          <p>
            Share the meal requirement, office or event location, preferred
            date, approximate count and cuisine preferences.
          </p>
          <div className="hs-corporate-enquiry__direct">
            <a href={siteConfig.contact.cateringPhoneHref}>
              <Phone aria-hidden="true" size={16} />
              {siteConfig.contact.cateringPhoneDisplay}
            </a>
            <a
              href={getWhatsAppUrl(
                'Hi Hunger Stories, I would like to discuss a corporate meal requirement.',
                'catering',
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle aria-hidden="true" size={16} />
              WhatsApp the catering team
              <ArrowUpRight aria-hidden="true" size={14} />
            </a>
            <a href={siteConfig.contact.emailHref}>
              <Mail aria-hidden="true" size={16} />
              {siteConfig.contact.email}
            </a>
          </div>
        </div>
        <div className="hs-corporate-enquiry__form">
          <EnquiryForm mode="corporate" />
        </div>
      </div>
    </section>
  );
}

export default function CorporateMealsPageSections() {
  return (
    <>
      <CorporateMealsHero />
      <CorporateSolutions />
      <CuisineDiscovery />
      <FoodExperiences />
      <CorporateProcess />
      <CorporateEnquiry />
    </>
  );
}
