"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Heading } from "./Motion";
import { Slot } from "./Slot";
import { CountUp } from "./CountUp";
import { ReviewBadge } from "./Reviews";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const [wide, setWide] = useState(false);
  useEffect(() => { const m = window.matchMedia("(min-width: 1024px)"); const f = () => setWide(m.matches); f(); m.addEventListener("change", f); return () => m.removeEventListener("change", f); }, []);
  const reduce = reduceMotion;
  const still = reduceMotion || !wide;
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], still ? [0, 0] : [0, 110]);
  const y2 = useTransform(scrollYProgress, [0, 1], still ? [0, 0] : [0, -70]);
  const fade = (d: number) => ({ initial: reduce ? false : { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.9, delay: d, ease: [0.22, 1, 0.36, 1] as const } });

  return (
    <section ref={ref} className="relative pt-28 pb-12 md:pt-40 md:pb-24 overflow-hidden">
      <div className="orb hidden md:block bg-blush/70 size-[34rem] -top-40 -right-40" aria-hidden />
      <div className="orb hidden md:block bg-rose/15 size-[22rem] bottom-0 -left-32" style={{ animationDelay: "2s" }} aria-hidden />
      <div className="wrap relative grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.p {...fade(0.1)} className="eyebrow mb-6 flex items-center gap-3"><span className="inline-block h-px w-10 bg-rose" />Per operatrici e operatori del benessere</motion.p>
          <Heading as="h1" text="Sei un operatore del benessere e vuoi *più clienti*, prezzi più alti e un'agenda piena?" className="text-[clamp(2.3rem,5.2vw,4.8rem)]" delay={0.2} immediate />
          <motion.p {...fade(0.9)} className="mt-8 max-w-xl text-lg text-stone">
            Allora sei nel posto giusto. Sono Rita Dolbakian, massaggiatrice e formatrice da oltre dieci anni: ti do il metodo per farti trovare e scegliere, senza svenderti e senza dipendere dal passaparola. E se vuoi imparare a massaggiare con mani sicure, c'è anche quello.
          </motion.p>
          <motion.div {...fade(1.05)} className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link href="/call-orientamento" className="btn btn-primary justify-center">Prenota 30 minuti gratis <span className="arr">→</span></Link>
            <Link href="/percorsi" className="btn btn-ghost justify-center">Trova il tuo percorso</Link>
          </motion.div>
          <motion.p {...fade(1.2)} className="mt-6 text-sm text-stone">30 minuti · nessun obbligo · nessuno spam</motion.p>
          <ReviewBadge />
        </div>
        <div className="relative">
          <motion.div style={{ y }}>
            <motion.div {...fade(0.4)}><Slot kind="foto" id="hero" label="Ritratto di Rita (hero)" ratio="4/5" art="arch" className="!rounded-t-[999px]" /></motion.div>
          </motion.div>
          <motion.div style={{ y: y2 }} className="absolute left-3 md:-left-10 bottom-6 md:bottom-12 bg-ink text-ivory rounded-full px-6 py-4 shadow-2xl flex items-baseline gap-2">
            <span className="font-display text-4xl kw leading-none"><CountUp to={10} suffix="+" /></span><span className="text-sm leading-tight">anni<br />nel benessere</span>
          </motion.div>
          <motion.div style={{ y: y2 }} className="absolute -right-3 top-16 hidden md:grid place-items-center size-24 rounded-full bg-rose text-white text-center text-[0.7rem] uppercase tracking-[0.14em] leading-snug rotate-12">Online<br />+<br />in presenza</motion.div>
        </div>
      </div>
    </section>
  );
}
