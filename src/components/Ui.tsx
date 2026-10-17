import Link from "next/link";
import type { ReactNode } from "react";
import { Heading, Reveal } from "./Motion";
import { Slot } from "./Slot";
import { MEDIA } from "@/lib/media";

export const Tbc = ({ children }: { children: ReactNode }) => <span className="tbc">[DA CONFERMARE: {children}]</span>;

export const Label = ({ n, t }: { n?: string; t: string }) => <p className="eyebrow mb-6">{n ? `${n} — ` : ""}{t}</p>;

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

/** Testata di pagina: H1 unico + answer block. `imageId` = foto a destra (due colonne); `bgId` = sfondo a tutta altezza. */
export function PageHero({ eyebrow, title, answer, dark = false, bgId, imageId, imageRatio = "4/5", imageArt = "orbs", children }: { eyebrow: string; title: string; answer?: ReactNode; dark?: boolean; bgId?: string; imageId?: string; imageRatio?: string; imageArt?: "arch" | "stones" | "waves" | "orbs" | "leaf"; children?: ReactNode }) {
  const heroBg = (bgId && MEDIA[bgId]?.bg) || "#0b0a09";
  const text = (
    <div>
      <p className="eyebrow mb-6 flex items-center gap-3"><span className="inline-block h-px w-8 bg-rose" />{eyebrow}</p>
      <Heading as="h1" text={title} className={imageId ? (imageRatio.startsWith("16") ? "text-[clamp(2.1rem,6.5vw,3.8rem)] max-w-3xl" : "text-[clamp(2.3rem,8vw,4.6rem)] max-w-3xl") : "text-[clamp(2.3rem,9.5vw,5.6rem)] max-w-5xl"} delay={0.1} immediate />
      {answer && <p className={`rd-fade mt-8 max-w-2xl text-lg ${dark ? "text-ivory/75" : "text-stone"}`} style={{ animationDelay: "0.5s" }}>{answer}</p>}
      {children && <div className="rd-fade mt-8 md:mt-10 flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 [&>*]:justify-center" style={{ animationDelay: "0.6s" }}>{children}</div>}
    </div>
  );
  return (
    <section data-hero-dark={dark ? "" : undefined} style={bgId ? { backgroundColor: heroBg } : undefined} className={`${dark ? "section-dark" : "bg-blush/30"} ${bgId ? "hero-solid" : ""} relative overflow-hidden ${bgId ? "pt-0" : "pt-28"} pb-12 md:pt-40 md:pb-20`}>
      {bgId && (<>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[104vw] md:hidden" aria-hidden>
          <Slot id={`${bgId}-m`} priority raw sizes="100vw" label="Sfondo" ratio="16/9" className="!absolute !inset-0 !h-full !w-full !rounded-none [aspect-ratio:auto!important]" art="orbs" />
          <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${heroBg} 2%, ${heroBg}99 35%, ${heroBg}1a)` }} />
        </div>
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[58%] md:block" aria-hidden>
          <Slot id={bgId} priority raw sizes="58vw" label="Sfondo" ratio="16/9" className="!absolute !inset-0 !h-full !w-full !rounded-none [aspect-ratio:auto!important]" art="orbs" />
          <div className="absolute inset-0" style={{ background: `linear-gradient(to right, ${heroBg} 0%, ${heroBg}cc 10%, ${heroBg}4d 28%, transparent 55%)` }} />
        </div>
      </>)}
      <div className={`wrap relative ${bgId ? "pt-[62vw] md:pt-0" : ""}`}>
        {imageId ? (
          <div className={`grid items-center gap-10 lg:gap-14 ${imageRatio.startsWith("16") ? "lg:grid-cols-[0.8fr_1.2fr]" : "lg:grid-cols-[1.1fr_0.9fr]"}`}>
            {text}
            <div className="rd-fade" style={{ animationDelay: "0.3s" }}><Slot kind="foto" id={imageId} priority label={eyebrow} ratio={imageRatio} art={imageArt} className="shadow-[0_40px_80px_-40px_rgba(11,10,9,.5)]" /></div>
          </div>
        ) : text}
      </div>
    </section>
  );
}

export type QA = { q: string; a: ReactNode; plain?: string };

export function Faq({ items, title = "Domande e *risposte*", dark = false, id }: { items: QA[]; title?: string; dark?: boolean; id?: string }) {
  const ld = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: items.map((i) => ({ "@type": "Question", name: i.q, acceptedAnswer: { "@type": "Answer", text: i.plain ?? (typeof i.a === "string" ? i.a : "") } })),
  };
  return (
    <section id={id} className={`${dark ? "section-dark" : ""} section scroll-mt-28`}>
      <JsonLd data={ld} />
      <div className="wrap grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div><Label t="Domande e risposte" /><Heading text={title} className="text-5xl md:text-6xl" /></div>
        <div className="border-t border-[var(--line)]">
          {items.map((i) => (
            <details key={i.q} className="acc">
              <summary><h3 className="font-display text-2xl md:text-3xl">{i.q}</h3><span className="plus" aria-hidden>+</span></summary>
              <div className="acc-body">{i.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaBand({ title = "Se senti che continuare così *non ti basta* più, parliamone.", sub = "Scrivimi o prenota: ti rispondo io.", primary = { href: "/call-orientamento", label: "Prenota la call con me" }, secondary }: { title?: string; sub?: string; primary?: { href: string; label: string }; secondary?: { href: string; label: string } }) {
  return (
    <section className="section-dark section text-center">
      <div className="wrap max-w-4xl">
        <Heading text={title} className="text-4xl md:text-6xl" />
        <Reveal delay={0.2}>
          <p className="mt-6 text-xl font-display italic text-ivory/80">{sub}</p>
          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row sm:flex-wrap justify-center gap-3 sm:gap-4 [&>*]:justify-center">
            <Link href={primary.href} className="btn btn-primary">{primary.label} <span className="arr">→</span></Link>
            {secondary && <Link href={secondary.href} className="btn btn-ghost">{secondary.label}</Link>}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function courseLd(name: string, description: string, url: string, mode?: string[]) {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.ritadolbakian.it";
  const abs = url.startsWith("http") ? url : `${base}${url}`;
  return {
    "@context": "https://schema.org", "@type": "Course", "@id": `${abs}#course`, name, description, url: abs, inLanguage: "it-IT",
    provider: { "@type": "EducationalOrganization", "@id": `${base}/#academy`, name: "Rita Dolbakian Academy", url: base },
    instructor: { "@type": "Person", "@id": `${base}/#rita`, name: "Rita Dolbakian" },
    audience: { "@type": "Audience", audienceType: "Operatrici e operatori del benessere" },
    hasCourseInstance: (mode ?? ["online"]).map((m) => ({ "@type": "CourseInstance", courseMode: m, instructor: { "@id": `${base}/#rita` } })),
  };
}
