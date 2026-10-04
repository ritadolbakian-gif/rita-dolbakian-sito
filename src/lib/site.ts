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

export const BLOG_PREVIEW = [
  { slug: "come-riempire-lagenda-di-una-massaggiatrice", cat: "Clienti e agenda", title: "Come riempire l'agenda di una massaggiatrice senza dipendere dal passaparola" },
  { slug: "mesi-pieni-e-mesi-vuoti", cat: "Clienti e agenda", title: "Perché ci sono mesi pieni e mesi vuoti (e come smettere di subirli)" },
  { slug: "quanto-far-pagare-un-massaggio", cat: "Posizionamento e prezzi", title: "Quanto far pagare un massaggio: come stabilire il prezzo giusto" },
];
