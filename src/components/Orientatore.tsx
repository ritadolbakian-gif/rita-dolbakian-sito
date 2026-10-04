"use client";
import Link from "next/link";
import { useState } from "react";

const STEPS = [
  { q: "Cosa fai oggi?", o: [
    { l: "Lavoro già nel benessere", s: { agenda: 2 } },
    { l: "Voglio iniziare a massaggiare", s: { rd: 3 } },
    { l: "Massaggio già e voglio perfezionarmi", s: { rd: 2 } },
  ] },
  { q: "Cosa vuoi cambiare?", o: [
    { l: "Più clienti e un'agenda stabile", s: { agenda: 3 } },
    { l: "Migliorare la mia tecnica", s: { rd: 3 } },
    { l: "Costruire un'attività online solida", s: { mastery: 3, agenda: 1 } },
  ] },
  { q: "Da dove vuoi partire?", o: [
    { l: "Con un confronto e un po' di orientamento", s: { agenda: 2 } },
    { l: "Con un percorso completo, a fondo", s: { mastery: 2, rd: 1 } },
    { l: "Prima leggo e capisco", s: { agenda: 1 } },
  ] },
] as const;

const RESULT = {
  agenda: { t: "Metodo A.G.E.N.D.A.", d: "Il primo affiancamento: direzione e continuità per la tua attività.", href: "/percorsi/metodo-agenda" },
  mastery: { t: "Wellness Mastery", d: "Il percorso completo per diventare imprenditrice digitale.", href: "/percorsi/wellness-mastery" },
  rd: { t: "Metodo Rita Dolbakian", d: "Imparare a massaggiare e perfezionare la tua tecnica, online e in presenza.", href: "/percorsi/metodo-rita-dolbakian" },
} as const;

export function Orientatore() {
  const [i, setI] = useState(0);
  const [score, setScore] = useState<Record<string, number>>({});
  const done = i >= STEPS.length;
  const best = (Object.keys(RESULT) as (keyof typeof RESULT)[]).sort((a, b) => (score[b] ?? 0) - (score[a] ?? 0))[0];

  const pick = (s: Record<string, number>) => {
    setScore((p) => { const n = { ...p }; for (const k in s) n[k] = (n[k] ?? 0) + s[k]; return n; });
    setI(i + 1);
  };

  return (
    <div className="section-dark rounded-[2rem] p-6 sm:p-8 md:p-14" aria-live="polite">
      {!done ? (
        <>
          <p className="eyebrow">Domanda {i + 1} di {STEPS.length}</p>
          <h3 className="font-display text-3xl sm:text-4xl md:text-5xl mt-4">{STEPS[i].q}</h3>
          <div className="mt-8 grid gap-3">
            {STEPS[i].o.map((o) => (
              <button key={o.l} onClick={() => pick(o.s as Record<string, number>)} className="text-left rounded-2xl border border-ivory/20 px-6 py-4 min-h-14 hover:border-rose hover:bg-ivory/5 transition-colors">
                {o.l}
              </button>
            ))}
          </div>
        </>
      ) : (
        <>
          <p className="eyebrow">Ti consiglio di iniziare da</p>
          <h3 className="font-display text-4xl sm:text-5xl md:text-6xl mt-4 kw">{RESULT[best].t}</h3>
          <p className="mt-4 text-ivory/70 max-w-xl">{RESULT[best].d}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href={RESULT[best].href} className="btn btn-primary">Scopri il percorso <span className="arr">→</span></Link>
            <button onClick={() => { setI(0); setScore({}); }} className="btn btn-ghost">Rifai il test</button>
          </div>
        </>
      )}
    </div>
  );
}
