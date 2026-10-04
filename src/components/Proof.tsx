import { CASES, TESTIMONIALS, PRESS, RATING } from "@/lib/proof";
import { Reveal } from "./Motion";
import { Slot } from "./Slot";
import { JsonLd, Tbc } from "./Ui";

const DISCLAIMER = "Risultati dichiarati dalle allieve. Le testimonianze riflettono esperienze individuali e non costituiscono garanzia di risultato.";

/** Casi studio: numero grande + nome e cognome. Mostra i dati reali di lib/proof.ts, altrimenti i segnaposto. */
export function CaseStudies({ max, program }: { max?: number; program?: string }) {
  const pool = program && CASES.some((c) => c.program === program) ? CASES.filter((c) => c.program === program) : CASES;
  const list = max ? pool.slice(0, max) : pool;
  return (
    <div>
      <div className="grid gap-6 md:grid-cols-3">
        {list.length > 0
          ? list.map((c, i) => (
              <Reveal key={c.name} delay={i * 0.1}>
                <article className="rounded-3xl border border-[var(--line)] p-6 h-full flex flex-col">
                  {(c.video || c.photo) && <Slot kind={c.video ? "video" : "foto"} label={c.name} src={c.video ?? c.photo} poster={c.poster} ratio="4/3" />}
                  <p className={`font-display text-7xl kw leading-none ${c.photo || c.video ? "mt-6" : ""}`}>{c.number}</p>
                  <p className="text-sm text-stone mt-1">{c.label}</p>
                  <blockquote className="mt-5 flex-1 text-lg">{c.quote}</blockquote>
                  <p className="mt-5 font-medium">{c.name}</p>
                  <p className="text-sm text-stone">{c.role}</p>
                </article>
              </Reveal>
            ))
          : [0, 1, 2].slice(0, max ?? 3).map((i) => (
              <Reveal key={i} delay={i * 0.1}>
                <article className="rounded-3xl border border-dashed border-rose/50 p-6 h-full">
                  <Slot kind={i === 0 ? "video" : "foto"} label="Allieva (autorizzata)" ratio="4/3" art={(["orbs", "waves", "leaf"] as const)[i]} />
                  <p className="font-display text-7xl mt-6 kw leading-none">+X</p>
                  <p className="text-sm text-stone mt-1">[risultato reale, in giorni o mesi]</p>
                  <p className="mt-5 font-medium">[Nome Cognome]</p>
                  <p className="text-sm text-stone">[Ruolo, città] · <Tbc>testimonianza e autorizzazione scritta</Tbc></p>
                </article>
              </Reveal>
            ))}
      </div>
      <p className="mt-8 text-xs text-stone max-w-2xl">{DISCLAIMER}</p>
    </div>
  );
}

