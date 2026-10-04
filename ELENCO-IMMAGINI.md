# Elenco completo di foto, copertine e video da creare

Legenda **Tipo**: 🟢 AI va bene (immagine illustrativa) · 🟡 AI con Rita (usa le sue foto come riferimento, vedi `PROMPT-IMMAGINI.md`) · 🔴 deve essere reale (foto/video veri o con autorizzazione) · 🎬 video vero.
Ogni riga: **id** da scrivere in `src/lib/media.ts`, file consigliato in `public/media/`, rapporto e pixel. `[STYLE]` e `[REFERENCE]` sono i blocchi di `PROMPT-IMMAGINI.md`.
Pixel di riferimento: 4:5 = 1600×2000 · 4:3 = 1600×1200 · 3:4 = 1500×2000 · 16:9 = 1920×1080 · 16:10 = 1920×1200 · 16:11 = 1920×1320 · 2:1 = 2000×1000 · 16:7 = 2240×980 · 1:1 = 1200×1200 · 9:16 = 1080×1920.

## HOME
| id | File | Rapporto | Tipo | Cosa deve mostrare |
|---|---|---|---|---|
| `hero` | `rita-ritratto-camice.webp` ✅ già inserita | 4:5 | 🔴 reale | Ritratto di Rita in camice |
| `path-agenda` | `path-agenda.webp` | 16:11 | 🟡 | Rita alla scrivania con laptop, studio luminoso (prompt n.1) |
| `path-rd` | `path-rd.webp` | 16:11 | 🟢 | Mani che massaggiano una schiena, nessun volto (n.2) |
| `riconoscimento` | `rita-preoccupata.jpg` ✅ già inserita | 4:3 | 🔴 reale | Professionista pensierosa (verifica i diritti) |
| `rita-studio` | `rita-lettino.jpg` ✅ già inserita | 4:5 | 🔴 reale | Rita seduta sul lettino |
| `card-guida` | `card-guida.webp` | 4:3 | 🟢 | Booklet rosa chiaro su superficie chiara con tè e penna |
| `card-call` | `card-call.webp` | 4:3 | 🟡 | Rita sorride alla videochiamata (n.4) |
| `card-wm` | `card-wm.webp` | 4:3 | 🟡 | Rita in piedi con tablet (n.5) |
| `card-rd` | `card-rd.webp` | 4:3 | 🟢 | Lettino con asciugamani, olio e una candela, nessuna persona (n.6) |
| `guida-mockup` | `guida-mockup.webp` | 3:4 | 🟢 | Booklet con copertina rosa vuota (n.3); il titolo si aggiunge in Canva |
| `blog-…` (3 in evidenza) | vedi sezione Blog | 4:3 | 🟢 | |

## PERCORSI (hub)
| id | File | Rapporto | Tipo | Cosa deve mostrare |
|---|---|---|---|---|
| `percorsi-agenda` | `percorsi-agenda.webp` | 4:3 | 🟡 | Rita in conversazione con un'altra donna di spalle |
| `percorsi-wm` | `percorsi-wm.webp` | 4:3 | 🟡 | Rita con tablet in studio |
| `percorsi-rd` | `percorsi-rd.webp` | 4:3 | 🟢 | Mani e olio, luce calda |

## METODO A.G.E.N.D.A.
| id | File | Rapporto | Tipo | Cosa deve mostrare |
|---|---|---|---|---|
| `agenda-hero` | `agenda-hero.webp` | 4:3 | 🟡 | Rita in affiancamento con un'altra donna di spalle (n.7) |
| `agenda-prima` | `agenda-prima.webp` | 4:3 | 🟢 | Scrivania disordinata, post-it, agenda con pagine confuse (nessun testo leggibile) |
| `agenda-dopo` | `agenda-dopo.webp` | 4:3 | 🟢 | Stessa scrivania in ordine, agenda aperta, tè, luce calda |

