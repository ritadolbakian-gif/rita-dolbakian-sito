import type { Metadata } from "next";
import { PageHero, Label } from "@/components/Ui";
import { Heading, Reveal } from "@/components/Motion";
import { Slot } from "@/components/Slot";
import { BookingCalendar } from "@/components/BookingCalendar";

export const metadata: Metadata = {
  title: "Richiesta ricevuta — Guida Metodo A.G.E.N.D.A.",
  description: "Grazie! Scarica subito la Guida Metodo A.G.E.N.D.A. e, se vuoi, prenota la tua call gratuita con Rita Dolbakian.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/richiesta-ricevuta" },
};

const GUIDE_PDF = "https://drive.google.com/file/d/1SMMKoY0GwJB9FQjRpgaSRS-u5l7OPpEg/view?usp=drive_link";

export default function RichiestaRicevuta() {
  return (
    <>
      <PageHero dark bgId="hero-ritratto" eyebrow="Richiesta ricevuta" title="Grazie! La tua *guida* è pronta." answer="Ti ho inviato la «Guida Metodo A.G.E.N.D.A.» anche via email: se non la trovi, controlla la cartella spam o la scheda Promozioni. Intanto puoi scaricarla subito qui sotto.">
        <a href={GUIDE_PDF} target="_blank" rel="noopener" className="btn btn-primary">Scarica la guida in PDF <span className="arr">↓</span></a>
        <a href="#call" className="btn btn-ghost">Prenota la call gratuita</a>
      </PageHero>

      <section className="section pt-10">
        <div className="wrap grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal><Slot kind="foto" id="guida-mockup" label="La Guida Metodo A.G.E.N.D.A." ratio="3/4" art="waves" className="max-w-sm mx-auto lg:max-w-md" priority /></Reveal>
          <div>
            <Label t="Il primo passo" />
            <Heading text="Scaricala e parti dal *primo* capitolo." className="text-4xl md:text-5xl" />
            <p className="mt-4 text-stone max-w-md">Non serve leggerla tutta stasera. Parti dal primo capitolo e prova subito quello che c'è scritto: l'ho scritta per essere usata, non per restare in una cartella.</p>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-stone"><li>✓ La trovi anche nella tua email</li><li>✓ PDF, da leggere quando vuoi</li></ul>
          </div>
        </div>
      </section>

      <section id="call" className="section bg-blush/30 scroll-mt-24">
        <div className="wrap">
          <div className="max-w-2xl space-y-5">
            <Label t="Il passo successivo" />
            <Heading text="Vuoi *parlarne* con me?" className="text-4xl md:text-5xl" />
            <p className="text-stone max-w-md">Se dopo la guida vuoi un aiuto concreto, prenota una call gratuita. Scegli lo slot che preferisci: subito dopo riceverai un breve questionario che mi permette di preparare la call su misura per te. La prenotazione si conferma solo dopo l'invio del questionario.</p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-stone"><li>✓ In videochiamata, fino a un'ora</li><li>✓ Gratuita</li><li>✓ Scegli tu l'orario</li></ul>
          </div>
          <div className="mt-10 lg:mt-12">
            <BookingCalendar className="rounded-3xl border border-[var(--line)] overflow-hidden bg-ivory" />
          </div>
        </div>
      </section>
    </>
  );
}
