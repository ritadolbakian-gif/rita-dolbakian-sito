import Link from "next/link";
import { InfluencerCollage } from "@/components/Sections";
import { PageHero, Label, CtaBand, Tbc, Faq } from "@/components/Ui";
import { Heading, Reveal } from "@/components/Motion";
import { Slot } from "@/components/Slot";
import { TrustBar, PressBar } from "@/components/Proof";
import { TestimonialWall } from "@/components/TestimonialWall";
import { PERSONAL_RESULT, showPersonalResult } from "@/lib/proof";
import { SITE } from "@/lib/site";
import { meta } from "@/lib/seo";
import { Crumbs } from "@/components/Crumbs";

export const metadata = meta("Chi è Rita Dolbakian", "Per 13 anni Rita Dolbakian ha massaggiato nelle case più esclusive di Milano. Oggi insegna a operatrici e operatori del benessere come farsi scegliere e riempire l'agenda.", "/chi-sono", "/media/hero-ritratto.webp");

const tappe = [
  { id: "milano", n: "1", t: "Milano", d: "13 anni nelle case più esclusive." },
  { id: "mani", n: "2", t: "Le mie mani", d: "Il massaggio, da professionista." },
  { id: "valore", n: "3", t: "Il valore", d: "Come ci si fa scegliere." },
  { id: "metodo", n: "4", t: "Il metodo", d: "Identità, posizionamento, social." },
  { id: "oggi", n: "5", t: "Oggi", d: "Dal 2024 lo insegno a te." },
];
const values = [["Ascolto", "Prima di dire cosa fare, capire dove sei."], ["Chiarezza", "Parole semplici, passi ordinati."], ["Presenza", "Esserci davvero, non a distanza di sicurezza."], ["Poche persone alla volta", "Seguo poche persone alla volta, perché il lavoro vero richiede ascolto, attenzione e presenza."]];

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
      <Crumbs trail={[["Chi sono", "/chi-sono"]]} />
      <PageHero dark bgId="chi-sono-bg" eyebrow="Chi sono" title="Per 13 anni ho massaggiato *chi sceglie solo il meglio*." answer="Sono Rita Dolbakian. Per 13 anni ho massaggiato nelle case più esclusive di Milano: imprenditori, volti della TV, dello spettacolo e dello sport. Ho imparato come ci si fa scegliere da clienti così e, dal 2024, lo insegno attraverso la mia Srl a chi lavora nel benessere.">
        <Link href="/call-orientamento" className="btn btn-primary">Prenota la call con me <span className="arr">→</span></Link>
        <Link href="#milano" className="btn btn-ghost">Leggi la mia storia</Link>
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

      <Chapter id="milano" n="01" label="Milano" title="Nelle case più *esclusive di Milano*." img={<div className="grid grid-cols-2 gap-3 md:gap-4"><Slot kind="foto" id="story-bar" label="Rita in consulenza" ratio="4/5" art="orbs" /><Slot kind="foto" id="story-bar-2" label="Rita, ritratto" ratio="4/5" art="stones" className="mt-10 md:mt-16" /></div>}>
        <p>Per 13 anni ho lavorato come massaggiatrice nelle case più esclusive di Milano. Tra i miei clienti: imprenditori, volti della TV, dello spettacolo e dello sport.</p>
        <p>Persone abituate al meglio, che non scelgono al risparmio. Scelgono di chi si fidano, e sono disposte a pagare per la qualità e per la persona giusta.</p>
        <blockquote className="border-l-2 border-rose pl-5 font-display text-3xl italic leading-snug text-ink">Chi è abituato al meglio non guarda il prezzo. Guarda di chi può fidarsi.</blockquote>
      </Chapter>

      <Chapter id="mani" n="02" label="Le mie mani" title="Il massaggio, *il mio mestiere*." flip img={<Slot kind="foto" id="story-mani" label="Rita al lavoro" ratio="4/5" art="stones" />}>
        <p>Le mani sono sempre state la cosa più mia che avessi. Ho studiato, mi sono formata e ho continuato a migliorare, trattamento dopo trattamento.</p>
        <p>Con clienti così la qualità non è un di più: è il minimo da cui si parte. Ma presto ho capito che, da sola, la tecnica non basta. <Tbc>formazioni, anno di inizio e dettagli del percorso nel massaggio</Tbc></p>
      </Chapter>

      <Chapter id="valore" n="03" label="Il valore" title="Non basta *saper massaggiare*." img={<Slot kind="foto" id="story-frustrazione" label="Rita, ritratto" ratio="4/3" art="waves" />}>
        <p>Lavorando con clienti esigenti ho capito una cosa che cambia tutto: la tecnica apre la porta, ma quello che ti fa scegliere e ti fa pagare bene è come ti presenti, come comunichi il tuo valore e la fiducia che trasmetti.</p>
        <p>È proprio questo che la maggior parte dei corsi non insegna. Ti danno le manovre, non il modo di farti scegliere e di riempire l'agenda.</p>
      </Chapter>

      <Chapter id="metodo" n="04" label="Il metodo" title="Farmi trovare, *anche online*." flip img={<Slot kind="foto" id="story-social" label="Rita registra contenuti" ratio="4/5" art="leaf" />}>
        <p>Negli anni ho messo ordine in tutto questo: identità, posizionamento, prezzi e social. Ho imparato a farmi trovare e scegliere anche online, da clienti che capiscono il valore di quello che faccio.</p>
        <p>I social non servono a «fare numeri»: servono a far vedere chi sei prima che qualcuno ti scriva. Ho messo in fila i passaggi che portano una persona dal «ti vedo» al «ti scrivo», e ho smesso di improvvisare.</p>
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

      <Chapter id="oggi" n="05" label="Oggi" title="Dal 2024 lo insegno *a te*." img={<Slot kind="foto" id="story-oggi" label="Rita oggi" ratio="4/5" art="arch" />}>
        <p>Dal 2024, attraverso la mia Srl, insegno quello che ho imparato a chi lavora nel benessere. Ho trasformato il mio metodo in due percorsi: uno per la tua attività, uno per le tue mani.</p>
        <p>Con il <Link href="/percorsi/metodo-agenda" className="ulink text-ink">Metodo A.G.E.N.D.A.</Link> e <Link href="/percorsi/sold-out" className="ulink text-ink">Metodo Sold Out</Link> ti aiuto a farti trovare e scegliere. Con il <Link href="/percorsi/metodo-rita-dolbakian" className="ulink text-ink">Metodo Rita Dolbakian</Link> ti insegno a massaggiare con mani sicure. Seguo poche persone alla volta, perché voglio esserci davvero.</p>
        <div className="flex flex-wrap gap-3 pt-2"><Link href="/call-orientamento" className="btn btn-primary">Prenota la call con me <span className="arr">→</span></Link><Link href="/percorsi" className="btn btn-ghost">Scegli il tuo percorso</Link></div>
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

      <InfluencerCollage title="Chi vive di immagine sceglie *mani sicure*." />

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

      <section className="section-dark section">
        <div className="wrap">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <Label t="Sul set" />
              <Heading text="Davanti alla telecamera *ci sono io*." className="text-5xl md:text-6xl" />
            </div>
            <p className="text-lg text-ivory/75 max-w-xl">I video che trovi sui miei profili e nei corsi li giro io, in studio, con un videomaker. I trattamenti sono quelli veri, quelli che faccio ogni giorno. Quello che ti insegno lo vedi fare a me, non a un'attrice.</p>
          </div>
          <div className="mt-12 grid gap-3 grid-cols-2 md:grid-cols-4 md:gap-5">
            {[["set-1", ""], ["set-2", "md:mt-14"], ["set-4", ""], ["set-5", "md:mt-14"]].map(([id, cls], i) => (
              <Reveal key={id} delay={i * 0.08}><div className={cls}><Slot id={id} label="Sul set" ratio="3/4" art="orbs" /></div></Reveal>
            ))}
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-[1.4fr_1fr] md:gap-5">
            <Reveal><Slot id="set-palco" label="Sul palco" ratio="16/10" art="arch" /></Reveal>
            <Reveal delay={0.1}><div className="h-full rounded-3xl border border-ivory/15 p-8 flex flex-col justify-end">
              <p className="font-display text-3xl md:text-4xl leading-tight">Dallo studio al palco, <span className="kw">con le stesse mani</span>.</p>
              <p className="mt-4 text-ivory/70">Oggi racconto il mio metodo anche agli eventi, davanti a chi lavora nel benessere come me.</p>
            </div></Reveal>
          </div>
        </div>
      </section>

      <section className="section bg-blush/30">
        <div className="wrap">
          <Label n="08" t="Cosa dicono di me" />
          <Heading text="Le allieve, *parole loro*." className="text-5xl md:text-6xl max-w-3xl" />
          <div className="mt-12"><TestimonialWall max={12} /></div>
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
        { q: "Chi sei?", a: "Sono Rita Dolbakian, massaggiatrice e formatrice nel benessere. Per 13 anni ho massaggiato nelle case più esclusive di Milano e dal 2024 insegno a operatrici e operatori del benessere a farsi scegliere e riempire l'agenda." },
        { q: "Che clienti hai avuto?", a: "In 13 anni ho lavorato a Milano con clienti esigenti: imprenditori, volti della TV, dello spettacolo e dello sport. Persone abituate al meglio, che scelgono di chi si fidano." },
        { q: "Cosa ti ha fatto scegliere da clienti così?", a: "Ho capito che la tecnica apre la porta, ma a farti scegliere e pagare bene è come ti presenti, come comunichi il tuo valore e la fiducia che trasmetti: identità, posizionamento e social usati nel modo giusto." },
        { q: "Di cosa ti occupi oggi?", a: "Aiuto operatrici e operatori del benessere a trovare direzione e clienti (Metodo A.G.E.N.D.A. e Metodo Sold Out) e insegno a massaggiare con il mio metodo, online e in presenza." },
        { q: "Perché segui poche persone alla volta?", a: "Perché se ti seguo voglio sapere come ti chiami e a che punto sei. Con cento persone insieme non ci riuscirei." },
        { q: "Come posso lavorare con te?", a: "Si parte dalla guida gratuita o dalla call di orientamento. Da lì capiamo insieme quale percorso ha senso." },
        { q: "Dove ti trovo sui social?", a: "Su Instagram @rita_dolbakian, su YouTube e su TikTok @rita.dolbakian." },
      ]} />
      <CtaBand title="Se questa storia somiglia alla tua, *parliamone*." />
    </>
  );
}
