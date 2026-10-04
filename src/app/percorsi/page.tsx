import { QuoteWall } from "@/components/Proof";
import { Outcomes, Steps, Objections, Compare } from "@/components/Sections";
import Link from "next/link";
import { PageHero, Label, CtaBand, Faq } from "@/components/Ui";
import { Heading, Reveal } from "@/components/Motion";
import { Orientatore } from "@/components/Orientatore";
import { Slot } from "@/components/Slot";
import { meta } from "@/lib/seo";

export const metadata = meta("Percorsi di formazione per il benessere", "Tutti i percorsi di Rita Dolbakian: Metodo A.G.E.N.D.A., Metodo Sold Out e Metodo Rita Dolbakian. Scopri da quale partire.", "/percorsi");

const rows = [
  { n: "Metodo A.G.E.N.D.A.", who: "Operatrici e operatori del benessere", get: "Direzione, continuità, clienti più qualificati", fmt: "6 mesi · 11 moduli · affiancamento individuale", href: "/percorsi/metodo-agenda" },
  { n: "Metodo Sold Out", who: "Chi vuole il massimo affiancamento", get: "Call settimanale con me, landing page, prodotto digitale, piattaforma", fmt: "Mentorship 1:1 · 6 mesi · 8 posti a trimestre", href: "/percorsi/sold-out" },
  { n: "Metodo Rita Dolbakian", who: "Chi vuole imparare a massaggiare o perfezionarsi", get: "Tecnica manuale, ascolto del tocco, pratica", fmt: "Online e in presenza", href: "/percorsi/metodo-rita-dolbakian" },
];

