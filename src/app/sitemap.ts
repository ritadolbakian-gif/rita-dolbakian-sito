import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { getPublished, CATEGORIES, catSlug } from "@/lib/blog";

type F = MetadataRoute.Sitemap[number]["changeFrequency"];
const PAGES: [string, number, F][] = [
  ["", 1, "weekly"],
  ["/percorsi/metodo-agenda", 0.95, "monthly"], ["/percorsi/sold-out", 0.95, "monthly"], ["/guida-gratuita", 0.9, "monthly"],
  ["/percorsi", 0.9, "monthly"], ["/percorsi/metodo-rita-dolbakian", 0.85, "monthly"], ["/chi-sono", 0.85, "monthly"],
  ["/call-orientamento", 0.85, "monthly"], ["/quiz-diagnostico", 0.8, "monthly"], ["/corsi", 0.8, "monthly"], ["/blog", 0.8, "weekly"], ["/formazione-certificata", 0.75, "monthly"],
  ["/prodotti/instagram-stories-che-vendono", 0.7, "monthly"], ["/prodotti/wellness-profit-calculator", 0.5, "monthly"],
  ["/risultati", 0.6, "monthly"], ["/contatti", 0.6, "yearly"],
  ["/privacy", 0.2, "yearly"], ["/cookie", 0.2, "yearly"], ["/termini", 0.2, "yearly"], ["/rimborsi", 0.2, "yearly"], ["/pagamenti-rateali", 0.3, "yearly"], ["/regolamento-corsi", 0.2, "yearly"],
];

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getPublished();
  const lastPost = posts.reduce((d, p) => (p.updated > d ? p.updated : d), "2026-10-01");
  return [
    ...PAGES.map(([p, priority, changeFrequency]) => ({ url: `${SITE.url}${p}`, lastModified: p === "/blog" || p === "" ? new Date(lastPost) : new Date("2026-10-16"), changeFrequency, priority })),
    ...CATEGORIES.filter((c) => posts.some((p) => p.category === c)).map((c) => ({ url: `${SITE.url}/blog/categoria/${catSlug(c)}`, lastModified: new Date(lastPost), changeFrequency: "weekly" as F, priority: 0.65 })),
    ...posts.map((p) => ({ url: `${SITE.url}/blog/${p.slug}`, lastModified: new Date(p.updated || p.date), changeFrequency: "monthly" as F, priority: 0.7, images: [`${SITE.url}/media/blog-${p.slug}.webp`] })),
  ];
}
