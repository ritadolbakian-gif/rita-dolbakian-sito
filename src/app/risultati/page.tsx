import { PageHero, Label, CtaBand, Tbc } from "@/components/Ui";
import { Heading, Reveal } from "@/components/Motion";
import { Slot } from "@/components/Slot";
import { meta } from "@/lib/seo";

export const metadata = meta("Risultati e testimonianze delle allieve", "Casi studio e testimonianze delle allieve di Rita Dolbakian. Risultati dichiarati, esperienze individuali.", "/risultati");

export default function Risultati() {
  return (
    <>
      <PageHero eyebrow="Risultati" title="Le storie di chi ha *cambiato* direzione." answer="Qui raccogliamo i casi studio e le testimonianze delle allieve di Rita Dolbakian, con nome, cognome e autorizzazione. Sono esperienze individuali: raccontano un percorso, non garantiscono un risultato." />
      <section className="section">
        <div className="wrap">
          <Label n="01" t="Casi studio" />
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            {[0, 1, 2, 3].map((i) => (
              <Reveal key={i} delay={(i % 2) * 0.1}><article className="rounded-3xl border border-[var(--line)] p-6 h-full">
                <Slot kind={i === 0 ? "video" : "foto"} label="Allieva (autorizzata)" ratio="16/10" />
                <p className="font-display text-7xl kw mt-6">[+X]</p>
                <h2 className="font-display text-3xl">[Nome Cognome]</h2>
                <p className="text-stone mt-2">[Ruolo] · <Tbc>risultato reale, citazione, autorizzazione scritta</Tbc></p>
              </article></Reveal>
            ))}
          </div>
          <p className="mt-10 text-sm text-stone max-w-2xl">Risultati dichiarati dalle allieve. Le testimonianze riflettono esperienze individuali e non costituiscono garanzia di risultato.</p>
        </div>
      </section>
      <CtaBand title="Il prossimo racconto potrebbe essere *il tuo*." primary={{ href: "/call-orientamento", label: "Prenota la call gratuita" }} />
    </>
  );
}
