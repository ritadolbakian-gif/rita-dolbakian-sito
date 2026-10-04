# Pacchetto prompt per le immagini AI di Rita

## 0. Regole prima di generare
1. **Consenso**: Rita deve sapere e approvare che si usano immagini AI con il suo volto.
2. **Cosa va bene generare**: foto di atmosfera e di brand (studio, scrivania, mani al lavoro, nature morte, copertine, sfondi).
3. **Cosa NON generare**: testimonianze, "allieve", prima/dopo, risultati, eventi o palchi mai avvenuti presentati come reali, loghi di testate, attestati. Sono prove sociali: devono essere vere (vedi `MATERIALI.md`).
4. **Palco**: genera "Rita sul palco" solo se Rita tiene davvero eventi e solo come immagine illustrativa. Meglio una foto vera con il telefono.
5. **Video di presentazione**: registralo davvero (anche col telefono, luce vicino a una finestra). Non fare parlare Rita con l'AI.
6. Foto n.1 (donna con mano sul viso): sembra di un altro servizio fotografico. Verifica che sia di Rita e di avere i diritti, altrimenti sostituiscila.

## 1. Come generare (qualsiasi modello con "reference image / character consistency")
- Carica sempre le 2-3 foto vere di Rita come riferimento e aggiungi: *"Use the attached reference photos. The woman must keep exactly the same face, eyes, hair and features."*
- Genera 4 varianti per prompt, scegli la migliore, poi ritocca (luce, mani) e fai l'upscale.
- Controlla sempre: mani (5 dita), occhi, testi nascosti, riflessi strani. Scarta se Rita non è riconoscibile.
- Esporta in **WebP qualità 80**, lato lungo max 2000 px. Nomina come in tabella e copia in `public/media/`.

## 2. Blocco stile (da incollare in TUTTI i prompt)
```
Editorial luxury wellness photography. Soft natural window light, warm ivory and blush-pink tones with small accents of deep black and rose. Calm, minimal, uncluttered, plenty of negative space. 85mm lens, shallow depth of field, subtle film grain, realistic skin texture. No text, no logos, no watermark, no stock-photo cliches (no orchids, no zen stones).
```

## 3. Prompt per spazio
Formato: **file** · rapporto · pixel · id in `media.ts`

**1. Percorso A.G.E.N.D.A.** · `path-agenda.webp` · 16:11 · 1920×1320 · `path-agenda`
```
[REFERENCE] The woman from the reference photos sits at a light wooden desk in a bright minimal studio, a laptop open, a notebook and a cup of tea beside her, looking at the screen with a calm confident expression. A massage room softly blurred in the background. [STYLE]
```

**2. Percorso Metodo RD (mani)** · `path-rd.webp` · 16:11 · 1920×1320 · `path-rd`
```
Close-up of a therapist's hands performing a massage on a person's back, no faces visible, warm oil sheen, soft side light, cream towel, blush tones. [STYLE]
```

**3. Guida gratuita (mockup)** · `guida-mockup.webp` · 3:4 · 1500×2000 · `guida-mockup`
```
A thin printed booklet with a blank blush-pink cover standing on a light surface, soft shadow, a pen and a cup of tea beside it, top-down soft light. Blank cover, no text. [STYLE]
```
(Il titolo «Il Sistema Clienti per Operatori del Benessere» si aggiunge dopo in Canva.)

**4. Card Call** · `card-call.webp` · 4:3 · 1600×1200 · `card-call`
```
[REFERENCE] The woman smiles warmly at her laptop during a video call, in a bright studio with a massage table softly blurred behind her. [STYLE]
```

**5. Card Wellness Mastery** · `card-wm.webp` · 4:3 · 1600×1200 · `card-wm`
```
[REFERENCE] The woman stands confidently in her studio holding a tablet against her chest, light coming from a large window, relaxed posture, slight smile. [STYLE]
```

**6. Card Metodo RD (ambiente)** · `card-rd.webp` · 4:3 · 1600×1200 · `card-rd`
```
A massage table with folded cream towels, a small bottle of oil and a single candle, no people, warm morning light, soft blush wall. [STYLE]
```

**7. Affiancamento A.G.E.N.D.A.** · `agenda-hero.webp` · 4:3 · 1600×1200 · `agenda-hero`
```
[REFERENCE] The woman sits at a table in conversation with another woman seen from behind (face not visible), a notebook between them, warm and attentive atmosphere. [STYLE]
```

**8. Copertina video Wellness Mastery** · `wm-poster.webp` · 16:10 · 1920×1200 · `wm-video` (campo `poster`)
```
[REFERENCE] The woman sits at a desk, facing the camera, a soft smile, hands resting on the table, plain light background with a plant. [STYLE]
```

