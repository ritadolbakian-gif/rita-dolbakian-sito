import Link from "next/link";
import { PageHero, Label, CtaBand, Tbc, Faq } from "@/components/Ui";
import { Heading, Reveal } from "@/components/Motion";
import { Slot } from "@/components/Slot";
import { QuoteWall, TrustBar, PressBar } from "@/components/Proof";
import { PERSONAL_RESULT, showPersonalResult } from "@/lib/proof";
import { SITE } from "@/lib/site";
import { meta } from "@/lib/seo";

export const metadata = meta("Chi è Rita Dolbakian", "Dal bancone di un bar al massaggio, fino a trovare clienti con i social: la storia di Rita Dolbakian, massaggiatrice e formatrice nel benessere da oltre dieci anni.", "/chi-sono");

const tappe = [
  { id: "bar", n: "1", t: "Il bar", d: "Frustrata, convinta di meritare di più." },
  { id: "mani", n: "2", t: "Le mie mani", d: "Ho scelto il massaggio." },
  { id: "fatica", n: "3", t: "La fatica", d: "Niente clienti, tutte le difficoltà." },
  { id: "social", n: "4", t: "I social", d: "Ho capito come farmi trovare." },
  { id: "oggi", n: "5", t: "Oggi", d: "Lo insegno a te." },
];
const values = [["Ascolto", "Prima di dire cosa fare, capire dove sei."], ["Chiarezza", "Parole semplici, passi ordinati."], ["Presenza", "Esserci davvero, non a distanza di sicurezza."], ["Pochi, ma seguiti davvero", "Seguo poche persone alla volta, perché il lavoro vero richiede ascolto, attenzione e presenza."]];

function Chapter({ id, n, label, title, children, img, flip = false }: { id: string; n: string; label: string; title: string; children: React.ReactNode; img: React.ReactNode; flip?: boolean }) {
  return (
    <section id={id} className="section scroll-mt-24">
      <div className={`wrap grid items-center gap-10 lg:gap-16 ${flip ? "lg:grid-cols-[1fr_0.9fr]" : "lg:grid-cols-[0.9fr_1fr]"}`}>
        <Reveal className={flip ? "lg:order-2" : ""}>{img}</Reveal>
        <div className={flip ? "lg:order-1" : ""}>
          <Label n={n} t={label} />
          <Heading text={title} className="text-4xl md:text-6xl" />
          <div className="mt-7 space-y-4 text-lg text-stone max-w-xl">{children}</div>
        </div>
      </div>
    </section>
  );
}

