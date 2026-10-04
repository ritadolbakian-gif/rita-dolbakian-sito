"use client";
import { useState } from "react";

export function LeadForm({ tipo, cta, withMessage = false, phone = true, compact = false }: { tipo: "guida" | "contatti"; cta: string; withMessage?: boolean; phone?: boolean; compact?: boolean }) {
  const [state, setState] = useState<"idle" | "sending" | "ok" | "err">("idle");
  const [msg, setMsg] = useState("");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    setState("sending");
    try {
      const r = await fetch("/api/lead", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tipo, ...Object.fromEntries(f), privacy: f.get("privacy") === "on", marketing: f.get("marketing") === "on" }),
      });
      if (r.ok) { setState("ok"); return; }
      const j = await r.json().catch(() => ({}));
      setMsg(j.error === "not_configured" ? "Il modulo non è ancora attivo. Riprova tra poco oppure scrivici sui social." : j.error === "invalid" ? "Controlla nome, email e consenso privacy." : "Qualcosa non ha funzionato. Riprova tra un momento.");
      setState("err");
    } catch { setMsg("Connessione assente. Riprova tra un momento."); setState("err"); }
  }

  if (state === "ok") return <p role="status" className="font-display text-3xl">Ti ho appena scritto. <em className="kw">Controlla la posta</em>, anche nello spam.</p>;

  return (
    <form onSubmit={submit} className="grid gap-6" noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="field"><span>Nome</span><input name="nome" required autoComplete="given-name" /></label>
        {!compact && <label className="field"><span>Cognome</span><input name="cognome" autoComplete="family-name" /></label>}
        {compact && <label className="field"><span>Email</span><input name="email" type="email" required autoComplete="email" /></label>}
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        {!compact && <label className="field"><span>Email</span><input name="email" type="email" required autoComplete="email" /></label>}
        {phone && !compact && <label className="field"><span>Telefono</span><input name="telefono" type="tel" autoComplete="tel" /></label>}
      </div>
      {withMessage && <label className="field"><span>Messaggio</span><textarea name="messaggio" rows={4} /></label>}
      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
      <label className="flex gap-3 items-start text-sm text-stone"><input type="checkbox" name="privacy" required className="mt-1 size-5 accent-[var(--rose)]" /><span>Ho letto l'<a href="/privacy" className="ulink">informativa privacy</a> e acconsento al trattamento dei dati per ricevere quello che ho richiesto.</span></label>
      <label className="flex gap-3 items-start text-sm text-stone"><input type="checkbox" name="marketing" className="mt-1 size-5 accent-[var(--rose)]" /><span>Voglio ricevere ogni tanto email con contenuti e novità di Rita (facoltativo).</span></label>
      <div>
        <button className="btn btn-primary" disabled={state === "sending"}>{state === "sending" ? "Invio…" : cta} <span className="arr">→</span></button>
        {state === "err" && <p role="alert" className="mt-4 text-sm text-rose">{msg}</p>}
      </div>
    </form>
  );
}
