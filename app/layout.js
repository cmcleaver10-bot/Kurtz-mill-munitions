import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AgeVerification from "@/components/AgeVerification";

export const metadata = {
  title: "Kurtz Mill Munitions LLC | Firearms & Ammunition in Mohnton, PA",
  description:
    "Your trusted source for premium firearms, ammunition, and expert gunsmith services in Mohnton, PA. Serving Birdsboro, Reading, and Berks County.",
  keywords: "firearms, ammunition, gunsmith Mohnton PA, gun shop Berks County, Birdsboro PA guns, Reading PA gun store, FFL transfer Mohnton",
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
