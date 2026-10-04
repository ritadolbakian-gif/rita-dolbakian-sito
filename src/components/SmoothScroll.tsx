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
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return <div aria-hidden className={`cursor-dot ${big ? "big" : ""}`} style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }} />;
}
