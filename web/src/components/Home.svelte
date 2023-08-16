<script lang="ts">
  import { currentRoute } from "../lib/stores";
</script>

<h1>Welcome to the Home Page</h1>
<button on:click={() => currentRoute.set("/about")}>ABOUT US</button>
