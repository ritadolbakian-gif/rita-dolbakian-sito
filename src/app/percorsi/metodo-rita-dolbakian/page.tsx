import { Outcomes, Steps, Objections, Compare } from "@/components/Sections";
import Link from "next/link";
import { PageHero, Label, CtaBand, Faq, Tbc, JsonLd, courseLd } from "@/components/Ui";
import { Heading, Reveal } from "@/components/Motion";
import { Slot } from "@/components/Slot";
import { CaseStudies, TrustBar, QuoteWall } from "@/components/Proof";
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
  ["In presenza", "Io e il gruppo ti aiutiamo a correggere i dettagli."],
  ["Dopo", "Ripeti, chiedi, ricevi un riscontro."],
];

export default function MetodoRD() {
  return (
    <>
      <JsonLd data={courseLd("Metodo Rita Dolbakian", "Formazione pratica per imparare a massaggiare e migliorare la propria tecnica, online e in presenza.", "/percorsi/metodo-rita-dolbakian", ["online", "onsite"])} />
      <PageHero imageId="rd-top" imageRatio="4/3" imageArt="stones" dark eyebrow="Metodo Rita Dolbakian" title="Impara a *massaggiare*. Con mani sicure." answer="Il Metodo Rita Dolbakian è il mio percorso di formazione pratica per imparare a massaggiare e migliorare la propria tecnica. Nasce da oltre dieci anni di lavoro sul campo ed è semplificato per essere seguito a partire dal tuo livello: lezioni online per studiare, pratica in presenza per mettere le mani.">
        <Link href="/call-orientamento" className="btn btn-primary">Scegli il tuo livello con me <span className="arr">→</span></Link>
        <Link href="#livelli" className="btn btn-ghost">Guarda i tre livelli</Link>
      </PageHero>

      <section className="py-4"><div className="wrap"><p className="text-center text-sm text-stone rounded-2xl border border-dashed border-rose/60 p-4">Struttura dei livelli in bozza: <Tbc>mia validazione su programma, durata, sedi e prezzi</Tbc></p></div></section>

      <section className="section">
        <div className="wrap grid gap-14 lg:grid-cols-2 items-center">
          <Reveal><Slot kind="foto" id="rd-hero" label="Rita insegna una tecnica" ratio="4/5" art="stones" /></Reveal>
          <div>
            <Label n="01" t="Cosa lo rende diverso" />
            <Heading text="Tecnica, *ascolto*, presenza." className="text-5xl md:text-6xl" />
            <div className="mt-8 space-y-4 text-lg text-stone max-w-xl">
              <p>Hai visto cento video e non sei sicura delle tue mani. La pressione giusta non si impara a parole. Il mio metodo l'ho studiato, testato e semplificato in oltre dieci anni: sai cosa fai, in che ordine, e perché.</p>
              <p>Non impari a ripetere dei movimenti. Impari a sentire, a dosare, a restare con la persona che hai davanti.</p>
              <p className="text-sm"><Tbc>i tratti distintivi del mio metodo</Tbc></p>
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

      <Outcomes n="03" title="Cosa porti *a casa*" cols={4} items={[
        { t: "Mani più sicure", d: "Sai cosa fare, in che ordine e perché." },
        { t: "Un tocco ascoltato", d: "Dosi la pressione e il ritmo in base alla persona." },
        { t: "Un metodo ripetibile", d: "Sequenze che puoi rifare con costanza e qualità." },
        { t: "Fiducia nel tuo lavoro", d: "Perché sai spiegare cosa fai e come lo fai." },
      ]} />

      <section className="section-dark section">
        <div className="wrap">
          <Label n="04" t="Come si impara" />
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
            <Label n="05" t="Chi insegna" />
            <Heading text="Impari da chi lo *fa* ogni giorno." className="text-5xl md:text-6xl" />
            <p className="mt-6 text-lg text-stone max-w-xl">Sono massaggiatrice prima ancora che formatrice. Ti insegno quello che ho studiato, provato e semplificato in oltre dieci anni, con calma e senza fretta.</p>
            <Link href="/chi-sono" className="btn btn-ghost mt-8">Leggi la mia storia <span className="arr">→</span></Link>
          </div>
        </div>
      </section>

      <section className="section bg-blush/30">
        <div className="wrap">
          <Label n="06" t="Chi ha imparato" />
          <Heading text="Le mani cambiano. Si *sente*." className="text-5xl md:text-6xl max-w-3xl" />
          <div className="mt-12"><CaseStudies max={3} program="Metodo Rita Dolbakian" /></div>
          <div className="mt-16"><QuoteWall program="Metodo Rita Dolbakian" title="Le loro parole" /></div>
          <div className="mt-16"><TrustBar items={[{ t: "Parti dal tuo livello", d: "Tre livelli: scegli quello giusto per te." }, { t: "Pratica vera", d: "Online per studiare, in presenza per mettere le mani." }, { t: "Gruppi piccoli", d: "Attenzione a ognuna, non una platea." }, { t: "Parole oneste", d: "Formazione sulla tecnica, nessuna promessa terapeutica." }]} /></div>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid gap-12 md:grid-cols-2">
          <div><Label n="07" t="Per chi è" /><Heading text="Per chi *vuole* farlo bene." className="text-5xl" />
            <ul className="mt-6 space-y-2 text-stone"><li>✓ Principianti che vogliono basi solide</li><li>✓ Professionisti che vogliono perfezionarsi</li><li>✓ Chi cerca un metodo chiaro e pratico</li></ul></div>
          <div><Label n="08" t="Certificazione" /><Heading text="Cosa *ottieni* alla fine." className="text-5xl" />
            <p className="mt-6 text-stone">Al termine è previsto un attestato. <Tbc>tipo di attestato (es. Attestato RD Academy), requisiti, ore</Tbc> Leggi di più su <Link href="/formazione-certificata" className="ulink text-ink">formazione certificata</Link>.</p></div>
        </div>
        <div className="wrap mt-12"><p className="text-xs text-stone max-w-3xl">Il Metodo Rita Dolbakian è formazione su tecnica manuale e benessere. Non è una formazione sanitaria e non offre promesse di tipo terapeutico. <Tbc>indicazioni legali e di qualifica professionale</Tbc></p></div>
      </section>

      <Objections n="09" items={[
        { t: "Non ho mai massaggiato", d: "Il Livello 1 parte da zero, con calma. Nessuno si aspetta che tu sappia già." },
        { t: "Ho paura di sbagliare o di fare male", d: "È normale. Si impara a dosare piano, con feedback, e a riconoscere quando fermarsi." },
        { t: "Può funzionare online?", d: "Lo studio sì. Per questo la pratica è in presenza e, online, serve esercizio regolare con un riscontro." },
        { t: "Non ho uno spazio o un lettino", d: <>Ne parliamo in call per capire cosa serve davvero. <Tbc>attrezzatura richiesta</Tbc></> },
        { t: "Non ho un titolo", d: "Per i requisiti di accesso e per l'attività professionale ti dico con precisione cosa serve, in call." },
      ]} />

      <Compare n="10" title="I tre livelli, *a confronto*" cols={["Livello 1", "Livello 2", "Livello 3"]} rows={[
        { label: "Per chi", cells: ["Chi parte da zero", "Chi ha le basi", "Chi massaggia già"] },
        { label: "Obiettivo", cells: ["Sentire cosa fanno le mani", "Lavorare con sicurezza e fluidità", "Affinare e raccontare il proprio stile"] },
        { label: "Durata", cells: [<Tbc key="1">ore</Tbc>, <Tbc key="2">ore</Tbc>, <Tbc key="3">ore</Tbc>] },
        { label: "Requisiti", cells: [<Tbc key="4">requisiti</Tbc>, <Tbc key="5">requisiti</Tbc>, <Tbc key="6">requisiti</Tbc>] },
      ]} />

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
      <CtaBand title="Prima di scegliere, *parliamone*." primary={{ href: "/call-orientamento", label: "Prenota 30 minuti con me" }} />
    </>
  );
}
