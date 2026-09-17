<script lang="ts">
  import ContactLinks from "./ContactLinks.svelte";
  const year = new Date().getFullYear();
</script>

<footer class="rounded-[2rem] border border-slate-200 bg-white/90 p-6 shadow-[0_40px_120px_-40px_rgba(15,23,42,0.25)] backdrop-blur-xl transition-colors dark:border-white/10 dark:bg-slate-900/90 dark:shadow-[0_40px_120px_-40px_rgba(15,23,42,0.8)]">
  <div class="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
    <ContactLinks />
    <p class="text-sm text-slate-500 dark:text-slate-400">© {year} Surya Satria Hidayat. All rights reserved.</p>
  </div>
</footer>
