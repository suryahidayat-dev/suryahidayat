<script lang="ts">
  import Icon from "$lib/shared/components/Icon.svelte";
  import { socialLinks } from "../data/portfolio";
</script>

<nav aria-label="Social links" class="flex gap-4">
  {#each socialLinks as link (link.name)}
    <a aria-label={link.name} class={`flex h-12 w-12 items-center justify-center rounded-full text-white transition-transform duration-300 hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 ${link.color}`} href={link.href} rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined} target={link.href.startsWith("http") ? "_blank" : undefined}>
      <Icon name={link.icon} />
    </a>
  {/each}
</nav>
