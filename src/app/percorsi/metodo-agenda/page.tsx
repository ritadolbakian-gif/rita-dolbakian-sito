import { Outcomes, Steps, Objections, Compare, DetailSteps, GuaranteeBand, GuaranteeConditions } from "@/components/Sections";
import Link from "next/link";
import { PageHero, Label, CtaBand, Faq, Tbc, JsonLd, courseLd } from "@/components/Ui";
import { Heading, Reveal } from "@/components/Motion";
import { Slot } from "@/components/Slot";
import { CaseStudies, TrustBar, QuoteWall, VideoWall } from "@/components/Proof";
import { meta } from "@/lib/seo";

export const metadata = meta("Metodo A.G.E.N.D.A. per operatrici del benessere", "Il Metodo A.G.E.N.D.A. di Rita Dolbakian: il primo percorso di affiancamento per ritrovare continuità e clienti qualificati nel benessere.", "/percorsi/metodo-agenda");

const letters = [
  { l: "A", w: "Attrazione", d: "Un profilo ottimizzato e contenuti che attirano la cliente ideale: chi ti trova capisce subito per chi lavori e cosa offri.", p: "Le persone iniziano a scriverti in DM." },
  { l: "G", w: "Generazione fiducia", d: "Contenuti educativi, storytelling e testimonianze reali. È così che una persona che non ti conosce comincia a fidarsi di te.", p: "Ti percepiscono come esperta." },
  { l: "E", w: "Esposizione", d: "Reel, collaborazioni, influencer e Google My Business: fai in modo che sempre più persone ti scoprano, senza essere ovunque.", p: "Sempre più persone ti scoprono." },
  { l: "N", w: "Nutrimento", d: "Stories, DM marketing e follow-up strategici: tieni viva la relazione con chi ti ha già notata, fino alla prenotazione.", p: "Le richieste diventano appuntamenti." },
  { l: "D", w: "Differenziazione", d: "Massaggio signature, pacchetti e aumento dei prezzi: costruisci un'offerta che non si confronta solo sul costo.", p: "Prezzi più alti, più valore percepito." },
  { l: "A", w: "Automazione", d: "Fidelizzazione, scontrino medio più alto e gestione dell'agenda con strumenti che lavorano per te.", p: "Un'agenda più piena e regolare." },
];

const modulesList: [string, string, string][] = [
  ["00", "Introduzione", "Roadmap dei 6 mesi, errori da evitare, come usare il percorso al massimo."],
  ["01", "Mindset", "Superare la paura di esporsi, convinzioni sul denaro, mindfulness."],
  ["02", "Fondamenta business", "Nicchia, cliente ideale, massaggio differenziante, personal brand."],
  ["03", "Parte pratica", "Cabina, attrezzatura, abbigliamento, accoglienza del cliente, caparra."],
  ["04", "Offerta irresistibile", "Ricerca di mercato, costruzione dei pacchetti, aumento dei prezzi."],
  ["05", "Instagram", "Profilo ottimizzato, algoritmo, crescita organica, contenuti strategici."],
  ["06", "Instagram Stories", "Struttura, storytelling, stories di vendita, gestione delle richieste."],
  ["07", "Content creation", "Piano editoriale, script video, template di contenuti, brainstorming."],
  ["08", "Espansione canali", "TikTok, Facebook, YouTube, LinkedIn, Google My Business."],
  ["09", "Vendita e DM", "Gestione richieste, chiusura clienti, follow-up, lead non chiusi."],
  ["10", "AI e automazioni", "ChatGPT per i contenuti, automazioni di marketing, organizzazione del lavoro."],
];

const bonusList: [string, string][] = [
  ["Calendario contenuti 12 mesi", "Un piano editoriale già pronto: sai cosa pubblicare ogni giorno per un anno."],
  ["Mini corso Canva", "Crea contenuti grafici professionali anche senza esperienza di grafica."],
  ["Mini corso CapCut", "Monta video per TikTok e Reel in modo semplice e veloce."],
  ["Script chiusura influencer", "Template pronti per contattare manager e influencer locali e proporre collaborazioni."],
  ["Masterclass Pinterest", "Come usare Pinterest per attirare traffico organico e nuovi clienti."],
];

