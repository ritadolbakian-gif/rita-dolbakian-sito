"use client";
import { usePathname } from "next/navigation";
import { CONTACT } from "@/lib/site";

export function WhatsApp() {
  const path = usePathname();
  if (!CONTACT.whatsapp || path.startsWith("/area-privata")) return null;
  const href = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(CONTACT.whatsappMessage)}`;
  return (
    <a href={href} target="_blank" rel="noopener" aria-label="Scrivi a Rita su WhatsApp" className="fixed z-40 right-4 bottom-20 sm:bottom-6 grid place-items-center size-14 rounded-full bg-[#25D366] text-white shadow-xl transition-transform duration-300 hover:scale-110">
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M21 12a8.5 8.5 0 0 1-12.6 7.4L3 21l1.7-5.1A8.5 8.5 0 1 1 21 12z" /><path d="M9 9.5c.3 2.2 2.300 4.200 5.500 5l1.200-1.300-1.800-.9-.9.600c-.8-.4-1.500-1.100-1.900-1.900l.6-.9-.9-1.800z" fill="currentColor" stroke="none" /></svg>
    </a>
  );
}
