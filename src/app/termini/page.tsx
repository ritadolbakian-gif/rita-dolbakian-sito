import Link from "next/link";
import { LegalPage, InBreve, Holder } from "@/components/LegalPage";
import { Tbc } from "@/components/Ui";
import { meta } from "@/lib/seo";

export const metadata = meta("Termini e condizioni di vendita", "Condizioni generali di vendita dei corsi e dei percorsi di Rita Dolbakian Academy (RD SRL): corsi online e in presenza, pagamenti, pagamento rateale, recesso, responsabilità.", "/termini");

const toc = [
  { id: "ambito", t: "Chi vende e cosa si applica" }, { id: "definizioni", t: "Definizioni" }, { id: "servizi", t: "I servizi e cosa non sono" }, { id: "contratto", t: "Come si conclude il contratto" },
  { id: "prezzi", t: "Prezzi e fatturazione" }, { id: "pagamento", t: "Pagamento" }, { id: "rate", t: "Pagamento a rate con finanziaria" }, { id: "attivazione", t: "Attivazione e accesso" },
  { id: "recesso", t: "Recesso e garanzia" }, { id: "presenza", t: "Corsi in presenza" }, { id: "online", t: "Corsi online" }, { id: "affiancamento", t: "Affiancamento 1:1" },
  { id: "attestato", t: "L'attestato" }, { id: "obblighi", t: "Obblighi e salute" }, { id: "ip", t: "Diritti sui contenuti" }, { id: "responsabilita", t: "Responsabilità" },
  { id: "forza", t: "Cause di forza maggiore" }, { id: "reclami", t: "Reclami e controversie" }, { id: "legge", t: "Legge e foro" }, { id: "finali", t: "Disposizioni finali" },
];

