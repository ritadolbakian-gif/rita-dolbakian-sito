import { PageHero, Tbc } from "./Ui";

export function LegalPage({ eyebrow, title, intro, sections }: { eyebrow: string; title: string; intro: string; sections: { h: string; p: string }[] }) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} answer={intro} />
      <section className="section"><div className="wrap max-w-3xl prose-rd">
        <p><Tbc>testo definitivo da far validare a un consulente legale</Tbc></p>
        {sections.map((s) => <section key={s.h}><h2>{s.h}</h2><p>{s.p}</p></section>)}
        <p className="text-sm text-stone">Ultimo aggiornamento: 4 ottobre 2026.</p>
      </div></section>
    </>
  );
}