## WELLNESS MASTERY
| id | File | Rapporto | Tipo | Cosa deve mostrare |
|---|---|---|---|---|
| `wm-hero` | `wm-hero.webp` | 4:5 | 🟡 | Rita in piedi in studio, tablet al petto (n.5) |
| `wm-video` (+poster) | `wm-video.mp4` / `wm-poster.webp` | 16:10 | 🎬 | Rita presenta il percorso (registrato davvero) |
| `wm-fase-1` | `wm-fase-1.webp` | 4:3 | 🟢 | Fondamenta: quaderno, matita, luce mattutina |
| `wm-fase-2` | `wm-fase-2.webp` | 4:3 | 🟢 | Visibilità: smartphone su scrivania, schermo sfocato |
| `wm-fase-3` | `wm-fase-3.webp` | 4:3 | 🟢 | Vendita e sistema: laptop con chat sfocata, tè |

## METODO RITA DOLBAKIAN
| id | File | Rapporto | Tipo | Cosa deve mostrare |
|---|---|---|---|---|
| `rd-hero` | `rd-hero.webp` | 4:5 | 🟡/🔴 | Rita mostra una tecnica su un lettino (meglio foto vera) |
| `rd-livello-1` | `rd-livello-1.webp` | 4:3 | 🟢 | Mani ferme su una spalla, postura corretta, delicate |
| `rd-livello-2` | `rd-livello-2.webp` | 4:3 | 🟢 | Mani in movimento (leggero mosso), sequenza fluida |
| `rd-livello-3` | `rd-livello-3.webp` | 4:3 | 🟢 | Ambiente professionale, lettino pronto, luce elegante |
| `rd-online` (+poster) | `rd-online.mp4` / `rd-online-poster.webp` | 16:9 | 🎬 | Lezione registrata (n.10) |
| `rd-aula` | `rd-aula.webp` | 16:9 | 🔴 | Aula con lettini; se non c'è una foto vera, ambiente vuoto (n.11) |
| `rd-docente` | `rd-docente.webp` | 4:5 | 🔴/🟡 | Rita insegna, mani in primo piano |

## FORMAZIONE CERTIFICATA
| id | File | Rapporto | Tipo | Cosa deve mostrare |
|---|---|---|---|---|
| `cert-hero` | `cert-hero.webp` | 16:10 | 🔴 | Rita in aula con un gruppo piccolo (foto vera) |
| `cert-livello-1` | `cert-livello-1.webp` | 4:3 | 🟢 | Come `rd-livello-1` (può essere la stessa) |
| `cert-livello-2` | `cert-livello-2.webp` | 4:3 | 🟢 | Come `rd-livello-2` |
| `cert-livello-3` | `cert-livello-3.webp` | 4:3 | 🟢 | Come `rd-livello-3` |
| `cert-attestato` | `cert-attestato.webp` | 4:3 | 🔴 | L'attestato **reale** su un tavolo. Non generarlo con l'AI |

## CORSI (copertine catalogo)
| id | File | Rapporto | Tipo |
|---|---|---|---|
| `corso-guida` | `corso-guida.webp` | 4:3 | 🟢 booklet rosa |
| `corso-agenda` | `corso-agenda.webp` | 4:3 | 🟢 agenda ordinata |
| `corso-wm` | `corso-wm.webp` | 4:3 | 🟡 Rita con tablet |
| `corso-rd-online` | `corso-rd-online.webp` | 4:3 | 🟢 laptop su lettino con lezione sfocata |
| `corso-rd-presenza` | `corso-rd-presenza.webp` | 4:3 | 🟢 aula vuota con tre lettini |

## CHI SONO
| id | File | Rapporto | Tipo | Cosa deve mostrare |
|---|---|---|---|---|
| `about-portrait` | `rita-lettino.jpg` ✅ già inserita | 4:5 | 🔴 reale | Ritratto di Rita |
| `about-video` (+poster) | `about-video.mp4` | 16:10 | 🎬 | Video di presentazione (registrato davvero) |
| `about-allieve` | `about-allieve.webp` | 4:5 | 🔴 | Rita con le allieve (foto vera, con consenso) |
| `gallery-1…6` | `gallery-1.webp` … | 4:5 / 1:1 | 🟡/🟢 | Dietro le quinte: oli, asciugamani, finestra, scrivania, porta dello studio (vedi n.12) |
| `author` | `rita-ritratto-camice.webp` ✅ già inserita | 1:1 | 🔴 | Avatar autrice del blog |

