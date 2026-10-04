/**
 * MANIFEST FOTO E VIDEO
 * Per sostituire un'illustrazione con una foto: copia il file in /public/media e scrivi qui il percorso in `src`.
 * Esempio:  hero: { src: "/media/rita-hero.jpg", alt: "Rita Dolbakian nel suo studio" }
 * Per i video: `src` = file mp4 in /public/media, `poster` = immagine di copertina.
 * Rapporti consigliati tra parentesi.
 */
export type MediaItem = { src?: string; poster?: string; alt: string; pos?: string }; // pos = object-position, es. "50% 20%"

export const MEDIA: Record<string, MediaItem> = {
  // HOME
  hero: { src: "/media/rita-ritratto-camice.webp", alt: "Rita Dolbakian, ritratto in camice (4:5, verticale)", pos: "50% 25%" },
  "path-agenda": { alt: "Rita al lavoro in studio (16:11)" },
  "path-rd": { alt: "Mani al lavoro, dettaglio della tecnica (16:11)" },
  "rita-studio": { src: "/media/rita-lettino.jpg", alt: "Rita Dolbakian seduta sul lettino da massaggio (4:5)", pos: "42% 30%" },
  "riconoscimento": { src: "/media/rita-preoccupata.jpg", alt: "Una professionista del benessere pensierosa davanti alla scrivania (4:3)", pos: "50% 30%" },
  "card-guida": { alt: "Copertina guida gratuita (4:3)" },
  "card-call": { alt: "Rita in call di orientamento (4:3)" },
  "card-wm": { alt: "Wellness Mastery (4:3)" },
  "card-rd": { alt: "Metodo Rita Dolbakian (4:3)" },
  "guida-mockup": { alt: "Mockup della guida «Il Sistema Clienti» (3:4)" },
  // PERCORSI
  "agenda-hero": { alt: "Rita in affiancamento (4:3)" },
  "wm-video": { alt: "Rita presenta Wellness Mastery (video 16:10)" },
  "rd-hands": { alt: "Mani al lavoro, dettaglio tecnica (4:5)" },
  "rd-online": { alt: "Anteprima lezione online (video 16:9)" },
  "rd-aula": { alt: "Formazione in presenza, aula (16:9)" },
  // PERCORSI (hub + pagine)
  "percorsi-agenda": { alt: "Card Metodo A.G.E.N.D.A. (4:3)" },
  "percorsi-wm": { alt: "Card Wellness Mastery (4:3)" },
  "percorsi-rd": { alt: "Card Metodo Rita Dolbakian (4:3)" },
  "agenda-prima": { alt: "Agenda confusa, prima (1:1)" },
  "agenda-dopo": { alt: "Agenda ordinata, dopo (1:1)" },
  "wm-hero": { alt: "Rita in studio con tablet, Wellness Mastery (4:5)" },
  "wm-fase-1": { alt: "Fase 1, fondamenta (4:3)" },
  "wm-fase-2": { alt: "Fase 2, visibilità (4:3)" },
  "wm-fase-3": { alt: "Fase 3, vendita e sistema (4:3)" },
  "rd-hero": { alt: "Rita mentre insegna una tecnica (4:5)" },
  "rd-livello-1": { alt: "Livello 1, fondamenta del tocco (4:3)" },
  "rd-livello-2": { alt: "Livello 2, tecnica e precisione (4:3)" },
  "rd-livello-3": { alt: "Livello 3, perfezionamento (4:3)" },
  "rd-docente": { alt: "Rita come insegnante (4:5)" },
  // FORMAZIONE CERTIFICATA
  "cert-hero": { alt: "Rita in aula con un gruppo piccolo (16:10)" },
  "cert-livello-1": { alt: "Livello 1 (4:3)" },
  "cert-livello-2": { alt: "Livello 2 (4:3)" },
  "cert-livello-3": { alt: "Livello 3 (4:3)" },
  "cert-attestato": { alt: "L'attestato reale (4:3)" },
  // CORSI (catalogo)
  "corso-guida": { alt: "Copertina corso: guida gratuita (4:3)" },
  "corso-agenda": { alt: "Copertina corso: A.G.E.N.D.A. (4:3)" },
  "corso-wm": { alt: "Copertina corso: Wellness Mastery (4:3)" },
  "corso-rd-online": { alt: "Copertina corso: Metodo RD online (4:3)" },
  "corso-rd-presenza": { alt: "Copertina corso: Metodo RD in presenza (4:3)" },
  // ALTRE PAGINE
  "call-hero": { alt: "Rita sorride alla videochiamata (4:5)" },
  "contatti-hero": { alt: "Rita, ritratto per la pagina contatti (4:5)" },
  "risultati-hero": { alt: "Rita con una allieva (autorizzata) (16:9)" },
  "area-privata": { alt: "Studio accogliente, area privata (16:9)" },
  // CHI SONO
  "about-portrait": { src: "/media/rita-lettino.jpg", alt: "Rita Dolbakian seduta sul lettino da massaggio (4:5)", pos: "42% 30%" },
  "about-video": { alt: "Video di presentazione (16:10)" },
  "about-allieve": { alt: "Rita con le allieve (4:5)" },
  "gallery-1": { alt: "Dietro le quinte 1 (4:5)" },
  "gallery-2": { alt: "Dietro le quinte 2 (1:1)" },
  "gallery-3": { alt: "Dietro le quinte 3 (4:5)" },
  "gallery-4": { alt: "Dietro le quinte 4 (1:1)" },
  "gallery-5": { alt: "Dietro le quinte 5 (4:5)" },
  "gallery-6": { alt: "Dietro le quinte 6 (1:1)" },
  // BLOG: copertine degli articoli (4:3). Per la testata dell'articolo si usa la stessa immagine (16:9 ritagliata).
  "blog-come-trovare-clienti-massaggiatrice": { alt: "Copertina articolo: come trovare clienti massaggiatrice (4:3)" },
  "blog-agenda-massaggiatrice-mesi-vuoti": { alt: "Copertina articolo: agenda massaggiatrice mesi vuoti (4:3)" },
  "blog-quanto-far-pagare-un-massaggio": { alt: "Copertina articolo: quanto far pagare un massaggio (4:3)" },
  "blog-fidelizzare-clienti-massaggi": { alt: "Copertina articolo: fidelizzare clienti massaggi (4:3)" },
  "blog-instagram-per-massaggiatrici": { alt: "Copertina articolo: instagram per massaggiatrici (4:3)" },
  "blog-come-rispondere-quanto-costa": { alt: "Copertina articolo: come rispondere quanto costa (4:3)" },
  "blog-google-business-profile-massaggiatori": { alt: "Copertina articolo: google business profile massaggiatori (4:3)" },
  "blog-come-scegliere-un-corso-di-massaggio": { alt: "Copertina articolo: come scegliere un corso di massaggio (4:3)" },
  "blog-corso-massaggio-online-funziona": { alt: "Copertina articolo: corso massaggio online funziona (4:3)" },
  "blog-imparare-a-massaggiare-da-zero": { alt: "Copertina articolo: imparare a massaggiare da zero (4:3)" },
  author: { src: "/media/rita-ritratto-camice.webp", alt: "Rita Dolbakian", pos: "50% 22%" },
};
