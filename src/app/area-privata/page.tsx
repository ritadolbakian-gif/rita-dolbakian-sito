import Link from "next/link";
import { PageHero, Tbc, Faq } from "@/components/Ui";
import { Slot } from "@/components/Slot";
import { meta } from "@/lib/seo";

export const metadata = { ...meta("Area Privata", "Accedi alla piattaforma dei corsi di Rita Dolbakian Academy.", "/area-privata"), robots: { index: false } };

export default function Area() {
  return (
    <>
      <PageHero dark eyebrow="Area Privata" title="Bentornata *a casa*." answer="Da qui accedi ai tuoi corsi e ai materiali del percorso che hai acquistato." />
      <section className="section">
        <div className="wrap max-w-2xl text-center">
          <Slot id="area-privata" label="Studio accogliente" ratio="16/8" art="arch" className="mb-10" />
          <p className="text-lg text-stone">Accedi con l'email che hai usato per l'iscrizione. <Tbc>link alla piattaforma corsi</Tbc></p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <span className="btn btn-primary opacity-60 pointer-events-none">Accedi alla piattaforma</span>
            <Link href="/contatti" className="btn btn-ghost">Serve aiuto per accedere?</Link>
          </div>
        </div>
      </section>
      <Faq items={[
        { q: "Come accedo?", a: "Con l'email usata per l'iscrizione e la password che hai scelto. Se è la prima volta, controlla la email di benvenuto." },
        { q: "Ho dimenticato la password.", a: <>Usa il recupero password nella pagina di accesso. Se non funziona, <Link href="/contatti" className="ulink text-ink">scrivici</Link>.</>, plain: "Usa il recupero password nella pagina di accesso. Se non funziona, scrivici dalla pagina Contatti." },
        { q: "Per quanto tempo posso vedere i corsi?", a: <><Tbc>durata dell'accesso</Tbc></>, plain: "La durata dell'accesso è indicata nella pagina di ogni percorso." },
        { q: "Dove trovo i materiali e i bonus?", a: "Nella tua Area Privata, dentro il percorso a cui sei iscritta." },
      ]} />
    </>
  );
}
