import { PageHero, CtaBand } from "@/components/Ui";
import { CatalogoCorsi } from "@/components/CatalogoCorsi";
import { meta } from "@/lib/seo";

export const metadata = meta("Corsi, guide e percorsi di Rita Dolbakian", "Il catalogo di Rita Dolbakian: guida gratuita, Metodo A.G.E.N.D.A., Wellness Mastery e Metodo Rita Dolbakian per imparare a massaggiare.", "/corsi");

export default function Corsi() {
  return (
    <>
      <PageHero eyebrow="Corsi" title="Tutto in un *posto* solo." answer="Il catalogo di Rita Dolbakian riunisce la guida gratuita, il Metodo A.G.E.N.D.A., Wellness Mastery e il Metodo Rita Dolbakian. Filtra per area, business o tecnica, e per formato, video, in presenza, guida o affiancamento." />
      <section className="section"><div className="wrap"><CatalogoCorsi /></div></section>
      <CtaBand title="Non sai quale *scegliere*?" primary={{ href: "/percorsi", label: "Fai il test di orientamento" }} secondary={{ href: "/call-orientamento", label: "Prenota la call" }} />
    </>
  );
}
