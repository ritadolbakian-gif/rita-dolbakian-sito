import { QuoteWall } from "@/components/Proof";
import { Outcomes, Steps, Objections, Compare, InfluencerCollage } from "@/components/Sections";
import Link from "next/link";
import { PageHero, Label, CtaBand, Faq, Tbc, JsonLd } from "@/components/Ui";
import { Heading, Reveal } from "@/components/Motion";
import { Slot } from "@/components/Slot";
import { TrustBar } from "@/components/Proof";
import { meta } from "@/lib/seo";

export const metadata = meta("Formazione certificata con Rita Dolbakian", "Il percorso a tre livelli di Rita Dolbakian Academy che si conclude con un attestato: obiettivi, requisiti, durata, modalità e prossime edizioni.", "/formazione-certificata");

const levels = [
  { n: "1", id: "cert-livello-1", art: "stones" as const, t: "Fondamenta del tocco", goal: "Imparare le basi: postura, pressione, ritmo, le prime sequenze.", who: "Chi parte da zero" },
  { n: "2", id: "cert-livello-2", art: "waves" as const, t: "Tecnica e precisione", goal: "Collegare le sequenze, adattare il tocco alla persona, correggere gli errori più comuni.", who: "Chi ha già le basi" },
  { n: "3", id: "cert-livello-3", art: "arch" as const, t: "Perfezionamento e mestiere", goal: "Affinare il proprio stile e presentarlo bene, in vista di un'attività propria.", who: "Chi massaggia già" },
];

const steps = [
  ["Colloquio", "Una chiacchierata per scegliere il livello giusto."],
  ["Studio online", "Lezioni video da seguire con i tuoi tempi."],
  ["Pratica in presenza", "Mani su mani, in gruppi piccoli."],
  ["Verifica", "Una valutazione finale, chiara."],
  ["Attestato", "Il riconoscimento del percorso fatto."],
];

