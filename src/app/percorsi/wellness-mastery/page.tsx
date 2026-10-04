import { PageHero, Label, CtaBand, Faq, Tbc, JsonLd, courseLd } from "@/components/Ui";
import { Heading, Reveal } from "@/components/Motion";
import { Slot } from "@/components/Slot";
import { meta } from "@/lib/seo";
import Link from "next/link";
import { CaseStudies, VideoWall, TrustBar } from "@/components/Proof";

export const metadata = meta("Wellness Mastery: da operatrice a imprenditrice digitale", "Wellness Mastery di Rita Dolbakian: 10 moduli, 6 bonus e garanzia 14 giorni per trasformare il tuo talento nel benessere in un'attività online solida.", "/percorsi/wellness-mastery");

const modules = [
  ["Le fondamenta del tuo brand", "Chi sei, per chi lavori, come ti fai riconoscere."],
  ["Mindset da imprenditrice", "Smettere di sentirti solo un'operatrice e iniziare a guidare la tua attività."],
  ["L'offerta irresistibile (high ticket)", "Costruire un'offerta chiara, con un valore che si capisce, senza svenderti."],
  ["Instagram per attrarre e vendere · parte 1", "Il profilo che spiega cosa fai e a chi parli."],
  ["Instagram per attrarre e vendere · parte 2", "Contenuti e abitudini per trasformare attenzione in richieste."],
  ["Content strategy", "Cosa dire, quando, e come farlo senza perdere autenticità."],
  ["Espansione su altri social", "Portare il tuo lavoro dove le persone ti possono trovare."],
  ["Collaborazioni con influencer", "Come impostare collaborazioni utili, con metodo."],
  ["Vendere con naturalezza nei DM", "Rispondere, accompagnare, proporre. Senza forzare."],
  ["Automazione e AI", "Liberare tempo con gli strumenti giusti, restando te stessa."],
];

const bonus = [
  ["8 settimane di affiancamento 1:1", "Un percorso personale accanto a Rita."],
  ["Template per le collaborazioni con influencer", "Modelli pronti per partire con ordine."],
  ["Wellness Profit Calculator", "Per capire numeri e prezzi della tua attività."],
  ["Mini corso Canva", "Per creare contenuti chiari e curati da sola."],
  ["Mini corso CapCut", "Per montare video brevi con semplicità."],
  ["Masterclass Pinterest con Alessandra Tempo", "Un canale in più per farti trovare."],
];

