# Lista di controllo per andare online

## 1. Cosa c'è già
- Sito completo: Home, Percorsi (hub, A.G.E.N.D.A., Wellness Mastery, Metodo Rita Dolbakian), Corsi, Formazione certificata, Chi sono, Risultati, Blog (7 articoli pubblicati, 3 pronti), Guida gratuita, Call, Contatti, Area Privata, pagine legali.
- Mobile ottimizzato, menu, logo, favicon, immagine social, SEO (titoli, descrizioni, dati strutturati, sitemap, llms.txt, RSS), FAQ in ogni pagina.
- Repository privato: https://github.com/ritadolbakian-gif/rita-dolbakian-sito

## 2. Bloccanti: senza questi non si pubblica
1. **Testi legali** (privacy, cookie, termini di vendita, recesso e rimborsi, pagamento a rate, regolamento dei corsi): scritti in modo completo ma **vanno fatti rivedere da un avvocato** prima della pubblicazione, in particolare le parti su recesso, contratti collegati e finanziamenti. Vanno scritti/validati da un consulente. Dati societari RD SRL già inseriti (P.IVA, sede, REA, PEC); manca il capitale sociale.
2. **Qualifica professionale e limiti di legge** per l'attività di massaggio: come presentarli nelle pagine del Metodo e della Formazione certificata.
3. **Garanzia «soddisfatti o rimborsati» per tutta la durata**: confermare soglia minima di partecipazione (incontri e task), entro quanti giorni dalla fine si può chiedere, rimborso integrale o al netto dei bonus, e come si registrano presenze e consegne (Zoom, piattaforma).
3b. **Dati dei percorsi**: prezzi, rate, posti, durata, requisiti, sedi/calendario (Metodo Rita Dolbakian e Formazione certificata), formato dell'affiancamento A.G.E.N.D.A. e condizioni esatte della garanzia di 14 giorni.
4. **Attestato**: tipo (es. "Attestato RD Academy"), ente reale (se esiste), validità. Nessuna parola come "riconosciuto" o "abilitante" senza un ente vero.
5. **Contatti**: email, numero WhatsApp (`src/lib/site.ts`, `CONTACT`), orari.
6. **Moduli funzionanti**: webhook GoHighLevel in `GHL_WEBHOOK_URL`. Provare guida, contatti e prenotazione call con una prova vera.

## 3. Da ricevere da Rita
- Conferma delle sei parole di A.G.E.N.D.A. (fatta) e dei contenuti dei 10 moduli e delle 8 settimane di Wellness Mastery (oggi sono una bozza scritta da me).
- Programma reale e vocabolario tecnico del Metodo Rita Dolbakian.
- Casi studio e testimonianze con nome, cognome, foto e **autorizzazione scritta** (`src/lib/proof.ts`). Consenso a citare il percorso con David Valmori, se vuole usarlo.
- Foto vere in aula e con le allieve, attestato reale, video di presentazione (vedi `ELENCO-IMMAGINI.md`).
- Tappe e date della sua storia, eventuale team, URL LinkedIn, testate o collaborazioni reali.
- Articoli 8, 9, 10: contenuti da confermare con lei (`content/DA-COMPLETARE-ARTICOLI.md`), poi `published: true`.
- Esempi reali per il copy: 3-4 messaggi che riceve dalle clienti e 2-3 episodi suoi (anonimi).

## 4. Tecnico
- Vercel: importare il repository (account `ritadolbakian-gif`), aggiungere il dominio, variabile `GHL_WEBHOOK_URL`.
- Dominio definitivo in `src/lib/site.ts` (`SITE.url`) e variabile `NEXT_PUBLIC_SITE_URL`.
- Embed del calendario GoHighLevel: provare una prenotazione vera.
- Tracking (GA4, Meta Pixel) da installare solo dopo il consenso cookie: servono gli ID.
- Area Privata: collegare l'indirizzo reale della piattaforma corsi.
- Verifiche finali: Lighthouse mobile, test dei moduli, test cookie banner, controllo ortografico, test dei dati strutturati.

## 5. Immagini ancora da fare
Copertine card (`card-*`, `corso-*`), mockup guida, galleria, sezioni "prima/dopo", foto in aula reali. Elenco completo in `ELENCO-IMMAGINI.md`.

## 6. Dopo il lancio
Indicizzazione su Google Search Console, profilo Google Business, collegare i social, altri articoli, richiesta di recensioni reali e inserimento in `proof.ts`.
