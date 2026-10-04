# Immagini «Prima» e «Dopo» (Metodo A.G.E.N.D.A.): prompt esatti

Servono alla sezione «Cosa cambia» della pagina Metodo A.G.E.N.D.A.
- **Prima:** una persona frustrata, in confusione, con l'agenda disordinata e pochi clienti.
- **Dopo:** agenda piena, prezzi più alti, benessere.

Sono **immagini illustrative** del cambiamento, non il caso di una persona reale: sul sito restano accompagnate dalla frase «descrizione del percorso, non una promessa di risultato».

## Cosa devi fare
1. Genera **Prima** e **Dopo** con lo stesso modello e **allegando le foto di Rita** come riferimento (stessa persona nelle due immagini: il cambiamento si capisce meglio).
2. Genera 4 varianti per ognuna e scegli quelle in cui le mani e il volto sono corretti.
3. Salva come `agenda-prima.webp` e `agenda-dopo.webp` (4:3, 1600 × 1200) e copiale in `public/media/`.
4. In `src/lib/media.ts` scrivi i percorsi, oppure mandameli e li inserisco io.
> Se Rita non vuole comparire come «frustrata», usa la **variante senza Rita** (più sotto).

## Blocco da incollare all'inizio dei prompt con Rita
```
Use the attached reference photos of the woman: she must keep exactly the same face, eyes, hair and features.
```

## 1) PRIMA · 4:3 · 1600 × 1200 · `agenda-prima.webp` (id `agenda-prima`)
```
The woman sits at a cluttered light wooden desk in a dim, slightly cold room, one hand pressed against her forehead and the other holding a pen, looking tired, frustrated and overwhelmed, eyes tired, slumped shoulders. On the desk: a messy open paper diary with crossed-out pages and many empty slots, scattered sticky notes with abstract scribbles (no readable text), a smartphone lying face up with a completely blank dark screen and no notifications, a cold half-finished cup of tea, crumpled paper. Behind her, a massage room out of focus: empty massage table with untidy towels, closed blinds. Cool grey-beige tones, desaturated colors, flat overcast light from a window, a feeling of silence and emptiness. Shot at eye level, 4:3 composition, the woman on the left and the messy diary in the foreground. No readable text, no numbers, no logos.

Editorial lifestyle photography, 35mm lens, shallow depth of field, subtle film grain, realistic skin texture and hands (five fingers each). No watermark.
```

## 2) DOPO · 4:3 · 1600 × 1200 · `agenda-dopo.webp` (id `agenda-dopo`)
```
The same woman, relaxed, glowing and confident, smiling warmly, sitting upright in a bright, warm wellness studio at a tidy light wooden desk. On the desk: an open diary full of neatly organized colored appointment blocks in blush pink and rose (no readable text), a smartphone showing several soft notification badges (no readable text), a fresh cup of tea, a small vase with fresh flowers, and an elegant treatment menu card in ivory with a small rose-pink wax seal (lines of abstract text, no readable words, no numbers) suggesting premium prices. Behind her, a beautiful massage room, softly out of focus: a made massage table with folded cream towels, plants, warm candle light. Golden-hour sunlight from a large window, warm ivory, blush-pink and rose tones, a feeling of calm, abundance and well-being. Same camera angle as the "before" picture, 4:3 composition, the woman on the left and the full diary in the foreground. No readable text, no numbers, no logos.

Editorial lifestyle photography, 35mm lens, shallow depth of field, subtle film grain, realistic skin texture and hands (five fingers each). No watermark.
```

## Variante SENZA Rita (donna generica) · stessi formati
Togli il blocco di riferimento e sostituisci «the woman» con:
```
a woman in her thirties with brown hair, wearing a simple black t-shirt (before) / a soft white tunic (after)
```

## Versione con scritte «Prima» e «Dopo» (per social e storie)
Genera prima le due immagini singole, poi allegale entrambe e usa:
```
Create a clean side-by-side before and after composition using the two attached images, 16:9 (1920 × 1080): the left half is the "before" image, the right half is the "after" image, separated by a thin ivory vertical line. Over the left half, bottom-left, typeset in an elegant high-contrast serif (like Instrument Serif), white, the word "Prima". Over the right half, bottom-left, the word "Dopo" in italic rose-pink (#D4577A) with a soft white outline for legibility. No other text, perfectly spelled.
```
Altri formati: aggiungi `Make it 1:1 (1200 × 1200)` oppure `Make it 9:16 (1080 × 1920), the before image on top and the after image below.`