/** Muro di video-testimonianze verticali (stile storie), scorrevole. */
export function VideoWall() {
  const list = TESTIMONIALS.filter((t) => t.video || t.photo);
  const items = list.length ? list : null;
  return (
    <div>
      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-5 px-5 [scrollbar-width:none]">
        {(items ?? [0, 1, 2, 3, 4]).map((t, i) => (
          <div key={typeof t === "number" ? t : t.name} className="snap-start shrink-0 w-[62vw] sm:w-60">
            {typeof t === "number" ? (
              <>
                <Slot kind="video" label="Video testimonianza" ratio="9/16" art={(["orbs", "waves", "stones", "arch", "leaf"] as const)[i]} />
                <p className="mt-3 text-sm text-stone">[Nome] · <Tbc>video</Tbc></p>
              </>
            ) : (
              <>
                <Slot kind={t.video ? "video" : "foto"} label={t.name} src={t.video ?? t.photo} poster={t.poster ?? t.photo} ratio="9/16" />
                <p className="mt-3 text-sm"><span className="font-medium">{t.name}</span><br /><span className="text-stone">{t.role}</span></p>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/** Citazioni scritte. Non mostra nulla se non ci sono testimonianze reali. */
export function Quotes() {
  if (!TESTIMONIALS.length) return null;
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {TESTIMONIALS.map((t, i) => (
        <Reveal key={t.name} delay={(i % 3) * 0.08}>
          <figure className="rounded-3xl bg-blush/40 p-7 h-full flex flex-col">
            <blockquote className="font-display text-2xl leading-snug flex-1">«{t.quote}»</blockquote>
            <figcaption className="mt-6 text-sm"><span className="font-medium">{t.name}</span> · <span className="text-stone">{t.role}</span><br /><span className="eyebrow">{t.program}</span></figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  );
}

/** Loghi di testate/collaborazioni reali. Nascosto se vuoto. */
export function PressBar() {
  if (!PRESS.length) return null;
  return (
    <div className="border-y border-[var(--line)] py-8">
      <p className="eyebrow text-center mb-5">Dicono di me / Hanno collaborato con me</p>
      <ul className="flex flex-wrap justify-center gap-x-12 gap-y-4 font-display text-3xl text-stone">{PRESS.map((p) => <li key={p.name}>{p.href ? <a href={p.href} rel="noopener" target="_blank">{p.name}</a> : p.name}</li>)}</ul>
    </div>
  );
}

/** Valutazione aggregata: solo con dati reali e verificabili. */
export function RatingLd() {
  // Volutamente vuoto: Google non ammette le stelle (AggregateRating) per le recensioni "autoreferenziali"
  // di un'organizzazione sul proprio sito. La valutazione si mostra solo come testo.
  return null;
}

/** Striscia di rassicurazioni, sempre vera. */
export function TrustBar({ items }: { items?: { t: string; d: string }[] }) {
  const list = items ?? [
    { t: "Nessun obbligo", d: "La call dura circa 30 minuti ed è gratuita." },
    { t: "Poche persone alla volta", d: "Così posso seguire ognuna con attenzione." },
    { t: "Soddisfatti o rimborsati", d: "Per tutta la durata del percorso, se partecipi e svolgi le attività." },
    { t: "Niente promesse di guadagno", d: "Ti do un metodo e un affiancamento. I risultati dipendono anche da te." },
  ];
  return (
    <ul className="grid gap-px bg-[var(--line)] border border-[var(--line)] rounded-3xl overflow-hidden sm:grid-cols-2 lg:grid-cols-4">
      {list.map((i) => (
        <li key={i.t} className="bg-ivory p-6">
          <span className="text-rose text-xl" aria-hidden>✦</span>
          <p className="font-display text-2xl mt-2">{i.t}</p>
          <p className="text-sm text-stone mt-1">{i.d}</p>
        </li>
      ))}
    </ul>
  );
}

/** Testimonianze scritte. Con dati reali le mostra; altrimenti mostra spazi segnaposto chiaramente riservati. */
export function QuoteWall({ program, max = 3, title }: { program?: string; max?: number; title?: string }) {
  const pool = program && TESTIMONIALS.some((t) => t.program === program) ? TESTIMONIALS.filter((t) => t.program === program) : TESTIMONIALS;
  const list = pool.slice(0, max);
  return (
    <div>
      {title && <p className="eyebrow mb-5">{title}</p>}
      <div className="grid gap-5 md:grid-cols-3">
        {list.length > 0
          ? list.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <figure className="rounded-3xl bg-blush/40 p-7 h-full flex flex-col">
                  <span className="font-display text-6xl kw leading-none" aria-hidden>“</span>
                  <blockquote className="font-display text-2xl leading-snug flex-1 -mt-2">{t.quote}</blockquote>
                  <figcaption className="mt-6 text-sm"><span className="font-medium">{t.name}</span> · <span className="text-stone">{t.role}</span><br /><span className="eyebrow">{t.program}</span></figcaption>
                </figure>
              </Reveal>
            ))
          : Array.from({ length: max }).map((_, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <figure className="rounded-3xl border border-dashed border-rose/50 p-7 h-full flex flex-col">
                  <span className="font-display text-6xl kw leading-none" aria-hidden>“</span>
                  <blockquote className="text-stone flex-1 -mt-2">Qui va una testimonianza reale e autorizzata. <Tbc>citazione</Tbc></blockquote>
                  <figcaption className="mt-6 text-sm">[Nome Cognome] · <span className="text-stone">[ruolo, città]</span></figcaption>
                </figure>
              </Reveal>
            ))}
      </div>
    </div>
  );
}
