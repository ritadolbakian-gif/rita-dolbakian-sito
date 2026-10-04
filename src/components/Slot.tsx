/** Spazio riservato a foto o video di Rita. Sostituire con <Image> / <video> quando i file arrivano. */
export function Slot({ kind = "foto", label, ratio = "4/5", className = "" }: { kind?: "foto" | "video"; label: string; ratio?: string; className?: string }) {
  return (
    <div className={`slot ${className}`} style={{ aspectRatio: ratio }} data-slot={kind} role="img" aria-label={`Segnaposto ${kind}: ${label}`}>
      <div>
        {kind === "video" && (
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none" className="mx-auto mb-3" aria-hidden>
            <circle cx="28" cy="28" r="27" stroke="currentColor" strokeOpacity=".5" />
            <path d="M23 19l15 9-15 9z" fill="currentColor" fillOpacity=".7" />
          </svg>
        )}
        <p className="slot-label">{kind} · {label}<br />{ratio.replace("/", ":")}</p>
      </div>
    </div>
  );
}
