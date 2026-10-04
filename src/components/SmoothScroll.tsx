"use client";
import { useEffect, useState } from "react";
import Lenis from "lenis";

export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ lerp: 0.09 });
    let id = requestAnimationFrame(function raf(t) { lenis.raf(t); id = requestAnimationFrame(raf); });
    return () => { cancelAnimationFrame(id); lenis.destroy(); };
  }, []);
  return null;
}

export function Cursor() {
  const [pos, setPos] = useState({ x: -50, y: -50 });
  const [big, setBig] = useState(false);
  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setBig(!!(e.target as HTMLElement).closest("a,button"));
    };
    // Effetto magnetico sui pulsanti
    let el: HTMLElement | null = null;
    const mag = (e: MouseEvent) => {
      const b = (e.target as HTMLElement).closest<HTMLElement>(".btn");
      if (el && el !== b) { el.style.transform = ""; el = null; }
      if (!b) return;
      el = b;
      const r = b.getBoundingClientRect();
      b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.18}px, ${(e.clientY - r.top - r.height / 2) * 0.3}px)`;
    };
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.addEventListener("mousemove", move);
    if (fine) window.addEventListener("mousemove", mag);
    return () => { window.removeEventListener("mousemove", move); window.removeEventListener("mousemove", mag); };
  }, []);
  return <div aria-hidden className={`cursor-dot ${big ? "big" : ""}`} style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }} />;
}
