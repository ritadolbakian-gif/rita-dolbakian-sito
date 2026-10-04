import { ReviewsSection } from "@/components/Reviews";
import { PageNav } from "@/components/PageNav";
import { Outcomes, Steps, Objections, Compare, DetailSteps } from "@/components/Sections";
import { PageHero, Label, CtaBand, Faq, Tbc, JsonLd, courseLd } from "@/components/Ui";
import { Heading, Reveal } from "@/components/Motion";
import { meta } from "@/lib/seo";
import Link from "next/link";
import { CaseStudies, TrustBar } from "@/components/Proof";

export const metadata = meta("Metodo Sold Out: mentorship 1:1 per operatrici del benessere", "Metodo Sold Out di Rita Dolbakian: mentorship 1:1 di 6 mesi per diventare il riferimento del tuo territorio, con call settimanali, Kit Pronto, landing page, prodotto digitale e 8 posti a trimestre.", "/percorsi/sold-out");

const included: { t: string; items: string[] }[] = [
  { t: "Mentorship 1:1 con Rita Dolbakian", items: [
    "Audit iniziale di 90 minuti per definire posizionamento, obiettivi e roadmap personalizzata sui 6 mesi.",
    "6 mesi di call individuali da 45-60 minuti, una a settimana, via Zoom.",
    "Ogni call ha un tema chiaro e si chiude con compiti pratici per la settimana successiva.",
    "Revisione settimanale dei tuoi contenuti in base al calendario editoriale, prima che li pubblichi.",
    "Registrazione di ogni sessione disponibile a vita, per riguardare i passaggi importanti.",
    "Supporto WhatsApp diretto con me (lun-ven, 9-18) per i dubbi tra una call e l'altra.",
    "Esercizio guidato sulla Scala dei Valori nella prima fase, per costruire la tua mappa valoriale.",
    "1:1 avanzato sull'uso di Claude come supporto al business: contenuti, organizzazione e decisioni quotidiane, non solo social.",
  ] },
  { t: "Il Kit Pronto", items: [
    "100 idee contenuto per massaggiatrici, già scritte e organizzate mese per mese.",
    "Script DM per rispondere a richieste di prezzi, curiosi, prenotazioni e «ci penso e ti faccio sapere».",
    "Calendario editoriale del mese: cosa pubblicare, quando e con quale tono.",
  ] },
  { t: "Community privata Sold Out", items: [
    "Gruppo Telegram riservato alle partecipanti del programma.",
    "1 Q&A live al mese con me (60 minuti in gruppo): domande, confronto e hot seat a rotazione.",
    "Sfide mensili di gruppo (per esempio «30 giorni di Reels») con supporto.",
    "Confronto continuo con altre professioniste del benessere.",
  ] },
  { t: "Teambuilding live", items: [
    "1 giornata dal vivo con le partecipanti del trimestre e con me, a metà percorso.",
    "Workshop pratico di gruppo su contenuti e personal branding: si lavora fianco a fianco.",
    "Un momento di community reale: vi conoscete, vi confrontate, create contenuti insieme.",
    "Location in Italia, comunicata con largo anticipo a inizio trimestre. Costi di viaggio e soggiorno non inclusi: dettagli comunicati separatamente.",
  ] },
  { t: "Landing page pronta all'uso", items: [
    "La costruiamo noi per vendere il tuo servizio o prodotto, su una struttura collaudata. Tu ci dici l'obiettivo, ci porti le foto e, se vuoi, qualche landing che ti piace come ispirazione. I testi li scriviamo noi.",
    "Ottimizzata per trasformare le visite in richieste: form, bottoni WhatsApp, prova sociale.",
    "Pronta in 5-7 giorni lavorativi dalla consegna dei tuoi materiali.",
  ] },
  { t: "Prodotto digitale fatto e finito", items: [
    "Ti creiamo un tuo prodotto digitale da vendere (guida PDF di 15-20 pagine) su struttura già testata: contenuto, grafica e impaginazione a cura nostra, tu ci metti esperienza e voce.",
    "Pensato per generare un primo flusso di vendite a basso prezzo (19-39 €) mentre costruisci l'agenda.",
    "Ti mostriamo anche il processo con cui lo costruiamo, così in futuro saprai crearne altri da sola.",
  ] },
  { t: "Setup piattaforma GoHighLevel", items: [
    "Attiviamo e configuriamo per te GoHighLevel, la piattaforma che uso io per gestire prenotazioni, automazioni e clienti.",
    "Pipeline di vendita, calendario prenotazioni e form già pronti, duplicati dai miei template e adattati a te.",
    "Nessuna curva di apprendimento tecnica: la piattaforma arriva già impostata. Se usi già un altro strumento (per esempio Stan Store), colleghiamo la landing a quello.",
  ] },
  { t: "Sistema newsletter ed email marketing", items: [
    "Scriviamo per te i contenuti della newsletter: 4 email pronte, basate sul mio framework, tu ci metti la tua voce.",
    "Se usi GoHighLevel, impostiamo anche l'invio e le automazioni base collegate a landing page e prodotto digitale.",
    "Se usi un'altra piattaforma, ti diciamo quali email mandare, quando e come sono strutturate; il caricamento e l'invio restano a te.",
  ] },
  { t: "Accesso al video corso «Metodo A.G.E.N.D.A.»", items: [
    "Se arrivi dal Metodo A.G.E.N.D.A. hai già la piattaforma video: con Sold Out sblocchi anche gli approfondimenti avanzati riservati a chi entra in mentorship.",
    "Se entri direttamente in Sold Out hai accesso a tutti i contenuti video del percorso, più gli approfondimenti avanzati.",
  ] },
];

