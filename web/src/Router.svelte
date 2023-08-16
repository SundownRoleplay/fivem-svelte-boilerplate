<script lang="ts">
  import type { Route } from "./interfaces";
  import { type ComponentType } from "svelte";
  import { currentRoute } from "./lib/stores";
  import Home from "./components/Home.svelte";
  import About from "./components/About.svelte";

  const routes: Route = {
    "/": Home,
    "/about": About
  }

  let currentComponent: ComponentType;

  currentRoute.subscribe((newRoute) => {
    currentComponent = routes[newRoute];
  });
</script>

<div>
  {#if currentComponent}
    <svelte:component this={currentComponent} />
  {/if}
</div>
