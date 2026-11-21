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
- **Hours supplied by owner:** Every day, 12:00 PM – 3:30 PM and 6:30 PM – 1:00 AM.
- **Service format supplied by owner:** No dine-in; takeaway and delivery through external ordering channels.
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
--color-ivory:          #FFF7ED; /* Primary canvas & dominant neutral background */
--color-sand:           #F3E6D5; /* Secondary soft warm parchment accent */
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
├── .env.example                    # Notes on the WhatsApp-first enquiry setup
├── public/
│   ├── images/
│   │   ├── favicon.png               # Official brand favicon
│   │   ├── logo.png                  # Charcoal brand logo (scrolled state)
│   │   ├── logo-light.png            # Ivory brand logo (hero state)
│   │   ├── logo-brand.png            # Full brand emblem with tagline
│   │   └── food/                     # Source photography and responsive WebP derivatives
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
│   │   ├── globals.css               # Design tokens, typography and responsive layout rules
│   │   ├── layout.tsx                # Fonts, SEO metadata, JSON-LD Schema
│   │   ├── sitemap.ts                # Sitemap for the six public routes
│   │   ├── robots.ts                 # Crawler rules and sitemap reference
│   │   ├── page.tsx                  # Catering-first homepage composition
│   │   ├── catering/page.tsx         # Dedicated catering enquiries page
│   │   ├── corporate-meals/page.tsx # Corporate meal enquiries
│   │   ├── our-food/page.tsx         # Non-transactional cuisine portfolio
│   │   ├── our-story/page.tsx        # Verified brand facts and story
│   │   └── contact/page.tsx          # Tellapur location and contact options
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx            # Sticky header + accessible mobile menu and external order links
│   │   │   ├── Footer.tsx            # Brand, navigation, verified contact and external links
│   │   │   └── SitePage.tsx          # Shared shell for supporting pages
│   │   ├── sections/
│   │   │   ├── Hero.tsx              # Catering-first editorial hero (#home)
│   │   │   ├── Catering.tsx          # Occasion-led catering and enquiry details (#catering, #corporate-meals)
│   │   │   ├── CateringPageSections.tsx # Dedicated catering occasions, formats, process and FAQs
│   │   │   ├── CorporateMealsPageSections.tsx # Corporate meals, cuisine, process and enquiry
│   │   │   ├── EnquiryForm.tsx       # Shared client-validated catering / corporate WhatsApp handoff
│   │   │   ├── OurFoodPageSections.tsx # Cuisine-specific visual portfolio
│   │   │   ├── OurStoryPageSections.tsx # Verified brand story content
│   │   │   ├── ContactPageSections.tsx # Tellapur hours, service format and contact channels
│   │   │   ├── HungerStoriesExperience.tsx # Brand principles and enquiry process
│   │   │   ├── CuisineDiscovery.tsx  # Non-transactional cuisine portfolio (#our-food)
│   │   │   ├── FoodExperiences.tsx   # Food gallery with owner-photo placeholders
│   │   │   ├── BrandStory.tsx        # Confirmed brand origin and philosophy (#our-story)
│   │   │   ├── Locations.tsx         # Tellapur location only (#locations)
│   │   │   └── FinalCTA.tsx          # Direct catering contact and external ordering (#contact)
│   │   └── ui/
│   │       ├── FoodImage.tsx         # Responsive WebP sources with original JPEG fallback
│   │       ├── ScrollProgress.tsx    # Subtle viewport scroll progress indicator
│   │       ├── StoryStack.tsx        # Legacy sticky chapter panels (not used on homepage)
│   │       ├── StoryMotion.tsx       # Reduced-motion provider and reveal wrapper
│   │       └── animations.tsx        # Framer Motion reveal wrappers
│   └── lib/
│       ├── config.ts                 # Centralized brand, hotline & dispatch config
├── next.config.ts                    # Next.js configuration
├── package.json                      # Build script set to "next build --webpack"
├── tsconfig.json                     # Strict TypeScript configuration
└── PROJECT_CONTEXT.md                # THIS HANDBOOK
```

---

## 5. Homepage Architecture (Catering-First)

The current homepage uses natural editorial scrolling rather than the previous full-page sticky stack. A slim scroll-progress line, responsive photography, hover treatments and progressive CSS view-timeline reveals provide motion without trapping mobile visitors. The persistent header provides Home, Catering, Corporate Meals, Our Food, Our Story and Contact, plus a quote CTA and compact external ordering links.

1. **Hero (`Hero.tsx`, `#home`):** Full-bleed food image, “Exceptional Food. Memorable Gatherings.” and catering/exploration actions.
2. **Occasions and enquiry context (`Catering.tsx`, `#catering`):** Corporate catering, weddings, private celebrations, traditional functions, meal-box enquiries and bulk requirements. Availability and service format are discussed, not asserted.
3. **Brand principles and enquiry steps (`HungerStoriesExperience.tsx`):** Multi-cuisine perspective, gatherings, menu discussion and an enquiry-led process.
4. **Cuisine portfolio (`CuisineDiscovery.tsx`, `#our-food`):** Biryani, North Indian, South Indian, Indo-Chinese, tandoor, vegetarian favourites, starters and accompaniments. No prices or transactional controls.
5. **Food gallery (`FoodExperiences.tsx`):** Food photography with clearly identified owner-photo placeholders for meal boxes and genuine event work.
6. **Brand story (`BrandStory.tsx`, `#our-story`):** Hyderabad roots, 2024 founding, multi-cuisine identity and established tagline; no unverified preparation claims.
7. **Location (`Locations.tsx`, `#locations`):** Tellapur only, with configured address, verified daily hours, takeaway/delivery format and directions.
8. **Contact and ordering (`FinalCTA.tsx`, `#contact`):** Catering enquiry CTAs, WhatsApp discussion, email and external Swiggy, Zomato, Ownly and WhatsApp order links. Catering details are prepared for an explicit WhatsApp handoff; there is no internal food-ordering flow.

