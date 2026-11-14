# HUNGER STORIES — MASTER PROJECT CONTEXT & AGENT HANDBOOK

> **Primary Directive for Any AI Agent or Engineer Picking Up This Project:**  
> Read this document completely before modifying any code. It captures the complete brand identity, business model, design philosophy, technical architecture, and implementation constraints of the **Hunger Stories** website.

---

## 1. Executive Summary & Brand Core

- **Brand Name:** HUNGER STORIES
- **Tagline:** *"Every Flavour Has A Story."*
- **Founded:** 2024
- **Headquarters:** Hyderabad, Telangana, India
- **Domain:** `https://about.hungerstories.com`
- **Repository:** `https://github.com/bmndayakar/hunger-stories-website-new`
- **Type of Business:** Multi-cuisine kitchen, delivery, and celebration catering.

### Our Location:
- **Hunger Stories Tellapur:** 18-52, Komaram Bheem Colony, Indira Nagar, Tellapur, 500089.
- **Hours supplied by owner:** 12:00 PM – 3:30 PM and 6:30 PM – 1:00 AM. Days of operation need confirmation.
- **Directions:** https://maps.app.goo.gl/MdTnYai85ysyPVv37

### Official Contact Channels:
- **Regular / small orders:** `+91 99593 33931`
- **Catering orders:** `+91 88867 62323`
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
5. **No Fake Customer Reviews:** Do not introduce fabricated or placeholder testimonials. The testimonials section has been removed entirely until verified reviews from Google, Dineout, or Swiggy are provided by the client.

### Authorized External Ordering Channels:
All ordering actions must point exclusively to:
- **Ownly:** `https://ownly.food/app/brand/BR444866`
- **WhatsApp:** Regular orders use `919959333931`; catering enquiries use `918886762323`.
- **Zomato:** `https://www.zomato.com/hyderabad/hunger-stories-1-lingampally`
- **Swiggy:** `https://www.swiggy.com/city/hyderabad/hunger-stories-tellapur-road-lingampally-and-nallagandla-rest783323` (keep less prominent).

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
│   │       └── location-tellapur.jpg # Tellapur craft kitchen & glowing tandoor
├── src/
│   ├── app/
│   │   ├── globals.css               # Design tokens, typography rules, Swiper CSS
│   │   ├── layout.tsx                # Fonts, SEO metadata, JSON-LD Schema
│   │   └── page.tsx                  # Single-page master composition
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx            # Sticky header + full-screen mobile drawer (5 links + Order CTA)
│   │   │   └── Footer.tsx            # Editorial sitemap & brand colophon
│   │   ├── sections/
│   │   │   ├── Hero.tsx              # Introductory hero
│   │   │   ├── BrandStory.tsx        # Chapter 01: Food Philosophy (#story)
│   │   │   ├── CuisineDiscovery.tsx  # Chapter 02: A World of Flavours (#cuisines)
│   │   │   ├── FoodExperiences.tsx   # Chapter 03: Signature Dishes (#experiences)
│   │   │   ├── Catering.tsx          # Chapter 04: The Art of Catering (#catering)
│   │   │   ├── Locations.tsx         # Chapter 05: Our Location (#locations)
│   │   │   ├── HungerStoriesExperience.tsx # Chapter 06: The Hunger Stories Experience
│   │   │   └── FinalCTA.tsx          # 07: Order Online (4 channels) & Catering Enquiry (#order, #contact)
│   │   └── ui/
│   │       ├── ScrollProgress.tsx    # Viewport scroll progress indicator
│   │       ├── StoryStack.tsx        # Sticky chapter panels and chapter navigation
│   │       ├── StoryMotion.tsx       # Reduced-motion provider and chapter reveals
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

### Hero (`Hero.tsx`)
- **Tone:** Welcoming, modern, energetic, distinctively Indian.
- **Headline:** *"Every Flavour Has A Story."*
- **Sub-copy:** *"Bringing people together through exceptional food, unforgettable flavours and experiences worth sharing."*
- **Primary CTA:** `Explore Our Story` → `#story`.
- **Secondary CTA:** `Order Online` → `#order`.
- **Visuals:** Split canvas featuring `hero-biryani.jpg` in a clay handi with live steam, amber backlighting, and an infinite marquee ribbon showcasing culinary pillars.

### Chapter 01: Our Food Philosophy (`BrandStory.tsx`)
- **Anchor ID:** `#story` (with alias `#about`)
- **Headline:** *"More Than Just A Meal."*
- **Tone:** Warm, authentic, and grounded.
- **Three Craft Pillars:**
  1. *Authentic Dum Cooking* (Slow-cooked in sealed clay handis).
  2. *Freshly Roasted Spices* (Stone-ground in small batches).
  3. *Honest, Wholesome Ingredients* (Quality ghee, fresh daily batches, authentic spices).

### Chapter 02: A World of Flavours (`CuisineDiscovery.tsx`)
- **Anchor ID:** `#cuisines`
- **Headline:** *"A World Of Exceptional Flavours."*
- **Interactions:** Top horizontal filter ribbon + smooth touch Swiper carousel with 5 traditions:
  1. Hyderabadi Dum Biryani
  2. North Indian Classics
  3. Charcoal Tandoor & Grills
  4. South Indian Coastal & Deccan
  5. Indo-Chinese Wok Art
- **Content:** Short, customer-friendly 2-sentence introductions without unnecessary ingredient jargon.

