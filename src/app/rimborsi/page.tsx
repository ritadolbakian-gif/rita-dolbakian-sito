import Link from "next/link";
import { LegalPage, InBreve, Holder } from "@/components/LegalPage";
import { Tbc } from "@/components/Ui";
import { meta } from "@/lib/seo";

export const metadata = meta("Recesso, garanzia e rimborsi", "Come recedere entro 14 giorni, come funziona la garanzia «soddisfatti o rimborsati» di Wellness Mastery, tempi di rimborso e modulo di recesso. RD SRL, Rita Dolbakian Academy.", "/rimborsi");

const toc = [
  { id: "recesso", t: "Diritto di recesso (14 giorni)" }, { id: "come", t: "Come esercitarlo" }, { id: "limiti", t: "Quando è limitato o escluso" }, { id: "garanzia", t: "Garanzia «soddisfatti o rimborsati»" },
  { id: "rimborso", t: "Come e quando rimborsiamo" }, { id: "rate", t: "Se hai pagato a rate" }, { id: "annullamento", t: "Se annulliamo noi un corso" }, { id: "conformita", t: "Garanzia legale" }, { id: "modulo", t: "Modulo di recesso" },
];

export default function Rimborsi() {
  return (
    <LegalPage eyebrow="Recesso e rimborsi" title="Recesso, garanzia e *rimborsi*." toc={toc}
      intro="Se cambi idea, hai due strade: il recesso previsto dalla legge e, su Wellness Mastery, la garanzia «soddisfatti o rimborsati» di 14 giorni. Qui trovi come funzionano, come chiedere il rimborso e cosa cambia se hai pagato a rate.">
      <InBreve>
        <p><strong>Recesso di legge:</strong> 14 giorni, per i consumatori, senza dover spiegare il motivo. <strong>Garanzia commerciale:</strong> su Wellness Mastery hai 14 giorni per decidere se il percorso fa per te, altrimenti ricevi il rimborso. Scrivi alla PEC <a href="mailto:rd_srl@namirialpec.it">rd_srl@namirialpec.it</a>.</p>
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
      <p>In questi casi resta comunque valida la garanzia commerciale descritta sotto, se prevista per il tuo percorso.</p>

      <h2 id="garanzia">4. Garanzia «soddisfatti o rimborsati» di 14 giorni (Wellness Mastery)</h2>
      <p>Il percorso <strong>Wellness Mastery</strong> include una <strong>garanzia commerciale</strong>: se entro 14 giorni dall'acquisto senti che il percorso non fa per te, ci scrivi e ricevi il rimborso. È un impegno <strong>in più</strong> rispetto ai tuoi diritti di legge, e non li riduce.</p>
      <ul>
        <li><strong>Come chiederla:</strong> scrivi alla PEC o all'indirizzo <Tbc>email assistenza</Tbc> entro 14 giorni dall'acquisto, indicando il tuo nome e l'email usata per l'iscrizione.</li>
        <li><strong>Condizioni:</strong> <Tbc>condizioni esatte (per esempio se vale anche dopo aver visto i moduli, o se per gli 8 incontri 1:1 già svolti valgono regole specifiche)</Tbc></li>
        <li><strong>Altri percorsi:</strong> per Metodo A.G.E.N.D.A. e Metodo Rita Dolbakian la garanzia commerciale è <Tbc>prevista o non prevista</Tbc>; in ogni caso vale il recesso di legge.</li>
      </ul>

      <h2 id="rimborso">5. Come e quando rimborsiamo</h2>
      <p>Rimborsiamo tutti i pagamenti ricevuti entro <strong>14 giorni</strong> da quando riceviamo la tua comunicazione di recesso, con lo <strong>stesso mezzo di pagamento</strong> che hai usato, senza costi per te (art. 56 Codice del consumo). Per la garanzia commerciale ci impegniamo ai medesimi tempi.</p>

      <h2 id="rate">6. Se hai pagato a rate con una società finanziaria</h2>
      <p>Se hai finanziato l'acquisto con Pagodil, Pagolight o un servizio analogo, il finanziamento è un contratto separato tra te e la società finanziaria (vedi <Link href="/pagamenti-rateali">Pagamento a rate</Link>). Quando eserciti il recesso o la garanzia:</p>
      <ul>
        <li>ci avvisi come descritto sopra e <strong>ti consigliamo di avvisare anche la società finanziaria</strong>, che gestisce lo scioglimento del finanziamento secondo la normativa sul credito ai consumatori (artt. 124 e seguenti del D.Lgs. 385/1993);</li>
        <li>il rimborso non arriva sulla tua carta: restituiamo la somma alla società finanziaria, che interrompe le rate e ti rimborsa quanto già versato secondo il suo contratto;</li>
        <li>i tempi e gli eventuali costi del finanziamento sono quelli della società finanziaria. <Tbc>procedura operativa concordata con le finanziarie convenzionate</Tbc></li>
      </ul>

      <h2 id="annullamento">7. Se annulliamo noi un corso</h2>
      <p>Se annulliamo o spostiamo un corso in presenza, o non riusciamo a erogare un servizio, puoi scegliere tra una nuova data o il rimborso di quanto hai pagato per la parte non fruita, secondo le <Link href="/termini">Condizioni di vendita</Link>.</p>

      <h2 id="conformita">8. Garanzia legale di conformità</h2>
      <p>Per i contenuti e i servizi digitali acquistati come consumatore valgono le tutele legali sulla conformità (artt. 135-octies e seguenti del Codice del consumo). Se un contenuto non funziona o non è come descritto, scrivici: lo sistemiamo o ti proponiamo la soluzione prevista dalla legge.</p>

      <h2 id="modulo">9. Modulo tipo di recesso</h2>
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
