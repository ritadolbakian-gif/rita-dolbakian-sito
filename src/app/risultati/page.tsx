import { PageHero, Label, CtaBand } from "@/components/Ui";
import { Heading } from "@/components/Motion";
import { CaseStudies, VideoWall, Quotes, PressBar, RatingLd, TrustBar } from "@/components/Proof";
import { meta } from "@/lib/seo";

export const metadata = meta("Risultati e testimonianze delle allieve", "Casi studio e testimonianze delle allieve di Rita Dolbakian. Risultati dichiarati, esperienze individuali.", "/risultati");

export default function Risultati() {
  return (
    <>
      <RatingLd />
      <PageHero eyebrow="Risultati" title="Le storie di chi ha *cambiato* direzione." answer="Qui trovi i casi studio e le testimonianze delle allieve di Rita Dolbakian, con nome, cognome e autorizzazione. Sono esperienze individuali: raccontano un percorso, non promettono un risultato uguale per tutte." />
      <section className="section">
        <div className="wrap">
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
      <CtaBand title="Il prossimo racconto potrebbe essere *il tuo*." primary={{ href: "/call-orientamento", label: "Prenota la call gratuita" }} />
    </>
  );
}
