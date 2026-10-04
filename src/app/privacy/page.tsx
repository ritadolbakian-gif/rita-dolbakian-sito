import { LegalPage } from "@/components/LegalPage";
import { meta } from "@/lib/seo";
export const metadata = meta("Informativa privacy", "Come Rita Dolbakian Academy tratta i tuoi dati personali.", "/privacy");
export default function P() {
  return <LegalPage eyebrow="Privacy" title="Informativa *privacy*." intro="Come trattiamo i tuoi dati, in parole semplici, ai sensi del Regolamento UE 2016/679 (GDPR)." sections={[
    { h: "Titolare del trattamento", p: "Il titolare del trattamento è RD SRL (P.IVA 02097250472), con sede legale in Viale Garibaldi 42, 51017 Pescia (PT). Per esercitare i tuoi diritti puoi scrivere alla PEC rd_srl@namirialpec.it." },
    { h: "Quali dati raccogliamo", p: "Nome, cognome, email, telefono e il contenuto dei messaggi che ci invii tramite i moduli del sito, e i dati di prenotazione della call." },
    { h: "Perché li usiamo", p: "Per inviarti la guida richiesta, risponderti, gestire la prenotazione della call e, solo con il tuo consenso separato, inviarti comunicazioni di marketing." },
    { h: "Strumenti terzi", p: "Usiamo GoHighLevel (LeadConnector) per moduli, prenotazioni ed email. [DA CONFERMARE: elenco completo dei fornitori]" },
    { h: "I tuoi diritti", p: "Puoi chiedere accesso, rettifica, cancellazione, limitazione, portabilità e opporti al trattamento, e revocare i consensi in ogni momento." },
  ]} />;
}
