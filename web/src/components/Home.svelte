<!-- src/Components/Home.svelte -->

<script lang="ts">
 import { onMount } from 'svelte';
  import { actions } from '../lib/store';

 onMount(() => {
   // Defina o código a ser executado quando este componente é montado.
   actions.setRoute('/');
 });
</script>

<h1>Welcome to the Home Page</h1>
<a href="/about">Entre no aboutus</a>