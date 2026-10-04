import Link from "next/link";
import { PageHero, Label, CtaBand, Faq, Tbc, JsonLd, courseLd } from "@/components/Ui";
import { Heading, Reveal } from "@/components/Motion";
import { Slot } from "@/components/Slot";
import { CaseStudies, TrustBar } from "@/components/Proof";
import { meta } from "@/lib/seo";

export const metadata = meta("Metodo Rita Dolbakian: impara a massaggiare", "Il Metodo Rita Dolbakian per imparare a massaggiare e migliorare la tua tecnica: tre livelli, studio online e pratica in presenza.", "/percorsi/metodo-rita-dolbakian");

const levels = [
  { n: "Livello 1", id: "rd-livello-1", art: "stones" as const, t: "Fondamenta del tocco", pts: ["Postura e uso del corpo", "Pressione, ritmo e continuità", "Le prime sequenze, con calma", "Ascolto della persona"], learn: "A sentire cosa fanno le tue mani.", who: "Per chi parte da zero" },
  { n: "Livello 2", id: "rd-livello-2", art: "waves" as const, t: "Tecnica e precisione", pts: ["Sequenze complete e transizioni", "Adattare il tocco alla persona", "Cura dell'ambiente e dell'accoglienza", "Errori comuni e come correggerli"], learn: "A lavorare con più sicurezza e fluidità.", who: "Per chi ha le basi" },
  { n: "Livello 3", id: "rd-livello-3", art: "arch" as const, t: "Perfezionamento e mestiere", pts: ["Affinare il proprio stile", "Costruire il tuo trattamento firma", "Presentare il tuo lavoro con chiarezza", "Un passo verso la tua attività"], learn: "A riconoscere e raccontare il tuo modo di lavorare.", who: "Per chi massaggia già" },
];

const day = [
  ["Prima", "Guardi la lezione online, quante volte vuoi."],
  ["Poi", "Ti alleni sui movimenti con calma, a casa."],
  ["In presenza", "Rita e il gruppo ti aiutano a correggere i dettagli."],
  ["Dopo", "Ripeti, chiedi, ricevi un riscontro."],
];

