import type { ReactNode } from "react";
import { Heading, Reveal } from "./Motion";
import { Label } from "./Ui";

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
        <div><Label n={n} t="I dubbi più comuni" /><Heading text={title} className="text-5xl md:text-6xl" /><p className="mt-5 text-stone max-w-sm">Se ti stai chiedendo una di queste cose, è normale. Ecco una risposta onesta.</p></div>
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
