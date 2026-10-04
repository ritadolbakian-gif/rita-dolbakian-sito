/**
 * PROVE SOCIALI: inserire QUI solo contenuti reali e autorizzati per iscritto.
 * Finché gli array sono vuoti il sito mostra spazi segnaposto, mai dati inventati.
 */
export type Testimonial = {
  name: string;           // Nome e cognome (con autorizzazione)
  role: string;           // es. "Massaggiatrice, Milano"
  quote: string;          // Citazione autorizzata
  program: "A.G.E.N.D.A." | "Wellness Mastery" | "Metodo Rita Dolbakian";
  photo?: string;         // /media/... (1:1 o 4:5)
  video?: string;         // /media/....mp4
  poster?: string;        // copertina del video
};

export type CaseStudy = {
  program?: "A.G.E.N.D.A." | "Wellness Mastery" | "Metodo Rita Dolbakian";
  number: string;         // es. "+12"
  label: string;          // es. "clienti in 60 giorni"
  name: string;
  role: string;
  quote: string;
  photo?: string;
  video?: string;
  poster?: string;
};

export const TESTIMONIALS: Testimonial[] = [];
export const CASES: CaseStudy[] = [];

/** Testate o collaborazioni REALI. */
export const PRESS: { name: string; href?: string }[] = [];

/** Compila SOLO se hai recensioni reali e verificabili (abilita lo schema AggregateRating). */
export const RATING: { value: number; count: number; source: string } | null = null;
