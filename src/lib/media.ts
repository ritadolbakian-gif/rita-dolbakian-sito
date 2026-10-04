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
  // BLOG (copertine articoli si gestiscono nel file degli articoli)
  "blog-1": { alt: "Copertina articolo 1 (4:3)" },
  "blog-2": { alt: "Copertina articolo 2 (4:3)" },
  "blog-3": { alt: "Copertina articolo 3 (4:3)" },
};
