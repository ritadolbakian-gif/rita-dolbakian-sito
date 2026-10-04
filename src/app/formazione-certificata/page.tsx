import { PageHero, Label, CtaBand, Faq, Tbc } from "@/components/Ui";
import { Heading, Reveal } from "@/components/Motion";
import { meta } from "@/lib/seo";

export const metadata = meta("Formazione certificata con Rita Dolbakian", "I percorsi di Rita Dolbakian Academy che prevedono un attestato: livelli, requisiti, durata e modalità.", "/formazione-certificata");

export default function FormazioneCertificata() {
  return (
    <>
      <PageHero eyebrow="Formazione certificata" title="Un percorso che *finisce* con qualcosa in mano." answer={<>I percorsi di formazione pratica del Metodo Rita Dolbakian prevedono un attestato finale. <Tbc>tipo di attestato (es. Attestato RD Academy), ente, validità</Tbc> Qui trovi livelli, requisiti e calendario delle prossime edizioni.</>} />

      <section className="section">
        <div className="wrap">
          <Label n="01" t="Il percorso a tappe" />
          <Heading text="Tre livelli, *una* strada." className="text-5xl md:text-7xl" />
          <div className="mt-14 grid gap-6 md:grid-cols-3 relative">
            {["Fondamenta del tocco", "Tecnica e precisione", "Perfezionamento e mestiere"].map((t, i) => (
              <Reveal key={t} delay={i * 0.1}><div className="rounded-3xl border border-[var(--line)] p-8 h-full">
                <span className="font-display text-7xl kw">{i + 1}</span>
                <h3 className="font-display text-3xl mt-2">{t}</h3>
                <dl className="mt-5 space-y-2 text-sm text-stone">
                  <div><dt className="inline eyebrow">Requisiti · </dt><dd className="inline"><Tbc>requisiti</Tbc></dd></div>
                  <div><dt className="inline eyebrow">Ore · </dt><dd className="inline"><Tbc>ore</Tbc></dd></div>
                  <div><dt className="inline eyebrow">Verifica · </dt><dd className="inline"><Tbc>esame o valutazione</Tbc></dd></div>
                </dl>
              </div></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-blush/30">
        <div className="wrap grid gap-12 md:grid-cols-2">
          <div><Label n="02" t="Prossime edizioni" /><Heading text="Il *calendario*." className="text-5xl" /><p className="mt-6 text-stone"><Tbc>date, sedi, formato online/presenza</Tbc></p></div>
          <div><Label n="03" t="Verifica attestato" /><Heading text="Un codice, una *conferma*." className="text-5xl" /><p className="mt-6 text-stone">Se prevista, qui potrai verificare l'autenticità di un attestato con il suo codice. <Tbc>se attivare la verifica</Tbc></p></div>
        </div>
      </section>

      <Faq items={[
        { q: "Che valore ha l'attestato?", a: <>È un attestato rilasciato da RD Academy a fine percorso. Non è un titolo abilitante. <Tbc>conferma del tipo di attestato</Tbc></>, plain: "È un attestato rilasciato da RD Academy a fine percorso. Non è un titolo abilitante." },
        { q: "Serve un esame finale?", a: <><Tbc>modalità di valutazione</Tbc></>, plain: "La modalità di valutazione sarà indicata per ogni livello." },
        { q: "Posso seguire tutto online?", a: "La parte teorica sì. La pratica diretta è prevista in presenza." },
        { q: "Dove si svolgono le edizioni in presenza?", a: <><Tbc>sedi</Tbc></>, plain: "Le sedi saranno indicate nel calendario." },
      ]} />
      <CtaBand title="Vuoi sapere se fa per *te*?" primary={{ href: "/call-orientamento", label: "Prenota la call gratuita" }} />
    </>
  );
}
