import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Heading, Reveal } from "@/components/Motion";
import { Slot } from "@/components/Slot";
import { CountUp } from "@/components/CountUp";
import { CaseStudies, VideoWall, Quotes, PressBar, TrustBar, RatingLd } from "@/components/Proof";
import { LeadForm } from "@/components/LeadForm";
import { Faq } from "@/components/Ui";
import { BLOG_PREVIEW } from "@/lib/site";

const Label = ({ n, t }: { n?: string; t: string }) => <p className="eyebrow mb-6 flex items-center gap-3"><span className="inline-block h-px w-8 bg-rose" />{n ? `${n} — ` : ""}{t}</p>;

export default function Home() {
  return (
    <>
      <RatingLd />
      <Hero />
      <Marquee items={["Agenda piena", "Prezzi giusti", "Clienti qualificati", "Massaggio", "Metodo", "Continuità", "Presenza"]} />

      <section className="py-14 md:py-20">
        <div className="wrap grid grid-cols-2 gap-y-10 md:grid-cols-4 text-center md:text-left">
          {[[10, "+", "anni di lavoro nel benessere"], [10, "", "moduli in Wellness Mastery"], [6, "", "bonus inclusi nel percorso"], [14, "", "giorni di garanzia, soddisfatti o rimborsati"]].map(([n, s, l], i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="font-display text-6xl md:text-7xl kw leading-none"><CountUp to={n as number} suffix={s as string} /></p>
              <p className="mt-3 text-sm text-stone max-w-[14rem] mx-auto md:mx-0">{l}</p>
            </Reveal>
          ))}
        </div>
        <div className="wrap mt-14"><PressBar /></div>
      </section>

      {/* 01 */}
      <section className="section pt-8">
        <div className="wrap">
          <Label n="01" t="Le due strade" />
          <Heading text="Da dove vuoi *partire*?" className="text-5xl md:text-7xl max-w-3xl" />
          <Reveal delay={0.15}><p className="mt-5 text-lg text-stone max-w-xl">Una strada è per la tua attività. L'altra è per le tue mani. Scegli quella che ti somiglia oggi: l'altra ti aspetta.</p></Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {[
              { icon: "🌸", k: "Lavoro nel benessere e voglio più clienti", t: "Metodo A.G.E.N.D.A.", d: "Smetti di andare a tentativi. Il metodo che dà direzione alla tua attività, a partire da un primo affiancamento: dalla call a un'agenda che regge nel tempo.", href: "/percorsi/metodo-agenda", slot: "Rita al lavoro in studio", id: "path-agenda", art: "orbs" as const, dark: true },
              { icon: "🤲", k: "Voglio imparare a massaggiare e migliorarmi", t: "Metodo Rita Dolbakian", d: "Mani sicure, tocco consapevole. Un metodo semplificato in oltre dieci anni di lavoro: si studia online e si pratica in presenza.", href: "/percorsi/metodo-rita-dolbakian", slot: "Mani al lavoro, dettaglio tecnica", id: "path-rd", art: "stones" as const, dark: false },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 0.12}>
                <Link href={c.href} className={`lift group block rounded-[1.75rem] p-5 md:p-6 h-full ${c.dark ? "section-dark" : "bg-blush/60"}`}>
                  <div className="zoom"><Slot kind="foto" id={c.id} label={c.slot} ratio="16/11" art={c.art} /></div>
                  <div className="p-3 md:p-4 pt-6">
                    <p className="eyebrow">{c.icon} {c.k}</p>
                    <h3 className="font-display text-4xl md:text-5xl mt-3">{c.t}</h3>
                    <p className={`mt-4 ${c.dark ? "text-ivory/70" : "text-stone"}`}>{c.d}</p>
                    <span className="mt-6 inline-flex items-center gap-3 font-medium">Scopri il percorso <span className="transition-transform duration-500 group-hover:translate-x-2">→</span></span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 02 */}
      <section className="section-dark section overflow-hidden">
        <div className="orb bg-rose/20 size-[30rem] -left-40 top-10" aria-hidden />
        <div className="wrap relative grid gap-14 lg:grid-cols-[1fr_1fr]">
          <div>
            <Label n="02" t="Ti riconosci?" />
            <Heading text="Non è un problema di impegno. E molto spesso *non è nemmeno* un problema di bravura." className="text-4xl md:text-6xl" />
            <Reveal delay={0.2}><div className="mt-10 max-w-md"><Slot kind="foto" id="riconoscimento" label="Professionista pensierosa" ratio="4/3" art="orbs" /></div></Reveal>
          </div>
          <div className="self-end">
            <p className="text-ivory/70 mb-8">Se lavori nel benessere e ti riconosci in almeno una di queste situazioni, sei nel posto giusto:</p>
            <ul className="divide-y divide-ivory/15 border-y border-ivory/15">
              {["L'agenda è instabile e non sai come sarà il mese prossimo.", "I clienti arrivano solo con il passaparola, quando arrivano.", "Mesi pieni, poi mesi vuoti, poi di nuovo pieni.", "Fai tante cose, ma senza una direzione.", "Fai fatica a far capire quanto vale quello che fai."].map((t, i) => (
                <Reveal key={t} delay={i * 0.07}>
                  <li className="flex gap-5 py-5"><span className="font-display text-2xl kw w-8 shrink-0">0{i + 1}</span><span>{t}</span></li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 03 */}
      <section className="section">
        <div className="wrap text-center max-w-4xl">
          <Label n="03" t="Come si sceglie oggi" />
          <Heading text="Prima guardano. Poi confrontano. *E solo dopo* scrivono." className="text-5xl md:text-7xl" />
          <Reveal delay={0.2}><p className="mt-8 text-lg text-stone max-w-2xl mx-auto">Se tutto questo accade senza che tu lo guidi, l'agenda resta imprevedibile. Se invece lo costruisci, le richieste smettono di essere un colpo di fortuna. Si può fare, con calma e con un metodo.</p></Reveal>
        </div>
      </section>

      {/* 04 */}
      <section className="section bg-blush/35 overflow-hidden">
        <div className="wrap grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal><Slot kind="foto" id="rita-studio" label="Rita, ritratto in studio" ratio="4/5" art="leaf" /></Reveal>
          <div>
            <Label n="04" t="Chi è Rita" />
            <Heading text="Massaggiatrice *prima* ancora che formatrice." className="text-5xl md:text-6xl" />
            <Reveal delay={0.15}>
              <div className="mt-8 space-y-4 text-lg text-stone max-w-xl">
                <p>Ha iniziato come molte: solo passaparola, periodi pieni e periodi vuoti, la sensazione di non avere il controllo.</p>
                <p>Non le mancava la tecnica. Le mancava una direzione. Ha studiato, testato, semplificato. Oggi aiuta altre persone a fare ordine e a costruire continuità, senza snaturarsi.</p>
              </div>
              <Link href="/chi-sono" className="btn btn-ghost mt-8">Leggi la sua storia <span className="arr">→</span></Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 05 */}
      <section className="section">
        <div className="wrap">
          <Label n="05" t="Come funziona" />
          <Heading text="Tre passi. *Nessuna* fretta." className="text-5xl md:text-7xl" />
          <div className="mt-14 grid gap-px bg-[var(--line)] md:grid-cols-3 border border-[var(--line)] rounded-3xl overflow-hidden">
            {[
              { n: "1", t: "La guida gratuita", d: "«Il Sistema Clienti per Operatori del Benessere»: la guida pratica per fare i primi 10 clienti online.", href: "/guida-gratuita", cta: "Scarica la guida" },
              { n: "2", t: "La call di orientamento", d: "Circa 30 minuti, nessun obbligo. Un confronto calmo e onesto per capire da dove ripartire.", href: "/call-orientamento", cta: "Prenota la call" },
              { n: "3", t: "Il percorso con Rita", d: "Il Metodo A.G.E.N.D.A. come primo affiancamento. Poi Wellness Mastery, per diventare imprenditrice digitale.", href: "/percorsi", cta: "Vedi i percorsi" },
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 0.1} className="bg-ivory">
                <Link href={s.href} className="group p-8 md:p-10 h-full flex flex-col hover:bg-blush/30 transition-colors duration-500">
                  <span className="font-display text-7xl kw">{s.n}</span>
                  <h3 className="font-display text-3xl mt-4">{s.t}</h3>
                  <p className="mt-3 text-stone flex-1">{s.d}</p>
                  <span className="mt-6 font-medium inline-flex gap-2">{s.cta} <span className="transition-transform duration-500 group-hover:translate-x-2">→</span></span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 06 */}
      <section className="section-dark section overflow-hidden">
        <div className="orb bg-rose/20 size-[28rem] -right-40 bottom-0" aria-hidden />
        <div className="wrap relative">
          <Label n="06" t="I percorsi" />
          <Heading text="Non tutti partono dallo *stesso* punto." className="text-5xl md:text-7xl max-w-4xl" />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { t: "Guida gratuita", d: "Per iniziare, senza impegno.", tag: "Gratis", href: "/guida-gratuita", art: "waves" as const, id: "card-guida" },
              { t: "Call di orientamento", d: "Il confronto per scegliere la strada giusta.", tag: "30 minuti", href: "/call-orientamento", art: "orbs" as const, id: "card-call" },
              { t: "Wellness Mastery", d: "Da operatrice del benessere a imprenditrice digitale.", tag: "10 moduli · 6 bonus", href: "/percorsi/wellness-mastery", art: "arch" as const, id: "card-wm" },
              { t: "Metodo Rita Dolbakian", d: "Impara a massaggiare, online e in presenza.", tag: "Online + presenza", href: "/percorsi/metodo-rita-dolbakian", art: "stones" as const, id: "card-rd" },
            ].map((p, i) => (
              <Reveal key={p.t} delay={i * 0.08}>
                <Link href={p.href} className="lift zoom group flex h-full flex-col rounded-3xl border border-ivory/15 p-4 hover:border-rose">
                  <Slot kind="foto" id={p.id} label={p.t} ratio="4/3" art={p.art} />
                  <div className="p-3 pt-5 flex-1 flex flex-col">
                    <span className="eyebrow">0{i + 1}</span>
                    <h3 className="font-display text-3xl mt-2">{p.t}</h3>
                    <p className="mt-2 text-ivory/65 text-[0.95rem] flex-1">{p.d}</p>
                    <p className="mt-5 flex items-center justify-between text-sm"><span className="text-rose">{p.tag}</span><span className="transition-transform duration-500 group-hover:translate-x-2">→</span></p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-ivory/60 text-sm">Cerchi un attestato? <Link href="/formazione-certificata" className="ulink">Scopri la formazione certificata</Link>.</p>
        </div>
      </section>

      {/* 07 — Prove sociali */}
      <section className="section">
        <div className="wrap">
          <Label n="07" t="Risultati" />
          <Heading text="Le storie di chi ha *cambiato* direzione." className="text-5xl md:text-7xl max-w-4xl" />
          <div className="mt-14"><CaseStudies max={3} /></div>
          <div className="mt-20">
            <p className="eyebrow mb-5">Le loro parole</p>
            <VideoWall />
          </div>
          <div className="mt-16"><Quotes /></div>
        </div>
      </section>

      {/* 08 — Fiducia */}
      <section className="section bg-blush/35">
        <div className="wrap">
          <Label n="08" t="Sinceramente" />
          <Heading text="Cosa puoi aspettarti. E cosa *no*." className="text-5xl md:text-7xl max-w-4xl" />
          <div className="mt-14"><TrustBar /></div>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Reveal><div className="rounded-3xl bg-ivory p-8 md:p-10 h-full">
              <h3 className="font-display text-3xl">È adatto se…</h3>
              <ul className="mt-6 space-y-3 text-stone">
                <li>✓ lavori nel benessere e hai già competenza;</li>
                <li>✓ hai poca continuità e vuoi smettere di andare a tentativi;</li>
                <li>✓ sei pronta a mettere ordine nel tuo modo di lavorare.</li>
              </ul>
            </div></Reveal>
            <Reveal delay={0.1}><div className="section-dark rounded-3xl p-8 md:p-10 h-full">
              <h3 className="font-display text-3xl">Non è adatto se…</h3>
              <ul className="mt-6 space-y-3 text-ivory/70">
                <li>✕ cerchi scorciatoie;</li>
                <li>✕ pensi basti aspettare il momento giusto;</li>
                <li>✕ non vuoi mettere in discussione il tuo approccio.</li>
              </ul>
            </div></Reveal>
          </div>
        </div>
      </section>

      {/* 09 — Guida */}
      <section className="section">
        <div className="wrap grid gap-14 lg:grid-cols-[0.8fr_1.2fr] items-center">
          <Reveal><Slot kind="foto" id="guida-mockup" label="Mockup della guida" ratio="3/4" art="waves" className="max-w-xs mx-auto" /></Reveal>
          <div>
            <Label n="09" t="Guida gratuita" />
            <Heading text="I primi 10 clienti online, *con ordine*." className="text-5xl md:text-6xl" />
            <p className="mt-5 text-lg text-stone max-w-xl">«Il Sistema Clienti per Operatori del Benessere»: la guida pratica per cominciare dal punto giusto. Una sola email, nessuno spam.</p>
            <div className="mt-8 max-w-xl"><LeadForm tipo="guida" cta="Mandami la guida" compact /></div>
          </div>
        </div>
      </section>

      {/* 10 — FAQ */}
      <Faq title="Prima di *iniziare*." items={[
        { q: "Come capisco quale percorso fa per me?", a: "Puoi fare il test di orientamento nella pagina Percorsi, scaricare la guida gratuita oppure prenotare la call: circa 30 minuti, senza obbligo, per capire insieme da dove ripartire." },
        { q: "La call di orientamento costa qualcosa?", a: "No. È gratuita, dura circa 30 minuti e non c'è nessun obbligo. Non è una lezione né una telefonata commerciale aggressiva: è un confronto." },
        { q: "Devo già avere clienti o un seguito sui social?", a: "No. Serve avere una competenza nel benessere. Da lì, un passo alla volta, si costruisce tutto il resto." },
        { q: "Posso imparare a massaggiare partendo da zero?", a: "Sì. Il Metodo Rita Dolbakian parte dalle fondamenta del tocco e prosegue per livelli, online e in presenza." },
        { q: "Mi garantite dei risultati?", a: "No, e diffido di chi lo fa. Ti do un metodo e un affiancamento. I risultati dipendono dalla tua situazione di partenza e dal tuo impegno." },
        { q: "Posso cambiare idea dopo l'acquisto?", a: "Wellness Mastery ha una garanzia di 14 giorni soddisfatti o rimborsati." },
      ]} />

      {/* 11 — Blog */}
      <section className="section pt-0">
        <div className="wrap">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div><Label n="11" t="Dal blog" /><Heading text="Idee per *lavorare* con più calma." className="text-5xl md:text-6xl max-w-2xl" /></div>
            <Link href="/blog" className="ulink font-medium">Tutti gli articoli →</Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {BLOG_PREVIEW.map((a, i) => (
              <Reveal key={a.slug} delay={i * 0.1}>
                <Link href={`/blog/${a.slug}`} className="lift zoom group block">
                  <Slot kind="foto" id={`blog-${i + 1}`} label="Copertina articolo" ratio="4/3" art={(["waves", "orbs", "stones"] as const)[i]} />
                  <p className="eyebrow mt-5">{a.cat}</p>
                  <h3 className="font-display text-2xl md:text-3xl mt-2 leading-tight group-hover:text-rose transition-colors">{a.title}</h3>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark pt-16 overflow-hidden" aria-hidden>
        <div className="marquee-track marquee-rev">
          {[0, 1].map((n) => <div key={n} className="flex shrink-0">{Array.from({ length: 4 }).map((_, i) => <span key={i} className="outline-text text-[clamp(4rem,12vw,10rem)] leading-none px-8 whitespace-nowrap">Con calma <span className="text-rose" style={{ WebkitTextStroke: 0 }}>✦</span> Con chiarezza <span className="text-rose" style={{ WebkitTextStroke: 0 }}>✦</span></span>)}</div>)}
        </div>
      </section>

      <section className="section-dark section text-center">
        <div className="wrap max-w-4xl">
          <Label t="Un primo passo" />
          <Heading text="Se senti che continuare così *non ti basta* più, parliamone." className="text-5xl md:text-7xl" />
          <Reveal delay={0.2}>
            <p className="mt-8 text-xl font-display italic text-ivory/80">Con calma. Con chiarezza.</p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/call-orientamento" className="btn btn-primary">Prenota la tua call di orientamento <span className="arr">→</span></Link>
              <Link href="/guida-gratuita" className="btn btn-ghost">Scarica la guida gratuita</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
