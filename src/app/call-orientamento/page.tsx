import { PageHero, Label, Faq, Tbc } from "@/components/Ui";
import { Heading, Reveal } from "@/components/Motion";
import { Slot } from "@/components/Slot";
import { TrustBar } from "@/components/Proof";
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
        <div className="wrap grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="space-y-10">
            <div>
              <Label t="Prenota" />
              <Heading text="Scegli *giorno e orario*." className="text-4xl md:text-5xl" as="h2" />
              <p className="mt-4 text-stone max-w-sm">È una videochiamata a quattr'occhi che può durare fino a un'ora. Dopo la prenotazione ricevi la conferma via email.</p>
            </div>
            <Reveal><Slot kind="foto" id="call-hero" label="Rita durante una consulenza" ratio="4/3" art="orbs" /></Reveal>
          </div>
          <BookingCalendar className="rounded-3xl border border-[var(--line)] overflow-hidden bg-ivory" />
        </div>
      </section>
      <section className="section pt-0"><div className="wrap"><TrustBar /></div></section>

      <Faq items={[
        { q: "La call è gratuita?", a: "Sì, non ti costa nulla. Può durare fino a un'ora." },
        { q: "È una telefonata di vendita?", a: "No. Parliamo della tua attività, non dei miei corsi. Se alla fine ha senso lavorare insieme te lo propongo, altrimenti ci salutiamo." },
        { q: "Come mi preparo?", a: "Basta che pensi a dove sei oggi con la tua attività e a cosa vorresti cambiare. Non serve preparare altro." },
        { q: "E se dopo la call il percorso non fa per me?", a: "Va benissimo, ci salutiamo. Ti dico comunque se e come posso aiutarti." },
        { q: "Come si svolge, e dove?", a: <>Si svolge in videochiamata. <Tbc>piattaforma e link</Tbc></>, plain: "Si svolge in videochiamata." },
        { q: "Posso spostare o annullare la prenotazione?", a: "Sì: puoi farlo dal link che ricevi nella email di conferma." },
      ]} />
    </>
  );
}
