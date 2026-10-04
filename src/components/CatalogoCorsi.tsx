import Link from "next/link";
import { Slot } from "./Slot";
import { Heading, Reveal } from "./Motion";

type P = { id: string; t: string; d: string; fmt: string; price: string; badge?: string; href: string };

const GROUPS: { id: string; n: string; title: string; lead: string; items: P[] }[] = [
  {
    id: "affiancamento", n: "01", title: "Percorsi di *affiancamento*", lead: "Lavoriamo insieme, con una guida vera: per far crescere la tua attività o per imparare a massaggiare.",
    items: [
      { id: "corso-agenda", t: "Metodo A.G.E.N.D.A.", d: "6 mesi, 11 moduli e affiancamento individuale per riempire la tua agenda.", fmt: "6 mesi · 11 moduli", price: "Dopo la call", badge: "Con affiancamento", href: "/percorsi/metodo-agenda" },
      { id: "corso-wm", t: "Metodo Sold Out", d: "Mentorship 1:1 di 6 mesi con me: una call a settimana, 8 posti a trimestre.", fmt: "Mentorship 1:1", price: "Dopo la call", badge: "8 posti a trimestre", href: "/percorsi/sold-out" },
      { id: "corso-rd-online", t: "Metodo Rita Dolbakian · online", d: "Imparare a massaggiare con lezioni video e confronto.", fmt: "Video", price: "Da confermare", href: "/percorsi/metodo-rita-dolbakian" },
      { id: "corso-rd-presenza", t: "Metodo Rita Dolbakian · in presenza", d: "Pratica diretta in gruppi piccoli.", fmt: "In presenza", price: "Da confermare", href: "/percorsi/metodo-rita-dolbakian" },
    ],
  },
  {
    id: "digitali", n: "02", title: "Prodotti *digitali*", lead: "Manuali e strumenti da usare subito, con i tuoi tempi, a un prezzo contenuto.",
    items: [
      { id: "prodotto-stories", t: "Instagram Stories che vendono", d: "Il manuale operativo per riempire l'agenda con le Stories.", fmt: "Manuale", price: "37 €", badge: "Garanzia 14 giorni", href: "/prodotti/instagram-stories-che-vendono" },
      { id: "prodotto-calcolatore", t: "Wellness Profit Calculator", d: "Il foglio di calcolo per il regime forfettario.", fmt: "Foglio XLS", price: "Da confermare", href: "/prodotti/wellness-profit-calculator" },
    ],
  },
  {
    id: "gratis", n: "03", title: "Per iniziare, *gratis*", lead: "Un primo passo senza impegno, per capire da dove partire.",
    items: [
      { id: "corso-guida", t: "Il Sistema Clienti per Operatori del Benessere", d: "La guida pratica per fare i primi 10 clienti online.", fmt: "Guida", price: "Gratis", badge: "Gratis", href: "/guida-gratuita" },
      { id: "card-call", t: "Call di orientamento", d: "30 minuti con me per capire da dove partire. Nessun obbligo.", fmt: "Videochiamata", price: "Gratis", badge: "Gratis", href: "/call-orientamento" },
    ],
  },
];

export function CatalogoCorsi() {
  return (
    <div className="space-y-20 md:space-y-28">
      {GROUPS.map((g) => (
        <section key={g.id} id={g.id} className="scroll-mt-28">
          <p className="eyebrow mb-4">{g.n}</p>
          <Heading text={g.title} className="text-4xl md:text-6xl" />
          <p className="mt-4 text-stone max-w-xl">{g.lead}</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {g.items.map((p, i) => (
              <Reveal key={p.t} delay={(i % 3) * 0.08}>
                <Link href={p.href} className="lift zoom group block h-full rounded-3xl bg-blush/30 p-5">
                  <div className="relative"><Slot kind="foto" id={p.id} label="Copertina" ratio="16/9" />{p.badge && <span className="absolute top-3 left-3 bg-ink text-ivory text-xs rounded-full px-3 py-1">{p.badge}</span>}</div>
                  <div className="p-3 pt-5">
                    <p className="eyebrow">{p.fmt}</p>
                    <h3 className="font-display text-3xl mt-2 leading-tight">{p.t}</h3>
                    <p className="mt-2 text-stone text-[0.95rem]">{p.d}</p>
                    <p className="mt-5 flex justify-between text-sm font-medium"><span>{p.price}</span><span className="transition-transform duration-500 group-hover:translate-x-2">Scopri di più →</span></p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
