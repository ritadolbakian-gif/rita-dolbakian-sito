import type { Metadata } from "next";
import { PageHero, Label } from "@/components/Ui";
import { Heading, Reveal } from "@/components/Motion";
import { Slot } from "@/components/Slot";
import { BookingCalendar } from "@/components/BookingCalendar";

export const metadata: Metadata = {
  title: "Richiesta ricevuta — Guida Metodo A.G.E.N.D.A.",
  description: "Grazie! Scarica subito la Guida Metodo A.G.E.N.D.A. e, se vuoi, prenota la tua call gratuita di 30 minuti con Rita Dolbakian.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/richiesta-ricevuta" },
};

const GUIDE_PDF = "https://drive.google.com/file/d/1SMMKoY0GwJB9FQjRpgaSRS-u5l7OPpEg/view?usp=drive_link";

export default function RichiestaRicevuta() {
  return (
    <>
      <PageHero dark bgId="home-bg" eyebrow="Richiesta ricevuta" title="Grazie! La tua *guida* è pronta." answer="Ti ho inviato la «Guida Metodo A.G.E.N.D.A.» anche via email: se non la trovi, controlla la cartella spam o la scheda Promozioni. Intanto puoi scaricarla subito qui sotto.">
        <a href={GUIDE_PDF} target="_blank" rel="noopener" className="btn btn-primary">Scarica la guida in PDF <span className="arr">↓</span></a>
        <a href="#call" className="btn btn-ghost">Prenota la call gratuita</a>
      </PageHero>

      <section className="section pt-10">
        <div className="wrap grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal><Slot kind="foto" id="guida-mockup" label="La Guida Metodo A.G.E.N.D.A." ratio="3/4" art="waves" className="max-w-sm mx-auto lg:max-w-md" priority /></Reveal>
          <div>
            <Label t="Il primo passo" />
            <Heading text="Scaricala e parti dal *primo* capitolo." className="text-4xl md:text-5xl" />
            <p className="mt-4 text-stone max-w-md">Non serve leggerla tutta d'un fiato. Comincia dal primo capitolo e applica un passo alla volta: la guida è pensata per essere usata, non solo letta.</p>
            <div className="mt-8"><a href={GUIDE_PDF} target="_blank" rel="noopener" className="btn btn-primary">Scarica la guida in PDF <span className="arr">↓</span></a></div>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-stone"><li>✓ La trovi anche nella tua email</li><li>✓ PDF, da leggere quando vuoi</li></ul>
          </div>
        </div>
      </section>

      <section id="call" className="section bg-blush/30 scroll-mt-24">
        <div className="wrap grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="space-y-6">
            <Label t="Il passo successivo" />
            <Heading text="Vuoi *parlarne* con me?" className="text-4xl md:text-5xl" />
            <p className="text-stone max-w-sm">Se dopo la guida vuoi un aiuto concreto, prenota una call gratuita di circa 30 minuti. Ti dico dove stai perdendo continuità e cosa farei io per prima cosa. Nessun obbligo.</p>
            <ul className="space-y-2 text-sm text-stone"><li>✓ Circa 30 minuti, in videochiamata</li><li>✓ Gratuita, senza impegno</li><li>✓ Scegli tu l'orario</li></ul>
          </div>
          <BookingCalendar className="rounded-3xl border border-[var(--line)] overflow-hidden bg-ivory" />
        </div>
      </section>
    </>
  );
}
