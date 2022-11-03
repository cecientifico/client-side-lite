<script lang="ts">
  import {isMusic} from "../stores";

  let lastValue = false;
  let isLoading = false
  const turnMusic = async (event: any) => {
    event.stopPropagation();
    isMusic.subscribe(value => {
      lastValue = value;
    });
    isMusic.update(value => {
      return !lastValue
    })
  }
</script>

<button class="music" on:click={(event) => turnMusic(event)}>
  {#if lastValue}
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 5L6 9H2V15H6L11 19V5Z" stroke="rgb(var(--text-secondary))" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round"/>
    </svg>
  {/if}
  {#if !lastValue}
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 5L6 9H2V15H6L11 19V5Z" stroke="rgb(var(--text-secondary))" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round"/>
      <path d="M23 9L17 15" stroke="rgb(var(--text-secondary))" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round"/>
      <path d="M17 9L23 15" stroke="rgb(var(--text-secondary))" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round"/>
    </svg>
  {/if}
</button>
<style lang="scss">
  button {
    border: none;
    width: 1.5em;
    height: 1.5em;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: url(../lib/assets/cursors/pointer.png), pointer;
    border-radius: var(--brd-radius);
    background-color: white;
    & svg {
      pointer-events: none;
    }
  }
</style>