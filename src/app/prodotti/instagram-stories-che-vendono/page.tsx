import { Tbc } from "@/components/Ui";
import { ProductPage } from "@/components/ProductPage";
import { meta } from "@/lib/seo";
import { CHECKOUT } from "@/lib/products";

export const metadata = meta("Instagram Stories che vendono: il manuale operativo", "Il manuale operativo di Rita Dolbakian per usare le Stories di Instagram e portare le follower a prenotare il primo trattamento, anche se non ami mostrarti in video.", "/prodotti/instagram-stories-che-vendono");

export default function Page() {
  return (
    <ProductPage
      name="Instagram Stories che vendono"
      slug="instagram-stories-che-vendono"
      eyebrow="Manuale operativo"
      title="Riempi l'agenda con *Instagram*, anche se non ami esporti."
      answer="Il metodo pratico e veloce per usare le Stories e trasformare le follower in clienti. Per massaggiatrici, fisioterapiste, osteopate e professioniste del lettino che non sanno cosa pubblicare, o non hanno voglia di stare davanti alla fotocamera."
      imageId="prodotto-stories"
      price="37 €"
      oldPrice="57 €"
      checkout={CHECKOUT.stories}
      cta="Voglio il manuale operativo a 37 €"
      painTitle="Pubblichi Stories che *nessuno* considera?"
      painNote="Non è colpa tua. Il problema non è la tua competenza tecnica: è che nessuno ti ha mai spiegato come usare le Stories per far prenotare."
      pains={["Pubblicare Stories ti sembra una perdita di tempo.", "Ti senti bloccata davanti alla fotocamera.", "Hai paura di sembrare invadente o poco professionale.", "Finisci per non pubblicare nulla."]}
      solutionTitle="Il manuale che ti dice *cosa* pubblicare."
      solution={<p>«Instagram Stories che vendono» è il manuale operativo con il metodo che uso io: Stories pensate per farti ricordare, farti riconoscere come esperta e portare le tue follower a prenotare il primo trattamento.</p>}
      benefits={[
        { t: "Resti nella mente", d: "Le tue follower si ricordano di te, perché ti vedono con regolarità." },
        { t: "Trasmetti competenza", d: "Autorevolezza e preparazione tecnica passano in modo naturale, senza vantarti." },
        { t: "Si arriva alla prenotazione", d: "Le follower sanno cosa fare per prenotare il loro primo trattamento." },
      ]}
      forWho={["Sei massaggiatrice, fisioterapista, osteopata o professionista del lettino.", "Non sai cosa pubblicare nelle Stories.", "Non ami mostrarti in video.", "Vuoi un metodo pratico, senza perdere tempo."]}
      bonus={{ t: "consulenza gratuita", d: "Analisi del tuo profilo Instagram." }}
      guarantee="Garanzia 14 giorni: provalo senza rischi. Se non fa per te, scrivici entro 14 giorni e ti rimborsiamo."
      description="Manuale operativo per usare le Stories di Instagram e portare le follower a prenotare."
      faq={[
        { q: "Devo mostrarmi in video?", a: "No. Il manuale è pensato anche per chi non ama stare davanti alla fotocamera." },
        { q: "Per chi è?", a: "Per massaggiatrici, fisioterapiste, osteopate e professioniste del lettino che vogliono usare Instagram per riempire l'agenda." },
        { q: "In che formato è?", a: <>È un manuale operativo digitale. <Tbc>formato e numero di pagine</Tbc></>, plain: "È un manuale operativo digitale." },
        { q: "Cosa succede se non fa per me?", a: "Hai 14 giorni di garanzia: scrivi e ricevi il rimborso." },
        { q: "Mi garantisci dei risultati?", a: "No. Ti do un metodo pratico: i risultati dipendono dalla tua situazione di partenza e da quanto lo applichi." },
      ]}
    />
  );
}
