<script lang="ts">
  import Pill from "$lib/shared/components/Pill.svelte";
  import { skillGroups } from "../data/portfolio";
</script>

<section id="about" class="mb-20">
  <div class="rounded-[2rem] border border-slate-200 bg-white/90 p-8 shadow-[0_40px_120px_-40px_rgba(15,23,42,0.25)] backdrop-blur-xl transition-colors dark:border-white/10 dark:bg-slate-900/90 dark:shadow-[0_40px_120px_-40px_rgba(15,23,42,0.8)]">
    <div class="mb-8 max-w-3xl">
      <h2 class="text-3xl font-bold text-slate-950 dark:text-white sm:text-4xl">About Me</h2>
      <p class="mt-4 text-slate-600 dark:text-slate-300">I love bridging the gap between design and engineering. When I'm not coding, you can find me travelling.</p>
    </div>
    <div class="grid gap-6 md:grid-cols-3">
      {#each skillGroups as group (group.title)}
        <article class="rounded-3xl border border-slate-200 bg-slate-50/80 p-6 dark:border-white/10 dark:bg-white/5">
          <h3 class="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">{group.title}</h3>
          <div class="mt-5 flex flex-wrap gap-3">
            {#each group.skills as skill (skill)}<Pill class={group.color}>{skill}</Pill>{/each}
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>
