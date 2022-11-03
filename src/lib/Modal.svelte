<script lang="ts">
  import {fly} from "svelte/transition";
  import {goto} from "$app/navigation";
  import {isMusic} from "../stores";
  import {onMount} from "svelte";

  export let displayName = "Pontuação";
  export let score = "0";
  export let preGame = "";
  const backToMenu = async () => {
    await goto('/')
  }
  const restart = async () => {
    await goto(`/${preGame}/pre-game`)
  }
  onMount(async () => {
    const audio = document.querySelector('audio.effects');
    audio.src = 'https://firebasestorage.googleapis.com/v0/b/reciclage-game-416af.appspot.com/o/sound_effects%2FSTREAMING-thug-life-music-soundroll-1-00-10.mp3?alt=media&token=1cf0d61f-29a6-4bab-9d14-9db43451040a';
    await audio.play();
  })
</script>
<audio class="effects"></audio>
<main transition:fly={{y: 200, duration: 200}}>
  <row class="row">
    <h2>{displayName}</h2>
    <h3>{score}</h3>
  </row>
  <div class="row">
    <button on:click={() => backToMenu()}>
      VOLTAR AO MENU
    </button>
    <button on:click={() => restart()}>
      RECOMEÇAR
    </button>
  </div>
  <svg class="trash-01" width="177" height="200" viewBox="0 0 177 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_f_146_54)">
      <ellipse cx="108" cy="174" rx="56" ry="13" fill="black" fill-opacity="0.29"/>
    </g>
    <path
      d="M41.9835 40.7343C40.9337 32.9358 46.9984 26 54.8673 26H160.085C167.971 26 174.04 32.9634 172.964 40.7749L155.047 170.775C154.16 177.208 148.663 182 142.169 182H72.3673C65.8579 182 60.3519 177.186 59.4835 170.734L41.9835 40.7343Z"
      fill="url(#paint0_linear_146_54)"/>
    <rect x="37.5356" y="10.9951" width="52" height="17" rx="8.5" transform="rotate(-12.2071 37.5356 10.9951)"
          fill="url(#paint1_linear_146_54)"/>
    <rect y="31.3931" width="142" height="17" rx="8.5" transform="rotate(-12.2071 0 31.3931)"
          fill="url(#paint2_linear_146_54)"/>
    <rect x="56" y="47.3774" width="17.3686" height="95.1972" rx="8.68429" transform="rotate(-7.86739 56 47.3774)"
          fill="url(#paint3_linear_146_54)"/>
    <rect width="17.3686" height="115.82" rx="8.68429"
          transform="matrix(-0.990588 -0.136881 -0.136881 0.990588 160.236 47.3774)" fill="url(#paint4_linear_146_54)"/>
    <rect width="17.3686" height="95.1972" rx="8.68429"
          transform="matrix(0.99934 -0.036312 -0.036312 -0.99934 100.734 138.481)" fill="url(#paint5_linear_146_54)"/>
    <defs>
      <filter id="filter0_f_146_54" x="39" y="148" width="138" height="52" filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="6.5" result="effect1_foregroundBlur_146_54"/>
      </filter>
      <linearGradient id="paint0_linear_146_54" x1="90.5" y1="26" x2="142" y2="177.5" gradientUnits="userSpaceOnUse">
        <stop stop-color="#AFB3B0"/>
        <stop offset="0.826394" stop-color="#878787"/>
        <stop offset="1" stop-color="#747474"/>
      </linearGradient>
      <linearGradient id="paint1_linear_146_54" x1="63.5356" y1="10.9951" x2="63.5356" y2="27.9951"
                      gradientUnits="userSpaceOnUse">
        <stop stop-color="#CECECE"/>
        <stop offset="1" stop-color="#7F7F7F"/>
      </linearGradient>
      <linearGradient id="paint2_linear_146_54" x1="71" y1="31.3931" x2="71" y2="48.3931"
                      gradientUnits="userSpaceOnUse">
        <stop stop-color="#AFB3B0"/>
        <stop offset="1" stop-color="#747474"/>
      </linearGradient>
      <linearGradient id="paint3_linear_146_54" x1="64.6843" y1="47.3774" x2="64.2136" y2="141.355"
                      gradientUnits="userSpaceOnUse">
        <stop stop-color="#747474" stop-opacity="0.29"/>
        <stop offset="0.50868" stop-color="#7F7F7F" stop-opacity="0.17"/>
        <stop offset="1" stop-color="#747474" stop-opacity="0.33"/>
      </linearGradient>
      <linearGradient id="paint4_linear_146_54" x1="8.68429" y1="0" x2="7.9876" y2="114.334"
                      gradientUnits="userSpaceOnUse">
        <stop stop-color="#747474" stop-opacity="0.29"/>
        <stop offset="0.50868" stop-color="#7F7F7F" stop-opacity="0.17"/>
        <stop offset="1" stop-color="#747474" stop-opacity="0.33"/>
      </linearGradient>
      <linearGradient id="paint5_linear_146_54" x1="8.68429" y1="0" x2="8.21361" y2="93.9774"
                      gradientUnits="userSpaceOnUse">
        <stop stop-color="#747474" stop-opacity="0.29"/>
        <stop offset="0.50868" stop-color="#7F7F7F" stop-opacity="0.17"/>
        <stop offset="1" stop-color="#747474" stop-opacity="0.33"/>
      </linearGradient>
    </defs>
  </svg>
  <svg class="trash-02" width="205" height="200" viewBox="0 0 205 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M205 167.998C205 187.358 170.654 182.442 146.963 182.442C123.271 182.442 115 162.415 115 143.055C115 123.695 133.154 108 156.846 108C180.537 108 205 148.637 205 167.998Z"
      fill="url(#paint0_radial_146_70)"/>
    <g filter="url(#filter0_f_146_70)">
      <ellipse cx="108" cy="174" rx="56" ry="13" fill="black" fill-opacity="0.29"/>
    </g>
    <path
      d="M41.9835 40.7343C40.9337 32.9358 46.9984 26 54.8673 26H160.085C167.971 26 174.04 32.9634 172.964 40.7749L155.047 170.775C154.16 177.208 148.663 182 142.169 182H72.3673C65.8579 182 60.3519 177.186 59.4835 170.734L41.9835 40.7343Z"
      fill="url(#paint1_linear_146_70)"/>
    <rect x="37.5356" y="10.9951" width="52" height="17" rx="8.5" transform="rotate(-12.2071 37.5356 10.9951)"
          fill="url(#paint2_linear_146_70)"/>
    <rect y="31.3931" width="142" height="17" rx="8.5" transform="rotate(-12.2071 0 31.3931)"
          fill="url(#paint3_linear_146_70)"/>
    <rect x="56" y="47.3774" width="17.3686" height="95.1972" rx="8.68429" transform="rotate(-7.86739 56 47.3774)"
          fill="url(#paint4_linear_146_70)"/>
    <rect width="17.3686" height="115.82" rx="8.68429"
          transform="matrix(-0.990588 -0.136881 -0.136881 0.990588 160.236 47.3774)" fill="url(#paint5_linear_146_70)"/>
    <rect width="17.3686" height="95.1972" rx="8.68429"
          transform="matrix(0.99934 -0.036312 -0.036312 -0.99934 100.734 138.481)" fill="url(#paint6_linear_146_70)"/>
    <path
      d="M22 167.998C22 187.358 56.3459 182.442 80.0373 182.442C103.729 182.442 112 162.415 112 143.055C112 123.695 93.8456 108 70.1542 108C46.4627 108 22 148.637 22 167.998Z"
      fill="url(#paint7_radial_146_70)"/>
    <defs>
      <filter id="filter0_f_146_70" x="39" y="148" width="138" height="52" filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="6.5" result="effect1_foregroundBlur_146_70"/>
      </filter>
      <radialGradient id="paint0_radial_146_70" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(152.009 147.713) rotate(90) scale(35.0549 42.8972)">
        <stop stop-color="#524F4F"/>
        <stop offset="1" stop-color="#413F3F"/>
      </radialGradient>
      <linearGradient id="paint1_linear_146_70" x1="90.5" y1="26" x2="142" y2="177.5" gradientUnits="userSpaceOnUse">
        <stop stop-color="#AFB3B0"/>
        <stop offset="0.826394" stop-color="#878787"/>
        <stop offset="1" stop-color="#747474"/>
      </linearGradient>
      <linearGradient id="paint2_linear_146_70" x1="63.5356" y1="10.9951" x2="63.5356" y2="27.9951"
                      gradientUnits="userSpaceOnUse">
        <stop stop-color="#CECECE"/>
        <stop offset="1" stop-color="#7F7F7F"/>
      </linearGradient>
      <linearGradient id="paint3_linear_146_70" x1="71" y1="31.3931" x2="71" y2="48.3931"
                      gradientUnits="userSpaceOnUse">
        <stop stop-color="#AFB3B0"/>
        <stop offset="1" stop-color="#747474"/>
      </linearGradient>
      <linearGradient id="paint4_linear_146_70" x1="64.6843" y1="47.3774" x2="64.2136" y2="141.355"
                      gradientUnits="userSpaceOnUse">
        <stop stop-color="#747474" stop-opacity="0.29"/>
        <stop offset="0.50868" stop-color="#7F7F7F" stop-opacity="0.17"/>
        <stop offset="1" stop-color="#747474" stop-opacity="0.33"/>
      </linearGradient>
      <linearGradient id="paint5_linear_146_70" x1="8.68429" y1="0" x2="7.9876" y2="114.334"
                      gradientUnits="userSpaceOnUse">
        <stop stop-color="#747474" stop-opacity="0.29"/>
        <stop offset="0.50868" stop-color="#7F7F7F" stop-opacity="0.17"/>
        <stop offset="1" stop-color="#747474" stop-opacity="0.33"/>
      </linearGradient>
      <linearGradient id="paint6_linear_146_70" x1="8.68429" y1="0" x2="8.21361" y2="93.9774"
                      gradientUnits="userSpaceOnUse">
        <stop stop-color="#747474" stop-opacity="0.29"/>
        <stop offset="0.50868" stop-color="#7F7F7F" stop-opacity="0.17"/>
        <stop offset="1" stop-color="#747474" stop-opacity="0.33"/>
      </linearGradient>
      <radialGradient id="paint7_radial_146_70" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(74.9907 147.713) rotate(90) scale(35.0549 42.8972)">
        <stop stop-color="#524F4F"/>
        <stop offset="1" stop-color="#413F3F"/>
      </radialGradient>
    </defs>
  </svg>
