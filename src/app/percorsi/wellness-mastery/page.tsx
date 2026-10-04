import { Outcomes, Steps, Objections, Compare, DetailSteps } from "@/components/Sections";
import { PageHero, Label, CtaBand, Faq, Tbc, JsonLd, courseLd } from "@/components/Ui";
import { Heading, Reveal } from "@/components/Motion";
import { Slot } from "@/components/Slot";
import { meta } from "@/lib/seo";
import Link from "next/link";
import { CaseStudies, VideoWall, TrustBar, QuoteWall } from "@/components/Proof";

export const metadata = meta("Wellness Mastery: da operatrice a imprenditrice digitale", "Wellness Mastery di Rita Dolbakian: 10 moduli, 6 bonus e garanzia 14 giorni per trasformare il tuo talento nel benessere in un'attività online solida.", "/percorsi/wellness-mastery");

const modules: { t: string; talk: string; do: string; get: string }[] = [
  { t: "Le fondamenta del tuo brand", talk: "Chi sei, per chi lavori e cosa ti rende riconoscibile. Prima di pubblicare qualsiasi cosa, si mettono in ordine le basi.", do: "Scrivi la tua frase di posizionamento e la tua bio, in parole semplici.", get: "Una base chiara da usare su profilo, scheda Google e messaggi." },
  { t: "Mindset da imprenditrice", talk: "Dal «faccio massaggi» al «guido un'attività»: tempo, numeri e decisioni.", do: "Scegli le tue 3 priorità e cosa smettere di fare.", get: "Un modo di lavorare meno reattivo e più tuo." },
  { t: "L'offerta irresistibile (high ticket)", talk: "Come costruire un'offerta che si capisce al primo sguardo, con un valore e un prezzo che sai spiegare.", do: "Disegni la tua offerta: per chi è, cosa include, a che prezzo.", get: "Un'offerta pronta da presentare, senza svenderti." },
  { t: "Instagram per attrarre e vendere · parte 1", talk: "Il profilo che spiega cosa fai e a chi parli: bio, copertine, foto.", do: "Riscrivi e riordini il tuo profilo.", get: "Un profilo che si capisce in pochi secondi." },
  { t: "Instagram per attrarre e vendere · parte 2", talk: "Contenuti e abitudini che trasformano attenzione in richieste.", do: "Pianifichi le tue prime settimane di contenuti.", get: "Un piano di pubblicazione sostenibile, non una maratona." },
  { t: "Content strategy", talk: "Cosa dire, quando, e come farlo senza perdere autenticità.", do: "Costruisci il tuo calendario e i tuoi temi ricorrenti.", get: "Sai cosa pubblicare ogni settimana, senza ansia." },
  { t: "Espansione su altri social", talk: "Come scegliere un secondo canale e portare il tuo lavoro dove le persone ti possono trovare.", do: "Scegli il canale giusto per te e imposti il profilo.", get: "Un secondo punto d'ingresso verso la tua attività." },
  { t: "Collaborazioni con influencer", talk: "Come cercare, proporre e impostare collaborazioni utili.", do: "Prepari la tua lista e invii le prime proposte con i template.", get: "Collaborazioni impostate con metodo, non lasciate al caso." },
  { t: "Vendere con naturalezza nei DM", talk: "Ascoltare, fare le domande giuste, proporre. Senza forzare.", do: "Scrivi le tue risposte pronte a «quanto costa?» e agli altri dubbi.", get: "Conversazioni che non sembrano vendita, e che portano prenotazioni." },
  { t: "Automazione e AI", talk: "Cosa automatizzare e come usare l'AI per i contenuti senza perdere la tua voce.", do: "Automatizzi 2 attività ripetitive.", get: "Tempo liberato per i clienti e per te." },
];

const bonus: { t: string; serve: string; quando: string }[] = [
  { t: "8 settimane di affiancamento 1:1", serve: "Ti accompagno mentre applichi, così non resti sola davanti alle decisioni.", quando: "Durante tutto il percorso" },
  { t: "Template per le collaborazioni con influencer", serve: "Modelli di messaggio e proposta già pronti.", quando: "Modulo 8" },
  { t: "Wellness Profit Calculator", serve: "Per capire quanto guadagni davvero e che prezzo ti serve.", quando: "Modulo 3" },
  { t: "Mini corso Canva", serve: "Per creare grafiche chiare e coerenti da sola.", quando: "Moduli 4–6" },
  { t: "Mini corso CapCut", serve: "Per montare video brevi con semplicità.", quando: "Moduli 5–6" },
  { t: "Masterclass Pinterest con Alessandra Tempo", serve: "Un canale in più per farti trovare nel tempo.", quando: "Modulo 7" },
];

