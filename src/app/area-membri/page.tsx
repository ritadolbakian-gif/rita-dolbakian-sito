import { PageHero, Tbc } from "@/components/Ui";
import { meta } from "@/lib/seo";

export const metadata = { ...meta("Area membri", "Accedi alla piattaforma dei corsi di Rita Dolbakian Academy.", "/area-membri"), robots: { index: false } };

export default function Area() {
  return (
    <PageHero eyebrow="Area membri" title="Bentornata *a casa*." answer={<>Qui accedi ai tuoi corsi. <Tbc>link alla piattaforma corsi</Tbc></>} />
  );
}
