import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.brand.domain),
  alternates: {
    canonical: '/',
  },
  title: "Hunger Stories | Catering & Multi-Cuisine Food in Hyderabad",
  description:
    "Hunger Stories brings multi-cuisine food to gatherings and catering enquiries in Hyderabad. Explore catering occasions, food photography and ways to get in touch.",
  keywords: [
    "Hunger Stories",
    "Hunger Stories Hyderabad",
    "Hyderabadi biryani",
    "multi-cuisine food Hyderabad",
    "catering Hyderabad",
    "corporate catering enquiries Hyderabad",
  ],
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
  openGraph: {
    title: "Hunger Stories | Catering & Multi-Cuisine Food",
    description:
      "Food for gatherings, celebrations and catering enquiries in Hyderabad. Every Flavour Has A Story.",
    type: "website",
    locale: "en_IN",
    siteName: "Hunger Stories",
    images: [
      {
        url: "/images/food/hero-biryani.jpg",
        alt: "Food photography from Hunger Stories",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hunger Stories | Catering & Multi-Cuisine Food",
    description:
      "Multi-cuisine food for gatherings and catering enquiries in Hyderabad.",
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
              telephone: siteConfig.contact.phoneHref.replace(/^tel:/, ''),
              email: siteConfig.contact.email,
              hasMap: siteConfig.locations.tellapur.mapHref,
              servesCuisine: [
                "Hyderabadi Biryani",
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
