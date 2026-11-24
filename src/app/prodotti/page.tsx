import { PageHero, CtaBand, Faq } from "@/components/Ui";
import { CatalogoCorsi } from "@/components/CatalogoCorsi";
import { meta } from "@/lib/seo";
import { Crumbs } from "@/components/Crumbs";

export const metadata = meta("Prodotti digitali di Rita Dolbakian", "Manuali e strumenti digitali di Rita Dolbakian per operatrici e operatori del benessere: da usare subito, con i tuoi tempi, a un prezzo contenuto.", "/prodotti", "/media/prodotto-stories.webp");

export default function Prodotti() {
  return (
    <>
      <Crumbs trail={[["Prodotti digitali", "/prodotti"]]} />
      <PageHero dark bgId="hero-stage" eyebrow="Prodotti digitali" title="Strumenti da usare *subito*." answer="Manuali e strumenti pratici che ho preparato per chi lavora nel benessere: li acquisti, li ricevi via email e li usi con i tuoi tempi." />
      <section className="section"><div className="wrap"><CatalogoCorsi only={["digitali"]} numbered={false} /></div></section>
      <CtaBand title="Vuoi un percorso *con me al tuo fianco*?" primary={{ href: "/corsi", label: "Guarda i corsi" }} secondary={{ href: "/call-orientamento", label: "Prenota la call" }} />
      <Faq items={[
        { q: "Come ricevo i prodotti digitali?", a: "Subito dopo il pagamento, via email, insieme all'accesso all'area corsi con le istruzioni per scaricarli." },
        { q: "Per quanto tempo restano disponibili?", a: "Per sempre: li scarichi quando vuoi." },
        { q: "C'è una garanzia?", a: "Sì: per Instagram Stories che vendono hai 14 giorni di garanzia. Se non fa per te, scrivi e ricevi il rimborso." },
        { q: "Ricevo la fattura?", a: "Sì. La ricevi via email, all'indirizzo che indichi al momento del pagamento." },
      ]} />
    </>
  );
}
