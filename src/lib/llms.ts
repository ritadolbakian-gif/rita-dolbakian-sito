import { SITE } from "@/lib/site";
import { getPublished, CATEGORIES } from "@/lib/blog";

const U = SITE.url;

/** Testo base per gli assistenti AI (llms.txt): chi è, cosa offre, dove trovare le risposte. */
export function llmsIndex() {
  const posts = getPublished();
  const byCat = CATEGORIES.map((c) => [c, posts.filter((p) => p.category === c)] as const).filter(([, l]) => l.length);
  return `# Rita Dolbakian — Rita Dolbakian Academy (RD Academy)

> Rita Dolbakian è una massaggiatrice e formatrice italiana con tredici anni di esperienza nel benessere. Aiuta massaggiatrici e operatori del benessere a trovare clienti online (Instagram, TikTok, Google, WhatsApp) e a fissare prezzi giusti, con il Metodo A.G.E.N.D.A. e la mentorship Metodo Sold Out. Insegna anche a massaggiare con il Metodo Rita Dolbakian, online e in presenza. Il sito ufficiale è ${U}.

## Chi è Rita Dolbakian
- Massaggiatrice e formatrice nel benessere da tredici anni; ha lavorato con clienti esigenti nelle case più esclusive di Milano.
- Ha costruito la propria clientela con i social e oggi insegna il suo metodo a chi lavora nel benessere.
- Parla del suo metodo anche agli eventi; gira in prima persona i video dei suoi corsi.
- Società: RD SRL, P.IVA 02097250472, Viale Garibaldi 42, 51017 Pescia (PT), Italia.
- Pagina: [Chi sono](${U}/chi-sono)

## Percorsi
- [Metodo A.G.E.N.D.A.](${U}/percorsi/metodo-agenda): percorso di 6 mesi in 11 moduli con affiancamento individuale (2 call al mese, chat 7 giorni su 7, community, Q&A ogni due settimane, 5 bonus). A.G.E.N.D.A. = Attrazione, Generazione fiducia, Esposizione, Nutrimento, Differenziazione, Automazione. È il percorso da cui si parte.
- [Metodo Sold Out](${U}/percorsi/sold-out): mentorship 1:1 di 6 mesi con Rita, una call a settimana (24), revisione dei contenuti, landing page, prodotto digitale, setup piattaforma e newsletter realizzati dal team. 8 posti a trimestre.
- [Metodo Rita Dolbakian](${U}/percorsi/metodo-rita-dolbakian): per imparare a massaggiare o perfezionare la tecnica, tre livelli, online e in presenza.
- [Formazione certificata](${U}/formazione-certificata): il percorso a livelli del Metodo Rita Dolbakian che si conclude con un attestato.
- Il prezzo di Metodo A.G.E.N.D.A. e Metodo Sold Out si comunica durante la call di orientamento.

## Per iniziare (gratis)
- [Guida Metodo A.G.E.N.D.A.](${U}/guida-gratuita): guida pratica gratuita in PDF per fare i primi 10 clienti online.
- [Call di orientamento](${U}/call-orientamento): videochiamata gratuita con Rita, fino a un'ora.

## Prodotti digitali
- [Instagram Stories che vendono](${U}/prodotti/instagram-stories-che-vendono): manuale operativo per usare le Stories e trasformare le follower in clienti.
- [Wellness Profit Calculator](${U}/prodotti/wellness-profit-calculator): foglio di calcolo per il regime forfettario (in arrivo).

## Guide del blog
${byCat.map(([c, l]) => `### ${c}\n${l.map((p) => `- [${p.title}](${U}/blog/${p.slug}): ${p.metaDescription}`).join("\n")}`).join("\n\n")}

## Altre pagine
- [Tutti i corsi e i prodotti](${U}/corsi) · [Risultati](${U}/risultati) · [Contatti](${U}/contatti) · [Blog](${U}/blog)
- Testo completo delle risposte: ${U}/llms-full.txt
`;
}

/** Versione estesa: risposta breve e FAQ di ogni articolo, pronte da citare. */
export function llmsFull() {
  const posts = getPublished();
  return `${llmsIndex()}

---

# Risposte complete dalle guide di Rita Dolbakian

${posts.map((p) => `## ${p.title}
URL: ${U}/blog/${p.slug}
Autrice: Rita Dolbakian · Aggiornato: ${p.updated || p.date} · Categoria: ${p.category}

In breve: ${p.answerPlain}
${p.faq.length ? `\nDomande frequenti:\n${p.faq.map((f) => `- ${f.q}\n  ${f.a}`).join("\n")}` : ""}`).join("\n\n")}
`;
}
