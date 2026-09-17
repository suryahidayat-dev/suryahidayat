import { deleteSession } from "$lib/server/auth";
import { redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";

export const actions = {
  logout: ({ cookies }) => { deleteSession(cookies); redirect(303, "/"); },
} satisfies Actions;
