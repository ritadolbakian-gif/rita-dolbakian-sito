import { PageHero, Label, CtaBand, Tbc } from "@/components/Ui";
import { Heading, Reveal } from "@/components/Motion";
import { Slot } from "@/components/Slot";
import { SITE } from "@/lib/site";
import { meta } from "@/lib/seo";

export const metadata = meta("Chi è Rita Dolbakian", "Rita Dolbakian è massaggiatrice e formatrice nel benessere da oltre dieci anni. La sua storia, i suoi valori e il suo modo di lavorare.", "/chi-sono");

const chapters = [
  ["L'inizio", "Come molte, Rita è partita con il solo passaparola. Periodi pieni alternati a periodi vuoti, e la sensazione di non avere il controllo."],
  ["La svolta", "Non mancava la tecnica. Mancava una direzione chiara. È stato il momento in cui ha smesso di andare a tentativi."],
  ["Il metodo", "Negli anni ha studiato, testato e semplificato. Quello che funzionava è diventato un metodo, quello che non serviva è stato lasciato andare."],
  ["Oggi", "Rita aiuta altre operatrici e operatori a fare ordine e a costruire continuità, e insegna a massaggiare con il suo metodo."],
];
const values = [["Ascolto", "Prima di dire cosa fare, capire dove sei."], ["Chiarezza", "Parole semplici, passi ordinati."], ["Presenza", "Esserci davvero, non a distanza di sicurezza."], ["Pochi, ma seguiti davvero", "Scelgo di seguire poche persone alla volta, perché il lavoro vero richiede ascolto, attenzione e presenza."]];

export default function ChiSono() {
  return (
    <>
      <PageHero dark eyebrow="Chi sono" title="Massaggiatrice *prima* ancora che formatrice." answer="Rita Dolbakian lavora nel benessere da oltre dieci anni. Ha iniziato come massaggiatrice, ha vissuto le difficoltà di chi costruisce un'attività da sola, e ha trasformato quello che ha imparato in due percorsi di formazione: uno per l'attività, uno per la tecnica." />

      <section className="section">
        <div className="wrap grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal><div className="lg:sticky lg:top-28"><Slot kind="foto" label="Ritratto di Rita" ratio="4/5" /></div></Reveal>
          <div className="space-y-16">
            {chapters.map(([t, d], i) => (
              <Reveal key={t}><Label n={`0${i + 1}`} t={t} /><Heading text={t === "L'inizio" ? "Solo *passaparola*." : t === "La svolta" ? "Una *direzione*." : t === "Il metodo" ? "Studiato, testato, *semplificato*." : "Oggi, *accanto* a te."} className="text-4xl md:text-5xl" as="h2" /><p className="mt-5 text-lg text-stone max-w-xl">{d}</p></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark section">
        <div className="wrap">
          <Label n="05" t="I valori" />
          <Heading text="Come *lavoro*." className="text-5xl md:text-7xl" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(([t, d], i) => (<Reveal key={t} delay={i * 0.08}><div className="rounded-3xl border border-ivory/15 p-7 h-full"><h3 className="font-display text-3xl">{t}</h3><p className="mt-3 text-ivory/65 text-[0.95rem]">{d}</p></div></Reveal>))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid gap-12 md:grid-cols-2">
          <div><Label n="06" t="Tappe" /><Heading text="Il *percorso* negli anni." className="text-5xl" /><p className="mt-6 text-stone"><Tbc>date e traguardi: formazioni, tappe, riconoscimenti</Tbc></p></div>
          <div><Label n="07" t="Il team" /><Heading text="Chi *lavora* con Rita." className="text-5xl" /><p className="mt-6 text-stone"><Tbc>se esiste un team RD Academy</Tbc></p></div>
        </div>
        <div className="wrap mt-14 grid gap-6 md:grid-cols-3">
          <Slot kind="video" label="Video di presentazione" ratio="16/10" className="md:col-span-2" />
          <Slot kind="foto" label="Rita con le allieve" ratio="4/5" />
        </div>
        <div className="wrap mt-8 flex flex-wrap gap-6 text-sm">
          <a className="ulink" href={SITE.social.instagram} target="_blank" rel="noopener">Instagram @rita_dolbakian</a>
          <a className="ulink" href={SITE.social.youtube} target="_blank" rel="noopener">YouTube</a>
          <a className="ulink" href={SITE.social.tiktok} target="_blank" rel="noopener">TikTok @rita.dolbakian</a>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
