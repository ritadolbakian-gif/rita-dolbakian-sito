"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV } from "@/lib/site";

export function Header() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setSolid(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; }, [open]);

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${solid ? "bg-ivory/85 backdrop-blur-md border-b border-[var(--line)] py-3" : "py-5"}`}>
        <div className="wrap flex items-center justify-between">
          <Link href="/" className="font-display text-2xl leading-none" aria-label="Rita Dolbakian, home">
            Rita <em className="kw">Dolbakian</em>
          </Link>
          <nav className="hidden lg:flex items-center gap-8 text-sm" aria-label="Principale">
            {NAV.map((n) => <Link key={n.href} href={n.href} className="ulink">{n.label}</Link>)}
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/area-membri" className="hidden xl:inline text-xs text-stone ulink">Area membri</Link>
            <Link href="/call-orientamento" className="btn btn-primary hidden md:inline-flex !min-h-11 !py-2.5">Prenota la call <span className="arr">→</span></Link>
            <button onClick={() => setOpen(true)} className="lg:hidden min-h-11 min-w-11 grid place-items-center" aria-label="Apri il menu" aria-expanded={open}>
              <span className="block w-7 space-y-2"><span className="block h-px bg-ink" /><span className="block h-px bg-ink w-5 ml-auto" /></span>
            </button>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {open && (
          <motion.div
            className="section-dark fixed inset-0 z-[60] flex flex-col"
            initial={{ clipPath: "circle(0% at 90% 5%)" }}
            animate={{ clipPath: "circle(150% at 90% 5%)" }}
            exit={{ clipPath: "circle(0% at 90% 5%)" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="wrap flex justify-between items-center py-5">
              <span className="font-display text-2xl">Rita <em className="kw">Dolbakian</em></span>
              <button onClick={() => setOpen(false)} className="min-h-11 min-w-11 text-2xl" aria-label="Chiudi il menu">✕</button>
            </div>
            <nav className="wrap flex-1 flex flex-col justify-center gap-3" aria-label="Menu mobile">
              {NAV.map((n, i) => (
                <motion.div key={n.href} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 + i * 0.06 }}>
                  <Link href={n.href} onClick={() => setOpen(false)} className="font-display text-5xl">{n.label}</Link>
                </motion.div>
              ))}
              <Link href="/call-orientamento" onClick={() => setOpen(false)} className="btn btn-primary self-start mt-8">Prenota la call <span className="arr">→</span></Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function StickyCta() {
  return (
    <div className="sm:hidden fixed bottom-3 inset-x-3 z-40">
      <Link href="/call-orientamento" className="btn btn-primary w-full justify-center shadow-xl">Prenota la call gratuita</Link>
    </div>
  );
}
