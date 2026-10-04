import Link from "next/link";
import { PageHero, Label, CtaBand, Faq } from "@/components/Ui";
import { Heading, Reveal } from "@/components/Motion";
import { Orientatore } from "@/components/Orientatore";
import { meta } from "@/lib/seo";

export const metadata = meta("Percorsi di formazione per il benessere", "Tutti i percorsi di Rita Dolbakian: Metodo A.G.E.N.D.A., Wellness Mastery e Metodo Rita Dolbakian. Scopri da quale partire.", "/percorsi");

const rows = [
  { n: "Metodo A.G.E.N.D.A.", who: "Operatrici e operatori del benessere", get: "Direzione, continuità, clienti qualificati", fmt: "Affiancamento (primo percorso)", href: "/percorsi/metodo-agenda" },
  { n: "Wellness Mastery", who: "Chi vuole fare impresa online nel benessere", get: "Brand, offerta, social, vendita, automazione", fmt: "10 moduli · 6 bonus · garanzia 14 giorni", href: "/percorsi/wellness-mastery" },
  { n: "Metodo Rita Dolbakian", who: "Chi vuole imparare a massaggiare o perfezionarsi", get: "Tecnica manuale, ascolto del tocco, pratica", fmt: "Online e in presenza", href: "/percorsi/metodo-rita-dolbakian" },
];

export default function Percorsi() {
  return (
    <>
      <PageHero eyebrow="Percorsi" title="Non tutti partono dallo *stesso* punto." answer="Rita Dolbakian offre due strade: il Metodo A.G.E.N.D.A. e Wellness Mastery per chi lavora nel benessere e vuole più continuità online, e il Metodo Rita Dolbakian per chi vuole imparare a massaggiare o perfezionare la propria tecnica, online e in presenza.">
        <Link href="/call-orientamento" className="btn btn-primary">Prenota la call gratuita <span className="arr">→</span></Link>
      </PageHero>

      <section className="section">
        <div className="wrap grid gap-12 lg:grid-cols-[0.8fr_1.2fr] items-start">
          <div><Label n="01" t="Orientamento" /><Heading text="Tre domande. Un consiglio *onesto*." className="text-5xl md:text-6xl" /><p className="mt-6 text-stone max-w-sm">Rispondi senza pensarci troppo: ti dico da dove partirei io. Nessun dato richiesto, nessuna email.</p></div>
          <Orientatore />
        </div>
      </section>

      <section className="section bg-blush/30">
        <div className="wrap">
          <Label n="02" t="Il confronto" />
          <Heading text="I tre percorsi, *a confronto*." className="text-5xl md:text-6xl" />
          <Reveal>
            <div className="mt-12 overflow-x-auto rounded-3xl bg-ivory">
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
        </div>
      </section>

      <Faq items={[
        { q: "Qual è la differenza tra Metodo A.G.E.N.D.A. e Wellness Mastery?", a: "Il Metodo A.G.E.N.D.A. è il metodo e il primo percorso di affiancamento per ritrovare direzione e continuità. Wellness Mastery è il percorso successivo, più ampio, per diventare imprenditrice digitale nel benessere." },
        { q: "Devo già lavorare nel benessere?", a: "Per A.G.E.N.D.A. e Wellness Mastery sì: sono pensati per chi ha già una competenza. Per imparare a massaggiare c'è il Metodo Rita Dolbakian." },
        { q: "Da dove si comincia?", a: "Dalla guida gratuita o dalla call di orientamento di circa 30 minuti, senza obbligo. Da lì si capisce insieme quale percorso ha senso." },
      ]} />
      <CtaBand />
    </>
  );
}
