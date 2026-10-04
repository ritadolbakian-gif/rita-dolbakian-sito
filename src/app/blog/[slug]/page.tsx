import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPublished, getPost, getRelated } from "@/lib/blog";
import { CtaBand, JsonLd, Label } from "@/components/Ui";
import { Heading, Reveal } from "@/components/Motion";
import { Slot } from "@/components/Slot";
import { Toc, ShareBar } from "@/components/BlogClient";
import { LeadForm } from "@/components/LeadForm";
import { Quotes } from "@/components/Proof";
import { meta } from "@/lib/seo";
import { SITE } from "@/lib/site";

export function generateStaticParams() { return getPublished().map((p) => ({ slug: p.slug })); }

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p || !p.published) return {};
  return {
    ...meta(p.metaTitle, p.metaDescription, `/blog/${slug}`),
    keywords: [p.keyword, ...p.keywords],
    authors: [{ name: "Rita Dolbakian" }],
    openGraph: { type: "article", title: p.metaTitle, description: p.metaDescription, url: `/blog/${slug}`, publishedTime: p.date, modifiedTime: p.updated, authors: ["Rita Dolbakian"], images: ["/og-image.jpg"], locale: "it_IT" },
  };
}

const fmt = (d: string) => new Date(d).toLocaleDateString("it-IT", { day: "numeric", month: "long", year: "numeric" });

