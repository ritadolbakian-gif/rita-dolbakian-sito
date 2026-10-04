import { PageHero, Label } from "@/components/Ui";
import { Heading } from "@/components/Motion";
import { TrustBar } from "@/components/Proof";
import { SITE } from "@/lib/site";
import { meta } from "@/lib/seo";

export const metadata = meta("Prenota la call gratuita di orientamento", "Prenota una call gratuita di circa 30 minuti con Rita Dolbakian: un confronto calmo e onesto, senza obblighi e senza spam.", "/call-orientamento");

export default function Call() {
  return (
    <>
      <PageHero eyebrow="Call di orientamento" title="Un confronto. *Calmo.* Onesto." answer="La call di orientamento con Rita Dolbakian dura circa 30 minuti ed è gratuita. Non è una lezione, non è motivazionale e non è una telefonata commerciale aggressiva: serve a capire la tua situazione e se ha senso lavorare insieme." />
      <section className="section">
        <div className="wrap grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="space-y-10">
            <div><Label t="Prima" /><p className="text-stone">Scegli l'orario che ti va bene. Ricevi la conferma via email, e basta.</p></div>
            <div><Label t="Durante" /><p className="text-stone">Parliamo di dove sei, di cosa vuoi cambiare e di cosa ha senso fare. Ti dico con sincerità se posso aiutarti. Lavoro solo con poche persone.</p></div>
            <div><Label t="Dopo" /><p className="text-stone">Nessun obbligo e nessuno spam. Hai tutto il tempo per decidere, con calma.</p></div>
            <Heading text="30 minuti. *Nessun* obbligo." className="text-4xl" as="h2" />
          </div>
          <div className="rounded-3xl border border-[var(--line)] overflow-hidden bg-ivory">
            <iframe src={SITE.bookingUrl} title="Prenota la call di orientamento" loading="lazy" className="w-full border-0" style={{ minHeight: 780 }} />
          </div>
        </div>
      </section>
      <section className="section pt-0"><div className="wrap"><TrustBar /></div></section>
    </>
  );
}
