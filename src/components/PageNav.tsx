"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

/** Barra di navigazione interna, fissa sotto l'intestazione: salta alle sezioni della pagina. */
export function PageNav({ items, cta }: { items: { id: string; t: string }[]; cta?: { href: string; label: string } }) {
  const [active, setActive] = useState("");
  useEffect(() => {
    const els = items.map((i) => document.getElementById(i.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver((entries) => {
      const vis = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
      if (vis) setActive(vis.target.id);
    }, { rootMargin: "-30% 0px -60% 0px" });
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, [items]);
  return (
    <div className="sticky top-[3.6rem] z-30 border-b border-[var(--line)] bg-ivory/90 backdrop-blur-md" role="navigation" aria-label="In questa pagina">
      <div className="wrap flex items-center gap-3 py-2">
        <ul className="flex flex-1 gap-1 overflow-x-auto [scrollbar-width:none]">
          {items.map((i) => (
            <li key={i.id}><a href={`#${i.id}`} className={`inline-flex min-h-10 items-center whitespace-nowrap rounded-full px-4 text-sm transition-colors ${active === i.id ? "bg-ink text-ivory" : "text-stone hover:bg-blush/50 hover:text-ink"}`}>{i.t}</a></li>
          ))}
        </ul>
        {cta && <Link href={cta.href} className="btn btn-primary hidden !min-h-10 !py-2 !px-5 text-sm sm:inline-flex whitespace-nowrap">{cta.label}</Link>}
      </div>
    </div>
  );
}
