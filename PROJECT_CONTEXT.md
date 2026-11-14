# HUNGER STORIES — MASTER PROJECT CONTEXT & AGENT HANDBOOK

> **Primary Directive for Any AI Agent or Engineer Picking Up This Project:**  
> Read this document completely before modifying any code. It captures the complete brand identity, business model, design philosophy, technical architecture, and implementation constraints of the **Hunger Stories** website.

---

## 1. Executive Summary & Brand Core

- **Brand Name:** HUNGER STORIES
- **Tagline:** *"Every Flavour Has A Story."*
- **Founded:** 2024
- **Headquarters:** Hyderabad, Telangana, India
- **Coordinates:** `17.4065° N, 78.4772° E`
- **Domain:** `https://about.hungerstories.com`
- **Repository:** `https://github.com/bmndayakar/hunger-stories-website-new`
- **Type of Business:** Artisanal multi-cuisine hospitality brand, dine-in restaurant, express delivery kitchen, and celebration catering services.

### Our Two Locations:
1. **Manikonda Dining Room (House 01):**
   - **Role:** Flagship Sit-Down Restaurant & Table Service
   - **Location:** Puppalaguda - Manikonda Main Road, Hyderabad 500089
   - **Ambiance:** Warm amber lighting, teak dining tables, private family booths, open aroma counter.
   - **Hours:** 12:00 PM – 11:30 PM Daily
2. **Tellapur Craft Hub (House 02):**
   - **Role:** High-Heat Cloud Kitchen & Express Dispatch Hub
   - **Location:** Survey No. 42, Near ORR Junction, Tellapur Road, Hyderabad 502032
   - **Focus:** Engineered for speed, heat retention, and tamper-evident sealed packaging serving Western Hyderabad's IT corridors (Financial District, Kokapet, Gachibowli, Tellapur).
   - **Hours:** 11:30 AM – 11:30 PM Daily

### Official Contact Channels:
- **Hotline / Banquet Desk:** `+91 88867 62323`
- **WhatsApp Concierge:** `+91 88867 62323` (`918886762323`)
- **Executive Email:** `hello@hungerstories.in`

---

## 2. Strict Business Rules & Non-Negotiables

> [!IMPORTANT]
> **THIS IS A BRAND AWARENESS WEBSITE — NOT AN E-COMMERCE STORE.**

Under **NO CIRCUMSTANCES** should any agent implement:
1. **No Prices or Pricing Tables:** Food experiences are presented as culinary storytelling, not menu price lists.
2. **No Shopping Cart or Cart State:** No drawer, badge count, or add-to-cart buttons.
3. **No Checkout Engine or Payment Gateways:** No Stripe, Razorpay, Cashfree, or UPI payment processing.
4. **No Internal Ordering Flow:** All ordering MUST route externally to verified third-party platforms.
5. **No Fake Customer Identities:** Testimonials must remain explicitly marked as placeholders until real Google/Dineout reviews are supplied by the client.

### Authorized External Ordering Channels:
All ordering actions must point exclusively to:
- **Swiggy:** `https://www.swiggy.com/restaurants/hunger-stories-tellapur-hyderabad`
- **Zomato:** `https://www.zomato.com/hyderabad/hunger-stories-tellapur`
- **Ownly:** Direct brand dispatch (configurable via `NEXT_PUBLIC_OWNLY_URL`)
- **WhatsApp Concierge:** Pre-formatted message to `https://wa.me/918886762323?text=...`

---

## 3. Design Philosophy & Aesthetic Blueprint

The website design is inspired by high-end luxury editorial experiences (specifically referencing the craftsmanship of `inkspire-zeta-one.vercel.app` and `alankar-wall-studios.vercel.app`), avoiding generic SaaS components, repetitive two-column card grids, and aggressive gradients.

### Brand Color Palette:
```css
--color-ivory:          #FFF8EF; /* Primary canvas & dominant neutral background */
--color-sand:           #F3E8D9; /* Secondary soft warm parchment accent */
--color-charcoal:       #35363A; /* Primary editorial typography & architectural lines */
--color-charcoal-light: #525358; /* Secondary copy & metadata text */
--color-espresso:       #30231F; /* Luxury dark salon canvas (Hero, Banquet card, Testimonials) */
--color-orange:         #F69522; /* Signature Brand Orange (Primary CTA & highlights) */
--color-red:            #EA2628; /* Story Red (Accent marks & selective badges) */
--color-white:          #FFFFFF; /* Surface cards & bright contrast elements */
```