export default function Termini() {
  return (
    <LegalPage eyebrow="Condizioni" title="Termini e condizioni *di vendita*." toc={toc}
      intro="Queste sono le condizioni che valgono quando acquisti un corso o un percorso da Rita Dolbakian Academy, online o in presenza, anche con pagamento a rate. Leggile prima di acquistare: ti diciamo cosa compri, quanto costa, come recedere e cosa succede se qualcosa non va.">
      <InBreve>
        <p>Vendiamo formazione, non prestazioni sanitarie. Hai 14 giorni per recedere secondo il Codice del consumo e, su tutti i percorsi, c'è in più la garanzia commerciale «soddisfatti o rimborsati» per tutta la durata del percorso, per chi partecipa e svolge le attività richieste. Se paghi a rate con Pagodil, Pagolight o simili, il finanziamento è un contratto separato con la società finanziaria.</p>
      </InBreve>

      <h2 id="ambito">1. Chi vende e cosa si applica</h2>
      <p>Il venditore è <Holder /> (di seguito «RD SRL», «noi»), che gestisce il marchio e il sito Rita Dolbakian Academy. Queste condizioni generali regolano i contratti a distanza conclusi tramite il sito, per telefono, via email o messaggio, per l'acquisto dei nostri servizi di formazione. Prevalgono, per i consumatori, le norme inderogabili di legge, in particolare il Codice del consumo (D.Lgs. 206/2005) e il D.Lgs. 70/2003 sul commercio elettronico.</p>

      <h2 id="definizioni">2. Definizioni</h2>
      <ul>
        <li><strong>Consumatore:</strong> la persona fisica che acquista per scopi estranei alla propria attività imprenditoriale o professionale.</li>
        <li><strong>Professionista o cliente business:</strong> chi acquista per la propria attività (per esempio titolare di partita IVA).</li>
        <li><strong>Corso online:</strong> lezioni, materiali e strumenti messi a disposizione in modalità digitale.</li>
        <li><strong>Corso in presenza:</strong> lezione svolta dal vivo in una sede e in una data stabilite.</li>
        <li><strong>Percorso:</strong> insieme di contenuti, incontri o affiancamento, come Metodo A.G.E.N.D.A., Wellness Mastery e Metodo Rita Dolbakian.</li>
      </ul>

      <h2 id="servizi">3. I servizi e cosa non sono</h2>
      <ul>
        <li>I nostri sono servizi di <strong>formazione</strong> su tecnica manuale e benessere e su come avviare e far crescere un'attività nel benessere.</li>
        <li><strong>Non sono prestazioni sanitarie</strong>, non danno indicazioni mediche e non promettono guarigioni o effetti terapeutici.</li>
        <li><strong>Obbligazione di mezzi, non di risultato.</strong> Ti forniamo metodo, contenuti e affiancamento. Non garantiamo guadagni, numero di clienti o altri risultati economici, che dipendono dalla tua situazione e dal tuo impegno. Le testimonianze sul sito riflettono esperienze individuali.</li>
        <li>Il programma di ciascun corso (contenuti, durata, calendario) è quello indicato nella pagina del corso al momento dell'acquisto. <Tbc>programmi, durate e calendari definitivi</Tbc></li>
      </ul>

      <h2 id="contratto">4. Come si conclude il contratto</h2>
      <p>Per i corsi acquistabili online il contratto si conclude quando completi l'ordine e premi il pulsante di conferma con obbligo di pagamento; riceverai una email di conferma con il riepilogo. Per i percorsi con candidatura o call di orientamento (come l'affiancamento), il contratto si conclude quando accetti la proposta che ti inviamo. Prima di confermare puoi verificare e correggere i dati inseriti. Il contratto è in lingua italiana ed è archiviato da noi; puoi chiederne copia.</p>
      <p>Per i corsi in presenza l'iscrizione è valida fino al raggiungimento dei posti disponibili.</p>

      <h2 id="prezzi">5. Prezzi e fatturazione</h2>
      <p>I prezzi sono in euro e, per i consumatori, comprensivi di IVA se dovuta. Il prezzo finale, le eventuali rate e ogni spesa sono mostrati prima della conferma. Emettiamo fattura elettronica: ci servono i tuoi dati fiscali (codice fiscale o partita IVA, indirizzo, codice destinatario o PEC). I prezzi possono cambiare, ma non per gli ordini già confermati.</p>

      <h2 id="pagamento">6. Pagamento</h2>
      <p>Puoi pagare con i metodi indicati al momento dell'acquisto: <Tbc>carta, bonifico, PayPal o altri</Tbc>. Il pagamento in un'unica soluzione si addebita alla conferma dell'ordine; per il bonifico l'accesso si attiva dopo l'accredito. <Tbc>eventuale rateizzazione diretta con RD SRL, senza finanziaria</Tbc></p>

      <h2 id="rate">7. Pagamento a rate con società finanziaria (Pagodil, Pagolight e simili)</h2>
      <p>Per alcuni corsi puoi scegliere di pagare a rate tramite una società finanziaria convenzionata (per esempio Pagodil o Pagolight). Funziona così:</p>
      <ul>
        <li><strong>Servizio facoltativo.</strong> È un'opzione di pagamento, non un obbligo. Puoi sempre scegliere un altro metodo, se disponibile.</li>
        <li><strong>La finanziaria decide.</strong> La concessione del finanziamento è soggetta alla valutazione e all'approvazione della società finanziaria. Se non viene approvato, il corso non si attiva con questa modalità e puoi scegliere un altro metodo di pagamento.</li>
        <li><strong>RD SRL non è il finanziatore.</strong> Non concediamo finanziamenti e non svolgiamo attività di mediazione creditizia. Il contratto di finanziamento è un contratto separato, concluso direttamente tra te e la società finanziaria.</li>
        <li><strong>Leggi le condizioni prima di firmare.</strong> Importo, numero e importo delle rate, TAN, TAEG, spese, interessi e penali sono nelle «Informazioni europee di base sul credito ai consumatori» (SECCI) e nel contratto che la finanziaria deve consegnarti prima che tu ti vincoli (artt. 124 e seguenti del D.Lgs. 385/1993, TUB). Il costo totale del credito può essere superiore al prezzo del corso: verifica sempre il costo complessivo.</li>
        <li><strong>I tuoi diritti sul finanziamento.</strong> La legge ti riconosce, tra gli altri, il diritto di recedere dal contratto di credito nei termini previsti, di rimborsarlo in anticipo e, nei casi previsti per i contratti di credito collegati, di far valere nei confronti del finanziatore i problemi del servizio acquistato. I dettagli sono nel contratto e nella normativa del credito ai consumatori.</li>
        <li><strong>Se recedi dall'acquisto.</strong> Quando eserciti il recesso o la garanzia «soddisfatti o rimborsati» su un corso pagato a rate, il rimborso passa dalla società finanziaria, secondo le sue procedure. Vedi la pagina <Link href="/rimborsi">Recesso, garanzia e rimborsi</Link>.</li>
        <li><strong>Dati.</strong> La finanziaria tratta i tuoi dati come titolare autonomo, con una propria informativa. Vedi l'<Link href="/privacy">Informativa privacy</Link>.</li>
      </ul>
      <p>Una descrizione semplice di come funziona è nella pagina <Link href="/pagamenti-rateali">Pagamento a rate</Link>. <Tbc>nome delle finanziarie convenzionate, importi minimi e massimi, eventuali costi per RD SRL non a carico del cliente</Tbc></p>

      <h2 id="attivazione">8. Attivazione e accesso</h2>
      <p>I corsi online si attivano, di norma, subito dopo la conferma del pagamento (o dell'approvazione del finanziamento, se paghi a rate) con l'invio delle credenziali per l'<Link href="/area-privata">Area Privata</Link>. Le credenziali sono personali: non puoi cederle o condividerle. L'accesso dura <Tbc>durata dell'accesso per ciascun corso</Tbc>. I corsi in presenza partono nelle date e nelle sedi comunicate al momento dell'iscrizione.</p>

      <h2 id="recesso">9. Recesso e garanzia «soddisfatti o rimborsati»</h2>
      <p>Se sei un consumatore hai il <strong>diritto di recedere entro 14 giorni</strong> dalla conclusione del contratto, senza dare spiegazioni, nei casi e con le modalità previsti dagli artt. 52 e seguenti del Codice del consumo. Per i contenuti digitali e per i servizi, il diritto di recesso può essere limitato o escluso nei casi previsti dall'art. 59, se hai chiesto espressamente l'avvio immediato e hai ricevuto le informazioni e le conferme richieste. Tutti i percorsi prevedono inoltre una <strong>garanzia commerciale «soddisfatti o rimborsati» per tutta la durata del percorso</strong>, che si aggiunge ai tuoi diritti di legge senza ridurli. Per accedervi devi aver <strong>partecipato agli incontri su Zoom e agli eventi e svolto le attività richieste</strong>, e poterlo dimostrare: la presenza e le consegne risultano dai registri della piattaforma. Non è una garanzia di risultati economici. Le modalità, le condizioni e il modulo di recesso sono nella pagina <Link href="/rimborsi">Recesso, garanzia e rimborsi</Link>.</p>

      <h2 id="presenza">10. Corsi in presenza</h2>
      <ul>
        <li><strong>Iscrizione e posti.</strong> I posti sono limitati. L'iscrizione è confermata con la ricezione del pagamento (o dell'approvazione del finanziamento).</li>
        <li><strong>Modifiche da parte nostra.</strong> Per cause organizzative o per un numero insufficiente di partecipanti possiamo spostare la data o la sede o annullare il corso, avvisandoti appena possibile. Se non puoi partecipare alla nuova data, hai diritto al rimborso di quanto versato per il corso non fruito.</li>
        <li><strong>Assenze e recuperi.</strong> Se non puoi partecipare a una data puoi chiedere di spostarti in un'edizione successiva, nei limiti dei posti disponibili. <Tbc>regole sui recuperi e sulle assenze</Tbc></li>
        <li><strong>Sostituzione.</strong> Puoi indicare un'altra persona al tuo posto, se ci avvisi in anticipo e se ha i requisiti richiesti.</li>
        <li><strong>Regolamento.</strong> La partecipazione è soggetta al <Link href="/regolamento-corsi">Regolamento dei corsi</Link> (comportamento, igiene, sicurezza, foto e video).</li>
      </ul>

      <h2 id="online">11. Corsi online</h2>
      <ul>
        <li><strong>Licenza personale.</strong> Ti concediamo una licenza personale, non esclusiva e non cedibile, per usare i contenuti per tuo apprendimento e per il tuo lavoro.</li>
        <li><strong>Vietato</strong> registrare, copiare, rivendere, condividere o pubblicare lezioni e materiali. La violazione può comportare la sospensione dell'accesso e il risarcimento del danno.</li>
        <li><strong>Requisiti tecnici.</strong> Servono un dispositivo e una connessione a internet. Possono esserci interruzioni per manutenzione o cause fuori dal nostro controllo; ci impegniamo a ripristinare l'accesso il prima possibile.</li>
        <li><strong>Conformità dei contenuti digitali.</strong> Si applicano le tutele di legge per la conformità dei contenuti e dei servizi digitali (artt. 135-octies e seguenti del Codice del consumo).</li>
      </ul>

      <h2 id="affiancamento">12. Affiancamento individuale (1:1)</h2>
      <p>Dove previsto (per esempio le 8 settimane di Wellness Mastery o l'affiancamento A.G.E.N.D.A.), gli incontri si svolgono in videochiamata secondo un calendario concordato. <Tbc>numero, durata e frequenza degli incontri; regole di spostamento e di assenza</Tbc> L'affiancamento è un supporto formativo: le decisioni sulla tua attività restano tue.</p>

      <h2 id="attestato">13. L'attestato</h2>
      <p>Dove previsto, al termine del percorso rilasci un <strong>attestato di partecipazione di Rita Dolbakian Academy</strong>. Non è un titolo di studio né una qualifica abilitante all'esercizio di una professione e non sostituisce le autorizzazioni o i requisiti che la legge richiede per svolgere un'attività. <Tbc>formula e requisiti per il rilascio</Tbc></p>

      <h2 id="obblighi">14. Obblighi del cliente e salute</h2>
      <ul>
        <li>Fornisci dati veri e completi e tienili aggiornati.</li>
        <li>Rispetta il Regolamento dei corsi e le indicazioni di sicurezza e igiene durante le pratiche.</li>
        <li><strong>Salute.</strong> Nei corsi in presenza si fanno esercitazioni pratiche sul corpo. Ci comunichi per tempo, e a tua discrezione, eventuali condizioni che richiedono attenzione. Se hai dubbi sulla tua idoneità, consulta il tuo medico prima di partecipare. Puoi sospendere o rifiutare una pratica in ogni momento.</li>
        <li>Comportamenti offensivi, scorretti o pericolosi possono portare all'allontanamento dal corso, secondo il Regolamento.</li>
      </ul>

      <h2 id="ip">15. Diritti sui contenuti</h2>
      <p>Programmi, video, testi, schemi, materiali e marchi (compreso «Metodo A.G.E.N.D.A.», «Wellness Mastery», «Metodo Rita Dolbakian» e «Rita Dolbakian Academy») sono di RD SRL o dei rispettivi titolari e sono protetti dalla normativa sul diritto d'autore e sui marchi. L'acquisto non trasferisce alcun diritto, salvo la licenza d'uso della sezione 11. <Tbc>stato della registrazione dei marchi</Tbc></p>

      <h2 id="responsabilita">16. Responsabilità</h2>
      <p>Nulla in queste condizioni esclude o limita la nostra responsabilità nei casi in cui la legge non lo consente, per esempio per dolo o colpa grave, per i danni alla persona o per i diritti inderogabili del consumatore. Per il resto: le tecniche e i consigli del corso vanno applicati con prudenza e sotto la tua responsabilità, nel rispetto della normativa che regola la tua attività; non rispondiamo dei risultati economici della tua attività né dell'uso che fai dei contenuti in modo difforme dalle indicazioni. Per i clienti business la responsabilità è limitata, nei limiti consentiti, all'importo pagato per il corso. <Tbc>polizza di responsabilità civile e coperture assicurative per i corsi in presenza</Tbc></p>

      <h2 id="forza">17. Cause di forza maggiore</h2>
      <p>Non rispondiamo dei ritardi o delle mancate prestazioni causati da eventi fuori dal nostro ragionevole controllo (per esempio calamità, provvedimenti dell'autorità, indisponibilità della sede, malattia improvvisa del docente, guasti di rete). In questi casi concordiamo con te una nuova data o una modalità alternativa; se non è possibile, ti rimborsiamo la parte di corso non fruita.</p>

      <h2 id="reclami">18. Reclami e controversie</h2>
      <p>Per reclami e richieste di assistenza scrivi alla PEC <a href="mailto:rd_srl@namirialpec.it">rd_srl@namirialpec.it</a> o all'indirizzo <Tbc>email assistenza</Tbc>. Rispondiamo entro <Tbc>tempi di risposta ai reclami</Tbc>. Se sei un consumatore puoi anche rivolgerti a un organismo di risoluzione alternativa delle controversie (ADR) tra quelli iscritti nell'elenco tenuto dall'autorità competente (artt. 141-bis e seguenti del Codice del consumo), fermo restando il diritto di agire davanti al giudice. <Tbc>organismo ADR di riferimento, se aderiamo a uno</Tbc></p>

      <h2 id="legge">19. Legge applicabile e foro competente</h2>
      <p>I contratti sono regolati dalla legge italiana. Per le controversie con i <strong>consumatori</strong> è competente, in modo inderogabile, il giudice del luogo di residenza o di domicilio del consumatore (art. 66-bis del Codice del consumo). Per i <strong>clienti business</strong> è competente in via esclusiva il Foro di <Tbc>Pistoia</Tbc>.</p>

      <h2 id="finali">20. Disposizioni finali</h2>
      <p>Se una clausola fosse nulla o non applicabile, le altre restano valide. Possiamo aggiornare queste condizioni; si applicano a quelle in vigore al momento dell'acquisto. Le comunicazioni avvengono all'indirizzo email che ci hai fornito. Questa pagina riassume le informazioni precontrattuali richieste dall'art. 49 del Codice del consumo insieme alle pagine <Link href="/rimborsi">Recesso, garanzia e rimborsi</Link>, <Link href="/pagamenti-rateali">Pagamento a rate</Link>, <Link href="/regolamento-corsi">Regolamento dei corsi</Link> e <Link href="/privacy">Privacy</Link>.</p>
    </LegalPage>
  );
}
