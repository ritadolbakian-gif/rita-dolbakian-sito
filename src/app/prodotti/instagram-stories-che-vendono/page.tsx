import Link from "next/link";
import Image from "next/image";
import { ProductPage } from "@/components/ProductPage";
import { meta } from "@/lib/seo";
import { CHECKOUT } from "@/lib/products";

export const metadata = meta("Instagram Stories che vendono: il manuale operativo", "Il manuale operativo di Rita Dolbakian per usare le Stories di Instagram e portare le follower a prenotare il primo trattamento, anche se non ami mostrarti in video.", "/prodotti/instagram-stories-che-vendono", "/media/prodotto-stories-2.webp");

/** Indice del manuale (PDF, 44 pagine). */
const INSIDE: [string, string][] = [
  ["01", "Perché oggi i clienti scelgono guardando le Stories"],
  ["02", "I 3 obiettivi delle Stories: Relazione, Fiducia, Azione"],
  ["03", "Storytelling semplice, che anche i tuoi clienti capiscono"],
  ["04", "Le Stories di vendita, senza sentirti «troppo venditrice»"],
  ["05", "I 4 formati che funzionano, anche senza mostrarti in viso"],
  ["06", "30 giorni di Stories pronte da copiare"],
  ["07", "Sticker, sondaggi e box domande per vendere, con gli script per rispondere in DM"],
  ["08", "Gli errori che ti fanno perdere clienti, e come evitarli"],
  ["09", "Il kit operativo: modelli di Story, checklist settimanale e riuso dei contenuti"],
  ["Bonus 1", "Audit del tuo profilo in 10 punti"],
  ["Bonus 2", "Le risposte alle 10 obiezioni più comuni"],
];

/** Estratti ritagliati dal manuale: solo il pezzo mostrato, niente pagina intera. */
const EXCERPTS = [
  { src: "/media/manuale-stories/estratto-30-giorni.jpg", w: 1360, h: 450, alt: "Estratto del piano di 30 giorni: i primi due giorni della Settimana 1", cap: "30 giorni di Stories pronte da copiare" },
  { src: "/media/manuale-stories/estratto-checklist.jpg", w: 760, h: 290, alt: "Estratto della checklist settimanale", cap: "La checklist settimanale" },
  { src: "/media/manuale-stories/estratto-audit.jpg", w: 1360, h: 320, alt: "Estratto dell'audit del profilo: i primi due punti", cap: "Audit del profilo in 10 punti" },
];

