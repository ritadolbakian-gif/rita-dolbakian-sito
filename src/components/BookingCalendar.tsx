"use client";
import Script from "next/script";

const BOOKING_ID = "Crk5pbPt2YsMCM2bYgA6";

const BOOKING_URL = `https://api.leadconnectorhq.com/widget/booking/${BOOKING_ID}`;

/** Calendario prenotazioni: embed ufficiale GoHighLevel (LeadConnector). */
export function BookingCalendar({ className = "", minHeight = 780 }: { className?: string; minHeight?: number }) {
  return (
    <div className={className}>
      {/* niente scrolling="no" né overflow:hidden: su Safari, se il ridimensionamento automatico non parte,
          il form resterebbe tagliato e il pulsante Conferma irraggiungibile. Così si può comunque scorrere. */}
      <iframe
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
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
    </div>
  );
}
