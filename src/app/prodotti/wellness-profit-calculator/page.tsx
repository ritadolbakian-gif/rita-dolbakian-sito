import { Tbc } from "@/components/Ui";
import { ProductPage } from "@/components/ProductPage";
import { meta } from "@/lib/seo";
import { CHECKOUT } from "@/lib/products";

export const metadata = meta("Wellness Profit Calculator: foglio di calcolo per il regime forfettario", "Il foglio di calcolo di RD Academy per operatori del benessere in regime forfettario: i tuoi numeri in un posto solo.", "/prodotti/wellness-profit-calculator");

export default function Page() {
  return (
    <ProductPage
      name="Wellness Profit Calculator"
      slug="wellness-profit-calculator"
      eyebrow="Foglio di calcolo · regime forfettario"
      title="I tuoi numeri, *finalmente* chiari."
      answer="Un foglio di calcolo (XLS) pensato per chi lavora nel benessere in regime forfettario, per capire quanto entra, quanto resta e quanto serve davvero."
      imageId="prodotto-calcolatore"
      price={<Tbc>prezzo</Tbc>}
      checkout={CHECKOUT.calcolatore}
      cta="Acquista il calcolatore"
      painTitle="Sai quanto *resta* davvero?"
      painNote="Tra tasse, contributi e spese è facile perdere il conto. Senza numeri chiari è difficile decidere i prezzi."
      pains={["Non sai quanto devi tenere da parte per tasse e contributi.", "Fissi i prezzi a sensazione.", "Non sai quanti clienti ti servono al mese.", "I conti li fai a fine anno, quando è tardi."]}
      solutionTitle="Un foglio, *tutti* i tuoi numeri."
      solution={<p>Il Wellness Profit Calculator è un file Excel pronto da compilare. <Tbc>funzioni e contenuto esatto del foglio, da descrivere</Tbc></p>}
      benefits={[
        { t: "Numeri chiari", d: <Tbc>cosa calcola</Tbc> },
        { t: "Prezzi più consapevoli", d: "Capisci da quanto partire per lavorare con serenità." },
        { t: "Subito utilizzabile", d: "File XLS: lo apri e lo compili." },
      ]}
      forWho={["Lavori nel benessere con partita IVA in regime forfettario.", "Vuoi capire i tuoi margini.", "Preferisci un file semplice a un software complicato."]}
      notForWho={["Cerchi una consulenza fiscale personalizzata: per quella serve il tuo commercialista."]}
      guarantee={<Tbc>condizioni di garanzia e rimborso del prodotto</Tbc>}
      description="Foglio di calcolo XLS per operatori del benessere in regime forfettario."
      faq={[
        { q: "Sostituisce il commercialista?", a: "No. È uno strumento di calcolo orientativo: per decisioni fiscali ti consiglio di confrontarti con il tuo commercialista." },
        { q: "In che formato è?", a: "È un file XLS, compatibile con Excel." },
        { q: "Funziona anche con Google Fogli?", a: <Tbc>verificare compatibilità</Tbc>, plain: "Compatibilità da verificare." },
      ]}
    />
  );
}
