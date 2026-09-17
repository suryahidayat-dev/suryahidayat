<script lang="ts">
  import type { ActionData, PageData } from "./$types";
  let { data, form }: { data: PageData; form: ActionData } = $props();
</script>

<svelte:head><title>Sign in | Surya Hidayat</title><meta name="robots" content="noindex" /></svelte:head>
<main class="grid min-h-screen place-items-center bg-slate-950 px-6 text-slate-100">
  <form method="POST" class="w-full max-w-sm rounded-3xl border border-white/10 bg-slate-900 p-8 shadow-2xl">
    <h1 class="text-3xl font-bold">Private area</h1><p class="mt-3 text-slate-400">Enter the access password to continue.</p>
    <input type="hidden" name="returnTo" value={data.returnTo} />
    <label class="mt-8 block text-sm font-medium" for="password">Password</label>
    <input class="mt-2 w-full rounded-xl border border-white/15 bg-slate-950 px-4 py-3 outline-none focus:border-cyan-400" id="password" name="password" type="password" autocomplete="current-password" required aria-invalid={form?.incorrect ? "true" : undefined} />
    {#if form?.incorrect}<p class="mt-3 text-sm text-red-300">The password is incorrect.</p>{/if}
    <button class="mt-6 w-full rounded-xl bg-cyan-500 px-4 py-3 font-semibold text-slate-950 hover:bg-cyan-400" type="submit">Sign in</button>
  </form>
</main>
