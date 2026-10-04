import { LegalPage } from "@/components/LegalPage";
import { meta } from "@/lib/seo";
export const metadata = meta("Termini e condizioni", "Termini e condizioni di utilizzo del sito e dei servizi di Rita Dolbakian Academy.", "/termini");
export default function P() {
  return <LegalPage eyebrow="Termini" title="Termini e *condizioni*." intro="Le regole di utilizzo del sito e di acquisto dei percorsi." sections={[
    { h: "Servizi", p: "Rita Dolbakian Academy offre formazione sul benessere e sulla tecnica manuale. Non offre prestazioni sanitarie né promesse terapeutiche." },
    { h: "Risultati", p: "Le testimonianze riflettono esperienze individuali e non costituiscono garanzia di risultato." },
    { h: "Acquisto e accesso", p: "[DA CONFERMARE: condizioni di acquisto, accesso alla piattaforma, proprietà intellettuale]" },
  ]} />;
}
