import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AgeVerification from "@/components/AgeVerification";

export const metadata = {
  title: "Kurtz Mill Munitions LLC | Quality Firearms & Ammunition",
  description:
    "Your trusted source for premium firearms, ammunition, and expert gunsmith services. Dedicated to quality and precision.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
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
