"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { NAV } from "@/lib/site";

const PERCORSI = [
  { href: "/percorsi/metodo-agenda", t: "Metodo A.G.E.N.D.A.", d: "Per chi lavora nel benessere e vuole più clienti" },
  { href: "/percorsi/wellness-mastery", t: "Wellness Mastery", d: "Il percorso completo da operatrice a imprenditrice" },
  { href: "/percorsi/metodo-rita-dolbakian", t: "Metodo Rita Dolbakian", d: "Impara a massaggiare, online e in presenza" },
];

const Lock = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden><rect x="4" y="11" width="16" height="10" rx="2.5" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></svg>
);

function Progress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.2 });
  return <motion.div className="progress" style={{ scaleX }} aria-hidden />;
}

export function Header() {
  const path = usePathname();
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const [onDark, setOnDark] = useState(false);
  useEffect(() => {
    const on = () => {
      setSolid(window.scrollY > 40);
      const el = document.querySelector("[data-hero-dark]");
      setOnDark(!!el && el.getBoundingClientRect().bottom > 70);
    };
    on();
    const t = window.setTimeout(on, 150); // dopo il render della nuova pagina
    window.addEventListener("scroll", on, { passive: true });
    return () => { window.clearTimeout(t); window.removeEventListener("scroll", on); };
  }, [path]);
  const light = onDark && !solid;
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; }, [open]);
  const cur = (href: string) => (path === href || (href !== "/" && path.startsWith(href)) ? "page" : undefined);

  return (
    <>
      <Progress />
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${light ? "hdr-light text-ivory" : ""} ${solid ? "bg-ivory/80 backdrop-blur-xl shadow-[0_1px_0_var(--line)] py-2" : "py-3 md:py-5"}`}>
        <div className="wrap flex items-center justify-between gap-4">
          <Link href="/" className="shrink-0" aria-label="Rita Dolbakian, home"><Image src={light ? "/media/logo-light-compact.png" : "/media/logo-compact.png"} alt="Rita Dolbakian" width={1971} height={372} priority className={`w-auto transition-all duration-500 ${solid ? "h-10 md:h-11" : "h-11 md:h-14"}`} /></Link>

          <nav className="hidden xl:flex items-center" aria-label="Principale">
            {NAV.map((n) =>
              n.href === "/percorsi" ? (
                <div key={n.href} className="group relative">
                  <Link href={n.href} className="navlink" aria-current={cur(n.href)}>{n.label}<svg width="9" height="9" viewBox="0 0 10 10" className="transition-transform duration-300 group-hover:rotate-180" aria-hidden><path d="M1 3l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg></Link>
                  <div className="invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-0 transition-all duration-300 absolute left-1/2 -translate-x-1/2 top-full pt-4">
                    <div className="w-[26rem] rounded-3xl bg-ivory text-ink p-3 shadow-[0_30px_80px_-20px_rgba(11,10,9,.35)] ring-1 ring-[var(--line)]">
                      {PERCORSI.map((p) => (
                        <Link key={p.href} href={p.href} className="group/i flex items-center justify-between gap-4 rounded-2xl p-4 transition-colors hover:bg-blush/50">
                          <span><span className="block font-display text-2xl leading-tight">{p.t}</span><span className="block text-sm text-stone">{p.d}</span></span>
                          <span className="text-rose transition-transform duration-300 group-hover/i:translate-x-1">→</span>
                        </Link>
                      ))}
                      <Link href="/percorsi" className="mt-1 flex items-center justify-between rounded-2xl bg-ink text-ivory px-5 py-3 text-sm">Non sai da dove partire? Fai il test <span>→</span></Link>
                    </div>
                  </div>
                </div>
              ) : (
                <Link key={n.href} href={n.href} className="navlink" aria-current={cur(n.href)}>{n.label}</Link>
              ),
            )}
          </nav>

          <div className="flex items-center gap-2">
            <Link href="/area-privata" className={`hidden md:inline-flex items-center gap-2 rounded-full border px-4 min-h-11 text-sm transition-colors duration-300 ${light ? "border-ivory/40 hover:bg-ivory hover:text-ink hover:border-ivory" : "border-ink/20 hover:bg-ink hover:text-ivory hover:border-ink"}`}><Lock />Area Privata</Link>
            <Link href="/call-orientamento" className="btn btn-primary hidden md:inline-flex !min-h-11 !py-2.5">Prenota la call <span className="arr">→</span></Link>
            <button onClick={() => setOpen(true)} className="xl:hidden min-h-11 min-w-11 grid place-items-center" aria-label="Apri il menu" aria-expanded={open}>
              <span className="block w-7 space-y-2"><span className={`block h-px ${light ? "bg-ivory" : "bg-ink"}`} /><span className={`block h-px w-5 ml-auto ${light ? "bg-ivory" : "bg-ink"}`} /></span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div className="section-dark fixed inset-0 z-[60] flex flex-col overflow-y-auto"
            initial={{ clipPath: "circle(0% at 90% 5%)" }} animate={{ clipPath: "circle(150% at 90% 5%)" }} exit={{ clipPath: "circle(0% at 90% 5%)" }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
            <div className="wrap flex justify-between items-center py-5">
              <Image src="/media/logo-light-compact.png" alt="Rita Dolbakian" width={1971} height={372} className="h-11 w-auto" />
              <button onClick={() => setOpen(false)} className="min-h-11 min-w-11 text-2xl" aria-label="Chiudi il menu">✕</button>
            </div>
            <nav className="wrap flex-1 flex flex-col justify-center gap-2 py-6" aria-label="Menu mobile">
              {NAV.map((n, i) => (
                <motion.div key={n.href} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 + i * 0.06 }}>
                  <Link href={n.href} onClick={() => setOpen(false)} className="font-display text-4xl sm:text-5xl flex items-baseline gap-4 py-1"><span className="eyebrow !text-ivory/40 w-6">0{i + 1}</span>{n.label}</Link>
                </motion.div>
              ))}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/call-orientamento" onClick={() => setOpen(false)} className="btn btn-primary justify-center">Prenota la call <span className="arr">→</span></Link>
                <Link href="/area-privata" onClick={() => setOpen(false)} className="btn btn-ghost justify-center"><Lock />Area Privata</Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function StickyCta() {
  const path = usePathname();
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 700);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  if (path.startsWith("/call-orientamento") || path.startsWith("/area-privata")) return null;
  return (
    <div className={`sm:hidden fixed inset-x-3 z-40 transition-all duration-500 ${show ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0 pointer-events-none"}`} style={{ bottom: "max(0.75rem, env(safe-area-inset-bottom))" }}>
      <Link href="/call-orientamento" className="btn btn-primary w-full justify-center shadow-xl">Prenota la call gratuita</Link>
    </div>
  );
}
