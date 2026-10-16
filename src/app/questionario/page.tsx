import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Label } from "@/components/Ui";
import { Heading, Reveal } from "@/components/Motion";
import { GhlForm } from "@/components/GuideForm";

export const metadata: Metadata = {
  title: "Questionario prima della call",
  description: "Il questionario da compilare prima della call di orientamento con Rita Dolbakian.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/questionario" },
};

const parts: [string, string][] = [
  ["I tuoi dati", "Nome, contatti, età e città. Due minuti."],
  ["La tua attività", "Che lavoro fai e da quanto, se hai la partita IVA, quanto chiedi e quanto incassi in media, da dove arrivano le clienti."],
  ["Dove sei oggi", "Il problema più grande, da quanto ci convivi, cosa hai già provato e perché vuoi cambiare adesso."],
  ["Cosa vuoi dalla call", "Cosa hai già fatto per formarti, quanto saresti disposta a investire e cosa vuoi portarti a casa."],
];

const tips: [string, string][] = [
  ["Sul problema più grande, sii concreta", "Invece di «ho pochi clienti», scrivi qualcosa come «a febbraio ho fatto 6 massaggi». Così capisco subito."],
  ["Sui numeri basta una stima", "Per prezzo e incassi va bene una cifra indicativa: il trattamento che fai più spesso, un mese normale."],
  ["Sui «6 mesi» rispondi di pancia", "È la domanda che fa più riflettere. Scrivi la prima cosa che ti viene, anche solo una riga."],
];

const after: [string, string][] = [
  ["Invii le risposte", "Arrivano direttamente a me."],
  ["Le leggo prima della call", "Così so già a che punto sei e cosa ti blocca."],
  ["Ne parliamo in call", "Partiamo da quello che mi hai scritto e vediamo insieme da dove ripartire."],
];

export default function Questionario() {
  return (
    <>
      <PageHero dark bgId="hero-massaggio-2" eyebrow="Prima della call" title="Prima di sentirci, *qualche domanda*." answer="Le tue risposte mi aiutano a preparare la call pensando a te e alla tua attività.">
        <a href="#questionario" className="btn btn-primary">Compila il questionario <span className="arr">↓</span></a>
      </PageHero>

      <div className="border-b border-[var(--line)] bg-ivory">
        <ul className="wrap grid grid-cols-3 divide-x divide-[var(--line)] py-5 text-center">
          {[["10'", "circa, per compilarlo"], ["4", "parti, dalla tua attività ai tuoi obiettivi"], ["Rita", "legge ogni risposta"]].map(([b, l]) => (
            <li key={l} className="px-2"><p className="font-display text-3xl md:text-4xl kw leading-none">{b}</p><p className="mt-1 text-xs md:text-sm text-stone">{l}</p></li>
          ))}
        </ul>
      </div>

      <section id="questionario" className="section bg-blush/30 scroll-mt-20">
        <div className="wrap grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14 items-start">
          <aside className="lg:sticky lg:top-24 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:pr-3 no-scrollbar space-y-7">
            <div>
              <Label t="Questionario" />
              <Heading text="Rispondi con *sincerità*, non con le risposte giuste." className="text-4xl md:text-5xl" />
            </div>
            <ol className="rounded-3xl bg-ivory p-6 space-y-4">
              <li className="eyebrow !text-rose">Le 4 parti del questionario</li>
              {parts.map(([t, d], i) => (
                <li key={t} className="flex gap-4"><span className="font-display text-3xl kw leading-none w-6 shrink-0">{i + 1}</span><div><p className="font-medium text-ink leading-tight">{t}</p><p className="text-sm text-stone mt-0.5">{d}</p></div></li>
              ))}
            </ol>
            <p className="eyebrow">Tre consigli</p>
            <ul className="space-y-5 -mt-4">
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
            <p className="mt-5 px-2 text-xs text-stone">Uso le tue risposte solo per preparare la nostra call. Come tratto i dati lo trovi nell'<Link href="/privacy" className="ulink text-ink">informativa privacy</Link>.</p>
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
