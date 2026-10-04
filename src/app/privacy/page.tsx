import { LegalPage, InBreve, Holder } from "@/components/LegalPage";
import { Tbc } from "@/components/Ui";
import { meta } from "@/lib/seo";

export const metadata = meta("Informativa privacy", "Informativa sul trattamento dei dati personali (artt. 13 e 14 GDPR) di RD SRL, titolare del sito Rita Dolbakian Academy: dati, finalità, destinatari, conservazione e diritti.", "/privacy");

const toc = [
  { id: "titolare", t: "Chi è il titolare" }, { id: "dati", t: "Quali dati raccogliamo" }, { id: "finalita", t: "Perché li usiamo" }, { id: "destinatari", t: "A chi li comunichiamo" },
  { id: "extraue", t: "Trasferimenti fuori dall'UE" }, { id: "corsi", t: "Corsi dal vivo e online" }, { id: "pagamenti", t: "Pagamenti e rate" }, { id: "marketing", t: "Marketing e comunicazioni" },
  { id: "conservazione", t: "Per quanto tempo" }, { id: "diritti", t: "I tuoi diritti" }, { id: "conferimento", t: "Conferimento e minori" }, { id: "sicurezza", t: "Sicurezza e modifiche" },
];

export default function Privacy() {
  return (
    <LegalPage eyebrow="Privacy" title="Informativa *privacy*." toc={toc}
      intro="Qui trovi, in modo chiaro, quali dati personali tratta RD SRL quando visiti il sito, ti iscrivi a un corso, prenoti una call o scegli di pagare a rate, e quali sono i tuoi diritti. È l'informativa prevista dagli artt. 13 e 14 del Regolamento (UE) 2016/679 (GDPR).">
      <InBreve>
        <p>Raccogliamo solo i dati che servono per risponderti, iscriverti ai corsi, emettere le fatture e, se acconsenti, inviarti comunicazioni. Non vendiamo i tuoi dati. Puoi esercitare i tuoi diritti in ogni momento scrivendo alla PEC indicata qui sotto.</p>
      </InBreve>

      <h2 id="titolare">1. Chi è il titolare del trattamento</h2>
      <p>Il titolare è <Holder />. Il sito «Rita Dolbakian Academy» (RD Academy) è gestito dal titolare.</p>
      <p>Per qualsiasi richiesta sulla privacy puoi scrivere alla PEC <a href="mailto:rd_srl@namirialpec.it">rd_srl@namirialpec.it</a> oppure all'email dedicata: <Tbc>indirizzo email privacy</Tbc>. Il titolare non ha nominato un Responsabile della protezione dei dati (DPO), non essendo obbligatorio nel suo caso. <Tbc>conferma della non necessità del DPO</Tbc></p>

      <h2 id="dati">2. Quali dati raccogliamo</h2>
      <ul>
        <li><strong>Dati di navigazione:</strong> indirizzo IP, tipo di browser e dispositivo, pagine visitate, orari. Sono trattati dai sistemi che fanno funzionare il sito.</li>
        <li><strong>Dati che ci fornisci tu:</strong> nome, cognome, email, telefono e il contenuto dei messaggi, quando compili un modulo (guida gratuita, contatti) o prenoti la call di orientamento.</li>
        <li><strong>Dati di acquisto e fatturazione:</strong> dati anagrafici, indirizzo, codice fiscale o partita IVA, codice SDI o PEC, corso scelto, importi e modalità di pagamento. Non conserviamo i numeri delle carte di pagamento.</li>
        <li><strong>Dati sul pagamento rateale:</strong> se scegli di pagare a rate con una società finanziaria (per esempio Pagodil o Pagolight), la richiesta di finanziamento è gestita direttamente dalla società finanziaria. A noi arriva l'esito (approvato o non approvato) e le informazioni necessarie ad attivare il corso.</li>
        <li><strong>Dati sui corsi:</strong> iscrizione, presenze agli incontri su Zoom e agli eventi, attività e compiti consegnati, verifiche, attestati. Servono a erogare il corso e, se la richiedi, a verificare i requisiti della garanzia «soddisfatti o rimborsati». Per i corsi in presenza possono essere trattati anche foto e video (solo con il tuo consenso) e informazioni sulla salute, se ce le comunichi, per svolgere le esercitazioni pratiche in sicurezza (vedi la sezione 6).</li>
        <li><strong>Dati raccolti con cookie e strumenti simili:</strong> secondo la <a href="/cookie">Cookie Policy</a> e solo se hai dato il consenso, quando richiesto.</li>
        <li><strong>Comunicazioni:</strong> email, messaggi su WhatsApp e altri canali che ci scrivi.</li>
      </ul>

      <h2 id="finalita">3. Perché usiamo i tuoi dati e su quale base di legge</h2>
      <div className="table-wrap">
        <table>
          <thead><tr><th>Finalità</th><th>Base giuridica</th><th>Conservazione</th></tr></thead>
          <tbody>
            <tr><td>Rispondere a richieste, prenotare la call di orientamento, inviarti la guida gratuita</td><td>Misure precontrattuali / esecuzione di quanto richiesto (art. 6.1.b GDPR)</td><td>Fino a 24 mesi dall'ultimo contatto <Tbc>durata</Tbc></td></tr>
            <tr><td>Iscriverti ai corsi e ai percorsi, erogarli, registrare presenze e attività, verificare i requisiti della garanzia «soddisfatti o rimborsati», darti assistenza, rilasciare l'attestato</td><td>Esecuzione del contratto (art. 6.1.b)</td><td>Per la durata del contratto, poi i tempi di legge</td></tr>
            <tr><td>Adempimenti fiscali, contabili e amministrativi (fatture, scritture)</td><td>Obbligo di legge (art. 6.1.c)</td><td>10 anni (art. 2220 c.c.)</td></tr>
            <tr><td>Gestire pagamenti e rateizzazioni, anche tramite società finanziarie convenzionate</td><td>Esecuzione del contratto (art. 6.1.b)</td><td>Per la durata del contratto e i tempi di legge</td></tr>
            <tr><td>Sicurezza nelle esercitazioni pratiche dei corsi in presenza (informazioni sulla salute)</td><td>Consenso esplicito (art. 9.2.a)</td><td>Fino alla fine del corso <Tbc>durata</Tbc></td></tr>
            <tr><td>Foto e video durante i corsi, per documentare e promuovere le attività</td><td>Consenso, facoltativo e revocabile (art. 6.1.a)</td><td>Fino alla revoca</td></tr>
            <tr><td>Newsletter, email e messaggi promozionali su corsi e contenuti</td><td>Consenso (art. 6.1.a). Per i clienti: invio di comunicazioni su servizi analoghi a quelli acquistati, con possibilità di opporsi in ogni momento (art. 130, comma 4, D.Lgs. 196/2003)</td><td>Fino alla revoca, o 24 mesi di inattività</td></tr>
            <tr><td>Statistiche sull'uso del sito (analytics)</td><td>Consenso (cookie non tecnici)</td><td>Secondo la Cookie Policy</td></tr>
            <tr><td>Pubblicità mirata e misurazione delle campagne (marketing/remarketing)</td><td>Consenso (cookie non tecnici)</td><td>Secondo la Cookie Policy</td></tr>
            <tr><td>Difendere i nostri diritti, prevenire abusi e frodi, tenere sicuro il sito</td><td>Legittimo interesse (art. 6.1.f)</td><td>Per i tempi di prescrizione dei diritti; log tecnici per un periodo limitato</td></tr>
          </tbody>
        </table>
      </div>
      <p>Non prendiamo decisioni basate esclusivamente su trattamenti automatizzati che producano effetti giuridici su di te.</p>

      <h2 id="destinatari">4. A chi comunichiamo i dati</h2>
      <p>I dati possono essere trattati da persone autorizzate dal titolare e da soggetti esterni, nominati responsabili del trattamento (art. 28 GDPR) quando agiscono per nostro conto:</p>
      <ul>
        <li>fornitori di hosting e infrastruttura del sito (Vercel Inc.);</li>
        <li>il gestionale per moduli, prenotazioni, email e automazioni (GoHighLevel / LeadConnector);</li>
        <li>la piattaforma dei corsi e di pagamento: <Tbc>nome dei fornitori</Tbc>;</li>
        <li>commercialisti, consulenti e professionisti che ci assistono;</li>
        <li>fornitori di strumenti di analisi e di advertising, se hai acconsentito (per esempio Google e Meta).</li>
      </ul>
      <p>Operano come <strong>titolari autonomi</strong>, con una propria informativa, le società finanziarie e gli istituti di pagamento che gestiscono il pagamento rateale (per esempio Pagodil o Pagolight) e la tua banca. Possiamo inoltre comunicare dati ad autorità pubbliche quando la legge lo richiede. I dati non sono diffusi né venduti.</p>

      <h2 id="extraue">5. Trasferimenti fuori dall'Unione Europea</h2>
      <p>Alcuni fornitori (per esempio Vercel, GoHighLevel, Google, Meta) hanno sede o server negli Stati Uniti. In questi casi il trasferimento avviene verso soggetti aderenti al Data Privacy Framework UE-USA (decisione di adeguatezza della Commissione europea del 10 luglio 2023) oppure con le Clausole contrattuali standard approvate dalla Commissione, con eventuali misure aggiuntive. Puoi chiedere una copia delle garanzie scrivendo al titolare. <Tbc>verifica delle garanzie di ogni fornitore</Tbc></p>

      <h2 id="corsi">6. Corsi dal vivo e online: salute, foto e video</h2>
      <ul>
        <li><strong>Esercitazioni pratiche.</strong> Nei corsi in presenza i partecipanti si esercitano tra loro. Per svolgerle in sicurezza possiamo chiederti di comunicare eventuali condizioni fisiche, allergie o limitazioni rilevanti. Sono dati relativi alla salute: li trattiamo solo con il tuo consenso esplicito, li vede solo chi tiene il corso e puoi non fornirli, senza svantaggi, salvo la possibilità di partecipare a singole pratiche.</li>
        <li><strong>Foto e video.</strong> Durante i corsi possono essere scattate foto o girati video. Non è obbligatorio comparire: ti chiederemo un consenso separato (liberatoria) e potrai revocarlo, scrivendoci, con effetto per il futuro. <Tbc>modulo di liberatoria</Tbc></li>
        <li><strong>Registrazioni.</strong> Le lezioni online possono essere registrate per metterle a disposizione dei partecipanti. Se compari in una registrazione ti avviseremo prima.</li>
      </ul>

      <h2 id="pagamenti">7. Pagamenti e pagamento a rate</h2>
      <p>I pagamenti avvengono tramite sistemi di pagamento sicuri di terzi: noi non vediamo né conserviamo i dati completi della tua carta. Se scegli il pagamento rateale con Pagodil, Pagolight o servizi analoghi, la società finanziaria valuta la tua richiesta in autonomia, ti fornisce le informazioni precontrattuali e tratta i tuoi dati come titolare, secondo la sua informativa. RD SRL non svolge attività di finanziamento e non partecipa alla valutazione del merito creditizio. Riceviamo solo l'esito e i dati necessari a gestire la tua iscrizione e a incassare dalla finanziaria.</p>

      <h2 id="marketing">8. Marketing e comunicazioni</h2>
      <p>Il consenso al marketing è sempre <strong>separato</strong> e facoltativo: puoi ricevere ciò che hai richiesto (per esempio la guida) anche senza iscriverti alla newsletter. Se acconsenti, ti scriveremo via email e, se ci hai dato il numero, via WhatsApp o telefono. Puoi disiscriverti con il link presente in ogni email o scrivendoci. Una volta revocato il consenso non riceverai più comunicazioni promozionali.</p>

      <h2 id="conservazione">9. Per quanto tempo conserviamo i dati</h2>
      <p>Conserviamo i dati per il tempo indicato nella tabella della sezione 3 e comunque non oltre quanto necessario per le finalità. Dopo, i dati sono cancellati o resi anonimi, salvo obblighi di legge o la necessità di difendere un diritto in giudizio.</p>

      <h2 id="diritti">10. I tuoi diritti</h2>
      <p>In ogni momento puoi chiedere: l'<strong>accesso</strong> ai tuoi dati; la <strong>rettifica</strong>; la <strong>cancellazione</strong>; la <strong>limitazione</strong> del trattamento; la <strong>portabilità</strong> dei dati; di <strong>opporti</strong> al trattamento basato su legittimo interesse o per marketing; la <strong>revoca del consenso</strong>, senza pregiudicare i trattamenti già effettuati.</p>
      <p>Scrivi alla PEC <a href="mailto:rd_srl@namirialpec.it">rd_srl@namirialpec.it</a>. Rispondiamo entro un mese, prorogabile di due mesi nei casi complessi, come previsto dall'art. 12 GDPR. Hai anche il diritto di proporre reclamo al <strong>Garante per la protezione dei dati personali</strong> (<a href="https://www.garanteprivacy.it" target="_blank" rel="noopener">www.garanteprivacy.it</a>).</p>

      <h2 id="conferimento">11. Conferimento dei dati e minori</h2>
      <p>Il conferimento dei dati contrassegnati come necessari nei moduli è obbligatorio per rispondere alla richiesta o concludere il contratto; senza non possiamo darvi seguito. Tutto il resto è facoltativo. I servizi sono rivolti a persone maggiorenni: non raccogliamo consapevolmente dati di minori.</p>

      <h2 id="sicurezza">12. Sicurezza e modifiche</h2>
      <p>Adottiamo misure tecniche e organizzative adeguate (connessione cifrata, accessi limitati, fornitori selezionati). Se il trattamento cambia in modo rilevante, aggiorniamo questa informativa e la data in fondo alla pagina.</p>
    </LegalPage>
  );
}
