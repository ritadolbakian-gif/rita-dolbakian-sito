"use client";
import Script from "next/script";

const BOOKING_ID = "Crk5pbPt2YsMCM2bYgA6";

/** Calendario prenotazioni: embed ufficiale GoHighLevel (LeadConnector). */
export function BookingCalendar({ className = "", minHeight = 780 }: { className?: string; minHeight?: number }) {
  return (
    <div className={className}>
      <iframe
        src={`https://api.leadconnectorhq.com/widget/booking/${BOOKING_ID}`}
        title="Prenota la call di orientamento"
        allow="payment"
        scrolling="no"
        id={`${BOOKING_ID}_inline`}
        style={{ width: "100%", border: "none", overflow: "hidden", minHeight }}
      />
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
    </div>
  );
}
