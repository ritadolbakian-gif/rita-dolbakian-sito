import type { Metadata } from "next";
import { PageHero, Label } from "@/components/Ui";
import { Heading } from "@/components/Motion";
import { GhlForm } from "@/components/GuideForm";

export const metadata: Metadata = {
  title: "Questionario prima della call",
  description: "Il questionario da compilare prima della call di orientamento con Rita Dolbakian.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/questionario" },
};

export default function Questionario() {
  return (
    <>
      <PageHero dark bgId="hero-scrive" eyebrow="Prima della call" title="Raccontami *dove sei* oggi." answer="Bastano dieci minuti. Leggo le tue risposte prima della call, così quando ci sentiamo non perdiamo tempo con le presentazioni e possiamo andare subito al punto." >
        <a href="#questionario" className="btn btn-primary">Compila il questionario <span className="arr">↓</span></a>
      </PageHero>
      <section id="questionario" className="section scroll-mt-24">
        <div className="wrap max-w-3xl">
          <Label t="Questionario" />
          <Heading text="Rispondi con *sincerità*, non con le risposte giuste." className="text-4xl md:text-5xl" />
          <p className="mt-4 text-stone max-w-xl">Non c'è un modo giusto di compilarlo. Più mi racconti com'è davvero la tua giornata, più la call ti sarà utile.</p>
          <GhlForm id="rEqmS1NUILpw2jrDWoOg" name="Questionario pre-disco" height={3358} className="mt-10" />
        </div>
      </section>
    </>
  );
}
