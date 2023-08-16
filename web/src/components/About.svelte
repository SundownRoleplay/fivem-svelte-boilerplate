<script lang="ts">
  import { onMount } from "svelte";
  import { currentRoute } from "../lib/stores";
  import { fetchNui } from "../lib/fetchNui";
  let health: string;

  onMount(() => {
    fetchNui("getHealth", {})
      .then((response) => {
        health = response.health;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
</script>

<h1>HEALTH</h1>
<p style="color: red;">{health}</p>
<br />
<button on:click={() => currentRoute.set("/")}>BACK HOME</button>