export default async function Post({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p || !p.published) notFound();
  const related = getRelated(slug);
  const url = `${SITE.url}/blog/${slug}`;
  const isTech = p.cluster === "D";
  const last = p.sections.length - 1;
  const tocItems = p.faq.length ? [...p.toc, { id: "faq", title: "Domande e risposte" }] : p.toc;
  const midAt = Math.min(3, last - 1); // dopo la 3ª sezione H2

  const ld = [
    {
      "@context": "https://schema.org", "@type": "BlogPosting", headline: p.title, description: p.metaDescription, inLanguage: "it-IT",
      datePublished: p.date, dateModified: p.updated, wordCount: p.words, keywords: [p.keyword, ...p.keywords].join(", "),
      articleSection: p.category, image: `${SITE.url}/og-image.jpg`, mainEntityOfPage: url,
      author: { "@type": "Person", name: "Rita Dolbakian", url: SITE.url },
      publisher: { "@type": "EducationalOrganization", name: "Rita Dolbakian Academy", logo: { "@type": "ImageObject", url: `${SITE.url}/media/logo.png` } },
    },
    {
      "@context": "https://schema.org", "@type": "BreadcrumbList",
      itemListElement: [["Home", SITE.url], ["Blog", `${SITE.url}/blog`], [p.title, url]].map(([name, item], i) => ({ "@type": "ListItem", position: i + 1, name, item })),
    },
    ...(p.faq.length ? [{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: p.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }] : []),
  ];

  const MidCta = () => (
    <aside className="not-prose my-12 rounded-3xl bg-ink text-ivory p-7 md:p-9 section-dark">
      <p className="eyebrow">{isTech ? "Se vuoi imparare con un metodo" : "Guida gratuita"}</p>
      <p className="font-display text-3xl md:text-4xl mt-3 leading-[1.08]">{isTech ? <>Mani sicure, <em className="kw">tocco consapevole</em>.</> : <>I primi 10 clienti online: <em className="kw">da dove cominciare</em>.</>}</p>
      <p className="mt-3 text-ivory/70 text-[0.95rem]">{isTech ? "Scopri il Metodo Rita Dolbakian: tre livelli, online e in presenza." : "La mia guida pratica per chi lavora nel benessere. Gratis, una sola email."}</p>
      <Link href={isTech ? "/percorsi/metodo-rita-dolbakian" : "/guida-gratuita"} className="btn btn-primary mt-6 !min-h-12">{isTech ? "Scopri il metodo" : "Scarica la guida"} <span className="arr">→</span></Link>
    </aside>
  );

  return (
    <>
      <JsonLd data={ld} />
      <article>
        <header className="bg-blush/30 pt-28 pb-12 md:pt-44 md:pb-16">
          <div className="wrap max-w-5xl">
            <nav aria-label="Percorso" className="eyebrow mb-6 flex flex-wrap gap-x-2"><Link href="/" className="hover:text-ink">Home</Link><span>/</span><Link href="/blog" className="hover:text-ink">Blog</Link><span>/</span><span className="text-ink">{p.category}</span></nav>
            <Heading as="h1" text={p.title} className="text-[clamp(2rem,6.2vw,4.6rem)] max-w-4xl" immediate />
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-stone">
              <span className="flex items-center gap-3"><span className="relative block size-10 overflow-hidden rounded-full"><Slot id="author" label="Rita" ratio="1/1" className="!rounded-full" /></span><span>Di <b className="text-ink font-medium">Rita Dolbakian</b></span></span>
              <span>Aggiornato il {fmt(p.updated)}</span>
              <span>{p.read} min di lettura</span>
              <span className="rounded-full border border-[var(--line)] px-3 py-1">{p.category}</span>
            </div>
          </div>
        </header>

        <div className="wrap max-w-5xl -mt-2 md:mt-0 pt-8 md:pt-10">
          <Slot kind="foto" id={`blog-${p.slug}`} label={p.category} ratio="16/8" className="!rounded-[1.5rem] md:!rounded-[2rem]" />
        </div>

        <div className="wrap grid gap-12 lg:grid-cols-[13.5rem_minmax(0,44rem)] lg:justify-center lg:gap-16 py-12 md:py-16">
          <aside className="hidden lg:block"><div className="sticky top-28 space-y-10"><Toc items={tocItems} /></div></aside>

          <div>
            <div className="rounded-3xl border border-rose/30 bg-blush/30 p-6 md:p-8">
              <p className="eyebrow !text-rose mb-3">In breve</p>
              <p className="font-display text-2xl md:text-[1.7rem] leading-snug" dangerouslySetInnerHTML={{ __html: p.answer }} />
            </div>

            <details className="lg:hidden mt-6 rounded-2xl border border-[var(--line)] px-5 py-1">
              <summary className="min-h-12 flex items-center justify-between cursor-pointer list-none eyebrow">In questo articolo <span className="text-rose text-xl">+</span></summary>
              <ol className="pb-4 space-y-2 text-sm">{tocItems.map((t) => <li key={t.id}><a className="block py-1" href={`#${t.id}`}>{t.title}</a></li>)}</ol>
            </details>

            <div className="prose-rd mt-10">
              {p.sections.map((s, i) => (
                <div key={s.id ?? "intro"}>
                  <section className={i === last && last > 0 ? "closing rounded-3xl bg-blush/40 p-6 md:p-10" : undefined} dangerouslySetInnerHTML={{ __html: s.html }} />
                  {i === midAt && <MidCta />}
                </div>
              ))}
            </div>

            {p.faq.length > 0 && (
              <section aria-labelledby="faq" className="mt-16">
                <p className="eyebrow mb-4">Domande e risposte</p>
                <h2 id="faq" className="font-display text-4xl md:text-5xl leading-[1.05] scroll-mt-24">Le domande <em className="kw">più frequenti</em>.</h2>
                <div className="mt-8 border-t border-[var(--line)]">
                  {p.faq.map((f) => (
                    <details key={f.q} className="acc">
                      <summary><h3 className="font-display text-[1.4rem] md:text-2xl leading-snug">{f.q}</h3><span className="plus" aria-hidden>+</span></summary>
                      <div className="acc-body prose-rd !text-stone" dangerouslySetInnerHTML={{ __html: f.html }} />
                    </details>
                  ))}
                </div>
              </section>
            )}

            <div className="mt-10 flex flex-wrap gap-3">
              {isTech ? <Link href="/percorsi/metodo-rita-dolbakian" className="btn btn-primary">Scopri il Metodo Rita Dolbakian <span className="arr">→</span></Link> : <Link href="/guida-gratuita" className="btn btn-primary">Ricevi la guida via email <span className="arr">→</span></Link>}
              <Link href="/call-orientamento" className="btn btn-ghost">Prenota 30 minuti con me</Link>
            </div>

            <div className="mt-14 border-t border-[var(--line)] pt-8"><ShareBar title={p.title} url={url} /></div>

            <div className="mt-10 grid gap-6 rounded-3xl border border-[var(--line)] p-6 sm:grid-cols-[7rem_1fr] items-center">
              <Slot id="author" label="Rita Dolbakian" ratio="1/1" className="!rounded-full w-28" />
              <div>
                <p className="eyebrow">L'autrice</p>
                <p className="font-display text-3xl mt-1">Rita Dolbakian</p>
                <p className="text-stone mt-2">Sono Rita: massaggiatrice e formatrice nel benessere da oltre dieci anni. Aiuto operatrici e operatori a costruire continuità, e insegno a massaggiare con il mio metodo.</p>
                <Link href="/chi-sono" className="ulink mt-3 inline-block font-medium">La mia storia →</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="wrap max-w-5xl pb-4"><Quotes /></div>

        {related.length > 0 && (
          <section className="section bg-blush/30">
            <div className="wrap">
              <Label t="Continua a leggere" />
              <Heading text="Potrebbe *interessarti*." className="text-4xl md:text-5xl" />
              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {related.map((r, i) => (
                  <Reveal key={r.slug} delay={i * 0.08}>
                    <Link href={`/blog/${r.slug}`} className="lift zoom group block">
                      <Slot id={`blog-${r.slug}`} label={r.category} ratio="4/3" />
                      <p className="eyebrow mt-4">{r.category} · {r.read} min</p>
                      <p className="font-display text-2xl mt-2 leading-tight group-hover:text-rose transition-colors">{r.title}</p>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="section">
          <div className="wrap max-w-3xl text-center">
            <Label t="Prima di andare" />
            <Heading text="Una guida pratica, *gratis*." className="text-4xl md:text-5xl" />
            <p className="mt-4 text-stone">«Il Sistema Clienti per Operatori del Benessere». Una sola email, nessuno spam.</p>
            <div className="mt-8 text-left max-w-xl mx-auto"><LeadForm tipo="guida" cta="Mandami la guida" compact /></div>
          </div>
        </section>
      </article>
      <CtaBand title="Vuoi parlarne *con me*?" primary={{ href: "/call-orientamento", label: "Prenota 30 minuti con me" }} />
    </>
  );
}
