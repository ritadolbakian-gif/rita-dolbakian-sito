import Link from "next/link";
import { PageHero, Tbc } from "@/components/Ui";
import { meta } from "@/lib/seo";

export const metadata = { ...meta("Area Privata", "Accedi alla piattaforma dei corsi di Rita Dolbakian Academy.", "/area-privata"), robots: { index: false } };

export default function Area() {
  return (
    <>
      <PageHero dark eyebrow="Area Privata" title="Bentornata *a casa*." answer="Da qui accedi ai tuoi corsi e ai materiali del percorso che hai acquistato." />
      <section className="section">
        <div className="wrap max-w-2xl text-center">
          <p className="text-lg text-stone">Accedi con l'email che hai usato per l'iscrizione. <Tbc>link alla piattaforma corsi</Tbc></p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <span className="btn btn-primary opacity-60 pointer-events-none">Accedi alla piattaforma</span>
            <Link href="/contatti" className="btn btn-ghost">Serve aiuto per accedere?</Link>
          </div>
        </div>
      </section>
    </>
  );
}
