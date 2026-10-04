"use client";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Slot } from "./Slot";
import { Reveal } from "./Motion";

export type Card = { slug: string; title: string; desc: string; category: string; read: number; kind: "pillar" | "support" };

export function BlogGrid({ cards, categories }: { cards: Card[]; categories: string[] }) {
  const [cat, setCat] = useState("Tutti");
  const [q, setQ] = useState("");
  const list = useMemo(() => {
    const t = q.trim().toLowerCase();
    return cards.filter((c) => (cat === "Tutti" || c.category === cat) && (!t || (c.title + " " + c.desc).toLowerCase().includes(t)));
  }, [cards, cat, q]);
  const chip = (v: string) => (
    <button key={v} onClick={() => setCat(v)} aria-pressed={cat === v} className={`rounded-full border px-4 min-h-11 text-sm whitespace-nowrap transition-colors ${cat === v ? "bg-ink text-ivory border-ink" : "border-[var(--line)] hover:border-ink"}`}>{v}</button>
  );
  return (
    <div>
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div className="flex gap-2 overflow-x-auto pb-1 -mx-5 px-5 md:mx-0 md:px-0 md:flex-wrap [scrollbar-width:none]" role="group" aria-label="Categorie">{["Tutti", ...categories].map(chip)}</div>
        <label className="relative block md:w-72">
          <span className="sr-only">Cerca negli articoli</span>
          <input value={q} onChange={(e) => setQ(e.target.value)} type="search" placeholder="Cerca un argomento…" className="w-full rounded-full border border-[var(--line)] bg-transparent px-5 min-h-11 focus:border-rose focus:outline-none" />
        </label>
      </div>
      <p className="mt-4 text-sm text-stone" aria-live="polite">{list.length} {list.length === 1 ? "articolo" : "articoli"}</p>
      <div className="mt-6 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((a, i) => (
          <Reveal key={a.slug} delay={(i % 3) * 0.08}>
            <Link href={`/blog/${a.slug}`} className="lift zoom group block h-full">
              <Slot kind="foto" id={`blog-${a.slug}`} label={a.category} ratio="4/3" />
              <p className="eyebrow mt-5">{a.category} · {a.read} min</p>
              <h3 className="font-display text-[1.65rem] md:text-3xl mt-2 leading-[1.08] group-hover:text-rose transition-colors">{a.title}</h3>
              <p className="mt-3 text-stone text-[0.95rem] line-clamp-3">{a.desc}</p>
              <span className="mt-4 inline-flex gap-2 font-medium text-sm">Leggi l'articolo <span className="transition-transform duration-500 group-hover:translate-x-2">→</span></span>
            </Link>
          </Reveal>
        ))}
      </div>
      {list.length === 0 && <p className="mt-10 text-stone">Nessun articolo trovato. Prova con un'altra parola o categoria.</p>}
    </div>
  );
}

export function Toc({ items }: { items: { id: string; title: string }[] }) {
  const [active, setActive] = useState(items[0]?.id);
  useEffect(() => {
    const els = items.map((i) => document.getElementById(i.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver((entries) => {
      const vis = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
      if (vis) setActive(vis.target.id);
    }, { rootMargin: "-20% 0px -65% 0px" });
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, [items]);
  return (
    <nav aria-label="Indice dell'articolo">
      <p className="eyebrow mb-4">In questo articolo</p>
      <ol className="space-y-1 border-l border-[var(--line)]">
        {items.map((i) => (
          <li key={i.id}>
            <a href={`#${i.id}`} className={`block -ml-px border-l-2 py-1.5 pl-4 pr-2 text-sm leading-snug transition-colors ${active === i.id ? "border-rose text-ink font-medium" : "border-transparent text-stone hover:text-ink"}`}>{i.title}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function ShareBar({ title, url }: { title: string; url: string }) {
  const [copied, setCopied] = useState(false);
  const enc = encodeURIComponent;
  const copy = async () => { try { await navigator.clipboard.writeText(url); setCopied(true); setTimeout(() => setCopied(false), 2000); } catch {} };
  const b = "inline-flex items-center justify-center rounded-full border border-[var(--line)] px-4 min-h-11 text-sm transition-colors hover:bg-ink hover:text-ivory hover:border-ink";
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="eyebrow mr-2">Condividi</span>
      <a className={b} target="_blank" rel="noopener" href={`https://wa.me/?text=${enc(title + " " + url)}`}>WhatsApp</a>
      <a className={b} target="_blank" rel="noopener" href={`https://www.linkedin.com/sharing/share-offsite/?url=${enc(url)}`}>LinkedIn</a>
      <button className={b} onClick={copy}>{copied ? "Link copiato ✓" : "Copia il link"}</button>
    </div>
  );
}
