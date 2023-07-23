<script lang="ts">
  import { useNuiEvent } from '../useNuiEvent';
  import { visibility } from '../stores';
  import { actions } from '../stores';

  let isVisible: boolean;

  visibility.subscribe((visible) => {
    isVisible = visible;
  });

  useNuiEvent<boolean>('setVisible', (visible) => {
    actions.setRoute('/')
    visibility.set(visible);
  });
</script>

<main>
  {#if isVisible}
    <slot />
  {/if}
</main>
