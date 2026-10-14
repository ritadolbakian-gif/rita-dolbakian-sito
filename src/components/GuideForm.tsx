"use client";
import Script from "next/script";

const FORM_ID = "kJW39OTeJDTngYTAZA4a";

/** Form della guida gratuita: embed ufficiale GoHighLevel (LeadConnector). */
export function GuideForm({ className = "", height = 638 }: { className?: string; height?: number }) {
  return (
    <div className={className}>
      <iframe
        src={`https://api.leadconnectorhq.com/widget/form/${FORM_ID}`}
        style={{ width: "100%", height: `${height}px`, border: "none", borderRadius: 12 }}
        id={`inline-${FORM_ID}`}
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Form Guida"
        data-height={height}
        data-layout-iframe-id={`inline-${FORM_ID}`}
        data-form-id={FORM_ID}
        data-cookie-consent="true"
        data-cookie-consent-provider="auto"
        title="Form Guida"
      />
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
    </div>
  );
}
