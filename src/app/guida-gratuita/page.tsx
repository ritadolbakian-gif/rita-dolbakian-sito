import { QuoteWall } from "@/components/Proof";
import Link from "next/link";
import { PageHero, Label, Faq } from "@/components/Ui";
import { TrustBar } from "@/components/Proof";
import { Heading, Reveal } from "@/components/Motion";
import { Slot } from "@/components/Slot";
import { LeadForm } from "@/components/LeadForm";
import { meta } from "@/lib/seo";

export const metadata = meta("Guida gratuita: i primi 10 clienti online", "Scarica \"Il Sistema Clienti per Operatori del Benessere\", la guida pratica di Rita Dolbakian per fare i primi 10 clienti online.", "/guida-gratuita");

export default function Guida() {
  return (
    <>
      <PageHero eyebrow="Guida gratuita" title="Vuoi i primi 10 clienti *online*? Ecco da dove cominciare." answer={"Hai un profilo, forse una scheda Google, e da settimane nessun cliente nuovo. «Il Sistema Clienti per Operatori del Benessere» è la mia guida pratica gratuita per fare i primi 10 clienti online: ti spiego da dove cominciare, un passo alla volta."} />
      <section className="section">
        <div className="wrap grid gap-16 lg:grid-cols-[0.9fr_1.1fr] items-start">
          <Reveal><Slot kind="foto" id="guida-mockup" label="Mockup della guida" ratio="3/4" art="waves" className="max-w-sm mx-auto" /></Reveal>
          <div>
            <Label t="Scarica la guida" /><Heading text="Dimmi dove *mandartela*." className="text-5xl" />
            <p className="mt-4 text-stone max-w-md">Una email con la guida, e basta. Niente spam: se un giorno non ti serve più, ti cancelli con un clic.</p>
            <div className="mt-10"><LeadForm tipo="guida" cta="Ricevi la guida via email" /></div>
          </div>
        </div>
      </section>
      <section className="section bg-blush/30"><div className="wrap">
        <Label t="Per chi è" /><Heading text="È per te se…" className="text-5xl" />
        <ul className="mt-8 grid gap-4 md:grid-cols-2 text-lg text-stone max-w-4xl">{["Lavori nel benessere e vuoi più clienti online.", "Hai competenza ma l'agenda è instabile.", "Non sai da dove cominciare.", "Vuoi un metodo, non motivazione."].map((t) => <li key={t} className="rounded-2xl bg-ivory p-5">✓ {t}</li>)}</ul>
      </div></section>
      <section className="section"><div className="wrap"><TrustBar items={[{ t: "Gratuita", d: "Nessun pagamento, nessuna carta." }, { t: "Una sola email", d: "Ti scrivo per mandarti la guida." }, { t: "Pratica", d: "Passi concreti, non teoria." }, { t: "Passo dopo passo", d: "Da applicare una cosa alla volta." }]} /></div></section>
      <section className="section pt-0"><div className="wrap">
        <p className="eyebrow mb-5">Cosa dicono di me</p>
        <QuoteWall />
      </div></section>

      <Faq items={[
        { q: "La guida è davvero gratuita?", a: "Sì. Non c'è nessun pagamento e non serve la carta." },
        { q: "Cosa ricevo, e come?", a: "Ricevi via email la guida «Il Sistema Clienti per Operatori del Benessere». Se non la vedi, controlla anche la cartella spam." },
        { q: "Mi arriveranno tante email?", a: "No. Ti scrivo per mandarti la guida. Le comunicazioni successive solo se scegli di riceverle, e puoi cancellarti con un clic." },
        { q: "Per chi è la guida?", a: "Per chi lavora nel benessere e vuole fare i primi 10 clienti online, partendo dal punto giusto." },
        { q: "Come vengono usati i miei dati?", a: <>Solo per inviarti quello che hai chiesto, come spiegato nell'<Link href="/privacy" className="ulink text-ink">informativa privacy</Link>.</>, plain: "Solo per inviarti quello che hai chiesto, come spiegato nell'informativa privacy." },
      ]} />
    </>
  );
}
