"use client";
import Script from "next/script";
import { useEffect, useRef } from "react";

/** Form GoHighLevel (LeadConnector) incorporato. */
export function GhlForm({ id, name, height, className = "" }: { id: string; name: string; height: number; className?: string }) {
  return (
    <div className={className}>
      <iframe
        src={`https://api.leadconnectorhq.com/widget/form/${id}`}
        style={{ width: "100%", height: `${height}px`, border: "none", borderRadius: 12 }}
        loading="lazy"
        id={`inline-${id}`}
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name={name}
        data-height={height}
        data-layout-iframe-id={`inline-${id}`}
        data-form-id={id}
        data-cookie-consent="true"
        data-cookie-consent-provider="auto"
        title={name}
      />
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
    </div>
  );
}

/** Form della guida gratuita. */
export function GuideForm({ className = "", height = 638 }: { className?: string; height?: number }) {
  return <GhlForm id="kJW39OTeJDTngYTAZA4a" name="Form Guida" height={height} className={className} />;
}

/**
 * Quiz GoHighLevel incorporato.
 * form_embed.js serve per l'handshake di ridimensionamento ("[iFrameSizer]id:altezza:larghezza:tipo"),
 * ma a volte scambia il quiz per un popup e lo nasconde (opacity 0, left -9999px).
 * Qui lo teniamo sempre visibile e applichiamo noi l'altezza comunicata dal quiz.
 */
export function GhlQuiz({ id, className = "" }: { id: string; className?: string }) {
  const ref = useRef<HTMLIFrameElement>(null);
  useEffect(() => {
    const f = ref.current;
    if (!f) return;
    let h = 0;
    const fix = () => {
      const st = f.style;
      if (st.opacity === "0" || st.visibility === "hidden" || st.left === "-9999px" || st.position === "absolute" || st.display === "none") {
        st.opacity = "1"; st.visibility = "visible"; st.left = ""; st.position = ""; st.display = "block"; st.pointerEvents = "auto";
      }
      if (h && st.height !== `${h}px`) st.height = `${h}px`;
    };
    const mo = new MutationObserver(fix);
    mo.observe(f, { attributes: true, attributeFilter: ["style", "class"] });
    const onMsg = (e: MessageEvent) => {
      if (!String(e.origin).includes("leadconnectorhq.com") || typeof e.data !== "string") return;
      const m = e.data.match(/^\[iFrameSizer\][^:]*:(\d+(?:\.\d+)?):/);
      if (m) { h = Math.ceil(Number(m[1])); fix(); }
    };
    window.addEventListener("message", onMsg);
    fix();
    return () => { mo.disconnect(); window.removeEventListener("message", onMsg); };
  }, []);
  return (
    <div className={className}>
      <iframe
        ref={ref}
        src={`https://api.leadconnectorhq.com/widget/quiz/${id}`}
        className="block w-full border-0 min-h-[320px]"
        scrolling="no"
        id={id}
        title="Quiz diagnostico"
        data-cookie-consent="true"
        data-cookie-consent-provider="auto"
      />
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
    </div>
  );
}
