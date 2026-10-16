import Link from "next/link";
import { PageHero } from "@/components/Ui";
import { Heading } from "@/components/Motion";
import { Slot } from "@/components/Slot";
import { LeadForm } from "@/components/LeadForm";
import { Crumbs } from "@/components/Crumbs";
import { meta } from "@/lib/seo";

export const metadata = meta("Wellness Profit Calculator: in arrivo a breve", "Il foglio di calcolo di RD Academy per operatori del benessere in regime forfettario. In arrivo a breve: lascia la tua email e ti avviso appena esce.", "/prodotti/wellness-profit-calculator", "/media/prodotto-calcolatore.webp");

export default function Page() {
  return (
    <>
      <Crumbs trail={[["Corsi", "/corsi"], ["Wellness Profit Calculator", "/prodotti/wellness-profit-calculator"]]} />

      <PageHero dark eyebrow="In arrivo a breve" title="Wellness Profit *Calculator*." answer="Il foglio di calcolo per chi lavora nel benessere in regime forfettario. Non è ancora disponibile." />

      <section className="section">
        <div className="wrap grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] max-w-4xl mx-auto">
          <Slot kind="foto" id="prodotto-calcolatore" label="Wellness Profit Calculator" ratio="4/3" art="orbs" className="w-full max-w-sm mx-auto lg:max-w-none" />
          <div>
            <p className="eyebrow !text-rose">In arrivo a breve</p>
            <Heading text="Ti avviso appena *è pronto*." className="text-4xl md:text-5xl" />
            <p className="mt-4 text-stone max-w-md">Lascia la tua email: ti scrivo appena esce, e basta.</p>
            <div className="mt-8 max-w-md"><LeadForm tipo="contatti" cta="Avvisami quando esce" phone={false} compact /></div>
            <p className="mt-6 text-sm"><Link href="/corsi" className="ulink text-ink">Intanto guarda gli altri corsi e prodotti</Link></p>
          </div>
        </div>
      </section>
    </>
  );
}
