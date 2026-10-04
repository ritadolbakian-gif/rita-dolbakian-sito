import { LegalPage } from "@/components/LegalPage";
import { meta } from "@/lib/seo";
export const metadata = meta("Cookie policy", "Quali cookie usa il sito di Rita Dolbakian Academy e come gestirli.", "/cookie");
export default function P() {
  return <LegalPage eyebrow="Cookie" title="Cookie *policy*." intro="Quali cookie usiamo e come puoi scegliere. Strumenti di analisi e marketing si attivano solo se acconsenti." sections={[
    { h: "Cookie tecnici", p: "Necessari al funzionamento del sito e per ricordare la tua scelta sui cookie." },
    { h: "Cookie di analisi e marketing", p: "Google Analytics 4 e Meta Pixel, solo dopo il tuo consenso. [DA CONFERMARE: strumenti effettivamente attivati]" },
    { h: "Come cambiare idea", p: "Puoi modificare la scelta in qualsiasi momento dal link «Preferenze cookie» a piè di pagina." },
  ]} />;
}
