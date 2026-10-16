import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Label } from "@/components/Ui";
import { Heading, Reveal } from "@/components/Motion";
import { Slot } from "@/components/Slot";
import { GhlForm } from "@/components/GuideForm";

export const metadata: Metadata = {
  title: "Questionario prima della call",
  description: "Il questionario da compilare prima della call di orientamento con Rita Dolbakian.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/questionario" },
};

const tips: [string, string][] = [
  ["Scrivi come parli", "Non serve essere precisa o usare parole tecniche. Due righe sincere valgono più di un tema."],
  ["I numeri vanno bene anche a occhio", "Se non sai quanti clienti fai al mese, scrivi una stima. Ci lavoriamo in call."],
  ["Puoi farlo dal telefono", "Il questionario funziona anche da smartphone: prenditi dieci minuti tranquilli."],
];

const after: [string, string][] = [
  ["Invii le risposte", "Arrivano direttamente a me."],
  ["Le leggo prima della call", "Così so già a che punto sei e cosa ti blocca."],
  ["In call partiamo da lì", "Niente presentazioni infinite: andiamo subito su quello che ti serve."],
];

export default function Questionario() {
  return (
    <>
      <PageHero dark bgId="hero-scrive" eyebrow="Prima della call" title="Raccontami *dove sei* oggi." answer="Leggo le tue risposte prima della call, così quando ci sentiamo non perdiamo tempo con le presentazioni e andiamo subito al punto.">
        <a href="#questionario" className="btn btn-primary">Compila il questionario <span className="arr">↓</span></a>
      </PageHero>

      <div className="border-b border-[var(--line)] bg-ivory">
        <ul className="wrap grid grid-cols-3 divide-x divide-[var(--line)] py-5 text-center">
          {[["10'", "per compilarlo"], ["1", "volta sola"], ["Rita", "legge le risposte"]].map(([b, l]) => (
            <li key={l} className="px-2"><p className="font-display text-3xl md:text-4xl kw leading-none">{b}</p><p className="mt-1 text-xs md:text-sm text-stone">{l}</p></li>
          ))}
        </ul>
      </div>

      <section id="questionario" className="section bg-blush/30 scroll-mt-20">
        <div className="wrap grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14 items-start">
          <aside className="lg:sticky lg:top-28 space-y-8">
            <div>
              <Label t="Questionario" />
              <Heading text="Rispondi con *sincerità*, non con le risposte giuste." className="text-4xl md:text-5xl" />
            </div>
            <div className="hidden lg:flex items-center gap-4">
              <div className="w-20 shrink-0"><Slot id="hero-ritratto-m" label="Rita Dolbakian" ratio="1/1" art="orbs" className="!rounded-full" /></div>
              <p className="text-stone text-[0.95rem]">«Più mi racconti com'è davvero la tua giornata, più la call ti sarà utile.» <span className="block mt-1 text-ink font-medium">Rita</span></p>
            </div>
            <ul className="space-y-5">
              {tips.map(([t, d]) => (
                <li key={t} className="flex gap-4">
                  <span className="mt-1 grid size-7 shrink-0 place-items-center rounded-full bg-rose text-white text-sm" aria-hidden>✓</span>
                  <div><p className="font-medium text-ink">{t}</p><p className="text-sm text-stone mt-0.5">{d}</p></div>
                </li>
              ))}
            </ul>
          </aside>

          <div>
            <div className="rounded-[2rem] border border-blush bg-white p-3 sm:p-6 md:p-8 shadow-[0_40px_80px_-50px_rgba(11,10,9,.35)]">
              <div className="flex items-center justify-between gap-4 border-b border-[var(--line)] px-2 pb-4 mb-2">
                <p className="eyebrow !text-rose">Questionario pre-call</p>
                <p className="hidden sm:block text-xs text-stone">I campi con * sono obbligatori</p>
              </div>
              <GhlForm id="rEqmS1NUILpw2jrDWoOg" name="Questionario pre-disco" height={3358} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-dark section">
        <div className="wrap">
          <Label t="Dopo l'invio" />
          <Heading text="Cosa succede *dopo*." className="text-4xl md:text-6xl" />
          <ol className="mt-12 grid gap-5 md:grid-cols-3">
            {after.map(([t, d], i) => (
              <li key={t}><Reveal delay={i * 0.08}><div className="h-full rounded-3xl border border-ivory/15 p-7">
                <span className="font-display text-5xl kw leading-none">0{i + 1}</span>
                <h3 className="font-display text-2xl mt-3">{t}</h3>
                <p className="mt-2 text-ivory/70">{d}</p>
              </div></Reveal></li>
            ))}
          </ol>
          <p className="mt-10 text-ivory/60 text-sm">Non hai ancora fissato la call? <Link href="/call-orientamento" className="ulink text-ivory">Scegli giorno e orario</Link>.</p>
        </div>
      </section>
    </>
  );
}
