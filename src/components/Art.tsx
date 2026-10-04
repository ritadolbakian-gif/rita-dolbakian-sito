import { useId } from "react";

export type ArtVariant = "arch" | "stones" | "waves" | "orbs" | "leaf";
const ORDER: ArtVariant[] = ["arch", "stones", "waves", "orbs", "leaf"];

export function pickArt(seed: string): ArtVariant {
  let h = 0;
  for (const c of seed) h = (h * 31 + c.charCodeAt(0)) | 0;
  return ORDER[Math.abs(h) % ORDER.length];
}

/** Illustrazioni generative nei colori del brand. Sostituite dalle foto reali quando arrivano. */
export function Art({ variant }: { variant: ArtVariant }) {
  const id = useId().replace(/:/g, "");
  const bg = `bg${id}`, glow = `gl${id}`, ro = `ro${id}`;
  return (
    <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" className="art" aria-hidden>
      <defs>
        <linearGradient id={bg} x1="0" y1="0" x2="1" y2="1"><stop offset="0" style={{ stopColor: "var(--art-1)" }} /><stop offset="1" style={{ stopColor: "var(--art-2)" }} /></linearGradient>
        <radialGradient id={glow} cx=".5" cy=".5" r=".5"><stop offset="0" style={{ stopColor: "var(--rose)", stopOpacity: 0.85 }} /><stop offset="1" style={{ stopColor: "var(--rose)", stopOpacity: 0 }} /></radialGradient>
        <linearGradient id={ro} x1="0" y1="0" x2="0" y2="1"><stop offset="0" style={{ stopColor: "var(--rose)" }} /><stop offset="1" style={{ stopColor: "var(--art-3)" }} /></linearGradient>
      </defs>
      <rect width="400" height="500" fill={`url(#${bg})`} />
      {variant === "arch" && (<>
        <circle className="float" cx="270" cy="150" r="70" fill={`url(#${ro})`} />
        <path d="M60 500V260a140 140 0 0 1 280 0v240z" style={{ fill: "var(--art-fg)", opacity: 0.55 }} />
        <path d="M110 500V270a90 90 0 0 1 180 0v230z" style={{ fill: "var(--art-fg)", opacity: 0.55 }} />
        {[0, 1, 2, 3].map((i) => <circle key={i} cx="270" cy="150" r={95 + i * 26} fill="none" style={{ stroke: "var(--art-line)" }} strokeWidth="1" />)}
      </>)}
      {variant === "stones" && (<>
        <circle cx="200" cy="260" r="190" fill={`url(#${glow})`} opacity=".5" />
        {[[200, 400, 150, 36, 1], [200, 350, 118, 30, 0.8], [200, 308, 88, 25, 0.9], [200, 272, 58, 20, 0.7]].map(([x, y, rx, ry, o], i) => (
          <ellipse key={i} className="float" style={{ animationDelay: `${i * 0.4}s`, fill: i % 2 ? "var(--art-fg)" : "var(--rose)", opacity: o as number }} cx={x} cy={y} rx={rx} ry={ry} />
        ))}
        {[0, 1, 2].map((i) => <ellipse key={i} cx="200" cy="438" rx={170 + i * 28} ry={20 + i * 6} fill="none" style={{ stroke: "var(--art-line)" }} />)}
      </>)}
      {variant === "waves" && (<>
        <circle cx="300" cy="120" r="60" fill={`url(#${ro})`} className="float" />
        {Array.from({ length: 12 }).map((_, i) => (
          <path key={i} d={`M-20 ${200 + i * 22} C 80 ${150 + i * 22}, 160 ${260 + i * 22}, 260 ${200 + i * 22} S 380 ${150 + i * 22}, 440 ${210 + i * 22}`} fill="none" strokeWidth={i % 4 === 0 ? 2.2 : 1} style={{ stroke: i % 4 === 0 ? "var(--rose)" : "var(--art-line)" }} />
        ))}
      </>)}
      {variant === "orbs" && (<>
        <circle className="float" cx="150" cy="190" r="120" fill={`url(#${glow})`} />
        <circle cx="150" cy="190" r="100" style={{ fill: "var(--art-fg)", opacity: 0.55 }} />
        <circle className="float" style={{ animationDelay: "1s" }} cx="250" cy="320" r="110" fill={`url(#${ro})`} opacity=".9" />
        <circle cx="120" cy="380" r="46" fill="none" style={{ stroke: "var(--art-line)" }} strokeWidth="1.5" />
        <circle cx="120" cy="380" r="70" fill="none" style={{ stroke: "var(--art-line)" }} />
      </>)}
      {variant === "leaf" && (<>
        <circle cx="200" cy="250" r="170" fill={`url(#${glow})`} opacity=".35" />
        <path d="M200 520C190 420 205 320 200 160" fill="none" strokeWidth="2" style={{ stroke: "var(--art-line)" }} />
        {[[160, 0], [150, 1], [140, 2], [130, 3], [120, 4]].map(([y0, i]) => (
          <g key={i}>
            <ellipse cx={170 - (i as number) * 4} cy={(y0 as number) + 100 + (i as number) * 40} rx="62" ry="20" transform={`rotate(-28 ${170 - (i as number) * 4} ${(y0 as number) + 100 + (i as number) * 40})`} style={{ fill: i % 2 ? "var(--art-fg)" : "var(--rose)", opacity: i % 2 ? 0.6 : 0.85 }} />
            <ellipse cx={232 + (i as number) * 4} cy={(y0 as number) + 130 + (i as number) * 40} rx="62" ry="20" transform={`rotate(28 ${232 + (i as number) * 4} ${(y0 as number) + 130 + (i as number) * 40})`} style={{ fill: i % 2 ? "var(--rose)" : "var(--art-fg)", opacity: i % 2 ? 0.8 : 0.6 }} />
          </g>
        ))}
      </>)}
    </svg>
  );
}
