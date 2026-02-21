import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import NavBar from "@/components/navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://audit.eris.co.ke"), // Replace with actual domain
  title: {
    default:
      "Expert BOQ Audit & Construction Cost Consultants | Nairobi, Kenya",
    template: "%s | Eris Engineering",
  },
  description:
    "Stop getting overcharged on construction projects in Karen, Runda, and Muthaiga. Get a forensic BOQ audit to uncover hidden costs and phantom materials.",
  keywords: [
    "BOQ Audit Nairobi",
    "Construction Cost Consultant Kenya",
    "Quantity Surveyor Nairobi",
    "Structural Engineering Audit",
    "Construction Fraud Detection",
  ],
  authors: [{ name: "Eris Engineering" }],
  creator: "Eris Engineering",
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://audit.eris.co.ke",
    title: "Expert BOQ Audit & Construction Cost Consultants | Nairobi",
    description:
      "Stop getting overcharged on construction projects. Get a forensic BOQ audit to uncover hidden costs.",
    siteName: "Eris Engineering",
    images: [
      {
        url: "/og-image.png", // Ensure this image exists in /public
        width: 1200,
        height: 630,
        alt: "Eris Engineering BOQ Audit Report",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Expert BOQ Audit & Construction Cost Consultants | Nairobi",
    description:
      "Stop getting overcharged on construction projects. Get a forensic BOQ audit to uncover hidden costs.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/eris-favicon.svg", media: "(prefers-color-scheme: light)" },
      { url: "/eris-favicon-dark.svg", media: "(prefers-color-scheme: dark)" },
    ],
  },
};

// JSON-LD Schema for Local Business & Service
const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  name: "Eris Engineering",
  image: "https://audit.eris.co.ke/og-image.png",
  description:
    "Expert BOQ audits and construction cost consulting in Nairobi, Kenya. Specializing in high-value projects in Karen, Runda, and Muthaiga.",
  "@id": "https://audit.eris.co.ke",
  url: "https://audit.eris.co.ke",
  telephone: "+254717297022", // Update with real phone
  address: {
    "@type": "PostalAddress",
    streetAddress: "Adams Arcade", // Update
    addressLocality: "Nairobi",
    addressRegion: "Nairobi County",
    postalCode: "00100",
    addressCountry: "KE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -1.2921, // Update with exact coords
    longitude: 36.8219,
  },
  areaServed: ["Nairobi", "Karen", "Runda", "Muthaiga"],
  priceRange: "$$$",
  serviceArea: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: -1.2921,
      longitude: 36.8219,
    },
    geoRadius: "50000",
  },
  makesOffer: {
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: "Forensic BOQ Audit",
      description:
        "Detailed analysis of Bills of Quantities to identify inflated costs and phantom materials.",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700,900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <Providers>
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
