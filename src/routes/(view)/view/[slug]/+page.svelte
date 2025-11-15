<script>
  import { page } from '$app/stores';
  import { portfolioItems } from '$lib/data/portfolio-items';
  import { derived } from 'svelte/store';

  const item = derived(page, ($page) =>
    portfolioItems.find((i) => i.slug === $page.params.slug)
  );
</script>

{#if $item}
  <section class="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
    <h1 class="text-3xl font-bold mb-6 text-gray-800">{$item.title}</h1>
    <p class="text-gray-600 mb-8 text-center max-w-2xl">{$item.description}</p>

    <div class="w-full max-w-5xl aspect-video rounded-lg shadow-lg overflow-hidden">
      <iframe
        title={$item.title}
        src={$item.embedUrl}
        class="w-full h-full border-0"
        allowfullscreen
      ></iframe>
    </div>

    <a href="/" class="mt-10 text-indigo-600 hover:underline">
      ← Voltar para a página inicial
    </a>
  </section>
{:else}
  <p class="text-center py-20 text-gray-600">Modelo não encontrado.</p>
{/if}