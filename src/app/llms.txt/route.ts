import { SITE } from "@/lib/site";

export function GET() {
  const body = `# Rita Dolbakian — Rita Dolbakian Academy (RD Academy)

> Rita Dolbakian è una massaggiatrice e formatrice nel settore del benessere, attiva da oltre dieci anni. Offre formazione a chi lavora nel benessere (Metodo A.G.E.N.D.A. e Metodo Sold Out) e a chi vuole imparare a massaggiare (Metodo Rita Dolbakian, online e in presenza).

## Percorsi
- [Metodo A.G.E.N.D.A.](${SITE.url}/percorsi/metodo-agenda): il metodo in sei passi (Attrazione, Generazione fiducia, Esposizione, Nutrimento, Differenziazione, Automazione) e il primo percorso di affiancamento per operatrici e operatori del benessere che vogliono continuità e clienti qualificati online.
- [Metodo Sold Out](${SITE.url}/percorsi/sold-out): mentorship 1:1 di 6 mesi con una call a settimana, Kit Pronto, landing page, prodotto digitale e setup piattaforma; 8 posti a trimestre; garanzia «Primi 2 mesi».
- [Metodo Rita Dolbakian](${SITE.url}/percorsi/metodo-rita-dolbakian): formazione per imparare a massaggiare e migliorare la propria tecnica, online e in presenza.

## Per iniziare
- [Guida gratuita: Il Sistema Clienti per Operatori del Benessere](${SITE.url}/guida-gratuita)
- [Call gratuita di orientamento (30 minuti)](${SITE.url}/call-orientamento)

## Altro
- [Chi sono](${SITE.url}/chi-sono)
- [Blog](${SITE.url}/blog)
- [Contatti](${SITE.url}/contatti)
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