export default function Percorsi() {
  return (
    <>
      <PageHero dark imageId="percorsi-top" imageRatio="4/5" imageArt="waves" eyebrow="Percorsi" title="Quale percorso fa per *te*?" answer="Ho costruito due strade. Se lavori nel benessere e vuoi riempire l'agenda, ci sono il Metodo A.G.E.N.D.A. e, per il massimo affiancamento, il Metodo Sold Out. Se vuoi imparare a massaggiare o perfezionare la tecnica, c'è il Metodo Rita Dolbakian. Ti aiuto a capire da quale partire.">
        <Link href="/call-orientamento" className="btn btn-primary">Prenota 30 minuti con me <span className="arr">→</span></Link>
        <a href="#orientamento" className="btn btn-ghost">Fai il test di 3 domande</a>
      </PageHero>

      <section className="section">
        <div className="wrap">
          <Label n="01" t="I tre percorsi" />
          <Heading text="Scegli la *strada*." className="text-5xl md:text-6xl" />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {[
              { id: "percorsi-agenda", t: "Metodo A.G.E.N.D.A.", d: "Il sistema per riempire l'agenda con social e posizionamento, con affiancamento individuale.", tag: "Per chi lavora nel benessere", href: "/percorsi/metodo-agenda", art: "orbs" as const, pts: ["6 mesi · 11 moduli", "2 call individuali al mese", "Chat con me 7 giorni su 7", "5 bonus"] },
              { id: "percorsi-wm", t: "Metodo Sold Out", d: "Mentorship 1:1 di 6 mesi: una call a settimana e il lavoro tecnico fatto al posto tuo.", tag: "8 posti a trimestre", href: "/percorsi/sold-out", art: "arch" as const, pts: ["6 mesi · 24 call con me", "Revisione dei tuoi contenuti", "Landing page e prodotto digitale", "Setup piattaforma e newsletter"] },
              { id: "percorsi-rd", t: "Metodo Rita Dolbakian", d: "Imparare a massaggiare e perfezionare la tecnica, online e in presenza.", tag: "Per le tue mani", href: "/percorsi/metodo-rita-dolbakian", art: "stones" as const, pts: ["Online e in presenza", "Tre livelli", "Tecnica e ascolto del tocco", "Si può partire da zero"] },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 0.1}>
                <Link href={c.href} className="lift zoom group block rounded-3xl border border-[var(--line)] bg-ivory p-4 h-full">
                  <Slot id={c.id} label={c.t} ratio="16/9" art={c.art} />
                  <div className="p-4 pt-6"><p className="eyebrow !text-rose">{c.tag}</p><h3 className="font-display text-3xl mt-2">{c.t}</h3><p className="mt-3 text-stone">{c.d}</p><ul className="mt-4 space-y-1 text-sm text-stone">{c.pts.map((x) => <li key={x}>✓ {x}</li>)}</ul><span className="mt-5 inline-flex gap-2 font-medium">Scopri il percorso <span className="transition-transform duration-500 group-hover:translate-x-2">→</span></span></div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="orientamento" className="section bg-blush/30 scroll-mt-28">
        <div className="wrap grid gap-12 lg:grid-cols-[0.8fr_1.2fr] items-start">
          <div><Label n="02" t="Orientamento" /><Heading text="Tre domande. Un consiglio *per te*." className="text-5xl md:text-6xl" /><p className="mt-6 text-stone max-w-sm">Rispondi senza pensarci troppo: ti dico da dove partirei io. Nessun dato richiesto, nessuna email.</p></div>
          <Orientatore />
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

      <section className="section-dark section">
        <div className="wrap">
          <Label n="04" t="Da dove partire" />
          <Heading text="Un passo alla volta, *senza fretta*." className="text-5xl md:text-6xl max-w-3xl" />
          <ol className="mt-12 grid gap-4 md:grid-cols-4">
            {[["Gratis", "La guida e la call di orientamento", "/guida-gratuita"], ["Primo passo", "Un prodotto digitale, per iniziare subito", "/corsi#digitali"], ["Affiancamento", "Metodo A.G.E.N.D.A., con me accanto", "/percorsi/metodo-agenda"], ["Il massimo", "Mentorship 1:1 Metodo Sold Out", "/percorsi/sold-out"]].map(([k, d, h], i) => (
              <li key={k}><Reveal delay={i * 0.08}><Link href={h} className="lift block rounded-3xl border border-ivory/15 p-6 h-full"><span className="font-display text-5xl kw leading-none">0{i + 1}</span><h3 className="font-display text-2xl mt-3">{k}</h3><p className="mt-2 text-ivory/70 text-sm">{d}</p></Link></Reveal></li>
            ))}
          </ol>
          <p className="mt-8 text-ivory/70">Vuoi vedere tutto in un posto solo? <Link href="/corsi" className="ulink text-ivory">Guarda i corsi e i prodotti</Link>.</p>
        </div>
      </section>

      <section className="section"><div className="wrap">
        <p className="eyebrow mb-5">Cosa dicono le allieve</p>
        <QuoteWall />
      </div></section>

      <Faq items={[
        { q: "Qual è la differenza tra Metodo A.G.E.N.D.A. e Metodo Sold Out?", a: "Il Metodo A.G.E.N.D.A. è il metodo e il primo percorso di affiancamento per ritrovare direzione e continuità. Metodo Sold Out è il percorso successivo: una mentorship 1:1 di 6 mesi con me, con 8 posti a trimestre." },
        { q: "C'è una garanzia?", a: "Sì. Per Metodo A.G.E.N.D.A. e Metodo Rita Dolbakian: soddisfatti o rimborsati per tutta la durata, se partecipi agli incontri e svolgi le attività richieste. Per il Metodo Sold Out: la garanzia «Primi 2 mesi», con le condizioni indicate nella pagina." },
        { q: "Devo già lavorare nel benessere?", a: "Per A.G.E.N.D.A. e Metodo Sold Out sì: sono pensati per chi ha già una competenza. Per imparare a massaggiare c'è il Metodo Rita Dolbakian." },
        { q: "Quanto costano i percorsi?", a: "Il prezzo del Metodo A.G.E.N.D.A. e del Metodo Sold Out lo comunico durante la videochiamata di orientamento, dopo aver capito se il percorso fa per te. Se vuoi, ne parliamo lì anche del pagamento a rate." },
        { q: "Da dove si comincia?", a: "Dalla guida gratuita o dalla call di orientamento di circa 30 minuti, senza obbligo. Da lì si capisce insieme quale percorso ha senso." },
      ]} />
      <CtaBand />
    </>
  );
}
