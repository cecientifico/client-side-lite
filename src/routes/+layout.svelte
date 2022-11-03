<script lang="ts">
  import "../styles/global.scss";
  import {onMount} from "svelte";
  import {goto} from "$app/navigation";
  import {firebaseConfig, musics, isMusic} from "../stores";
  import {initializeApp} from "firebase/app";
  import {getAnalytics} from "firebase/analytics";
  import {getAuth, onAuthStateChanged} from "firebase/auth";
  import Loading from "../lib/Loading.svelte";

  let isLoading = true;
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  let loadingAudio = false;
  onMount(async () => {
    $: isMusic.subscribe( async(value) => {
      const audio = document.querySelector('audio.sound-background')!;
      if (value) {
        const index = Math.round(Math.random() * 9);
        musics.index = index
        audio.src = musics.musics[musics.index];
        audio.load();
        loadingAudio= true;
        await audio.play();
        loadingAudio = false;
        audio.onended = async() => {
          const index = Math.round(Math.random() * 9);
          musics.index = index
          audio.src = musics.musics[musics.index];
          audio.load();
          loadingAudio= true;
          await audio.play();
          loadingAudio = false;
        };

      } else {
        audio.pause()
      }
    })
    isLoading = false;
    const analytics = getAnalytics(app);
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        goto("/login");
      }
    });
  });

</script>

<main>
  <div class="load-audio">
    {#if loadingAudio}
      <div class="loading-animation">
        <div class="ball ball-ne"></div>
        <div class="ball ball-nw"></div>
        <div class="ball ball-sw"></div>
        <div class="ball ball-se"></div>
      </div>
    {/if}
  </div>
  <audio class="sound-background"></audio>
  <Loading {isLoading}/>
</main>
{#if !isLoading}
  <slot/>
{/if}

<style lang="scss">
  .load-audio {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1000;
  }
</style>