**9. Mani, dettaglio tecnica** · `rd-hands.webp` · 4:5 · 1600×2000 · `rd-hands`
```
Extreme close-up of two hands gently working on a shoulder, oil sheen, shallow depth of field, warm skin tones, blush and ivory background. [STYLE]
```

**10. Lezione online** · `rd-online-poster.webp` · 16:9 · 1920×1080 · `rd-online` (poster)
```
[REFERENCE] The woman demonstrates a technique on a person lying on a massage table (the person's face not visible), seen from a side camera angle as in an online lesson, bright studio. [STYLE]
```

**11. Aula in presenza** · `rd-aula.webp` · 16:9 · 1920×1080 · `rd-aula`
```
A small bright training room with three massage tables arranged in a half circle, towels and oils ready, no people, large window, clean and calm. [STYLE]
```
(Se serve vederla piena, usa foto reali di una vera edizione.)

**12. Galleria "dietro le quinte"** · `gallery-1…6.webp` · 4:5 e 1:1 · `gallery-1…6`
- 1 (4:5): `[REFERENCE] The woman arranging oils on a shelf, side light, calm gesture.`
- 2 (1:1): `Hands folding a cream towel on a massage table, soft light.`
- 3 (4:5): `[REFERENCE] The woman looking out of a large window with a cup of tea, back three-quarter view.`
- 4 (1:1): `Still life: a notebook, a pen and a green plant on a light wooden desk.`
- 5 (4:5): `[REFERENCE] The woman walking through a bright doorway into her studio, motion softly blurred.`
- 6 (1:1): `A bottle of oil and a small candle on a blush linen cloth, morning light.`
(Aggiungi sempre lo [STYLE].)

**13. Copertine articoli (blog)** · `blog-<slug>.webp` · 4:3 · 1600×1200 · id `blog-<slug>` (la stessa immagine è usata anche in testata, ritagliata in 16:8)
Modello: `Minimal still life related to [TEMA], blush and ivory tones, lots of negative space, soft shadows. [STYLE]`

| Slug | TEMA |
|---|---|
| `come-trovare-clienti-massaggiatrice` | an open appointment diary with a pencil and a cup of tea, top-down |
| `agenda-massaggiatrice-mesi-vuoti` | a calendar page with sunlight and a shadow moving across it |
| `quanto-far-pagare-un-massaggio` | a small calculator, a notebook and a candle on a linen cloth |
| `fidelizzare-clienti-massaggi` | a handwritten thank-you card with a small flower, no readable text |
| `instagram-per-massaggiatrici` | a phone on a light desk next to a ring light reflection, screen blurred |
| `come-rispondere-quanto-costa` | a phone with a blank chat bubble on screen, soft light, no readable text |
| `google-business-profile-massaggiatori` | a small shop door with a plant and a "welcome" mat, morning light, no readable text |
| `come-scegliere-un-corso-di-massaggio` (non pubblicato) | folded towels and a notebook with a checklist, no readable text |
| `corso-massaggio-online-funziona` (non pubblicato) | a laptop on a massage table showing a blurred video lesson |
| `imparare-a-massaggiare-da-zero` (non pubblicato) | a pair of hands over a massage table, beginner posture, soft light |

**14. Sfondo scuro bianco e nero** · `rita-bn.webp` · 16:9 · 2400×1350 (per sezioni scure)
```
[REFERENCE] Black and white high-contrast portrait of the woman, three-quarter view, deep black background, soft rim light on the left, negative space on the right for text. No text.
```

**15. Immagine social / anteprima link (OG)** · `og-image.jpg` · 1200×630
```
[REFERENCE] The woman on the left third of the frame, blush-pink and ivory background, large empty space on the right for a headline. No text. [STYLE]
```
(Il titolo si aggiunge in Canva. Salvala in `public/og-image.jpg`.)

**16. Storie / Reel (verticale)** · 9:16 · 1080×1920
```
[REFERENCE] Full-length vertical portrait of the woman in her studio, blush wall, negative space at the top and bottom for text. No text. [STYLE]
```

**17. Opzionale: Rita sul palco (solo se vero)** · 16:9 · 1920×1080
```
[REFERENCE] The woman speaking on a small stage with a soft spotlight, wireless microphone, blurred audience from behind, warm tones. [STYLE]
```

## 4. Dopo la generazione
1. Copia i file in `public/media/`.
2. In `src/lib/media.ts` aggiungi `src` (e `poster` per i video) all'id indicato.
3. Se il taglio non è centrato, regola `pos` (es. `"50% 20%"`).
