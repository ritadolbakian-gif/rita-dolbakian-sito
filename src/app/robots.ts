import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

// Motori di ricerca e assistenti AI: accesso pieno ai contenuti pubblici.
const AI = ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-SearchBot", "Claude-User", "anthropic-ai", "PerplexityBot", "Perplexity-User", "Google-Extended", "Applebot", "Applebot-Extended", "Bingbot", "YouBot", "cohere-ai", "DuckAssistBot", "Meta-ExternalAgent", "FacebookExternalHit", "LinkedInBot", "Amazonbot", "CCBot", "Diffbot", "MistralAI-User"];
const PRIVATE = ["/api/", "/area-privata", "/richiesta-ricevuta", "/questionario"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: PRIVATE }, ...AI.map((userAgent) => ({ userAgent, allow: "/", disallow: PRIVATE }))],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
