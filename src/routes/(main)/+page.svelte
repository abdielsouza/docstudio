<script lang="ts">
  import ServiceCard from "$lib/components/ServiceCard.svelte";
  import { onMount } from 'svelte';
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  import { portfolioItems } from "$lib/data/portfolio-items";

  gsap.registerPlugin(ScrollTrigger);

  onMount(() => {
    // Hero fade in
    gsap.from('.hero-text', {
      y: 50,
      opacity: 0,
      duration: 2.4,
      ease: 'power2.out'
    });

    // Cards animam conforme o scroll
    gsap.utils.toArray('.service-card').forEach((el: any) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
      });
    });

    // Parallax sutil na galeria
    gsap.utils.toArray('.gallery-img').forEach((img: any) => {
      gsap.to(img, {
        yPercent: -15,
        ease: 'none',
        scrollTrigger: {
          trigger: img,
          scrub: true
        }
      });
    });

    gsap.utils.toArray('.shape').forEach((el: any, i) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
        },
        y: 50,
        opacity: 0,
        duration: 2.4,
        delay: i * 0.2,
        ease: 'power2.out'
      });
    });
  });
</script>

<!-- Hero Section -->
<section class="h-screen flex flex-col justify-center items-center text-center bg-linear-to-b from-indigo-600 to-indigo-800 text-white relative overflow-hidden">
  <div class="hero-text z-10">
    <h1 class="text-5xl font-bold mb-4">DocStudio</h1>
    <p class="text-lg opacity-80">Design de documentos e apresentações que impressionam.</p>
  </div>

  <!-- img src="/hero-bg.png" alt="background" class="absolute bottom-0 w-full opacity-40 pointer-events-none" / -->
</section>

<!-- Sobre -->
<section class="relative overflow-hidden -z-20 py-20 px-6 md:px-20 text-center bg-white dark:dark-mode-bg dark:dark-mode-text">
  <!-- Formas de fundo -->
  <div class="absolute inset-0 -z-10 overflow-visible">
    <div class="shape absolute top-16 left-24 w-32 h-32 bg-indigo-300 rounded-full opacity-40"></div>
    <div class="shape absolute bottom-10 right-32 w-24 h-24 bg-sky-300 rounded-full opacity-40"></div>
    <div class="shape absolute top-16 right-1/2 w-32 h-32 bg-purple-300 rotate-45 opacity-40"></div>
    <div class="shape absolute bottom-32 right-96 w-24 h-24 bg-blue-300 rounded-full opacity-40"></div>
  </div>
  
  <h2 class="text-3xl font-semibold mb-6">Transforme suas ideias em impacto visual</h2>
  <p class="max-w-3xl mx-auto text-gray-600">
    No DocStudio, unimos clareza e design. Produzimos apresentações, currículos e documentos profissionais com foco em resultado. 
    Ajudamos você a comunicar suas ideias com estilo e propósito.
  </p>
</section>

<!-- Serviços -->
<section id="services" class="py-20 px-6 md:px-20 bg-gray-50 text-center dark:dark-mode-bg dark:dark-mode-text">
  <h2 class="text-3xl font-semibold mb-10">Serviços</h2>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div class="service-card"><ServiceCard title="Apresentações" text="Slides com storytelling visual e design cativante." /></div>
    <div class="service-card"><ServiceCard title="Currículos" text="Currículos profissionais com formatação moderna e atraente." /></div>
    <div class="service-card"><ServiceCard title="Documentos" text="Padronização e formatação ABNT ou empresarial." /></div>
  </div>
</section>

