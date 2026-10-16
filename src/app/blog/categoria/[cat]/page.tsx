import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPublished, CATEGORIES, CATEGORY_INFO, catSlug } from "@/lib/blog";
import { PageHero, JsonLd, CtaBand } from "@/components/Ui";
import { Reveal } from "@/components/Motion";
import { Slot } from "@/components/Slot";
import { Crumbs } from "@/components/Crumbs";
import { meta } from "@/lib/seo";
import { SITE } from "@/lib/site";

const find = (s: string) => CATEGORIES.find((c) => catSlug(c) === s);

export function generateStaticParams() {
  const used = new Set(getPublished().map((p) => p.category));
  return CATEGORIES.filter((c) => used.has(c)).map((c) => ({ cat: catSlug(c) }));
}

export async function generateMetadata({ params }: PageProps<"/blog/categoria/[cat]">): Promise<Metadata> {
  const { cat } = await params;
  const c = find(cat);
  if (!c) return {};
  return meta(`${c}: guide per massaggiatrici`, CATEGORY_INFO[c].meta, `/blog/categoria/${cat}`, "/media/hero-scrive.webp");
}

export default async function Categoria({ params }: PageProps<"/blog/categoria/[cat]">) {
  const { cat } = await params;
  const c = find(cat);
  if (!c) notFound();
  const posts = getPublished().filter((p) => p.category === c).sort((a, b) => a.order - b.order);
  if (!posts.length) notFound();
  const info = CATEGORY_INFO[c];
  const url = `${SITE.url}/blog/categoria/${cat}`;
  const others = CATEGORIES.filter((x) => x !== c && getPublished().some((p) => p.category === x));
  return (
    <>
      <Crumbs trail={[["Blog", "/blog"], [c, `/blog/categoria/${cat}`]]} />
      <JsonLd data={{
        "@context": "https://schema.org", "@type": "CollectionPage", "@id": `${url}#page`, name: `${c} — guide di Rita Dolbakian`, url, inLanguage: "it-IT", description: info.meta,
        isPartOf: { "@id": `${SITE.url}/blog#blog` }, author: { "@id": `${SITE.url}/#rita` },
        mainEntity: { "@type": "ItemList", numberOfItems: posts.length, itemListElement: posts.map((p, i) => ({ "@type": "ListItem", position: i + 1, url: `${SITE.url}/blog/${p.slug}`, name: p.title })) },
      }} />
      <PageHero dark bgId="hero-scrive" eyebrow={`Blog · ${c}`} title={info.title} answer={info.intro}>
        <Link href={`/blog/${posts[0].slug}`} className="btn btn-primary">Inizia da qui <span className="arr">→</span></Link>
        <Link href="/blog" className="btn btn-ghost">Tutte le guide</Link>
      </PageHero>
      <section className="section">
        <div className="wrap">
          <p className="eyebrow mb-8">{posts.length} {posts.length === 1 ? "guida" : "guide"}</p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 0.06}>
                <Link href={`/blog/${p.slug}`} className="group block h-full">
                  <Slot id={`blog-${p.slug}`} label={p.category} ratio="4/3" />
                  <p className="eyebrow mt-5">{p.read} min di lettura</p>
                  <h2 className="font-display text-3xl mt-2 leading-tight group-hover:text-rose transition-colors">{p.title}</h2>
                  <p className="mt-3 text-stone">{p.metaDescription}</p>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="mt-16 border-t border-[var(--line)] pt-8">
            <p className="eyebrow mb-4">Altri argomenti</p>
            <ul className="flex flex-wrap gap-3">{others.map((o) => <li key={o}><Link href={`/blog/categoria/${catSlug(o)}`} className="inline-flex rounded-full border border-[var(--line)] px-4 min-h-11 items-center text-sm hover:border-ink">{o}</Link></li>)}</ul>
          </div>
        </div>
      </section>
      <CtaBand title="Vuoi che lo guardiamo *insieme*?" primary={{ href: "/call-orientamento", label: "Prenota la call con me" }} secondary={{ href: "/guida-gratuita", label: "Ricevi la guida" }} />
    </>
  );
}
