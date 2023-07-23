<script lang="ts">
  import { onMount } from 'svelte';
  import { actions } from '../lib/stores';

  onMount(() => {
    actions.setRoute('/');
  });
</script>

<h1>Welcome to the Home Page</h1>
<button on:click={() => actions.setRoute('/about')}>ABOUT US</button>
