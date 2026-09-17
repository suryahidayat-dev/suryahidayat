import { readSession } from "$lib/server/auth";
import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
  try {
    event.locals.user = await readSession(event.cookies);
  } catch {
    event.locals.user = null;
  }
  return resolve(event);
};
