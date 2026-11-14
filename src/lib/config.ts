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
    cuisineType: 'Premium Multi-Cuisine & Artisanal Banquets',
    city: 'Hyderabad, Telangana, India',
    coordinates: '17.4065° N, 78.4772° E',
    domain: 'https://about.hungerstories.com',
  },

  // Direct Communication Hotlines
  contact: {
    phoneDisplay: '+91 88867 62323',
    phoneHref: 'tel:+918886762323',
    email: 'hello@hungerstories.in',
    emailHref: 'mailto:hello@hungerstories.in',
    whatsappPhone: '918886762323',
    hours: '11:30 AM – 11:30 PM Daily',
  },

  // Configurable External Ordering & Dispatch URLs
  ordering: {
    swiggy:
      process.env.NEXT_PUBLIC_SWIGGY_URL ||
      'https://www.swiggy.com/restaurants/hunger-stories-tellapur-hyderabad',
    zomato:
      process.env.NEXT_PUBLIC_ZOMATO_URL ||
      'https://www.zomato.com/hyderabad/hunger-stories-tellapur',
    ownly:
      process.env.NEXT_PUBLIC_OWNLY_URL ||
      '#',
    whatsappDefaultMessage:
      'Hi Hunger Stories, I would like to order fresh food from your kitchen',
    whatsappCateringMessage:
      'Hi Hunger Stories, I would like to inquire about your catering and banquet services',
  },

  // Social & Community Channels
  social: {
    instagram:
      process.env.NEXT_PUBLIC_INSTAGRAM_URL ||
      'https://instagram.com/hungerstories.hyd',
    facebook:
      process.env.NEXT_PUBLIC_FACEBOOK_URL ||
      'https://facebook.com/hungerstories.hyd',
  },

  // The Two Sanctuaries
  sanctuaries: {
    manikonda: {
      name: 'Manikonda Dining Room',
      type: 'Flagship Restaurant & Table Service',
      badge: 'Dine-In • Takeaway',
      address: 'Puppalaguda - Manikonda Main Road, Hyderabad, Telangana 500089',
      hours: '12:00 PM – 11:30 PM Daily',
      phone: '+91 88867 62323',
      phoneHref: 'tel:+918886762323',
      coverage: 'Manikonda, Shaikpet, Jubilee Hills Checkpost, Puppalaguda, Tolichowki',
      mapQuery: 'Hunger+Stories+Manikonda+Hyderabad',
    },
    tellapur: {
      name: 'Tellapur Craft Hub',
      type: 'High-Heat Cloud Kitchen & Express Dispatch',
      badge: 'Express Delivery Hub',
      address: 'Survey No. 42, Near ORR Junction, Tellapur Road, Hyderabad, Telangana 502032',
      hours: '11:30 AM – 11:30 PM Daily',
      phone: '+91 88867 62323',
      phoneHref: 'tel:+918886762323',
      coverage: 'Tellapur, Kollur, Financial District, Kokapet, Gachibowli, Nallagandla',
      mapQuery: 'Hunger+Stories+Tellapur+Hyderabad',
    },
  },
} as const;

/**
 * Generates an authorized WhatsApp deep link with URL-encoded greeting
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const phone = siteConfig.contact.whatsappPhone;
  const text = encodeURIComponent(
    customMessage || siteConfig.ordering.whatsappDefaultMessage
  );
  return `https://wa.me/${phone}?text=${text}`;
}
