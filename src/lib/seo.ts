import type { Metadata } from "next";

export function meta(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, type: "website", locale: "it_IT", images: ["/og-image.jpg"] },
    twitter: { card: "summary_large_image", title, description, images: ["/og-image.jpg"] },
  };
}
