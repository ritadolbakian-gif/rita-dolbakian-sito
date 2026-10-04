import Link from "next/link";
import Image from "next/image";
import { NAV, SITE } from "@/lib/site";
import { CookiePrefsLink } from "./CookieBanner";

export function Footer() {
  return (
    <footer className="section-dark pt-20 pb-28 sm:pb-10 overflow-hidden">
      <div className="wrap mb-10 md:mb-14"><Image src="/media/logo-light.png" alt="Rita Dolbakian. Il tuo talento. Il tuo metodo. Più clienti." width={1971} height={537} className="w-56 sm:w-72 h-auto" /></div>
      <div className="wrap grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="mt-4 max-w-sm text-ivory/65">Sono Rita: massaggiatrice e formatrice nel benessere da oltre dieci anni. Con calma, con chiarezza.</p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a className="flink" href={SITE.social.instagram} rel="noopener" target="_blank">Instagram</a>
            <a className="flink" href={SITE.social.youtube} rel="noopener" target="_blank">YouTube</a>
            <a className="flink" href={SITE.social.tiktok} rel="noopener" target="_blank">TikTok</a>
            <a className="flink" href={SITE.social.linkedin} rel="noopener" target="_blank">LinkedIn</a>
          </div>
        </div>
        <nav aria-label="Sito" className="flex flex-col gap-2 text-ivory/80">
          <span className="eyebrow mb-2">Esplora</span>
          {NAV.map((n) => <Link key={n.href} href={n.href} className="flink">{n.label}</Link>)}
          <Link href="/guida-gratuita" className="flink">Guida gratuita</Link>
          <Link href="/contatti" className="flink">Contatti</Link>
          <Link href="/area-privata" className="flink">Area Privata</Link>
        </nav>
        <nav aria-label="Legale" className="flex flex-col gap-2 text-ivory/80">
          <span className="eyebrow mb-2">Informazioni</span>
          <Link href="/privacy" className="flink">Privacy</Link>
          <Link href="/cookie" className="flink">Cookie</Link>
          <CookiePrefsLink />
          <Link href="/termini" className="flink">Termini e condizioni</Link>
          <Link href="/rimborsi" className="flink">Rimborsi e garanzia</Link>
        </nav>
      </div>
      <div className="wrap mt-16 border-t border-ivory/15 pt-6 text-xs text-ivory/50 space-y-1">
        <p>© {new Date().getFullYear()} Rita Dolbakian Academy · [DA CONFERMARE: ragione sociale, P.IVA, sede]</p>
        <p>Le testimonianze riflettono esperienze individuali e non costituiscono garanzia di risultato.</p>
      </div>
    </footer>
  );
}
