import { LegalPage } from "@/components/LegalPage";
import { meta } from "@/lib/seo";
export const metadata = meta("Politica di rimborso e garanzia", "La garanzia soddisfatti o rimborsati di 14 giorni di Wellness Mastery e le condizioni di rimborso.", "/rimborsi");
export default function P() {
  return <LegalPage eyebrow="Rimborsi" title="Garanzia e *rimborsi*." intro="Wellness Mastery prevede una garanzia soddisfatti o rimborsati di 14 giorni." sections={[
    { h: "Come funziona", p: "Entro 14 giorni dall'acquisto puoi chiedere il rimborso. [DA CONFERMARE: modalità di richiesta e condizioni esatte]" },
    { h: "Altri percorsi", p: "[DA CONFERMARE: politica di rimborso per Metodo A.G.E.N.D.A. e Metodo Rita Dolbakian]" },
  ]} />;
}
