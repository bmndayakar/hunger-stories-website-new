import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.brand.domain),
  title: "Hunger Stories — Every Flavour Has A Story | Tellapur Kitchen & Catering",
  description:
    "Hunger Stories is a multi-cuisine kitchen in Tellapur, Hyderabad, offering biryani, curries, tandoori grills, delivery and celebration catering.",
  keywords: [
    "Hunger Stories",
    "Hunger Stories Hyderabad",
    "Hyderabadi biryani",
    "multi-cuisine restaurant",
    "Tellapur cloud kitchen",
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
      "Discover freshly prepared multi-cuisine food and celebration catering from our Tellapur kitchen.",
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
      "Multi-cuisine food, delivery and catering from Hunger Stories in Tellapur, Hyderabad.",
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
              name: siteConfig.locations.tellapur.name,
              image: `${siteConfig.brand.domain}/images/food/hero-biryani.jpg`,
              url: siteConfig.brand.domain,
              telephone: siteConfig.contact.phoneDisplay,
              email: siteConfig.contact.email,
              hasMap: siteConfig.locations.tellapur.mapHref,
              servesCuisine: [
                "Hyderabadi Dum Biryani",
                "North Indian",
                "South Indian",
                "Tandoori",
                "Indo-Chinese",
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress: siteConfig.locations.tellapur.streetAddress,
                addressLocality: siteConfig.locations.tellapur.locality,
                addressRegion: "Telangana",
                postalCode: siteConfig.locations.tellapur.postalCode,
                addressCountry: "IN",
              },
              sameAs: [
                siteConfig.social.instagram,
                siteConfig.social.facebook,
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
