import fs from "node:fs";
import path from "node:path";
import { marked } from "marked";

export type PostFaq = { q: string; a: string; html: string };
export type Section = { id?: string; title?: string; html: string };
export type Post = {
  slug: string; title: string; metaTitle: string; metaDescription: string;
  keyword: string; keywords: string[]; kind: "pillar" | "support"; cluster: string; category: string;
  order: number; published: boolean; date: string; updated: string; read: number; words: number;
  answer: string; answerPlain: string; faq: PostFaq[]; sections: Section[]; toc: { id: string; title: string }[];
};

const DIR = path.join(process.cwd(), "content", "blog");
export const CATEGORIES = ["Clienti e agenda", "Prezzi e posizionamento", "Instagram e contenuti", "Vendita naturale", "Avviare l'attività", "Tecnica e formazione"];

const slugify = (s: string) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const strip = (s: string) => s.replace(/<[^>]+>/g, "").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\*\*|__|\*|_/g, "").replace(/\s+/g, " ").trim();

/** Collegamenti di approfondimento (correlati) scelti a mano, per cluster tematici. */
const RELATED: Record<string, string[]> = {
  "come-trovare-clienti-massaggiatrice": ["agenda-massaggiatrice-mesi-vuoti", "instagram-per-massaggiatrici", "google-business-profile-massaggiatori"],
  "agenda-massaggiatrice-mesi-vuoti": ["come-trovare-clienti-massaggiatrice", "fidelizzare-clienti-massaggi", "google-business-profile-massaggiatori"],
  "quanto-far-pagare-un-massaggio": ["come-rispondere-quanto-costa", "come-trovare-clienti-massaggiatrice", "fidelizzare-clienti-massaggi"],
  "fidelizzare-clienti-massaggi": ["agenda-massaggiatrice-mesi-vuoti", "come-rispondere-quanto-costa", "come-trovare-clienti-massaggiatrice"],
  "instagram-per-massaggiatrici": ["come-trovare-clienti-massaggiatrice", "google-business-profile-massaggiatori", "come-rispondere-quanto-costa"],
  "come-rispondere-quanto-costa": ["quanto-far-pagare-un-massaggio", "instagram-per-massaggiatrici", "fidelizzare-clienti-massaggi"],
  "google-business-profile-massaggiatori": ["come-trovare-clienti-massaggiatrice", "instagram-per-massaggiatrici", "agenda-massaggiatrice-mesi-vuoti"],
  "come-scegliere-un-corso-di-massaggio": ["corso-massaggio-online-funziona", "imparare-a-massaggiare-da-zero"],
  "corso-massaggio-online-funziona": ["come-scegliere-un-corso-di-massaggio", "imparare-a-massaggiare-da-zero"],
  "imparare-a-massaggiare-da-zero": ["come-scegliere-un-corso-di-massaggio", "corso-massaggio-online-funziona"],
  "massaggiatrice-domicilio-o-studio": ["come-trovare-clienti-massaggiatrice", "quanto-far-pagare-un-massaggio", "google-business-profile-massaggiatori"],
  "gestire-disdette-clienti": ["fidelizzare-clienti-massaggi", "agenda-massaggiatrice-mesi-vuoti", "whatsapp-business-massaggiatori"],
  "whatsapp-business-massaggiatori": ["come-rispondere-quanto-costa", "gestire-disdette-clienti", "fidelizzare-clienti-massaggi"],
};

function parseFile(file: string): { fm: Record<string, unknown>; body: string } {
  const raw = fs.readFileSync(path.join(DIR, file), "utf8");
  const m = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!m) throw new Error(`Frontmatter mancante: ${file}`);
  const fm: Record<string, unknown> = {};
  for (const line of m[1].split("\n")) {
    const i = line.indexOf(":");
    if (i > 0) fm[line.slice(0, i).trim()] = JSON.parse(line.slice(i + 1).trim());
  }
  return { fm, body: m[2] };
}

let cache: Post[] | null = null;

