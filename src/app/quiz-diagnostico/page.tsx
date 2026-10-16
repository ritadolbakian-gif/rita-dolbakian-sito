import Link from "next/link";
import { PageHero, Label, CtaBand } from "@/components/Ui";
import { Heading } from "@/components/Motion";
import { GhlQuiz } from "@/components/GuideForm";
import { Crumbs } from "@/components/Crumbs";
import { meta } from "@/lib/seo";

export const metadata = meta("Quiz diagnostico: cosa ti separa da un'agenda piena", "Il quiz di Rita Dolbakian per chi lavora nel benessere: in 2 minuti capisci dove perdi clienti, tra come ti presenti, social, messaggi e clienti che tornano.", "/quiz-diagnostico", "/media/hero-pensierosa.webp");

const areas: [string, string][] = [
  ["Come ti presenti", "Cosa rispondi quando ti chiedono perché scegliere te e non un'altra."],
  ["I social", "Se pubblichi, con che costanza, e cosa succede dopo."],
  ["Da dove arrivano le clienti", "Passaparola, social, Google o quasi nessuna fonte precisa."],
  ["I messaggi", "Chi ti scrive prenota, sparisce, o non ti scrive proprio."],
  ["Le clienti che tornano", "Quante tornano dopo il primo trattamento e quante recensioni hai."],
];

export default function Quiz() {
  return (
    <>
      <Crumbs trail={[["Quiz diagnostico", "/quiz-diagnostico"]]} />
      <PageHero dark bgId="hero-pensierosa" eyebrow="Quiz diagnostico" title="Cosa ti separa da *un'agenda piena*?" answer="Qualche domanda sulla tua attività, a risposta multipla. Alla fine hai più chiaro dove stai perdendo clienti: quando ti fai notare, quando ti scelgono o dopo il primo trattamento.">
        <a href="#quiz" className="btn btn-primary">Fai il quiz <span className="arr">↓</span></a>
      </PageHero>

      <div className="border-b border-[var(--line)] bg-ivory">
        <ul className="wrap grid grid-cols-3 divide-x divide-[var(--line)] py-5 text-center">
          {[["2'", "circa, per rispondere"], ["5", "aree della tua attività"], ["A scelta", "nessuna risposta da scrivere"]].map(([b, l]) => (
            <li key={l} className="px-2"><p className="font-display text-3xl md:text-4xl kw leading-none">{b}</p><p className="mt-1 text-xs md:text-sm text-stone">{l}</p></li>
          ))}
        </ul>
      </div>

      <section id="quiz" className="section bg-blush/30 scroll-mt-20">
        <div className="wrap grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14 items-start">
          <aside className="lg:sticky lg:top-24 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:pr-3 no-scrollbar space-y-7">
            <div>
              <Label t="Il quiz" />
              <Heading text="Rispondi d'istinto, *non come dovresti*." className="text-4xl md:text-5xl" />
            </div>
            <ol className="rounded-3xl bg-ivory p-6 space-y-4">
              <li className="eyebrow !text-rose">Le 5 aree che guardiamo</li>
              {areas.map(([t, d], i) => (
                <li key={t} className="flex gap-4"><span className="font-display text-3xl kw leading-none w-6 shrink-0">{i + 1}</span><div><p className="font-medium text-ink leading-tight">{t}</p><p className="text-sm text-stone mt-0.5">{d}</p></div></li>
              ))}
            </ol>
            <p className="text-sm text-stone">Sono le stesse cose che guardo quando lavoro con le operatrici nel <Link href="/percorsi/metodo-agenda" className="ulink text-ink">Metodo A.G.E.N.D.A.</Link></p>
          </aside>

          <div>
            <div className="sm:rounded-[2rem] sm:border sm:border-blush sm:bg-white sm:p-6 md:p-8 sm:shadow-[0_40px_80px_-50px_rgba(11,10,9,.35)]">
              <GhlQuiz id="T9eMMhoi2aCxsKFJMVEg" minHeight={1000} />
            </div>
            <p className="mt-5 px-2 text-xs text-stone">Uso le risposte solo per mandarti il risultato e, se vuoi, per preparare una call. Come tratto i dati lo trovi nell'<Link href="/privacy" className="ulink text-ink">informativa privacy</Link>.</p>
          </div>
        </div>
      </section>

      <CtaBand title="Vuoi capire *da dove partire*?" primary={{ href: "/call-orientamento", label: "Prenota la call con me" }} secondary={{ href: "/guida-gratuita", label: "Ricevi la guida" }} />
    </>
  );
}
