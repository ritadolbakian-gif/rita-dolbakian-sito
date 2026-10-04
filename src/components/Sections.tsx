import type { ReactNode } from "react";
import { Heading, Reveal } from "./Motion";
import { Label } from "./Ui";
import Link from "next/link";

export type Item = { t: string; d: ReactNode };

/** Cosa ottieni / cosa porti a casa. */
export function Outcomes({ n, label = "Cosa ottieni", title, items, cols = 2, note }: { n?: string; label?: string; title: string; items: Item[]; cols?: 2 | 3 | 4; note?: ReactNode }) {
  const grid = cols === 4 ? "lg:grid-cols-4 sm:grid-cols-2" : cols === 3 ? "lg:grid-cols-3 sm:grid-cols-2" : "sm:grid-cols-2";
  return (
    <section className="section">
      <div className="wrap">
        <Label n={n} t={label} />
        <Heading text={title} className="text-5xl md:text-6xl max-w-3xl" />
        {note && <p className="mt-4 text-sm text-stone">{note}</p>}
        <div className={`mt-12 grid gap-5 ${grid}`}>
          {items.map((i, k) => (
            <Reveal key={i.t} delay={(k % 4) * 0.07}>
              <div className="lift rounded-3xl border border-[var(--line)] p-7 h-full">
                <span className="text-rose text-xl" aria-hidden>✦</span>
                <h3 className="font-display text-3xl mt-3 leading-tight">{i.t}</h3>
                <p className="mt-3 text-stone text-[0.97rem]">{i.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Passi numerati in sequenza. */
export function Steps({ n, label = "Come si svolge", title, items, dark = false, note }: { n?: string; label?: string; title: string; items: Item[]; dark?: boolean; note?: ReactNode }) {
  return (
    <section className={`${dark ? "section-dark" : "bg-blush/30"} section`}>
      <div className="wrap">
        <Label n={n} t={label} />
        <Heading text={title} className="text-5xl md:text-6xl max-w-3xl" />
        {note && <p className="mt-4 text-sm text-stone">{note}</p>}
        <ol className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-[var(--line)] bg-[var(--line)] md:grid-cols-2 lg:grid-cols-4">
          {items.map((i, k) => (
            <li key={i.t} className={dark ? "bg-ink" : "bg-ivory"}>
              <Reveal delay={k * 0.08}>
                <div className="p-7 h-full">
                  <span className="font-display text-6xl kw leading-none">{k + 1}</span>
                  <h3 className="font-display text-2xl mt-3">{i.t}</h3>
                  <p className={`mt-2 text-sm ${dark ? "text-ivory/65" : "text-stone"}`}>{i.d}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/** "Ma se…?" : i dubbi più comuni, con risposte calme e oneste. */
export function Objections({ n, items, title = "Ma se… *ho dei dubbi*?" }: { n?: string; items: Item[]; title?: string }) {
  return (
    <section className="section">
      <div className="wrap grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div><Label n={n} t="I dubbi più comuni" /><Heading text={title} className="text-5xl md:text-6xl" /><p className="mt-5 text-stone max-w-sm">Se ti stai chiedendo una di queste cose, è normale. Ecco cosa ti rispondo.</p></div>
        <div className="grid gap-4">
          {items.map((i, k) => (
            <Reveal key={i.t} delay={k * 0.07}>
              <div className="rounded-3xl bg-blush/40 p-6 md:p-7">
                <p className="font-display text-2xl md:text-3xl leading-snug">«{i.t}»</p>
                <p className="mt-3 text-stone">{i.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Confronto compatto tra più opzioni (righe = voci, colonne = percorsi). */
export function Compare({ n, title, cols, rows }: { n?: string; title: string; cols: string[]; rows: { label: string; cells: ReactNode[] }[] }) {
  return (
    <section className="section bg-blush/30">
      <div className="wrap">
        <Label n={n} t="Il confronto" />
        <Heading text={title} className="text-5xl md:text-6xl max-w-3xl" />
        <Reveal>
          <div className="mt-12 overflow-x-auto rounded-3xl bg-ivory">
            <table className="w-full min-w-[40rem] text-left">
              <thead><tr className="border-b border-[var(--line)] text-xs uppercase tracking-[0.15em] text-stone"><th className="p-5 font-medium" />{cols.map((c) => <th key={c} className="p-5 font-medium">{c}</th>)}</tr></thead>
              <tbody>{rows.map((r) => (
                <tr key={r.label} className="border-b border-[var(--line)] last:border-0 align-top">
                  <th className="p-5 font-medium text-stone w-40">{r.label}</th>
                  {r.cells.map((c, i) => <td key={i} className="p-5">{c}</td>)}
                </tr>
              ))}</tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export type Detail = { t: string; a: ReactNode; b: ReactNode };

/** Passi spiegati nel dettaglio: cosa facciamo / cosa porti a casa. */
export function DetailSteps({ n, label = "Come funziona", title, items, note, bg = "bg-blush/30", cols = 2 }: { n?: string; label?: string; title: string; items: Detail[]; note?: ReactNode; bg?: string; cols?: 2 | 3 }) {
  return (
    <section className={`${bg} section`}>
      <div className="wrap">
        <Label n={n} t={label} />
        <Heading text={title} className="text-5xl md:text-6xl max-w-3xl" />
        {note && <p className="mt-4 text-sm text-stone">{note}</p>}
        <ol className={`mt-12 grid gap-5 ${cols === 3 ? "lg:grid-cols-3" : ""} sm:grid-cols-2`}>
          {items.map((i, k) => (
            <li key={i.t}>
              <Reveal delay={(k % 2) * 0.08}>
                <div className="lift h-full rounded-3xl border border-[var(--line)] bg-ivory p-7 md:p-8">
                  <div className="flex items-baseline gap-4"><span className="font-display text-6xl kw leading-none">{k + 1}</span><h3 className="font-display text-3xl leading-tight">{i.t}</h3></div>
                  <p className="eyebrow mt-6">Cosa facciamo</p>
                  <p className="mt-2 text-stone">{i.a}</p>
                  <p className="eyebrow !text-rose mt-5">Cosa porti a casa</p>
                  <p className="mt-2">{i.b}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/** Fascia di enfasi sulla garanzia: soddisfatti o rimborsati in 14 giorni. */
export function GuaranteeBand({ compact = false, cta }: { compact?: boolean; cta?: { href: string; label: string } }) {
  return (
    <section className={`relative overflow-hidden bg-rose text-white ${compact ? "py-10 md:py-12" : "py-14 md:py-20"}`} aria-label="Garanzia soddisfatti o rimborsati in 14 giorni">
      <div className="orb size-[26rem] bg-white/15 -left-24 -top-24 hidden md:block" aria-hidden />
      <div className={`wrap relative grid items-center gap-6 md:gap-12 ${compact ? "md:grid-cols-[auto_1fr_auto]" : "md:grid-cols-[auto_1fr]"}`}>
        <Reveal>
          <div className="flex items-end gap-3 leading-none">
            <span className={`font-display ${compact ? "text-8xl" : "text-[9rem] md:text-[12rem]"}`}>14</span>
            <span className="pb-3 font-display text-3xl italic md:pb-6">giorni</span>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div>
            <p className="eyebrow !text-white/80">Garanzia</p>
            <h2 className={`font-display mt-2 leading-[1.02] ${compact ? "text-3xl md:text-4xl" : "text-4xl md:text-6xl"}`}>Soddisfatti <em className="!text-white">o rimborsati</em>.</h2>
            <p className={`mt-3 max-w-xl text-white/90 ${compact ? "text-[0.97rem]" : "text-lg"}`}>Provi Wellness Mastery per 14 giorni. Se senti che non fa per te, me lo dici e ricevi il rimborso. Il rischio lo prendo io, non tu.</p>
            {!compact && <p className="mt-3 text-sm text-white/75">Condizioni complete nella <Link href="/rimborsi" className="underline underline-offset-4">politica di rimborso</Link>.</p>}
          </div>
        </Reveal>
        {compact && cta && <Reveal delay={0.2}><Link href={cta.href} className="btn !bg-white !text-ink hover:!bg-ink hover:!text-white">{cta.label} <span className="arr">→</span></Link></Reveal>}
      </div>
    </section>
  );
}

/** Pillola da mettere vicino ai pulsanti. */
export function GuaranteePill() {
  return <span className="inline-flex items-center gap-2 rounded-full bg-rose px-5 min-h-12 text-sm font-medium text-white shadow-lg"><span aria-hidden>✓</span> Soddisfatti o rimborsati in 14 giorni</span>;
}
