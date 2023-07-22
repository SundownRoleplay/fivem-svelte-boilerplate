<script lang="ts">
 import Router, {location, link} from 'svelte-spa-router';

 import Home from './components/Home.svelte';
 import About from './components/About.svelte';
</script>

<a href="/">Home</a>
<a href="/#/about">About</a>

<Router routes={{
 '/': Home,
 '/about': About
 }}/>