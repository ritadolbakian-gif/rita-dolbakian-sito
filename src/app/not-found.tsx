import Link from "next/link";
export default function NotFound() {
  return (
    <section className="section-dark min-h-screen grid place-items-center text-center px-6">
      <div><p className="eyebrow">Errore 404</p><h1 className="font-display text-6xl md:text-8xl mt-4">Questa pagina <em className="kw">non c'è</em>.</h1>
        <Link href="/" className="btn btn-primary mt-10">Torna alla home <span className="arr">→</span></Link></div>
    </section>
  );
}
