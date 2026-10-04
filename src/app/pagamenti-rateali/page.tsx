import Link from "next/link";
import { LegalPage, InBreve } from "@/components/LegalPage";
import { Tbc } from "@/components/Ui";
import { meta } from "@/lib/seo";

export const metadata = meta("Pagamento a rate: Pagodil, Pagolight e simili", "Come funziona il pagamento rateale dei corsi di Rita Dolbakian Academy con società finanziarie come Pagodil e Pagolight: passaggi, informazioni da leggere, recesso e rimborsi.", "/pagamenti-rateali");

const toc = [
  { id: "come", t: "Come funziona" }, { id: "chi", t: "Chi è chi" }, { id: "leggere", t: "Cosa leggere prima di firmare" }, { id: "diritti", t: "I tuoi diritti" }, { id: "rimborsi", t: "Recesso e rimborsi" }, { id: "domande", t: "Domande" },
];

export default function PagamentiRateali() {
  return (
    <LegalPage eyebrow="Pagamento a rate" title="Pagare *a rate*, senza sorprese." toc={toc}
      intro="Per alcuni corsi puoi dividere il costo in rate con una società finanziaria convenzionata, per esempio Pagodil, Pagolight o Heylight. Qui ti spieghiamo come funziona, chi fa cosa e cosa devi leggere prima di accettare.">
      <InBreve>
        <p>Il finanziamento lo concede la <strong>società finanziaria</strong>, non RD SRL, ed è soggetto alla sua approvazione. Prima di firmare ricevi le informazioni su costi, interessi e rate (SECCI): leggile con attenzione, perché il costo totale può essere superiore al prezzo del corso.</p>
      </InBreve>
      <p className="text-sm text-stone"><em>Messaggio pubblicitario con finalità promozionale. Salvo approvazione della società finanziaria. Per le condizioni economiche e contrattuali, fare riferimento alle Informazioni europee di base sul credito ai consumatori (SECCI), disponibili presso la società finanziaria prima della conclusione del contratto.</em></p>

      <h2 id="come">1. Come funziona</h2>
      <ol>
        <li><strong>Scegli il corso</strong> e, al momento del pagamento, l'opzione «Paga a rate» (se disponibile). <Tbc>importo minimo e massimo finanziabile, numero di rate disponibili</Tbc></li>
        <li><strong>Vieni indirizzato alla società finanziaria</strong>, dove inserisci i tuoi dati e fai la richiesta. Ti vengono presentate le condizioni economiche.</li>
        <li><strong>La società finanziaria valuta</strong> la richiesta e ti comunica l'esito. Può chiederti documenti.</li>
        <li><strong>Se è approvato</strong>, firmi il contratto di finanziamento con la società finanziaria e noi attiviamo il corso.</li>
        <li><strong>Paghi le rate</strong> alla società finanziaria, secondo le scadenze del contratto. Noi incassiamo il prezzo del corso dalla società finanziaria.</li>
      </ol>

      <h2 id="chi">2. Chi è chi</h2>
      <ul>
        <li><strong>RD SRL (Rita Dolbakian Academy)</strong> vende il corso. Non concede finanziamenti, non fa mediazione creditizia e non partecipa alla valutazione del tuo merito creditizio.</li>
        <li><strong>La società finanziaria</strong> (per esempio Pagodil, Pagolight, Heylight) concede il finanziamento ed è responsabile delle informazioni, delle condizioni, dell'addebito delle rate e del trattamento dei tuoi dati come titolare autonomo. <Tbc>denominazione completa e sede delle finanziarie convenzionate, e iscrizione agli albi</Tbc></li>
      </ul>

      <h2 id="leggere">3. Cosa leggere prima di firmare</h2>
      <p>La società finanziaria deve darti, prima che tu ti vincoli, le <strong>Informazioni europee di base sul credito ai consumatori (SECCI)</strong> e una copia del contratto. Controlla in particolare:</p>
      <ul>
        <li>l'<strong>importo totale</strong> che pagherai e l'<strong>importo di ogni rata</strong>;</li>
        <li>il <strong>TAN</strong> (tasso) e il <strong>TAEG</strong> (costo complessivo annuo), le <strong>spese</strong> e gli eventuali interessi;</li>
        <li>cosa succede in caso di <strong>ritardo o mancato pagamento</strong>, e le eventuali penali;</li>
        <li>le condizioni di <strong>estinzione anticipata</strong>.</li>
      </ul>
      <p>Il pagamento a rate è un impegno economico: valuta se puoi sostenerlo e, se hai dubbi, chiedi chiarimenti alla società finanziaria prima di accettare.</p>

      <h2 id="diritti">4. I tuoi diritti sul finanziamento</h2>
      <p>La normativa sul credito ai consumatori (D.Lgs. 385/1993, artt. 121 e seguenti) ti riconosce, tra l'altro:</p>
      <ul>
        <li>il diritto di <strong>ricevere informazioni chiare</strong> prima di firmare;</li>
        <li>il diritto di <strong>recedere dal contratto di credito</strong> entro 14 giorni dalla conclusione, alle condizioni previste dalla legge;</li>
        <li>il diritto di <strong>rimborsare in anticipo</strong> il finanziamento, in tutto o in parte;</li>
        <li>nei casi previsti per i <strong>contratti di credito collegati</strong>, la possibilità di far valere nei confronti del finanziatore l'inadempimento del venditore.</li>
      </ul>
      <p><Tbc>verifica da parte del consulente legale dell'elenco dei diritti applicabili ai prodotti Pagodil e Pagolight</Tbc></p>

      <h2 id="rimborsi">5. Recesso e rimborsi se paghi a rate</h2>
      <p>Il recesso dal corso e la garanzia «soddisfatti o rimborsati» valgono anche se paghi a rate. In quel caso restituiamo la somma alla società finanziaria, che interrompe le rate e ti rimborsa quanto hai già pagato secondo il suo contratto. Per fare più in fretta, avvisa anche la società finanziaria. Tutti i dettagli sono nella pagina <Link href="/rimborsi">Recesso, garanzia e rimborsi</Link>.</p>

      <h2 id="domande">6. Domande</h2>
      <h3>Pagare a rate costa di più?</h3>
      <p>Dipende dal tipo di finanziamento. Può avere interessi e spese: li trovi indicati nella SECCI e nel contratto. <Tbc>se alcune rate sono a tasso zero e a carico di RD SRL</Tbc></p>
      <h3>Che succede se la richiesta non viene approvata?</h3>
      <p>Non c'è nessun vincolo con noi: puoi scegliere un altro metodo di pagamento oppure rinunciare. Il corso si attiva solo dopo l'approvazione, o dopo il pagamento con un altro metodo.</p>
      <h3>Quando si attiva il corso?</h3>
      <p>Dopo l'approvazione del finanziamento e la conferma da parte della società finanziaria.</p>
      <h3>Posso estinguere prima?</h3>
      <p>Sì, nei modi previsti dal contratto di finanziamento. Chiedi alla società finanziaria le condizioni.</p>
      <h3>A chi mi rivolgo per un problema sulle rate?</h3>
      <p>Alla società finanziaria, che ha emesso il finanziamento. Per questioni sul corso, scrivi a noi. Trovi i recapiti in <Link href="/contatti">Contatti</Link>.</p>
    </LegalPage>
  );
}
