# Copertine del blog: immagini + dove mettere il testo

Sono **10 copertine** (7 per gli articoli già online, 3 per quelli in arrivo). Si creano in due passaggi: **1) l'immagine senza testo** con i prompt qui sotto, **2) il testo sopra**, nella zona vuota che l'immagine lascia a sinistra.

## Formato e zona del testo
- **File:** `blog-<slug>.webp`, **1600 × 1200 px (4:3)**, copia in `public/media/` e scrivi il percorso in `src/lib/media.ts` (id `blog-<slug>`).
- **Dove va il testo:** nella **metà sinistra** (da x 100 a x 880), **centrato in verticale**, tra y 300 e y 900. Il soggetto dell'immagine sta a destra.
- **Perché proprio lì:** nella testata dell'articolo la copertina viene ritagliata in formato largo (2:1) e si perde il 25% in alto e in basso: il testo deve stare al centro per non essere tagliato. Nelle card (4:3) si vede tutto.
- **Margini di sicurezza:** 100 px a sinistra, 120 px sopra e sotto.

## Testo sopra l'immagine (Canva o simili)
- **Etichetta categoria** (in alto nel blocco): maiuscolo, spaziato, Hanken Grotesk 500, 26 px, colore grigio caldo `#6E6560`.
- **Titolo breve** (la riga della tabella sotto): **Instrument Serif**, 120–140 px, interlinea 1,0, colore nero `#0B0A09`; la parola tra asterischi in *corsivo* rosa `#D4577A`. Massimo 3 righe.
- **Opzionale:** il monogramma RD piccolo (110 px) in basso a sinistra. Niente altro.
- **Attenzione:** nel sito il titolo completo dell'articolo compare già sotto la copertina, quindi sulla copertina metti il **titolo breve**, non quello lungo, altrimenti si ripete.

Se mi mandi le immagini **senza testo**, posso mettere io il titolo breve sopra tutte e 10 con questi stessi font e colori, così sono identiche tra loro.

---

### 1. `blog-come-trovare-clienti-massaggiatrice` 
**Categoria** Clienti e agenda · **Titolo breve da scrivere** `Trova clienti *senza* passaparola`
**File** `blog-come-trovare-clienti-massaggiatrice.webp` · 4:3 · 1600×1200
```
An open appointment diary with a pencil and a cup of tea on a light wooden desk, seen from above at a slight angle, placed in the right 40% of the frame. The left 55% of the frame is a clean, calm area of soft ivory and blush light with gentle shadows, completely empty, reserved for a headline. Editorial luxury wellness photography. Soft natural window light, warm ivory and blush-pink tones with small accents of deep black and rose. Calm, minimal, uncluttered. 85mm lens, shallow depth of field, subtle film grain. No text, no logos, no watermark, no letters or numbers anywhere in the image.
```

### 2. `blog-agenda-massaggiatrice-mesi-vuoti` 
**Categoria** Clienti e agenda · **Titolo breve da scrivere** `Agenda a ondate? *Stabilizzala*`
**File** `blog-agenda-massaggiatrice-mesi-vuoti.webp` · 4:3 · 1600×1200
```
A wall calendar page, a band of sunlight and a soft shadow moving across it, placed in the right 40% of the frame. The left 55% of the frame is a clean, calm area of soft ivory and blush light with gentle shadows, completely empty, reserved for a headline. Editorial luxury wellness photography. Soft natural window light, warm ivory and blush-pink tones with small accents of deep black and rose. Calm, minimal, uncluttered. 85mm lens, shallow depth of field, subtle film grain. No text, no logos, no watermark, no letters or numbers anywhere in the image.
```

### 3. `blog-quanto-far-pagare-un-massaggio` 
**Categoria** Prezzi e posizionamento · **Titolo breve da scrivere** `Quanto far pagare *un massaggio*`
**File** `blog-quanto-far-pagare-un-massaggio.webp` · 4:3 · 1600×1200
```
A small calculator, a notebook and a lit candle on a linen cloth, placed in the right 40% of the frame. The left 55% of the frame is a clean, calm area of soft ivory and blush light with gentle shadows, completely empty, reserved for a headline. Editorial luxury wellness photography. Soft natural window light, warm ivory and blush-pink tones with small accents of deep black and rose. Calm, minimal, uncluttered. 85mm lens, shallow depth of field, subtle film grain. No text, no logos, no watermark, no letters or numbers anywhere in the image.
```

### 4. `blog-fidelizzare-clienti-massaggi` 
**Categoria** Clienti e agenda · **Titolo breve da scrivere** `Clienti che *tornano*`
**File** `blog-fidelizzare-clienti-massaggi.webp` · 4:3 · 1600×1200
```
A handwritten thank-you card with a small flower and a cup of tea, no readable writing, placed in the right 40% of the frame. The left 55% of the frame is a clean, calm area of soft ivory and blush light with gentle shadows, completely empty, reserved for a headline. Editorial luxury wellness photography. Soft natural window light, warm ivory and blush-pink tones with small accents of deep black and rose. Calm, minimal, uncluttered. 85mm lens, shallow depth of field, subtle film grain. No text, no logos, no watermark, no letters or numbers anywhere in the image.
```

