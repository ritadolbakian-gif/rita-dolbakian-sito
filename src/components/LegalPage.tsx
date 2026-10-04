import type { ReactNode } from "react";
import { PageHero, Tbc } from "./Ui";
import { COMPANY } from "@/lib/site";

export const LEGAL_UPDATED = "4 ottobre 2026";
export const LEGAL_VERSION = "1.0";

export const Holder = () => (
  <>{COMPANY.name}, P.IVA {COMPANY.vat}, N. REA {COMPANY.rea}, sede legale in {COMPANY.street}, {COMPANY.zip} {COMPANY.city} ({COMPANY.province}), PEC <a href={`mailto:${COMPANY.pec}`}>{COMPANY.pec}</a></>
);

export function LegalPage({ eyebrow, title, intro, toc, children }: { eyebrow: string; title: string; intro: ReactNode; toc: { id: string; t: string }[]; children: ReactNode }) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} answer={intro} />
      <section className="section">
        <div className="wrap grid gap-12 lg:grid-cols-[15rem_minmax(0,46rem)] lg:justify-center lg:gap-16">
          <nav aria-label="Indice del documento" className="hidden lg:block">
            <div className="sticky top-28">
              <p className="eyebrow mb-4">Indice</p>
              <ol className="space-y-1 border-l border-[var(--line)] text-sm">
                {toc.map((i) => <li key={i.id}><a href={`#${i.id}`} className="block -ml-px border-l-2 border-transparent py-1.5 pl-4 pr-2 text-stone transition-colors hover:border-rose hover:text-ink">{i.t}</a></li>)}
              </ol>
            </div>
          </nav>
          <div>
            <details className="lg:hidden mb-8 rounded-2xl border border-[var(--line)] px-5 py-1">
              <summary className="min-h-12 flex items-center justify-between cursor-pointer list-none eyebrow">Indice <span className="text-rose text-xl">+</span></summary>
              <ol className="pb-4 space-y-2 text-sm">{toc.map((i) => <li key={i.id}><a className="block py-1" href={`#${i.id}`}>{i.t}</a></li>)}</ol>
            </details>
            <div className="prose-rd legal">{children}</div>
            <p className="mt-12 border-t border-[var(--line)] pt-6 text-sm text-stone">Versione {LEGAL_VERSION} · Ultimo aggiornamento: {LEGAL_UPDATED}. Documento redatto da <Holder />.</p>
            <p className="mt-3 text-xs text-stone"><Tbc>revisione finale del testo da parte di un consulente legale prima della pubblicazione</Tbc></p>
          </div>
        </div>
      </section>
    </>
  );
}

/** Riquadro "in breve" per riassumere un documento lungo. */
export const InBreve = ({ children }: { children: ReactNode }) => (
  <div className="not-prose my-8 rounded-3xl border border-rose/30 bg-blush/30 p-6"><p className="eyebrow !text-rose mb-2">In breve</p><div className="text-[0.97rem] space-y-2">{children}</div></div>
);
