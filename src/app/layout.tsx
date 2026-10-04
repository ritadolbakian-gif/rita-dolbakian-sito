import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { Header, StickyCta } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SmoothScroll, Cursor } from "@/components/SmoothScroll";
import { SITE } from "@/lib/site";
import { CookieBanner } from "@/components/CookieBanner";
import { WhatsApp } from "@/components/WhatsApp";
import { GuidePopup } from "@/components/GuidePopup";

const serif = Instrument_Serif({ variable: "--font-serif", subsets: ["latin"], weight: "400", style: ["normal", "italic"], display: "swap" });
const sans = Hanken_Grotesk({ variable: "--font-sans", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: "Rita Dolbakian | Più clienti e un'agenda piena nel benessere", template: "%s | Rita Dolbakian" },
  description: "Rita Dolbakian, massaggiatrice e formatrice da oltre dieci anni. Percorsi per riempire l'agenda online e per imparare a massaggiare con un metodo preciso.",
  openGraph: { type: "website", locale: "it_IT", siteName: "Rita Dolbakian Academy", images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Rita Dolbakian. Il tuo talento. Il tuo metodo. Più clienti." }] },
  twitter: { card: "summary_large_image", images: ["/og-image.jpg"] },
  alternates: { canonical: "/" },
};
export const viewport: Viewport = { themeColor: "#0b0a09", width: "device-width", initialScale: 1 };

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person", "@id": `${SITE.url}/#rita`, name: "Rita Dolbakian",
      jobTitle: "Massaggiatrice e formatrice nel benessere", url: SITE.url, image: `${SITE.url}/media/rita-ritratto-camice.webp`,
      sameAs: [SITE.social.instagram, SITE.social.youtube, SITE.social.tiktok],
    },
    {
      "@type": "EducationalOrganization", "@id": `${SITE.url}/#academy`, name: "Rita Dolbakian Academy", alternateName: "RD Academy",
      url: SITE.url, logo: `${SITE.url}/media/logo.png`, founder: { "@id": `${SITE.url}/#rita` },
    },
    { "@type": "WebSite", "@id": `${SITE.url}/#website`, url: SITE.url, name: "Rita Dolbakian", inLanguage: "it-IT" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <SmoothScroll />
        <Cursor />
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyCta />
        <WhatsApp />
        <GuidePopup />
        <CookieBanner />
      </body>
    </html>
  );
}
