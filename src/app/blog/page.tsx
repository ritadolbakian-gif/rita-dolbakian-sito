import Link from "next/link";
import { PageHero } from "@/components/Ui";
import { Reveal } from "@/components/Motion";
import { Slot } from "@/components/Slot";
import { POSTS, CATEGORIES } from "@/lib/blog";
import { meta } from "@/lib/seo";

export const metadata = meta("Blog: clienti, prezzi e tecnica nel benessere", "Articoli di Rita Dolbakian per chi lavora nel benessere: come riempire l'agenda, stabilire i prezzi, vendere con naturalezza e migliorare la tecnica.", "/blog");

export default function Blog() {
  const live = POSTS.filter((p) => p.published);
  const soon = POSTS.filter((p) => !p.published);
  return (
    <>
      <PageHero eyebrow="Blog" title="Idee per *lavorare* con più calma." answer="Il blog di Rita Dolbakian raccoglie articoli pratici per chi lavora nel benessere: come riempire l'agenda, stabilire i prezzi, vendere con naturalezza e migliorare la tecnica. Un tema alla volta, con parole semplici." />
      <section className="section">
        <div className="wrap">
          <ul className="flex flex-wrap gap-2 mb-12" aria-label="Categorie">{CATEGORIES.map((c) => <li key={c} className="rounded-full border border-[var(--line)] px-4 py-2 text-sm">{c}</li>)}</ul>
          <div className="grid gap-8 md:grid-cols-3">
            {live.map((a, i) => (
              <Reveal key={a.slug} delay={i * 0.08}><Link href={`/blog/${a.slug}`} className="lift zoom group block">
                <Slot kind="foto" label="Copertina articolo" ratio="4/3" />
                <p className="eyebrow mt-5">{a.cat} · {a.read} min</p>
                <h2 className="font-display text-3xl mt-2 leading-tight group-hover:text-rose transition-colors">{a.title}</h2>
                <p className="mt-3 text-stone text-[0.95rem]">{a.desc}</p>
              </Link></Reveal>
            ))}
          </div>
          <h2 className="font-display text-4xl mt-20 mb-6">In <em className="kw">arrivo</em></h2>
          <ul className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {soon.map((a) => <li key={a.slug} className="py-4 flex justify-between gap-6 text-stone"><span>{a.title}</span><span className="eyebrow shrink-0 hidden sm:block">{a.cat}</span></li>)}
          </ul>
        </div>
      </section>
    </>
  );
}
