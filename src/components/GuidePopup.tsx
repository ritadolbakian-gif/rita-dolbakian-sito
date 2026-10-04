"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { LeadForm } from "./LeadForm";

const KEY = "rd-guide-popup-v1";
const SKIP = ["/guida-gratuita", "/call-orientamento", "/area-privata", "/privacy", "/cookie", "/termini", "/rimborsi"];

/** Popup gentile: una sola volta, dopo 35 secondi o a metà pagina. Mai sulle pagine di conversione. */
export function GuidePopup() {
  const path = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let seen = false;
    try { seen = !!localStorage.getItem(KEY); } catch {}
    if (seen || SKIP.some((s) => path.startsWith(s))) return;
    const show = () => { setOpen(true); try { localStorage.setItem(KEY, "1"); } catch {} cleanup(); };
    const onScroll = () => { if (window.scrollY > (document.body.scrollHeight - innerHeight) * 0.55) show(); };
    const t = window.setTimeout(show, 35000);
    const cleanup = () => { window.clearTimeout(t); window.removeEventListener("scroll", onScroll); };
    window.addEventListener("scroll", onScroll, { passive: true });
    return cleanup;
  }, [path]);

  useEffect(() => {
    if (!open) return;
    const k = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [open]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[75] grid place-items-center p-4 bg-ink/60 backdrop-blur-sm" onClick={() => setOpen(false)}>
      <div role="dialog" aria-modal="true" aria-label="Guida gratuita" onClick={(e) => e.stopPropagation()} className="relative w-full max-w-lg rounded-[2rem] bg-ivory p-8 md:p-10 shadow-2xl">
        <button onClick={() => setOpen(false)} aria-label="Chiudi" className="absolute right-4 top-4 size-11 grid place-items-center text-xl">✕</button>
        <p className="eyebrow">Prima di andare</p>
        <h2 className="font-display text-4xl mt-3 leading-[1.05]">I primi 10 clienti online, <em className="kw">con ordine</em>.</h2>
        <p className="mt-3 text-stone text-[0.95rem]">Ti mando la guida pratica di Rita. Gratis, una sola email, senza spam.</p>
        <div className="mt-6"><LeadForm tipo="guida" cta="Mandami la guida" compact /></div>
        <button onClick={() => setOpen(false)} className="mt-4 text-sm text-stone">No grazie, forse un'altra volta</button>
      </div>
    </div>
  );
}