<!-- Galeria -->
<section id="portfolio" class="py-20 bg-white text-center dark:dark-mode-bg dark:dark-mode-text">
  <h2 class="text-3xl font-semibold mb-10">Vitrine</h2>
  <div class="grid grid-flow-col auto-cols-max gap-8 px-6 mx-auto justify-center place-items-center">
    {#each portfolioItems as item}
      <a
        href={`/view/${item.slug}`}
        class="block bg-gray-50 hover:bg-indigo-50 rounded-xl shadow transition p-4 max-w-fit max-h-fit dark:dark-mode-card dark:dark-mode-text"
      >
        <img
          src={item.thumbnail}
          alt={item.title}
          class="rounded-lg mb-4 aspect-video object-contain w-[250px] h-[250px]"
        />
        <h3 class="text-xl font-semibold text-gray-800">{item.title}</h3>
        <p class="text-gray-500 mt-2 text-sm">{item.description}</p>
      </a>
    {/each}
  </div>
</section>

<!-- Mais Descrição -->
<section id="more-description" class="py-20 px-6 md:px-20 bg-gray-50 text-center dark:dark-mode-bg dark:dark-mode-text">
  <h2 class="text-3xl font-semibold mb-10">Como funciona?</h2>
  <p class="max-w-3xl mx-auto text-gray-600">
    Na verdade, o método do nosso serviço é muito simples:
  </p>
  <div class="flex flex-col items-center space-y-10 mt-10">
    <div class="max-w-2xl space-y-4">
      <h3 class="text-2xl font-semibold text-indigo-600">1. Você conta a sua ideia</h3>
      <p class="text-gray-600">
        Primeiro, entendemos exatamente o que você precisa: o estilo desejado, o objetivo do documento, o público,
        e o nível de impacto visual que busca. Tudo começa com uma conversa simples e rápida.
      </p>
    </div>

    <div class="max-w-2xl space-y-4">
      <h3 class="text-2xl font-semibold text-indigo-600">2. Criamos o design perfeito</h3>
      <p class="text-gray-600">
        Transformamos seu conteúdo em um material visual impecável. Seja apresentação, currículo ou documento,
        tudo é construído com clareza, hierarquia visual e identidade profissional.
      </p>
    </div>

    <div class="max-w-2xl space-y-4">
      <h3 class="text-2xl font-semibold text-indigo-600">3. Você revisa e ajusta</h3>
      <p class="text-gray-600">
        Enviamos uma prévia para você analisar. Se quiser mudar cores, fontes, elementos ou estrutura — sem problema.
        Ajustamos até ficar exatamente como você imaginou.
      </p>
    </div>

    <div class="max-w-2xl space-y-4">
      <h3 class="text-2xl font-semibold text-indigo-600">4. Entrega final rápida</h3>
      <p class="text-gray-600">
        Você recebe tudo no formato ideal para usar imediatamente: PDF, PPTX, Google Slides ou o que preferir.
        Um material profissional, pronto para impressionar.
      </p>
    </div>
  </div>
</section>

<!-- CTA final -->
<section id="contacts" class="py-20 bg-indigo-600 text-white text-center dark:dark-mode-bg dark:dark-mode-text">
  <h2 class="text-3xl font-bold mb-6">Pronto para destacar suas ideias?</h2>
  <p class="mb-8 text-lg">Peça um orçamento rápido e receba seu projeto em pouco tempo.</p>
  <a href="https://wa.me/+5531993350829" class="bg-white text-indigo-700 px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform dark:dark-mode-link">
    Peça seu orçamento
  </a>
  <p class="my-10 text-sm">Ou mande um email se preferir:</p>
  <form
    method="POST"
    class="max-w-xl mx-auto bg-indigo-800 p-6 rounded-lg space-y-6"
  >
    <div class="text-left">
      <label for="name" class="block font-semibold mb-1">Seu nome</label>
      <input
        type="text"
        name="name"
        required
        class="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-black focus:ring-2 focus:ring-indigo-500 outline-none"
      />
    </div>

    <div class="text-left">
      <label for="email" class="block font-semibold mb-1">Seu email</label>
      <input
        type="email"
        name="email"
        required
        class="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-black focus:ring-2 focus:ring-indigo-500 outline-none"
      />
    </div>

    <div class="text-left">
      <label for="message" class="block font-semibold mb-1">Mensagem</label>
      <textarea
        name="message"
        required
        rows="4"
        class="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-black focus:ring-2 focus:ring-indigo-500 outline-none resize-none"
      ></textarea>
    </div>

    <button
      type="submit"
      class="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition shadow hover:shadow-lg"
    >
      Enviar mensagem
    </button>
  </form>
</section>