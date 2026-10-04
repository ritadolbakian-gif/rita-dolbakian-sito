"use client";
import Link from "next/link";
import { useState } from "react";
import { Slot } from "./Slot";

type P = { id: string; t: string; d: string; pillar: "Business" | "Tecnica"; fmt: string; price: string; badge?: string; href: string };
const ITEMS: P[] = [
  { id: "corso-guida", t: "Il Sistema Clienti per Operatori del Benessere", d: "La guida pratica per fare i primi 10 clienti online.", pillar: "Business", fmt: "Guida", price: "Gratis", badge: "Gratis", href: "/guida-gratuita" },
  { id: "corso-agenda", t: "Metodo A.G.E.N.D.A.", d: "Il primo affiancamento per ritrovare continuità.", pillar: "Business", fmt: "Affiancamento", price: "Dopo la call", badge: "Soddisfatti o rimborsati", href: "/percorsi/metodo-agenda" },
  { id: "corso-wm", t: "Wellness Mastery", d: "Da operatrice del benessere a imprenditrice digitale.", pillar: "Business", fmt: "Video + affiancamento", price: "Da confermare", badge: "Soddisfatti o rimborsati", href: "/percorsi/wellness-mastery" },
  { id: "corso-rd-online", t: "Metodo Rita Dolbakian · online", d: "Imparare a massaggiare con lezioni video e confronto.", pillar: "Tecnica", fmt: "Video", price: "Da confermare", badge: "Soddisfatti o rimborsati", href: "/percorsi/metodo-rita-dolbakian" },
  { id: "corso-rd-presenza", t: "Metodo Rita Dolbakian · in presenza", d: "Pratica diretta in gruppi piccoli.", pillar: "Tecnica", fmt: "In presenza", price: "Da confermare", badge: "Soddisfatti o rimborsati", href: "/percorsi/metodo-rita-dolbakian" },
];

export function CatalogoCorsi() {
  const [pillar, setPillar] = useState("Tutti");
  const [fmt, setFmt] = useState("Tutti");
  const list = ITEMS.filter((i) => (pillar === "Tutti" || i.pillar === pillar) && (fmt === "Tutti" || i.fmt.includes(fmt)));
  const chip = (cur: string, v: string, set: (s: string) => void) => (
    <button key={v} onClick={() => set(v)} aria-pressed={cur === v} className={`rounded-full border px-5 min-h-11 text-sm transition-colors ${cur === v ? "bg-ink text-ivory border-ink" : "border-[var(--line)] hover:border-ink"}`}>{v}</button>
  );
  return (
    <>
      <div className="flex flex-wrap gap-x-10 gap-y-4">
        <div className="flex flex-wrap gap-2 items-center"><span className="eyebrow mr-2">Area</span>{["Tutti", "Business", "Tecnica"].map((v) => chip(pillar, v, setPillar))}</div>
        <div className="flex flex-wrap gap-2 items-center"><span className="eyebrow mr-2">Formato</span>{["Tutti", "Video", "In presenza", "Guida", "Affiancamento"].map((v) => chip(fmt, v, setFmt))}</div>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" aria-live="polite">
        {list.map((p) => (
          <Link key={p.t} href={p.href} className="lift zoom group block rounded-3xl bg-blush/30 p-5">
            <div className="relative"><Slot kind="foto" id={p.id} label="Copertina corso" ratio="16/9" />{p.badge && <span className="absolute top-3 left-3 bg-ink text-ivory text-xs rounded-full px-3 py-1">{p.badge}</span>}</div>
            <div className="p-3 pt-5">
              <p className="eyebrow">{p.pillar} · {p.fmt}</p>
              <h3 className="font-display text-3xl mt-2 leading-tight">{p.t}</h3>
              <p className="mt-2 text-stone text-[0.95rem]">{p.d}</p>
              <p className="mt-5 flex justify-between text-sm font-medium"><span>{p.price}</span><span className="transition-transform duration-500 group-hover:translate-x-2">Voglio saperne di più →</span></p>
            </div>
          </Link>
        ))}
        {list.length === 0 && <p className="text-stone">Nessun corso con questi filtri. Prova a cambiarli.</p>}
      </div>
    </>
  );
}
