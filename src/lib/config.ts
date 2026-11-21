/**
 * Hunger Stories — Central Brand & Dispatch Configuration
 * 
 * All external ordering channels, contact hotlines, location metadata,
 * and social links are centralized here. They can be customized directly
 * or overridden via environment variables for staging/production deployments.
 */

export const siteConfig = {
  brand: {
    name: 'Hunger Stories',
    tagline: 'Every Flavour Has A Story.',
    foundingYear: 2024,
    cuisineType: 'Premium Multi-Cuisine Restaurant & Catering',
    city: 'Hyderabad, Telangana, India',
    domain: 'https://about.hungerstories.com',
  },

  // Direct Communication Hotlines
  contact: {
    phoneDisplay: '+91 99593 33931',
    phoneHref: 'tel:+919959333931',
    cateringPhoneDisplay: '+91 88867 62323',
    cateringPhoneHref: 'tel:+918886762323',
    email: 'hello@hungerstories.in',
    emailHref: 'mailto:hello@hungerstories.in',
    whatsappPhone: '919959333931',
    cateringWhatsappPhone: '918886762323',
    hours: '12:00 PM – 3:30 PM & 6:30 PM – 1:00 AM',
    operatingDays: 'Open every day',
  },

  // Configurable External Ordering & Delivery URLs
  ordering: {
    swiggy:
      process.env.NEXT_PUBLIC_SWIGGY_URL ||
      'https://www.swiggy.com/city/hyderabad/hunger-stories-tellapur-road-lingampally-and-nallagandla-rest783323',
    zomato:
      process.env.NEXT_PUBLIC_ZOMATO_URL ||
      'https://www.zomato.com/hyderabad/hunger-stories-1-lingampally',
    ownly:
      process.env.NEXT_PUBLIC_OWNLY_URL ||
      'https://ownly.food/app/brand/BR444866',
    whatsappDefaultMessage:
      'Hi Hunger Stories, I would like to order fresh food from your kitchen',
    whatsappCateringMessage:
      'Hi Hunger Stories, I would like to enquire about your catering and event food services',
  },

  // Our Location
  locations: {
    tellapur: {
      name: 'Hunger Stories Tellapur',
      address: 'Hunger Stories, 18-52, Komaram Bheem Colony, Indira Nagar, Tellapur, 500089',
      streetAddress: '18-52, Komaram Bheem Colony, Indira Nagar',
      locality: 'Tellapur',
      postalCode: '500089',
      mapHref: 'https://maps.app.goo.gl/MdTnYai85ysyPVv37',
      serviceFormat: 'Takeaway and delivery through external ordering channels; no dine-in',
    },
  },
} as const;

/**
 * Generates an authorized WhatsApp deep link with URL-encoded greeting
 */
export function getWhatsAppUrl(customMessage?: string, purpose: 'order' | 'catering' = 'order'): string {
  const phone = purpose === 'catering'
    ? siteConfig.contact.cateringWhatsappPhone
    : siteConfig.contact.whatsappPhone;
  const text = encodeURIComponent(
    customMessage || siteConfig.ordering.whatsappDefaultMessage
  );
  return `https://wa.me/${phone}?text=${text}`;
}
