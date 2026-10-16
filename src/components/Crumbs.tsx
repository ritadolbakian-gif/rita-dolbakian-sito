import { JsonLd } from "@/components/Ui";
import { crumbsLd } from "@/lib/seo";

/** Breadcrumb solo come dato strutturato (server-side, leggibile anche dai crawler AI). */
export function Crumbs({ trail }: { trail: [string, string][] }) {
  return <JsonLd data={crumbsLd(trail)} />;
}
