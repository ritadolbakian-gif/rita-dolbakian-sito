import { ReviewsSection } from "@/components/Reviews";
import { PageHero, Label, CtaBand, Faq, Tbc } from "@/components/Ui";
import { Heading } from "@/components/Motion";
import { PressBar, RatingLd, TrustBar } from "@/components/Proof";
import { TestimonialWall } from "@/components/TestimonialWall";
import { meta } from "@/lib/seo";
import { Crumbs } from "@/components/Crumbs";

export const metadata = meta("Risultati e testimonianze delle allieve", "Casi studio e testimonianze delle allieve di Rita Dolbakian. Risultati dichiarati, esperienze individuali.", "/risultati", "/media/hero-ritratto.webp");

export default function Risultati() {
  return (
    <>
      <Crumbs trail={[["Risultati", "/risultati"]]} />
      <RatingLd />
      <PageHero dark bgId="hero-ritratto" eyebrow="Risultati" title="Le storie di chi ha *cambiato* direzione." answer="Qui trovi i casi studio e le testimonianze delle allieve che hanno lavorato con me, con nome, cognome e autorizzazione. Sono esperienze individuali: raccontano un percorso, non promettono un risultato uguale per tutte." />
      <section className="section">
        <div className="wrap">
          <PressBar />
          <Label n="01" t="Risultati reali" />
          <Heading text="Numeri veri. *Persone* vere." className="text-5xl md:text-6xl max-w-3xl" />
          <p className="mt-6 text-lg text-stone max-w-2xl">Alcuni risultati raccontati dalle allieve negli ultimi mesi. Più in basso trovi i loro messaggi, così come li ho ricevuti.</p>
          <ul className="mt-10 grid grid-cols-2 gap-px bg-[var(--line)] border border-[var(--line)] rounded-3xl overflow-hidden md:grid-cols-4">
            {[["600 €", "pacchetto chiuso, cliente arrivata da TikTok"], ["1.500 €", "pacchetto viso e corpo venduto da Instagram"], ["5.600 €", "incassati a metà mese, slot esauriti"], ["2 pacchetti", "chiusi da un solo reel"]].map(([n, l]) => (
              <li key={l} className="bg-ivory p-6"><p className="font-display text-4xl md:text-5xl kw leading-none">{n}</p><p className="mt-2 text-sm text-stone">{l}</p></li>
            ))}
          </ul>
        </div>
      </section>
      <section className="section bg-blush/30">
        <div className="wrap">
          <Label n="02" t="Parole loro" />
          <Heading text="Messaggi veri, *risultati veri*." className="text-5xl md:text-6xl" />
          <div className="mt-12"><TestimonialWall /></div>
        </div>
      </section>
      <ReviewsSection />

      <section className="section"><div className="wrap"><TrustBar /></div></section>
      <CtaBand title="Il prossimo racconto potrebbe essere *il tuo*." primary={{ href: "/call-orientamento", label: "Prenota la call con me" }} />
      <Faq items={[
        { q: "I risultati sono garantiti?", a: "No. Le testimonianze raccontano esperienze individuali: ognuna parte da una situazione diversa e il risultato dipende anche dall'impegno." },
        { q: "Le testimonianze sono vere?", a: "Pubblichiamo solo storie reali, con nome, cognome e autorizzazione scritta della persona." },
        { q: "Posso parlare con chi ha fatto il percorso?", a: <>Se vuoi, ne parliamo in call di orientamento. <Tbc>possibilità di contattare allieve</Tbc></>, plain: "Se vuoi, ne parliamo in call di orientamento." },
        { q: "Quanto tempo serve per vedere i primi cambiamenti?", a: "Dipende da dove parti e da quanto tempo dedichi al percorso. Nessuno può prometterti tempi precisi." },
      ]} />
    </>
  );
}
