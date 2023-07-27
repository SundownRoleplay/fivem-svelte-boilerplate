<script lang="ts">
  import { useNuiEvent } from '../useNuiEvent';
  import { visibility } from '../stores';

  let isVisible: boolean;

  visibility.subscribe((visible) => {
    isVisible = visible;
  });

  useNuiEvent<boolean>('setVisible', (visible) => {
    visibility.set(visible);
  });
</script>

<main>
  {#if isVisible}
    <slot />
  {/if}
</main>
