import { createSession, validPassword } from "$lib/server/auth";
import { fail, redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";

function destination(value: string | null): string { return value?.startsWith("/") && !value.startsWith("//") ? value : "/dashboard"; }

export const load: PageServerLoad = ({ locals, url }) => {
  if (locals.user) redirect(303, destination(url.searchParams.get("returnTo")));
  return { returnTo: destination(url.searchParams.get("returnTo")) };
};

export const actions = {
  default: async ({ request, cookies }) => {
    const data = await request.formData();
    const password = data.get("password");
    const returnTo = destination(typeof data.get("returnTo") === "string" ? String(data.get("returnTo")) : null);
    if (typeof password !== "string" || !validPassword(password)) return fail(400, { incorrect: true, returnTo });
    await createSession(cookies);
    redirect(303, returnTo);
  },
} satisfies Actions;