const value: [string, string][] = [
  ["Mentorship 1:1 (24 call + WhatsApp diretto)", "4.800 €"], ["Audit iniziale + roadmap personalizzata", "600 €"], ["Kit Pronto", "497 €"], ["Community + Q&A mensili", "397 €"], ["Teambuilding live", "697 €"], ["Landing page", "197 €"], ["Prodotto digitale", "197 €"], ["Setup piattaforma", "197 €"], ["Newsletter", "124 €"], ["Accesso video corso", "497 €"], ["1:1 avanzato: Claude per il business", "297 €"],
];

export default function SoldOut() {
  return (
    <>
      <JsonLd data={courseLd("Metodo Sold Out", "Mentorship 1:1 di 6 mesi con Rita Dolbakian per operatrici del benessere.", "/percorsi/sold-out")} />
      <PageHero imageId="wm-top" imageRatio="16/9" imageArt="arch" dark eyebrow="Mentorship 1:1 · Metodo Sold Out" title="Da brava ma *invisibile* a riferimento del tuo territorio." answer="Metodo Sold Out è la mia mentorship 1:1 di 6 mesi per operatrici del benessere: una call a settimana con me, la revisione dei tuoi contenuti e tutto ciò che si può fare al posto tuo (landing page, prodotto digitale, piattaforma) lo facciamo noi. A te restano la faccia, la voce e le tue clienti. Lavoriamo su due piattaforme: Instagram e TikTok.">
        <Link href="#candidatura" className="btn btn-primary">Candidati <span className="arr">→</span></Link>
        <Link href="/call-orientamento" className="btn btn-ghost">Prima parliamone</Link>
      </PageHero>

      <PageNav items={[{ id: "incluso", t: "Cosa è incluso" }, { id: "fasi", t: "Le tre fasi" }, { id: "risultati", t: "Risultati" }, { id: "investimento", t: "Investimento" }, { id: "garanzia", t: "Garanzia" }, { id: "candidatura", t: "Posti" }, { id: "domande", t: "Domande" }]} cta={{ href: "/call-orientamento", label: "Prenota 30 minuti" }} />

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

      <Outcomes n="02" label="L'obiettivo" title="Cosa costruiamo *insieme* in 6 mesi." cols={3} note={<span className="text-xs">Descrizione degli obiettivi del percorso, non una promessa di risultato.</span>} items={[
        { t: "Un'identità riconoscibile", d: "Smetti di essere «una delle tante»: chi ti trova capisce subito chi sei e cosa fai di diverso." },
        { t: "Un'agenda più prevedibile", d: "Si lavora per passare dal «chissà se questo mese va bene» a richieste regolari, da clienti che scegli tu." },
        { t: "Vendere senza sentirti venditrice", d: "Ti insegno il mio modo di comunicare il tuo valore, non un copione." },
        { t: "Meno lavoro gratis", d: "Sconti, omaggi e pacchetti regalati: si impara a farsi pagare per il valore che dai." },
        { t: "Instagram e TikTok che lavorano per te", d: "Due canali che continuano a portare richieste anche quando il lettino è occupato." },
        { t: "Più libertà di scelta", d: "Non «più follower»: più richieste in DM, più prenotazioni e più scelta su chi far entrare nel tuo studio e a che prezzo." },
      ]} />

      <section id="incluso" className="section bg-blush/30 scroll-mt-28">
        <div className="wrap">
          <Label n="03" t="Cosa è incluso" />
          <Heading text="Massimo affiancamento. *Zero* stress tecnico." className="text-5xl md:text-7xl max-w-4xl" />
          <p className="mt-6 max-w-2xl text-lg text-stone">Tutto ciò che si può fare al posto tuo (landing page, prodotto digitale, piattaforma) lo faccio io con il mio team. A te restano le cose che nessun altro può fare: la tua faccia, la tua voce, le tue clienti.</p>
          <div className="mt-12 border-t border-[var(--line)] max-w-4xl">
            {included.map((b, i) => (
              <details key={b.t} className="acc" open={i === 0}>
                <summary><h3 className="font-display text-2xl md:text-3xl"><span className="kw mr-3">{String(i + 1).padStart(2, "0")}</span>{b.t}</h3><span className="plus" aria-hidden>+</span></summary>
                <div className="acc-body !max-w-none"><ul className="space-y-2">{b.items.map((x) => <li key={x}>— {x}</li>)}</ul></div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <DetailSteps n="04" label="Le tre fasi" title="Fondamenta, trazione, *agenda piena*." bg="" cols={3} items={[
        { t: "Mesi 1–2 · Fondamenta", a: "Posizionamento personale, identità visiva, ottimizzazione completa di Instagram e TikTok. Include l'esercizio guidato sulla Scala dei Valori.", b: "Alla fine di questa fase il tuo profilo è pronto a lavorare." },
        { t: "Mesi 3–4 · Trazione", a: "Strategia di contenuto, Reels e TikTok ricorrenti, primo flusso costante di richieste in DM. Si impara a parlare al pubblico giusto e a farsi notare.", b: "Un flusso più regolare di persone interessate." },
        { t: "Mesi 5–6 · Riempire l'agenda", a: "Conversione delle richieste in clienti paganti, fidelizzazione, sistemi di passaparola digitale e recensioni.", b: "L'obiettivo: un'agenda più piena e prevedibile." },
      ]} />

      <section id="risultati" className="section scroll-mt-28">
        <div className="wrap">
          <Label n="05" t="Risultati" />
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

      <section id="investimento" className="section scroll-mt-28">
        <div className="wrap grid gap-12 lg:grid-cols-[1fr_1fr] items-start">
          <div>
            <Label n="06" t="Il valore reale" />
            <Heading text="Cosa ricevi, e quanto *varrebbe* da solo." className="text-4xl md:text-6xl" />
            <dl className="mt-8 divide-y divide-[var(--line)] border-y border-[var(--line)]">
              {value.map(([k, v]) => <div key={k} className="flex justify-between gap-6 py-3"><dt className="text-stone">{k}</dt><dd className="font-medium whitespace-nowrap">{v}</dd></div>)}
              <div className="flex justify-between gap-6 py-4 text-lg"><dt>Valore totale</dt><dd className="font-display text-3xl">8.500 €</dd></div>
            </dl>
          </div>
          <Reveal>
            <div className="section-dark rounded-3xl p-8 md:p-10">
              <p className="eyebrow">Il tuo investimento</p>
              <p className="mt-3 font-display text-7xl leading-none"><span className="text-3xl text-ivory/50 line-through mr-3">8.500 €</span>4.997 €</p>
              <div className="mt-8 space-y-5 text-ivory/80">
                <p><strong className="text-ivory">Pagamento unico: 4.497 €.</strong> 500 € di sconto se paghi in un'unica soluzione.</p>
                <p><strong className="text-ivory">Finanziamento Heylight:</strong> da 3 a 24 mesi, soggetto ad approvazione creditizia.</p>
              </div>
              <Link href="#candidatura" className="btn btn-primary mt-8">Candidati <span className="arr">→</span></Link>
              <p className="mt-5 text-xs text-ivory/50">Prezzi comprensivi di IVA se dovuta. <Tbc>conferma IVA e importi finali</Tbc> Maggiori informazioni sul pagamento a rate nella pagina <Link href="/pagamenti-rateali" className="ulink">Pagamento a rate</Link>.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="garanzia" className="section-dark section scroll-mt-28">
        <div className="wrap max-w-4xl">
          <Label n="07" t="La garanzia Sold Out" />
          <Heading text="Garanzia «Primi 2 mesi»." className="text-5xl md:text-7xl" />
          <p className="mt-8 text-xl text-ivory/85">Se nei primi 2 mesi segui le mie indicazioni, frequenti tutte le call, completi i compiti settimanali, applichi le revisioni al tuo profilo e non vedi nessun miglioramento concreto sul tuo Instagram (più visualizzazioni, più follower in target, prime richieste in DM), ti restituisco l'intero investimento.</p>
          <p className="mt-6 font-display text-3xl">Senza domande. Senza giustificazioni. Senza paragrafi nascosti.</p>
          <p className="mt-6 text-sm text-ivory/55">La garanzia contrattuale non sostituisce il diritto di recesso previsto dalla legge, per cui vedi la pagina <Link href="/rimborsi" className="ulink">Recesso e rimborsi</Link>. La partecipazione alle call e lo svolgimento dei compiti risultano dai registri di Zoom e della piattaforma. <Tbc>condizioni contrattuali definitive della garanzia</Tbc></p>
        </div>
      </section>

      <section id="candidatura" className="section bg-blush/30 scroll-mt-28">
        <div className="wrap grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <Label n="08" t="Perché i posti sono limitati" />
            <Heading text="*8 posti* per ogni trimestre." className="text-5xl md:text-7xl" />
          </div>
          <Reveal>
            <p className="text-lg text-stone">Sold Out non è un corso scalabile: è mentorship 1:1. Ogni partecipante ha una call settimanale dedicata con me e supporto WhatsApp diretto, e il numero di persone che posso seguire in parallelo è limitato dal tempo reale che posso dedicare a ciascuna. Quando i posti sono esauriti, le iscrizioni chiudono fino al trimestre successivo.</p>
            <p className="mt-4 text-sm text-stone"><Tbc>posti ancora disponibili nel trimestre in corso</Tbc></p>
            <div className="mt-8 flex flex-wrap gap-4"><Link href="/call-orientamento" className="btn btn-primary">Parliamo del tuo salto di livello <span className="arr">→</span></Link></div>
          </Reveal>
        </div>
      </section>

      <Steps n="09" label="I prossimi passi" title="Come *si parte*." items={[
        { t: "Mi scrivi", d: "Rispondi dal sito o scrivimi su WhatsApp per confermare il tuo posto." },
        { t: "Audit iniziale", d: "Fissiamo la data dell'audit di 90 minuti." },
        { t: "Scegli come pagare", d: "Pagamento unico o finanziamento, e ricevi l'accesso immediato al Kit Pronto." },
      ]} />

      <ReviewsSection />

      <Objections n="10" items={[
        { t: "Non mi piace espormi in video", d: "Il metodo si basa su un'identità personale riconoscibile, quindi serve metterci faccia e voce. Lo facciamo con calma, un passo alla volta. Se non è per te, meglio dirselo prima." },
        { t: "Costa più di quanto posso spendere ora", d: "Capisco. Ne parliamo in call, senza pressione. C'è anche il Metodo A.G.E.N.D.A. come primo passo." },
        { t: "Non sono brava con la tecnologia", d: "Per questo piattaforma, landing page e prodotto digitale li facciamo noi: zero stress tecnico." },
        { t: "E se non funziona per me?", d: "C'è la garanzia «Primi 2 mesi». Non prometto risultati economici, che nessuno può garantire." },
      ]} />

      <Compare n="11" title="Metodo A.G.E.N.D.A. *o* Sold Out?" cols={["Metodo A.G.E.N.D.A.", "Metodo Sold Out"]} rows={[
        { label: "Cos'è", cells: ["Il sistema in 11 moduli, con affiancamento", "Mentorship 1:1, il massimo affiancamento"] },
        { label: "Durata", cells: ["6 mesi", "6 mesi"] },
        { label: "Affiancamento", cells: ["2 call individuali al mese, chat 7/7, Q&A bisettimanali", "Una call a settimana (24), revisione contenuti, WhatsApp diretto"] },
        { label: "Fatto per te", cells: ["Video corso e bonus", "Landing page, prodotto digitale, piattaforma, newsletter"] },
        { label: "Posti", cells: ["Aperto", "8 per trimestre"] },
        { label: "Investimento", cells: ["1.497 €, fino a 24 rate", "4.997 € (4.497 € in unica soluzione)"] },
      ]} />

      <Faq id="domande" items={[
        { q: "Che cos'è il Metodo Sold Out?", a: "È la mia mentorship 1:1 di 6 mesi per operatrici del benessere: una call a settimana con me, la revisione dei tuoi contenuti, e landing page, prodotto digitale e piattaforma fatti al posto tuo." },
        { q: "Cosa cambia rispetto al Metodo A.G.E.N.D.A.?", a: "A.G.E.N.D.A. è il sistema in 11 moduli con affiancamento. Sold Out è il massimo affiancamento: una call a settimana, revisione dei contenuti e servizi fatti dal mio team." },
        { q: "Devo mostrarmi sui social?", a: "Sì. Il metodo si basa su un'identità personale riconoscibile: video, volto e voce, non solo grafiche." },
        { q: "Quanto tempo richiede?", a: <>Serve tempo ogni settimana: la call, i compiti e i contenuti. <Tbc>ore settimanali consigliate</Tbc></>, plain: "Serve tempo ogni settimana per la call, i compiti e i contenuti." },
        { q: "Quanto costa e posso pagare a rate?", a: "L'investimento è di 4.997 €, oppure 4.497 € in un'unica soluzione. Puoi anche accedere a un finanziamento Heylight da 3 a 24 mesi, soggetto ad approvazione creditizia." },
        { q: "C'è una garanzia?", a: "Sì, la garanzia «Primi 2 mesi»: se segui le indicazioni, frequenti le call, completi i compiti e applichi le revisioni e non vedi nessun miglioramento concreto, ti restituisco l'investimento." },
        { q: "Perché solo 8 posti?", a: "Perché è mentorship 1:1: ogni persona ha una call settimanale e supporto diretto, e il mio tempo reale è limitato." },
        { q: "Il teambuilding è incluso nel prezzo?", a: "La giornata dal vivo è inclusa. Restano esclusi i costi di viaggio e di soggiorno." },
        { q: "Quali risultati posso aspettarmi?", a: "Non si garantiscono risultati economici: dipendono dalla situazione di partenza e dall'impegno. Il percorso dà metodo, strumenti e affiancamento." },
      ]} />
      <CtaBand />
    </>
  );
}
