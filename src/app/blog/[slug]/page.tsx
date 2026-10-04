import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { POSTS, getPost } from "@/lib/blog";
import { Faq, CtaBand, JsonLd } from "@/components/Ui";
import { Heading } from "@/components/Motion";
import { Slot } from "@/components/Slot";
import { meta } from "@/lib/seo";
import { SITE } from "@/lib/site";

export function generateStaticParams() { return POSTS.filter((p) => p.published).map((p) => ({ slug: p.slug })); }

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p || !p.published) return {};
  return meta(p.title.length > 60 ? p.title.slice(0, 57) + "…" : p.title, p.desc, `/blog/${slug}`);
}

const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const fmt = (d: string) => new Date(d).toLocaleDateString("it-IT", { day: "numeric", month: "long", year: "numeric" });

export default async function Post({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p || !p.published) notFound();
  const related = POSTS.filter((x) => x.published && x.slug !== slug).slice(0, 2);
  const ld = {
    "@context": "https://schema.org", "@type": "BlogPosting", headline: p.title, description: p.desc, datePublished: p.date, dateModified: p.updated, inLanguage: "it-IT",
    author: { "@type": "Person", name: "Rita Dolbakian", url: SITE.url }, publisher: { "@type": "EducationalOrganization", name: "Rita Dolbakian Academy" },
    mainEntityOfPage: `${SITE.url}/blog/${slug}`,
  };
  return (
    <>
      <JsonLd data={ld} />
      <article>
        <header className="bg-blush/30 pt-28 pb-10 md:pt-44">
          <div className="wrap max-w-4xl">
            <p className="eyebrow mb-5"><Link href="/blog" className="ulink">Blog</Link> · {p.cat} · {p.read} min di lettura</p>
            <Heading as="h1" text={p.title} className="text-[clamp(2rem,8vw,4.4rem)]" immediate />
            <p className="mt-6 text-sm text-stone">Di Rita Dolbakian · Aggiornato il {fmt(p.updated)}</p>
          </div>
        </header>
        <div className="wrap max-w-3xl py-14">
          <p className="font-display text-2xl md:text-3xl leading-snug border-l-2 border-rose pl-6">{p.answer}</p>
          <nav aria-label="Indice" className="my-12 rounded-2xl bg-blush/40 p-6">
            <p className="eyebrow mb-3">In questo articolo</p>
            <ol className="space-y-1 list-decimal ml-5">{p.sections!.map((s) => <li key={s.h}><a className="ulink" href={`#${slugify(s.h)}`}>{s.h}</a></li>)}</ol>
          </nav>
          <div className="prose-rd">
            {p.sections!.map((s) => (
              <section key={s.h}><h2 id={slugify(s.h)}>{s.h}</h2>{s.p.map((t) => <p key={t}>{t}</p>)}{s.list && <ul>{s.list.map((l) => <li key={l}>{l}</li>)}</ul>}</section>
            ))}
          </div>
          <aside className="section-dark rounded-3xl p-8 my-12">
            <p className="eyebrow mb-3">Da ricordare</p>
            <ul className="space-y-2">{p.remember!.map((r) => <li key={r}>— {r}</li>)}</ul>
          </aside>
          <div className="rounded-3xl border border-[var(--line)] p-8 grid gap-6 sm:grid-cols-[8rem_1fr] items-center">
            <Slot kind="foto" label="Rita" ratio="1/1" className="!rounded-full" />
            <div><p className="font-display text-3xl">Rita Dolbakian</p><p className="text-stone mt-1">Massaggiatrice e formatrice nel benessere da oltre dieci anni. Scrive di continuità, prezzi e tecnica, con calma.</p><Link href="/chi-sono" className="ulink mt-3 inline-block">La sua storia →</Link></div>
          </div>
        </div>
        <Faq items={p.faq!.map((f) => ({ q: f.q, a: f.a, plain: f.a }))} />
        <div className="wrap max-w-5xl pb-20">
          <h2 className="font-display text-4xl mb-6">Potrebbe <em className="kw">interessarti</em></h2>
          <div className="grid gap-6 md:grid-cols-2">{related.map((r) => <Link key={r.slug} href={`/blog/${r.slug}`} className="lift rounded-3xl border border-[var(--line)] p-6"><p className="eyebrow">{r.cat}</p><p className="font-display text-2xl mt-2">{r.title}</p></Link>)}</div>
        </div>
      </article>
      <CtaBand title="Vuoi parlarne *con calma*?" primary={{ href: "/call-orientamento", label: "Prenota la call gratuita" }} secondary={{ href: "/guida-gratuita", label: "Scarica la guida" }} />
    </>
  );
}
