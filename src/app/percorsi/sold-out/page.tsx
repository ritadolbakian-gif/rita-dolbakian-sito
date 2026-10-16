import { ReviewsSection } from "@/components/Reviews";
import { PageNav } from "@/components/PageNav";
import { Outcomes, Steps, Objections, Compare, DetailSteps } from "@/components/Sections";
import { PageHero, Label, CtaBand, Faq, Tbc, JsonLd, courseLd } from "@/components/Ui";
import { Heading, Reveal } from "@/components/Motion";
import { meta } from "@/lib/seo";
import Link from "next/link";
import { CaseStudies, TrustBar } from "@/components/Proof";
import { Crumbs } from "@/components/Crumbs";

export const metadata = meta("Metodo Sold Out: mentorship 1:1 per operatrici del benessere", "Metodo Sold Out di Rita Dolbakian: mentorship 1:1 di 6 mesi per diventare il riferimento del tuo territorio, con call settimanali, Kit Pronto, landing page, prodotto digitale e 8 posti a trimestre.", "/percorsi/sold-out", "/media/hero-palco.webp");

export default function SoldOut() {
  return (
    <>
      <Crumbs trail={[["Percorsi", "/percorsi"], ["Metodo Sold Out", "/percorsi/sold-out"]]} />
      <JsonLd data={courseLd("Metodo Sold Out", "Mentorship 1:1 di 6 mesi con Rita Dolbakian per operatrici del benessere: una call individuale a settimana, revisione dei contenuti, landing page, prodotto digitale e piattaforma realizzati dal team. 8 posti a trimestre.", "/percorsi/sold-out", ["online", "blended"])} />
      <PageHero dark bgId="hero-palco" eyebrow="Mentorship 1:1 · Metodo Sold Out" title="Da brava ma *invisibile* a riferimento del tuo territorio." answer="Metodo Sold Out è la mia mentorship 1:1 di 6 mesi per operatrici del benessere: una call a settimana con me, la revisione dei tuoi contenuti e tutto ciò che si può fare al posto tuo (landing page, prodotto digitale, piattaforma) lo facciamo noi. A te restano la faccia, la voce e le tue clienti. Lavoriamo su due piattaforme: Instagram e TikTok.">
        <Link href="#candidatura" className="btn btn-primary">Candidati <span className="arr">→</span></Link>
        <Link href="/call-orientamento" className="btn btn-ghost">Prima parliamone</Link>
      </PageHero>

      <PageNav items={[{ id: "risultati", t: "Risultati" }, { id: "garanzia", t: "Garanzia" }, { id: "candidatura", t: "Posti" }, { id: "domande", t: "Domande" }]} cta={{ href: "/call-orientamento", label: "Prenota la call" }} />

      <section className="py-10 md:py-14">
        <div className="wrap">
          <dl className="grid grid-cols-2 gap-px bg-[var(--line)] rounded-3xl overflow-hidden border border-[var(--line)] md:grid-cols-4">
            {[["6", "mesi di mentorship"], ["24", "call individuali con me"], ["8", "posti per ogni trimestre"], ["1:1", "WhatsApp diretto, lun-ven"]].map(([n, l]) => (
              <div key={l} className="bg-ivory p-6"><dt className="font-display text-6xl kw leading-none">{n}</dt><dd className="mt-2 text-sm text-stone">{l}</dd></div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section pt-8">
        <div className="wrap grid gap-14 lg:grid-cols-2">
          <div>
            <Label n="01" t="Il contesto" />
            <Heading text="Hai mani straordinarie. E ogni mese è *una scommessa*." className="text-4xl md:text-6xl" />
          </div>
          <Reveal>
            <div className="space-y-4 text-lg text-stone">
              <p>Hai tecniche solide, clienti che ti adorano. Eppure ogni mese ti chiedi se l'agenda si riempirà. Aspetti il passaparola, pubblichi qualche post quando ti ricordi, confronti i prezzi con la collega del centro accanto.</p>
              <p className="text-ink">Il problema non è la tua bravura. È che nessuno ti ha insegnato a trasformare le tue competenze in un'identità riconoscibile sui social, dove oggi molte clienti cercano chi le segue.</p>
            </div>
          </Reveal>
        </div>
      </section>


      <section className="section-dark section">
        <div className="wrap grid gap-10 lg:grid-cols-[0.6fr_1.4fr] items-center">
          <Reveal><p className="font-display text-[clamp(5rem,16vw,11rem)] kw leading-none">80%+</p></Reveal>
          <Reveal delay={0.1}>
            <p className="eyebrow mb-4">Il dato che cambia tutto</p>
            <p className="font-display text-3xl md:text-5xl leading-tight">delle donne tra i 25 e i 55 anni, il target perfetto del massaggio benessere, sceglie il proprio operatore di fiducia su Instagram.</p>
            <p className="mt-6 text-lg text-ivory/75">Non da Google. Non dal passaparola. Da Instagram. Un percorso personale, per portarti da «brava ma invisibile» a «riferimento riconoscibile del tuo territorio» in 6 mesi, lavorando su due piattaforme: Instagram e TikTok.</p>
          </Reveal>
        </div>
      </section>

      <Outcomes n="02" label="L'obiettivo" title="Cosa costruiamo *insieme* in 6 mesi." cols={3} note={<span className="text-xs">Descrizione degli obiettivi del percorso, non una promessa di risultato.</span>} items={[
        { t: "Un'identità riconoscibile", d: "Smetti di essere «una delle tante»: chi ti trova capisce subito chi sei e cosa fai di diverso." },
        { t: "Un'agenda più prevedibile", d: "Si lavora per passare dal «chissà se questo mese va bene» a richieste regolari, da clienti che scegli tu." },
        { t: "Vendere senza sentirti venditrice", d: "Ti insegno il mio modo di comunicare il tuo valore, non un copione." },
        { t: "Meno lavoro gratis", d: "Sconti, omaggi e pacchetti regalati: si impara a farsi pagare per il valore che dai." },
        { t: "Instagram e TikTok che lavorano per te", d: "Due canali che continuano a portare richieste anche quando il lettino è occupato." },
        { t: "Più libertà di scelta", d: "Non «più follower»: più richieste in DM, più prenotazioni e più scelta su chi far entrare nel tuo studio e a che prezzo." },
      ]} />

      <DetailSteps n="03" label="Le tre fasi" title="Fondamenta, trazione, *agenda piena*." bg="" cols={3} items={[
        { t: "Mesi 1–2 · Fondamenta", a: "Posizionamento personale, identità visiva, ottimizzazione completa di Instagram e TikTok. Include l'esercizio guidato sulla Scala dei Valori.", b: "Alla fine di questa fase il tuo profilo è pronto a lavorare." },
        { t: "Mesi 3–4 · Trazione", a: "Strategia di contenuto, Reels e TikTok ricorrenti, primo flusso costante di richieste in DM. Si impara a parlare al pubblico giusto e a farsi notare.", b: "Un flusso più regolare di persone interessate." },
        { t: "Mesi 5–6 · Riempire l'agenda", a: "Conversione delle richieste in clienti paganti, fidelizzazione, sistemi di passaparola digitale e recensioni.", b: "L'obiettivo: un'agenda più piena e prevedibile." },
      ]} />

      <section id="risultati" className="section scroll-mt-28">
        <div className="wrap">
          <Label n="04" t="Risultati" />
          <Heading text="I risultati di chi ha fatto il percorso, *raccontati* da loro." className="text-5xl md:text-6xl max-w-4xl" />
          <div className="mt-12"><CaseStudies max={3} /></div>
          <p className="mt-6 text-xs text-stone max-w-2xl">Risultati individuali, riferiti a singole allieve: non sono garantiti e non rappresentano un risultato medio. Dipendono dalla situazione di partenza e dall'impegno di ciascuna.</p>
          <div className="mt-16"><TrustBar /></div>
        </div>
      </section>

      <section className="section bg-blush/30">
        <div className="wrap grid gap-6 md:grid-cols-2">
          <Reveal><div className="rounded-3xl bg-ivory p-8 md:p-10 h-full"><h3 className="font-display text-3xl">È per te se…</h3><ul className="mt-5 space-y-2 text-stone"><li>✓ hai già un minimo di esperienza come operatrice e vuoi far crescere un'attività seria;</li><li>✓ sei disposta a metterci la faccia sui social: video, volto, voce, non solo grafiche;</li><li>✓ hai già provato a postare «a caso» e sei stanca di risultati che non arrivano;</li><li>✓ vuoi un affiancamento vero, con compiti settimanali, non solo un corso da guardare quando capita.</li></ul></div></Reveal>
          <Reveal delay={0.1}><div className="section-dark rounded-3xl p-8 md:p-10 h-full"><h3 className="font-display text-3xl">Non è per te se…</h3><ul className="mt-5 space-y-2 text-ivory/70"><li>✕ cerchi una soluzione «automatica», senza metterci tempo ogni settimana;</li><li>✕ non vuoi comparire sui social (il metodo si basa su un'identità personale riconoscibile);</li><li>✕ cerchi il prezzo più basso possibile, non il percorso più efficace.</li></ul></div></Reveal>
        </div>
      </section>

      <section id="garanzia" className="section-dark section scroll-mt-28">
        <div className="wrap max-w-4xl">
          <Label n="05" t="La garanzia Sold Out" />
          <Heading text="Garanzia «Primi 2 mesi»." className="text-5xl md:text-7xl" />
          <p className="mt-8 text-xl text-ivory/85">Se nei primi 2 mesi segui le mie indicazioni, frequenti tutte le call, completi i compiti settimanali, applichi le revisioni al tuo profilo e non vedi nessun miglioramento concreto sul tuo Instagram (più visualizzazioni, più follower in target, prime richieste in DM), ti restituisco l'intero investimento.</p>
          <p className="mt-6 font-display text-3xl">Senza domande. Senza giustificazioni. Senza paragrafi nascosti.</p>
          <p className="mt-6 text-sm text-ivory/55">La garanzia contrattuale non sostituisce il diritto di recesso previsto dalla legge, per cui vedi la pagina <Link href="/rimborsi" className="ulink">Recesso e rimborsi</Link>. La partecipazione alle call e lo svolgimento dei compiti risultano dai registri di Zoom e della piattaforma. <Tbc>condizioni contrattuali definitive della garanzia</Tbc></p>
        </div>
      </section>

      <section id="candidatura" className="section bg-blush/30 scroll-mt-28">
        <div className="wrap grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <Label n="06" t="Perché i posti sono limitati" />
            <Heading text="*8 posti* per ogni trimestre." className="text-5xl md:text-7xl" />
          </div>
          <Reveal>
            <p className="text-lg text-stone">Sold Out non è un corso scalabile: è mentorship 1:1. Ogni partecipante ha una call settimanale dedicata con me e supporto WhatsApp diretto, e il numero di persone che posso seguire in parallelo è limitato dal tempo reale che posso dedicare a ciascuna. Quando i posti sono esauriti, le iscrizioni chiudono fino al trimestre successivo.</p>
            <p className="mt-4 text-sm text-stone"><Tbc>posti ancora disponibili nel trimestre in corso</Tbc></p>
            <div className="mt-8 flex flex-wrap gap-4"><Link href="/call-orientamento" className="btn btn-primary">Parliamo del tuo salto di livello <span className="arr">→</span></Link></div>
          </Reveal>
        </div>
      </section>

      <Steps n="07" label="I prossimi passi" title="Come *si parte*." items={[
        { t: "Mi scrivi", d: "Rispondi dal sito o scrivimi su WhatsApp per confermare il tuo posto." },
        { t: "Audit iniziale", d: "Fissiamo la data dell'audit di 90 minuti." },
        { t: "Scegli come pagare", d: "Pagamento unico o finanziamento, e ricevi l'accesso immediato al Kit Pronto." },
      ]} />

      <ReviewsSection />

      <Objections n="08" items={[
        { t: "Non mi piace espormi in video", d: "Il metodo si basa su un'identità personale riconoscibile, quindi serve metterci faccia e voce. All'inizio è normale sentirsi impacciate: si comincia con video brevi e si migliora di settimana in settimana. Se proprio non è per te, meglio dirselo prima." },
        { t: "Costa più di quanto posso spendere ora", d: "Capisco. Ne parliamo in call, senza pressione. C'è anche il Metodo A.G.E.N.D.A. come primo passo." },
        { t: "Non sono brava con la tecnologia", d: "Per questo piattaforma, landing page e prodotto digitale li facciamo noi: zero stress tecnico." },
        { t: "E se non funziona per me?", d: "C'è la garanzia «Primi 2 mesi». Non prometto risultati economici, che nessuno può garantire." },
      ]} />

      <Compare n="09" title="Metodo A.G.E.N.D.A. *o* Sold Out?" cols={["Metodo A.G.E.N.D.A.", "Metodo Sold Out"]} rows={[
        { label: "Cos'è", cells: ["Il sistema completo, con affiancamento", "Mentorship 1:1, il massimo affiancamento"] },
        { label: "Durata", cells: ["6 mesi", "6 mesi"] },
        { label: "Affiancamento", cells: ["2 call individuali al mese, chat 7/7, Q&A bisettimanali", "Una call a settimana (24), revisione contenuti, WhatsApp diretto"] },
        { label: "Fatto per te", cells: ["Il video corso", "Landing page, prodotto digitale, piattaforma, newsletter"] },
        { label: "Posti", cells: ["Aperto", "8 per trimestre"] },
        { label: "Prezzo", cells: ["Lo comunico in videochiamata", "Lo comunico in videochiamata"] },
      ]} />

      <Faq id="domande" items={[
        { q: "Che cos'è il Metodo Sold Out?", a: "È la mia mentorship 1:1 di 6 mesi per operatrici del benessere: una call a settimana con me, la revisione dei tuoi contenuti, e landing page, prodotto digitale e piattaforma fatti al posto tuo." },
        { q: "Cosa cambia rispetto al Metodo A.G.E.N.D.A.?", a: "A.G.E.N.D.A. è il sistema completo con affiancamento. Sold Out è il massimo affiancamento: una call a settimana, revisione dei contenuti e servizi fatti dal mio team." },
        { q: "Devo mostrarmi sui social?", a: "Sì. Il metodo si basa su un'identità personale riconoscibile: video, volto e voce, non solo grafiche." },
        { q: "Quanto tempo richiede?", a: <>Serve tempo ogni settimana: la call, i compiti e i contenuti. <Tbc>ore settimanali consigliate</Tbc></>, plain: "Serve tempo ogni settimana per la call, i compiti e i contenuti." },
        { q: "Quanto costa e posso pagare a rate?", a: "Il prezzo lo comunico durante la videochiamata di orientamento. Se vuoi dividere il pagamento in rate, ne parliamo in quella sede." },
        { q: "C'è una garanzia?", a: "Sì, la garanzia «Primi 2 mesi»: se segui le indicazioni, frequenti le call, completi i compiti e applichi le revisioni e non vedi nessun miglioramento concreto, ti restituisco l'investimento." },
        { q: "Perché solo 8 posti?", a: "Perché è mentorship 1:1: ogni persona ha una call settimanale e supporto diretto, e il mio tempo reale è limitato." },
        { q: "Il teambuilding è incluso nel prezzo?", a: "La giornata dal vivo è inclusa. Restano esclusi i costi di viaggio e di soggiorno." },
        { q: "Quali risultati posso aspettarmi?", a: "Non si garantiscono risultati economici: dipendono dalla situazione di partenza e dall'impegno. Il percorso dà metodo, strumenti e affiancamento." },
      ]} />
      <CtaBand />
    </>
  );
}
