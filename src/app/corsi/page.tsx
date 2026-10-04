import { QuoteWall } from "@/components/Proof";
import { PageHero, CtaBand, Faq, Tbc } from "@/components/Ui";
import { CatalogoCorsi } from "@/components/CatalogoCorsi";
import { meta } from "@/lib/seo";

export const metadata = meta("Corsi, guide e percorsi di Rita Dolbakian", "Il catalogo di Rita Dolbakian: guida gratuita, Metodo A.G.E.N.D.A., Metodo Sold Out e Metodo Rita Dolbakian per imparare a massaggiare.", "/corsi");

export default function Corsi() {
  return (
    <>
      <PageHero imageId="corsi-top" imageRatio="4/5" imageArt="leaf" eyebrow="Corsi" title="Il corso giusto per il tuo *prossimo passo*." answer="Non sai quale corso ti serve? Qui trovi tutto quello che ho preparato, in tre gruppi: percorsi di affiancamento, prodotti digitali e risorse gratuite." />
      <section className="section"><div className="wrap"><CatalogoCorsi /></div></section>
      <CtaBand title="Non sai quale *scegliere*?" primary={{ href: "/percorsi", label: "Rispondi a 3 domande" }} secondary={{ href: "/call-orientamento", label: "Prenota la call" }} />
      <section className="section bg-blush/30"><div className="wrap">
        <p className="eyebrow mb-5">Cosa dicono le allieve</p>
        <QuoteWall />
      </div></section>

      <Faq items={[
        { q: "Come scelgo il corso giusto?", a: "Dipende da cosa vuoi cambiare: se vuoi più clienti per la tua attività, parti dal Metodo A.G.E.N.D.A. o dal Metodo Sold Out. Se vuoi imparare a massaggiare, il Metodo Rita Dolbakian. Il test di orientamento nella pagina Percorsi ti aiuta a decidere." },
        { q: "C'è qualcosa di gratuito per iniziare?", a: "Sì: la guida «Il Sistema Clienti per Operatori del Benessere» e la call di orientamento di circa 30 minuti, senza obbligo." },
        { q: "Quali sono i prezzi?", a: "Per A.G.E.N.D.A. e Sold Out il prezzo si comunica durante la videochiamata di orientamento, perché dipende dal percorso giusto per te. Instagram Stories che vendono costa 37 €. Gli altri prezzi sono nella pagina di ogni percorso." },
        { q: "Posso seguire i corsi online?", a: "Sì: i percorsi per l'attività sono pensati per essere seguiti online. Per la tecnica di massaggio, lo studio è online e la pratica in presenza." },
        { q: "Devo già lavorare nel benessere?", a: "Per A.G.E.N.D.A. e Metodo Sold Out sì: servono competenza e un'attività, anche appena avviata. Per il Metodo Rita Dolbakian si può partire da zero." },
        { q: "Come accedo ai corsi dopo l'acquisto?", a: "Dall'Area Privata, con le credenziali che ricevi via email dopo l'iscrizione." },
      ]} />
    </>
  );
}
