import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Zarate Masonry LLC | Chimney Repair & Masonry in Des Moines, WA",
  description:
    "Chimney repair, rebuild & restoration in Des Moines, WA. Licensed, bonded & insured. 20+ years of hands-on residential masonry experience. Free estimates.",
  openGraph: {
    title: "Zarate Masonry LLC | Chimney Repair & Masonry in Des Moines, WA",
    description:
      "Chimney Repair & Restoration Specialist. Licensed · Bonded · Insured. Free Estimates.",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Zarate Masonry LLC",
  description:
    "Chimney repair, rebuild and restoration specialist serving residential masonry needs in Des Moines, WA.",
  telephone: "+12534558032",
  email: "jose1775salas@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Des Moines",
    addressRegion: "WA",
    addressCountry: "US",
  },
  areaServed: "Des Moines, WA",
  url: "https://zaratemasonryllc.com",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