</main>
<style lang="scss">
  main {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 95%;
    max-width: 380px;
    height: min-content;
    padding: 40px;
    border-radius: var(--brd-radius);
    background-color: rgb(255, 255, 255);
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: calc(var(--z-index-overlay) + 1);
    transform: translate(-50%, -50%);
    box-shadow: 0px 0px 15px -1px rgba(102, 102, 102, 0.22);
    row-gap: 2em;
    cursor: url(./assets/cursors/cursor.png), default;
    overflow: hidden;

    & h2 {
      color: rgb(var(--text-secondary));
    }

    & h3 {
      color: rgb(var(--primary-color));
    }

    & .row {
      width: 100%;
      height: max-content;
      display: flex;
      align-items: center;
      justify-content: space-between;

      &:nth-child(1) {
        flex-direction: column;
      }

      & button {
        width: 49%;
        height: 3em;
        border-radius: 2em;
        background-color: rgb(var(--primary-color));
        display: flex;
        font-size: calc(var(--fs-p) - 0.2em);
        font-weight: 600;
        align-items: center;
        justify-content: center;
        color: rgb(255, 255, 255);
        cursor: url(./assets/cursors/pointer.png), pointer;
        padding: 0.5em;
      }
    }

    & .trash-01 {
      width: 130px;
      position: absolute;
      bottom: -50px;
      left: -30px;
      z-index: -1;
    }

    & .trash-02 {
      width: 130px;
      position: absolute;
      bottom: -0px;
      right: -30px;
      z-index: -1;
    }
  }
</style>