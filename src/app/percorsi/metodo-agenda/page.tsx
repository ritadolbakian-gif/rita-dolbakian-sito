import { Outcomes, Steps, Objections, Compare } from "@/components/Sections";
import Link from "next/link";
import { PageHero, Label, CtaBand, Faq, Tbc, JsonLd, courseLd } from "@/components/Ui";
import { Heading, Reveal } from "@/components/Motion";
import { Slot } from "@/components/Slot";
import { CaseStudies, TrustBar, QuoteWall, VideoWall } from "@/components/Proof";
import { meta } from "@/lib/seo";

export const metadata = meta("Metodo A.G.E.N.D.A. per operatrici del benessere", "Il Metodo A.G.E.N.D.A. di Rita Dolbakian: il primo percorso di affiancamento per ritrovare continuità e clienti qualificati nel benessere.", "/percorsi/metodo-agenda");

const letters = ["A", "G", "E", "N", "D", "A"];

export default function MetodoAgenda() {
  return (
    <>
      <JsonLd data={courseLd("Metodo A.G.E.N.D.A.", "Metodo e primo percorso di affiancamento per operatrici e operatori del benessere che vogliono continuità e clienti qualificati online.", "/percorsi/metodo-agenda")} />
      <PageHero imageId="agenda-top" imageRatio="16/9" imageArt="orbs" dark eyebrow="Metodo A.G.E.N.D.A." title="Vuoi un'agenda che *regge* anche nei mesi difficili?" answer="Il Metodo A.G.E.N.D.A. è il mio metodo per operatrici e operatori del benessere che vogliono smettere di andare a tentativi. È il primo percorso di affiancamento: si parte da una call di orientamento e si arriva a un'agenda con più ordine, più direzione e clienti più qualificati.">
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
          <Heading text="Sei lettere. Un *ordine* da seguire." className="text-5xl md:text-7xl" />
          <p className="mt-6 text-lg text-stone max-w-xl">Ogni lettera è un passo. Non si salta niente e non si corre: si costruisce una cosa alla volta, nell'ordine giusto.</p>
          <p className="mt-3 text-sm"><Tbc>significato di ogni lettera e testo, 2 righe ciascuna</Tbc></p>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {letters.map((l, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className="bg-ivory rounded-3xl p-8 h-full lift">
                  <span className="font-display text-8xl kw leading-none">{l}</span>
                  <p className="eyebrow mt-4">Passo 0{i + 1}</p>
                  <p className="mt-3 text-stone text-[0.95rem]"><Tbc>titolo e descrizione</Tbc></p>
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
            <Reveal delay={0.1}><div className="rounded-3xl bg-blush/40 p-4 h-full"><Slot id="agenda-dopo" label="Agenda ordinata" ratio="4/3" art="orbs" /><div className="p-4 pt-6"><p className="eyebrow !text-rose">Dopo</p><ul className="mt-3 space-y-2 text-stone"><li>— Un percorso chiaro da «ti vedo» a «ti scrivo».</li><li>— Richieste più regolari e più qualificate.</li><li>— Risposte pronte, dette con calma.</li><li>— Una direzione, un passo alla volta.</li></ul></div></div></Reveal>
          </div>
          <p className="mt-6 text-xs text-stone max-w-2xl">Descrizione del percorso, non una promessa di risultato: ogni situazione di partenza è diversa.</p>
        </div>
      </section>

      <Outcomes n="04" title="Cosa porti *a casa*" note={<Tbc>deliverable esatti del percorso e del formato</Tbc>} cols={3} items={[
        { t: "Una direzione chiara", d: "Sai chi vuoi aiutare, cosa offri e perché dovrebbero scegliere te, scritto in parole semplici." },
        { t: "Il percorso «ti vedo → ti scrivo»", d: "Sai cosa trova una persona nuova quando ti cerca e cosa deve fare per contattarti." },
        { t: "Prezzi che reggono", d: "Un'offerta chiara e un prezzo che sai spiegare, senza svenderti." },
        { t: "Risposte pronte, dette con calma", d: "Sai come rispondere a chi scrive «quanto costa?» senza ansia e senza forzare." },
        { t: "Un piano a passi", d: "Cosa fare questa settimana, la prossima e quella dopo, senza fare tutto insieme." },
        { t: "Continuità", d: "Una routine sostenibile, per far arrivare richieste con regolarità e non solo quando capita." },
      ]} />

      <section className="section bg-blush/30">
        <div className="wrap">
          <Label n="05" t="Come funziona" />
          <Heading text="Dalla guida al percorso, *senza* fretta." className="text-5xl md:text-6xl max-w-3xl" />
          <ol className="mt-12 grid gap-8 md:grid-cols-3">
            {[["La guida gratuita", "«Il Sistema Clienti per Operatori del Benessere»: la guida pratica per fare i primi 10 clienti online. È il modo più semplice per cominciare."], ["La call di orientamento", "Circa 30 minuti. Mi racconti dove sei, ti dico con sincerità se e come posso aiutarti."], ["L'affiancamento A.G.E.N.D.A.", "Se ha senso per entrambe, si parte insieme. Il passo successivo, quando sei pronta, è Wellness Mastery."]].map(([t, d], i) => (
              <li key={t}><Reveal delay={i * 0.1}><span className="font-display text-6xl kw">0{i + 1}</span><h3 className="font-display text-3xl mt-2">{t}</h3><p className="mt-3 text-stone">{d}</p></Reveal></li>
            ))}
          </ol>
          <Reveal><p className="mt-12 text-stone">Dopo A.G.E.N.D.A. il passo naturale è <Link href="/percorsi/wellness-mastery" className="ulink text-ink">Wellness Mastery</Link>.</p></Reveal>
        </div>
      </section>

      <Steps n="06" title="L'affiancamento, *passo passo*." note={<Tbc>formato, durata e frequenza degli incontri</Tbc>} items={[
        { t: "Fotografia", d: "Guardiamo insieme dove sei: profilo, scheda, messaggi, prezzi, clienti." },
        { t: "Direzione", d: "Definiamo chi aiuti, cosa offri e come lo racconti." },
        { t: "Percorso", d: "Mettiamo in ordine il cammino da «ti vedo» a «ti scrivo»." },
        { t: "Messa in pratica", d: "Un passo alla volta, con correzioni lungo la strada." },
      ]} />

      <section className="section-dark section">
        <div className="wrap grid gap-6 md:grid-cols-2">
          <Reveal><div className="rounded-3xl border border-ivory/15 p-8 md:p-10 h-full">
            <Label t="Cosa non è la call" />
            <ul className="space-y-3 text-ivory/75"><li>✕ Non è una lezione teorica.</li><li>✕ Non è una call motivazionale.</li><li>✕ Non è una telefonata commerciale aggressiva.</li></ul>
            <p className="mt-6 font-display text-3xl">È un confronto. <span className="kw">Calmo. Onesto.</span></p>
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
          <Label n="07" t="Chi l'ha fatto" />
          <Heading text="Prima e dopo, nelle *loro* parole." className="text-5xl md:text-6xl max-w-3xl" />
          <div className="mt-12"><CaseStudies max={3} program="A.G.E.N.D.A." /></div>
          <div className="mt-16"><QuoteWall program="A.G.E.N.D.A." title="Le loro parole" /></div>
          <div className="mt-16"><VideoWall /></div>
          <div className="mt-16"><TrustBar /></div>
        </div>
      </section>

      <Objections n="08" items={[
        { t: "Non ho tempo", d: "Il percorso è pensato per chi lavora già: pochi passi, fatti con regolarità, valgono più di una maratona." },
        { t: "Ho già provato altre cose e non ha funzionato", d: "Spesso mancava un ordine, non l'impegno. Si parte da una fotografia onesta di quello che c'è già." },
        { t: "Ho paura di sembrare commerciale", d: "Non serve. Il metodo parte dalla chiarezza e dall'ascolto, non dalla pressione." },
        { t: "Non ho un seguito sui social", d: "Non è un requisito. Si parte da ciò che hai: le persone che già ti conoscono, la tua scheda, i tuoi messaggi." },
        { t: "E se non fa per me?", d: "Te lo dico io, in call, con sincerità. Meglio un no chiaro che un sì a metà." },
      ]} />

      <Compare n="09" title="A.G.E.N.D.A. o *Wellness Mastery*?" cols={["Metodo A.G.E.N.D.A.", "Wellness Mastery"]} rows={[
        { label: "Cos'è", cells: ["Il metodo e il primo affiancamento", "Il percorso completo, 10 moduli"] },
        { label: "Per chi", cells: ["Chi vuole ritrovare direzione e continuità", "Chi vuole costruire un'attività online solida"] },
        { label: "Quando", cells: ["Si parte da qui", "È il passo successivo"] },
        { label: "Formato", cells: [<Tbc key="a">formato</Tbc>, "10 moduli · 6 bonus · 8 settimane di affiancamento 1:1"] },
        { label: "Garanzia", cells: [<Tbc key="b">garanzia</Tbc>, "14 giorni soddisfatti o rimborsati"] },
      ]} />

      <Faq items={[
        { q: "Che cos'è il Metodo A.G.E.N.D.A.?", a: "È il mio metodo per dare direzione e continuità a un'attività nel benessere. È anche il primo percorso di affiancamento." },
        { q: "A chi si rivolge?", a: "A operatrici e operatori del benessere che hanno già una competenza ma poca continuità e vogliono smettere di andare a tentativi." },
        { q: "Quanto dura la call di orientamento?", a: "Circa 30 minuti. Non c'è nessun obbligo e nessuno spam: è un confronto per capire se e come lavorare insieme." },
        { q: "Devo aver già studiato marketing?", a: "No. Si parte dalla tua situazione reale, con calma, senza dare nulla per scontato." },
        { q: "Quanto costa il percorso?", a: <>Il prezzo è indicato qui: <Tbc>prezzo e formule</Tbc></>, plain: "Il prezzo e le formule sono indicati in questa pagina." },
        { q: "Cosa succede dopo A.G.E.N.D.A.?", a: "Il passo successivo è Wellness Mastery, il percorso più ampio per diventare imprenditrice digitale nel benessere." },
        { q: "Posso partecipare se lavoro in un centro e non in proprio?", a: <>Ne parliamo in call, perché dipende da cosa vuoi costruire. <Tbc>mia conferma</Tbc></>, plain: "Ne parliamo in call, perché dipende da cosa vuoi costruire." },
        { q: "Ci sono garanzie sul risultato?", a: "Nessuno può garantire un risultato, e non lo faccio io. Il percorso ti dà metodo e affiancamento; i risultati dipendono dalla tua situazione di partenza e dal tuo impegno." },
      ]} />
      <CtaBand title="Se vuoi *ripartire* con ordine, comincia dalla call." />
    </>
  );
}
