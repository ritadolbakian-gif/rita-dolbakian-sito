"use client";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Heading } from "./Motion";
import { Slot } from "./Slot";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 90]);
  const fade = (d: number) => ({ initial: reduce ? false : { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.9, delay: d, ease: [0.22, 1, 0.36, 1] as const } });

  return (
    <section ref={ref} className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="wrap grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.p {...fade(0.1)} className="eyebrow mb-6">Rita Dolbakian Academy</motion.p>
          <Heading as="h1" text="Il benessere è il tuo mestiere. *L'agenda piena* è il tuo diritto." className="text-[clamp(2.9rem,7.2vw,6.4rem)]" delay={0.2} immediate />
          <motion.p {...fade(0.9)} className="mt-8 max-w-xl text-lg text-stone">
            Formazione per chi lavora nel benessere e per chi vuole imparare a massaggiare davvero. Con Rita Dolbakian, massaggiatrice e formatrice da oltre dieci anni.
          </motion.p>
          <motion.div {...fade(1.05)} className="mt-10 flex flex-wrap gap-4">
            <Link href="/call-orientamento" className="btn btn-primary">Prenota la call gratuita <span className="arr">→</span></Link>
            <Link href="/percorsi" className="btn btn-ghost">Scopri i percorsi</Link>
          </motion.div>
          <motion.p {...fade(1.2)} className="mt-6 text-sm text-stone">
            30 minuti · nessun obbligo · nessuno spam &nbsp;|&nbsp; <span className="opacity-70">[DA CONFERMARE: numero allieve / recensioni]</span>
          </motion.p>
        </div>
        <motion.div style={{ y }} className="relative">
          <motion.div {...fade(0.4)}>
            <Slot kind="foto" label="Ritratto di Rita (hero)" ratio="4/5" className="!rounded-t-[999px]" />
          </motion.div>
          <div className="absolute -left-6 bottom-10 hidden md:block bg-ink text-ivory rounded-full px-6 py-4 text-sm shadow-xl">
            <span className="font-display text-2xl kw">10+</span> anni nel benessere
          </div>
        </motion.div>
      </div>
    </section>
  );
}
