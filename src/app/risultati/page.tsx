import { PageHero, Label, CtaBand, Faq, Tbc } from "@/components/Ui";
import { Heading } from "@/components/Motion";
import { Slot } from "@/components/Slot";
import { CaseStudies, VideoWall, Quotes, PressBar, RatingLd, TrustBar } from "@/components/Proof";
import { meta } from "@/lib/seo";

export const metadata = meta("Risultati e testimonianze delle allieve", "Casi studio e testimonianze delle allieve di Rita Dolbakian. Risultati dichiarati, esperienze individuali.", "/risultati");

export default function Risultati() {
  return (
    <>
      <RatingLd />
      <PageHero eyebrow="Risultati" title="Le storie di chi ha *cambiato* direzione." answer="Qui trovi i casi studio e le testimonianze delle allieve che hanno lavorato con me, con nome, cognome e autorizzazione. Sono esperienze individuali: raccontano un percorso, non promettono un risultato uguale per tutte." />
      <section className="section">
        <div className="wrap">
          <Slot kind="foto" id="risultati-hero" label="Rita con una allieva (autorizzata)" ratio="16/7" art="waves" className="mb-14" />
          <PressBar />
          <Label n="01" t="Casi studio" />
          <Heading text="Numeri veri. *Persone* vere." className="text-5xl md:text-6xl max-w-3xl" />
          <div className="mt-12"><CaseStudies /></div>
        </div>
      </section>
      <section className="section bg-blush/30">
        <div className="wrap">
          <Label n="02" t="In video" />
          <Heading text="Le loro *parole*." className="text-5xl md:text-6xl" />
          <div className="mt-12"><VideoWall /></div>
          <div className="mt-14"><Quotes /></div>
        </div>
      </section>
      <section className="section"><div className="wrap"><TrustBar /></div></section>
      <CtaBand title="Il prossimo racconto potrebbe essere *il tuo*." primary={{ href: "/call-orientamento", label: "Prenota 30 minuti con me" }} />
      <Faq items={[
        { q: "I risultati sono garantiti?", a: "No. Le testimonianze raccontano esperienze individuali: ognuna parte da una situazione diversa e il risultato dipende anche dall'impegno." },
        { q: "Le testimonianze sono vere?", a: "Pubblichiamo solo storie reali, con nome, cognome e autorizzazione scritta della persona." },
        { q: "Posso parlare con chi ha fatto il percorso?", a: <>Se vuoi, ne parliamo in call di orientamento. <Tbc>possibilità di contattare allieve</Tbc></>, plain: "Se vuoi, ne parliamo in call di orientamento." },
        { q: "Quanto tempo serve per vedere i primi cambiamenti?", a: "Dipende da dove parti e da quanto tempo dedichi al percorso. Nessuno può prometterti tempi precisi." },
      ]} />
    </>
  );
}
