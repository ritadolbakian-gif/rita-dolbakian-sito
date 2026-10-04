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
