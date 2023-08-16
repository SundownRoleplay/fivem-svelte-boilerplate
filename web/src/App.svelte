<script lang="ts">
  import Router from "./Router.svelte";
  import VisibilityProvider from "./lib/providers/VisibilityProvider.svelte";
</script>

<VisibilityProvider component="">
  <main>
    <Router />
  </main>
</VisibilityProvider>
