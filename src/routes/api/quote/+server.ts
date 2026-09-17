import { env } from "$env/dynamic/private";
import { json, type RequestHandler } from "@sveltejs/kit";

export const prerender = false;

export const GET: RequestHandler = async ({ fetch }) => {
  if (!env.NINJAS_API_KEY) return json({ message: "Quote service is not configured" }, { status: 503, headers: { "Cache-Control": "no-store" } });

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5_000);
  try {
    const response = await fetch("https://api.api-ninjas.com/v1/quotes", { headers: { "X-Api-Key": env.NINJAS_API_KEY }, signal: controller.signal });
    if (!response.ok) return json({ message: "Quote service is unavailable" }, { status: 502, headers: { "Cache-Control": "no-store" } });
    return new Response(response.body, { headers: { "Content-Type": "application/json", "Cache-Control": "public, max-age=300, s-maxage=3600", "Access-Control-Allow-Origin": "*" } });
  } catch {
    return json({ message: "Quote service is unavailable" }, { status: 504, headers: { "Cache-Control": "no-store" } });
  } finally { clearTimeout(timeout); }
};
