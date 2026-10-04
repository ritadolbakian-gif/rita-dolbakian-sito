import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { getPublished } from "@/lib/blog";

const paths = ["", "/chi-sono", "/percorsi", "/percorsi/metodo-agenda", "/percorsi/sold-out", "/percorsi/metodo-rita-dolbakian", "/corsi", "/formazione-certificata", "/risultati", "/blog", "/guida-gratuita", "/prodotti/instagram-stories-che-vendono", "/prodotti/wellness-profit-calculator", "/call-orientamento", "/contatti", "/privacy", "/cookie", "/termini", "/rimborsi", "/pagamenti-rateali", "/regolamento-corsi"];

export default function sitemap(): MetadataRoute.Sitemap {
  return [...paths, ...getPublished().map((p) => `/blog/${p.slug}`)].map((p) => ({ url: `${SITE.url}${p}`, lastModified: new Date() }));
}