### Typography Hierarchy:
- **Headline Serif:** `Playfair Display` (weights 400, 600, 700, 800) loaded via Google Fonts. Used for major editorial statements.
- **Serif Italic Emphasis:** Custom utility class `.font-editorial-italic` applied to evocative words in headlines.
- **Interface & Body Sans:** `Manrope` (weights 300 to 800). Used for navigation, narratives, specs, and form inputs.
- **Eyebrow Tags:** `.eyebrow-tag` with `font-size: 0.6875rem`, `letter-spacing: 0.28em`, uppercase, bold.

---

## 4. Codebase Architecture & File Structure

```
hunger-stories-website-new/
├── public/
│   ├── images/
│   │   ├── favicon.png               # Official brand favicon
│   │   ├── logo.png                  # Charcoal brand logo (scrolled state)
│   │   ├── logo-light.png            # Ivory brand logo (hero state)
│   │   ├── logo-brand.png            # Full brand emblem with tagline
│   │   └── food/                     # High-resolution commercial photography
│   │       ├── hero-biryani.jpg      # Flagship Hyderabadi Dum Biryani in clay handi
│   │       ├── craft-spices.jpg      # Whole ancestral spices with stone mortar
│   │       ├── signature-biryani.jpg # Unsealing clay handi with saffron steam
│   │       ├── signature-chicken.jpg # Purani Dilli Butter Chicken in copper karahi
│   │       ├── signature-paneer.jpg  # Charcoal-roasted Paneer Tikka Angara
│   │       ├── signature-dal.jpg     # 12-hour simmered Dal Makhani in stoneware
│   │       ├── cuisine-south.jpg     # Ghee roast cone dosa on banana leaf
│   │       ├── cuisine-chinese.jpg   # High-flame wok toss with scallions & chili
│   │       ├── catering-feast.jpg    # Grand royal banquet table setup
│   │       ├── location-manikonda.jpg# Manikonda dining room luxury interior
│   │       └── location-tellapur.jpg # Tellapur craft kitchen & glowing tandoor
├── src/
│   ├── app/
│   │   ├── globals.css               # Design tokens, typography rules, Swiper CSS
│   │   ├── layout.tsx                # Fonts, SEO metadata, JSON-LD Schema
│   │   └── page.tsx                  # Single-page master composition
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx            # Sticky header + full-screen mobile drawer
│   │   │   └── Footer.tsx            # Editorial sitemap & brand colophon
│   │   ├── sections/
│   │   │   ├── Hero.tsx              # 01: Hero — Welcome to Hunger Stories (#hero)
│   │   │   ├── BrandStory.tsx        # 02: Our Story — More Than Just A Meal (#story)
│   │   │   ├── CuisineDiscovery.tsx  # 03: Explore Our Cuisines (#cuisines)
│   │   │   ├── FoodExperiences.tsx   # 04: Signature Dishes (#experiences)
│   │   │   ├── Catering.tsx          # 05: Catering & Celebrations (#catering)
│   │   │   ├── Locations.tsx         # 06: Our Locations — Manikonda & Tellapur (#locations)
│   │   │   ├── Testimonials.tsx      # 07: Customer Experiences (#testimonials)
│   │   │   └── FinalCTA.tsx          # 08: Order Online & Catering Enquiries (#order)
│   │   └── ui/
│   │       ├── ScrollProgress.tsx    # Viewport scroll progress indicator
│   │       └── animations.tsx        # Framer Motion reveal wrappers
│   └── lib/
│       └── config.ts                 # Centralized brand, hotline & dispatch config
├── next.config.ts                    # Next.js configuration
├── package.json                      # Build script set to "next build --webpack"
├── tsconfig.json                     # Strict TypeScript configuration
└── PROJECT_CONTEXT.md                # THIS HANDBOOK
```

---

## 5. Section-by-Section Anatomy (V2 Streamlined)

### 01: Hero (`Hero.tsx`)
- **Tone:** Welcoming, modern, energetic, distinctively Indian.
- **Headline:** *"Every Flavour Has A Story."*
- **Sub-copy:** *"Bringing people together through exceptional food, unforgettable flavours and experiences worth sharing."*
- **Primary CTA:** `Explore Our Story` → `#story`.
- **Secondary CTA:** `Order Online` → `#order`.
- **Visuals:** Split canvas featuring `hero-biryani.jpg` in a clay handi with live steam, amber backlighting, and an infinite marquee ribbon showcasing culinary pillars.

