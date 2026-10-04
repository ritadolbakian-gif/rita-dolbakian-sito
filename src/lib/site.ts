export const SITE = {
  name: "Rita Dolbakian",
  brand: "RD Academy",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://rd-academy.it", // [DA CONFERMARE: dominio definitivo]
  bookingUrl: "https://api.leadconnectorhq.com/widget/booking/5Qga7LPDjrJDvjLuTTIS",
  social: {
    instagram: "https://www.instagram.com/rita_dolbakian",
    youtube: "https://www.youtube.com/@ritadolbakian",
    tiktok: "https://www.tiktok.com/@rita.dolbakian",
    linkedin: "https://www.linkedin.com", // [DA CONFERMARE: URL profilo LinkedIn]
  },
};

export const NAV = [
  { href: "/chi-sono", label: "Chi sono" },
  { href: "/percorsi", label: "Percorsi" },
  { href: "/corsi", label: "Corsi" },
  { href: "/formazione-certificata", label: "Formazione certificata" },
  { href: "/risultati", label: "Risultati" },
  { href: "/blog", label: "Blog" },
];


/** Contatti: lasciare vuoto finché non confermati. I componenti si attivano da soli quando compilati. */
export const CONTACT = {
  email: "", // [DA CONFERMARE]
  whatsapp: "", // solo cifre con prefisso, es. 393331234567 [DA CONFERMARE]
  whatsappMessage: "Ciao Rita, vorrei saperne di più sui tuoi percorsi.",
};

/** Dati societari (da visura). Il codice univoco SDI non si mostra sul sito. */
export const COMPANY = {
  name: "RD SRL",
  vat: "02097250472",
  rea: "619157",
  sdi: "M5UXCR1",
  pec: "rd_srl@namirialpec.it",
  street: "Viale Garibaldi 42",
  zip: "51017",
  city: "Pescia",
  province: "PT",
  line: "RD SRL · P.IVA 02097250472 · Sede legale: Viale Garibaldi 42, 51017 Pescia (PT) · N. REA 619157 · PEC rd_srl@namirialpec.it",
};
