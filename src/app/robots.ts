import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  const ai = ["GPTBot", "ClaudeBot", "PerplexityBot", "Google-Extended", "Applebot-Extended", "CCBot"];
  return {
    rules: [{ userAgent: "*", allow: "/" }, ...ai.map((userAgent) => ({ userAgent, allow: "/" }))],
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