### Chapter 03: Signature Dishes (`FoodExperiences.tsx`)
- **Anchor ID:** `#experiences`
- **Headline:** *"Where Food Becomes An Experience."*
- **Sub-tag:** *Signature Dishes • Freshly Prepared Daily*
- **4-Course Asymmetric Spread:** Alternating 7-column and 5-column layout:
  - Course I: Hyderabadi Dum Biryani (`signature-biryani.jpg`)
  - Course II: Paneer Tikka Angara (`signature-paneer.jpg`)
  - Course III: Purani Dilli Butter Chicken (`signature-chicken.jpg`)
  - Course IV: 12-Hour Dal Makhani (`signature-dal.jpg`)

### Chapter 04: The Art of Catering (`Catering.tsx`)
- **Anchor ID:** `#catering`
- **Headline:** *"Made For Every Occasion."*
- **Capacity:** Serving 20 to 500+ Guests
- **Features:** Master centerpiece photo card (`catering-feast.jpg`) + interactive 5-format selector:
  1. *Corporate Events & Summits* (50–500+ guests)
  2. *Weddings & Receptions* (100+ guests)
  3. *Birthdays & Private Parties* (25–150 guests)
  4. *Family Gatherings & House Parties* (20–80 guests)
  5. *Bulk Orders & Box Meals* (50+ boxes)

### Chapter 05: Our Location (`Locations.tsx`)
- **Anchor ID:** `#locations`
- **Headline:** *"From Our Kitchen To You."*
- **Profile:** Tellapur kitchen with `location-tellapur.jpg`.
- **Actions:** Regular orders call (`tel:+919959333931`), Online Order (`#order`), and Google Maps Navigation (`Get Directions`).
- **Data Source:** Wired directly to `siteConfig.locations` in `src/lib/config.ts`.

### Chapter 06: The Hunger Stories Experience (`HungerStoriesExperience.tsx`)
- **Anchor ID:** `#hunger-stories-experience`
- Links to the existing locations, ordering, and catering sections.

### Chapter 07: Order Online & Catering Touchpoint (`FinalCTA.tsx`)
- **Anchor ID:** `#order` (with alias `#contact`)
- **Headline:** *"Your Next Food Story Starts Here."*
- **Strict Brand Awareness Directive:** Pure external dispatch links, NO checkout, NO shopping cart, NO prices.
- **External Channels:** Ownly, WhatsApp, Zomato, and a less prominent Swiggy link.
- **Catering Contact Desk:** Uses the catering hotline and WhatsApp number (`+91 88867 62323`). The enquiry form currently only changes local UI state and does not transmit submissions; do not treat it as an operational enquiry channel.

### Testimonials Note
- Previously contained placeholder customer reviews. Removed completely from codebase per client directive: *"Use real customer testimonials only. If verified testimonials are unavailable, remove the section rather than displaying fabricated placeholder reviews."* Can be restored to `page.tsx` once verified reviews are provided.

### Navigation & Header (`Navbar.tsx`)
- 5 clean navigation links: `Our Story` (`#story`), `Cuisines` (`#cuisines`), `Catering` (`#catering`), `Our Location` (`#locations`), and `Contact` (`#contact`).
- Prominent `Order Online` CTA button pointing directly to `#order`.
- Dual-mode header:
  - **Top of page:** Transparent with dark gradient scrim, using `logo-light.png`.
  - **Scrolled (>50px):** Warm Ivory background with 95% opacity, backdrop blur, hairline border, using dark `logo.png`.
  - **Mobile Menu Open:** Transparent overlay with `logo-light.png` and full 44px touch targets.
- Full-screen mobile menu drawer with touch-friendly navigation links and direct hotline actions.

---

## 6. Central Configuration File (`src/lib/config.ts`)

All URLs, contact details, and location data are centralized in `src/lib/config.ts`. **Never hardcode external links in individual components.**

The config contains the Tellapur address, directions, opening hours, distinct regular-order and catering contacts, and external channel URLs. `getWhatsAppUrl` selects the appropriate number for regular orders or catering. Ordering URLs may be overridden with the corresponding `NEXT_PUBLIC_*` environment variables at build time.

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
4. **Structured Data:** A single Tellapur `Restaurant` JSON-LD entity is embedded in `layout.tsx`. Opening hours are omitted until the days of operation are confirmed.

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

---

## 10. External Channels Verification & Client Action Items

| Channel | URL Configured in `src/lib/config.ts` | Verification Status | Owner Action Required |
|---|---|---|---|
| **Swiggy** | Owner-supplied listing in config | WAF challenge prevented independent verification | Confirm listing availability. |
| **WhatsApp** | Order and catering numbers in config | Links open WhatsApp; account ownership not independently verified | Confirm both numbers receive WhatsApp messages. |
| **Zomato** | Owner-supplied listing in config | Request timed out | Confirm listing availability. |
| **Ownly** | Owner-supplied brand URL in config | Redirected to a generic Hyderabad landing page during testing | Confirm the direct brand storefront works. |

---

## 11. Scroll-Driven Brand Storytelling

The hero introduces seven chapters: Our Food Philosophy → A World of Flavours → Signature Dishes → The Art of Catering → Our Location → The Hunger Stories Experience → Your Next Food Story Starts Here.

`StoryStack.tsx` wraps the seven chapters in sticky panels on desktop and mobile, with later panels layered above earlier ones. It measures each panel so that long chapters scroll fully before sticking; mobile panels have a short scroll cushion before the next panel overlaps. Avoid overflow-clipping or transformed ancestors around the stack. The desktop chapter navigation links to markers in normal document flow. Reduced-motion preferences use natural scrolling; keyboard focus within a chapter temporarily returns panels to normal flow so focused controls are not obscured.
