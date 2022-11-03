<script lang="ts">
  import { onMount } from 'svelte'
  export let src: string

  let loaded = false
  let failed = false
  let loading = false

  onMount(() => {
    const img = new Image()
    img.src = src
    loading = true

    img.onload = () => {
      loading = false
      loaded = true
    }
    img.onerror = () => {
      loading = false
      failed = true
    }
  })
</script>

<main>
  {#if loaded}
    <img {src} alt="Document" />
  {:else if failed}
    <div class="loading">
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  {:else if loading}
    <div class="loading">
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  {/if}
</main>

<style lang="scss">
  div {
    position: relative;
  }
  .loading {
    position: relative;
    width: 96px;
    height: 96px;
    & div {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 16px;
      height: 16px;
      margin: auto;
      border-radius: 50%;
      background-color: rgb(var(--primary-color));
      transform: rotate(0deg) translateY(-35px);
      animation: loading 2000ms infinite;
      &:nth-child(2) {
        width: 13px;
        height: 13px;
        animation: loading 2000ms 100ms infinite;
      }
      &:nth-child(3) {
        width: 11px;
        height: 11px;
        animation: loading 2000ms 200ms infinite;
      }
      &:nth-child(4) {
        width: 9px;
        height: 9px;
        animation: loading 2000ms 300ms infinite;
      }
      &:nth-child(5) {
        width: 7px;
        height: 7px;
        animation: loading 2000ms 400ms infinite;
      }
      &:nth-child(6) {
        width: 5px;
        height: 5px;
        animation: loading 2000ms 500ms infinite;
      }
    }
  }
  @keyframes loading {
    0% {
      transform: rotate(0deg) translateY(-35px);
    }
    100% {
      transform: rotate(360deg) translateY(-35px);
    }
  }
</style>
