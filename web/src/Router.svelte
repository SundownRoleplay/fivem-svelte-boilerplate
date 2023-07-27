<script lang="ts">
  import { onMount, type ComponentType } from "svelte";
  import { store } from "./lib/stores";
  import Home from "./components/Home.svelte";
  import About from "./components/About.svelte";

  interface Route {
    name: string;
    component: ComponentType;
  }

  const routes: Route[] = [
    { name: "/", component: Home },
    { name: "/about", component: About },
  ];

  let currentComponent: ComponentType;

  onMount(() => {
    const unsubscribe = store.subscribe((state) => {
      let route = routes.find((element) => element.name === state.currentRoute);

      currentComponent = route.component;
    });

    return unsubscribe;
  });
</script>

<div>
  {#if currentComponent}
    <svelte:component this={currentComponent} />
  {/if}
</div>
