"use client";
import { useEffect, useState } from "react";

type Consent = { analytics: boolean; marketing: boolean };
const KEY = "rd-consent-v1";

function read(): Consent | null { try { const v = localStorage.getItem(KEY); return v ? JSON.parse(v) : null; } catch { return null; } }
function save(c: Consent) {
  try { localStorage.setItem(KEY, JSON.stringify(c)); } catch {}
  window.dispatchEvent(new CustomEvent("rd-consent", { detail: c })); // GA4 / Meta Pixel si agganciano qui, solo se consentito
}

export function CookieBanner() {
  const [open, setOpen] = useState(false);
  const [custom, setCustom] = useState(false);
  const [c, setC] = useState<Consent>({ analytics: false, marketing: false });

  useEffect(() => {
    const cur = read();
    // lettura di localStorage solo dopo il mount (evita mismatch di idratazione)
    /* eslint-disable react-hooks/set-state-in-effect */
    if (!cur) setOpen(true); else { setC(cur); window.dispatchEvent(new CustomEvent("rd-consent", { detail: cur })); }
    /* eslint-enable react-hooks/set-state-in-effect */
    const reopen = () => { setCustom(true); setOpen(true); };
    window.addEventListener("rd-open-cookies", reopen);
    return () => window.removeEventListener("rd-open-cookies", reopen);
  }, []);

  const choose = (v: Consent) => { save(v); setC(v); setOpen(false); };
  if (!open) return null;

  return (
    <div role="dialog" aria-modal="false" aria-label="Preferenze cookie" className="fixed z-[70] bottom-3 left-3 right-3 sm:left-6 sm:right-auto sm:max-w-md bg-ink text-ivory rounded-3xl p-6 shadow-2xl">
      <p className="font-display text-2xl">Un <em className="kw">attimo</em> sui cookie.</p>
      <p className="mt-2 text-sm text-ivory/70">Uso cookie tecnici per far funzionare il sito. Analisi e marketing solo se acconsenti. Dettagli nella <a href="/cookie" className="ulink">cookie policy</a>.</p>
      {custom && (
        <div className="mt-4 space-y-3 text-sm">
          <label className="flex justify-between"><span>Tecnici (necessari)</span><input type="checkbox" checked disabled className="size-5" /></label>
          <label className="flex justify-between"><span>Analisi</span><input type="checkbox" checked={c.analytics} onChange={(e) => setC({ ...c, analytics: e.target.checked })} className="size-5 accent-[var(--rose)]" /></label>
          <label className="flex justify-between"><span>Marketing</span><input type="checkbox" checked={c.marketing} onChange={(e) => setC({ ...c, marketing: e.target.checked })} className="size-5 accent-[var(--rose)]" /></label>
        </div>
      )}
      <div className="mt-5 flex flex-wrap gap-2">
        <button onClick={() => choose({ analytics: false, marketing: false })} className="btn btn-ghost !w-auto !min-h-11 !py-2 !px-5 text-sm">Rifiuta tutto</button>
        {custom
          ? <button onClick={() => choose(c)} className="btn btn-primary !w-auto !min-h-11 !py-2 !px-5 text-sm">Salva scelta</button>
          : <><button onClick={() => setCustom(true)} className="btn btn-ghost !w-auto !min-h-11 !py-2 !px-5 text-sm">Personalizza</button>
              <button onClick={() => choose({ analytics: true, marketing: true })} className="btn btn-primary !w-auto !min-h-11 !py-2 !px-5 text-sm">Accetta tutto</button></>}
      </div>
    </div>
  );
}

export function CookiePrefsLink() {
  return <button onClick={() => window.dispatchEvent(new Event("rd-open-cookies"))} className="flink text-left">Preferenze cookie</button>;
}