### 5. `blog-instagram-per-massaggiatrici` 
**Categoria** Instagram e contenuti · **Titolo breve da scrivere** `Instagram *da zero*, passo passo`
**File** `blog-instagram-per-massaggiatrici.webp` · 4:3 · 1600×1200
```
A smartphone lying on a light desk next to a cup of tea, the screen blurred and unreadable, placed in the right 40% of the frame. The left 55% of the frame is a clean, calm area of soft ivory and blush light with gentle shadows, completely empty, reserved for a headline. Editorial luxury wellness photography. Soft natural window light, warm ivory and blush-pink tones with small accents of deep black and rose. Calm, minimal, uncluttered. 85mm lens, shallow depth of field, subtle film grain. No text, no logos, no watermark, no letters or numbers anywhere in the image.
```

### 6. `blog-come-rispondere-quanto-costa` 
**Categoria** Vendita naturale · **Titolo breve da scrivere** `«Quanto costa?» *Rispondi così*`
**File** `blog-come-rispondere-quanto-costa.webp` · 4:3 · 1600×1200
```
A smartphone on a light desk showing an unreadable blurred chat, a cup of tea beside it, placed in the right 40% of the frame. The left 55% of the frame is a clean, calm area of soft ivory and blush light with gentle shadows, completely empty, reserved for a headline. Editorial luxury wellness photography. Soft natural window light, warm ivory and blush-pink tones with small accents of deep black and rose. Calm, minimal, uncluttered. 85mm lens, shallow depth of field, subtle film grain. No text, no logos, no watermark, no letters or numbers anywhere in the image.
```

### 7. `blog-google-business-profile-massaggiatori` 
**Categoria** Clienti e agenda · **Titolo breve da scrivere** `La tua scheda Google, *passo passo*`
**File** `blog-google-business-profile-massaggiatori.webp` · 4:3 · 1600×1200
```
The door of a small bright studio with a potted plant and a doormat, morning light, no readable signs, placed in the right 40% of the frame. The left 55% of the frame is a clean, calm area of soft ivory and blush light with gentle shadows, completely empty, reserved for a headline. Editorial luxury wellness photography. Soft natural window light, warm ivory and blush-pink tones with small accents of deep black and rose. Calm, minimal, uncluttered. 85mm lens, shallow depth of field, subtle film grain. No text, no logos, no watermark, no letters or numbers anywhere in the image.
```

### 8. `blog-come-scegliere-un-corso-di-massaggio` ⏳ (articolo non ancora pubblicato)
**Categoria** Tecnica e formazione · **Titolo breve da scrivere** `Come scegliere *un corso*`
**File** `blog-come-scegliere-un-corso-di-massaggio.webp` · 4:3 · 1600×1200
```
Folded cream towels and an open notebook with an unreadable checklist on a massage table, placed in the right 40% of the frame. The left 55% of the frame is a clean, calm area of soft ivory and blush light with gentle shadows, completely empty, reserved for a headline. Editorial luxury wellness photography. Soft natural window light, warm ivory and blush-pink tones with small accents of deep black and rose. Calm, minimal, uncluttered. 85mm lens, shallow depth of field, subtle film grain. No text, no logos, no watermark, no letters or numbers anywhere in the image.
```

### 9. `blog-corso-massaggio-online-funziona` ⏳ (articolo non ancora pubblicato)
**Categoria** Tecnica e formazione · **Titolo breve da scrivere** `Corso online: *funziona davvero?*`
**File** `blog-corso-massaggio-online-funziona.webp` · 4:3 · 1600×1200
```
A laptop on a massage table showing a blurred video lesson, folded towels beside it, placed in the right 40% of the frame. The left 55% of the frame is a clean, calm area of soft ivory and blush light with gentle shadows, completely empty, reserved for a headline. Editorial luxury wellness photography. Soft natural window light, warm ivory and blush-pink tones with small accents of deep black and rose. Calm, minimal, uncluttered. 85mm lens, shallow depth of field, subtle film grain. No text, no logos, no watermark, no letters or numbers anywhere in the image.
```

### 10. `blog-imparare-a-massaggiare-da-zero` ⏳ (articolo non ancora pubblicato)
**Categoria** Tecnica e formazione · **Titolo breve da scrivere** `Imparare a massaggiare *da zero*`
**File** `blog-imparare-a-massaggiare-da-zero.webp` · 4:3 · 1600×1200
```
A pair of hands resting on a massage table with a cream towel, beginner posture, no face, placed in the right 40% of the frame. The left 55% of the frame is a clean, calm area of soft ivory and blush light with gentle shadows, completely empty, reserved for a headline. Editorial luxury wellness photography. Soft natural window light, warm ivory and blush-pink tones with small accents of deep black and rose. Calm, minimal, uncluttered. 85mm lens, shallow depth of field, subtle film grain. No text, no logos, no watermark, no letters or numbers anywhere in the image.
```