Only the configured Tellapur business location is shown. Do not add service capacity, recurring delivery, SLA, food-preparation standards, customer reviews or completed-event claims without owner confirmation and genuine supporting material.

The dedicated `/catering/` route (`src/app/catering/page.tsx`) reuses the shared navigation, footer, progress indicator, cuisine portfolio, food gallery and enquiry form. Its occasion and format descriptions are enquiry topics only; unconfirmed availability, quantities, lead times and catering coverage must be verified with the team.

Supporting routes `/corporate-meals/`, `/our-food/`, `/our-story/` and `/contact/` use the shared `SitePage` shell and page-specific SEO metadata. The corporate page reuses the same enquiry form with corporate-specific fields and a WhatsApp handoff.

---

## 6. Central Configuration File (`src/lib/config.ts`)

All ordering URLs, contact details, and location data are centralized in `src/lib/config.ts`. **Never hardcode external ordering or contact links in individual components.**

The config contains the Tellapur address, directions, verified operating days and hours, service format, distinct regular-order and catering contacts, and verified external channel URLs. `getWhatsAppUrl` selects the regular-order or catering number. Ordering destinations can be overridden with their existing `NEXT_PUBLIC_*_URL` variables at build time; no form endpoint, API key or analytics ID is configured.

### Enquiry and conversion behavior

`src/components/sections/EnquiryForm.tsx` is shared by the catering and corporate enquiry sections. It validates required name, mobile, event type, non-past date, location, positive whole-number guest/meal count and food preference; optional fields include email, company, cuisine, format to discuss, corporate frequency/schedule and additional details. Catering formats are free text and explicitly subject to availability confirmation.

The form runs entirely in the browser. It prepares a message to the verified catering WhatsApp number (`918886762323`); a separate link opens WhatsApp for the visitor to review and send. Preparing or opening the draft is **not** an enquiry submission. This site does not send, store, or claim receipt of enquiry details. No backend credentials or environment variables are required for this handoff. A monitored form backend would require a separately approved service and hosting/configuration change.