export default function MetodoRD() {
  return (
    <>
      <JsonLd data={courseLd("Metodo Rita Dolbakian", "Formazione pratica per imparare a massaggiare e migliorare la propria tecnica, online e in presenza.", "/percorsi/metodo-rita-dolbakian", ["online", "onsite"])} />
      <PageHero dark eyebrow="Metodo Rita Dolbakian" title="Impara a *massaggiare*. Con mani sicure." answer="Il Metodo Rita Dolbakian è il percorso di formazione pratica per imparare a massaggiare e migliorare la propria tecnica. Nasce da oltre dieci anni di lavoro sul campo ed è semplificato per essere seguito a partire dal tuo livello: lezioni online per studiare, pratica in presenza per mettere le mani.">
        <Link href="/call-orientamento" className="btn btn-primary">Parlane con Rita <span className="arr">→</span></Link>
        <Link href="#livelli" className="btn btn-ghost">Vedi i livelli</Link>
      </PageHero>

      <section className="py-4"><div className="wrap"><p className="text-center text-sm text-stone rounded-2xl border border-dashed border-rose/60 p-4">Struttura dei livelli in bozza: <Tbc>validazione di Rita su programma, durata, sedi e prezzi</Tbc></p></div></section>

      <section className="section">
        <div className="wrap grid gap-14 lg:grid-cols-2 items-center">
          <Reveal><Slot kind="foto" id="rd-hero" label="Rita insegna una tecnica" ratio="4/5" art="stones" /></Reveal>
          <div>
            <Label n="01" t="Cosa lo rende diverso" />
            <Heading text="Tecnica, *ascolto*, presenza." className="text-5xl md:text-6xl" />
            <div className="mt-8 space-y-4 text-lg text-stone max-w-xl">
              <p>Un metodo studiato, testato e semplificato in oltre dieci anni di lavoro. Meno fronzoli, più chiarezza su cosa fare e perché lo stai facendo.</p>
              <p>Non impari a ripetere dei movimenti. Impari a sentire, a dosare la pressione, a stare con la persona che hai davanti.</p>
              <p className="text-sm"><Tbc>i tratti distintivi del metodo secondo Rita</Tbc></p>
            </div>
          </div>
        </div>
      </section>

      <section id="livelli" className="section bg-blush/30">
        <div className="wrap">
          <Label n="02" t="Programma" />
          <Heading text="Tre livelli. *Parti* da dove sei." className="text-5xl md:text-7xl" />
          <p className="mt-5 text-lg text-stone max-w-xl">Non devi fare tutto. Scegli il livello che ti somiglia oggi: in call di orientamento lo scegliamo insieme.</p>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {levels.map((l, i) => (
              <Reveal key={l.n} delay={i * 0.1}>
                <article className="lift zoom bg-ivory rounded-3xl p-4 h-full flex flex-col">
                  <Slot kind="foto" id={l.id} label={l.t} ratio="4/3" art={l.art} />
                  <div className="p-4 pt-6 flex flex-col flex-1">
                    <span className="eyebrow">{l.n}</span>
                    <h3 className="font-display text-3xl mt-2">{l.t}</h3>
                    <ul className="mt-5 space-y-2 text-stone flex-1">{l.pts.map((p) => <li key={p}>— {p}</li>)}</ul>
                    <p className="mt-5 font-display text-xl">Impari: <em className="kw">{l.learn}</em></p>
                    <p className="mt-3 text-sm text-rose">{l.who}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark section">
        <div className="wrap">
          <Label n="03" t="Come si impara" />
          <Heading text="Online *e* in presenza." className="text-5xl md:text-7xl" />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Reveal><div className="rounded-3xl border border-ivory/15 p-6 md:p-8 h-full">
              <h3 className="font-display text-3xl">Online</h3>
              <ul className="mt-4 space-y-2 text-ivory/70"><li>— Lezioni video con dimostrazione della tecnica</li><li>— Esercizi guidati da ripetere con calma</li><li>— Confronto e correzioni sul tuo lavoro</li></ul>
              <div className="mt-6"><Slot kind="video" id="rd-online" label="Anteprima lezione" ratio="16/9" art="waves" /></div>
            </div></Reveal>
            <Reveal delay={0.1}><div className="rounded-3xl border border-ivory/15 p-6 md:p-8 h-full">
              <h3 className="font-display text-3xl">In presenza</h3>
              <ul className="mt-4 space-y-2 text-ivory/70"><li>— Pratica diretta, mani su mani</li><li>— Gruppi piccoli, attenzione a ognuna</li><li>— Sedi e date: <Tbc>calendario e luoghi</Tbc></li></ul>
              <div className="mt-6"><Slot kind="foto" id="rd-aula" label="Formazione in aula" ratio="16/9" art="orbs" /></div>
            </div></Reveal>
          </div>
          <ol className="mt-14 grid gap-4 md:grid-cols-4">
            {day.map(([t, d], i) => <li key={t}><Reveal delay={i * 0.08}><div className="rounded-3xl bg-ivory/5 p-6 h-full"><span className="font-display text-5xl kw leading-none">{i + 1}</span><h3 className="font-display text-2xl mt-3">{t}</h3><p className="mt-2 text-sm text-ivory/65">{d}</p></div></Reveal></li>)}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid gap-14 lg:grid-cols-[0.8fr_1.2fr] items-center">
          <Reveal><Slot kind="foto" id="rd-docente" label="Rita come insegnante" ratio="4/5" art="leaf" /></Reveal>
          <div>
            <Label n="04" t="Chi insegna" />
            <Heading text="Impari da chi lo *fa* ogni giorno." className="text-5xl md:text-6xl" />
            <p className="mt-6 text-lg text-stone max-w-xl">Rita Dolbakian è massaggiatrice prima ancora che formatrice. Insegna quello che ha studiato, provato e semplificato in oltre dieci anni, con calma e senza fretta.</p>
            <Link href="/chi-sono" className="btn btn-ghost mt-8">Leggi la sua storia <span className="arr">→</span></Link>
          </div>
        </div>
      </section>

      <section className="section bg-blush/30">
        <div className="wrap">
          <Label n="05" t="Chi ha imparato" />
          <Heading text="Le mani cambiano. Si *sente*." className="text-5xl md:text-6xl max-w-3xl" />
          <div className="mt-12"><CaseStudies max={3} /></div>
          <div className="mt-16"><TrustBar items={[{ t: "Parti dal tuo livello", d: "Tre livelli: scegli quello giusto per te." }, { t: "Pratica vera", d: "Online per studiare, in presenza per mettere le mani." }, { t: "Gruppi piccoli", d: "Attenzione a ognuna, non una platea." }, { t: "Parole oneste", d: "Formazione sulla tecnica, nessuna promessa terapeutica." }]} /></div>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid gap-12 md:grid-cols-2">
          <div><Label n="06" t="Per chi è" /><Heading text="Per chi *vuole* farlo bene." className="text-5xl" />
            <ul className="mt-6 space-y-2 text-stone"><li>✓ Principianti che vogliono basi solide</li><li>✓ Professionisti che vogliono perfezionarsi</li><li>✓ Chi cerca un metodo chiaro e pratico</li></ul></div>
          <div><Label n="07" t="Certificazione" /><Heading text="Cosa *ottieni* alla fine." className="text-5xl" />
            <p className="mt-6 text-stone">Al termine è previsto un attestato. <Tbc>tipo di attestato (es. Attestato RD Academy), requisiti, ore</Tbc> Leggi di più su <Link href="/formazione-certificata" className="ulink text-ink">formazione certificata</Link>.</p></div>
        </div>
        <div className="wrap mt-12"><p className="text-xs text-stone max-w-3xl">Il Metodo Rita Dolbakian è formazione su tecnica manuale e benessere. Non è una formazione sanitaria e non offre promesse di tipo terapeutico. <Tbc>indicazioni legali e di qualifica professionale</Tbc></p></div>
      </section>

      <Faq items={[
        { q: "Posso imparare a massaggiare partendo da zero?", a: "Sì. Il Livello 1 è pensato per chi parte da zero e costruisce le basi con calma." },
        { q: "È un corso online o in presenza?", a: "Entrambi: lo studio e la dimostrazione online, la pratica diretta in presenza." },
        { q: "Quanto dura il percorso?", a: <><Tbc>durata e ore per livello</Tbc></>, plain: "La durata sarà indicata per ogni livello." },
        { q: "Quanto costa?", a: <><Tbc>prezzi e formule</Tbc></>, plain: "I prezzi saranno indicati per ogni livello." },
        { q: "Rilascia un attestato?", a: <>È previsto un attestato di partecipazione. <Tbc>tipo e validità</Tbc></>, plain: "È previsto un attestato di partecipazione." },
        { q: "Serve già un titolo o un'esperienza?", a: <><Tbc>requisiti di accesso</Tbc></>, plain: "I requisiti di accesso sono indicati per ogni livello." },
        { q: "Posso fare solo il livello che mi interessa?", a: "Sì, puoi partire dal livello più adatto a te. In call di orientamento ne parliamo." },
        { q: "Cosa serve per seguire le lezioni online?", a: "Uno spazio dove esercitarti e una persona di fiducia su cui provare. Per i dettagli, ne parliamo in call." },
        { q: "Posso poi aprire la mia attività?", a: "Il percorso aiuta a costruire competenza. Per aprire un'attività servono i requisiti previsti dalla legge: chiedi in call." },
        { q: "Il metodo è una terapia?", a: "No. È formazione su tecnica manuale e benessere. Non offre promesse di cura né indicazioni mediche." },
      ]} />
      <CtaBand title="Prima di scegliere, *parliamone*." primary={{ href: "/call-orientamento", label: "Prenota la call gratuita" }} />
    </>
  );
}
