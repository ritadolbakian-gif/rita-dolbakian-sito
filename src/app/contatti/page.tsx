import { PageHero, Label, Tbc, Faq } from "@/components/Ui";
import { LeadForm } from "@/components/LeadForm";
import { Slot } from "@/components/Slot";
import { SITE, CONTACT } from "@/lib/site";
import { meta } from "@/lib/seo";

export const metadata = meta("Contatti", "Scrivi a Rita Dolbakian Academy: modulo di contatto, WhatsApp, social e riferimenti.", "/contatti");

export default function Contatti() {
  return (
    <>
      <PageHero eyebrow="Contatti" title="Scrivimi, *con calma*." answer="Per una domanda sui percorsi puoi usare il modulo qui sotto, scrivere su WhatsApp o sui social. Se preferisci un confronto a voce, prenota la call gratuita di orientamento: circa 30 minuti, nessun obbligo." />
      <section className="section">
        <div className="wrap grid gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          <div><LeadForm tipo="contatti" cta="Invia il messaggio" withMessage /></div>
          <div className="space-y-8 text-stone">
            <Slot kind="foto" id="contatti-hero" label="Rita, ritratto" ratio="4/5" art="leaf" className="max-w-xs" />
            <div><Label t="Email" />{CONTACT.email ? <a className="ulink text-ink" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> : <Tbc>email</Tbc>}</div>
            <div><Label t="WhatsApp" />{CONTACT.whatsapp ? <a className="ulink text-ink" href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noopener">Scrivimi su WhatsApp</a> : <Tbc>numero</Tbc>}</div>
            <div><Label t="Risposta" />Rispondo di solito entro un giorno lavorativo. <Tbc>orari e tempi reali</Tbc></div>
            <div><Label t="Social" /><ul className="space-y-1"><li><a className="ulink text-ink" href={SITE.social.instagram} target="_blank" rel="noopener">Instagram</a></li><li><a className="ulink text-ink" href={SITE.social.youtube} target="_blank" rel="noopener">YouTube</a></li><li><a className="ulink text-ink" href={SITE.social.tiktok} target="_blank" rel="noopener">TikTok</a></li></ul></div>
          </div>
        </div>
      </section>
      <Faq items={[
        { q: "In quanto tempo ricevo risposta?", a: <>Rispondo di solito entro un giorno lavorativo. <Tbc>tempi reali</Tbc></>, plain: "Rispondo di solito entro un giorno lavorativo." },
        { q: "Posso scrivere su WhatsApp?", a: <>Sì, usa il pulsante in basso a destra. <Tbc>numero WhatsApp</Tbc></>, plain: "Sì, usa il pulsante WhatsApp in basso a destra." },
        { q: "Preferisco parlare a voce: come faccio?", a: "Prenota la call di orientamento gratuita: circa 30 minuti, senza obbligo." },
        { q: "Dove si svolgono le lezioni in presenza?", a: <><Tbc>sedi</Tbc></>, plain: "Le sedi saranno indicate nel calendario." },
        { q: "Posso proporre una collaborazione?", a: "Sì, scrivimi dal modulo qui sopra con due righe su di te e sulla proposta." },
      ]} />
    </>
  );
}
