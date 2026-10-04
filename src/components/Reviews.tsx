"use client";
import { useEffect, useRef, useState } from "react";
import { RATING, REVIEWS, REVIEW_SOURCES } from "@/lib/proof";
import { Heading, Reveal } from "./Motion";

const Stars = ({ n }: { n: number }) => <span aria-label={`${n} stelle su 5`} className="text-rose tracking-widest">{"★".repeat(n)}<span className="text-ink/20">{"★".repeat(5 - n)}</span></span>;

/** Widget Trustpilot (TrustBox): si carica solo con il consenso ai cookie di marketing. */
function Trustpilot() {
  const { businessUnitId, templateId } = REVIEW_SOURCES.trustpilot;
  const ref = useRef<HTMLDivElement>(null);
  const [ok, setOk] = useState(false);
  useEffect(() => {
    if (!businessUnitId) return;
    const on = (e: Event) => { const c = (e as CustomEvent).detail; if (c?.marketing) setOk(true); };
    window.addEventListener("rd-consent", on);
    try { const v = JSON.parse(localStorage.getItem("rd-consent-v1") || "null"); if (v?.marketing) setOk(true); } catch {}
    return () => window.removeEventListener("rd-consent", on);
  }, [businessUnitId]);
  useEffect(() => {
    if (!ok || !ref.current) return;
    const w = window as unknown as { Trustpilot?: { loadFromElement: (el: HTMLElement, f?: boolean) => void } };
    const run = () => w.Trustpilot?.loadFromElement(ref.current!, true);
    if (w.Trustpilot) { run(); return; }
    const sc = document.createElement("script");
    sc.src = "https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js";
    sc.async = true; sc.onload = run; document.body.appendChild(sc);
  }, [ok]);
  if (!businessUnitId) return null;
  return ok ? (
    <div ref={ref} className="trustpilot-widget mt-8" data-locale="it-IT" data-template-id={templateId} data-businessunit-id={businessUnitId} data-style-height="52px" data-style-width="100%" data-theme="light">
      <a href={REVIEW_SOURCES.trustpilot.profileUrl} target="_blank" rel="noopener">Trustpilot</a>
    </div>
  ) : <p className="mt-6 text-sm text-stone">Per vedere il widget Trustpilot accetta i cookie di marketing dal banner, oppure <a className="ulink text-ink" href={REVIEW_SOURCES.trustpilot.profileUrl || "#"} target="_blank" rel="noopener">leggi le recensioni su Trustpilot</a>.</p>;
}

export function ReviewsSection({ title = "Cosa dicono *di me* online." }: { title?: string }) {
  const g = REVIEW_SOURCES.google, t = REVIEW_SOURCES.trustpilot;
  const has = g.profileUrl || g.reviewUrl || t.profileUrl || t.reviewUrl || t.businessUnitId || REVIEWS.length || RATING;
  return (
    <section className="section bg-blush/30">
      <div className="wrap">
        <p className="eyebrow mb-6 flex items-center gap-3"><span className="inline-block h-px w-8 bg-rose" />Recensioni</p>
        <Heading text={title} className="text-5xl md:text-6xl max-w-3xl" />
        <div className="mt-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div className="rounded-3xl bg-ivory p-8 h-full">
              {RATING ? (
                <>
                  <p className="font-display text-8xl kw leading-none">{RATING.value.toString().replace(".", ",")}</p>
                  <p className="mt-2"><Stars n={Math.round(RATING.value)} /></p>
                  <p className="mt-2 text-stone">{RATING.count} recensioni su {RATING.source}</p>
                </>
              ) : (
                <>
                  <p className="font-display text-6xl kw leading-none">★★★★★</p>
                  <p className="mt-3 text-stone">Qui compare la valutazione media delle recensioni reali. <span className="tbc">[DA CONFERMARE: collega Google e/o Trustpilot]</span></p>
                </>
              )}
              <div className="mt-6 flex flex-col gap-3">
                {g.profileUrl && <a href={g.profileUrl} target="_blank" rel="noopener" className="btn btn-ghost justify-center">Leggi le recensioni su Google</a>}
                {g.reviewUrl && <a href={g.reviewUrl} target="_blank" rel="noopener" className="btn btn-primary justify-center">Lascia una recensione su Google</a>}
                {t.profileUrl && <a href={t.profileUrl} target="_blank" rel="noopener" className="btn btn-ghost justify-center">Leggi le recensioni su Trustpilot</a>}
                {t.reviewUrl && <a href={t.reviewUrl} target="_blank" rel="noopener" className="btn btn-primary justify-center">Lascia una recensione su Trustpilot</a>}
                {!has && <p className="text-sm text-stone">Pulsanti «Leggi» e «Lascia una recensione» per Google e Trustpilot compaiono qui appena inserisci gli indirizzi in <code>src/lib/proof.ts</code>.</p>}
              </div>
              <Trustpilot />
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {REVIEWS.length > 0
              ? REVIEWS.slice(0, 6).map((r, i) => (
                  <Reveal key={r.author + i} delay={(i % 2) * 0.08}>
                    <figure className="h-full rounded-3xl bg-ivory p-6 flex flex-col">
                      <Stars n={r.rating} />
                      <blockquote className="mt-3 flex-1 text-[0.97rem]">«{r.text}»</blockquote>
                      <figcaption className="mt-4 text-sm"><span className="font-medium">{r.author}</span> · <span className="text-stone">{r.source === "google" ? "Google" : "Trustpilot"}{r.date ? `, ${r.date}` : ""}</span></figcaption>
                    </figure>
                  </Reveal>
                ))
              : [0, 1, 2, 3].map((i) => (
                  <div key={i} className="rounded-3xl border border-dashed border-rose/50 p-6 text-sm text-stone">
                    <Stars n={5} /><p className="mt-3">Qui va una recensione reale, copiata da Google o Trustpilot.</p><p className="mt-3">[Nome] · [fonte]</p>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/** Piccolo badge nel hero: compare solo se hai una valutazione reale. */
export function ReviewBadge() {
  if (!RATING) return null;
  const href = REVIEW_SOURCES.google.profileUrl || REVIEW_SOURCES.trustpilot.profileUrl || "#";
  return <a href={href} target="_blank" rel="noopener" className="mt-5 inline-flex items-center gap-3 rounded-full border border-[var(--line)] bg-ivory/70 px-4 min-h-11 text-sm backdrop-blur"><Stars n={Math.round(RATING.value)} /><span><b>{RATING.value.toString().replace(".", ",")}</b> · {RATING.count} recensioni su {RATING.source}</span></a>;
}
