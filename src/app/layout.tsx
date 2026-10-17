import type { Metadata, Viewport } from "next";
import Script from "next/script";
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
  title: { default: "Rita Dolbakian: più clienti e agenda piena nel benessere", template: "%s | Rita Dolbakian" },
  description: "Rita Dolbakian, massaggiatrice e formatrice da oltre dieci anni. Percorsi per riempire l'agenda online e per imparare a massaggiare con un metodo preciso.",
  openGraph: { type: "website", locale: "it_IT", siteName: "Rita Dolbakian Academy", images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Rita Dolbakian. Il tuo talento. Il tuo metodo. Più clienti." }] },
  twitter: { card: "summary_large_image", images: ["/og-image.jpg"] },
  alternates: { canonical: "/" },
};
export const viewport: Viewport = { themeColor: "#0b0a09", width: "device-width", initialScale: 1 };

const SAME = [SITE.social.instagram, SITE.social.youtube, SITE.social.tiktok, "https://it.trustpilot.com/review/rd-academy.it"];
const TOPICS = ["massaggio", "massaggio benessere", "formazione per massaggiatori", "marketing per operatori del benessere", "Instagram per massaggiatrici", "acquisizione clienti nel benessere", "personal branding nel benessere"];
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person", "@id": `${SITE.url}/#rita`, name: "Rita Dolbakian",
      jobTitle: "Massaggiatrice e formatrice nel benessere",
      description: "Rita Dolbakian è una massaggiatrice e formatrice italiana con oltre dieci anni di esperienza nel benessere. Ha creato il Metodo A.G.E.N.D.A., il Metodo Sold Out e il Metodo Rita Dolbakian per insegnare a operatrici e operatori del benessere a trovare clienti e a massaggiare con un metodo.",
      url: `${SITE.url}/chi-sono`, image: `${SITE.url}/media/rita-ritratto-camice.webp`,
      worksFor: { "@id": `${SITE.url}/#academy` }, knowsAbout: TOPICS, knowsLanguage: "it", nationality: "IT",
      sameAs: SAME,
    },
    {
      "@type": "EducationalOrganization", "@id": `${SITE.url}/#academy`, name: "Rita Dolbakian Academy", alternateName: ["RD Academy", "Rita Dolbakian"],
      legalName: "RD SRL", vatID: "IT02097250472", slogan: "Il tuo talento. Il tuo metodo. Più clienti.",
      description: "Formazione online e in presenza per operatori del benessere: percorsi per riempire l'agenda con i social e corsi per imparare a massaggiare.",
      address: { "@type": "PostalAddress", streetAddress: "Viale Garibaldi 42", postalCode: "51017", addressLocality: "Pescia", addressRegion: "PT", addressCountry: "IT" },
      areaServed: { "@type": "Country", name: "Italia" }, knowsAbout: TOPICS,
      url: SITE.url, logo: `${SITE.url}/media/logo.png`, image: `${SITE.url}/og-image.jpg`, founder: { "@id": `${SITE.url}/#rita` }, sameAs: SAME,
    },
    { "@type": "WebSite", "@id": `${SITE.url}/#website`, url: SITE.url, name: "Rita Dolbakian", inLanguage: "it-IT", publisher: { "@id": `${SITE.url}/#academy` }, about: { "@id": `${SITE.url}/#rita` } },
  ],
};

const GTM_ID = "GTM-M6XPR5LZ";
const GA4_ID = "G-MYN73YRN8K";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={`${serif.variable} ${sans.variable}`}>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`} height="0" width="0" style={{ display: "none", visibility: "hidden" }} title="Google Tag Manager" />
        </noscript>
        {/* Consent Mode v2: default negato (legge una scelta già salvata, altrimenti nega). Deve girare PRIMA di GTM. */}
        <Script id="consent-default" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',functionality_storage:'granted',security_storage:'granted',wait_for_update:500});gtag('set','url_passthrough',true);try{var s=JSON.parse(localStorage.getItem('rd-consent-v1')||'null');if(s&&s.ts&&(Date.now()-s.ts)<=15552000000){gtag('consent','update',{ad_storage:s.marketing?'granted':'denied',ad_user_data:s.marketing?'granted':'denied',ad_personalization:s.marketing?'granted':'denied',analytics_storage:s.analytics?'granted':'denied'});}}catch(e){}` }} />
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="lazyOnload" dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');` }} />
        {/* Google Analytics 4 (gtag.js) — rispetta il Consent Mode impostato sopra */}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`} strategy="lazyOnload" />
        <Script id="ga4" strategy="lazyOnload" dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA4_ID}');` }} />

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
