<script lang="ts">
  import { useNuiEvent } from "../useNuiEvent";
  import { visibilityProvider, setComponentVisibility } from "../stores";
  import type { Visibility } from "../../interfaces";

  export let component: string;

  let isVisible: boolean;

  visibilityProvider.subscribe((data) => {
    if (data[component] !== undefined) {
      isVisible = data[component];
    }
  });

  useNuiEvent<Visibility>("setComponentVisible", (data) => {
    if (data.component === component) {
      setComponentVisibility(data.component, data.isVisible);
    }
  });
</script>

<main>
  {#if isVisible}
    <slot />
  {/if}
</main>
