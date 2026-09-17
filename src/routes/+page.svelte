<script lang="ts">
  import AboutSection from "$lib/features/portfolio/components/AboutSection.svelte";
  import HeroSection from "$lib/features/portfolio/components/HeroSection.svelte";
  import SiteFooter from "$lib/features/portfolio/components/SiteFooter.svelte";
  import PageLayout from "$lib/shared/components/PageLayout.svelte";
  import ThemeToggle from "$lib/shared/components/ThemeToggle.svelte";
</script>

<svelte:head>
  <title>Surya Hidayat</title>
  <meta name="description" content="Surya Satria Hidayat — full-stack software developer and physicist." />
</svelte:head>

<main class="relative min-h-screen overflow-hidden bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
  <ThemeToggle />
  <div aria-hidden="true" class="pointer-events-none absolute inset-x-0 top-0 -z-10 overflow-hidden">
    <div class="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/25 blur-3xl dark:bg-cyan-500/20"></div>
    <div class="absolute right-0 top-1/2 h-64 w-64 rounded-full bg-fuchsia-400/20 blur-3xl dark:bg-fuchsia-500/20"></div>
  </div>
  <PageLayout>
    <HeroSection />
    <AboutSection />
    <SiteFooter />
  </PageLayout>
</main>
