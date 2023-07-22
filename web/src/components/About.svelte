<!-- src/Components/About.svelte -->

<script lang="ts">
  import { onMount } from 'svelte';
  import { actions } from '../lib/store';

  onMount(() => {
    // Defina o código a ser executado quando este componente é montado.
    actions.setRoute('/about');
  });
</script>

<h1>About Us</h1>
