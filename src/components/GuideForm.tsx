"use client";
import Script from "next/script";

/** Form GoHighLevel (LeadConnector) incorporato. */
export function GhlForm({ id, name, height, className = "" }: { id: string; name: string; height: number; className?: string }) {
  return (
    <div className={className}>
      <iframe
        src={`https://api.leadconnectorhq.com/widget/form/${id}`}
        style={{ width: "100%", height: `${height}px`, border: "none", borderRadius: 12 }}
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

/** Quiz GoHighLevel incorporato (si ridimensiona da solo con form_embed.js). */
export function GhlQuiz({ id, minHeight = 900, className = "" }: { id: string; minHeight?: number; className?: string }) {
  return (
    <div className={className}>
      <iframe
        src={`https://api.leadconnectorhq.com/widget/quiz/${id}`}
        style={{ border: "none", width: "100%", minHeight }}
        scrolling="no"
        id={id}
        title="Quiz diagnostico"
        data-cookie-consent="true"
        data-cookie-consent-provider="auto"
      />
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
    </div>
  );
}