export default function WellnessMastery() {
  return (
    <>
      <JsonLd data={courseLd("Wellness Mastery", "Da operatrice del benessere a imprenditrice digitale: 10 moduli, 6 bonus e garanzia di 14 giorni.", "/percorsi/wellness-mastery")} />
      <PageHero dark eyebrow="Wellness Mastery" title="Da operatrice del benessere a *imprenditrice* digitale." answer="Wellness Mastery è il percorso di Rita Dolbakian per chi lavora nel benessere e vuole costruire un'attività online solida: 10 moduli, 6 bonus e 8 settimane di affiancamento 1:1, con garanzia soddisfatti o rimborsati di 14 giorni. Senza svenderti, senza burnout e senza più fare tutto da sola.">
        <Link href="#candidatura" className="btn btn-primary">Inizia da qui <span className="arr">→</span></Link>
        <Link href="/call-orientamento" className="btn btn-ghost">Prima parliamone</Link>
      </PageHero>

      <section className="section">
        <div className="wrap grid gap-14 lg:grid-cols-2">
          <div>
            <Label n="01" t="Ti riconosci?" />
            <Heading text="Il talento non basta, se non sai trasformarlo in un *vero* business." className="text-4xl md:text-6xl" />
          </div>
          <Reveal>
            <ul className="divide-y divide-[var(--line)] border-y border-[var(--line)] text-lg">
              {["Hai competenza, ma l'agenda è instabile.", "Fai tutto da sola e sei stanca.", "Ti blocca l'idea di sembrare commerciale.", "Non sai come far capire il tuo valore, e quindi il tuo prezzo."].map((t) => <li key={t} className="py-5">{t}</li>)}
            </ul>
            <p className="mt-6 text-stone">Non devi snaturarti. Devi solo avere un metodo, e qualcuno accanto mentre lo costruisci.</p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-blush/30">
        <div className="wrap">
          <Label n="02" t="Il programma" />
          <Heading text="Dieci moduli, un *percorso* ordinato." className="text-5xl md:text-7xl" />
          <div className="mt-12 border-t border-[var(--line)] max-w-4xl">
            {modules.map(([t, d], i) => (
              <details key={t} className="acc" open={i === 0}>
                <summary><h3 className="font-display text-2xl md:text-3xl"><span className="kw mr-3">{String(i + 1).padStart(2, "0")}</span>{t}</h3><span className="plus" aria-hidden>+</span></summary>
                <div className="acc-body">{d}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark section">
        <div className="wrap">
          <Label n="03" t="Bonus" />
          <Heading text="Sei bonus, per non *restare* mai sola." className="text-5xl md:text-7xl max-w-4xl" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {bonus.map(([t, d], i) => (
              <Reveal key={t} delay={i * 0.06}><div className="lift rounded-3xl border border-ivory/15 p-7 h-full">
                <span className="eyebrow">Bonus {i + 1}</span><h3 className="font-display text-2xl mt-3">{t}</h3><p className="mt-2 text-ivory/65 text-[0.95rem]">{d}</p>
              </div></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid gap-14 lg:grid-cols-2 items-center">
          <Reveal><Slot kind="video" id="wm-video" label="Rita presenta Wellness Mastery" ratio="16/10" art="arch" /></Reveal>
          <div>
            <Label n="04" t="Garanzia" />
            <Heading text="14 giorni *soddisfatti* o rimborsati." className="text-5xl md:text-6xl" />
            <p className="mt-6 text-lg text-stone max-w-lg">Se entro 14 giorni senti che non fa per te, puoi chiedere il rimborso. <Tbc>condizioni esatte della garanzia</Tbc> Vedi la <Link href="/rimborsi" className="ulink text-ink">politica di rimborso</Link>.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Label n="05" t="Risultati" />
          <Heading text="Chi ha fatto il percorso, *racconta*." className="text-5xl md:text-6xl max-w-3xl" />
          <div className="mt-12"><CaseStudies max={3} /></div>
          <div className="mt-16"><VideoWall /></div>
          <div className="mt-16"><TrustBar /></div>
        </div>
      </section>

      <section id="candidatura" className="section bg-blush/30">
        <div className="wrap text-center max-w-3xl">
          <Label n="06" t="Come iniziare" />
          <Heading text="Prezzo e posti, *chiari*. Nessuna finta scarsità." className="text-4xl md:text-6xl" />
          <p className="mt-6 text-stone"><Tbc>prezzo, rate, posti reali per l'affiancamento 1:1</Tbc></p>
          <div className="mt-8 flex flex-wrap justify-center gap-4"><Link href="/call-orientamento" className="btn btn-primary">Prenota la call di orientamento <span className="arr">→</span></Link></div>
        </div>
      </section>

      <Faq items={[
        { q: "Che cos'è Wellness Mastery?", a: "È il percorso di Rita Dolbakian per operatrici del benessere che vogliono costruire un'attività online solida. Ha 10 moduli, 6 bonus e 8 settimane di affiancamento 1:1." },
        { q: "Cosa cambia rispetto al Metodo A.G.E.N.D.A.?", a: "A.G.E.N.D.A. è il primo affiancamento per ritrovare direzione. Wellness Mastery è il percorso successivo, più ampio e completo." },
        { q: "Serve già avere un profilo Instagram?", a: "No. Il percorso parte dalle fondamenta del brand e costruisce passo dopo passo." },
        { q: "Quanto tempo richiede?", a: <>Il percorso è pensato per chi lavora già. <Tbc>durata e carico settimanale</Tbc></>, plain: "Il percorso è pensato per chi lavora già." },
        { q: "C'è una garanzia?", a: "Sì: 14 giorni soddisfatti o rimborsati." },
        { q: "Posso pagare a rate?", a: <><Tbc>rate disponibili</Tbc></>, plain: "Le rate disponibili saranno indicate in fase di iscrizione." },
        { q: "Serve un'attività già avviata?", a: "È pensato per chi lavora già nel benessere. Se parti da zero, parlane prima nella call di orientamento." },
        { q: "Quali risultati posso aspettarmi?", a: "Non si garantiscono risultati: ognuna parte da una situazione diversa. Il percorso dà metodo, strumenti e affiancamento." },
      ]} />
      <CtaBand />
    </>
  );
}
