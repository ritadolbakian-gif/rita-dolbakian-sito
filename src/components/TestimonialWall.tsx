import Image from "next/image";

/** Screenshot reali di messaggi ricevuti dalle allieve. Immagini ottimizzate in /media/testimonials. */
type Shot = { src: string; w: number; h: number; alt: string };
export const SHOTS: Shot[] = [
  { src: "/media/testimonials/t01.webp", w: 760, h: 408, alt: "Allieva: pacchetto da 600 € chiuso, cliente arrivata da TikTok" },
  { src: "/media/testimonials/t03.webp", w: 760, h: 313, alt: "Allieva: 5.600 € incassati e slot esauriti nel mese" },
  { src: "/media/testimonials/t02.webp", w: 760, h: 436, alt: "Allieva: pacchetto da 1500 € venduto da Instagram" },
  { src: "/media/testimonials/t07.webp", w: 760, h: 298, alt: "Allieva: pacchetto da 10 massaggi grazie ai consigli di chiusura" },
  { src: "/media/testimonials/t04.webp", w: 760, h: 283, alt: "Allieva: pacchetto da 900 € arrivato dal profilo" },
  { src: "/media/testimonials/t06.webp", w: 760, h: 433, alt: "Allieva: due pacchetti chiusi da un solo reel" },
  { src: "/media/testimonials/t05.webp", w: 760, h: 388, alt: "Allieva: pacchetto da 800 € dopo le storie del corso" },
  { src: "/media/testimonials/t10.webp", w: 760, h: 401, alt: "Allieva: chiamata dal manager di una cantante famosa" },
  { src: "/media/testimonials/t13.webp", w: 760, h: 327, alt: "Allievo: nuovo cliente acquisito da un reel" },
  { src: "/media/testimonials/t08.webp", w: 760, h: 536, alt: "Allieva: due pacchetti venduti in pre-lancio" },
  { src: "/media/testimonials/t09.webp", w: 760, h: 602, alt: "Allieva: obiettivo di luglio superato" },
  { src: "/media/testimonials/t11.webp", w: 760, h: 437, alt: "Allieva: tantissime richieste da quando pubblica su TikTok" },
  { src: "/media/testimonials/t14.webp", w: 760, h: 390, alt: "Allieva: la piattaforma è un valore enorme" },
  { src: "/media/testimonials/t12.webp", w: 760, h: 545, alt: "Allieva: collaborazione nata con una scuola di ballo" },
  { src: "/media/testimonials/t15.webp", w: 760, h: 331, alt: "Allieva: la call è stata fondamentale" },
  { src: "/media/testimonials/t16.webp", w: 760, h: 712, alt: "Allieva: più pubblico e 77 follower in una notte" },
  { src: "/media/testimonials/t17.webp", w: 760, h: 414, alt: "Allieva: adoro questa community e il percorso di crescita" },
  { src: "/media/testimonials/t18.webp", w: 760, h: 293, alt: "Allieva: lezione pazzesca come sempre" },
];

/** Muro di testimonianze (screenshot). Masonry: 1 colonna su mobile, 2-3 su schermi più grandi. */
export function TestimonialWall({ max, className = "" }: { max?: number; className?: string }) {
  const list = max ? SHOTS.slice(0, max) : SHOTS;
  return (
    <div className={className}>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-5 [column-fill:_balance]">
        {list.map((s, i) => (
          <figure key={s.src} className="mb-4 md:mb-5 break-inside-avoid overflow-hidden rounded-2xl border border-[var(--line)] bg-white shadow-[0_18px_40px_-30px_rgba(11,10,9,.4)]">
            <Image
              src={s.src}
              alt={s.alt}
              width={s.w}
              height={s.h}
              sizes="(min-width:1024px) 360px, (min-width:640px) 45vw, 92vw"
              loading={i < 3 ? "eager" : "lazy"}
              className="w-full h-auto"
            />
          </figure>
        ))}
      </div>
      <p className="mt-6 text-xs text-stone max-w-2xl">Messaggi reali ricevuti dalle allieve e dagli allievi. I risultati raccontati sono esperienze individuali e non costituiscono una garanzia di guadagno: dipendono dalla situazione di partenza e dall'impegno di ciascuno.</p>
    </div>
  );
}
