import { LegalPage, InBreve, Holder } from "@/components/LegalPage";
import { Tbc } from "@/components/Ui";
import { CookiePrefsLink } from "@/components/CookieBanner";
import { meta } from "@/lib/seo";

export const metadata = meta("Cookie Policy", "Quali cookie e strumenti simili usa il sito Rita Dolbakian Academy, a cosa servono, quanto durano e come puoi scegliere o cambiare le tue preferenze.", "/cookie");

const toc = [
  { id: "cosa", t: "Cosa sono i cookie" }, { id: "titolare", t: "Chi li gestisce" }, { id: "elenco", t: "Quali strumenti usiamo" }, { id: "scelta", t: "Come scegliere" },
  { id: "browser", t: "Dal tuo browser" }, { id: "terzi", t: "Cookie di terze parti" }, { id: "durata", t: "Durata del consenso" }, { id: "modifiche", t: "Modifiche" },
];

export default function Cookie() {
  return (
    <LegalPage eyebrow="Cookie" title="Cookie *policy*." toc={toc}
      intro="Qui spieghiamo quali cookie e strumenti simili usa questo sito, per cosa servono e come puoi decidere. Le regole seguite sono l'art. 122 del Codice privacy (D.Lgs. 196/2003), il GDPR e le Linee guida del Garante privacy del 10 giugno 2021.">
      <InBreve>
        <p>Usiamo sempre i cookie tecnici, necessari al funzionamento. Statistiche e pubblicità si attivano <strong>solo se dai il consenso</strong>. Il banner ha un pulsante «Rifiuta tutto» ben visibile e puoi cambiare idea quando vuoi: <CookiePrefsLink />.</p>
      </InBreve>

      <h2 id="cosa">1. Cosa sono i cookie</h2>
      <p>I cookie sono piccoli file che il sito salva sul tuo dispositivo. Con «cookie» intendiamo anche strumenti simili, come il <em>local storage</em> del browser e i pixel di tracciamento. Si distinguono per funzione:</p>
      <ul>
        <li><strong>Tecnici:</strong> servono a far funzionare il sito e a ricordare le tue scelte. Non richiedono il consenso.</li>
        <li><strong>Di analisi (statistici):</strong> ci dicono come viene usato il sito, per migliorarlo. Richiedono il consenso quando permettono di identificarti o sono di terze parti non anonimizzati.</li>
        <li><strong>Di marketing e profilazione:</strong> servono a mostrarti pubblicità e contenuti in linea con i tuoi interessi e a misurare le campagne. Richiedono sempre il consenso.</li>
      </ul>

      <h2 id="titolare">2. Chi li gestisce</h2>
      <p>Il titolare del trattamento è <Holder />. I cookie di terze parti sono gestiti dai rispettivi fornitori, che sono titolari autonomi per la loro parte.</p>

      <h2 id="elenco">3. Quali strumenti usiamo</h2>
      <div className="table-wrap">
        <table>
          <thead><tr><th>Strumento</th><th>Tipo</th><th>Scopo</th><th>Durata</th></tr></thead>
          <tbody>
            <tr><td><code>rd-consent-v1</code> (local storage)</td><td>Tecnico, nostro</td><td>Ricorda le tue scelte sui cookie</td><td>Fino a 6 mesi</td></tr>
            <tr><td><code>rd-guide-popup-v1</code> (local storage)</td><td>Tecnico, nostro</td><td>Evita di mostrarti più volte il popup della guida gratuita</td><td>Finché non cancelli i dati del browser</td></tr>
            <tr><td>Calendario di prenotazione GoHighLevel / LeadConnector</td><td>Tecnico / funzionale, di terze parti</td><td>Mostra la pagina di prenotazione della call e gestisce la sessione</td><td>Secondo il fornitore <Tbc>durata</Tbc></td></tr>
            <tr><td>Google Analytics 4 (<code>_ga</code>, <code>_ga_*</code>)</td><td>Analisi, di terze parti</td><td>Statistiche aggregate sull'uso del sito</td><td>Fino a 2 anni <Tbc>durata effettiva configurata</Tbc></td></tr>
            <tr><td>Meta Pixel (<code>_fbp</code>)</td><td>Marketing, di terze parti</td><td>Misura le campagne e mostra pubblicità pertinente</td><td>Fino a 3 mesi</td></tr>
          </tbody>
        </table>
      </div>
      <p>Gli strumenti di analisi e di marketing si attivano soltanto dopo il tuo consenso. <Tbc>elenco definitivo degli strumenti realmente attivati sul sito online</Tbc></p>

      <h2 id="scelta">4. Come dare o negare il consenso</h2>
      <p>Alla prima visita compare un banner con tre scelte, tutte alla stessa altezza: <strong>Rifiuta tutto</strong>, <strong>Personalizza</strong> e <strong>Accetta tutto</strong>. Se chiudi il banner senza scegliere, continuiamo a usare solo i cookie tecnici. Per cambiare o ritirare il consenso quando vuoi, usa «Preferenze cookie» nel piè di pagina del sito: <CookiePrefsLink />. Ritirare il consenso è semplice quanto darlo.</p>

      <h2 id="browser">5. Gestire i cookie dal browser</h2>
      <p>Puoi anche bloccare o cancellare i cookie dalle impostazioni del browser. Bloccare i cookie tecnici può impedire il corretto funzionamento di alcune parti del sito.</p>
      <ul>
        <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener">Google Chrome</a></li>
        <li><a href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie" target="_blank" rel="noopener">Mozilla Firefox</a></li>
        <li><a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener">Apple Safari</a></li>
        <li><a href="https://support.microsoft.com/it-it/microsoft-edge" target="_blank" rel="noopener">Microsoft Edge</a></li>
      </ul>

      <h2 id="terzi">6. Cookie di terze parti: informative e opposizione</h2>
      <ul>
        <li>Google Analytics: <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener">informativa Google</a> e <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener">componente aggiuntivo per disattivarlo</a>.</li>
        <li>Meta: <a href="https://www.facebook.com/privacy/policies/cookies/" target="_blank" rel="noopener">Cookie Policy di Meta</a>.</li>
        <li>GoHighLevel / LeadConnector: <a href="https://www.gohighlevel.com/privacy-policy" target="_blank" rel="noopener">informativa del fornitore</a>.</li>
      </ul>
      <p>Alcuni fornitori possono trasferire dati fuori dall'Unione Europea: trovi i dettagli nell'<a href="/privacy">Informativa privacy</a>.</p>

      <h2 id="durata">7. Per quanto vale la tua scelta</h2>
      <p>Conserviamo la tua scelta per sei mesi, poi ti chiediamo di nuovo se vuoi dare il consenso. Se rifiuti, non ti richiediamo il consenso prima di quel termine, salvo che cambino in modo rilevante gli strumenti usati.</p>

      <h2 id="modifiche">8. Modifiche</h2>
      <p>Aggiorniamo questa policy se cambiano gli strumenti o la normativa. La data dell'ultima modifica è in fondo alla pagina. Per altre informazioni sui tuoi dati e sui tuoi diritti consulta l'<a href="/privacy">Informativa privacy</a>.</p>
    </LegalPage>
  );
}
