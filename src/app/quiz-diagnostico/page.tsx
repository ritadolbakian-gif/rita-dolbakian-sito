import Link from "next/link";
import { PageHero } from "@/components/Ui";
import { GhlQuiz } from "@/components/GuideForm";
import { Crumbs } from "@/components/Crumbs";
import { meta } from "@/lib/seo";

export const metadata = meta("Quiz gratuito: cosa ti separa da un'agenda piena", "Il quiz di Rita Dolbakian per chi lavora nel benessere: in 2 minuti capisci dove perdi clienti, tra come ti presenti, social, messaggi e clienti che tornano.", "/quiz-diagnostico", "/media/hero-pensierosa.webp");

export default function Quiz() {
  return (
    <>
      <Crumbs trail={[["Quiz", "/quiz-diagnostico"]]} />

      <PageHero dark bgId="hero-pensierosa" eyebrow="Quiz gratuito" title="Perché l'agenda *non si riempie*?" answer="Rispondi a poche domande sulla tua attività: alla fine capisci dove stai perdendo clienti e da dove partire. Due minuti, a risposta multipla, niente da scrivere.">
        <a href="#quiz" className="btn btn-primary">Inizia il quiz <span className="arr">↓</span></a>
      </PageHero>

      <section id="quiz" className="section-dark section pt-10 md:pt-12 pb-16 scroll-mt-14">
        <div className="wrap max-w-2xl mx-auto">
          <GhlQuiz id="T9eMMhoi2aCxsKFJMVEg" className="overflow-hidden rounded-2xl" />
          <p className="mt-6 text-center text-xs text-ivory/55">Uso le risposte solo per mandarti il risultato. Come tratto i dati lo trovi nell'<Link href="/privacy" className="ulink text-ivory">informativa privacy</Link>.</p>
        </div>
      </section>
    </>
  );
}
