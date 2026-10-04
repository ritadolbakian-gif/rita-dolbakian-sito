/** Link di checkout GoHighLevel. Impostali nelle variabili d'ambiente (Vercel) o qui. Vuoto = il pulsante porta ai contatti. */
export const CHECKOUT = {
  stories: process.env.NEXT_PUBLIC_CHECKOUT_STORIES ?? "", // [DA CONFERMARE: URL checkout GHL]
  calcolatore: process.env.NEXT_PUBLIC_CHECKOUT_CALCOLATORE ?? "", // [DA CONFERMARE: URL checkout GHL]
};