function build(): Post[] {
  const files = fs.readdirSync(DIR).filter((f) => f.endsWith(".md")).sort();
  const parsed = files.map(parseFile);
  const published = new Set(parsed.filter((p) => p.fm.published).map((p) => p.fm.slug as string));

  return parsed.map(({ fm, body }) => {
    let md = body;
    // blocco risposta "In breve"
    let answer = "", answerPlain = "";
    const am = md.match(/^> \*\*In breve\.\*\*\s*([\s\S]*?)(?:\n\n|$)/m);
    if (am) {
      answerPlain = strip(am[1].replace(/\n> ?/g, " "));
      answer = marked.parseInline(am[1].replace(/\n> ?/g, " ")) as string;
      md = md.replace(am[0], "");
    }
    // FAQ
    const faq: PostFaq[] = [];
    const fi = md.search(/^## Domande frequenti\s*$/m);
    if (fi >= 0) {
      const rest = md.slice(fi);
      const next = rest.slice(5).search(/^## /m);
      const block = next >= 0 ? rest.slice(0, next + 5) : rest;
      md = md.replace(block, "");
      for (const chunk of block.split(/^### /m).slice(1)) {
        const [q, ...a] = chunk.split("\n");
        const ans = a.join("\n").trim();
        faq.push({ q: q.trim(), a: strip(ans), html: marked.parse(ans) as string });
      }
    }
    let html = marked.parse(md.trim()) as string;
    // id sui titoli
    html = html.replace(/<h([23])>([\s\S]*?)<\/h\1>/g, (_m, l, t) => `<h${l} id="${slugify(strip(t))}">${t}</h${l}>`);
    // link: esterni in nuova scheda, interni verso articoli non pubblicati -> testo
    html = html.replace(/<a href="([^"]+)">([\s\S]*?)<\/a>/g, (_m, href, text) => {
      if (/^https?:/.test(href)) return `<a href="${href}" target="_blank" rel="noopener">${text}</a>`;
      const bm = href.match(/^\/blog\/([a-z0-9-]+)\/?$/);
      if (bm && !published.has(bm[1])) return text;
      return `<a href="${href}">${text}</a>`;
    });
    html = html.replace(/<table>/g, '<div class="table-wrap"><table>').replace(/<\/table>/g, "</table></div>");
    // sezioni per H2
    const chunks = html.split(/(?=<h2 )/);
    const sections: Section[] = chunks.map((c) => {
      const hm = c.match(/^<h2 id="([^"]+)">([\s\S]*?)<\/h2>/);
      return hm ? { id: hm[1], title: strip(hm[2]), html: c } : { html: c };
    });
    const toc = sections.filter((s) => s.id).map((s) => ({ id: s.id!, title: s.title! }));
    const words = strip(html).split(" ").length + faq.reduce((n, f) => n + f.a.split(" ").length, 0) + answerPlain.split(" ").length;
    return {
      slug: fm.slug as string, title: fm.title as string, metaTitle: fm.metaTitle as string, metaDescription: fm.metaDescription as string,
      keyword: fm.keyword as string, keywords: String(fm.keywords ?? "").split(",").map((k) => k.trim()).filter(Boolean),
      kind: fm.kind as "pillar" | "support", cluster: fm.cluster as string, category: fm.category as string, order: fm.order as number,
      published: fm.published as boolean, date: fm.date as string, updated: fm.updated as string,
      read: Math.max(3, Math.round(words / 200)), words, answer, answerPlain, faq, sections, toc,
    };
  });
}

export function getAllPosts(): Post[] { return (cache ??= build()); }
export const getPublished = () => getAllPosts().filter((p) => p.published);
export const getUpcoming = () => getAllPosts().filter((p) => !p.published);
export const getPost = (slug: string) => getAllPosts().find((p) => p.slug === slug);
export function getRelated(slug: string): Post[] {
  const manual = (RELATED[slug] ?? []).map((s) => getPost(s)).filter((p): p is Post => !!p && p.published);
  if (manual.length >= 3) return manual;
  const me = getPost(slug);
  const fill = getPublished().filter((p) => p.slug !== slug && !manual.includes(p) && me && p.category === me.category);
  const rest = getPublished().filter((p) => p.slug !== slug && !manual.includes(p) && !fill.includes(p));
  return [...manual, ...fill, ...rest].slice(0, 3);
}
