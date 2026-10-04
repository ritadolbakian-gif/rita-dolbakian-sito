"use client";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Art, pickArt, type ArtVariant } from "./Art";
import { MEDIA } from "@/lib/media";

/**
 * Spazio per foto o video di Rita.
 * Passa `id` (vedi lib/media.ts) oppure `src` diretto. Senza file mostra un'illustrazione nei colori del brand.
 */
export function Slot({ kind = "foto", label, ratio = "4/5", className = "", art, src, poster, id, alt }: { kind?: "foto" | "video"; label: string; ratio?: string; className?: string; art?: ArtVariant; src?: string; poster?: string; id?: string; alt?: string }) {
  const reduce = useReducedMotion();
  const m = id ? MEDIA[id] : undefined;
  const file = src ?? m?.src;
  const cover = poster ?? m?.poster;
  const text = alt ?? m?.alt ?? label;
  const isVideo = kind === "video" && !!file;
  return (
    <motion.div
      className={`slot ${className}`}
      style={{ aspectRatio: ratio }}
      data-slot={kind}
      data-slot-id={id}
      initial={reduce ? false : { clipPath: "inset(0 0 100% 0)" }}
      whileInView={{ clipPath: "inset(0 0 0% 0)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
    >
      {isVideo ? (
        <video src={file} poster={cover} controls playsInline preload="none" className="absolute inset-0 size-full object-cover" aria-label={text} />
      ) : file ? (
        <Image src={file} alt={text} fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" style={{ objectPosition: m?.pos }} />
      ) : (
        <Art variant={art ?? pickArt(label)} />
      )}
      {kind === "video" && !file && (
        <span className="absolute inset-0 grid place-items-center">
          <span className="grid place-items-center size-16 rounded-full bg-ivory/90 text-ink shadow-xl transition-transform duration-500 hover:scale-110">
            <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden><path d="M8 5l12 7-12 7z" fill="currentColor" /></svg>
          </span>
        </span>
      )}
      {!file && <span className="slot-tag" data-slot-label>{kind} · {label}</span>}
    </motion.div>
  );
}
