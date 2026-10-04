import Link from "next/link";
import { PageHero, Label, Faq, Tbc, CtaBand } from "@/components/Ui";
import { Heading, Reveal } from "@/components/Motion";
import { Slot } from "@/components/Slot";
import { LeadForm } from "@/components/LeadForm";
import { Outcomes, Steps } from "@/components/Sections";
import { QuoteWall, TrustBar } from "@/components/Proof";
import { ReviewBadge } from "@/components/Reviews";
import { meta } from "@/lib/seo";

export const metadata = meta("Guida gratuita: i primi 10 clienti online", "Scarica gratis «Il Sistema Clienti per Operatori del Benessere», la guida pratica di Rita Dolbakian per fare i primi 10 clienti online: cosa fare, in che ordine e in quanto tempo.", "/guida-gratuita");

const chapters = [
  ["Chi vuoi aiutare e cosa offri", "Tre domande a cui rispondere prima di pubblicare qualsiasi cosa, per spiegare in una frase chi sei e perché scegliere te."],
  ["Come ti vede chi ti cerca", "Profilo, scheda Google e primo messaggio: cosa trova una persona nuova quando cerca il tuo nome e cosa sistemare per prima."],
  ["I 5 canali per trovare clienti", "Google, Instagram, WhatsApp, collaborazioni locali e passaparola organizzato: da quale cominciare e quali lasciare per dopo."],
  ["Come rispondere ai messaggi", "«Quanto costa?» e gli altri dubbi: risposte pronte per spiegare il valore senza forzare e senza svenderti."],
  ["Il piano delle prime 4 settimane", "Cosa fare ogni settimana, in poche ore, per passare dal «non mi trova nessuno» ai primi contatti veri."],
  ["Cosa misurare per capire se funziona", "Quattro numeri da annotare ogni settimana, così sai cosa tenere e cosa lasciare stare."],
];

