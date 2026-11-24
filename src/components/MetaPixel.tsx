"use client";
import { useEffect } from "react";
import { useConsent } from "@/lib/consent";
import { usePathname } from "next/navigation";

const PIXEL_ID = "161493119308611";

type Fbq = ((...args: unknown[]) => void) & { callMethod?: (...a: unknown[]) => void; queue?: unknown[]; push?: unknown; loaded?: boolean; version?: string };
declare global { interface Window { fbq?: Fbq; _fbq?: Fbq } }

/** Pagine "speciali": percorsi, call, guida, quiz. Su queste mandiamo ViewContent con il nome della pagina. */
const SPECIAL: Record<string, string> = {
  "/percorsi/metodo-agenda": "Metodo A.G.E.N.D.A.",
  "/percorsi/sold-out": "Metodo Sold Out",
  "/percorsi/metodo-rita-dolbakian": "Metodo Rita Dolbakian",
  "/percorsi": "Percorsi",
  "/corsi": "Corsi",
  "/prodotti": "Prodotti digitali",
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

/** Meta Pixel: parte solo con il consenso "Marketing" (finalità 5) dato nel banner iubenda; traccia ogni cambio pagina. */
export function MetaPixel() {
  const path = usePathname();
  const ok = useConsent().marketing;

  useEffect(() => {
    if (!ok && window.fbq) window.fbq("consent", "revoke");
  }, [ok]);

  useEffect(() => {
    if (!ok) return;
    load();
    window.fbq!("consent", "grant");
    track(path);
  }, [ok, path]);

  return null;
}
