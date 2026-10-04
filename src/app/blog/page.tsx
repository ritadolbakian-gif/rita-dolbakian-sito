import Link from "next/link";
import { PageHero, Label, Faq, JsonLd } from "@/components/Ui";
import { Heading, Reveal } from "@/components/Motion";
import { Slot } from "@/components/Slot";
import { LeadForm } from "@/components/LeadForm";
import { BlogGrid, type Card } from "@/components/BlogClient";
import { getPublished, getUpcoming, CATEGORIES } from "@/lib/blog";
import { SITE } from "@/lib/site";
import { meta } from "@/lib/seo";

export const metadata = {
  ...meta("Blog per chi lavora nel benessere", "Articoli di Rita Dolbakian su clienti, prezzi, Instagram, scheda Google e formazione nel massaggio. Guide pratiche, un passo alla volta.", "/blog"),
  alternates: { canonical: "/blog", types: { "application/rss+xml": "/blog/feed.xml" } },
};

export default function Blog() {
  const posts = getPublished();
  const featured = posts.find((p) => p.kind === "pillar") ?? posts[0];
  const rest = posts.filter((p) => p.slug !== featured.slug);
  const cards: Card[] = rest.map((p) => ({ slug: p.slug, title: p.title, desc: p.metaDescription, category: p.category, read: p.read, kind: p.kind }));
  const cats = CATEGORIES.filter((c) => posts.some((p) => p.category === c));
  const upcoming = getUpcoming();

  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org", "@type": "Blog", name: "Blog di Rita Dolbakian", url: `${SITE.url}/blog`, inLanguage: "it-IT",
        author: { "@type": "Person", name: "Rita Dolbakian" },
        blogPost: posts.map((p) => ({ "@type": "BlogPosting", headline: p.title, url: `${SITE.url}/blog/${p.slug}`, datePublished: p.date })),
      }} />
      <PageHero eyebrow="Il blog" title="Idee per *lavorare* con più calma." answer="Il blog di Rita Dolbakian raccoglie guide pratiche per chi lavora nel benessere: come trovare clienti, stabilizzare l'agenda, stabilire i prezzi, usare Instagram e la scheda Google, e come scegliere un corso di massaggio. Un tema alla volta, con parole semplici.">
        <Link href={`/blog/${featured.slug}`} className="btn btn-primary">Inizia dalla guida principale <span className="arr">→</span></Link>
        <Link href="/guida-gratuita" className="btn btn-ghost">Scarica la guida gratuita</Link>
      </PageHero>

      {/* In evidenza */}
      <section className="section pb-8">
        <div className="wrap">
          <Label n="01" t="Da dove cominciare" />
          <Reveal>
            <Link href={`/blog/${featured.slug}`} className="lift zoom group grid gap-8 rounded-[2rem] bg-blush/40 p-5 md:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <Slot kind="foto" id={`blog-${featured.slug}`} label={featured.category} ratio="4/3" />
              <div className="lg:pr-6">
                <p className="eyebrow">Guida principale · {featured.category} · {featured.read} min</p>
                <h2 className="font-display text-4xl md:text-5xl mt-3 leading-[1.05] group-hover:text-rose transition-colors">{featured.title}</h2>
                <p className="mt-5 text-stone">{featured.answerPlain}</p>
                <span className="mt-6 inline-flex gap-2 font-medium">Leggi la guida <span className="transition-transform duration-500 group-hover:translate-x-2">→</span></span>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Tutti gli articoli */}
      <section className="section pt-12">
        <div className="wrap">
          <Label n="02" t="Tutti gli articoli" />
          <Heading text="Un tema *alla volta*." className="text-5xl md:text-6xl mb-10" />
          <BlogGrid cards={cards} categories={cats} />
        </div>
      </section>

      {/* Prossimamente */}
      {upcoming.length > 0 && (
        <section className="section-dark section">
          <div className="wrap grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div><Label n="03" t="Prossimamente" /><Heading text="La parte su *tecnica* e formazione." className="text-4xl md:text-5xl" /><p className="mt-5 text-ivory/65 max-w-sm">Sto completando questi articoli con Rita, perché su tecnica e formazione ogni dettaglio deve essere preciso.</p></div>
            <ul className="divide-y divide-ivory/15 border-y border-ivory/15">
              {upcoming.map((p) => <li key={p.slug} className="py-5 flex items-start justify-between gap-6"><span className="font-display text-2xl leading-snug">{p.title}</span><span className="eyebrow shrink-0 mt-2">In arrivo</span></li>)}
            </ul>
          </div>
        </section>
      )}

      {/* Guida */}
      <section className="section">
        <div className="wrap grid gap-14 lg:grid-cols-[0.8fr_1.2fr] items-center">
          <Reveal><Slot kind="foto" id="guida-mockup" label="Guida gratuita" ratio="3/4" art="waves" className="max-w-xs mx-auto" /></Reveal>
          <div>
            <Label t="Guida gratuita" />
            <Heading text="Se vuoi tutto in *ordine*, parti da qui." className="text-4xl md:text-5xl" />
            <p className="mt-5 text-lg text-stone max-w-xl">«Il Sistema Clienti per Operatori del Benessere»: la guida pratica per fare i primi 10 clienti online. Una sola email, nessuno spam.</p>
            <div className="mt-8 max-w-xl"><LeadForm tipo="guida" cta="Mandami la guida" compact /></div>
          </div>
        </div>
      </section>

      <Faq title="Sul *blog*." items={[
        { q: "Chi scrive gli articoli?", a: "Gli articoli sono di Rita Dolbakian, massaggiatrice e formatrice nel benessere da oltre dieci anni, e sono pensati per chi lavora nel benessere." },
        { q: "Gli articoli sono consigli medici?", a: "No. Parlano di benessere, organizzazione e formazione. Non contengono indicazioni sanitarie né promesse di cura. Per questioni di salute ci si rivolge a un professionista sanitario." },
        { q: "Ogni quanto escono nuovi articoli?", a: "Nuovi articoli arrivano man mano che sono completi e verificati. Puoi seguire gli aggiornamenti con il feed RSS." },
        { q: "Posso proporre un argomento?", a: <>Sì, scrivimi dalla pagina <Link href="/contatti" className="ulink text-ink">Contatti</Link>: i temi più richiesti diventano nuovi articoli.</>, plain: "Sì, scrivi dalla pagina Contatti: i temi più richiesti diventano nuovi articoli." },
        { q: "Dove trovo i percorsi di formazione?", a: <>Nella pagina <Link href="/percorsi" className="ulink text-ink">Percorsi</Link>: Metodo A.G.E.N.D.A., Wellness Mastery e Metodo Rita Dolbakian.</>, plain: "Nella pagina Percorsi: Metodo A.G.E.N.D.A., Wellness Mastery e Metodo Rita Dolbakian." },
      ]} />
    </>
  );
}
