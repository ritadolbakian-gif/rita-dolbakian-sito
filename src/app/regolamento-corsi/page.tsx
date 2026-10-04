import Link from "next/link";
import { LegalPage, InBreve } from "@/components/LegalPage";
import { Tbc } from "@/components/Ui";
import { meta } from "@/lib/seo";

export const metadata = meta("Regolamento dei corsi in presenza e online", "Regole di partecipazione ai corsi di Rita Dolbakian Academy: comportamento, igiene e sicurezza nelle pratiche, salute, foto e video, riservatezza, attestato.", "/regolamento-corsi");

const toc = [
  { id: "ambito", t: "A chi si applica" }, { id: "iscrizione", t: "Iscrizione e presenze" }, { id: "comportamento", t: "Comportamento" }, { id: "igiene", t: "Igiene e sicurezza" },
  { id: "pratiche", t: "Pratiche tra allievi e salute" }, { id: "privacy", t: "Riservatezza, foto e video" }, { id: "online", t: "Corsi online" }, { id: "attestato", t: "Attestato" }, { id: "partecipazione", t: "Partecipazione e garanzia" }, { id: "sanzioni", t: "Cosa succede se non viene rispettato" },
];

export default function Regolamento() {
  return (
    <LegalPage eyebrow="Regolamento" title="Regolamento *dei corsi*." toc={toc}
      intro="Poche regole semplici, per far lavorare tutti bene e in sicurezza: nei corsi in presenza si fanno pratiche sul corpo e si condivide uno spazio. Partecipando accetti questo regolamento, che fa parte delle Condizioni di vendita.">
      <InBreve><p>Rispetto, igiene e consenso prima di tutto. Puoi fermare qualsiasi pratica in ogni momento. Foto e video solo con il tuo consenso. Quello che si dice in aula resta in aula.</p></InBreve>

      <h2 id="ambito">1. A chi si applica</h2>
      <p>A chi partecipa ai corsi, alle masterclass e agli incontri di Rita Dolbakian Academy (RD SRL), dal vivo e online. Si aggiunge alle <Link href="/termini">Condizioni di vendita</Link>.</p>

      <h2 id="iscrizione">2. Iscrizione e presenze</h2>
      <ul>
        <li>Partecipa solo la persona iscritta, salvo sostituzione concordata in anticipo.</li>
        <li>Presentati puntuale: i ritardi disturbano il gruppo e le pratiche.</li>
        <li>Per ottenere l'attestato serve una presenza minima di <Tbc>percentuale o numero di ore</Tbc>.</li>
        <li>Se non puoi esserci, avvisaci appena puoi, così valutiamo un recupero (vedi Condizioni di vendita).</li>
      </ul>

      <h2 id="comportamento">3. Comportamento</h2>
      <ul>
        <li>Rispetto verso docenti, compagne e compagni. Non sono ammessi comportamenti offensivi, discriminatori o molesti.</li>
        <li>Telefono silenzioso durante le lezioni e le pratiche.</li>
        <li>Prenditi cura degli ambienti e delle attrezzature. Eventuali danni causati per negligenza possono essere addebitati.</li>
        <li>È vietato partecipare sotto l'effetto di alcol o sostanze.</li>
      </ul>

      <h2 id="igiene">4. Igiene e sicurezza</h2>
      <ul>
        <li>Abbigliamento comodo e pulito. Unghie corte, mani pulite, niente anelli, bracciali o orologi durante le pratiche.</li>
        <li>Lavati le mani prima e dopo ogni pratica. Usa asciugamani e lenzuolini puliti.</li>
        <li>Non partecipare alle pratiche se hai febbre, infezioni o patologie contagiose, ferite o irritazioni sulla pelle nell'area interessata. Avvisaci e valuteremo un'alternativa.</li>
        <li>Segui le indicazioni di sicurezza date da chi tiene il corso. <Tbc>indicazioni specifiche della sede, vie d'esodo, primo soccorso, polizza</Tbc></li>
      </ul>

      <h2 id="pratiche">5. Pratiche tra allievi e salute</h2>
      <ul>
        <li><strong>Consenso sempre.</strong> Ogni pratica sul corpo avviene solo con il consenso di chi la riceve. Chiedi sempre prima, rispetta i limiti dell'altra persona. Puoi interrompere o rifiutare una pratica in ogni momento, senza spiegazioni.</li>
        <li><strong>Salute.</strong> Se hai condizioni che richiedono attenzione (per esempio problemi alla schiena, allergie, gravidanza), comunicale a chi tiene il corso: sono dati sulla salute, trattati solo con il tuo consenso e per la tua sicurezza, come spiegato nell'<Link href="/privacy">Informativa privacy</Link>. In caso di dubbi sulla tua idoneità, consulta prima il tuo medico.</li>
        <li>Le pratiche sono didattiche. Non sono trattamenti sanitari e non sostituiscono il parere di un medico.</li>
      </ul>

      <h2 id="privacy">6. Riservatezza, foto e video</h2>
      <ul>
        <li><strong>Riservatezza.</strong> Quello che condividono i compagni (storie personali, dati di salute, situazioni lavorative) non si divulga fuori dal corso.</li>
        <li><strong>Foto e video.</strong> Non registrare e non fotografare le lezioni senza autorizzazione. Chi tiene il corso può fare foto e video per documentare e promuovere le attività solo di chi ha firmato la liberatoria. Se non vuoi comparire, dillo: ci regoliamo per non inquadrarti, senza alcuno svantaggio. <Tbc>modulo di liberatoria foto/video</Tbc></li>
        <li><strong>Materiali didattici.</strong> Sono per uso personale e non si condividono (vedi Condizioni di vendita).</li>
      </ul>

      <h2 id="online">7. Corsi online</h2>
      <ul>
        <li>Nelle lezioni in diretta tieni il microfono spento quando non parli e rispetta i turni.</li>
        <li>Se partecipi in videochiamata, scegli uno spazio adatto. Non registrare né condividere la lezione.</li>
        <li>Non cedere le tue credenziali ad altre persone.</li>
      </ul>

      <h2 id="attestato">8. Attestato</h2>
      <p>L'attestato di partecipazione è rilasciato a chi rispetta la presenza minima e completa il percorso. Non è un titolo abilitante. <Tbc>criteri di valutazione finale</Tbc></p>

      <h2 id="partecipazione">9. Partecipazione attiva e garanzia</h2>
      <p>Le presenze agli incontri su Zoom e agli eventi, e le attività consegnate, vengono registrate: servono a erogare il corso e a verificare i requisiti della garanzia «soddisfatti o rimborsati» (vedi <Link href="/rimborsi">Recesso, garanzia e rimborsi</Link>). Per avere diritto alla garanzia partecipa agli incontri, agli eventi e svolgi le attività richieste. In caso di assenza, avvisaci e recupera quando possibile.</p>

      <h2 id="sanzioni">10. Cosa succede se il regolamento non viene rispettato</h2>
      <p>Per prima cosa ti chiediamo di rimediare. In caso di comportamenti gravi o ripetuti, che mettono a rischio la sicurezza o il lavoro del gruppo, possiamo allontanare la persona dal corso. In questi casi non spetta il rimborso della parte non fruita, salvo quanto la legge riconosce al consumatore.</p>
    </LegalPage>
  );
}
