import { ArrowRight } from 'lucide-react';

const principles = [
  {
    number: '01',
    title: 'A multi-cuisine perspective',
    description:
      'Explore a food portfolio spanning biryani, North and South Indian, Indo-Chinese, tandoor and vegetarian favourites.',
  },
  {
    number: '02',
    title: 'Food for different gatherings',
    description:
      'From corporate requirements to family occasions, start with the people and the moment you are planning for.',
  },
  {
    number: '03',
    title: 'A menu conversation',
    description:
      'Share your preferences and questions. The available menu and format can be discussed directly with the team.',
  },
];

const processSteps = [
  {
    title: 'Tell us about the occasion',
    description: 'Share the kind of gathering, date and location, if known.',
  },
  {
    title: 'Share the food in mind',
    description: 'Tell us about cuisine preferences and approximate headcount.',
  },
  {
    title: 'Discuss availability and format',
    description: 'The catering team can talk through what is currently available.',
  },
  {
    title: 'Agree the next steps',
    description: 'Review the details together before confirming your requirements.',
  },
];

export default function HungerStoriesExperience() {
  return (
    <>
      <section
        className="hs-section hs-why"
        id="why-hunger-stories"
        aria-labelledby="why-title"
      >
        <div className="hs-container">
          <div className="hs-section-heading hs-section-heading--light">
            <p className="hs-eyebrow">Why Hunger Stories</p>
            <h2 id="why-title">Food is part of how a gathering feels.</h2>
            <p className="hs-section-heading__copy">
              A multi-cuisine food brand for the occasions, people and preferences
              that come together around a table.
            </p>
          </div>
          <div className="hs-principles">
            {principles.map((principle) => (
              <article className="hs-principle" key={principle.number}>
                <span>{principle.number}</span>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="hs-section hs-process" id="process" aria-labelledby="process-title">
        <div className="hs-container">
          <div className="hs-section-heading hs-section-heading--split">
            <div>
              <p className="hs-eyebrow">The catering conversation</p>
              <h2 id="process-title">A few clear steps to get started.</h2>
            </div>
            <a className="hs-text-link" href="/catering/#catering-enquiry">
              Start an enquiry
              <ArrowRight aria-hidden="true" size={16} />
            </a>
          </div>
          <ol className="hs-process__steps">
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
    </>
  );
}
