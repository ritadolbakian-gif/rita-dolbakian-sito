"use client";
import Link from "next/link";
import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Heading } from "./Motion";
import { Slot } from "./Slot";
import { CountUp } from "./CountUp";
import { ReviewBadge } from "./Reviews";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const reduce = reduceMotion;
  const fade = (d: number) => ({ initial: reduce ? false : { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.9, delay: d, ease: [0.22, 1, 0.36, 1] as const } });

  return (
    <section ref={ref} data-hero-dark className="section-dark relative overflow-hidden pt-0 pb-14 md:pt-40 md:pb-28">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[104vw] md:hidden" aria-hidden>
          <Slot id="home-bg-m" priority raw sizes="100vw" label="Sfondo" ratio="16/9" className="!absolute !inset-0 !h-full !w-full !rounded-none [aspect-ratio:auto!important]" art="orbs" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink from-2% via-ink/60 via-35% to-ink/10" />
        </div>
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[58%] md:block" aria-hidden>
        <Slot id="home-bg" priority raw sizes="58vw" label="Sfondo" ratio="16/9" className="!absolute !inset-0 !h-full !w-full !rounded-none [aspect-ratio:auto!important]" art="orbs" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink from-0% via-ink/30 via-25% to-transparent" />
      </div>
      <div className="wrap relative pt-[62vw] md:pt-0">
        <div className="max-w-4xl">
          <motion.p {...fade(0.1)} className="eyebrow mb-6 flex items-center gap-3"><span className="inline-block h-px w-10 bg-rose" />Per operatrici e operatori del benessere</motion.p>
          <Heading as="h1" text="Sei un operatore del benessere e vuoi *più clienti*, prezzi più alti e un'agenda piena?" className="text-[clamp(2.3rem,6vw,5.2rem)]" delay={0.2} immediate />
          <motion.p {...fade(0.9)} className="mt-8 max-w-xl text-lg text-ivory/75">
            Allora sei nel posto giusto. Sono Rita Dolbakian, massaggiatrice e formatrice da oltre dieci anni: ti do il metodo per farti trovare e scegliere, senza svenderti e senza dipendere dal passaparola. E se vuoi imparare a massaggiare con mani sicure, c'è anche quello.
          </motion.p>
          <motion.div {...fade(1.05)} className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link href="/call-orientamento" className="btn btn-primary justify-center">Prenota 30 minuti gratis <span className="arr">→</span></Link>
            <Link href="/percorsi" className="btn btn-ghost justify-center">Trova il tuo percorso</Link>
          </motion.div>
          <motion.p {...fade(1.2)} className="mt-6 text-sm text-ivory/60">30 minuti · nessun obbligo · nessuno spam</motion.p>
          <motion.div {...fade(1.3)} className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
            <span className="flex items-baseline gap-2"><span className="font-display text-5xl kw leading-none"><CountUp to={10} suffix="+" /></span><span className="text-sm leading-tight text-ivory/70">anni<br />nel benessere</span></span>
            <span className="text-sm leading-tight text-ivory/70">Online<br />+ in presenza</span>
          </motion.div>
          <div className="[&_a]:!border-white/20 [&_a]:!bg-white/10 [&_a]:!text-ivory"><ReviewBadge /></div>
        </div>
      </div>
    </section>
  );
}
