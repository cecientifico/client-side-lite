<script lang="ts">
  import {fade} from "svelte/transition";

  export let isLoading = false;
</script>

{#if isLoading}
  <main class="loading" transition:fade={{ duration: 200 }}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="143"
      height="49"
      class="svg-1"
      viewBox="0 0 143 49"
      fill="none"
    >
      <rect
        x="37.5356"
        y="10.9951"
        width="52"
        height="17"
        rx="8.5"
        transform="rotate(-12.2071 37.5356 10.9951)"
        fill="url(#paint0_linear_175_70)"
      />
      <rect
        y="31.3931"
        width="142"
        height="17"
        rx="8.5"
        transform="rotate(-12.2071 0 31.3931)"
        fill="url(#paint1_linear_175_70)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_175_70"
          x1="63.5356"
          y1="10.9951"
          x2="63.5356"
          y2="27.9951"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#CECECE"/>
          <stop offset="1" stop-color="#7F7F7F"/>
        </linearGradient>
        <linearGradient
          id="paint1_linear_175_70"
          x1="71"
          y1="31.3931"
          x2="71"
          y2="48.3931"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#AFB3B0"/>
          <stop offset="1" stop-color="#747474"/>
        </linearGradient>
      </defs>
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="135"
      height="156"
      class="svg2"
      viewBox="0 0 135 156"
      fill="none"
    >
      <path
        d="M1.98347 14.7343C0.933672 6.93585 6.99842 0 14.8673 0H120.085C127.971 0 134.04 6.96343 132.964 14.7749L115.047 144.775C114.16 151.208 108.663 156 102.169 156H32.3673C25.8579 156 20.3519 151.186 19.4835 144.734L1.98347 14.7343Z"
        fill="url(#paint0_linear_178_79)"
      />
      <rect
        x="16"
        y="21.3774"
        width="17.3686"
        height="95.1972"
        rx="8.68429"
        transform="rotate(-7.86739 16 21.3774)"
        fill="url(#paint1_linear_178_79)"
      />
      <rect
        width="17.3686"
        height="115.82"
        rx="8.68429"
        transform="matrix(-0.990588 -0.136881 -0.136881 0.990588 120.236 21.3774)"
        fill="url(#paint2_linear_178_79)"
      />
      <rect
        width="17.3686"
        height="95.1972"
        rx="8.68429"
        transform="matrix(0.99934 -0.036312 -0.036312 -0.99934 60.7339 112.481)"
        fill="url(#paint3_linear_178_79)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_178_79"
          x1="50.5"
          y1="1.40324e-06"
          x2="102"
          y2="151.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#AFB3B0"/>
          <stop offset="0.826394" stop-color="#878787"/>
          <stop offset="1" stop-color="#747474"/>
        </linearGradient>
        <linearGradient
          id="paint1_linear_178_79"
          x1="24.6843"
          y1="21.3774"
          x2="24.2136"
          y2="115.355"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#747474" stop-opacity="0.29"/>
          <stop offset="0.50868" stop-color="#7F7F7F" stop-opacity="0.17"/>
          <stop offset="1" stop-color="#747474" stop-opacity="0.33"/>
        </linearGradient>
        <linearGradient
          id="paint2_linear_178_79"
          x1="8.68429"
          y1="0"
          x2="7.9876"
          y2="114.334"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#747474" stop-opacity="0.29"/>
          <stop offset="0.50868" stop-color="#7F7F7F" stop-opacity="0.17"/>
          <stop offset="1" stop-color="#747474" stop-opacity="0.33"/>
        </linearGradient>
        <linearGradient
          id="paint3_linear_178_79"
          x1="8.68429"
          y1="0"
          x2="8.21361"
          y2="93.9774"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#747474" stop-opacity="0.29"/>
          <stop offset="0.50868" stop-color="#7F7F7F" stop-opacity="0.17"/>
          <stop offset="1" stop-color="#747474" stop-opacity="0.33"/>
        </linearGradient>
      </defs>
    </svg>
    <h3>Carregando...</h3>
  </main>
{/if}

<style lang="scss">
  .svg-1 {
    margin-top: -200px;
    z-index: 1000000;
    animation: teste 1s linear forwards infinite;
    transition: 0.3s linear;
  }

  @keyframes teste {
    50% {
      margin-top: -400px;
    }
    55% {
      margin-top: -400px;
    }
    80% {
      transform: rotate(-360deg);
      margin-top: -400px;
    }
    80.1% {
      transform: rotate(0deg);
    }
    80% {
      margin-top: -200px;
    }
  }

  .svg2 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  h3 {
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .loading {
    width: 100%;
    height: 100%;
    max-width: 1400px;
    background-color: rgb(255, 255, 255);
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    right: 0;
    bottom: 0;
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: rgb(var(--text-color));
    row-gap: 1em;
    padding: 0.5em;

    & .loading-animation {
      --loading-ball-size: 10px;
      --loading-spacing-size: 15px;
      --loading-ball-spacing-size: calc(
              (var(--loading-ball-size) + var(--loading-spacing-size))
      );
      --loading-total-size: calc(
              (var(--loading-ball-size) * 2 + var(--loading-spacing-size))
      );
    }

    .container {
      display: flex;
      align-items: center;
      width: 60%;
      justify-content: center;
      flex-direction: column;
    }

    .loading__msg {
      font-size: 1em;
    }

    .author {
      align-self: flex-end;
      font-size: 0.7em;
    }
  }
</style>
