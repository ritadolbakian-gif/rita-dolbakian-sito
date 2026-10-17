"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const PIXEL_ID = "161493119308611";
const CONSENT_KEY = "rd-consent-v1";
const SIX_MONTHS = 1000 * 60 * 60 * 24 * 180;

type Fbq = ((...args: unknown[]) => void) & { callMethod?: (...a: unknown[]) => void; queue?: unknown[]; push?: unknown; loaded?: boolean; version?: string };
declare global { interface Window { fbq?: Fbq; _fbq?: Fbq } }

/** Pagine "speciali": percorsi, call, guida, quiz. Su queste mandiamo ViewContent con il nome della pagina. */
const SPECIAL: Record<string, string> = {
  "/percorsi/metodo-agenda": "Metodo A.G.E.N.D.A.",
  "/percorsi/sold-out": "Metodo Sold Out",
  "/percorsi/metodo-rita-dolbakian": "Metodo Rita Dolbakian",
  "/percorsi": "Percorsi",
  "/corsi": "Corsi",
  "/formazione-certificata": "Formazione certificata",
  "/call-orientamento": "Call di orientamento",
  "/guida-gratuita": "Guida Metodo A.G.E.N.D.A.",
  "/quiz-diagnostico": "Quiz diagnostico",
};

function load() {
  if (window.fbq) return;
  // snippet ufficiale Meta, caricato solo dopo il consenso marketing
  const n = function (...args: unknown[]) { n.callMethod ? n.callMethod(...args) : n.queue!.push(args); } as Fbq;
  window.fbq = n; if (!window._fbq) window._fbq = n;
  n.push = n; n.loaded = true; n.version = "2.0"; n.queue = [];
  const t = document.createElement("script"); t.async = true; t.src = "https://connect.facebook.net/en_US/fbevents.js";
  document.head.appendChild(t);
  n("init", PIXEL_ID);
}

function track(path: string) {
  const fbq = window.fbq!;
  fbq("track", "PageView");
  if (path === "/richiesta-ricevuta") {
    // pagina di ringraziamento dopo il form della guida
    fbq("track", "Lead", { content_name: "Guida Metodo A.G.E.N.D.A." });
    fbq("trackCustom", "LeadGuida", { content_name: "Guida Metodo A.G.E.N.D.A." });
  } else if (/^\/blog\/(?!categoria\/)[^/]+$/.test(path)) {
    fbq("track", "ViewContent", { content_type: "article", content_category: "Blog", content_ids: [path.slice(6)], content_name: path.slice(6) });
  } else if (SPECIAL[path]) {
    fbq("track", "ViewContent", { content_type: "page", content_category: "Pagina speciale", content_name: SPECIAL[path] });
  }
}

function savedMarketing(): boolean {
  try {
    const j = JSON.parse(localStorage.getItem(CONSENT_KEY) || "null");
    return !!j && !!j.ts && Date.now() - j.ts <= SIX_MONTHS && !!j.marketing;
  } catch { return false; }
}

/** Meta Pixel: parte solo con il consenso "Marketing" del banner cookie; traccia ogni cambio pagina. */
export function MetaPixel() {
  const path = usePathname();
  const [ok, setOk] = useState(false);

  useEffect(() => {
    // lettura di localStorage solo dopo il mount
    /* eslint-disable-next-line react-hooks/set-state-in-effect */
    setOk(savedMarketing());
    const on = (e: Event) => {
      const m = !!(e as CustomEvent<{ marketing: boolean }>).detail?.marketing;
      setOk(m);
      if (!m && window.fbq) window.fbq("consent", "revoke");
    };
    window.addEventListener("rd-consent", on);
    return () => window.removeEventListener("rd-consent", on);
  }, []);

  useEffect(() => {
    if (!ok) return;
    load();
    window.fbq!("consent", "grant");
    track(path);
  }, [ok, path]);

  return null;
}
