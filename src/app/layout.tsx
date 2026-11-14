import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://about.hungerstories.com"),
  title: "Hunger Stories — Every Flavour Has A Story | Premium Multi-Cuisine Restaurant & Catering, Hyderabad",
  description:
    "Hunger Stories is a craft multi-cuisine restaurant and catering kitchen in Hyderabad, India. Experience authentic slow-dum Hyderabadi biryani, rich North Indian curries, tandoori grills, and bespoke celebration catering.",
  keywords: [
    "Hunger Stories",
    "Hunger Stories Hyderabad",
    "Hyderabadi biryani",
    "multi-cuisine restaurant",
    "Tellapur cloud kitchen",
    "Manikonda restaurant",
    "catering Hyderabad",
    "wedding catering Hyderabad",
    "corporate catering Hyderabad",
  ],
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
  openGraph: {
    title: "Hunger Stories — Every Flavour Has A Story",
    description:
      "Craft multi-cuisine kitchen engineered for taste, heat retention, and slow-dum heritage in Hyderabad, India.",
    type: "website",
    locale: "en_IN",
    siteName: "Hunger Stories",
    images: [
      {
        url: "/images/food/hero-biryani.jpg",
        width: 1200,
        height: 630,
        alt: "Hunger Stories Royal Hyderabadi Dum Biryani",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hunger Stories — Every Flavour Has A Story",
    description:
      "Premium multi-cuisine restaurant and bespoke catering brand based in Hyderabad, India.",
    images: ["/images/food/hero-biryani.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400;1,600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: "Hunger Stories",
              image: "https://about.hungerstories.com/images/food/hero-biryani.jpg",
              url: "https://about.hungerstories.com",
              telephone: "+91-88867-62323",
              email: "hello@hungerstories.in",
              servesCuisine: [
                "Hyderabadi Dum Biryani",
                "North Indian",
                "South Indian",
                "Tandoori",
                "Indo-Chinese",
              ],
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ],
                  opens: "11:30",
                  closes: "23:30",
                },
              ],
              department: [
                {
                  "@type": "Restaurant",
                  name: "Hunger Stories Manikonda Dining Room",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Puppalaguda - Manikonda Main Road",
                    addressLocality: "Hyderabad",
                    addressRegion: "Telangana",
                    postalCode: "500089",
                    addressCountry: "IN",
                  },
                  telephone: "+91-88867-62323",
                },
                {
                  "@type": "FoodEstablishment",
                  name: "Hunger Stories Tellapur Craft Hub",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Survey No. 42, Near ORR Junction, Tellapur Road",
                    addressLocality: "Hyderabad",
                    addressRegion: "Telangana",
                    postalCode: "502032",
                    addressCountry: "IN",
                  },
                  telephone: "+91-88867-62323",
                },
              ],
              sameAs: [
                "https://instagram.com/hungerstories.hyd",
                "https://facebook.com/hungerstories.hyd",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-body bg-[#FFF8EF] text-[#35363A]">
        {children}
      </body>
    </html>
  );
}
