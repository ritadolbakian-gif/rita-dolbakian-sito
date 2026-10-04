import Link from "next/link";
import type { ReactNode } from "react";
import { Heading, Reveal } from "./Motion";

export const Tbc = ({ children }: { children: ReactNode }) => <span className="tbc">[DA CONFERMARE: {children}]</span>;

export const Label = ({ n, t }: { n?: string; t: string }) => <p className="eyebrow mb-6">{n ? `${n} — ` : ""}{t}</p>;

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

/** Testata di pagina: H1 unico + answer block 40–60 parole. */
export function PageHero({ eyebrow, title, answer, dark = false, children }: { eyebrow: string; title: string; answer?: ReactNode; dark?: boolean; children?: ReactNode }) {
  return (
    <section className={`${dark ? "section-dark" : "bg-blush/30"} pt-28 pb-12 md:pt-44 md:pb-24`}>
      <div className="wrap">
        <p className="eyebrow mb-6">{eyebrow}</p>
        <Heading as="h1" text={title} className="text-[clamp(2.3rem,9.5vw,5.6rem)] max-w-5xl" delay={0.1} immediate />
        {answer && <Reveal delay={0.5}><p className={`mt-8 max-w-2xl text-lg ${dark ? "text-ivory/75" : "text-stone"}`}>{answer}</p></Reveal>}
        {children && <Reveal delay={0.6}><div className="mt-8 md:mt-10 flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 [&>*]:justify-center">{children}</div></Reveal>}
      </div>
    </section>
  );
}

export type QA = { q: string; a: ReactNode; plain?: string };

export function Faq({ items, title = "Domande e *risposte*", dark = false }: { items: QA[]; title?: string; dark?: boolean }) {
  const ld = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: items.map((i) => ({ "@type": "Question", name: i.q, acceptedAnswer: { "@type": "Answer", text: i.plain ?? (typeof i.a === "string" ? i.a : "") } })),
  };
  return (
    <section className={`${dark ? "section-dark" : ""} section`}>
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

export function CtaBand({ title = "Se senti che continuare così *non ti basta* più, parliamone.", sub = "Con calma. Con chiarezza.", primary = { href: "/call-orientamento", label: "Prenota la tua call di orientamento" }, secondary }: { title?: string; sub?: string; primary?: { href: string; label: string }; secondary?: { href: string; label: string } }) {
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
  return {
    "@context": "https://schema.org", "@type": "Course", name, description, url, inLanguage: "it-IT",
    provider: { "@type": "EducationalOrganization", name: "Rita Dolbakian Academy" },
    ...(mode ? { hasCourseInstance: mode.map((m) => ({ "@type": "CourseInstance", courseMode: m })) } : {}),
  };
}