export default function FormazioneCertificata() {
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Course", name: "Formazione certificata Rita Dolbakian Academy", description: "Percorso a tre livelli di formazione pratica sul massaggio, con attestato finale.", provider: { "@type": "EducationalOrganization", name: "Rita Dolbakian Academy" }, inLanguage: "it-IT" }} />
      <PageHero imageId="cert-top" imageRatio="4/3" imageArt="orbs" dark eyebrow="Formazione certificata" title="Vuoi finire il percorso con *un attestato* in mano?" answer={<>La formazione certificata di Rita Dolbakian Academy è il percorso a tre livelli del Metodo Rita Dolbakian che si conclude con un attestato. Qui trovi livelli, requisiti, modalità e prossime edizioni. <Tbc>tipo di attestato (es. Attestato RD Academy), ente, validità</Tbc></>}>
        <Link href="/call-orientamento" className="btn btn-primary">Capiamo da quale livello partire <span className="arr">→</span></Link>
        <Link href="#livelli" className="btn btn-ghost">Vedi i livelli</Link>
      </PageHero>

      <section className="section">
        <div className="wrap grid gap-14 lg:grid-cols-2 items-center">
          <Reveal><Slot kind="foto" id="cert-hero" label="Rita in aula con un gruppo piccolo" ratio="16/10" art="orbs" /></Reveal>
          <div>
            <Label n="01" t="Cosa significa" />
            <Heading text="Cosa è, e cosa *non è*, questo attestato." className="text-4xl md:text-5xl" />
            <div className="mt-6 space-y-4 text-lg text-stone max-w-xl">
              <p>Alla fine ricevi un attestato di Rita Dolbakian Academy che racconta il percorso che hai fatto, livello per livello.</p>
              <p>Un attestato di partecipazione non sostituisce i requisiti di legge per esercitare la professione. Per aprire un'attività servono le autorizzazioni previste: se ne parla in call.</p>
              <p className="text-sm"><Tbc>formula esatta e valore dell'attestato; eventuale ente certificatore reale</Tbc></p>
            </div>
          </div>
        </div>
      </section>

      <section id="livelli" className="section bg-blush/30">
        <div className="wrap">
          <Label n="02" t="Il percorso a tappe" />
          <Heading text="Tre livelli. *Una* strada." className="text-5xl md:text-7xl" />
          <p className="mt-5 text-lg text-stone max-w-xl">Ogni livello ha un obiettivo chiaro, dei requisiti e una verifica finale. Così sai sempre dove sei e cosa manca.</p>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {levels.map((l, i) => (
              <Reveal key={l.n} delay={i * 0.1}>
                <article className="lift zoom bg-ivory rounded-3xl p-4 h-full flex flex-col">
                  <Slot kind="foto" id={l.id.replace("cert-", "cert-")} label={l.t} ratio="4/3" art={l.art} />
                  <div className="p-4 pt-6 flex-1 flex flex-col">
                    <span className="font-display text-7xl kw leading-none">{l.n}</span>
                    <h3 className="font-display text-3xl mt-2">{l.t}</h3>
                    <p className="mt-3 text-stone flex-1">{l.goal}</p>
                    <p className="mt-4 text-sm text-rose">{l.who}</p>
                    <dl className="mt-5 space-y-2 border-t border-[var(--line)] pt-5 text-sm text-stone">
                      <div><dt className="inline eyebrow">Requisiti · </dt><dd className="inline"><Tbc>requisiti</Tbc></dd></div>
                      <div><dt className="inline eyebrow">Ore · </dt><dd className="inline"><Tbc>ore</Tbc></dd></div>
                      <div><dt className="inline eyebrow">Verifica · </dt><dd className="inline"><Tbc>esame o valutazione</Tbc></dd></div>
                    </dl>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <InfluencerCollage title="Imparare da chi lavora con *persone esigenti*." text="Lavoro anche con persone molto esposte sui social e abituate a standard alti. È l'esperienza che porto nelle lezioni: tecnica, presenza e cura del cliente." />

      <section className="section">
        <div className="wrap">
          <Label n="03" t="Come si svolge" />
          <Heading text="Dal primo colloquio *all'attestato*." className="text-5xl md:text-6xl max-w-3xl" />
          <p className="mt-4 text-sm text-stone"><Tbc>conferma del flusso reale e del formato online/presenza</Tbc></p>
          <ol className="mt-12 grid gap-4 md:grid-cols-5">
            {steps.map(([t, d], i) => (
              <li key={t}><Reveal delay={i * 0.08}><div className="relative rounded-3xl border border-[var(--line)] p-6 h-full">
                <span className="font-display text-5xl kw leading-none">{i + 1}</span>
                <h3 className="font-display text-2xl mt-3">{t}</h3>
                <p className="mt-2 text-sm text-stone">{d}</p>
              </div></Reveal></li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-dark section">
        <div className="wrap grid gap-14 lg:grid-cols-[1fr_1fr] items-center">
          <div>
            <Label n="04" t="Cosa ricevi" />
            <Heading text="Non solo un *foglio*." className="text-5xl md:text-6xl" />
            <ul className="mt-8 space-y-4 text-ivory/75 max-w-lg">
              <li>✦ L'attestato di Rita Dolbakian Academy <Tbc>formato e dicitura</Tbc></li>
              <li>✦ Il materiale delle lezioni <Tbc>cosa è incluso</Tbc></li>
              <li>✦ Il confronto con me e con le altre allieve <Tbc>durata del supporto</Tbc></li>
              <li>✦ Un codice per verificare l'autenticità dell'attestato <Tbc>se attivato</Tbc></li>
            </ul>
          </div>
          <Reveal><Slot kind="foto" id="cert-attestato" label="L'attestato reale" ratio="4/3" art="arch" /></Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid gap-12 md:grid-cols-2">
          <div>
            <Label n="05" t="Prossime edizioni" />
            <Heading text="Il *calendario*." className="text-5xl" />
            <div className="mt-8 divide-y divide-[var(--line)] border-y border-[var(--line)]">
              {[0, 1, 2].map((i) => <div key={i} className="grid grid-cols-[1fr_auto] gap-4 py-5 text-stone"><span><Tbc>data e livello</Tbc><br /><span className="text-sm"><Tbc>sede o online</Tbc></span></span><span className="eyebrow self-center">Posti: <Tbc>reali</Tbc></span></div>)}
            </div>
          </div>
          <div>
            <Label n="06" t="Per chi è" />
            <Heading text="Per chi vuole farlo *bene*." className="text-5xl" />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-blush/40 p-6"><p className="font-display text-2xl">Fa per te se…</p><ul className="mt-3 space-y-2 text-sm text-stone"><li>✓ vuoi basi solide e un percorso ordinato;</li><li>✓ ti piace imparare facendo;</li><li>✓ vuoi un riconoscimento chiaro del tuo percorso.</li></ul></div>
              <div className="rounded-3xl border border-[var(--line)] p-6"><p className="font-display text-2xl">Non fa per te se…</p><ul className="mt-3 space-y-2 text-sm text-stone"><li>✕ cerchi un titolo abilitante in due weekend;</li><li>✕ non vuoi praticare;</li><li>✕ vuoi risultati senza impegno.</li></ul></div>
            </div>
          </div>
        </div>
        <div className="wrap mt-14"><TrustBar items={[{ t: "Parti dal tuo livello", d: "Ne parliamo prima, in call." }, { t: "Gruppi piccoli", d: "Attenzione a ognuna." }, { t: "Attestato chiaro", d: "Scritto cosa è e cosa no." }, { t: "Nessuna promessa sanitaria", d: "Formazione su tecnica e benessere." }]} /></div>
      </section>

      <Objections n="07" title="Domande che *conviene* farsi." items={[
        { t: "Mi serve davvero un attestato?", d: "Dipende da cosa vuoi fare. Per alcuni è un traguardo personale, per altri un passo verso un'attività. In call ne parliamo." },
        { t: "È riconosciuto?", d: <>È un attestato della nostra Academy e va presentato per quello che è. <Tbc>eventuale ente certificatore reale</Tbc></> },
        { t: "Posso farlo mentre lavoro?", d: <>Il percorso è pensato in tappe. <Tbc>calendario e carico settimanale</Tbc></> },
      ]} />

      <section className="section bg-blush/30"><div className="wrap">
        <p className="eyebrow mb-5">Dopo il percorso</p>
        <QuoteWall program="Metodo Rita Dolbakian" />
      </div></section>

      <Faq items={[
        { q: "Che valore ha l'attestato?", a: <>È un attestato rilasciato da Rita Dolbakian Academy a fine percorso. Non è un titolo abilitante. <Tbc>conferma del tipo di attestato</Tbc></>, plain: "È un attestato rilasciato da Rita Dolbakian Academy a fine percorso. Non è un titolo abilitante." },
        { q: "Posso iniziare da qualsiasi livello?", a: "Sì, in base alla tua esperienza. Prima del livello se ne parla in una breve call, per scegliere quello giusto." },
        { q: "Serve un esame finale?", a: <><Tbc>modalità di valutazione</Tbc></>, plain: "La modalità di valutazione sarà indicata per ogni livello." },
        { q: "Posso seguire tutto online?", a: "La parte di studio sì. La pratica diretta è prevista in presenza." },
        { q: "Dove si svolgono le edizioni in presenza?", a: <><Tbc>sedi</Tbc></>, plain: "Le sedi saranno indicate nel calendario." },
        { q: "Quanto dura ogni livello?", a: <><Tbc>ore e settimane per livello</Tbc></>, plain: "La durata sarà indicata per ogni livello." },
        { q: "Quanto costa?", a: <><Tbc>prezzi e formule di pagamento</Tbc></>, plain: "I prezzi saranno indicati per ogni livello." },
        { q: "Con questo attestato posso aprire un'attività?", a: "L'attestato attesta il percorso formativo. Per aprire un'attività servono i requisiti e le autorizzazioni previsti dalla legge: se ne parla in call." },
        { q: "Come posso verificare un attestato?", a: <>Se la verifica è attiva, basta inserire il codice riportato sull'attestato. <Tbc>se attivare la verifica</Tbc></>, plain: "Se la verifica è attiva, basta inserire il codice riportato sull'attestato." },
      ]} />
      <CtaBand title="Vuoi sapere da quale *livello* partire?" primary={{ href: "/call-orientamento", label: "Prenota 30 minuti con me" }} />
    </>
  );
}
