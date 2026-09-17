import { dev } from "$app/environment";
import { env } from "$env/dynamic/private";
import type { Cookies } from "@sveltejs/kit";

const COOKIE_NAME = "portfolio_session";
const SESSION_SECONDS = 60 * 60 * 8;
const encoder = new TextEncoder();

function encode(value: Uint8Array | string): string {
  const bytes = typeof value === "string" ? encoder.encode(value) : value;
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replaceAll("+", "-").replaceAll("/", "_").replaceAll("=", "");
}

async function signature(payload: string): Promise<string> {
  if (!env.AUTH_SECRET || env.AUTH_SECRET.length < 32) throw new Error("AUTH_SECRET must contain at least 32 characters");
  const key = await crypto.subtle.importKey("raw", encoder.encode(env.AUTH_SECRET), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  return encode(new Uint8Array(await crypto.subtle.sign("HMAC", key, encoder.encode(payload))));
}

function equal(left: string, right: string): boolean {
  const length = Math.max(left.length, right.length);
  let difference = left.length ^ right.length;
  for (let index = 0; index < length; index += 1) difference |= (left.charCodeAt(index) || 0) ^ (right.charCodeAt(index) || 0);
  return difference === 0;
}

export function validPassword(candidate: string): boolean {
  const password = env.PRIVATE_ACCESS_PASSWORD;
  return typeof password === "string" && password.length > 0 && equal(candidate, password);
}

export async function createSession(cookies: Cookies): Promise<void> {
  const payload = encode(JSON.stringify({ id: "owner", expiresAt: Date.now() + SESSION_SECONDS * 1_000 }));
  cookies.set(COOKIE_NAME, `${payload}.${await signature(payload)}`, {
    path: "/",
    httpOnly: true,
    sameSite: "lax",
    secure: !dev,
    maxAge: SESSION_SECONDS,
  });
}

export function deleteSession(cookies: Cookies): void {
  cookies.delete(COOKIE_NAME, { path: "/" });
}

export async function readSession(cookies: Cookies): Promise<{ id: string } | null> {
  const token = cookies.get(COOKIE_NAME);
  if (!token) return null;
  const separator = token.lastIndexOf(".");
  if (separator < 1) return null;
  const payload = token.slice(0, separator);
  if (!equal(token.slice(separator + 1), await signature(payload))) return null;

  try {
    const json = atob(payload.replaceAll("-", "+").replaceAll("_", "/"));
    const session = JSON.parse(json) as { id?: unknown; expiresAt?: unknown };
    if (session.id !== "owner" || typeof session.expiresAt !== "number" || session.expiresAt <= Date.now()) return null;
    return { id: session.id };
  } catch { return null; }
}
