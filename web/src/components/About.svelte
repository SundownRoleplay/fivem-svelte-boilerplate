<script lang="ts">
  import { onMount } from "svelte";
  import { actions } from "../lib/stores";
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
<button on:click={() => actions.setRoute("/")}>BACK HOME</button>
