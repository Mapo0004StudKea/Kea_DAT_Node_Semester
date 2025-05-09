<script>
  import { nickname } from "./stores/nicknameStore.js";
  import Colors from "./pages/Colors/Colors.svelte";
  import Registration from "./pages/Registration/Registration.svelte";

</script>

{#if !$nickname}
  <p>Please register</p>
  <Registration />
{:else}
  <Colors />
{/if}