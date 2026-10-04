import { QuoteWall } from "@/components/Proof";
import { Outcomes, Steps, Objections, Compare } from "@/components/Sections";
import Link from "next/link";
import { PageHero, Label, CtaBand, Faq } from "@/components/Ui";
import { Heading, Reveal } from "@/components/Motion";
import { Orientatore } from "@/components/Orientatore";
import { Slot } from "@/components/Slot";
import { meta } from "@/lib/seo";

export const metadata = meta("Percorsi di formazione per il benessere", "Tutti i percorsi di Rita Dolbakian: Metodo A.G.E.N.D.A., Wellness Mastery e Metodo Rita Dolbakian. Scopri da quale partire.", "/percorsi");

const rows = [
  { n: "Metodo A.G.E.N.D.A.", who: "Operatrici e operatori del benessere", get: "Direzione, continuità, clienti qualificati", fmt: "Affiancamento (primo percorso)", href: "/percorsi/metodo-agenda" },
  { n: "Wellness Mastery", who: "Chi vuole fare impresa online nel benessere", get: "Brand, offerta, social, vendita, automazione", fmt: "10 moduli · 6 bonus · soddisfatti o rimborsati", href: "/percorsi/wellness-mastery" },
  { n: "Metodo Rita Dolbakian", who: "Chi vuole imparare a massaggiare o perfezionarsi", get: "Tecnica manuale, ascolto del tocco, pratica", fmt: "Online e in presenza", href: "/percorsi/metodo-rita-dolbakian" },
];

export default function Percorsi() {
  return (
    <>
      <PageHero imageId="percorsi-top" imageRatio="4/5" imageArt="waves" eyebrow="Percorsi" title="Quale percorso fa per *te*?" answer="Ho costruito due strade. Il Metodo A.G.E.N.D.A. e Wellness Mastery sono per chi lavora nel benessere e vuole più continuità online. Il Metodo Rita Dolbakian è per chi vuole imparare a massaggiare o perfezionare la propria tecnica, online e in presenza. Ti aiuto a capire da quale partire.">
        <Link href="/call-orientamento" className="btn btn-primary">Prenota 30 minuti con me <span className="arr">→</span></Link>
      </PageHero>

      <section className="section">
        <div className="wrap grid gap-12 lg:grid-cols-[0.8fr_1.2fr] items-start">
          <div><Label n="01" t="Orientamento" /><Heading text="Tre domande. Un consiglio *per te*." className="text-5xl md:text-6xl" /><p className="mt-6 text-stone max-w-sm">Rispondi senza pensarci troppo: ti dico da dove partirei io. Nessun dato richiesto, nessuna email.</p></div>
          <Orientatore />
        </div>
      </section>

      <section className="section pt-0">
        <div className="wrap">
          <Label n="02" t="I tre percorsi" />
          <Heading text="Scegli la *strada*." className="text-5xl md:text-6xl" />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {[
              { id: "percorsi-agenda", t: "Metodo A.G.E.N.D.A.", d: "Il primo affiancamento per ritrovare direzione e continuità nella tua attività.", tag: "Per chi lavora nel benessere", href: "/percorsi/metodo-agenda", art: "orbs" as const },
              { id: "percorsi-wm", t: "Wellness Mastery", d: "Il percorso completo: 10 moduli, 6 bonus e 8 settimane di affiancamento 1:1.", tag: "Soddisfatti o rimborsati", href: "/percorsi/wellness-mastery", art: "arch" as const },
              { id: "percorsi-rd", t: "Metodo Rita Dolbakian", d: "Imparare a massaggiare e perfezionare la tecnica, online e in presenza.", tag: "Per le tue mani", href: "/percorsi/metodo-rita-dolbakian", art: "stones" as const },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 0.1}>
                <Link href={c.href} className="lift zoom group block rounded-3xl border border-[var(--line)] p-4 h-full">
                  <Slot id={c.id} label={c.t} ratio="16/9" art={c.art} />
                  <div className="p-4 pt-6"><p className="eyebrow !text-rose">{c.tag}</p><h3 className="font-display text-3xl mt-2">{c.t}</h3><p className="mt-3 text-stone">{c.d}</p><span className="mt-5 inline-flex gap-2 font-medium">Scopri il percorso <span className="transition-transform duration-500 group-hover:translate-x-2">→</span></span></div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-blush/30">
        <div className="wrap">
          <Label n="03" t="Il confronto" />
          <Heading text="I tre percorsi, *a confronto*." className="text-5xl md:text-6xl" />
          <Reveal>
            <div className="mt-12 hidden md:block overflow-x-auto rounded-3xl bg-ivory">
              <table className="w-full min-w-[46rem] text-left">
                <thead><tr className="border-b border-[var(--line)] text-xs uppercase tracking-[0.15em] text-stone">
                  {["Percorso", "Per chi è", "Cosa ottieni", "Formato", ""].map((h) => <th key={h} className="p-5 font-medium">{h}</th>)}
                </tr></thead>
                <tbody>
                  {rows.map((r) => (
                    <tr key={r.n} className="border-b border-[var(--line)] last:border-0 align-top">
                      <th className="p-5 font-display text-2xl font-normal">{r.n}</th>
                      <td className="p-5 text-stone">{r.who}</td><td className="p-5 text-stone">{r.get}</td><td className="p-5 text-stone">{r.fmt}</td>
                      <td className="p-5"><Link href={r.href} className="ulink whitespace-nowrap">Scopri →</Link></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-4 md:hidden">
            {rows.map((r) => (
              <Link key={r.n} href={r.href} className="rounded-3xl bg-ivory p-6 block">
                <h3 className="font-display text-3xl">{r.n}</h3>
                <dl className="mt-4 space-y-3 text-sm">
                  <div><dt className="eyebrow">Per chi è</dt><dd className="text-stone mt-1">{r.who}</dd></div>
                  <div><dt className="eyebrow">Cosa ottieni</dt><dd className="text-stone mt-1">{r.get}</dd></div>
                  <div><dt className="eyebrow">Formato</dt><dd className="text-stone mt-1">{r.fmt}</dd></div>
                </dl>
                <span className="mt-5 inline-block font-medium">Scopri →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section"><div className="wrap">
        <p className="eyebrow mb-5">Cosa dicono le allieve</p>
        <QuoteWall />
      </div></section>

      <Faq items={[
        { q: "Qual è la differenza tra Metodo A.G.E.N.D.A. e Wellness Mastery?", a: "Il Metodo A.G.E.N.D.A. è il metodo e il primo percorso di affiancamento per ritrovare direzione e continuità. Wellness Mastery è il percorso successivo, più ampio, per diventare imprenditrice digitale nel benessere." },
        { q: "C'è una garanzia?", a: "Sì, su tutti i percorsi: soddisfatti o rimborsati per tutta la durata. Il rischio è mio, a una condizione: partecipi agli incontri e agli eventi e svolgi le attività richieste, e lo dimostri." },
        { q: "Devo già lavorare nel benessere?", a: "Per A.G.E.N.D.A. e Wellness Mastery sì: sono pensati per chi ha già una competenza. Per imparare a massaggiare c'è il Metodo Rita Dolbakian." },
        { q: "Da dove si comincia?", a: "Dalla guida gratuita o dalla call di orientamento di circa 30 minuti, senza obbligo. Da lì si capisce insieme quale percorso ha senso." },
      ]} />
      <CtaBand />
    </>
  );
}
