import Image from "next/image";
import { MEDIA } from "@/lib/media";

/**
 * La guida gratuita mostrata come libro, senza sfondo: copertina piatta + dorso, spessore delle pagine e ombra.
 * Copertina da MEDIA["guida-copertina"].
 */
export function GuideBook({ className = "", priority = false }: { className?: string; priority?: boolean }) {
  const m = MEDIA["guida-copertina"];
  return (
    <div className={`relative ${className}`} style={{ perspective: "1600px" }}>
      <div className="relative" style={{ transform: "rotateY(-14deg) rotateX(2deg)", transformStyle: "preserve-3d" }}>
        {/* spessore delle pagine, a destra */}
        <div aria-hidden className="absolute top-[1.2%] bottom-[1.2%] -right-[3.5%] w-[4%] rounded-r-[3px]" style={{ background: "repeating-linear-gradient(90deg,#f3eee8 0 1px,#e2dbd2 1px 2px)", boxShadow: "inset 2px 0 4px rgba(0,0,0,.12)" }} />
        <div className="relative overflow-hidden rounded-r-[6px] rounded-l-[2px] shadow-[18px_28px_50px_-18px_rgba(11,10,9,.55),4px_6px_14px_-4px_rgba(11,10,9,.35)]" style={{ aspectRatio: "1414 / 2000" }}>
          <Image src={m.src!} alt={m.alt} fill priority={priority} sizes="(min-width:1024px) 420px, 70vw" className="object-cover" />
          {/* dorso: piega e luce */}
          <div aria-hidden className="absolute inset-y-0 left-0 w-[7%]" style={{ background: "linear-gradient(90deg,rgba(0,0,0,.45),rgba(255,255,255,.18) 35%,rgba(0,0,0,.12) 60%,transparent)" }} />
          {/* riflesso leggero sulla copertina */}
          <div aria-hidden className="absolute inset-0" style={{ background: "linear-gradient(115deg,rgba(255,255,255,.14),transparent 40%)" }} />
        </div>
      </div>
    </div>
  );
}
