import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

const paths = ["", "/chi-sono", "/percorsi", "/percorsi/metodo-agenda", "/percorsi/wellness-mastery", "/percorsi/metodo-rita-dolbakian", "/corsi", "/formazione-certificata", "/risultati", "/blog", "/guida-gratuita", "/call-orientamento", "/contatti"];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((p) => ({ url: `${SITE.url}${p}`, lastModified: new Date() }));
}
