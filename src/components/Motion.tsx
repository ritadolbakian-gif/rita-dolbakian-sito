"use client";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export function Reveal({ children, delay = 0, className = "", y = 28 }: { children: ReactNode; delay?: number; className?: string; y?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

/** Titolo a righe con maschera. Le parole tra *asterischi* diventano corsivo rosa. */
export function Heading({ text, as: Tag = "h2", className = "", delay = 0, immediate = false }: { text: string; as?: "h1" | "h2" | "h3"; className?: string; delay?: number; immediate?: boolean }) {
  const reduce = useReducedMotion();
  const parts = text.split(/(\*[^*]+\*)/g).filter(Boolean);
  let i = 0;
  const words: { w: string; kw: boolean; k: number; glue?: boolean }[] = [];
  parts.forEach((p) => {
    if (words.length && /^[.,;:!?)]/.test(p)) words[words.length - 1].glue = true;
    const kw = p.startsWith("*");
    p.replace(/\*/g, "").split(" ").filter(Boolean).forEach((w) => words.push({ w, kw, k: i++ }));
  });
  return (
    <Tag className={`font-display ${className}`} aria-label={text.replace(/\*/g, "")}>
      <span aria-hidden>
        {words.map(({ w, kw, k, glue }) => (
          <span key={k} className={`inline-block overflow-hidden align-bottom pb-[0.12em] -mb-[0.12em] ${glue ? "" : "mr-[0.26em]"}`}>
            <motion.span
              className={`inline-block ${kw ? "kw" : ""}`}
              initial={reduce ? false : { y: "110%" }}
              {...(immediate ? { animate: { y: 0 } } : { whileInView: { y: 0 }, viewport: { once: true, margin: "-60px" } })}
              transition={{ duration: 0.9, delay: delay + k * 0.045, ease }}
            >
              {w}
            </motion.span>
          </span>
        ))}
      </span>
    </Tag>
  );
}
