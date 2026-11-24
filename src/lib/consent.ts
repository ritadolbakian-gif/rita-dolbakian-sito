"use client";
import { useEffect, useState } from "react";

/**
 * Consenso cookie letto da iubenda (script nel <head> del layout).
 * Finalità iubenda: 1 = necessari, 2 = funzionalità, 3 = esperienza, 4 = misurazione, 5 = marketing.
 * Google Analytics / GTM sono gestiti direttamente da iubenda con il Google Consent Mode.
 */
export type Consent = { experience: boolean; analytics: boolean; marketing: boolean };
const NONE: Consent = { experience: false, analytics: false, marketing: false };

type IubApi = { getPurposesState?: () => Record<string, boolean> };
type IubCs = { api?: IubApi; on?: (ev: string, fn: () => void) => void; off?: (ev: string, fn: () => void) => void };
declare global { interface Window { _iub?: { cs?: IubCs } } }

function read(): Consent | null {
  const api = window._iub?.cs?.api;
  if (!api?.getPurposesState) return null;
  try {
    const s = api.getPurposesState() || {};
    return { experience: s[3] === true, analytics: s[4] === true, marketing: s[5] === true };
  } catch { return null; }
}

const EVENTS = ["preferenceExpressedOrNotNeeded", "storePreferences", "preferenceStore"];

/** Stato del consenso iubenda, aggiornato quando l'utente sceglie o cambia preferenze. */
export function useConsent(): Consent {
  const [c, setC] = useState<Consent>(NONE);
  useEffect(() => {
    let cs: IubCs | undefined;
    const sync = () => { const v = read(); if (v) setC((p) => (p.experience === v.experience && p.analytics === v.analytics && p.marketing === v.marketing ? p : v)); };
    const attach = () => {
      cs = window._iub?.cs;
      if (!cs?.api || !cs.on) return false;
      EVENTS.forEach((e) => cs!.on!(e, sync));
      sync();
      return true;
    };
    // iubenda si carica in modo asincrono: aspetto che sia pronto, poi ricontrollo ogni tanto per sicurezza
    const t = window.setInterval(() => { if (!cs) attach(); else sync(); }, 1500);
    attach();
    return () => { window.clearInterval(t); if (cs?.off) EVENTS.forEach((e) => cs!.off!(e, sync)); };
  }, []);
  return c;
}
