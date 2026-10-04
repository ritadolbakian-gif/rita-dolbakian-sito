import { QuoteWall } from "@/components/Proof";
import { PageHero, Label, Faq, Tbc } from "@/components/Ui";
import { Heading, Reveal } from "@/components/Motion";
import { Slot } from "@/components/Slot";
import { TrustBar } from "@/components/Proof";
import { SITE } from "@/lib/site";
import { meta } from "@/lib/seo";

export const metadata = meta("Prenota la call gratuita di orientamento", "Prenota una call gratuita di circa 30 minuti con Rita Dolbakian: un confronto calmo e onesto, senza obblighi e senza spam.", "/call-orientamento");

export default function Call() {
  return (
    <>
      <PageHero eyebrow="Call di orientamento" title="Un confronto. *Calmo.* Onesto." answer="Sai che qualcosa nella tua attività non gira, ma non sai da dove cominciare. In circa 30 minuti ti dico con sincerità dove stai perdendo continuità e cosa farei io per prima cosa. È gratuita. Non è una lezione, non è motivazionale e non è una telefonata commerciale aggressiva." />
      <section className="section">
        <div className="wrap grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="space-y-10">
            <div><Label t="Prima" /><p className="text-stone">Scegli l'orario che ti va bene. Ricevi la conferma via email, e basta.</p></div>
            <div><Label t="Durante" /><p className="text-stone">Parliamo di dove sei, di cosa vuoi cambiare e di cosa ha senso fare. Ti dico con sincerità se posso aiutarti. Lavoro solo con poche persone.</p></div>
            <div><Label t="Dopo" /><p className="text-stone">Nessun obbligo e nessuno spam. Hai tutto il tempo per decidere, con calma.</p></div>
            <Heading text="30 minuti. *Nessun* obbligo." className="text-4xl" as="h2" />
            <Reveal><Slot kind="foto" id="call-hero" label="Rita sorride alla videochiamata" ratio="4/5" art="orbs" className="max-w-xs" /></Reveal>
          </div>
          <div className="rounded-3xl border border-[var(--line)] overflow-hidden bg-ivory">
            <iframe src={SITE.bookingUrl} title="Prenota la call di orientamento" loading="lazy" className="w-full border-0" style={{ minHeight: 780 }} />
          </div>
        </div>
      </section>
      <section className="section pt-0"><div className="wrap"><TrustBar /></div></section>
      <section className="section pt-0"><div className="wrap">
        <p className="eyebrow mb-5">Dopo la call, hanno detto</p>
        <QuoteWall />
      </div></section>

      <Faq items={[
        { q: "La call è gratuita?", a: "Sì. Dura circa 30 minuti e non c'è nessun obbligo." },
        { q: "È una telefonata di vendita?", a: "No. Non è una lezione, non è motivazionale e non è una telefonata commerciale aggressiva. È un confronto calmo e onesto." },
        { q: "Come mi preparo?", a: "Basta che pensi a dove sei oggi con la tua attività e a cosa vorresti cambiare. Non serve preparare altro." },
        { q: "E se dopo la call il percorso non fa per me?", a: "Va benissimo: nessun obbligo e nessuno spam. Ti dico con sincerità se e come posso aiutarti." },
        { q: "Come si svolge, e dove?", a: <>Si svolge in videochiamata. <Tbc>piattaforma e link</Tbc></>, plain: "Si svolge in videochiamata." },
        { q: "Posso spostare o annullare la prenotazione?", a: "Sì: puoi farlo dal link che ricevi nella email di conferma." },
      ]} />
    </>
  );
}
