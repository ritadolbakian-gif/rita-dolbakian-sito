# Guida gratuita: copertina e immagini. Prompt esatti

**Guida:** «Il Sistema Clienti per Operatori del Benessere. La guida pratica per fare i primi 10 clienti online», di Rita Dolbakian.

## Cosa devi fare, in ordine
1. **Genera la copertina piatta** (prompt 1). È la base di tutto: il testo deve essere scritto giusto. Genera 4 varianti e scegli quella con le parole perfette.
2. **Salvala** come `guida-copertina.webp`. Questa copertina va anche **dentro il PDF** della guida (come prima pagina).
3. **Allegala come riferimento** negli altri prompt (2, 3, 4): così il titolo sul libretto resta identico e non si deforma.
4. Genera il mockup (prompt 2), la foto con Rita (prompt 3) e le 3 pagine interne (prompt 4).
5. Copia i file in `public/media/` e mandameli, oppure scrivi i percorsi in `src/lib/media.ts` (ids sotto).

## Stile da incollare alla fine di ogni prompt
```
Editorial luxury wellness design. Palette: warm ivory (#FAF7F4), blush pink (#EBC7CC), accents of rose (#D4577A), deep warm black (#0B0A09). Calm, minimal, elegant, lots of negative space. No stock-photo cliches, no extra logos, no watermark.
```

---

## 1) Copertina piatta · 3:4 · 1500 × 2000 · `guida-copertina.webp` (id `guida-copertina`)
```
Flat front cover design of a premium printed guide, portrait 3:4, no 3D, no mockup, no shadows around it, the cover fills the whole image. Background: soft ivory to blush-pink gradient with a few large, soft, organic rose-pink curved shapes and thin elegant line arcs in the lower right, subtle paper grain. Typography, perfectly spelled in Italian, generous margins, left aligned:
- small spaced capital sans-serif label at the top: "GUIDA PRATICA GRATUITA"
- large elegant high-contrast serif title (like Instrument Serif), black, on three lines: "Il Sistema" / "Clienti" / "per Operatori del Benessere", with the word "Clienti" in italic rose-pink (#D4577A)
- below, smaller, in a clean sans-serif, warm grey: "La guida pratica per fare i primi 10 clienti online"
- at the bottom left, in small capitals: "RITA DOLBAKIAN", and next to it a small elegant monogram "RD" in black with a rose-pink swash.
No other text, no numbers, no logos, no photos of people.
```

## 2) Mockup della guida · 3:4 · 1500 × 2000 · `guida-mockup.webp` (id `guida-mockup`)
Allega la copertina del prompt 1 come riferimento.
```
Use the attached cover image as the exact front cover of the booklet: keep the title, text and layout identical, do not redraw or change any word. Photograph of a premium printed A4 booklet standing upright and slightly angled on a light wooden desk, soft natural window light from the left, a cup of tea and a pencil beside it, a green plant softly blurred in the background, blush and ivory tones, shallow depth of field. The cover is large, sharp and fully legible. Realistic paper texture and soft shadow.
```

## 3) Rita con la guida · 4:5 · 1600 × 2000 · `guida-rita.webp` (id `guida-rita`)
Allega le foto di Rita **e** la copertina del prompt 1.
```
Use the attached reference photos of the woman: she must keep exactly the same face, eyes, hair and features. Use the attached cover image as the exact front cover of the booklet she holds: keep every word identical. Vertical portrait of the woman smiling warmly in her bright wellness studio, holding the printed booklet in front of her chest with the cover facing the camera, readable, one hand on the edge, relaxed shoulders. Soft window light, massage table with folded towels and a plant blurred in the background, blush wall. Realistic skin and hands (five fingers each).
```

## 4) Tre pagine interne · 4:3 · 1600 × 1200 · `guida-pag-1.webp`, `guida-pag-2.webp`, `guida-pag-3.webp` (ids `guida-pag-1/2/3`)
Allega la copertina come riferimento di stile (colori e font), ma le pagine interne **non devono avere testo leggibile**.
**Pagina 1** (checklist):
```
Flat view of an open spread of a premium guide booklet on a light desk, ivory pages with blush-pink accents. Left page: a large serif heading made of abstract grey bars (no readable text) and a checklist of four items with rose-pink check marks and grey placeholder lines. Right page: a soft pink rounded callout box with abstract grey lines. No readable words, no numbers.
```
**Pagina 2** (piano 4 settimane):
```
Open spread of a premium guide booklet seen from above on a light desk. Left page: a clean calendar-style grid of four horizontal weeks with rose-pink dots and grey placeholder bars. Right page: a big serif number "4" in rose-pink italic and abstract text lines. No other readable words.
```
**Pagina 3** (messaggi):
```
Open spread of a premium guide booklet from above on a light desk. Left page: two rounded chat bubbles, blush pink and ivory, with abstract grey lines instead of text. Right page: a small table with three columns made of grey bars and rose-pink headers (no readable words). Soft shadows, paper texture.
```

---

## Formati extra (social, banner, anteprima link)
Usa la copertina o il mockup come riferimento e aggiungi alla fine del prompt:

| Uso | Rapporto | Pixel | Frase da aggiungere |
|---|---|---|---|
| Post quadrato | 1:1 | 1200 × 1200 | `Square composition, the booklet on the right half, large empty ivory space on the left half.` |
| Storie / Reel | 9:16 | 1080 × 1920 | `Tall 9:16 composition, the booklet in the middle, empty space at the top and bottom for text.` |
| Banner largo / card del sito | 16:9 | 1920 × 1080 | `Wide 16:9 composition, the booklet on the right third, large empty space on the left.` |
| Anteprima link | 1.91:1 | 1200 × 630 | `Wide 1.91:1 composition, the booklet on the right, empty space on the left.` |

Il formato 16:9 serve anche per la card della guida in Home e nel catalogo (`card-guida`, `corso-guida`).
