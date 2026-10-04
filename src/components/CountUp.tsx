"use client";
import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

export function CountUp({ to, suffix = "", prefix = "" }: { to: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduce = useReducedMotion();
  useEffect(() => {
    if (!inView || !ref.current) return;
    const node = ref.current;
    if (reduce) { node.textContent = `${prefix}${to}${suffix}`; return; }
    const c = animate(0, to, { duration: 1.8, ease: [0.22, 1, 0.36, 1], onUpdate: (v) => { node.textContent = `${prefix}${Math.round(v)}${suffix}`; } });
    return () => c.stop();
  }, [inView, to, suffix, reduce]);
  return <span ref={ref}>{`${prefix}0${suffix}`}</span>;
}
