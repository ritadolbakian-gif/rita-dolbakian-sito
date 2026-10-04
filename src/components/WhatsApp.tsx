"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CONTACT } from "@/lib/site";

/** Pulsante fisso a destra. Con il numero in lib/site.ts apre WhatsApp; senza, porta alla pagina Contatti. */
export function WhatsApp() {
  const path = usePathname();
  if (path.startsWith("/area-privata")) return null;
  const hasNumber = !!CONTACT.whatsapp;
  const href = hasNumber ? `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(CONTACT.whatsappMessage)}` : "/contatti";
  const cls = "fixed z-40 right-4 bottom-24 sm:bottom-6 grid place-items-center size-14 rounded-full bg-[#25D366] text-white shadow-xl transition-transform duration-300 hover:scale-110";
  const icon = (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M21 12a8.5 8.5 0 0 1-12.6 7.4L3 21l1.7-5.1A8.5 8.5 0 1 1 21 12z" /><path d="M9 9.5c.3 2.2 2.3 4.2 5.5 5l1.2-1.3-1.8-.9-.9.6c-.8-.4-1.5-1.1-1.9-1.9l.6-.9-.9-1.8z" fill="currentColor" stroke="none" /></svg>
  );
  return hasNumber
    ? <a href={href} target="_blank" rel="noopener" aria-label="Scrivi a Rita su WhatsApp" className={cls}>{icon}</a>
    : <Link href={href} aria-label="Scrivi a Rita" className={cls}>{icon}</Link>;
}
