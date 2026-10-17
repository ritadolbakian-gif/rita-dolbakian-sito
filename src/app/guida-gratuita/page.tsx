import Link from "next/link";
import { PageHero, Label, Faq, Tbc, CtaBand } from "@/components/Ui";
import { Heading, Reveal } from "@/components/Motion";
import { Slot } from "@/components/Slot";
import { GuideForm } from "@/components/GuideForm";
import { Outcomes, Steps } from "@/components/Sections";
import { QuoteWall } from "@/components/Proof";
import { ReviewBadge } from "@/components/Reviews";
import { STATS } from "@/lib/proof";
import { meta } from "@/lib/seo";
import { Crumbs } from "@/components/Crumbs";

const NUM_LABEL: Record<string, string> = { anni: "anni nel benessere", studenti: "studenti formati" };
const authorNumbers = STATS.filter((s) => s.confirmed && NUM_LABEL[s.id]).map((s) => ({ big: `${s.prefix ?? ""}${s.value}${s.suffix ?? ""}`, label: NUM_LABEL[s.id] }));

export const metadata = meta("Guida Metodo A.G.E.N.D.A. gratuita: i primi 10 clienti online", "Scarica gratis la «Guida Metodo A.G.E.N.D.A.», la guida pratica di Rita Dolbakian per fare i primi 10 clienti online: cosa fare, in che ordine e in quanto tempo.", "/guida-gratuita", "/media/hero-seduta.webp");

const chapters = [
  ["Chi vuoi aiutare e cosa offri", "Tre domande a cui rispondere prima di pubblicare qualsiasi cosa, per spiegare in una frase chi sei e perché scegliere te."],
  ["Come ti vede chi ti cerca", "Profilo, scheda Google e primo messaggio: cosa trova una persona nuova quando cerca il tuo nome e cosa sistemare per prima."],
  ["I 5 canali per trovare clienti", "Google, Instagram, WhatsApp, collaborazioni locali e passaparola organizzato: da quale cominciare e quali lasciare per dopo."],
  ["Come rispondere ai messaggi", "«Quanto costa?» e gli altri dubbi: risposte pronte per spiegare quanto vale il tuo lavoro prima di dire il prezzo."],
  ["Il piano delle prime 4 settimane", "Cosa fare ogni settimana, in poche ore, per passare dal «non mi trova nessuno» ai primi contatti veri."],
  ["Cosa misurare per capire se funziona", "Quattro numeri da annotare ogni settimana, così sai cosa tenere e cosa lasciare stare."],
];

