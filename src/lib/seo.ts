import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const ID = { rita: `${SITE.url}/#rita`, academy: `${SITE.url}/#academy`, website: `${SITE.url}/#website` };

/** Metadati di pagina. `image` = immagine di condivisione (default: og-image). */
export function meta(title: string, description: string, path: string, image = "/og-image.jpg"): Metadata {
  // Google mostra ~60 caratteri: se il suffisso " | Rita Dolbakian" farebbe tagliare il titolo, lo omettiamo.
  const fits = `${title} | Rita Dolbakian`.length <= 60;
  return {
    title: fits ? title : { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, type: "website", locale: "it_IT", siteName: "Rita Dolbakian", images: [image] },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

/** BreadcrumbList: Home è aggiunta da sola. */
export function crumbsLd(trail: [string, string][]) {
  const items: [string, string][] = [["Home", ""], ...trail];
  return {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: items.map(([name, path], i) => ({ "@type": "ListItem", position: i + 1, name, item: `${SITE.url}${path}` })),
  };
}
