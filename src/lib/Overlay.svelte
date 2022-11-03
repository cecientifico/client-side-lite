<script lang="ts">
  import { fade } from "svelte/transition";
</script>
<main transition:fade={{duration: 200}}></main>
<style lang="scss">
  main {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: var(--z-index-overlay);
    cursor: url(./assets/cursors/cursor.png), default;
  }
</style>