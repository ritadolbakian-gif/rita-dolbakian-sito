import Link from "next/link";
import { NAV, SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="section-dark pt-20 pb-28 sm:pb-10">
      <div className="wrap grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-4xl">Rita <em className="kw">Dolbakian</em></p>
          <p className="mt-4 max-w-sm text-ivory/65">Massaggiatrice e formatrice nel benessere da oltre dieci anni. Con calma, con chiarezza.</p>
          <div className="mt-6 flex gap-5 text-sm">
            <a className="ulink" href={SITE.social.instagram} rel="noopener" target="_blank">Instagram</a>
            <a className="ulink" href={SITE.social.youtube} rel="noopener" target="_blank">YouTube</a>
            <a className="ulink" href={SITE.social.tiktok} rel="noopener" target="_blank">TikTok</a>
            <a className="ulink" href={SITE.social.linkedin} rel="noopener" target="_blank">LinkedIn</a>
          </div>
        </div>
        <nav aria-label="Sito" className="flex flex-col gap-2 text-ivory/80">
          <span className="eyebrow mb-2">Esplora</span>
          {NAV.map((n) => <Link key={n.href} href={n.href} className="ulink w-fit">{n.label}</Link>)}
          <Link href="/guida-gratuita" className="ulink w-fit">Guida gratuita</Link>
          <Link href="/contatti" className="ulink w-fit">Contatti</Link>
        </nav>
        <nav aria-label="Legale" className="flex flex-col gap-2 text-ivory/80">
          <span className="eyebrow mb-2">Informazioni</span>
          <Link href="/privacy" className="ulink w-fit">Privacy</Link>
          <Link href="/cookie" className="ulink w-fit">Cookie</Link>
          <Link href="/termini" className="ulink w-fit">Termini e condizioni</Link>
          <Link href="/rimborsi" className="ulink w-fit">Rimborsi e garanzia</Link>
        </nav>
      </div>
      <div className="wrap mt-16 border-t border-ivory/15 pt-6 text-xs text-ivory/50 space-y-1">
        <p>© {new Date().getFullYear()} Rita Dolbakian Academy · [DA CONFERMARE: ragione sociale, P.IVA, sede]</p>
        <p>Le testimonianze riflettono esperienze individuali e non costituiscono garanzia di risultato.</p>
      </div>
    </footer>
  );
}
