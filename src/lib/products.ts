/** Link di checkout GoHighLevel. Impostali nelle variabili d'ambiente (Vercel) o qui. Vuoto = il pulsante porta ai contatti. */
export const CHECKOUT = {
  stories: process.env.NEXT_PUBLIC_CHECKOUT_STORIES ?? "https://corsi.ritadolbakian.it/courses/offers/15cbcf57-aef3-4bc5-a714-369cff55d26a",
  calcolatore: process.env.NEXT_PUBLIC_CHECKOUT_CALCOLATORE ?? "", // [DA CONFERMARE: URL checkout GHL]
};
