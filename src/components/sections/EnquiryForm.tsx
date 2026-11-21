'use client';

import { useId, useState, type FormEvent } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { getWhatsAppUrl } from '@/lib/config';

type EnquiryMode = 'catering' | 'corporate';
type FieldName =
  | 'name'
  | 'mobile'
  | 'eventType'
  | 'eventDate'
  | 'eventLocation'
  | 'guestCount'
  | 'foodPreference'
  | 'email'
  | 'companyName'
  | 'preferredCuisine'
  | 'format'
  | 'frequency'
  | 'additionalDetails';

type EnquiryValues = Record<FieldName, string>;

type ValidationError = {
  field: FieldName;
  message: string;
};

const cateringEventTypes = [
  'Corporate event',
  'Wedding / reception',
  'Birthday / private celebration',
  'Puja / traditional function',
  'Housewarming',
  'Family gathering',
  'Other',
];

const corporateEventTypes = [
  'Corporate event',
  'Office lunch',
  'Meeting / conference meal',
  'Office celebration',
  'Bulk meal requirement',
  'Other',
];

const initialValues: EnquiryValues = {
  name: '',
  mobile: '',
  eventType: '',
  eventDate: '',
  eventLocation: '',
  guestCount: '',
  foodPreference: '',
  email: '',
  companyName: '',
  preferredCuisine: '',
  format: '',
  frequency: '',
  additionalDetails: '',
};

function validate(values: EnquiryValues): ValidationError[] {
  const errors: ValidationError[] = [];

  if (!values.name.trim()) {
    errors.push({ field: 'name', message: 'Enter your full name.' });
  }

  const mobile = values.mobile.trim().replace(/[\s()-]/g, '');
  const validIndianNumber = /^(?:[6-9]\d{9}|91[6-9]\d{9})$/.test(mobile);
  const validInternationalNumber = /^\+[1-9]\d{7,14}$/.test(mobile);
  if (!validIndianNumber && !validInternationalNumber) {
    errors.push({
      field: 'mobile',
      message: 'Enter a valid mobile number, including country code if outside India.',
    });
  }

  if (!values.eventType) {
    errors.push({ field: 'eventType', message: 'Choose an event or requirement type.' });
  }

  if (!values.eventDate) {
    errors.push({ field: 'eventDate', message: 'Choose the event date.' });
  } else {
    const now = new Date();
    const today = [
      now.getFullYear(),
      String(now.getMonth() + 1).padStart(2, '0'),
      String(now.getDate()).padStart(2, '0'),
    ].join('-');

    if (values.eventDate < today) {
      errors.push({ field: 'eventDate', message: 'Choose today or a future event date.' });
    }
  }

  if (!values.eventLocation.trim()) {
    errors.push({ field: 'eventLocation', message: 'Enter the event or office location.' });
  }

  if (!/^[1-9]\d*$/.test(values.guestCount.trim())) {
    errors.push({
      field: 'guestCount',
      message: 'Enter an approximate guest or meal count greater than zero.',
    });
  }

  if (!values.foodPreference) {
    errors.push({ field: 'foodPreference', message: 'Choose a food preference.' });
  }

  if (
    values.email.trim() &&
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())
  ) {
    errors.push({ field: 'email', message: 'Enter a valid email address or leave it blank.' });
  }

  return errors;
}

function buildMessage(values: EnquiryValues, mode: EnquiryMode): string {
  const message = [
    'Hello Hunger Stories,',
    '',
    mode === 'corporate'
      ? 'I would like to enquire about corporate meals.'
      : 'I would like to enquire about catering.',
    '',
    `Name: ${values.name.trim()}`,
    `Mobile: ${values.mobile.trim()}`,
    `Event type: ${values.eventType}`,
    `Event date: ${values.eventDate}`,
    `Location: ${values.eventLocation.trim()}`,
    `Approximate ${mode === 'corporate' ? 'meal' : 'guest'} count: ${values.guestCount.trim()}`,
    `Food preference: ${values.foodPreference}`,
  ];

  const optionalDetails: [string, string][] = [
    ['Email', values.email],
    ['Company', values.companyName],
    ['Preferred cuisine', values.preferredCuisine],
    ['Format to discuss', values.format],
    ['Frequency or schedule', values.frequency],
    ['Additional requirements', values.additionalDetails],
  ];

  for (const [label, value] of optionalDetails) {
    if (value.trim()) {
      message.push(`${label}: ${value.trim()}`);
    }
  }

  message.push('', 'Please contact me to discuss the details.');
  return message.join('\n');
}