export default function WellnessMastery() {
  return (
    <>
      <JsonLd data={courseLd("Wellness Mastery", "Da operatrice del benessere a imprenditrice digitale: 10 moduli, 6 bonus e garanzia di 14 giorni.", "/percorsi/wellness-mastery")} />
      <PageHero imageId="wm-top" imageRatio="16/9" imageArt="arch" dark eyebrow="Wellness Mastery" title="Da operatrice del benessere a *imprenditrice* digitale." answer="Wellness Mastery è il mio percorso per chi lavora nel benessere e vuole costruire un'attività online solida: 10 moduli, 6 bonus e 8 settimane di affiancamento 1:1, con garanzia soddisfatti o rimborsati di 14 giorni. Senza svenderti, senza burnout e senza più fare tutto da sola.">
        <Link href="#candidatura" className="btn btn-primary">Inizia da qui <span className="arr">→</span></Link>
        <Link href="/call-orientamento" className="btn btn-ghost">Prima parliamone</Link>
      </PageHero>

      <section className="py-10 md:py-14">
        <div className="wrap grid gap-10 lg:grid-cols-[0.8fr_1.2fr] items-center">
          <Reveal><Slot kind="foto" id="wm-hero" label="Rita in studio con tablet" ratio="4/5" art="arch" className="max-w-md mx-auto lg:mx-0" /></Reveal>
          <Reveal delay={0.1}>
            <p className="eyebrow mb-4">Il percorso in sintesi</p>
            <dl className="grid grid-cols-2 gap-px bg-[var(--line)] rounded-3xl overflow-hidden border border-[var(--line)]">
              {[["10", "moduli"], ["6", "bonus"], ["8", "settimane di affiancamento 1:1"], ["14", "giorni di garanzia"]].map(([n, l]) => (
                <div key={l} className="bg-ivory p-6"><dt className="font-display text-6xl kw leading-none">{n}</dt><dd className="mt-2 text-sm text-stone">{l}</dd></div>
              ))}
            </dl>
            <p className="mt-6 text-stone max-w-lg">Un percorso ordinato in tre fasi: costruisci le fondamenta, ti fai trovare, impari a vendere con naturalezza e a liberare tempo.</p>
          </Reveal>
        </div>
      </section>

      <section className="section pt-8">
        <div className="wrap grid gap-14 lg:grid-cols-2">
          <div>
            <Label n="01" t="Ti riconosci?" />
            <Heading text="Il talento non basta, se non sai trasformarlo in un *vero* business." className="text-4xl md:text-6xl" />
          </div>
          <Reveal>
            <ul className="divide-y divide-[var(--line)] border-y border-[var(--line)] text-lg">
              {["Lavori dal lunedì al sabato. Il sabato sera hai ancora messaggi a cui rispondere.", "Hai pagato un corso su Instagram. Non l'hai finito.", "Ti blocca l'idea di scrivere «costa tot» a una persona.", "Fai tutto da sola: massaggi, social, prezzi, fatture."].map((t) => <li key={t} className="py-5">{t}</li>)}
            </ul>
            <p className="mt-6 text-stone">Non devi snaturarti. Devi solo avere un metodo, e qualcuno accanto mentre lo costruisci.</p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-blush/30">
        <div className="wrap">
          <Label n="02" t="Il programma" />
          <Heading text="Dieci moduli, un *percorso* ordinato." className="text-5xl md:text-7xl" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[["wm-fase-1", "Fase 1", "Fondamenta", "Moduli 1–3: brand, mindset, offerta.", "stones"], ["wm-fase-2", "Fase 2", "Visibilità", "Moduli 4–7: Instagram, contenuti, altri social.", "waves"], ["wm-fase-3", "Fase 3", "Vendita e sistema", "Moduli 8–10: collaborazioni, DM, automazione.", "orbs"]].map(([id, f, t, d, a], i) => (
              <Reveal key={id} delay={i * 0.08}><div className="lift zoom bg-ivory rounded-3xl p-4 h-full">
                <Slot id={id} label={t} ratio="4/3" art={a as "stones"} />
                <div className="p-3 pt-5"><p className="eyebrow">{f}</p><p className="font-display text-3xl mt-1">{t}</p><p className="mt-1 text-sm text-stone">{d}</p></div>
              </div></Reveal>
            ))}
          </div>
          <div className="mt-14 border-t border-[var(--line)] max-w-4xl">
            {modules.map((m, i) => (
              <details key={m.t} className="acc" open={i === 0}>
                <summary><h3 className="font-display text-2xl md:text-3xl"><span className="kw mr-3">{String(i + 1).padStart(2, "0")}</span>{m.t}</h3><span className="plus" aria-hidden>+</span></summary>
                <div className="acc-body !max-w-none">
                  <div className="grid gap-5 md:grid-cols-3">
                    <div><p className="eyebrow mb-2">Di cosa parliamo</p><p>{m.talk}</p></div>
                    <div><p className="eyebrow mb-2">Cosa fai</p><p>{m.do}</p></div>
                    <div><p className="eyebrow !text-rose mb-2">Cosa ottieni</p><p className="text-ink">{m.get}</p></div>
                  </div>
                </div>
              </details>
            ))}
            <p className="mt-4 text-sm text-stone"><Tbc>conferma dei contenuti dettagliati di ogni modulo</Tbc></p>
          </div>
        </div>
      </section>

      <Steps n="03" label="Come funziona" title="Una settimana tipo, *dentro* il percorso." note={<Tbc>ritmo settimanale e giorni degli incontri</Tbc>} items={[
        { t: "Guardi", d: "Il video del modulo, con i tuoi tempi. Puoi rivederlo quando vuoi." },
        { t: "Fai", d: "L'esercizio pratico: applichi subito quello che hai visto alla tua attività." },
        { t: "Ti confronti con me", d: "Nell'affiancamento 1:1 guardiamo quello che hai fatto e lo correggiamo insieme." },
        { t: "Misuri e vai avanti", d: "Controlli cosa funziona, tieni quello, e passi al modulo successivo." },
      ]} />

      <DetailSteps n="04" label="Il percorso nel tempo" title="Le 8 settimane, *fase per fase*." bg="" cols={3} note={<Tbc>suddivisione reale tra settimane e moduli</Tbc>} items={[
        { t: "Settimane 1–2 · Fondamenta", a: "Moduli 1, 2 e 3: brand, mindset e offerta. Costruiamo le basi prima di mostrarti fuori.", b: "Una frase di posizionamento, 3 priorità e un'offerta chiara con il suo prezzo." },
        { t: "Settimane 3–5 · Visibilità", a: "Moduli 4, 5, 6 e 7: Instagram, contenuti, calendario e un secondo canale.", b: "Un profilo che si capisce, un calendario di contenuti e un secondo punto d'ingresso." },
        { t: "Settimane 6–8 · Vendita e sistema", a: "Moduli 8, 9 e 10: collaborazioni, conversazioni nei DM e automazione.", b: "Collaborazioni avviate, risposte pronte e meno attività ripetitive." },
      ]} />

      <Outcomes n="05" title="Cosa cambia, *alla fine*" cols={3} note={<Tbc>contenuti dettagliati dei moduli e degli strumenti</Tbc>} items={[
        { t: "Un brand che si riconosce", d: "Chi sei, per chi lavori e come ti fai ricordare, in modo coerente ovunque." },
        { t: "Un'offerta chiara", d: "Un'offerta che si capisce al primo sguardo, con un valore che non devi giustificare." },
        { t: "Instagram che lavora per te", d: "Un profilo che spiega cosa fai e contenuti che attraggono le persone giuste." },
        { t: "Contenuti senza ansia", d: "Una strategia semplice: cosa dire, quando, e come restare autentica." },
        { t: "Collaborazioni utili", d: "Collaborazioni impostate con metodo, non lasciate al caso." },
        { t: "Vendita naturale nei DM", d: "Rispondere, accompagnare, proporre. Senza forzare e senza svenderti." },
        { t: "Tempo liberato", d: "Automazione e AI per togliere il superfluo, mantenendo la tua voce." },
        { t: "Un numero in più", d: "Con il Wellness Profit Calculator sai quanto guadagni davvero e a cosa serve ogni prezzo." },
        { t: "Qualcuno accanto", d: "8 settimane di affiancamento 1:1, per non fare tutto da sola." },
      ]} />

      <section className="section-dark section">
        <div className="wrap">
          <Label n="06" t="Bonus" />
          <Heading text="Sei bonus, per non *restare* mai sola." className="text-5xl md:text-7xl max-w-4xl" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {bonus.map((b, i) => (
              <Reveal key={b.t} delay={i * 0.06}><div className="lift rounded-3xl border border-ivory/15 p-7 h-full flex flex-col">
                <span className="eyebrow">Bonus {i + 1}</span><h3 className="font-display text-2xl mt-3">{b.t}</h3><p className="mt-2 text-ivory/65 text-[0.95rem] flex-1">{b.serve}</p>
                <p className="mt-5 border-t border-ivory/15 pt-4 text-sm"><span className="eyebrow mr-2">Quando lo usi</span>{b.quando}</p>
              </div></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid gap-14 lg:grid-cols-2 items-center">
          <Reveal><Slot kind="video" id="wm-video" label="Rita presenta Wellness Mastery" ratio="16/10" art="arch" /></Reveal>
          <div>
            <Label n="07" t="Garanzia" />
            <Heading text="14 giorni *soddisfatti* o rimborsati." className="text-5xl md:text-6xl" />
            <p className="mt-6 text-lg text-stone max-w-lg">Se entro 14 giorni senti che non fa per te, puoi chiedere il rimborso. <Tbc>condizioni esatte della garanzia</Tbc> Vedi la <Link href="/rimborsi" className="ulink text-ink">politica di rimborso</Link>.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Label n="08" t="Risultati" />
          <Heading text="Chi ha fatto il percorso, *racconta*." className="text-5xl md:text-6xl max-w-3xl" />
          <div className="mt-12"><CaseStudies max={3} program="Wellness Mastery" /></div>
          <div className="mt-16"><QuoteWall program="Wellness Mastery" title="Le loro parole" /></div>
          <div className="mt-16"><VideoWall /></div>
          <div className="mt-16"><TrustBar /></div>
        </div>
      </section>

      <section className="section bg-blush/30">
        <div className="wrap grid gap-6 md:grid-cols-2">
          <Reveal><div className="rounded-3xl bg-ivory p-8 md:p-10 h-full"><h3 className="font-display text-3xl">È per te se…</h3><ul className="mt-5 space-y-2 text-stone"><li>✓ lavori nel benessere e vuoi costruire un'attività online;</li><li>✓ sei pronta a metterti in gioco, con calma e con metodo;</li><li>✓ vuoi un affiancamento, non solo dei video.</li></ul></div></Reveal>
          <Reveal delay={0.1}><div className="section-dark rounded-3xl p-8 md:p-10 h-full"><h3 className="font-display text-3xl">Non è per te se…</h3><ul className="mt-5 space-y-2 text-ivory/70"><li>✕ cerchi guadagni facili o garantiti;</li><li>✕ non hai tempo da dedicarci;</li><li>✕ vuoi che qualcuno faccia il lavoro al posto tuo.</li></ul></div></Reveal>
        </div>
      </section>

      <Outcomes n="09" label="Dopo il percorso" title="E *dopo* le 8 settimane?" cols={3} items={[
        { t: "Hai un sistema, non solo dei video", d: "Brand, offerta, contenuti e risposte restano tuoi e li puoi aggiornare." },
        { t: "Sai cosa misurare", d: "Contatti, prime sedute e clienti che tornano: i numeri che contano davvero." },
        { t: "Sai quale passo fare dopo", d: <>Ne parliamo insieme, con calma. <Tbc>cosa è previsto dopo le 8 settimane</Tbc></> },
      ]} />

      <Steps n="10" label="Garanzia" title="La garanzia, *in pratica*." dark note={<Tbc>procedura e condizioni esatte della garanzia di 14 giorni</Tbc>} items={[
        { t: "Inizi il percorso", d: "Guardi i primi moduli e provi gli strumenti." },
        { t: "Entro 14 giorni decidi", d: "Se senti che non fa per te, me lo dici." },
        { t: "Mi scrivi", d: "Una richiesta semplice, senza giustificazioni." },
        { t: "Ricevi il rimborso", d: "Soddisfatti o rimborsati, come promesso." },
      ]} />

      <section id="candidatura" className="section bg-blush/30">
        <div className="wrap text-center max-w-3xl">
          <Label n="11" t="Come iniziare" />
          <Heading text="Prezzo e posti, *chiari*. Nessuna finta scarsità." className="text-4xl md:text-6xl" />
          <p className="mt-6 text-stone"><Tbc>prezzo, rate, posti reali per l'affiancamento 1:1</Tbc></p>
          <div className="mt-8 flex flex-wrap justify-center gap-4"><Link href="/call-orientamento" className="btn btn-primary">Prenota la call di orientamento <span className="arr">→</span></Link></div>
        </div>
      </section>

      <Outcomes n="12" label="Cosa serve" title="Per iniziare ti *serve* poco." cols={4} items={[
        { t: "Un'attività nel benessere", d: "Anche appena avviata: serve una competenza da raccontare." },
        { t: "Un po' di tempo", d: <><Tbc>ore settimanali consigliate</Tbc></> },
        { t: "Uno smartphone e un computer", d: "Per seguire i moduli e creare i contenuti." },
        { t: "La voglia di metterti in gioco", d: "Il metodo c'è. Serve la tua presenza." },
      ]} />

      <Objections n="13" items={[
        { t: "Non sono brava con la tecnologia", d: "I moduli sono pensati per chi parte da zero, con mini corsi su Canva e CapCut per le basi." },
        { t: "Costa più di quanto posso spendere ora", d: <>Capisco. Ne parliamo con calma in call, senza pressione. <Tbc>rate e formule</Tbc></> },
        { t: "E se non funziona per me?", d: "C'è una garanzia di 14 giorni soddisfatti o rimborsati. E non prometto risultati che nessuno può garantire." },
        { t: "Ho paura di perdere la mia autenticità", d: "Il percorso lavora proprio al contrario: senza snaturarti, con la tua voce e i tuoi valori." },
        { t: "Faccio già troppe cose", d: "Per questo c'è l'affiancamento e un ordine preciso: si toglie, prima di aggiungere." },
      ]} />

      <Compare n="14" title="Wellness Mastery *o* A.G.E.N.D.A.?" cols={["Metodo A.G.E.N.D.A.", "Wellness Mastery"]} rows={[
        { label: "Cos'è", cells: ["Il metodo e il primo affiancamento", "Il percorso completo, 10 moduli"] },
        { label: "Per chi", cells: ["Chi vuole ritrovare direzione e continuità", "Chi vuole costruire un'attività online solida"] },
        { label: "Formato", cells: [<Tbc key="a">formato</Tbc>, "10 moduli · 6 bonus · 8 settimane 1:1"] },
        { label: "Garanzia", cells: [<Tbc key="b">garanzia</Tbc>, "14 giorni soddisfatti o rimborsati"] },
      ]} />

      <Faq items={[
        { q: "Che cos'è Wellness Mastery?", a: "È il mio percorso per operatrici del benessere che vogliono costruire un'attività online solida. Ha 10 moduli, 6 bonus e 8 settimane di affiancamento 1:1." },
        { q: "Cosa cambia rispetto al Metodo A.G.E.N.D.A.?", a: "A.G.E.N.D.A. è il primo affiancamento per ritrovare direzione. Wellness Mastery è il percorso successivo, più ampio e completo." },
        { q: "Serve già avere un profilo Instagram?", a: "No. Il percorso parte dalle fondamenta del brand e costruisce passo dopo passo." },
        { q: "Quanto tempo richiede?", a: <>Il percorso è pensato per chi lavora già. <Tbc>durata e carico settimanale</Tbc></>, plain: "Il percorso è pensato per chi lavora già." },
        { q: "C'è una garanzia?", a: "Sì: 14 giorni soddisfatti o rimborsati." },
        { q: "Posso pagare a rate?", a: <><Tbc>rate disponibili</Tbc></>, plain: "Le rate disponibili saranno indicate in fase di iscrizione." },
        { q: "Serve un'attività già avviata?", a: "È pensato per chi lavora già nel benessere. Se parti da zero, parlane prima nella call di orientamento." },
        { q: "Come funziona una settimana tipo?", a: "Guardi il video del modulo, fai l'esercizio, ti confronti con me nell'affiancamento 1:1 e poi misuri cosa funziona prima di passare al modulo successivo." },
        { q: "Cosa succede se resto indietro?", a: "Succede, e non è un problema: il percorso è pensato per chi lavora già. Ne parliamo nell'affiancamento e riprendiamo dal punto giusto." },
        { q: "Posso vedere un modulo prima di decidere?", a: <>Ne parliamo in call. <Tbc>anteprima di un modulo</Tbc></>, plain: "Ne parliamo in call." },
        { q: "Quali risultati posso aspettarmi?", a: "Non si garantiscono risultati: ognuna parte da una situazione diversa. Il percorso dà metodo, strumenti e affiancamento." },
      ]} />
      <CtaBand />
    </>
  );
}