### 02: Our Story (`BrandStory.tsx`)
- **Anchor ID:** `#story` (with alias `#about`)
- **Headline:** *"More Than Just A Meal."*
- **Tone:** Warm, authentic, and grounded.
- **Three Craft Pillars:**
  1. *Authentic Dum Cooking* (Slow-cooked in sealed clay handis).
  2. *Freshly Roasted Spices* (Stone-ground in small batches).
  3. *Honest, Wholesome Ingredients* (Pure ghee, fresh daily batches).

### 03: Explore Our Cuisines (`CuisineDiscovery.tsx`)
- **Anchor ID:** `#cuisines`
- **Headline:** *"A World Of Exceptional Flavours."*
- **Interactions:** Top horizontal filter ribbon + smooth touch Swiper carousel with 5 traditions:
  1. Hyderabadi Dum Biryani
  2. North Indian Classics
  3. Charcoal Tandoor & Grills
  4. South Indian Coastal & Deccan
  5. Indo-Chinese Wok Art
- **Content:** Short, punchy 1-2 sentence introductions, key flavours, and popular dishes.

### 04: Signature Food Experiences (`FoodExperiences.tsx`)
- **Anchor ID:** `#experiences` (with alias `#story`)
- **Headline:** *"Where Food Becomes An Experience."*
- **Sub-tag:** *Chef's Highlights • Freshly Prepared Daily*
- **4-Course Asymmetric Spread:** Alternating 7-column and 5-column layout:
  - Course I: Hyderabadi Dum Biryani (`signature-biryani.jpg`)
  - Course II: Paneer Tikka Angara (`signature-paneer.jpg`)
  - Course III: Purani Dilli Butter Chicken (`signature-chicken.jpg`)
  - Course IV: 12-Hour Dal Makhani (`signature-dal.jpg`)

### 05: Catering & Celebrations (`Catering.tsx`)
- **Anchor ID:** `#catering`
- **Headline:** *"Made For Every Occasion."*
- **Capacity:** Serving 20 to 2,000+ Guests
- **Features:** Master centerpiece photo card (`catering-feast.jpg`) + interactive 5-format selector:
  1. *Corporate Events & Summits* (50–1,000+ guests)
  2. *Weddings & Receptions* (100–2,000+ guests)
  3. *Birthdays & Private Parties* (25–150 guests)
  4. *Family Gatherings & House Parties* (20–80 guests)
  5. *Bulk Orders & Box Meals* (50–2,000+ boxes)

### 06: Our Locations (`Locations.tsx`)
- **Anchor ID:** `#locations`
- **Headline:** *"Visit Us or Order In."*
- **Two Profiles:**
  - *Manikonda Restaurant* (Dine-In • Takeaway) with `location-manikonda.jpg`
  - *Tellapur Cloud Kitchen* (Express Delivery Hub) with `location-tellapur.jpg`
- **Actions:** High-contrast touch buttons: Direct Call (`tel:+918886762323`), Online Order (`#order`), and Google Maps Navigation (`Get Directions`).
- **Data Source:** Wired directly to `siteConfig.locations` in `src/lib/config.ts`.

### 07: Order Online & Catering Touchpoint (`FinalCTA.tsx`)
- **Anchor ID:** `#order` (with alias `#contact`)
- **Headline:** *"Your Next Food Story Starts Here."*
- **Strict Brand Awareness Directive:** Pure external dispatch links, NO checkout, NO shopping cart, NO prices, and NO internal submission forms.
- **4 Prominent External Channels:**
  1. **Swiggy:** Direct order link for Tellapur & Western Hyderabad delivery (`siteConfig.ordering.swiggy`).
  2. **Zomato:** Direct order link for Tellapur delivery & Manikonda dine-in (`siteConfig.ordering.zomato`).
  3. **Ownly:** Direct brand kitchen ordering (`https://order.hungerstories.com`).
  4. **WhatsApp:** Instant concierge chat with kitchen team (`https://wa.me/918886762323...`).
- **Integrated Catering & Event Desk:** Direct hotline (`+91 88867 62323`), WhatsApp concierge link, and email inquiries. Clean non-form touchpoint eliminating fake form submissions.

### Testimonials Note
- Previously contained placeholder customer reviews. Removed per client directive: *"Use real customer testimonials only. If verified testimonials are unavailable, remove the section rather than displaying fabricated placeholder reviews."* Can be restored to `page.tsx` once verified reviews are provided.

### Navigation & Header (`Navbar.tsx`)
- Dual-mode header:
  - **Top of page:** Transparent with dark gradient scrim, using `logo-light.png`.
  - **Scrolled (>50px):** Warm Ivory background with 95% opacity, backdrop blur, hairline border, using dark `logo.png`.
  - **Mobile Menu Open:** Transparent overlay with `logo-light.png` and full 44px touch targets.
