# Immagine «Il rischio è mio» (garanzia): prompt esatti e formati

Serve per lo spazio `wm-garanzia` della pagina Wellness Mastery (e si può riusare nelle pagine A.G.E.N.D.A. e Metodo Rita Dolbakian, e sui social).
**Allega sempre le foto vere di Rita come riferimento.** Genera 4 varianti e scegli la migliore.

## Blocco da incollare all'inizio di OGNI prompt
```
Use the attached reference photos of the woman: she must keep exactly the same face, eyes, hair and features.
```

## Blocco stile (da incollare alla fine di ogni prompt)
```
Editorial luxury wellness photography. Soft natural window light, warm ivory and blush-pink tones with small accents of deep black and rose. Calm, minimal, uncluttered. 85mm lens, shallow depth of field, subtle film grain, realistic skin texture and hands (five fingers each). No logos, no watermark.
```

## A) Versione SENZA testo: per il sito (4:5, 1600 × 2000)
Va in `public/media/wm-garanzia.webp`, id `wm-garanzia` in `src/lib/media.ts`.
```
Vertical portrait of the woman in her bright wellness studio, standing three-quarter view, one hand resting gently on her chest, a warm reassuring half-smile, looking straight at the camera as if saying "I take the risk, you take the first step". Soft window light on the left, a massage table with folded cream towels and a green plant softly blurred in the background, blush-pink wall. Her face and shoulders occupy the central 60% of the frame, with calm empty space around, so it can be cropped to square or horizontal without cutting her face. No text, no letters, no numbers anywhere in the image.
```

## B) Versione CON testo: per social, storie e anteprime
Testo da scrivere sull'immagine: **«Soddisfatti *o rimborsati*.»** e sotto, più piccolo, **«Per tutto il percorso. Il rischio è mio.»** (Instrument Serif nero, parola in corsivo rosa `#D4577A`, sottotitolo in Hanken Grotesk grigio caldo `#6E6560`).
```
Same woman and mood as above, composition leaving a large clean empty area for text. On the clean area, typeset in a large elegant high-contrast serif font (like Instrument Serif), black, the headline "Soddisfatti o rimborsati." with the words "o rimborsati" in italic rose-pink (#D4577A). Below it, smaller, in a clean grey-brown sans-serif, the line "Per tutto il percorso. Il rischio è mio." Typography crisp and perfectly spelled, generous margins, no other text, no logos.
```

## Formati: cosa cambiare nel prompt
| Uso | Rapporto | Pixel | Cosa aggiungere alla fine del prompt |
|---|---|---|---|
| Sito (spazio `wm-garanzia`) | 4:5 | 1600 × 2000 | niente (versione A) |
| Post Instagram / Facebook quadrato | 1:1 | 1200 × 1200 | `Square composition 1:1, the woman on the left half, empty space on the right half.` |
| Banner largo / copertina video | 16:9 | 1920 × 1080 | `Wide 16:9 composition, the woman on the left third, large empty space on the right two thirds.` |
| Storie, Reel, TikTok | 9:16 | 1080 × 1920 | `Tall 9:16 composition, the woman in the middle third, empty space in the top and bottom thirds for text, keep the top 250 px and bottom 350 px clear of faces and key details.` |
| Anteprima link / immagine social (OG) | 1.91:1 | 1200 × 630 | `Wide 1.91:1 composition, the woman on the left, large empty space on the right.` |

## Dopo la generazione
1. Salva in WebP (qualità 80). Il file del sito: `public/media/wm-garanzia.webp`.
2. In `src/lib/media.ts` scrivi: `"wm-garanzia": { src: "/media/wm-garanzia.webp", alt: "Rita Dolbakian: il rischio è mio" }`.
3. Controlla mani, occhi e che non ci siano scritte involontarie (nella versione A).
4. Mandami i file e li inserisco io (anche gli altri formati, se vuoi usarli nelle altre pagine).
