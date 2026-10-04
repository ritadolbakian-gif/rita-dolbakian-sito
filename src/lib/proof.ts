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
export const RATING: { value: number; count: number; source: string } | null = { value: 4.3, count: 7, source: "Trustpilot" }; // letto sul profilo Trustpilot il 4 ottobre 2026: aggiornalo quando cambia

/**
 * NUMERI IN EVIDENZA (striscia in alto, contatori).
 * `confirmed: true` = dato verificato, sempre mostrato.
 * `confirmed: false` = dato di prova: lo vedi in anteprima/sviluppo ma NON viene pubblicato online
 * finché non lo confermi (per non diffondere numeri non veri). Per vederlo anche su un'anteprima Vercel
 * imposta NEXT_PUBLIC_SHOW_DRAFT=1.
 */
export type Stat = { id: string; value: number; prefix?: string; suffix?: string; label: string; confirmed: boolean };
export const STATS: Stat[] = [
  { id: "anni", value: 10, suffix: "+", label: "anni di esperienza nel benessere", confirmed: true },
  { id: "studenti", value: 100, prefix: "+", label: "studenti formati", confirmed: false }, // [DA CONFERMARE: numero reale]
  { id: "moduli", value: 10, label: "moduli in Wellness Mastery", confirmed: true },
  { id: "bonus", value: 6, label: "bonus inclusi nel percorso", confirmed: true },
];
export const showDraftStats = () => process.env.NEXT_PUBLIC_SHOW_DRAFT === "1" || process.env.NODE_ENV !== "production";
export const visibleStats = () => STATS.filter((s) => s.confirmed || showDraftStats());

/**
 * RECENSIONI ESTERNE: Google Business Profile e Trustpilot.
 * Compila gli indirizzi per attivare pulsanti e badge. Il widget Trustpilot si carica solo dopo il consenso ai cookie.
 */
export const REVIEW_SOURCES = {
  google: {
    profileUrl: "https://www.google.com/search?q=Rita+Dolbakian+recensioni",   // meglio il link diretto della scheda Google (g.page/r/…)
    reviewUrl: "",    // link "Scrivi una recensione" della scheda (https://g.page/r/XXXX/review)
  },
  trustpilot: {
    profileUrl: "https://it.trustpilot.com/review/rd-academy.it",
    reviewUrl: "https://it.trustpilot.com/evaluate/rd-academy.it",
    businessUnitId: "", // dal pannello Trustpilot > Integrazioni > TrustBox
    templateId: "5419b6a8b0d04a076446a9ad", // modello "Micro Review Count" (cambia se usi un altro)
  },
};

/** Recensioni reali da mostrare (copiate da Google/Trustpilot, con consenso/pubbliche). */
export type Review = { author: string; rating: 1 | 2 | 3 | 4 | 5; text: string; source: "google" | "trustpilot"; date?: string; url?: string };
export const REVIEWS: Review[] = [];

/**
 * RISULTATO PERSONALE DI RITA (pagina Chi sono).
 * Mostrato online solo con `confirmed: true`. In sviluppo/anteprima si vede con la scritta «da confermare».
 * Prima di confermarlo: tieni a disposizione le fatture/prove del dato (obbligo di veridicità della pubblicità).
 */
export const PERSONAL_RESULT = {
  confirmed: false, // [DA CONFERMARE: importo, periodo e documentazione]
  amount: "15.000 €",
  label: "in un solo mese, e poi in modo costante ogni mese",
};
export const showPersonalResult = () => PERSONAL_RESULT.confirmed || showDraftStats();
