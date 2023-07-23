<!-- src/App.svelte -->

<script lang="ts">
  import { onMount } from 'svelte';
  import Home from './components/Home.svelte';
  import About from './components/About.svelte';
  import VisibilityProvider from './lib/providers/VisibilityProvider.svelte';
  import { store } from './lib/stores';

  let currentRoute = '/';

  onMount(() => {
    // Observa as mudanças na store e atualiza o valor localmente
    const unsubscribe = store.subscribe((state) => {
      currentRoute = state.currentRoute;
    });

    // Cancela a inscrição quando o componente é desmontado para evitar vazamentos de memória.
    return unsubscribe;
  });
</script>

<VisibilityProvider>
  <main>
    {#if currentRoute === '/'}
      <Home />
    {:else if currentRoute === '/about'}
      <About />
    {:else}
      <h1>404 Not Found</h1>
    {/if}
  </main>  
</VisibilityProvider>
