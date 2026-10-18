import { PageHero, Label, Faq } from "@/components/Ui";
import { Heading, Reveal } from "@/components/Motion";
import { Slot } from "@/components/Slot";
import { BookingCalendar } from "@/components/BookingCalendar";
import { meta } from "@/lib/seo";
import { Crumbs } from "@/components/Crumbs";

export const metadata = meta("Prenota la call gratuita di orientamento", "Prenota una call gratuita con Rita Dolbakian: una videochiamata a quattr'occhi per capire da dove ripartire.", "/call-orientamento", "/media/hero-massaggio.webp");

export default function Call() {
  return (
    <>
      <Crumbs trail={[["Call di orientamento", "/call-orientamento"]]} />
      <PageHero dark bgId="hero-massaggio" eyebrow="Call di orientamento" title="Una call per capire *da dove ripartire*." answer="Sai che qualcosa nella tua attività non gira, ma non sai da dove cominciare. In call ti dico dove stai perdendo continuità e cosa farei io per prima cosa." />
      <section className="section">
        <div className="wrap">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14 items-center">
            <div>
              <Label t="Prenota" />
              <Heading text="Scegli *giorno e orario*." className="text-4xl md:text-5xl" as="h2" />
              <p className="mt-4 text-stone max-w-md">Scegli lo slot che preferisci e prenota la tua call. Subito dopo riceverai un breve questionario che mi permette di capire la tua situazione e di preparare la call su misura per te. La prenotazione sarà confermata solo ed esclusivamente dopo l'invio del questionario.</p>
            </div>
            <Reveal><Slot kind="foto" id="call-hero" label="Rita durante una consulenza" ratio="4/3" art="orbs" /></Reveal>
          </div>
          <div className="mt-12 lg:mt-16">
            <BookingCalendar className="rounded-3xl border border-[var(--line)] overflow-hidden bg-ivory" />
          </div>
        </div>
      </section>

      <Faq items={[
        { q: "La call è gratuita?", a: "Sì, non ti costa nulla. Può durare fino a un'ora." },
        { q: "È una telefonata di vendita?", a: "No. Parliamo della tua attività, non dei miei corsi. Se alla fine ha senso lavorare insieme te lo propongo, altrimenti ci salutiamo." },
        { q: "Devo compilare un questionario?", a: "Sì. Subito dopo aver scelto l'orario ricevi un breve questionario: la prenotazione si conferma solo dopo averlo inviato. Mi serve per capire la tua situazione e preparare la call su misura per te." },
        { q: "Come mi preparo?", a: "Il questionario è già la preparazione: bastano pochi minuti. Per il resto, pensa a dove sei oggi con la tua attività e a cosa vorresti cambiare." },
        { q: "E se dopo la call il percorso non fa per me?", a: "Va benissimo, ci salutiamo. Ti dico comunque se e come posso aiutarti." },
        { q: "Come si svolge, e dove?", a: "Si svolge in videochiamata. Il link per collegarti lo ricevi via email, insieme alla conferma della prenotazione." },
        { q: "Posso spostare o annullare la prenotazione?", a: "Sì: puoi farlo dal link che ricevi nella email di conferma." },
      ]} />
    </>
  );
}