export default function Guida() {
  return (
    <>
      <PageHero eyebrow="Guida gratuita" title="Vuoi i primi 10 clienti *online*? Ecco da dove cominciare." answer={"Hai un profilo, forse una scheda Google, e da settimane nessun cliente nuovo. «Il Sistema Clienti per Operatori del Benessere» è la mia guida pratica gratuita per fare i primi 10 clienti online: ti dico cosa fare, in che ordine e in quanto tempo."}>
        <a href="#modulo" className="btn btn-primary">Ricevi la guida via email <span className="arr">→</span></a>
        <a href="#dentro" className="btn btn-ghost">Cosa trovi dentro</a>
      </PageHero>

      <section id="modulo" className="section pt-10 scroll-mt-24">
        <div className="wrap grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal><Slot kind="foto" id="guida-mockup" label="La guida «Il Sistema Clienti»" ratio="3/4" art="waves" className="max-w-sm mx-auto lg:max-w-md" priority /></Reveal>
          <div>
            <Label t="Gratis, via email" />
            <Heading text="Dimmi dove *mandartela*." className="text-5xl md:text-6xl" />
            <p className="mt-4 text-stone max-w-md">Una email con la guida, e basta. Niente spam: se un giorno non ti serve più, ti cancelli con un clic.</p>
            <div className="mt-8 max-w-xl"><LeadForm tipo="guida" cta="Ricevi la guida via email" compact /></div>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-stone"><li>✓ Gratuita, senza carta</li><li>✓ Una sola email</li><li>✓ Cancellazione con un clic</li></ul>
            <ReviewBadge />
          </div>
        </div>
      </section>

      <section id="dentro" className="section bg-blush/30 scroll-mt-24">
        <div className="wrap">
          <Label n="01" t="Cosa trovi dentro" />
          <Heading text="Sei capitoli. Tutto *pratico*." className="text-5xl md:text-6xl max-w-3xl" />
          <p className="mt-4 text-sm text-stone"><Tbc>indice reale della guida, numero di pagine e formato (PDF)</Tbc></p>
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
              <Reveal key={id} delay={i * 0.08}><Slot id={id} label="Anteprima pagina interna" ratio="4/3" art={a as "orbs"} /></Reveal>
            ))}
          </div>
        </div>
      </section>

      <Outcomes n="02" label="Cosa cambia" title="Dopo averla letta, *saprai*…" cols={3} items={[
        { t: "Cosa dire, e a chi", d: "Spieghi in una frase chi aiuti e perché dovrebbero scegliere te." },
        { t: "Dove farti trovare", d: "Sai quali due canali presidiare per primi, senza essere ovunque." },
        { t: "Come rispondere", d: "Hai risposte pronte a «quanto costa?» e agli altri dubbi, senza ansia." },
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
        { t: "Applichi un passo alla volta", d: "Segui il piano delle prime 4 settimane e annota i tuoi numeri." },
        { t: "Se vuoi, ne parliamo", d: "Se ti serve una mano, puoi prenotare una call gratuita di 30 minuti. Senza obbligo." },
      ]} />

      <section className="section">
        <div className="wrap grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal><Slot kind="foto" id="guida-rita" label="Rita con la guida" ratio="4/5" art="leaf" className="max-w-sm mx-auto" /></Reveal>
          <div>
            <Label n="04" t="Chi l'ha scritta" />
            <Heading text="L'ho scritta *io*." className="text-5xl md:text-6xl" />
            <div className="mt-6 space-y-4 text-lg text-stone max-w-xl">
              <p>Sono Rita Dolbakian. Lavoravo in un bar, poi ho scelto il massaggio, ho faticato a trovare clienti e ho imparato a farmi trovare con i social. Lavoro nel benessere da oltre dieci anni.</p>
              <p>Questa guida è quello che avrei voluto avere io all'inizio: poche cose, nell'ordine giusto.</p>
            </div>
            <Link href="/chi-sono" className="btn btn-ghost mt-8">Leggi la mia storia <span className="arr">→</span></Link>
          </div>
        </div>
      </section>

      <section className="section bg-blush/30 pt-0"><div className="wrap">
        <p className="eyebrow mb-5">Cosa dicono di me</p>
        <QuoteWall />
        <div className="mt-14"><TrustBar items={[{ t: "Gratuita", d: "Nessun pagamento, nessuna carta." }, { t: "Una sola email", d: "Ti scrivo per mandarti la guida." }, { t: "Pratica", d: "Passi concreti, non teoria." }, { t: "Passo dopo passo", d: "Da applicare una cosa alla volta." }]} /></div>
      </div></section>

      <Faq items={[
        { q: "La guida è davvero gratuita?", a: "Sì. Non c'è nessun pagamento e non serve la carta." },
        { q: "Cosa ricevo, e come?", a: "Ricevi via email la guida «Il Sistema Clienti per Operatori del Benessere». Se non la vedi, controlla anche la cartella spam." },
        { q: "Quanto ci vuole a leggerla?", a: <>Si legge in una sessione e si applica nell'arco di quattro settimane. <Tbc>numero di pagine e tempo di lettura</Tbc></>, plain: "Si legge in una sessione e si applica nell'arco di quattro settimane." },
        { q: "Serve già avere clienti o un profilo social?", a: "No. Serve avere una competenza nel benessere. La guida parte da lì." },
        { q: "È per massaggiatrici o anche per altre professioni?", a: "Per chiunque lavori nel benessere: massaggiatori, estetiste, operatori olistici, personal trainer e simili. Gli esempi partono dal massaggio." },
        { q: "Mi arriveranno tante email?", a: "No. Ti scrivo per mandarti la guida. Le comunicazioni successive solo se scegli di riceverle, e puoi cancellarti con un clic." },
        { q: "E dopo la guida?", a: "Se vuoi un aiuto concreto puoi prenotare una call gratuita di circa 30 minuti, senza obbligo. Oppure vai avanti da sola con il piano della guida." },
        { q: "Come vengono usati i miei dati?", a: <>Solo per inviarti quello che hai chiesto, come spiegato nell'<Link href="/privacy" className="ulink text-ink">informativa privacy</Link>.</>, plain: "Solo per inviarti quello che hai chiesto, come spiegato nell'informativa privacy." },
      ]} />

      <CtaBand title="Pronta a *cominciare*?" sub="Ricevi la guida e comincia dal primo passo." primary={{ href: "#modulo", label: "Ricevi la guida via email" }} secondary={{ href: "/call-orientamento", label: "Preferisco parlarne in call" }} />
    </>
  );
}