export default function Guida() {
  return (
    <>
      <Crumbs trail={[["Guida gratuita", "/guida-gratuita"]]} />
      <PageHero dark bgId="hero-seduta" eyebrow="Guida gratuita" title="Vuoi i primi 10 clienti *online*? Ecco da dove cominciare." answer={"Hai un profilo, forse una scheda Google, e da settimane nessun cliente nuovo. «Guida Metodo A.G.E.N.D.A.» è la mia guida pratica gratuita per fare i primi 10 clienti online: ti dico cosa fare, in che ordine e in quanto tempo."}>
        <a href="#modulo" className="btn btn-primary">Ricevi la guida via email <span className="arr">→</span></a>
        <a href="#dentro" className="btn btn-ghost">Cosa trovi dentro</a>
      </PageHero>

      <section id="modulo" className="section pt-10 scroll-mt-24">
        <div className="wrap grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal><Slot kind="foto" id="guida-mockup" label="La Guida Metodo A.G.E.N.D.A." ratio="3/4" art="waves" className="max-w-sm mx-auto lg:max-w-md" priority /></Reveal>
          <div>
            <Label t="Gratis, via email" />
            <Heading text="Dimmi dove *mandartela*." className="text-5xl md:text-6xl" />
            <p className="mt-4 text-stone max-w-md">Una email con la guida, e basta.</p>
            <div className="mt-8 max-w-xl"><GuideForm /></div>
            <ReviewBadge />
          </div>
        </div>
      </section>

      <section id="dentro" className="section bg-blush/30 scroll-mt-24">
        <div className="wrap">
          <Label n="01" t="Cosa trovi dentro" />
          <Heading text="Sei temi. Tutto *pratico*." className="text-5xl md:text-6xl max-w-3xl" />
          <p className="mt-4 text-stone max-w-xl">È un PDF: lo leggi in una sera e lo usi per le quattro settimane successive.</p>
          <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {chapters.map(([t, d], i) => (
              <li key={t}><Reveal delay={(i % 3) * 0.08}>
                <div className="lift h-full rounded-3xl bg-ivory p-7">
                  <span className="font-display text-6xl kw leading-none">{i + 1}</span>
                  <h3 className="font-display text-3xl mt-3 leading-tight">{t}</h3>
                  <p className="mt-3 text-stone text-[0.97rem]">{d}</p>
                </div>
              </Reveal></li>
            ))}
          </ol>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {[["guida-pag-1", "orbs"], ["guida-pag-2", "waves"], ["guida-pag-3", "stones"]].map(([id, a], i) => (
              <Reveal key={id} delay={i * 0.08}><Slot id={id} label="Anteprima pagina interna" ratio="3/4" art={a as "orbs"} className="rounded-2xl shadow-[0_24px_60px_-30px_rgba(11,10,9,.5)]" /></Reveal>
            ))}
          </div>
        </div>
      </section>

      <Outcomes n="02" label="Cosa cambia" title="Dopo averla letta, *saprai*…" cols={3} items={[
        { t: "Cosa dire, e a chi", d: "Spieghi in una frase chi aiuti e perché dovrebbero scegliere te." },
        { t: "Dove farti trovare", d: "Sai quali due canali presidiare per primi, senza essere ovunque." },
        { t: "Come rispondere", d: "Sai cosa rispondere a «quanto costa?» e alle altre domande che ti fanno sempre." },
        { t: "Cosa fare ogni settimana", d: "Hai un piano di poche ore a settimana, per un mese." },
        { t: "Cosa guardare", d: "Hai quattro numeri per capire se stai andando nella direzione giusta." },
        { t: "Quale passo viene dopo", d: "Sai se ti serve un affiancamento o puoi continuare da sola." },
      ]} />

      <section className="section bg-blush/30">
        <div className="wrap grid gap-6 md:grid-cols-2">
          <Reveal><div className="rounded-3xl bg-ivory p-8 md:p-10 h-full"><Label t="Per chi è" /><h3 className="font-display text-3xl">È per te se…</h3>
            <ul className="mt-5 space-y-2 text-stone"><li>✓ lavori nel benessere e vuoi più clienti online;</li><li>✓ hai competenza ma l'agenda è instabile;</li><li>✓ non sai da dove cominciare;</li><li>✓ vuoi un metodo, non motivazione.</li></ul></div></Reveal>
          <Reveal delay={0.1}><div className="section-dark rounded-3xl p-8 md:p-10 h-full"><Label t="Non è per te" /><h3 className="font-display text-3xl">Non fa per te se…</h3>
            <ul className="mt-5 space-y-2 text-ivory/70"><li>✕ cerchi guadagni facili o garantiti;</li><li>✕ non vuoi dedicare qualche ora a settimana;</li><li>✕ vuoi che qualcuno faccia il lavoro al posto tuo.</li></ul></div></Reveal>
        </div>
      </section>

      <Steps n="03" label="Come funziona" title="Tre passi, *nessun costo*." items={[
        { t: "Lasci l'email", d: "Il tuo nome e la tua email, e acconsenti al trattamento dei dati." },
        { t: "Ricevi la guida", d: "Ti arriva via email. Se non la vedi, controlla la cartella spam." },
        { t: "Lo metti in pratica", d: "Segui il piano delle prime 4 settimane e annota i tuoi numeri." },
        { t: "Se vuoi, ne parliamo", d: "Se ti serve una mano, puoi prenotare una call gratuita con me." },
      ]} />

      <section className="section">
        <div className="wrap grid items-center gap-12 lg:gap-16 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <div className="grid grid-cols-5 gap-4 max-w-md mx-auto lg:mx-0">
              <div className="col-span-3"><Slot kind="foto" id="guida-rita" label="Rita Dolbakian" ratio="3/4" art="leaf" /></div>
              <div className="col-span-2 self-end"><Slot kind="foto" id="rita-studio" label="Rita nel suo studio" ratio="3/4" art="waves" /></div>
            </div>
          </Reveal>
          <div>
            <Label n="04" t="Chi l'ha scritta" />
            <Heading text="L'ho scritta *io*." className="text-5xl md:text-6xl" />
            <div className="mt-6 space-y-4 text-lg text-stone max-w-xl">
              <p>Sono Rita Dolbakian. Per 13 anni ho massaggiato nelle case più esclusive di Milano e ho imparato come ci si fa scegliere da clienti esigenti. Oggi insegno quello che ho imparato a chi lavora nel benessere.</p>
              <p>Questa guida è quello che avrei voluto avere io all'inizio: poche cose, nell'ordine giusto, scritte da chi il lettino lo conosce davvero.</p>
            </div>
            <div className="mt-8 flex flex-wrap items-end gap-x-10 gap-y-5">
              {authorNumbers.map((n) => (
                <div key={n.label}><p className="font-display text-5xl kw leading-none">{n.big}</p><p className="mt-1 text-sm text-stone">{n.label}</p></div>
              ))}
            </div>
            <ReviewBadge />
            <div className="mt-8"><Link href="/chi-sono" className="btn btn-ghost">Leggi la mia storia <span className="arr">→</span></Link></div>
          </div>
        </div>
      </section>

      <section className="section bg-blush/30 pt-0"><div className="wrap">
        <p className="eyebrow mb-5">Cosa dicono di me</p>
        <QuoteWall />
      </div></section>

      <Faq items={[
        { q: "La guida è davvero gratuita?", a: "Sì, è gratuita. Mi lasci la tua email e te la mando." },
        { q: "Cosa ricevo, e come?", a: "Ricevi via email la guida «Guida Metodo A.G.E.N.D.A.». Se non la vedi, controlla anche la cartella spam." },
        { q: "Quanto ci vuole a leggerla?", a: <>Si legge in una sessione e si applica nell'arco di quattro settimane. <Tbc>numero di pagine e tempo di lettura</Tbc></>, plain: "Si legge in una sessione e si applica nell'arco di quattro settimane." },
        { q: "Serve già avere clienti o un profilo social?", a: "No. Serve avere una competenza nel benessere. La guida parte da lì." },
        { q: "È per massaggiatrici o anche per altre professioni?", a: "Per chiunque lavori nel benessere: massaggiatori, estetiste, operatori olistici, personal trainer e simili. Gli esempi partono dal massaggio." },
        { q: "Mi arriveranno tante email?", a: "No. Ti scrivo per mandarti la guida. Dopo, mi fai sapere tu se vuoi ricevere le mie email." },
        { q: "E dopo la guida?", a: "Se vuoi un aiuto concreto puoi prenotare una call gratuita. Oppure vai avanti da sola con il piano della guida." },
        { q: "Come vengono usati i miei dati?", a: <>Solo per inviarti quello che hai chiesto, come spiegato nell'<Link href="/privacy" className="ulink text-ink">informativa privacy</Link>.</>, plain: "Solo per inviarti quello che hai chiesto, come spiegato nell'informativa privacy." },
      ]} />

      <CtaBand title="Pronta a *cominciare*?" sub="Ricevi la guida e comincia dal primo passo." primary={{ href: "#modulo", label: "Ricevi la guida via email" }} secondary={{ href: "/call-orientamento", label: "Preferisco parlarne in call" }} />
    </>
  );
}
