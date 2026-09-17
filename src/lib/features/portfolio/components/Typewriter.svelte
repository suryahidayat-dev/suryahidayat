<script lang="ts">
  import { onMount } from "svelte";
  import { roles } from "../data/portfolio";

  let text = $state<string>(roles[0]);

  onMount(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let wordIndex = 0;
    let count = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const word = roles[wordIndex] ?? "";
      text = word.slice(0, count);
      if (!deleting && count === word.length) {
        deleting = true;
        timer = setTimeout(tick, 2_000);
      } else if (deleting && count === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % roles.length;
        timer = setTimeout(tick, 150);
      } else {
        count += deleting ? -1 : 1;
        timer = setTimeout(tick, deleting ? 75 : 150);
      }
    };

    text = "";
    timer = setTimeout(tick, 150);
    return () => clearTimeout(timer);
  });
</script>

<span aria-live="polite" class="border-r-[0.08em] border-current pr-1">{text}</span>
