export function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-[var(--line)] py-5 bg-blush/40" aria-hidden>
      <div className="marquee-track">
        {[0, 1].map((n) => (
          <div key={n} className="flex shrink-0">
            {row.map((t, i) => (
              <span key={i} className="font-display text-3xl md:text-4xl px-8 whitespace-nowrap">
                {t} <span className="kw px-4">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
