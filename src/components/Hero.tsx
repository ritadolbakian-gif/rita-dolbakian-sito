"use client";
import Link from "next/link";
import { useRef } from "react";
import { Heading } from "./Motion";
import { Slot } from "./Slot";
import { MEDIA } from "@/lib/media";

const BG = MEDIA["home-bg"]?.bg ?? "#0b0a09";
import { CountUp } from "./CountUp";
import { ReviewBadge } from "./Reviews";

export function Hero() {
  const ref = useRef<HTMLElement>(null);

  return (
    <section ref={ref} data-hero-dark style={{ backgroundColor: BG }} className="section-dark hero-solid relative overflow-hidden pt-0 pb-14 md:pt-40 md:pb-28">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[104vw] md:hidden" aria-hidden>
          <Slot id="home-bg-m" priority raw sizes="100vw" label="Sfondo" ratio="16/9" className="!absolute !inset-0 !h-full !w-full !rounded-none [aspect-ratio:auto!important]" art="orbs" />
          <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${BG} 2%, ${BG}99 35%, ${BG}1a)` }} />
        </div>
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[58%] md:block" aria-hidden>
        <Slot id="home-bg" priority raw sizes="58vw" label="Sfondo" ratio="16/9" className="!absolute !inset-0 !h-full !w-full !rounded-none [aspect-ratio:auto!important]" art="orbs" />
        <div className="absolute inset-0" style={{ background: `linear-gradient(to right, ${BG} 0%, ${BG}cc 10%, ${BG}4d 28%, transparent 55%)` }} />
      </div>
      <div className="wrap relative pt-[62vw] md:pt-0">
        <div className="max-w-4xl">
          <p className="rd-fade eyebrow mb-6 flex items-center gap-3" style={{ animationDelay: "0.1s" }}><span className="inline-block h-px w-10 bg-rose" />Per operatrici e operatori del benessere</p>
          <Heading as="h1" text="Sei un operatore del benessere e vuoi *più clienti*, prezzi più alti e un'agenda piena?" className="text-[clamp(2.3rem,6vw,5.2rem)]" delay={0.2} immediate />
          <p className="rd-fade mt-8 max-w-xl text-lg text-ivory/75" style={{ animationDelay: "0.9s" }}>
            Allora sei nel posto giusto. Sono Rita Dolbakian. Per 13 anni ho massaggiato nelle case più esclusive di Milano: imprenditori, volti della TV, dello spettacolo e dello sport.
          </p>
          <p className="rd-fade mt-4 max-w-xl text-lg text-ivory/75" style={{ animationDelay: "0.98s" }}>
            Ho imparato come ci si fa scegliere da clienti così, e dal 2024 lo insegno attraverso la mia Srl: per aiutarti a trovare la tua identità, riempire l'agenda e fatturare fino a 10.000 € al mese.
          </p>
          <div className="rd-fade mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4" style={{ animationDelay: "1.05s" }}>
            <Link href="/call-orientamento" className="btn btn-primary justify-center">Prenota la call <span className="arr">→</span></Link>
            <Link href="/percorsi" className="btn btn-ghost justify-center">Trova il tuo percorso</Link>
          </div>
          <p className="rd-fade mt-6 text-sm text-ivory/60" style={{ animationDelay: "1.2s" }}>Call gratuita in videochiamata</p>
          <div className="rd-fade mt-8 flex flex-wrap items-center gap-x-8 gap-y-4" style={{ animationDelay: "1.3s" }}>
            <span className="flex items-baseline gap-2"><span className="font-display text-5xl kw leading-none"><CountUp to={13} /></span><span className="text-sm leading-tight text-ivory/70">anni<br />nel benessere</span></span>
            <span className="text-sm leading-tight text-ivory/70">Online<br />+ in presenza</span>
          </div>
          <div className="[&_a]:!border-white/20 [&_a]:!bg-white/10 [&_a]:!text-ivory"><ReviewBadge /></div>
        </div>
      </div>
    </section>
  );
}