export default function Page() {
  return (
    <ProductPage
      name="Instagram Stories che vendono"
      slug="instagram-stories-che-vendono"
      eyebrow="Manuale operativo"
      title="Riempi l'agenda con *Instagram*, anche se non ami esporti."
      answer="Il metodo pratico e veloce per usare le Stories e trasformare le follower in clienti. Per massaggiatrici, fisioterapiste, osteopate e professioniste del benessere che non sanno cosa pubblicare, o non hanno voglia di stare davanti alla fotocamera."
      imageId="prodotto-stories"
      price="37 €"
      value="57 €"
      checkout={CHECKOUT.stories}
      cta="Voglio il manuale operativo a 37 €"
      painTitle="Pubblichi Stories che *nessuno* considera?"
      painNote="Il tuo lavoro lo sai fare benissimo. Ti manca sapere cosa mettere nelle Stories perché qualcuno ti scriva per prenotare."
      pains={["Pubblicare Stories ti sembra una perdita di tempo.", "Ti senti bloccata davanti alla fotocamera.", "Hai paura di sembrare invadente o poco professionale.", "Finisci per non pubblicare nulla."]}
      solutionTitle="Il manuale che ti dice *cosa* pubblicare."
      solution={<p>«Instagram Stories che vendono» è il manuale operativo con il metodo che uso io: Stories pensate per farti ricordare, farti riconoscere come esperta e portare le tue follower a prenotare il primo trattamento.</p>}
      benefits={[
        { t: "Resti nella mente", d: "Le tue follower si ricordano di te, perché ti vedono con regolarità." },
        { t: "Trasmetti competenza", d: "Autorevolezza e preparazione tecnica passano in modo naturale, senza vantarti." },
        { t: "Si arriva alla prenotazione", d: "Le follower sanno cosa fare per prenotare il loro primo trattamento." },
      ]}
      extra={
        <div className="mt-16">
          <h3 className="font-display text-4xl">Cosa trovi dentro</h3>
          <p className="mt-3 text-ivory/70 max-w-2xl">44 pagine in PDF: 9 capitoli e 2 bonus, con frasi pronte, modelli e una checklist da stampare.</p>
          <ol className="mt-8 grid gap-x-10 gap-y-4 md:grid-cols-2">
            {INSIDE.map(([n, t]) => (
              <li key={n} className="flex gap-4 border-t border-white/15 pt-4"><span className="eyebrow text-rose shrink-0 w-16">{n}</span><span className="text-ivory/85">{t}</span></li>
            ))}
          </ol>
          <h3 className="mt-16 font-display text-4xl">Uno sguardo all&apos;interno</h3>
          <p className="mt-3 text-ivory/70 max-w-2xl">Qualche estratto dal manuale, così come lo ricevi.</p>
          <div className="mt-8 grid gap-8 max-w-4xl">
            {EXCERPTS.map((p) => (
              <figure key={p.src}>
                <figcaption className="eyebrow mb-3 text-ivory/60">{p.cap}</figcaption>
                <div className="rounded-2xl bg-white p-3 md:p-5 shadow-[0_20px_60px_-20px_rgba(0,0,0,.6)] w-fit max-w-full">
                  <Image src={p.src} alt={p.alt} width={p.w} height={p.h} sizes="(min-width:1024px) 860px, 100vw" style={{ width: `min(100%, ${Math.round(p.w / 1.6)}px)` }} className="h-auto" />
                </div>
              </figure>
            ))}
          </div>
        </div>
      }
      forWho={["Sei massaggiatrice, fisioterapista, osteopata o professionista del benessere.", "Non sai cosa pubblicare nelle Stories.", "Non ami mostrarti in video.", "Vuoi un metodo pratico, senza perdere tempo."]}
      bonus={{ t: "consulenza gratuita", d: "Analisi del tuo profilo Instagram." }}
      guarantee="Garanzia 14 giorni: provalo senza rischi. Se non fa per te, scrivici entro 14 giorni e ti rimborsiamo."
      description="Manuale operativo per usare le Stories di Instagram e portare le follower a prenotare."
      faq={[
        { q: "Devo mostrarmi in video?", a: "No. Il manuale è pensato anche per chi non ama stare davanti alla fotocamera." },
        { q: "Per chi è?", a: "Per massaggiatrici, fisioterapiste, osteopate e professioniste del benessere che vogliono usare Instagram per riempire l'agenda." },
        { q: "In che formato è?", a: "È un manuale operativo digitale in PDF." },
        { q: "Quando e come lo ricevo?", a: "Subito dopo il pagamento, via email. Ricevi anche l'accesso all'area corsi, con le istruzioni per scaricarlo." },
        { q: "Per quanto tempo resta disponibile?", a: "Per sempre: puoi scaricarlo quando vuoi. Gli aggiornamenti futuri non sono inclusi." },
        { q: "Posso leggerlo dal telefono?", a: "Sì. È un PDF: lo leggi da telefono, tablet o computer." },
        { q: "Come funziona la consulenza gratuita?", a: <>Trovi il link per prenotarla dentro il manuale. Puoi anche prenotarla subito dalla pagina <Link href="/call-orientamento" className="ulink">Prenota la tua call gratuita</Link>.</>, plain: "Trovi il link per prenotarla dentro il manuale, oppure dalla pagina Prenota la tua call gratuita del sito." },
        { q: "Ricevo la fattura?", a: "Sì. La ricevi via email, all'indirizzo che indichi al momento del pagamento." },
        { q: "Cosa succede se non fa per me?", a: <>Hai 14 giorni di garanzia: scrivi a <a href="mailto:rita.dolbakian@rdacademy.it" className="ulink">rita.dolbakian@rdacademy.it</a> e ricevi il rimborso.</>, plain: "Hai 14 giorni di garanzia: scrivi a rita.dolbakian@rdacademy.it e ricevi il rimborso." },
        { q: "Mi garantisci dei risultati?", a: "No. Ti do un metodo pratico: i risultati dipendono dalla tua situazione di partenza e da quanto lo applichi." },
      ]}
    />
  );
}
