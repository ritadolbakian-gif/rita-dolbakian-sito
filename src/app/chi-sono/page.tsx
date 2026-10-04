import { QuoteWall } from "@/components/Proof";
import { PageHero, Label, CtaBand, Tbc, Faq } from "@/components/Ui";
import { Heading, Reveal } from "@/components/Motion";
import { Slot } from "@/components/Slot";
import { TrustBar, PressBar } from "@/components/Proof";
import { SITE } from "@/lib/site";
import { meta } from "@/lib/seo";

export const metadata = meta("Chi è Rita Dolbakian", "Rita Dolbakian è massaggiatrice e formatrice nel benessere da oltre dieci anni. La sua storia, i suoi valori e il suo modo di lavorare.", "/chi-sono");

const chapters = [
  { t: "L'inizio", h: "Solo *passaparola*.", d: ["Come molte, sono partita con il solo passaparola.", "Periodi pieni alternati a periodi vuoti. Mesi in cui lavoravo tanto e mesi in cui il telefono non suonava. E la sensazione, costante, di non avere il controllo."] },
  { t: "La svolta", h: "Una *direzione*.", d: ["Non mi mancava la tecnica. Mi mancava una direzione chiara.", "È stato il momento in cui ho smesso di andare a tentativi e ho iniziato a chiedermi: cosa funziona davvero, e cosa è solo rumore?"] },
  { t: "Il metodo", h: "Studiato, testato, *semplificato*.", d: ["Negli anni ho studiato, provato, sbagliato, corretto.", "Quello che funzionava è diventato un metodo. Quello che non serviva l'ho lasciato andare."] },
  { t: "Oggi", h: "Oggi, *accanto* a te.", d: ["Lavoro nel benessere da oltre dieci anni e oggi aiuto altre operatrici e operatori a fare ordine e a costruire continuità.", "E insegno a massaggiare con il mio metodo, online e in presenza."] },
];
const values = [["Ascolto", "Prima di dire cosa fare, capire dove sei."], ["Chiarezza", "Parole semplici, passi ordinati."], ["Presenza", "Esserci davvero, non a distanza di sicurezza."], ["Pochi, ma seguiti davvero", "Seguo poche persone alla volta, perché il lavoro vero richiede ascolto, attenzione e presenza."]];

export default function ChiSono() {
  return (
    <>
      <PageHero dark bgId="chi-sono-bg" eyebrow="Chi sono" title="Sono una massaggiatrice *prima* ancora che formatrice." answer="Lavoro nel benessere da oltre dieci anni. Ho iniziato come massaggiatrice, ho vissuto le difficoltà di chi costruisce un'attività da sola e ho trasformato quello che ho imparato in due percorsi: uno per l'attività, uno per la tecnica." />

      <section className="section">
        <div className="wrap grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal><div className="lg:sticky lg:top-28"><Slot kind="foto" id="about-portrait" label="Ritratto di Rita" ratio="4/5" art="arch" /></div></Reveal>
          <div className="space-y-16">
            {chapters.map((c, i) => (
              <Reveal key={c.t}><Label n={`0${i + 1}`} t={c.t} /><Heading text={c.h} className="text-4xl md:text-5xl" as="h2" />{c.d.map((p) => <p key={p} className="mt-5 text-lg text-stone max-w-xl">{p}</p>)}</Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark section">
        <div className="wrap">
          <Label n="01" t="I valori" />
          <Heading text="Come *lavoro*." className="text-5xl md:text-7xl" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(([t, d], i) => (<Reveal key={t} delay={i * 0.08}><div className="rounded-3xl border border-ivory/15 p-7 h-full"><h3 className="font-display text-3xl">{t}</h3><p className="mt-3 text-ivory/65 text-[0.95rem]">{d}</p></div></Reveal>))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Label n="02" t="Dietro le quinte" />
          <Heading text="Il lavoro, *da vicino*." className="text-5xl md:text-6xl" />
          <div className="mt-12 grid gap-4 grid-cols-2 md:grid-cols-3 items-start">
            {[["gallery-1", "4/5", "orbs"], ["gallery-2", "1/1", "stones"], ["gallery-3", "4/5", "leaf"], ["gallery-4", "1/1", "waves"], ["gallery-5", "4/5", "arch"], ["gallery-6", "1/1", "orbs"]].map(([id, r, a], i) => (
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
        <div className="wrap grid gap-12 md:grid-cols-2">
          <div><Label n="03" t="Tappe" /><Heading text="Il *percorso* negli anni." className="text-5xl" /><p className="mt-6 text-stone"><Tbc>date e traguardi: formazioni, tappe, riconoscimenti</Tbc></p></div>
          <div><Label n="04" t="Il team" /><Heading text="Chi lavora con *me*." className="text-5xl" /><p className="mt-6 text-stone"><Tbc>se esiste un team RD Academy</Tbc></p></div>
        </div>
        <div className="wrap mt-14"><PressBar /></div>
        <div className="wrap mt-14"><TrustBar /></div>
        <div className="wrap mt-10 flex flex-wrap gap-6 text-sm">
          <a className="flink !text-ink/70 hover:!text-ink" href={SITE.social.instagram} target="_blank" rel="noopener">Instagram @rita_dolbakian</a>
          <a className="flink !text-ink/70 hover:!text-ink" href={SITE.social.youtube} target="_blank" rel="noopener">YouTube</a>
          <a className="flink !text-ink/70 hover:!text-ink" href={SITE.social.tiktok} target="_blank" rel="noopener">TikTok @rita.dolbakian</a>
        </div>
      </section>
      <CtaBand title="Se ti riconosci in questa storia, *parliamone*." />
      <section className="section"><div className="wrap">
        <Label n="05" t="Cosa dicono di me" />
        <Heading text="Chi ha lavorato con *me*." className="text-5xl md:text-6xl max-w-3xl" />
        <div className="mt-12"><QuoteWall /></div>
      </div></section>

      <Faq items={[
        { q: "Chi sei?", a: "Sono Rita Dolbakian, massaggiatrice e formatrice nel benessere da oltre dieci anni. Ho iniziato con il solo passaparola e ho costruito, studiando e provando, un metodo per dare continuità all'attività." },
        { q: "Di cosa ti occupi oggi?", a: "Aiuto operatrici e operatori del benessere a trovare direzione e clienti (Metodo A.G.E.N.D.A. e Wellness Mastery) e insegno a massaggiare con il mio metodo, online e in presenza." },
        { q: "Perché segui poche persone alla volta?", a: "Perché il lavoro vero richiede ascolto, attenzione e presenza. Preferisco seguire poche persone davvero, che molte a distanza." },
        { q: "Come posso lavorare con te?", a: "Si parte dalla guida gratuita o dalla call di orientamento di circa 30 minuti, senza obbligo. Da lì capiamo insieme quale percorso ha senso." },
        { q: "Dove ti trovo sui social?", a: "Su Instagram @rita_dolbakian, su YouTube e su TikTok @rita.dolbakian." },
      ]} />
    </>
  );
}
