<script lang="ts">
  import { onMount } from "svelte";
  import Icon from "./Icon.svelte";

  type Theme = "light" | "dark";
  const query = "(prefers-color-scheme: dark)";
  let theme = $state<Theme>("light");

  function storedTheme(): Theme | null {
    try {
      const value = localStorage.getItem("theme");
      return value === "light" || value === "dark" ? value : null;
    } catch { return null; }
  }

  function apply(next: Theme) {
    theme = next;
    document.documentElement.classList.toggle("dark", next === "dark");
    document.documentElement.style.colorScheme = next;
  }

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    try { localStorage.setItem("theme", next); } catch { /* Continue without persistence. */ }
    apply(next);
  }

  onMount(() => {
    const media = matchMedia(query);
    apply(storedTheme() ?? (media.matches ? "dark" : "light"));
    const handleChange = (event: MediaQueryListEvent) => {
      if (!storedTheme()) apply(event.matches ? "dark" : "light");
    };
    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  });
</script>

<button type="button" aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`} title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`} onclick={toggle} class="fixed right-5 top-5 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-slate-700 shadow-lg backdrop-blur transition hover:scale-105 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-500 dark:border-white/10 dark:bg-slate-900/90 dark:text-amber-300 dark:hover:bg-slate-800">
  <Icon name={theme === "dark" ? "sun" : "moon"} size={20} />
</button>
