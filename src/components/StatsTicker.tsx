import { RATING, visibleStats, showDraftStats } from "@/lib/proof";

/** Striscia scorrevole con numeri di esperienza e fiducia. I numeri non confermati compaiono solo in anteprima. */
export function StatsTicker() {
  const draft = showDraftStats();
  const items: { k: string; big: string; label: string; draft?: boolean }[] = [
    ...visibleStats().map((s) => ({ k: s.id, big: `${s.prefix ?? ""}${s.value}${s.suffix ?? ""}`, label: s.label, draft: !s.confirmed })),
    { k: "garanzia", big: "✓", label: "soddisfatti o rimborsati, per tutto il percorso" },
    { k: "call", big: "30'", label: "di call gratuita, senza impegno" },
    ...(RATING ? [{ k: "rating", big: `${RATING.value.toString().replace(".", ",")}★`, label: `su ${RATING.source} · ${RATING.count} recensioni` }] : []),
  ];
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-[var(--line)] bg-blush/40 py-4 md:py-5" role="region" aria-label="Numeri in evidenza">
      <div className="marquee-track">
        {[0, 1].map((n) => (
          <ul key={n} className="flex shrink-0 items-center" aria-hidden={n === 1}>
            {row.map((i, idx) => (
              <li key={`${i.k}-${idx}`} className="flex items-baseline gap-3 whitespace-nowrap px-8 md:px-10">
                <span className="font-display text-4xl md:text-5xl kw leading-none">{i.big}</span>
                <span className="text-sm md:text-base text-ink/80">{i.label}{draft && i.draft && <span className="ml-2 rounded bg-rose/15 px-1.5 text-[0.65rem] uppercase tracking-wider text-rose">da confermare</span>}</span>
                <span className="pl-8 md:pl-10 text-rose" aria-hidden>✦</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
