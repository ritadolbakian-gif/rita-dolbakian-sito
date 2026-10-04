import Link from "next/link";
import { LegalPage, InBreve, Holder } from "@/components/LegalPage";
import { Tbc } from "@/components/Ui";
import { meta } from "@/lib/seo";

export const metadata = meta("Recesso, garanzia e rimborsi", "Come recedere entro 14 giorni e come funziona la garanzia «soddisfatti o rimborsati» per tutta la durata del percorso: condizioni, prova di partecipazione, tempi di rimborso e modulo di recesso.", "/rimborsi");

const toc = [
  { id: "recesso", t: "Diritto di recesso (14 giorni)" }, { id: "come", t: "Come esercitarlo" }, { id: "limiti", t: "Quando è limitato o escluso" }, { id: "garanzia", t: "Garanzia «soddisfatti o rimborsati»" }, { id: "prova", t: "Cosa devi dimostrare" },
  { id: "rimborso", t: "Come e quando rimborsiamo" }, { id: "rate", t: "Se hai pagato a rate" }, { id: "annullamento", t: "Se annulliamo noi un corso" }, { id: "conformita", t: "Garanzia legale" }, { id: "modulo", t: "Modulo di recesso" },
];

export default function Rimborsi() {
  return (
    <LegalPage eyebrow="Recesso e rimborsi" title="Recesso, garanzia e *rimborsi*." toc={toc}
      intro="Se cambi idea, hai due strade: il recesso previsto dalla legge (14 giorni) e la garanzia «soddisfatti o rimborsati» che vale per tutta la durata del percorso, su tutti i nostri percorsi. Qui trovi come funzionano, cosa devi dimostrare per la garanzia, come chiedere il rimborso e cosa cambia se hai pagato a rate.">
      <InBreve>
        <p><strong>Recesso di legge:</strong> 14 giorni, per i consumatori, senza spiegare il motivo. <strong>Garanzia soddisfatti o rimborsati:</strong> per tutta la durata del percorso, su tutti i percorsi. Il rischio è nostro, a una condizione: hai partecipato agli incontri su Zoom e agli eventi e hai svolto le attività richieste, e lo si può verificare. Scrivi alla PEC <a href="mailto:rd_srl@namirialpec.it">rd_srl@namirialpec.it</a>.</p>
      </InBreve>

      <h2 id="recesso">1. Il diritto di recesso previsto dalla legge</h2>
      <p>Se acquisti come <strong>consumatore</strong> un contratto a distanza (online, per telefono, via email), hai diritto di recedere <strong>entro 14 giorni</strong>, senza indicare il motivo e senza penali (artt. 52 e seguenti del Codice del consumo, D.Lgs. 206/2005). Il termine decorre dal giorno in cui il contratto è concluso, per i servizi e per i contenuti digitali non forniti su supporto materiale. Il diritto non spetta ai clienti business (con partita IVA che acquistano per la propria attività).</p>

      <h2 id="come">2. Come esercitare il recesso</h2>
      <p>Invia una dichiarazione esplicita della tua decisione di recedere, entro i 14 giorni, a <Holder />, anche con il <a href="#modulo">modulo qui sotto</a> (l'uso del modulo non è obbligatorio). Basta che la comunicazione parta entro il termine. Ti confermiamo la ricezione. <Tbc>funzione di recesso online nel checkout, prevista dalla Direttiva (UE) 2023/2673, da attivare con il fornitore di pagamento</Tbc></p>

      <h2 id="limiti">3. Quando il recesso è limitato o escluso</h2>
      <ul>
        <li><strong>Contenuti digitali (corsi online).</strong> Se chiedi espressamente di accedere subito ai contenuti, e ci confermi di sapere che così perdi il diritto di recesso una volta iniziata la fornitura, il recesso non si applica (art. 59, comma 1, lett. o). Ti chiediamo questo consenso al momento dell'acquisto, con una casella apposita.</li>
        <li><strong>Servizi già eseguiti.</strong> Se il servizio è stato <em>interamente</em> eseguito entro i 14 giorni, dopo la tua richiesta espressa e la tua consapevolezza che perdi il recesso a esecuzione completa, il recesso non spetta (art. 59, comma 1, lett. a).</li>
        <li><strong>Servizio iniziato durante i 14 giorni.</strong> Se hai chiesto che il servizio inizi prima della scadenza e poi recedi, ci devi un importo proporzionale a quanto già ricevuto fino al momento del recesso (art. 57, comma 3).</li>
      </ul>
      <p>In questi casi resta comunque valida la garanzia «soddisfatti o rimborsati» descritta sotto, alle sue condizioni.</p>

      <h2 id="garanzia">4. Garanzia «soddisfatti o rimborsati» per tutta la durata del percorso</h2>
      <p>Tutti i nostri percorsi (Metodo A.G.E.N.D.A., Metodo Rita Dolbakian) includono una <strong>garanzia commerciale «soddisfatti o rimborsati»</strong>. Vale <strong>per tutta la durata del percorso</strong>, non solo per i primi giorni: finché stai seguendo il percorso, se non sei soddisfatta, puoi chiedere il rimborso. Il rischio è nostro. È un impegno <strong>in più</strong> rispetto ai tuoi diritti di legge e non li riduce.</p>
      <p>Per la mentorship <strong>Metodo Sold Out</strong> vale la garanzia «Primi 2 mesi» descritta nella pagina del percorso. <Tbc>conferma della garanzia di ciascun percorso</Tbc></p>
      <ul>
        <li><strong>Quando chiederla:</strong> durante il percorso o entro <Tbc>numero di giorni dalla fine del percorso</Tbc> dalla sua conclusione.</li>
        <li><strong>Come chiederla:</strong> scrivi alla PEC o all'indirizzo <Tbc>email assistenza</Tbc>, indicando nome ed email usati per l'iscrizione e, se vuoi, il motivo. Un breve confronto con noi è gradito ma non obbligatorio. <Tbc>se il confronto è previsto</Tbc></li>
        <li><strong>Cosa ottieni:</strong> il rimborso di quanto hai pagato per il percorso. <Tbc>rimborso integrale o al netto di eventuali bonus e costi già sostenuti</Tbc></li>
        <li><strong>Non è una garanzia di risultati economici.</strong> Riguarda la tua soddisfazione per il percorso, non il fatturato o il numero di clienti che otterrai.</li>
      </ul>

      <h2 id="prova">5. Cosa devi dimostrare: la partecipazione</h2>
      <p>Un percorso funziona se lo fai. Per questo la garanzia spetta a chi ha <strong>partecipato attivamente</strong> e può dimostrarlo. Al momento della richiesta verifichiamo, insieme a te, che:</p>
      <ol>
        <li>hai <strong>partecipato agli incontri su Zoom</strong> e alle sessioni previste dal tuo percorso (presenze risultanti dai registri della piattaforma);</li>
        <li>hai <strong>partecipato agli eventi</strong> inclusi nel percorso (giornate, workshop, appuntamenti, in presenza o online);</li>
        <li>hai <strong>svolto le attività richieste</strong> (task, esercizi, compiti) e le hai consegnate nei modi e nei tempi indicati;</li>
        <li>hai usato i materiali e gli strumenti del percorso <Tbc>per esempio il Wellness Profit Calculator e i template</Tbc> come indicato.</li>
      </ol>
      <p>La <strong>soglia minima</strong> di partecipazione e di attività svolte per accedere alla garanzia è: <Tbc>soglia (per esempio percentuale di incontri e di task)</Tbc>. Non devi preparare nulla in anticipo: presenze e consegne sono registrate. Se ti serve, ti inviamo un riepilogo.</p>
      <ul>
        <li><strong>Non spetta</strong> a chi non partecipa agli incontri o agli eventi, a chi non svolge le attività richieste, a chi copia, registra o condivide i contenuti in violazione delle <Link href="/termini">Condizioni</Link> e del <Link href="/regolamento-corsi">Regolamento</Link>.</li>
        <li>Se hai partecipato e svolto le attività, il rimborso <strong>non dipende da un nostro giudizio sul tuo impegno</strong>: fa fede quello che risulta dai registri.</li>
      </ul>

      <h2 id="rimborso">6. Come e quando rimborsiamo</h2>
      <p>Rimborsiamo tutti i pagamenti ricevuti entro <strong>14 giorni</strong> da quando riceviamo la tua comunicazione di recesso, con lo <strong>stesso mezzo di pagamento</strong> che hai usato, senza costi per te (art. 56 Codice del consumo). Per la garanzia ci impegniamo ai medesimi tempi, dalla verifica della partecipazione.</p>

      <h2 id="rate">7. Se hai pagato a rate con una società finanziaria</h2>
      <p>Se hai finanziato l'acquisto con Pagodil, Pagolight o un servizio analogo, il finanziamento è un contratto separato tra te e la società finanziaria (vedi <Link href="/pagamenti-rateali">Pagamento a rate</Link>). Quando eserciti il recesso o la garanzia:</p>
      <ul>
        <li>ci avvisi come descritto sopra e <strong>ti consigliamo di avvisare anche la società finanziaria</strong>, che gestisce lo scioglimento del finanziamento secondo la normativa sul credito ai consumatori (artt. 124 e seguenti del D.Lgs. 385/1993);</li>
        <li>il rimborso non arriva sulla tua carta: restituiamo la somma alla società finanziaria, che interrompe le rate e ti rimborsa quanto già versato secondo il suo contratto;</li>
        <li>i tempi e gli eventuali costi del finanziamento sono quelli della società finanziaria. <Tbc>procedura operativa concordata con le finanziarie convenzionate</Tbc></li>
      </ul>

      <h2 id="annullamento">8. Se annulliamo noi un corso</h2>
      <p>Se annulliamo o spostiamo un corso in presenza, o non riusciamo a erogare un servizio, puoi scegliere tra una nuova data o il rimborso di quanto hai pagato per la parte non fruita, secondo le <Link href="/termini">Condizioni di vendita</Link>.</p>

      <h2 id="conformita">9. Garanzia legale di conformità</h2>
      <p>Per i contenuti e i servizi digitali acquistati come consumatore valgono le tutele legali sulla conformità (artt. 135-octies e seguenti del Codice del consumo). Se un contenuto non funziona o non è come descritto, scrivici: lo sistemiamo o ti proponiamo la soluzione prevista dalla legge.</p>

      <h2 id="modulo">10. Modulo tipo di recesso</h2>
      <p>(Compila e invia questo modulo solo se vuoi recedere dal contratto.)</p>
      <blockquote>
        <p>A: RD SRL, Viale Garibaldi 42, 51017 Pescia (PT), PEC rd_srl@namirialpec.it</p>
        <p>Con la presente io/noi (*) notifico/notifichiamo (*) il recesso dal mio/nostro (*) contratto di vendita del seguente servizio (*): ______________________</p>
        <p>Ordinato il (*) / ricevuto il (*): ______________________</p>
        <p>Nome del/dei consumatore/i: ______________________</p>
        <p>Indirizzo del/dei consumatore/i: ______________________</p>
        <p>Firma del/dei consumatore/i (solo se il presente modulo è notificato in formato cartaceo): ______________________</p>
        <p>Data: ______________________</p>
        <p>(*) Cancellare la dicitura inutile.</p>
      </blockquote>
    </LegalPage>
  );
}