## RISULTATI / PROVE SOCIALI
| id / dove | File | Rapporto | Tipo |
|---|---|---|---|
| `risultati-hero` | `risultati-hero.webp` | 16:7 | 🔴 Rita con una allieva (foto vera, autorizzata) |
| Casi studio (`CASES`) | `caso-<nome>.jpg` | 4:3 | 🔴 foto o video delle allieve con autorizzazione scritta |
| Muro video (`TESTIMONIALS`) | `testimonianza-<nome>.mp4` + `.jpg` | 9:16 | 🎬 video verticali reali |

## ALTRE PAGINE
| id | File | Rapporto | Tipo | Cosa deve mostrare |
|---|---|---|---|---|
| `call-hero` | `call-hero.webp` | 4:5 | 🟡 | Rita sorride, in call (n.4) |
| `contatti-hero` | `contatti-hero.webp` | 4:5 | 🔴/🟡 | Ritratto cordiale di Rita |
| `area-privata` | `area-privata.webp` | 2:1 | 🟢 | Studio accogliente con piante, luce di finestra |
| Immagine social (OG) | `public/og-image.jpg` | 1200×630 | ✅ già creata con il logo | Può essere sostituita da Rita + titolo (n.15) |

## BLOG (copertine, 4:3; la stessa è usata ritagliata 2:1 in testata)
| id | File | Tipo | Tema (vedi `PROMPT-IMMAGINI.md` n.13) |
|---|---|---|---|
| `blog-come-trovare-clienti-massaggiatrice` | `blog-come-trovare-clienti-massaggiatrice.webp` | 🟢 | Agenda aperta, matita, tè |
| `blog-agenda-massaggiatrice-mesi-vuoti` | `blog-agenda-massaggiatrice-mesi-vuoti.webp` | 🟢 | Calendario, luce che si sposta |
| `blog-quanto-far-pagare-un-massaggio` | `blog-quanto-far-pagare-un-massaggio.webp` | 🟢 | Calcolatrice, quaderno, candela |
| `blog-fidelizzare-clienti-massaggi` | `blog-fidelizzare-clienti-massaggi.webp` | 🟢 | Biglietto di ringraziamento con fiore |
| `blog-instagram-per-massaggiatrici` | `blog-instagram-per-massaggiatrici.webp` | 🟢 | Telefono su scrivania, schermo sfocato |
| `blog-come-rispondere-quanto-costa` | `blog-come-rispondere-quanto-costa.webp` | 🟢 | Telefono con chat vuota, luce morbida |
| `blog-google-business-profile-massaggiatori` | `blog-google-business-profile-massaggiatori.webp` | 🟢 | Porta di negozio con pianta |
| `blog-come-scegliere-un-corso-di-massaggio` ⏳ | | 🟢 | Asciugamani e quaderno con checklist |
| `blog-corso-massaggio-online-funziona` ⏳ | | 🟢 | Laptop su lettino |
| `blog-imparare-a-massaggiare-da-zero` ⏳ | | 🟢 | Mani sul lettino, posizione base |
⏳ = articolo non ancora pubblicato.

## CONTEGGIO
- Già inserite: 4 foto reali di Rita + logo + favicon + immagine social.
- Da creare: circa 55 immagini (la maggior parte 🟢 still life o mani), più 3 video (presentazione Rita, lezione di prova, video Wellness Mastery) e i contenuti reali delle allieve.
- Priorità: 1) video di presentazione, 2) foto vere in aula e con le allieve, 3) `card-*` e `percorsi-*`, 4) copertine blog, 5) il resto.
