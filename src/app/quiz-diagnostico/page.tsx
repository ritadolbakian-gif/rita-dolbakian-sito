import Link from "next/link";
import { CtaBand } from "@/components/Ui";
import { Heading } from "@/components/Motion";
import { GhlQuiz } from "@/components/GuideForm";
import { Crumbs } from "@/components/Crumbs";
import { meta } from "@/lib/seo";

export const metadata = meta("Quiz gratuito: cosa ti separa da un'agenda piena", "Il quiz di Rita Dolbakian per chi lavora nel benessere: in 2 minuti capisci dove perdi clienti, tra come ti presenti, social, messaggi e clienti che tornano.", "/quiz-diagnostico", "/media/hero-pensierosa.webp");

export default function Quiz() {
  return (
    <>
      <Crumbs trail={[["Quiz", "/quiz-diagnostico"]]} />

      <section className="section-dark relative overflow-hidden pt-28 md:pt-36 pb-14 md:pb-16">
        <div className="wrap max-w-2xl mx-auto text-center">
          <p className="eyebrow mb-5 flex items-center justify-center gap-3"><span className="inline-block h-px w-8 bg-rose" />Quiz gratuito</p>
          <Heading as="h1" text="Perché l'agenda *non si riempie*?" className="text-[clamp(2.1rem,7vw,4rem)] justify-center" immediate />
          <p className="mt-6 text-lg text-ivory/75">Rispondi a poche domande sulla tua attività: alla fine capisci dove stai perdendo clienti e da dove partire.</p>
          <p className="mt-6 text-sm text-ivory/55">2 minuti · a risposta multipla · niente da scrivere</p>
          <a href="#quiz" className="btn btn-primary mt-9">Inizia il quiz <span className="arr">↓</span></a>
        </div>
      </section>

      <section id="quiz" className="section pt-10 md:pt-16 scroll-mt-14">
        <div className="wrap max-w-2xl mx-auto">
          <GhlQuiz id="T9eMMhoi2aCxsKFJMVEg" minHeight={1000} />
          <p className="mt-6 text-center text-xs text-stone">Uso le risposte solo per mandarti il risultato. Come tratto i dati lo trovi nell'<Link href="/privacy" className="ulink text-ink">informativa privacy</Link>.</p>
        </div>
      </section>

      <CtaBand title="Vuoi capire *da dove partire*?" sub="Dopo il quiz, se vuoi ne parliamo insieme." primary={{ href: "/call-orientamento", label: "Prenota la call con me" }} secondary={{ href: "/guida-gratuita", label: "Ricevi la guida" }} />
    </>
  );
}
