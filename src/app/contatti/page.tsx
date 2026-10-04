import { PageHero, Label, Tbc } from "@/components/Ui";
import { LeadForm } from "@/components/LeadForm";
import { SITE } from "@/lib/site";
import { meta } from "@/lib/seo";

export const metadata = meta("Contatti", "Scrivi a Rita Dolbakian Academy: modulo di contatto, social e riferimenti.", "/contatti");

export default function Contatti() {
  return (
    <>
      <PageHero eyebrow="Contatti" title="Scrivimi, *con calma*." answer="Per domande sui percorsi puoi usare il modulo qui sotto o scrivere sui social. Se preferisci un confronto diretto, prenota la call gratuita di orientamento." />
      <section className="section">
        <div className="wrap grid gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          <LeadForm tipo="contatti" cta="Invia il messaggio" withMessage />
          <div className="space-y-6 text-stone">
            <div><Label t="Email" /><Tbc>email</Tbc></div>
            <div><Label t="WhatsApp" /><Tbc>numero</Tbc></div>
            <div><Label t="Orari" /><Tbc>orari</Tbc></div>
            <div><Label t="Social" /><ul className="space-y-1"><li><a className="ulink" href={SITE.social.instagram} target="_blank" rel="noopener">Instagram</a></li><li><a className="ulink" href={SITE.social.youtube} target="_blank" rel="noopener">YouTube</a></li><li><a className="ulink" href={SITE.social.tiktok} target="_blank" rel="noopener">TikTok</a></li></ul></div>
          </div>
        </div>
      </section>
    </>
  );
}
