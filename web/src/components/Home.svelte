<script lang="ts">
  import { actions } from "../lib/stores";
</script>

<h1>Welcome to the Home Page</h1>
<button on:click={() => actions.setRoute("/about")}>ABOUT US</button>