const valueList: [string, string][] = [
  ["Video corso Metodo A.G.E.N.D.A. (11 moduli)", "997 €"], ["Affiancamento individuale via chat 7/7 (6 mesi)", "697 €"], ["2 call individuali al mese con Rita (12 call)", "897 €"], ["Community privata WhatsApp", "197 €"], ["Live Q&A bisettimanali", "297 €"], ["Calendario contenuti 12 mesi", "197 €"], ["Mini corso Canva", "97 €"], ["Mini corso CapCut", "97 €"], ["Script chiusura influencer", "97 €"], ["Masterclass Pinterest", "97 €"],
];

export default function MetodoAgenda() {
  return (
    <>
      <JsonLd data={courseLd("Metodo A.G.E.N.D.A.", "Metodo e primo percorso di affiancamento per operatrici e operatori del benessere che vogliono continuità e clienti qualificati online.", "/percorsi/metodo-agenda")} />
      <PageHero imageId="agenda-top" imageRatio="16/9" imageArt="orbs" dark eyebrow="Metodo A.G.E.N.D.A." title="Vuoi un'agenda che *regge* anche nei mesi difficili?" answer="Il Metodo A.G.E.N.D.A. è il mio sistema per riempire l'agenda usando social, posizionamento professionale e strategie di acquisizione clienti. 6 mesi, 11 moduli e affiancamento individuale incluso. Si parte da una call di orientamento.">
        <Link href="/call-orientamento" className="btn btn-primary">Prenota 30 minuti con me <span className="arr">→</span></Link>
        <Link href="/guida-gratuita" className="btn btn-ghost">Ricevi la guida via email</Link>
      </PageHero>

      <section className="section">
        <div className="wrap grid gap-14 lg:grid-cols-2 items-center">
          <div>
            <Label n="01" t="Il problema" />
            <Heading text="Non ti manca la tecnica. Ti manca una *direzione*." className="text-5xl md:text-6xl" />
            <Reveal delay={0.1}><div className="mt-8 space-y-4 text-lg text-stone max-w-xl">
              <p>Un mese non respiri. Il mese dopo il telefono sta zitto. A fine mese fai i conti e non sai se hai guadagnato o ti sei solo stancata.</p>
              <p>Non è colpa tua. Nessuno ti ha mai insegnato a farti trovare e a farti scegliere. Si impara. E si parte da una cosa alla volta.</p>
            </div></Reveal>
          </div>
          <Reveal><Slot kind="foto" id="agenda-hero" label="Rita in affiancamento / call" ratio="4/3" art="orbs" /></Reveal>
        </div>
      </section>

      <section className="section bg-blush/30">
        <div className="wrap">
          <Label n="02" t="Il metodo" />
          <Heading text="Sei lettere. Sei *passi*." className="text-5xl md:text-7xl" />
          <p className="mt-6 text-lg text-stone max-w-xl">Ogni lettera è un passo. Non si salta niente e non si corre: si costruisce una cosa alla volta, uno dopo l'altro.</p>
          <Reveal delay={0.1}>
            <p className="mt-10 font-display text-3xl md:text-5xl leading-tight" aria-label="Attrazione, Generazione fiducia, Esposizione, Nutrimento, Differenziazione, Automazione">
              {letters.map((x, i) => <span key={i} className="mr-4 inline-block"><span className="kw">{x.l}</span>{x.w.slice(1)}{i < letters.length - 1 && <span className="text-rose"> · </span>}</span>)}
            </p>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {letters.map((x, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className="bg-ivory rounded-3xl p-8 h-full lift flex flex-col">
                  <div className="flex items-baseline gap-4"><span className="font-display text-8xl kw leading-none">{x.l}</span><span className="eyebrow">Passo 0{i + 1}</span></div>
                  <h3 className="font-display text-4xl mt-3">{x.w}</h3>
                  <p className="mt-3 text-stone text-[0.97rem] flex-1">{x.d}</p>
                  <p className="mt-5 border-t border-[var(--line)] pt-4 text-sm"><span className="eyebrow !text-rose mr-2">In pratica</span>{x.p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Label n="03" t="Prima e dopo" />
          <Heading text="Cosa *cambia*, e cosa no." className="text-5xl md:text-6xl max-w-3xl" />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Reveal><div className="rounded-3xl border border-[var(--line)] p-4 h-full"><Slot id="agenda-prima" label="Agenda confusa" ratio="4/3" art="waves" /><div className="p-4 pt-6"><p className="eyebrow">Prima</p><ul className="mt-3 space-y-2 text-stone"><li>— Solo passaparola, quando arriva.</li><li>— Un mese pieno, il successivo vuoto.</li><li>— Messaggi a cui non sai come rispondere.</li><li>— La sensazione di andare a tentativi.</li></ul></div></div></Reveal>
            <Reveal delay={0.1}><div className="rounded-3xl bg-blush/40 p-4 h-full"><Slot id="agenda-dopo" label="Agenda ordinata" ratio="4/3" art="orbs" /><div className="p-4 pt-6"><p className="eyebrow !text-rose">Dopo</p><ul className="mt-3 space-y-2 text-stone"><li>— Un percorso chiaro da «ti vedo» a «ti scrivo».</li><li>— Richieste più regolari e più qualificate.</li><li>— Risposte pronte, che non ti mettono in ansia.</li><li>— Una direzione, un passo alla volta.</li></ul></div></div></Reveal>
          </div>
          <p className="mt-6 text-xs text-stone max-w-2xl">Descrizione del percorso, non una promessa di risultato: ogni situazione di partenza è diversa.</p>
        </div>
      </section>

      <Outcomes n="04" title="Cosa porti *a casa*" note={<Tbc>deliverable esatti del percorso e del formato</Tbc>} cols={3} items={[
        { t: "Una direzione chiara", d: "Sai chi vuoi aiutare, cosa offri e perché dovrebbero scegliere te, scritto in parole semplici." },
        { t: "Il percorso «ti vedo → ti scrivo»", d: "Sai cosa trova una persona nuova quando ti cerca e cosa deve fare per contattarti." },
        { t: "Prezzi che reggono", d: "Un'offerta chiara e un prezzo che sai spiegare, senza svenderti." },
        { t: "Risposte pronte", d: "Sai come rispondere a chi scrive «quanto costa?» senza ansia e senza forzare." },
        { t: "Un piano a passi", d: "Cosa fare questa settimana, la prossima e quella dopo, senza fare tutto insieme." },
        { t: "Continuità", d: "Una routine sostenibile, per far arrivare richieste con regolarità e non solo quando capita." },
      ]} />

      <section className="section bg-blush/30">
        <div className="wrap">
          <Label n="05" t="Come funziona" />
          <Heading text="Dalla guida al percorso, *un passo alla volta*." className="text-5xl md:text-6xl max-w-3xl" />
          <ol className="mt-12 grid gap-8 md:grid-cols-3">
            {[["La guida gratuita", "«Il Sistema Clienti per Operatori del Benessere»: la guida pratica per fare i primi 10 clienti online. È il modo più semplice per cominciare."], ["La call di orientamento", "Circa 30 minuti. Mi racconti dove sei, ti dico se e come posso aiutarti."], ["L'affiancamento A.G.E.N.D.A.", "Se ha senso per entrambe, si parte insieme. Il passo successivo, quando sei pronta, è Metodo Sold Out."]].map(([t, d], i) => (
              <li key={t}><Reveal delay={i * 0.1}><span className="font-display text-6xl kw">0{i + 1}</span><h3 className="font-display text-3xl mt-2">{t}</h3><p className="mt-3 text-stone">{d}</p></Reveal></li>
            ))}
          </ol>
          <Reveal><p className="mt-12 text-stone">Se vuoi il massimo affiancamento, c'è la mentorship 1:1 <Link href="/percorsi/sold-out" className="ulink text-ink">Metodo Sold Out</Link>.</p></Reveal>
        </div>
      </section>

      <section id="incluso" className="section scroll-mt-28">
        <div className="wrap">
          <Label n="05b" t="Cosa è incluso" />
          <Heading text="11 moduli. Tutto quello che serve, *nulla di più*." className="text-5xl md:text-6xl max-w-4xl" />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {modulesList.map(([n, t, d], i) => (
              <li key={n}><Reveal delay={(i % 3) * 0.06}><div className="rounded-3xl border border-[var(--line)] p-6 h-full"><span className="font-display text-5xl kw leading-none">{n}</span><h3 className="font-display text-2xl mt-3">{t}</h3><p className="mt-2 text-sm text-stone">{d}</p></div></Reveal></li>
            ))}
          </ul>
          <p className="mt-6 text-xs text-stone">Per chi è alle prime armi con la tecnologia, i mini corsi Canva e CapCut sono nei bonus.</p>
        </div>
      </section>

      <section className="section-dark section">
        <div className="wrap">
          <Label n="05c" t="Bonus e supporto" />
          <Heading text="Cinque bonus. E non *resti* sola." className="text-5xl md:text-6xl max-w-4xl" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {bonusList.map(([t, d], i) => (
              <Reveal key={t} delay={i * 0.06}><div className="rounded-3xl border border-ivory/15 p-7 h-full"><span className="eyebrow">Bonus {i + 1}</span><h3 className="font-display text-2xl mt-3">{t}</h3><p className="mt-2 text-ivory/65 text-[0.95rem]">{d}</p></div></Reveal>
            ))}
          </div>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {[["Affiancamento individuale via chat, 7 giorni su 7", "Accesso diretto a me ogni giorno. Supporto personalizzato sulla tua situazione, non risposte generiche."], ["2 chiamate individuali al mese con me", "Sessioni 1:1 dedicate a te: analisi dei contenuti, strategia personalizzata, supporto per sbloccare gli ostacoli."], ["Community privata WhatsApp", "Confronto quotidiano con altri massaggiatori che stanno costruendo la loro attività."], ["Live Q&A bisettimanali", "Sessioni di gruppo ogni due settimane: domande, analisi di casi reali e aggiornamenti sulle strategie."]].map(([t, d], i) => (
              <Reveal key={t} delay={i * 0.06}><div className="rounded-3xl bg-ivory/10 p-7 h-full"><h3 className="font-display text-2xl">{t}</h3><p className="mt-2 text-ivory/70">{d}</p></div></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="investimento" className="section scroll-mt-28">
        <div className="wrap grid gap-12 lg:grid-cols-2 items-start">
          <div>
            <Label n="05d" t="Il valore" />
            <Heading text="Cosa ricevi, e quanto *varrebbe* da solo." className="text-4xl md:text-6xl" />
            <dl className="mt-8 divide-y divide-[var(--line)] border-y border-[var(--line)]">
              {valueList.map(([k, v]) => <div key={k} className="flex justify-between gap-6 py-3"><dt className="text-stone">{k}</dt><dd className="font-medium whitespace-nowrap">{v}</dd></div>)}
              <div className="flex justify-between gap-6 py-4 text-lg"><dt>Valore totale</dt><dd className="font-display text-3xl">3.670 €</dd></div>
            </dl>
          </div>
          <Reveal>
            <div className="rounded-3xl bg-blush/40 p-8 md:p-10">
              <p className="eyebrow">Valore di ciò che ricevi</p>
              <p className="mt-3 font-display text-7xl leading-none">3.670 €</p>
              <p className="mt-2 text-sm text-stone">di valore complessivo di tutto ciò che è incluso.</p>
              <p className="mt-6 text-stone">Il prezzo lo condivido durante la videochiamata di orientamento, dopo aver capito se il percorso fa per te. Se vuoi dividere il pagamento in rate, ne parliamo lì: <Link href="/pagamenti-rateali" className="ulink text-ink">come funziona</Link>.</p>
              <div className="mt-8"><Link href="/call-orientamento" className="btn btn-primary">Prenota la videochiamata per conoscere il prezzo <span className="arr">→</span></Link></div>
            </div>
          </Reveal>
        </div>
      </section>

      <DetailSteps n="06" label="L'affiancamento" title="Come lavoriamo, *fase per fase*." bg="" items={[
        { t: "Fotografia", a: "Guardiamo insieme dove sei: profilo, scheda Google, messaggi, prezzi, clienti che tornano.", b: "Un quadro chiaro di cosa funziona già e di dove perdi continuità." },
        { t: "Direzione", a: "Definiamo chi vuoi aiutare, cosa offri e perché dovrebbero scegliere te.", b: "Tre frasi chiare, che usi ovunque: nella bio, nella scheda, nei messaggi." },
        { t: "Percorso", a: "Costruiamo il cammino da «ti vedo» a «ti scrivo»: cosa trova una persona nuova e cosa deve fare per contattarti.", b: "Un percorso semplice per chi ti cerca, con risposte pronte alle domande più comuni." },
        { t: "Messa in pratica", a: "Un passo alla volta, con correzioni lungo la strada. Non si fa tutto insieme.", b: "Un piano per le prossime settimane e i quattro numeri da guardare per capire se funziona." },
      ]} />

      <Steps n="07" label="La call" title="I 30 minuti, *minuto per minuto*." dark note={<Tbc>svolgimento reale della call</Tbc>} items={[
        { t: "Ti ascolto", d: "Mi racconti cosa fai, per chi e cosa non ti torna. Non devi preparare niente." },
        { t: "Guardiamo i fatti", d: "Profilo, scheda, messaggi, prezzi: dove arrivano le richieste e dove si fermano." },
        { t: "Cosa farei io", d: "Ti dico da dove partirei, e cosa lascerei stare per ora." },
        { t: "Decidi tu", d: "Se ha senso lavorare insieme, ti spiego come. Se no, hai comunque una direzione." },
      ]} />

      <Outcomes n="08" label="Cosa guardiamo" title="Sei punti. *Niente* di più." cols={3} items={[
        { t: "Il tuo profilo", d: "Si capisce in pochi secondi cosa fai, per chi e come prenotare?" },
        { t: "La scheda Google", d: "Foto, orari, descrizione e recensioni: chi ti cerca ti trova e si fida?" },
        { t: "I messaggi", d: "Come rispondi a chi scrive, e dove si perdono le richieste." },
        { t: "I prezzi", d: "Quanto chiedi, come lo spieghi e se ti lascia un margine." },
        { t: "I clienti che tornano", d: "Chi ti ha già scelta e come lo ricontatti." },
        { t: "Il tuo tempo", d: "Quante ore puoi davvero dedicare a farti trovare, senza consumarti." },
      ]} />

      <section className="section bg-blush/30">
        <div className="wrap grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div><Label n="09" t="Un esempio" /><Heading text="Com'è, *in concreto*." className="text-5xl md:text-6xl" /><p className="mt-5 text-sm text-stone max-w-sm">Scenario inventato per spiegare: non è il caso di una persona reale e non è una promessa di risultato.</p></div>
          <Reveal><div className="rounded-3xl bg-ivory p-7 md:p-10 space-y-6">
            <div><p className="eyebrow">Marta, massaggiatrice · prima</p><p className="mt-2 text-stone">Lavora solo con il passaparola. Un mese è piena, il successivo ha buchi. Quando le scrivono «quanto costa?» risponde con il prezzo e la persona sparisce. La sua scheda Google non ha foto.</p></div>
            <div className="border-t border-[var(--line)] pt-6"><p className="eyebrow !text-rose">Cosa si sistema, passo dopo passo</p><ol className="mt-2 list-decimal pl-5 space-y-1 text-stone"><li>Una frase chiara su chi aiuta e cosa offre.</li><li>La scheda Google con foto vere, orari e descrizione.</li><li>Una risposta pronta a «quanto costa?», che spiega il valore prima del prezzo.</li><li>Ogni settimana ricontatta due persone che non vede da tempo.</li></ol></div>
            <div className="border-t border-[var(--line)] pt-6"><p className="eyebrow">Dopo qualche settimana</p><p className="mt-2 text-stone">Sa da dove arrivano le richieste, sa cosa rispondere e ha un piano per il mese successivo. Non è «tutto risolto»: è un'agenda che ha una direzione.</p></div>
          </div></Reveal>
        </div>
      </section>

      <Outcomes n="10" label="Dopo A.G.E.N.D.A." title="E *poi*?" cols={3} items={[
        { t: "Prosegui da sola", d: "Hai il metodo, il piano e i numeri da guardare. Puoi andare avanti con i tuoi tempi." },
        { t: "Passi a Sold Out", d: "Se vuoi il massimo affiancamento: mentorship 1:1 di 6 mesi con me, 8 posti a trimestre." },
        { t: "Ti serve la tecnica?", d: "C'è anche il Metodo Rita Dolbakian, per massaggiare con mani sicure." },
      ]} />

      <section className="section-dark section">
        <div className="wrap grid gap-6 md:grid-cols-2">
          <Reveal><div className="rounded-3xl border border-ivory/15 p-8 md:p-10 h-full">
            <Label t="Cosa non è la call" />
            <ul className="space-y-3 text-ivory/75"><li>✕ Non è una lezione teorica.</li><li>✕ Non è una call motivazionale.</li><li>✕ Non è una telefonata commerciale aggressiva.</li></ul>
            <p className="mt-6 font-display text-3xl">È una chiacchierata. <span className="kw">Senza impegno.</span></p>
          </div></Reveal>
          <Reveal delay={0.1}><div className="rounded-3xl bg-ivory text-ink p-8 md:p-10 h-full">
            <Label t="A chi è adatta" />
            <ul className="space-y-2 text-stone"><li>✓ Lavori nel benessere e hai già competenza.</li><li>✓ Hai poca continuità.</li><li>✓ Vuoi smettere di andare a tentativi.</li></ul>
            <p className="eyebrow mt-8 mb-3">A chi non è adatta</p>
            <ul className="space-y-2 text-stone"><li>✕ Cerchi scorciatoie.</li><li>✕ Pensi basti aspettare il momento giusto.</li><li>✕ Non vuoi mettere in discussione il tuo approccio.</li></ul>
          </div></Reveal>
        </div>
        <div className="wrap mt-6"><p className="rounded-2xl border border-rose/50 p-5 text-center text-ivory/80">Lavoro solo con poche persone alla volta. Il lavoro vero richiede ascolto, attenzione e presenza.</p></div>
      </section>

      <section className="section">
        <div className="wrap">
          <Label n="11" t="Chi l'ha fatto" />
          <Heading text="Prima e dopo, nelle *loro* parole." className="text-5xl md:text-6xl max-w-3xl" />
          <div className="mt-12"><CaseStudies max={3} program="A.G.E.N.D.A." /></div>
          <div className="mt-16"><QuoteWall program="A.G.E.N.D.A." title="Le loro parole" /></div>
          <div className="mt-16"><VideoWall /></div>
          <div className="mt-16"><TrustBar /></div>
        </div>
      </section>

      <GuaranteeBand />

      <GuaranteeConditions n="12" id="garanzia" imageId="garanzia-testo" />

      <Objections n="13" items={[
        { t: "Non ho tempo", d: "Il percorso è pensato per chi lavora già: pochi passi, fatti con regolarità, valgono più di una maratona." },
        { t: "Ho già provato altre cose e non ha funzionato", d: "Spesso mancava un ordine, non l'impegno. Si parte da quello che c'è già." },
        { t: "Ho paura di sembrare commerciale", d: "Non serve. Il metodo parte dall'ascolto, non dalla pressione." },
        { t: "Non ho un seguito sui social", d: "Non è un requisito. Si parte da ciò che hai: le persone che già ti conoscono, la tua scheda, i tuoi messaggi." },
        { t: "E se non fa per me?", d: "Te lo dico io, in call. Meglio un no chiaro che un sì a metà." },
      ]} />

      <Compare n="14" title="A.G.E.N.D.A. o *Sold Out*?" cols={["Metodo A.G.E.N.D.A.", "Metodo Sold Out"]} rows={[
        { label: "Cos'è", cells: ["Il sistema in 11 moduli, con affiancamento", "Mentorship 1:1, il massimo affiancamento"] },
        { label: "Per chi", cells: ["Chi vuole un metodo preciso per riempire l'agenda", "Chi vuole essere seguita ogni settimana e farsi fare il lavoro tecnico"] },
        { label: "Quando", cells: ["Si parte da qui", "È il passo successivo"] },
        { label: "Formato", cells: ["6 mesi · 11 moduli · 2 call al mese · chat 7/7", "6 mesi · una call a settimana · 8 posti a trimestre"] },
        { label: "Prezzo", cells: ["Lo comunico in videochiamata", "Lo comunico in videochiamata"] },
      ]} />

      <Faq items={[
        { q: "Che cos'è il Metodo A.G.E.N.D.A.?", a: "È il mio metodo per dare direzione e continuità a un'attività nel benessere, in sei passi: Attrazione, Generazione fiducia, Esposizione, Nutrimento, Differenziazione, Automazione. È anche il primo percorso di affiancamento." },
        { q: "A chi si rivolge?", a: "A operatrici e operatori del benessere che hanno già una competenza ma poca continuità e vogliono smettere di andare a tentativi." },
        { q: "Quanto dura la call di orientamento?", a: "Circa 30 minuti. Non c'è nessun obbligo e nessuno spam: è un confronto per capire se e come lavorare insieme." },
        { q: "Devo aver già studiato marketing?", a: "No. Si parte dalla tua situazione reale, senza dare nulla per scontato." },
        { q: "Quanto costa il percorso?", a: "Il prezzo lo comunico durante la videochiamata di orientamento, dopo aver capito se il percorso è adatto a te. Il valore di tutto ciò che è incluso è indicato nella sezione dedicata." },
        { q: "Cosa succede dopo A.G.E.N.D.A.?", a: "Il passo successivo è la mentorship 1:1 Metodo Sold Out, il massimo affiancamento, con 8 posti per trimestre." },
        { q: "Posso partecipare se lavoro in un centro e non in proprio?", a: <>Ne parliamo in call, perché dipende da cosa vuoi costruire. <Tbc>mia conferma</Tbc></>, plain: "Ne parliamo in call, perché dipende da cosa vuoi costruire." },
        { q: "Cosa devo preparare prima della call?", a: "Niente. Basta che tu abbia in mente cosa fai, per chi lavori e cosa non ti torna. Il resto lo vediamo insieme." },
        { q: "Quanto dura l'affiancamento?", a: "Il percorso dura 6 mesi, con 2 chiamate individuali al mese (12 in totale), chat 7 giorni su 7, community privata e Q&A bisettimanali." },
        { q: "Cosa succede se alla call capisco che non fa per me?", a: "Nessun problema: nessun obbligo e nessuno spam. E ti dico comunque da dove partirei." },
        { q: "C'è una garanzia?", a: "Sì: soddisfatti o rimborsati per tutta la durata del percorso. Il rischio è mio. La condizione è che tu partecipi agli incontri e svolga le attività richieste, e lo dimostri." },
        { q: "Ci sono garanzie sul risultato economico?", a: "Nessuno può garantire guadagni o numero di clienti, e non lo faccio io. La garanzia riguarda la tua soddisfazione per il percorso. I risultati dipendono dalla tua situazione di partenza e dal tuo impegno." },
      ]} />
      <CtaBand title="Se vuoi *ripartire*, comincia dalla call." />
    </>
  );
}
