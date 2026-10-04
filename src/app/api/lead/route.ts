const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let b: Record<string, unknown>;
  try { b = await req.json(); } catch { return Response.json({ error: "bad_request" }, { status: 400 }); }
  if (b.website) return Response.json({ ok: true }); // honeypot
  const str = (k: string, max = 500) => (typeof b[k] === "string" ? (b[k] as string).trim().slice(0, max) : "");
  const lead = { tipo: str("tipo", 30), nome: str("nome", 80), cognome: str("cognome", 80), email: str("email", 200), telefono: str("telefono", 40), messaggio: str("messaggio", 2000), marketing: b.marketing === true };
  if (!lead.nome || !emailRe.test(lead.email) || b.privacy !== true) return Response.json({ error: "invalid" }, { status: 422 });

  const url = process.env.GHL_WEBHOOK_URL; // webhook GoHighLevel / LeadConnector
  if (!url) return Response.json({ error: "not_configured" }, { status: 503 });
  const r = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...lead, source: "sito-rita-dolbakian", consent_at: new Date().toISOString() }) });
  return r.ok ? Response.json({ ok: true }) : Response.json({ error: "upstream" }, { status: 502 });
}
