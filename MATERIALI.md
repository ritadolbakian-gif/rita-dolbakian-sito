# Come inserire foto, video e prove sociali

## Foto e video
1. Copia i file in `public/media/` (foto JPG/WebP, video MP4).
2. Apri `src/lib/media.ts` e aggiungi `src` all'elemento giusto, ad esempio:
   `hero: { src: "/media/rita-hero.jpg", alt: "Rita Dolbakian nel suo studio" }`
   Per un video aggiungi anche `poster` (immagine di copertina).
3. Le illustrazioni si sostituiscono da sole con la foto. I rapporti consigliati sono scritti nell'`alt` di ogni voce.

## Casi studio, testimonianze, testate, valutazioni
Tutto in `src/lib/proof.ts`. Compila **solo** contenuti reali e autorizzati per iscritto:
- `CASES`: numero grande, nome e cognome, ruolo, citazione, foto/video.
- `TESTIMONIALS`: citazioni e video verticali (muro "Le loro parole").
- `PRESS`: testate o collaborazioni reali (compare la barra solo se non vuota).
- `RATING`: solo se hai recensioni verificabili (attiva lo schema AggregateRating).
Finché gli elenchi sono vuoti il sito mostra segnaposto tratteggiati.

## Contatti
`src/lib/site.ts` → `CONTACT`: compila `email` e `whatsapp` (con prefisso, solo cifre, es. `393331234567`). Il pulsante WhatsApp fluttuante appare da solo.

## Moduli
Imposta la variabile `GHL_WEBHOOK_URL` (webhook GoHighLevel) per far arrivare i lead.

## Blog
- Gli articoli stanno in `content/blog/*.md` (uno per file, con intestazione in alto). Per modificare un testo, modifica il file.
- `published: true/false` nell'intestazione decide se l'articolo è online. Gli articoli 8, 9 e 10 sono **non pubblicati** perché hanno parti da confermare con Rita (vedi `content/DA-COMPLETARE-ARTICOLI.md`). Quando sono pronti, metti `"published": true`.
- Le copertine si inseriscono in `src/lib/media.ts` (`blog-<slug>`), vedi `PROMPT-IMMAGINI.md`.

## Numeri in evidenza (striscia e contatori)
`src/lib/proof.ts` → `STATS`. Ogni numero ha `confirmed: true/false`. I numeri **non confermati** (oggi «+100 studenti formati») si vedono solo in sviluppo/anteprima con la scritta «da confermare» e **non vengono pubblicati online**. Quando hai il numero reale: cambia `value` e metti `confirmed: true`. Per vedere i numeri di prova anche su un'anteprima Vercel imposta la variabile `NEXT_PUBLIC_SHOW_DRAFT=1`.

## Recensioni Google e Trustpilot
`src/lib/proof.ts`:
- `REVIEW_SOURCES.google`: `profileUrl` (scheda Google) e `reviewUrl` (link «Scrivi una recensione»). Compaiono i pulsanti nella sezione Recensioni.
- `REVIEW_SOURCES.trustpilot`: `profileUrl`, `reviewUrl` e, per il widget, `businessUnitId` (dal pannello Trustpilot > Integrazioni > TrustBox). Il widget si carica solo dopo il consenso ai cookie di marketing.
- `RATING`: valutazione media reale (es. 4,9 su 120 recensioni): compare nel hero, nella striscia, nella sezione Recensioni e nei dati strutturati di Google. Inserirla solo se è vera e verificabile.
- `REVIEWS`: le recensioni singole da mostrare (copiate da Google/Trustpilot).
La sezione Recensioni è in Home, Wellness Mastery e Risultati.

## Risultato personale di Rita (pagina Chi sono)
`src/lib/proof.ts` → `PERSONAL_RESULT`: oggi `confirmed: false`, quindi la cifra «15.000 € in un solo mese, poi in modo costante» si vede solo in sviluppo/anteprima con la scritta «da confermare» e **non è pubblicata online**. Quando Rita conferma importo e periodo (con fatture a disposizione) metti `confirmed: true`. Sotto la cifra c'è il disclaimer: risultato personale, non una promessa di guadagno.
