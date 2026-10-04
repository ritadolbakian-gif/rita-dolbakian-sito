import type { ReactNode } from "react";
import Link from "next/link";
import { PageHero, Label, Faq, JsonLd, type QA } from "@/components/Ui";
import { Heading, Reveal } from "@/components/Motion";
import type { Item } from "@/components/Sections";

export type ProductProps = {
  name: string; slug: string; eyebrow: string; title: string; answer: ReactNode; imageId: string;
  price: ReactNode; oldPrice?: string; checkout: string; cta: string;
  painTitle: string; pains: string[]; painNote: ReactNode;
  solutionTitle: string; solution: ReactNode; benefits: Item[];
  forWho: string[]; notForWho?: string[];
  bonus?: { t: string; d: ReactNode };
  guarantee: ReactNode; faq: QA[]; description: string; extra?: ReactNode;
};

export function CheckoutButton({ href, children, className = "btn btn-primary" }: { href: string; children: ReactNode; className?: string }) {
  const external = /^https?:/.test(href);
  return external
    ? <a href={href} className={className} rel="noopener">{children} <span className="arr">→</span></a>
    : <Link href={href || "/contatti"} className={className}>{children} <span className="arr">→</span></Link>;
}

export function ProductPage(p: ProductProps) {
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Product", name: p.name, description: p.description, brand: { "@type": "Brand", name: "RD Academy" } }} />
      <PageHero eyebrow={p.eyebrow} title={p.title} answer={p.answer} imageId={p.imageId} imageRatio="16/9" imageArt="waves">
        <CheckoutButton href={p.checkout}>{p.cta}</CheckoutButton>
        <a href="#dentro" className="btn btn-ghost">Cosa trovi dentro</a>
      </PageHero>

      <section className="section">
        <div className="wrap grid gap-12 lg:grid-cols-[1fr_1fr] items-start">
          <div>
            <Label n="01" t="Ti riconosci?" />
            <Heading text={p.painTitle} className="text-5xl md:text-6xl" />
            <p className="mt-6 text-stone max-w-md">{p.painNote}</p>
          </div>
          <Reveal>
            <ul className="space-y-3">
              {p.pains.map((x) => <li key={x} className="rounded-2xl bg-blush/40 px-6 py-4">{x}</li>)}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section-dark section" id="dentro">
        <div className="wrap">
          <Label n="02" t={p.name} />
          <Heading text={p.solutionTitle} className="text-5xl md:text-6xl max-w-3xl" />
          <div className="mt-6 max-w-2xl text-lg text-ivory/75">{p.solution}</div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {p.benefits.map((b, i) => (
              <Reveal key={b.t} delay={i * 0.08}><div className="rounded-3xl border border-white/15 p-8 h-full"><h3 className="font-display text-3xl">{b.t}</h3><p className="mt-3 text-ivory/70">{b.d}</p></div></Reveal>
            ))}
          </div>
          {p.extra}
        </div>
      </section>

      <section className="section">
        <div className="wrap grid gap-6 md:grid-cols-2">
          <Reveal><div className="rounded-3xl bg-ivory p-8 md:p-10 h-full"><h3 className="font-display text-3xl">È per te se…</h3><ul className="mt-5 space-y-2 text-stone">{p.forWho.map((x) => <li key={x}>✓ {x}</li>)}</ul></div></Reveal>
          {p.notForWho && <Reveal delay={0.1}><div className="rounded-3xl border border-[var(--line)] p-8 md:p-10 h-full"><h3 className="font-display text-3xl">Forse non fa per te se…</h3><ul className="mt-5 space-y-2 text-stone">{p.notForWho.map((x) => <li key={x}>— {x}</li>)}</ul></div></Reveal>}
        </div>
      </section>

      <section id="acquista" className="section bg-blush/30 scroll-mt-24">
        <div className="wrap max-w-3xl text-center">
          <Label t="Acquista" />
          <Heading text={`${p.name}`} className="text-5xl md:text-6xl justify-center" />
          <p className="mt-6 font-display text-6xl">{p.oldPrice && <span className="text-3xl text-stone line-through mr-3">{p.oldPrice}</span>}{p.price}</p>
          {p.bonus && <p className="mt-6 text-stone"><strong className="text-ink">Bonus: {p.bonus.t}.</strong> {p.bonus.d}</p>}
          <div className="mt-8 flex justify-center"><CheckoutButton href={p.checkout}>{p.cta}</CheckoutButton></div>
          <p className="mt-6 text-sm text-stone">{p.guarantee}</p>
          <p className="mt-2 text-xs text-stone">Il pagamento avviene su una pagina di checkout sicura. Descrizione del prodotto, non promessa di risultato.</p>
        </div>
      </section>

      <Faq items={p.faq} />
    </>
  );
}