export default function ChiSono() {
  const showRes = showPersonalResult();
  return (
    <>
      <PageHero dark bgId="chi-sono-bg" eyebrow="Chi sono" title="Lavoravo in un bar. Poi ho scelto *le mie mani*." answer="Sono Rita Dolbakian. Ho iniziato dietro un bancone, frustrata e convinta di meritare di più. Ho scelto il massaggio, ho sbattuto contro tutte le difficoltà di chi non trova clienti e poi ho capito come usare i social per farmi trovare. Oggi lavoro nel benessere da oltre dieci anni e lo insegno a chi vuole fare lo stesso.">
        <Link href="/call-orientamento" className="btn btn-primary">Prenota 30 minuti con me <span className="arr">→</span></Link>
        <Link href="#bar" className="btn btn-ghost">Leggi la mia storia</Link>
      </PageHero>

      {/* Mappa della storia */}
      <section className="py-10 md:py-14">
        <div className="wrap">
          <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {tappe.map((x, i) => (
              <li key={x.id}><Reveal delay={i * 0.06}>
                <a href={`#${x.id}`} className="lift group block h-full rounded-3xl border border-[var(--line)] p-6 hover:bg-blush/30">
                  <span className="font-display text-5xl kw leading-none">{x.n}</span>
                  <p className="font-display text-2xl mt-3">{x.t}</p>
                  <p className="mt-1 text-sm text-stone">{x.d}</p>
                </a>
              </Reveal></li>
            ))}
          </ol>
        </div>
      </section>

      <Chapter id="bar" n="01" label="Il bar" title="Pensavo di *meritare di più*." img={<div className="grid grid-cols-2 gap-3 md:gap-4"><Slot kind="foto" id="story-bar" label="Rita al bar" ratio="4/5" art="orbs" /><Slot kind="foto" id="story-bar-2" label="Rita al bar" ratio="4/5" art="stones" className="mt-10 md:mt-16" /></div>}>
        <p>Prima di tutto questo lavoravo in un bar. Bicchieri da preparare, bottiglie da aprire, turni che non finivano mai.</p>
        <p>Vivevo nella frustrazione. Ogni giorno la stessa domanda: «Possibile che questa sia tutta la mia vita?». Dentro di me ero sicura di valere di più, di potermi costruire qualcosa di mio. Ma non sapevo da dove cominciare.</p>
        <blockquote className="border-l-2 border-rose pl-5 font-display text-3xl italic leading-snug text-ink">Sapevo di meritare di più. Non sapevo come arrivarci.</blockquote>
      </Chapter>

      <Chapter id="mani" n="02" label="Le mie mani" title="Ho iniziato nel *massaggio*." flip img={<Slot kind="foto" id="story-mani" label="Rita al lavoro" ratio="4/5" art="stones" />}>
        <p>Poi ho iniziato nel massaggio. Le mie mani erano la cosa più mia che avessi, e sentivo che lì c'era qualcosa che sapevo fare davvero.</p>
        <p>Ho studiato, mi sono formata, ho cominciato a lavorare con le persone. E ho scoperto che la tecnica, da sola, non basta. <Tbc>formazioni, anno di inizio e dettagli del percorso nel massaggio</Tbc></p>
      </Chapter>

      <Chapter id="fatica" n="03" label="La fatica" title="Ho affrontato *tutte le difficoltà*." img={<Slot kind="foto" id="story-frustrazione" label="Rita frustrata" ratio="4/3" art="waves" />}>
        <p>Qui è arrivata la parte dura. Non trovavo clienti. Solo qualche passaparola, mesi pieni seguiti da mesi vuoti, il telefono che non suonava, i conti che non tornavano.</p>
        <p>Ho provato di tutto, spesso a caso: un po' di Instagram, qualche sconto, qualche collaborazione. Andavo a tentativi, e a fine mese non sapevo se avevo guadagnato o mi ero solo stancata.</p>
        <p>Se ti riconosci, sappi che non è colpa tua. Nessuno mi aveva mai insegnato come si fa a farsi trovare e scegliere.</p>
      </Chapter>

      <Chapter id="social" n="04" label="I social" title="Ho capito come *farmi trovare*." flip img={<Slot kind="foto" id="story-social" label="Rita registra contenuti" ratio="4/5" art="leaf" />}>
        <p>Poi ho capito una cosa. I social non servono a «fare numeri»: servono a far vedere chi sei prima che qualcuno ti scriva. Ho imparato a usarli per trovare clienti, e in particolare clienti alto-spendenti, che scelgono la qualità e capiscono il valore di quello che fai.</p>
        <p>Ho cominciato a registrare contenuti ovunque, anche all'aperto con il telefono su un treppiede. Ho messo ordine nel percorso che porta una persona dal «ti vedo» al «ti scrivo». E ho smesso di andare a tentativi.</p>
        {showRes ? (
          <div className="not-prose rounded-3xl bg-blush/40 p-6">
            <p className="font-display text-6xl md:text-7xl kw leading-none">{PERSONAL_RESULT.amount}</p>
            <p className="mt-2 text-ink">{PERSONAL_RESULT.label}</p>
            <p className="mt-3 text-xs text-stone">È il mio risultato personale, ottenuto con il mio percorso e il mio impegno. Non è una promessa di guadagno per te: i risultati dipendono dalla tua situazione di partenza e dal tuo impegno.{!PERSONAL_RESULT.confirmed && <> <Tbc>importo, periodo e documentazione del dato</Tbc></>}</p>
          </div>
        ) : (
          <p>Il risultato è arrivato: un'attività che regge, con clienti che mi scelgono e prezzi che sono finalmente giusti per il valore di quello che faccio.</p>
        )}
      </Chapter>

      <Chapter id="oggi" n="05" label="Oggi" title="Oggi lo insegno *a te*." img={<Slot kind="foto" id="story-oggi" label="Rita oggi" ratio="4/5" art="arch" />}>
        <p>Oggi lavoro nel benessere da oltre dieci anni. Ho trasformato quello che ho imparato in due percorsi: uno per la tua attività, uno per le tue mani.</p>
        <p>Con il <Link href="/percorsi/metodo-agenda" className="ulink text-ink">Metodo A.G.E.N.D.A.</Link> e <Link href="/percorsi/wellness-mastery" className="ulink text-ink">Wellness Mastery</Link> ti aiuto a farti trovare e scegliere. Con il <Link href="/percorsi/metodo-rita-dolbakian" className="ulink text-ink">Metodo Rita Dolbakian</Link> ti insegno a massaggiare con mani sicure. Seguo poche persone alla volta, perché voglio esserci davvero.</p>
        <div className="flex flex-wrap gap-3 pt-2"><Link href="/call-orientamento" className="btn btn-primary">Prenota 30 minuti con me <span className="arr">→</span></Link><Link href="/percorsi" className="btn btn-ghost">Scegli il tuo percorso</Link></div>
      </Chapter>

      <section className="section-dark section">
        <div className="wrap">
          <Label n="06" t="I miei valori" />
          <Heading text="Come *lavoro*." className="text-5xl md:text-7xl" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(([t, d], i) => (<Reveal key={t} delay={i * 0.08}><div className="rounded-3xl border border-ivory/15 p-7 h-full"><h3 className="font-display text-3xl">{t}</h3><p className="mt-3 text-ivory/65 text-[0.95rem]">{d}</p></div></Reveal>))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Label n="07" t="Dietro le quinte" />
          <Heading text="Il mio lavoro, *da vicino*." className="text-5xl md:text-6xl" />
          <div className="mt-12 grid gap-4 grid-cols-2 md:grid-cols-3">
            {[["gallery-1", "4/3", "stones"], ["gallery-2", "4/3", "waves"], ["gallery-3", "4/3", "orbs"], ["gallery-4", "4/5", "leaf"], ["gallery-5", "4/5", "arch"], ["gallery-6", "4/3", "orbs"]].map(([id, r, a], i) => (
              <Reveal key={id} delay={(i % 3) * 0.08}><Slot id={id} label="Dietro le quinte" ratio={r} art={a as "orbs"} /></Reveal>
            ))}
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <Slot kind="video" id="about-video" label="Video di presentazione" ratio="16/10" className="md:col-span-2" art="arch" />
            <Slot id="about-allieve" label="Rita con le allieve" ratio="4/5" art="leaf" />
          </div>
        </div>
      </section>

      <section className="section bg-blush/30">
        <div className="wrap">
          <Label n="08" t="Cosa dicono di me" />
          <Heading text="Chi ha lavorato con *me*." className="text-5xl md:text-6xl max-w-3xl" />
          <div className="mt-12"><QuoteWall /></div>
        </div>
        <div className="wrap mt-14"><PressBar /></div>
        <div className="wrap mt-14"><TrustBar /></div>
        <div className="wrap mt-10 flex flex-wrap gap-6 text-sm">
          <a className="flink !text-ink/70 hover:!text-ink" href={SITE.social.instagram} target="_blank" rel="noopener">Instagram @rita_dolbakian</a>
          <a className="flink !text-ink/70 hover:!text-ink" href={SITE.social.youtube} target="_blank" rel="noopener">YouTube</a>
          <a className="flink !text-ink/70 hover:!text-ink" href={SITE.social.tiktok} target="_blank" rel="noopener">TikTok @rita.dolbakian</a>
        </div>
      </section>

      <Faq items={[
        { q: "Chi sei?", a: "Sono Rita Dolbakian, massaggiatrice e formatrice nel benessere da oltre dieci anni. Prima lavoravo in un bar. Ho scelto il massaggio, ho faticato a trovare clienti e ho imparato a usare i social per farmi trovare." },
        { q: "Perché hai lasciato il bar?", a: "Perché ero frustrata e sapevo di meritare di più. Volevo costruire qualcosa di mio, con le mie mani." },
        { q: "Come hai trovato i tuoi clienti?", a: "All'inizio solo con il passaparola, e andando a tentativi. Poi ho imparato a usare i social e a costruire un percorso chiaro, dal «ti vedo» al «ti scrivo»." },
        { q: "Di cosa ti occupi oggi?", a: "Aiuto operatrici e operatori del benessere a trovare direzione e clienti (Metodo A.G.E.N.D.A. e Wellness Mastery) e insegno a massaggiare con il mio metodo, online e in presenza." },
        { q: "Perché segui poche persone alla volta?", a: "Perché il lavoro vero richiede ascolto, attenzione e presenza. Preferisco seguire poche persone davvero, che molte a distanza." },
        { q: "Come posso lavorare con te?", a: "Si parte dalla guida gratuita o dalla call di orientamento di circa 30 minuti, senza obbligo. Da lì capiamo insieme quale percorso ha senso." },
        { q: "Dove ti trovo sui social?", a: "Su Instagram @rita_dolbakian, su YouTube e su TikTok @rita.dolbakian." },
      ]} />
      <CtaBand title="Se ti riconosci in questa storia, *parliamone*." />
    </>
  );
}
