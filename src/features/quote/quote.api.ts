import type { QuoteData } from "./quote.schema";

export async function submitQuote(data: QuoteData) {
  const res = await fetch("/quote", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("No se pudo cotizar");
  return res.json();
}
