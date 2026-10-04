import { getPublished } from "@/lib/blog";
import { SITE } from "@/lib/site";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export function GET() {
  const items = getPublished().map((p) => `
    <item>
      <title>${esc(p.title)}</title>
      <link>${SITE.url}/blog/${p.slug}</link>
      <guid>${SITE.url}/blog/${p.slug}</guid>
      <pubDate>${new Date(p.date).toUTCString()}</pubDate>
      <category>${esc(p.category)}</category>
      <description>${esc(p.metaDescription)}</description>
    </item>`).join("");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"><channel>
  <title>Blog di Rita Dolbakian</title>
  <link>${SITE.url}/blog</link>
  <description>Guide pratiche per chi lavora nel benessere.</description>
  <language>it-IT</language>${items}
</channel></rss>`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