The site has no configured analytics provider or identifier, so it currently emits no conversion analytics and collects no form or click events. If analytics is approved later, instrument separate events for `catering_cta_click`, `catering_form_start`, `catering_whatsapp_handoff`, `corporate_form_start`, `corporate_whatsapp_handoff`, `whatsapp_click`, `swiggy_click`, `zomato_click`, and `ownly_click`. Do not label a WhatsApp handoff as a successful form submission; the site cannot observe whether the visitor sends the message.

---

## 7. Build, Verification & Technical Notes

### Key Scripts in `package.json`:
- `npm run dev`: Starts local development server on port 3000.
- `npm run build`: Runs `next build --webpack` (Webpack is explicitly used to ensure 100% stable compilation on Windows).
- `npm run start`: Starts production Node.js server.
- `npm run lint`: Runs ESLint checks.

### Known Technical Workarounds:
1. **React 19 SSR Prerender:** Avoid calling `new Date().getFullYear()` directly during render in client components. A static range `2024–2026` is used to prevent hydration mismatches.
2. **Static-export image delivery:** `FoodImage.tsx` serves responsive WebP variants at 480px, 640px, 960px and the source image width, with the original JPEG as a fallback. When adding or replacing a source photo, generate matching variants in `public/images/food/` and update the component's `responsiveSources` map.
3. **Google Fonts in Offline/Sandbox Environments:** Fonts are preconnected and linked via HTML `<head>` tags in `layout.tsx` with CSS fallback variables, ensuring builds succeed even in restricted network environments.
4. **Structured Data:** A single Tellapur `Restaurant` JSON-LD entity is embedded in `layout.tsx`. Do not add business details to structured data unless verified.
5. **Static SEO routes:** `src/app/sitemap.ts` and `src/app/robots.ts` generate `sitemap.xml` and `robots.txt` for the six public routes during export.

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

- [ ] Keep `CuisineDiscovery.tsx` as a visual food portfolio — **never add prices, cart controls or dish ordering actions**.
- [ ] If changing phone numbers or ordering URLs, modify ONLY [`src/lib/config.ts`](file:///c:/Users/dayam/Documents/hunger-stories-website-new/src/lib/config.ts) or set the corresponding `NEXT_PUBLIC_*` environment variables.
- [ ] Do not state catering formats, capacities, delivery areas, operating hours or guarantees unless confirmed by the owner.
- [ ] Always verify `npm run build` succeeds with exit code 0 before pushing changes to `main`.

---

## 10. External Channels Verification & Client Action Items

| Channel | URL Configured in `src/lib/config.ts` | Verification Status | Owner Action Required |
|---|---|---|---|
| **Swiggy** | Owner-supplied listing in config | WAF challenge prevented independent verification | Confirm listing availability. |
| **WhatsApp** | Order and catering numbers in config | Links open WhatsApp; account ownership not independently verified | Confirm both numbers receive WhatsApp messages. |
| **Zomato** | Owner-supplied listing in config | Request timed out | Confirm listing availability. |
| **Ownly** | Owner-supplied brand URL in config | Redirected to a generic Hyderabad landing page during testing | Confirm the direct brand storefront works. |

### Supporting page owner inputs
- Provide genuine corporate meal-box, tray, catering delivery and event photographs to replace the clearly marked gallery placeholders.
- Provide the owner's explanation of the Hunger Stories name and any fuller food/hospitality philosophy to expand the Our Story page without inventing brand history.

---

## 11. Scroll-Driven Brand Storytelling

The homepage currently uses natural document flow on desktop and mobile. The header remains sticky, the progress line tracks page scroll, and supported browsers reveal selected content with CSS view-timeline animation. These effects are progressive enhancements; content remains visible without them and reduced-motion preferences disable decorative movement. `StoryStack.tsx` remains in the codebase as a legacy component but is not mounted on the homepage. Do not reintroduce sticky overlapping panels that obstruct reading, focus, or natural mobile scrolling.
