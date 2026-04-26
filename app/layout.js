import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AgeVerification from "@/components/AgeVerification";

export const metadata = {
  title: {
    default: "Kurtz Mill Munitions LLC | Firearms & Ammunition in Mohnton, PA",
    template: "%s | Kurtz Mill Munitions LLC"
  },
  description:
    "Expert gunsmithing, premium firearms, and precision ammunition in Mohnton, PA. Serving Birdsboro, Reading, and Berks County with dedicated service and quality gear.",
  keywords: ["firearms", "ammunition", "gunsmith Mohnton PA", "gun shop Berks County", "FFL transfers Mohnton", "Birdsboro PA guns", "custom AR-15 builds", "firearm cleaning Berks County"],
  authors: [{ name: "Kurtz Mill Munitions LLC" }],
  creator: "Kurtz Mill Munitions LLC",
  publisher: "Kurtz Mill Munitions LLC",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  metadataBase: new URL('https://kurtz-mill-munitions.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Kurtz Mill Munitions LLC | Mohnton, PA",
    description: "Premium firearms, precision ammunition, and expert gunsmithing services serving Berks and Chester Counties.",
    url: 'https://kurtz-mill-munitions.vercel.app',
    siteName: 'Kurtz Mill Munitions LLC',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Kurtz Mill Munitions Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Kurtz Mill Munitions LLC | Mohnton, PA",
    description: "Expert gunsmithing and premium firearms gear in Berks County.",
    images: ['/images/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/images/logo-icon.png",
    apple: "/images/logo-icon.png",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "GunStore",
    "name": "Kurtz Mill Munitions LLC",
    "image": "https://kurtz-mill-munitions.vercel.app/images/logo.png",
    "@id": "https://kurtz-mill-munitions.vercel.app",
    "url": "https://kurtz-mill-munitions.vercel.app",
    "telephone": "+1 610-802-7359",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "3371 Morgantown Rd",
      "addressLocality": "Mohnton",
      "addressRegion": "PA",
      "postalCode": "19540",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 40.2312,
      "longitude": -75.9221
    },
    "areaServed": ["Mohnton", "Birdsboro", "Reading", "Pottstown", "West Chester", "Berks County", "Chester County"],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "10:00",
        "closes": "16:00"
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <AgeVerification />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