export default function EnquiryForm({ mode }: { mode: EnquiryMode }) {
  const idPrefix = useId().replace(/:/g, '');
  const [values, setValues] = useState<EnquiryValues>(initialValues);
  const [errors, setErrors] = useState<ValidationError[]>([]);
  const [whatsAppUrl, setWhatsAppUrl] = useState<string | null>(null);

  const eventTypes = mode === 'corporate' ? corporateEventTypes : cateringEventTypes;
  const fieldId = (field: FieldName) => `${idPrefix}-${field}`;
  const fieldError = (field: FieldName) =>
    errors.find((error) => error.field === field)?.message;

  const updateField = (field: FieldName, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => current.filter((error) => error.field !== field));
    setWhatsAppUrl(null);
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setWhatsAppUrl(null);
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (nextErrors.length > 0) {
      document.getElementById(fieldId(nextErrors[0].field))?.focus();
      return;
    }

    setWhatsAppUrl(getWhatsAppUrl(buildMessage(values, mode), 'catering'));
  };

  const errorFor = (field: FieldName) => {
    const error = fieldError(field);
    return error ? (
      <span className="hs-enquiry-field__error" id={`${fieldId(field)}-error`}>
        {error}
      </span>
    ) : null;
  };

  return (
    <form className="hs-enquiry-form" onSubmit={onSubmit} noValidate>
      <p className="hs-enquiry-form__required-note">
        Fields marked required are needed to prepare your enquiry.
      </p>

      {errors.length > 0 && (
        <div className="hs-enquiry-form__errors" role="alert">
          <strong>Please check the following:</strong>
          <ul>
            {errors.map((error) => (
              <li key={error.field}>
                <a href={`#${fieldId(error.field)}`}>{error.message}</a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="hs-enquiry-form__grid">
        <div className="hs-enquiry-field">
          <label htmlFor={fieldId('name')}>Full name <span>Required</span></label>
          <input
            autoComplete="name"
            id={fieldId('name')}
            maxLength={120}
            name="name"
            required
            value={values.name}
            aria-invalid={Boolean(fieldError('name'))}
            aria-describedby={fieldError('name') ? `${fieldId('name')}-error` : undefined}
            onChange={(event) => updateField('name', event.target.value)}
          />
          {errorFor('name')}
        </div>

        <div className="hs-enquiry-field">
          <label htmlFor={fieldId('mobile')}>Mobile number <span>Required</span></label>
          <input
            autoComplete="tel"
            id={fieldId('mobile')}
            inputMode="tel"
            maxLength={20}
            name="mobile"
            required
            type="tel"
            value={values.mobile}
            aria-invalid={Boolean(fieldError('mobile'))}
            aria-describedby={fieldError('mobile') ? `${fieldId('mobile')}-error` : undefined}
            onChange={(event) => updateField('mobile', event.target.value)}
          />
          {errorFor('mobile')}
        </div>

        {mode === 'corporate' && (
          <div className="hs-enquiry-field">
            <label htmlFor={fieldId('companyName')}>Company name</label>
            <input
              autoComplete="organization"
              id={fieldId('companyName')}
              maxLength={160}
              name="companyName"
              value={values.companyName}
              onChange={(event) => updateField('companyName', event.target.value)}
            />
          </div>
        )}

        <div className="hs-enquiry-field">
          <label htmlFor={fieldId('eventType')}>
            {mode === 'corporate' ? 'Requirement type' : 'Event type'} <span>Required</span>
          </label>
          <select
            id={fieldId('eventType')}
            name="eventType"
            required
            value={values.eventType}
            aria-invalid={Boolean(fieldError('eventType'))}
            aria-describedby={
              fieldError('eventType') ? `${fieldId('eventType')}-error` : undefined
            }
            onChange={(event) => updateField('eventType', event.target.value)}
          >
            <option value="">Choose one</option>
            {eventTypes.map((eventType) => (
              <option key={eventType} value={eventType}>{eventType}</option>
            ))}
          </select>
          {errorFor('eventType')}
        </div>

        <div className="hs-enquiry-field">
          <label htmlFor={fieldId('eventDate')}>Preferred date <span>Required</span></label>
          <input
            id={fieldId('eventDate')}
            name="eventDate"
            required
            type="date"
            value={values.eventDate}
            aria-invalid={Boolean(fieldError('eventDate'))}
            aria-describedby={fieldError('eventDate') ? `${fieldId('eventDate')}-error` : undefined}
            onChange={(event) => updateField('eventDate', event.target.value)}
          />
          {errorFor('eventDate')}
        </div>

        <div className="hs-enquiry-field">
          <label htmlFor={fieldId('eventLocation')}>
            {mode === 'corporate' ? 'Office or event location' : 'Event location'}{' '}
            <span>Required</span>
          </label>
          <input
            id={fieldId('eventLocation')}
            maxLength={200}
            name="eventLocation"
            required
            value={values.eventLocation}
            aria-invalid={Boolean(fieldError('eventLocation'))}
            aria-describedby={
              fieldError('eventLocation') ? `${fieldId('eventLocation')}-error` : undefined
            }
            onChange={(event) => updateField('eventLocation', event.target.value)}
          />
          {errorFor('eventLocation')}
        </div>

        <div className="hs-enquiry-field">
          <label htmlFor={fieldId('guestCount')}>
            Approximate {mode === 'corporate' ? 'number of meals' : 'guest count'}{' '}
            <span>Required</span>
          </label>
          <input
            id={fieldId('guestCount')}
            inputMode="numeric"
            min="1"
            name="guestCount"
            required
            type="number"
            value={values.guestCount}
            aria-invalid={Boolean(fieldError('guestCount'))}
            aria-describedby={
              fieldError('guestCount') ? `${fieldId('guestCount')}-error` : undefined
            }
            onChange={(event) => updateField('guestCount', event.target.value)}
          />
          {errorFor('guestCount')}
        </div>

        <div className="hs-enquiry-field">
          <label htmlFor={fieldId('foodPreference')}>Food preference <span>Required</span></label>
          <select
            id={fieldId('foodPreference')}
            name="foodPreference"
            required
            value={values.foodPreference}
            aria-invalid={Boolean(fieldError('foodPreference'))}
            aria-describedby={
              fieldError('foodPreference') ? `${fieldId('foodPreference')}-error` : undefined
            }
            onChange={(event) => updateField('foodPreference', event.target.value)}
          >
            <option value="">Choose one</option>
            <option value="Vegetarian">Vegetarian</option>
            <option value="Non-vegetarian">Non-vegetarian</option>
            <option value="Both">Both</option>
            <option value="Prefer to discuss">Prefer to discuss</option>
          </select>
          {errorFor('foodPreference')}
        </div>

        <div className="hs-enquiry-field">
          <label htmlFor={fieldId('email')}>Email address</label>
          <input
            autoComplete="email"
            id={fieldId('email')}
            maxLength={254}
            name="email"
            type="email"
            value={values.email}
            aria-invalid={Boolean(fieldError('email'))}
            aria-describedby={fieldError('email') ? `${fieldId('email')}-error` : undefined}
            onChange={(event) => updateField('email', event.target.value)}
          />
          {errorFor('email')}
        </div>

        <div className="hs-enquiry-field">
          <label htmlFor={fieldId('preferredCuisine')}>Preferred cuisine</label>
          <input
            id={fieldId('preferredCuisine')}
            maxLength={160}
            name="preferredCuisine"
            value={values.preferredCuisine}
            onChange={(event) => updateField('preferredCuisine', event.target.value)}
          />
        </div>

        <div className="hs-enquiry-field">
          <label htmlFor={fieldId('format')}>Catering format you’d like to discuss</label>
          <input
            id={fieldId('format')}
            maxLength={160}
            name="format"
            value={values.format}
            onChange={(event) => updateField('format', event.target.value)}
          />
          <span className="hs-enquiry-field__hint">
            Availability and suitability are confirmed by the team.
          </span>
        </div>

        {mode === 'corporate' && (
          <div className="hs-enquiry-field">
            <label htmlFor={fieldId('frequency')}>Frequency or schedule to discuss</label>
            <select
              id={fieldId('frequency')}
              name="frequency"
              value={values.frequency}
              onChange={(event) => updateField('frequency', event.target.value)}
            >
              <option value="">Choose if known</option>
              <option value="One-time">One-time</option>
              <option value="Recurring / schedule to discuss">Recurring / schedule to discuss</option>
            </select>
            <span className="hs-enquiry-field__hint">
              The team will confirm whether the requested schedule is possible.
            </span>
          </div>
        )}

        <div className="hs-enquiry-field hs-enquiry-field--wide">
          <label htmlFor={fieldId('additionalDetails')}>Additional details</label>
          <textarea
            id={fieldId('additionalDetails')}
            maxLength={1000}
            name="additionalDetails"
            rows={4}
            value={values.additionalDetails}
            onChange={(event) => updateField('additionalDetails', event.target.value)}
          />
        </div>
      </div>

      <p className="hs-enquiry-form__privacy">
        Your details are used only to prepare this message. This website does not
        send or store your enquiry. Opening the link shares the prefilled draft
        with WhatsApp; review it and tap Send to contact Hunger Stories.
      </p>

      <div className="hs-enquiry-form__actions">
        <button className="hs-button hs-button--primary" type="submit">
          Prepare WhatsApp message
          <ArrowUpRight aria-hidden="true" size={16} />
        </button>
      </div>

      {whatsAppUrl && (
        <div className="hs-enquiry-form__ready" role="status" aria-live="polite">
          <strong>Your message is ready; nothing has been sent yet.</strong>
          <p>Open WhatsApp, review the details and tap Send to submit your enquiry.</p>
          <a
            className="hs-button hs-button--dark"
            href={whatsAppUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            Open WhatsApp to review and send
            <ArrowUpRight aria-hidden="true" size={16} />
          </a>
        </div>
      )}
    </form>
  );
}
