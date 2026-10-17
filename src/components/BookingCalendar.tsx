"use client";
import { useEffect, useRef } from "react";

const BOOKING_ID = "Crk5pbPt2YsMCM2bYgA6";
const BOOKING_URL = `https://api.leadconnectorhq.com/widget/booking/${BOOKING_ID}`;

/**
 * Calendario prenotazioni: embed GoHighLevel (LeadConnector).
 * Non usiamo form_embed.js: ha una logica responsive popup/launcher che a certe larghezze
 * nasconde l'iframe (opacity:0 / left:-9999px). Ascoltiamo invece i messaggi "highlevel.setHeight"
 * e dimensioniamo l'iframe noi, così il form non resta mai tagliato (anche su Safari).
 */
export function BookingCalendar({ className = "", minHeight = 620 }: { className?: string; minHeight?: number }) {
  const ref = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    function onMessage(e: MessageEvent) {
      if (!e.origin.includes("leadconnectorhq.com")) return;
      let data: unknown = e.data;
      if (typeof data === "string") {
        try { data = JSON.parse(data); } catch { return; }
      }
      if (Array.isArray(data) && data[0] === "highlevel.setHeight") {
        const h = Number((data[1] as { height?: number } | undefined)?.height);
        if (ref.current && Number.isFinite(h) && h > 0) {
          ref.current.style.height = `${Math.ceil(h)}px`;
        }
      }
    }
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <div className={className}>
      <iframe
        ref={ref}
        src={BOOKING_URL}
        title="Prenota la call di orientamento"
        allow="payment"
        id={`${BOOKING_ID}_inline`}
        style={{ width: "100%", border: "none", minHeight }}
      />
      <p className="px-5 pb-4 pt-3 text-center text-xs text-stone">
        Il calendario non si vede bene?{" "}
        <a href={BOOKING_URL} target="_blank" rel="noopener" className="ulink text-ink">Apri la pagina di prenotazione</a>.
      </p>
    </div>
  );
}
