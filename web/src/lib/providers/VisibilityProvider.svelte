<script lang="ts">
  import { onMount } from 'svelte';
  import { useNuiEvent } from '../useNuiEvent';
  import { visibility } from '../stores';
  import { fetchNui } from '../fetchNui';
  import { actions } from '../stores';

  let isVisible: boolean;

  const unsubscribe = visibility.subscribe((visible) => {
    isVisible = visible;
  });

  useNuiEvent<boolean>('setVisible', (visible) => {
    actions.setRoute('/')
    visibility.set(visible);
  });

  onMount(() => {
    const keyHandler = (e: KeyboardEvent) => {
      if (isVisible && ['Escape'].includes(e.code)) {
        fetchNui('hideUI');
        visibility.set(false);
        actions.setRoute('/')
      }
    };

    window.addEventListener('keydown', keyHandler);

    return () => {
      window.removeEventListener('keydown', keyHandler);
      unsubscribe();
    };
  });
</script>

<main>
  {#if isVisible}
    <slot />
  {/if}
</main>