- Full-screen mobile menu drawer with touch-friendly navigation links and direct hotline actions.

---

## 6. Central Configuration File (`src/lib/config.ts`)

All URLs, contact details, and location data are centralized in `src/lib/config.ts`. **Never hardcode external links in individual components.**

```typescript
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
  contact: {
    phoneDisplay: '+91 88867 62323',
    phoneHref: 'tel:+918886762323',
    email: 'hello@hungerstories.in',
    emailHref: 'mailto:hello@hungerstories.in',
    whatsappPhone: '918886762323',
    hours: '11:30 AM – 11:30 PM Daily',
  },
  ordering: {
    swiggy: process.env.NEXT_PUBLIC_SWIGGY_URL || 'https://www.swiggy.com/restaurants/hunger-stories-tellapur-hyderabad',
    zomato: process.env.NEXT_PUBLIC_ZOMATO_URL || 'https://www.zomato.com/hyderabad/hunger-stories-tellapur',
    ownly: process.env.NEXT_PUBLIC_OWNLY_URL || '#',
    whatsappDefaultMessage: 'Hi Hunger Stories, I would like to order fresh food from your kitchen',
    whatsappCateringMessage: 'Hi Hunger Stories, I would like to inquire about your catering and banquet services',
  },
  locations: {
    manikonda: { ... },
    tellapur: { ... }
  }
};

export function getWhatsAppUrl(customMessage?: string): string;
```

---

## 7. Build, Verification & Technical Notes

### Key Scripts in `package.json`:
- `npm run dev`: Starts local development server on port 3000.
- `npm run build`: Runs `next build --webpack` (Webpack is explicitly used to ensure 100% stable compilation on Windows).
- `npm run start`: Starts production Node.js server.
- `npm run lint`: Runs ESLint checks.

### Known Technical Workarounds:
1. **React 19 SSR Prerender:** Avoid calling `new Date().getFullYear()` directly during render in client components. A static range `2024–2026` is used to prevent hydration mismatches.
2. **Swiper CSS Resolution on Windows:** Swiper core CSS has been integrated directly into `src/app/globals.css`. Do not import `swiper/css/pagination` or `swiper/css` directly inside components to prevent Windows loader pathing issues.
3. **Google Fonts in Offline/Sandbox Environments:** Fonts are preconnected and linked via HTML `<head>` tags in `layout.tsx` with CSS fallback variables, ensuring builds succeed even in restricted network environments.
4. **Structured Data:** Comprehensive Schema.org `Restaurant` and `CateringService` JSON-LD is embedded in `layout.tsx`.

---

## 8. Deployment Procedures

### A. Deploy to Hostinger (Static Web Hosting `public_html`):
1. In `next.config.ts`, set:
   ```typescript
   const nextConfig: NextConfig = {
     output: 'export',
     images: { unoptimized: true },
   };
   ```
2. Run `npm run build`.
3. Upload the generated `out/` folder contents into Hostinger File Manager at `public_html`.
4. Enable Free SSL in Hostinger hPanel.

### B. Deploy to Hostinger VPS (Node.js + PM2 + Nginx):
1. SSH into VPS and clone repository.
2. Run `npm install && npm run build`.
3. Run `pm2 start npm --name "hungerstories" -- start -- -p 3000`.
4. Proxy port 80/443 via Nginx to `http://127.0.0.1:3000`.
5. Issue SSL via `certbot --nginx -d about.hungerstories.com`.

### C. Deploy to Vercel:
1. Import GitHub repository `https://github.com/bmndayakar/hunger-stories-website-new`.
2. Framework preset: Next.js.
3. Build command: `npm run build`.
4. Deploy.

---

## 9. Immediate Checklist for Future Developers / Agents

- [ ] When adding dishes, add them to `FoodExperiences.tsx` or `CuisineDiscovery.tsx` with storytelling descriptions — **never add prices**.
- [ ] If changing phone numbers or ordering URLs, modify ONLY [`src/lib/config.ts`](file:///c:/Users/dayam/Documents/hunger-stories-website-new/src/lib/config.ts) or set the corresponding `NEXT_PUBLIC_*` environment variables.
- [ ] If creating new sections, maintain the chapter numbering format (`Chapter XX / 07 • Title`) to preserve editorial continuity.
- [ ] Always verify `npm run build` succeeds with exit code 0 before pushing changes to `main`.
