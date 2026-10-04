import { PageHero, Label } from "@/components/Ui";
import { Heading, Reveal } from "@/components/Motion";
import { Slot } from "@/components/Slot";
import { LeadForm } from "@/components/LeadForm";
import { meta } from "@/lib/seo";

export const metadata = meta("Guida gratuita: i primi 10 clienti online", "Scarica \"Il Sistema Clienti per Operatori del Benessere\", la guida pratica di Rita Dolbakian per fare i primi 10 clienti online.", "/guida-gratuita");

export default function Guida() {
  return (
    <>
      <PageHero eyebrow="Guida gratuita" title="I primi 10 clienti *online*, con ordine." answer={"«Il Sistema Clienti per Operatori del Benessere» è la guida pratica gratuita di Rita Dolbakian per fare i primi 10 clienti online. Ti spiega da dove cominciare, con calma e senza dare nulla per scontato."} />
      <section className="section">
        <div className="wrap grid gap-16 lg:grid-cols-[0.9fr_1.1fr] items-start">
          <Reveal><Slot kind="foto" label="Mockup della guida" ratio="3/4" className="max-w-sm mx-auto" /></Reveal>
          <div>
            <Label t="Scarica la guida" /><Heading text="Dimmi dove *inviarla*." className="text-5xl" />
            <div className="mt-10"><LeadForm tipo="guida" cta="Scarica la guida" /></div>
          </div>
        </div>
      </section>
      <section className="section bg-blush/30"><div className="wrap">
        <Label t="Per chi è" /><Heading text="È per te se…" className="text-5xl" />
        <ul className="mt-8 grid gap-4 md:grid-cols-2 text-lg text-stone max-w-4xl">{["Lavori nel benessere e vuoi più clienti online.", "Hai competenza ma l'agenda è instabile.", "Non sai da dove cominciare.", "Vuoi un metodo, non motivazione."].map((t) => <li key={t} className="rounded-2xl bg-ivory p-5">✓ {t}</li>)}</ul>
      </div></section>
    </>
  );
}
