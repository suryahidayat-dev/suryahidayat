<script lang="ts">
  import { page } from "$app/state";
</script>

<svelte:head><title>{page.status} | Surya Hidayat</title></svelte:head>
<main class="grid min-h-screen place-items-center bg-slate-950 px-6 text-center text-white">
  <div><p class="text-sm uppercase tracking-[0.3em] text-cyan-300">Error {page.status}</p><h1 class="mt-4 text-4xl font-bold">{page.error?.message ?? "Something went wrong"}</h1><a class="mt-8 inline-block text-cyan-300 underline" href="/">Return home</a></div>
</main>
