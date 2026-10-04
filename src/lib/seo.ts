import type { Metadata } from "next";

export function meta(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, type: "website", locale: "it_IT" },
    twitter: { card: "summary_large_image", title, description },
  };
}
