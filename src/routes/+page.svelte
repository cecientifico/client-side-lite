<script lang="ts">
  type User = {
    photoURL: string;
    displayName: string;
    isAnonymous: boolean;
    uid: string;
  }
  type Game = {
    game: string;
    displayName: string;
  }
  import {onMount} from "svelte";
  import {goto} from "$app/navigation";
  import {getAuth, onAuthStateChanged, signOut} from "firebase/auth";
  import axios from "axios";
  import {connectionAPI, currentGame} from "../stores";
  import Cloud from "$lib/Cloud.svelte";
  import Play from "$lib/icons/Play.svelte";

  const auth = getAuth();

  let urlProfileImageUser = "";
  let displayNameUser = "";
  let scoreLoaded = false;
  let lastResult = 0;
  let loadedPage = false;
  let user = '';
  let points = {
    modality: ['adventure', 'casually', 'arcade'],
    displayName: ['Aventura', 'Casual', 'Arcade'],
    index: 0,
    points: 0,
  }
  onMount(async () => {
    onAuthStateChanged(auth, (user: User) => {
      if (!user) {
        return;
      }
      if (user.isAnonymous) {
        loadedPage = true;
        scoreLoaded = true;
        urlProfileImageUser = 'https://firebasestorage.googleapis.com/v0/b/reciclage-game-416af.appspot.com/o/avatars%2Favatar.webp?alt=media&token=c9095074-158e-44db-b558-e04f9ddb5a8d';
        displayNameUser = 'Anônimo';
        return;
      }
      user = user;
      loadedPage = true;
      urlProfileImageUser = user.photoURL;
      displayNameUser = user.displayName;
      axios
        .get(`${connectionAPI}/user-results/${points.modality[points.index]}/${user.uid}`)
        .then((response) => {
          const results = response.data.result[points.modality[points.index]][0].results;
          points.points = results;
          scoreLoaded = true;
        })
        .catch(() => {
          points.points = 0;
          scoreLoaded = true;
        });
    });
  });
  const active = (event) => {
    event.stopPropagation();
    const menu = document.querySelector('.right .menu');
    menu.classList.toggle("active");
  };
  const unActive = (event) => {
    event.stopPropagation();
    const menu = document.querySelector('.right .menu');
    menu.classList.remove("active");
  };
  const gotoGame = async ({game, displayName}: Game) => {
    if(game === 'arcade') {
      await goto(`${game}`)
      return
    }
    await goto(`${game}/pre-game`)
  }
  const signOutUser = () => {
    signOut(auth);
    loadedPage = false;
  };
  const turnModalityResults = async (type) => {
    if (type === 'forward') {
      if (points.index > 1) {
        points.index = 0;
      } else {
        points.index++
      }
    } else {
      if (points.index < 1) {
        points.index = 2;
      } else {
        points.index--
      }
    }
    scoreLoaded = false;
    axios
      .get(`${connectionAPI}/user-results/${points.modality[points.index]}/${auth.currentUser.uid}`)
      .then((response) => {
        const results = response.data.result[points.modality[points.index]][0].results;
        points.points = results;
        scoreLoaded = true;
      })
      .catch(() => {
        points.points = 0;
        scoreLoaded = true;
      });
  }
</script>

{#if loadedPage}
  <main class="page">
    <div class="card diurnal" on:click={(event) => unActive(event)}>
      <Cloud/>
      <div class="sun-and-moon"></div>
      <header>
        <div class="profile">
          <!-- svelte-ignore a11y-missing-attribute -->
          {#if scoreLoaded}
            <img src={urlProfileImageUser} alt="User self"/>
          {/if}
          <ul>
            <li>
              {displayNameUser}
            </li>
            <li on:click={() => signOutUser()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon"
                viewBox="0 0 512 512"
              >
                <path
                  d="M304 336v40a40 40 0 01-40 40H104a40 40 0 01-40-40V136a40 40 0 0140-40h152c22.09 0 48 17.91 48 40v40M368 336l80-80-80-80M176 256h256"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                />
              </svg>
            </li>
          </ul>
        </div>
        <div class="score">
          {#if !auth.currentUser.isAnonymous}
            <div class="col">
              <button class="navigate" on:click={() => turnModalityResults('backword')}>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 512 512">
                  <path fill="none" stroke="rgb(var(--primary-color))" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="48"
                        d="M328 112L184 256l144 144"/>
                </svg>
              </button>
            </div>
            <div class="col">
              {#if !scoreLoaded}
                <div class="loading-animation">
                  <div class="ball ball-ne"></div>
                  <div class="ball ball-nw"></div>
                  <div class="ball ball-sw"></div>
                  <div class="ball ball-se"></div>
                </div>
              {/if}
              {#if scoreLoaded}
                <h3>{points.displayName[points.index]}</h3>
                <h2>{points.points}</h2>
              {/if}
            </div>
            <div class="col">
              <button class="navigate" on:click={() => turnModalityResults('forward')}>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 512 512">
                  <path fill="none" stroke="rgb(var(--primary-color))" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="48"
                        d="M184 112l144 144-144 144"/>
                </svg>
              </button>
            </div>
          {/if}

        </div>
      </header>
      <main class="content">
        <div class="left">
          <button class="btn-new-game" on:click={(event) => goto('/ranking')}>
            Ranking
          </button>
          <svg
            width="205"
            height="200"
            viewBox="0 0 205 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M205 167.998C205 187.358 170.654 182.442 146.963 182.442C123.271 182.442 115 162.415 115 143.055C115 123.695 133.154 108 156.846 108C180.537 108 205 148.637 205 167.998Z"
              fill="url(#paint0_radial_26_1734)"
            />
            <g filter="url(#filter0_f_26_1734)">
              <ellipse
                cx="108"
                cy="174"
                rx="56"
                ry="13"
                fill="black"
                fill-opacity="0.29"
              />
            </g>
            <path
              d="M41.9835 40.7343C40.9337 32.9358 46.9984 26 54.8673 26H160.085C167.971 26 174.04 32.9634 172.964 40.7749L155.047 170.775C154.16 177.208 148.663 182 142.169 182H72.3673C65.8579 182 60.3519 177.186 59.4835 170.734L41.9835 40.7343Z"
              fill="url(#paint1_linear_26_1734)"
            />
            <rect
              x="37.5356"
              y="10.9951"
              width="52"
              height="17"
              rx="8.5"
              transform="rotate(-12.2071 37.5356 10.9951)"
              fill="url(#paint2_linear_26_1734)"
            />
            <rect
              y="31.3931"
              width="142"
              height="17"
              rx="8.5"
              transform="rotate(-12.2071 0 31.3931)"
              fill="url(#paint3_linear_26_1734)"
            />
            <rect
              x="56"
              y="47.3774"
              width="17.3686"
              height="95.1972"
              rx="8.68429"
              transform="rotate(-7.86739 56 47.3774)"
              fill="url(#paint4_linear_26_1734)"
            />
            <rect
              width="17.3686"
              height="115.82"
              rx="8.68429"
              transform="matrix(-0.990588 -0.136881 -0.136881 0.990588 160.236 47.3774)"
              fill="url(#paint5_linear_26_1734)"
            />
            <rect
              width="17.3686"
              height="95.1972"
              rx="8.68429"
              transform="matrix(0.99934 -0.036312 -0.036312 -0.99934 100.734 138.481)"
              fill="url(#paint6_linear_26_1734)"
            />
            <path
              d="M22 167.998C22 187.358 56.3459 182.442 80.0373 182.442C103.729 182.442 112 162.415 112 143.055C112 123.695 93.8456 108 70.1542 108C46.4627 108 22 148.637 22 167.998Z"
              fill="url(#paint7_radial_26_1734)"
            />
            <defs>
              <filter
                id="filter0_f_26_1734"
                x="39"
                y="148"
                width="138"
                height="52"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="6.5"
                  result="effect1_foregroundBlur_26_1734"
                />
              </filter>
              <radialGradient
                id="paint0_radial_26_1734"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(152.009 147.713) rotate(90) scale(35.0549 42.8972)"
              >
                <stop stop-color="#524F4F" offset="0"/>
                <stop offset="1" stop-color="#413F3F"/>
              </radialGradient>
              <linearGradient
                id="paint1_linear_26_1734"
                x1="90.5"
                y1="26"
                x2="142"
                y2="177.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#AFB3B0" offset="0"/>
                <stop offset="0.826394" stop-color="#878787"/>
                <stop offset="1" stop-color="#747474"/>
              </linearGradient>
              <linearGradient
                id="paint2_linear_26_1734"
                x1="63.5356"
                y1="10.9951"
                x2="63.5356"
                y2="27.9951"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#CECECE" offset="0"/>
                <stop offset="1" stop-color="#7F7F7F"/>
              </linearGradient>
              <linearGradient
                id="paint3_linear_26_1734"
                x1="71"
                y1="31.3931"
                x2="71"
                y2="48.3931"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#AFB3B0" offset="0"/>
                <stop offset="1" stop-color="#747474"/>
              </linearGradient>
              <linearGradient
                id="paint4_linear_26_1734"
                x1="64.6843"
                y1="47.3774"
                x2="64.2136"
                y2="141.355"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#747474" stop-opacity="0.29" offset="0"/>
                <stop offset="0.50868" stop-color="#7F7F7F" stop-opacity="0.17"/>
                <stop offset="1" stop-color="#747474" stop-opacity="0.33"/>
              </linearGradient>
              <linearGradient
                id="paint5_linear_26_1734"
                x1="8.68429"
                y1="0"
                x2="7.9876"
                y2="114.334"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#747474" stop-opacity="0.29" offset="0"/>
                <stop offset="0.50868" stop-color="#7F7F7F" stop-opacity="0.17"/>
                <stop offset="1" stop-color="#747474" stop-opacity="0.33"/>
              </linearGradient>
              <linearGradient
                id="paint6_linear_26_1734"
                x1="8.68429"
                y1="0"
                x2="8.21361"
                y2="93.9774"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#747474" stop-opacity="0.29" offset="0"/>
                <stop offset="0.50868" stop-color="#7F7F7F" stop-opacity="0.17"/>
                <stop offset="1" stop-color="#747474" stop-opacity="0.33"/>
              </linearGradient>
              <radialGradient
                id="paint7_radial_26_1734"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(74.9907 147.713) rotate(90) scale(35.0549 42.8972)"
              >
                <stop stop-color="#524F4F" offset="0"/>
                <stop offset="1" stop-color="#413F3F"/>
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div class="right">
          <div class="menu">
            <svg
              width="205"
              height="200"
              viewBox="0 0 205 200"
              fill="none"
              class="trash-image"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M205 167.998C205 187.358 170.654 182.442 146.963 182.442C123.271 182.442 115 162.415 115 143.055C115 123.695 133.154 108 156.846 108C180.537 108 205 148.637 205 167.998Z"
                fill="url(#paint0_radial_26_1734)"
              />
              <g filter="url(#filter0_f_26_1734)">
                <ellipse
                  cx="108"
                  cy="174"
                  rx="56"
                  ry="13"
                  fill="black"
                  fill-opacity="0.29"
                />
              </g>
              <path
                d="M41.9835 40.7343C40.9337 32.9358 46.9984 26 54.8673 26H160.085C167.971 26 174.04 32.9634 172.964 40.7749L155.047 170.775C154.16 177.208 148.663 182 142.169 182H72.3673C65.8579 182 60.3519 177.186 59.4835 170.734L41.9835 40.7343Z"
                fill="url(#paint1_linear_26_1734)"
              />
              <rect
                x="37.5356"
                y="10.9951"
                width="52"
                height="17"
                rx="8.5"
                transform="rotate(-12.2071 37.5356 10.9951)"
                fill="url(#paint2_linear_26_1734)"
              />
              <rect
                y="31.3931"
                width="142"
                height="17"
                rx="8.5"
                transform="rotate(-12.2071 0 31.3931)"
                fill="url(#paint3_linear_26_1734)"
              />
              <rect
                x="56"
                y="47.3774"
                width="17.3686"
                height="95.1972"
                rx="8.68429"
                transform="rotate(-7.86739 56 47.3774)"
                fill="url(#paint4_linear_26_1734)"
              />
              <rect
                width="17.3686"
                height="115.82"
                rx="8.68429"
                transform="matrix(-0.990588 -0.136881 -0.136881 0.990588 160.236 47.3774)"
                fill="url(#paint5_linear_26_1734)"
              />
              <rect
                width="17.3686"
                height="95.1972"
                rx="8.68429"
                transform="matrix(0.99934 -0.036312 -0.036312 -0.99934 100.734 138.481)"
                fill="url(#paint6_linear_26_1734)"
              />
              <path
                d="M22 167.998C22 187.358 56.3459 182.442 80.0373 182.442C103.729 182.442 112 162.415 112 143.055C112 123.695 93.8456 108 70.1542 108C46.4627 108 22 148.637 22 167.998Z"
                fill="url(#paint7_radial_26_1734)"
              />
              <defs>
                <filter
                  id="filter0_f_26_1734"
                  x="39"
                  y="148"
                  width="138"
                  height="52"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="6.5"
                    result="effect1_foregroundBlur_26_1734"
                  />
                </filter>
                <radialGradient
                  id="paint0_radial_26_1734"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(152.009 147.713) rotate(90) scale(35.0549 42.8972)"
                >
                  <stop stop-color="#524F4F" offset="0"/>
                  <stop offset="1" stop-color="#413F3F"/>
                </radialGradient>
                <linearGradient
                  id="paint1_linear_26_1734"
                  x1="90.5"
                  y1="26"
                  x2="142"
                  y2="177.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#AFB3B0" offset="0"/>
                  <stop offset="0.826394" stop-color="#878787"/>
                  <stop offset="1" stop-color="#747474"/>
                </linearGradient>
                <linearGradient
                  id="paint2_linear_26_1734"
                  x1="63.5356"
                  y1="10.9951"
                  x2="63.5356"
                  y2="27.9951"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CECECE" offset="0"/>
                  <stop offset="1" stop-color="#7F7F7F"/>
                </linearGradient>
                <linearGradient
                  id="paint3_linear_26_1734"
                  x1="71"
                  y1="31.3931"
                  x2="71"
                  y2="48.3931"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#AFB3B0" offset="0"/>
                  <stop offset="1" stop-color="#747474"/>
                </linearGradient>
                <linearGradient
                  id="paint4_linear_26_1734"
                  x1="64.6843"
                  y1="47.3774"
                  x2="64.2136"
                  y2="141.355"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#747474" stop-opacity="0.29" offset="0"/>
                  <stop
                    offset="0.50868"
                    stop-color="#7F7F7F"
                    stop-opacity="0.17"
                  />
                  <stop offset="1" stop-color="#747474" stop-opacity="0.33"/>
                </linearGradient>
                <linearGradient
                  id="paint5_linear_26_1734"
                  x1="8.68429"
                  y1="0"
                  x2="7.9876"
                  y2="114.334"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#747474" stop-opacity="0.29" offset="0"/>
                  <stop
                    offset="0.50868"
                    stop-color="#7F7F7F"
                    stop-opacity="0.17"
                  />
                  <stop offset="1" stop-color="#747474" stop-opacity="0.33"/>
                </linearGradient>
                <linearGradient
                  id="paint6_linear_26_1734"
                  x1="8.68429"
                  y1="0"
                  x2="8.21361"
                  y2="93.9774"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#747474" stop-opacity="0.29" offset="0"/>
                  <stop
                    offset="0.50868"
                    stop-color="#7F7F7F"
                    stop-opacity="0.17"
                  />
                  <stop offset="1" stop-color="#747474" stop-opacity="0.33"/>
                </linearGradient>
                <radialGradient
                  id="paint7_radial_26_1734"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(74.9907 147.713) rotate(90) scale(35.0549 42.8972)"
                >
                  <stop stop-color="#524F4F" offset="0"/>
                  <stop offset="1" stop-color="#413F3F"/>
                </radialGradient>
              </defs>
            </svg>
            <ul>
              <li on:click={() => gotoGame({game: 'adventure', displayName: 'Aventura'})}>
                <p>Aventura</p>
                <div class="icon adventure"></div>
              </li>
              <li on:click={() => gotoGame({game: 'casually', displayName:'Casual'})}>
                <p>Casual</p>
                <div class="icon eventual"></div>
              </li>
              <li on:click={() => gotoGame({game: 'arcade', displayName: 'Ação'})}>
                <p>Ação</p>
                <div class="icon action"></div>
              </li>
            </ul>
            <button class="btn-new-game" on:click={(event) => active(event)}>
              <Play/>
            </button>
          </div>
        </div>
      </main>
    </div>
  </main>
{/if}


<style lang="scss">
  .page {
    background-color: transparent;
    display: flex;

    .card {
      position: relative;
      overflow: hidden;
      width: 100%;
      height: 500px;
      max-width: 800px;
      background-color: rgb(var(--bg-card-color));
      border-radius: var(--brd-radius);
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: column;
      margin: auto;
      box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
      cursor: url(../lib/assets/cursors/cursor.png), default;
      @media (max-width: 800px) {
        border-radius: 0;
        height: 100%;
      }
      @media (max-width: 700px) {
        flex-direction: column;
        width: 100%;
      }

      & header {
        width: 100%;
        height: 90px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.5em;
        z-index: 100000;

        & .profile {
          position: relative;
          width: 250px;
          height: 50px;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          cursor: url(../lib/assets/cursors/pointer.png), pointer;

          & img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            pointer-events: none;
          }

          ul {
            display: flex;
            flex-direction: column;

            li {
              margin-left: 0.5em;
              font-size: var(--fs-p);
              list-style: none;
              width: 200px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              text-align: start;
              @media (max-width: 800px) {
                width: 200px;
              }
              @media (max-width: 700px) {
                width: 100px;
              }

              &:last-child {
                display: flex;
                align-items: center;
                justify-content: flex-start;
                width: 20px;
              }
            }
          }
        }

        & .score {
          display: flex;
          align-items: center;
          justify-content: center;
          width: max-content;
          column-gap: 0.5em;

          & .col {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            width: max-content;
          }

          & .navigate {
            width: 1.2em;
            height: 1.2em;
            cursor: url(../lib/assets/cursors/pointer.png), pointer;
            border: none;
            outline: none;
            background-color: transparent;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          h3 {
            font-size: var(--fs-h3);
            animation: sky-color 60s linear 0s forwards infinite;
            transition: color 1s ease-out;
          }

          h2 {
            font-size: var(--fs-h2);
            color: rgb(var(--text-primary));
          }
        }
      }

      & main {
        width: 100%;
        height: calc(100% - 70px);
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        padding: 0.5em;
        position: relative;

        & .left {
          position: relative;
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;
          flex-direction: column;
          row-gap: 1em;
          @media (max-width: 800px) {
            position: absolute;
            top: 20%;
            left: 0.5em;
          }
          @media (max-width: 700px) {
            position: absolute;
            top: 20%;
            left: 0.5em;
          }

          & svg {
            width: 170px;
            height: 170px;
          }

          & button {
            width: 100%;
            height: 50px;
            display: flex;
            font-size: var(--fs-p);
            align-items: center;
            justify-content: center;
            background-color: rgba(var(--primary-color), 0.5);
            border-radius: var(--brd-radius);
            color: rgb(255, 255, 255);
            padding: 0.5em;
            z-index: 10000000;
            cursor: url(../lib/assets/cursors/pointer.png), pointer;
            backdrop-filter: blur(62px);
            position: absolute;
            bottom: 0;
            left: 0;
          }
        }

        & .right {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          row-gap: 1em;
          @media (max-width: 800px) {
            position: absolute;
            bottom: 0.5em;
            right: 0.5em;
          }
          @media (max-width: 700px) {
            position: absolute;
            bottom: 0.5em;
            right: 0.5em;
          }

          & .menu {
            position: relative;
            overflow-y: hidden;
            width: 200px;
            height: 300px;
            display: flex;
            align-items: flex-end;
            justify-content: center;

            & .trash-image {
              position: absolute;
              left: 0;
              right: 0;
              bottom: 0;
              width: 170px;
              height: 170px;
            }

            &:not(.active) {
              ul {
                top: 0;
                animation: active-verso linear 200ms forwards;
                animation-delay: 400ms;

                li {
                  width: 100%;
                  animation: expand-verso linear 200ms forwards;
                  animation-delay: 200ms;

                  & svg {
                    left: initial;
                    right: 0;
                  }

                  & p {
                    left: 50%;
                    opacity: 1;
                    transform: translateX(-50%);
                    animation: visibility-verso linear 400ms forwards;
                  }
                }
              }
            }

            &.active {
              ul {
                top: 100%;
                animation: active linear 200ms forwards;

                li {
                  animation: expand linear 200ms forwards;
                  animation-delay: 200ms;

                  & .icon {
                    left: initial;
                    right: 0;
                  }

                  & p {
                    animation: visibility linear 400ms forwards;
                    animation-delay: 200ms;
                  }
                }
              }
            }

            & ul {
              position: absolute;
              top: 100%;
              left: 0;
              right: 0;
              bottom: 0;
              width: 100%;
              height: 300px;
              max-height: 300px;
              display: flex;
              align-items: flex-end;
              justify-content: flex-end;
              flex-direction: column;
              transition: top linear 200ms;
              row-gap: 0.5em;
              overflow-y: auto;
              padding-bottom: 60px;

              & li {
                position: relative;
                width: 50px;
                height: 50px;
                min-height: 50px;
                color: rgb(255, 255, 255);
                background-color: rgba(var(--primary-color), 0.5);
                border-radius: var(--brd-radius);
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: var(--fs-p);
                overflow: hidden;
                cursor: url(../lib/assets/cursors/pointer.png), pointer;
                backdrop-filter: blur(62px);

                & .icon {
                  width: 35px;
                  height: 35px;
                  background-position: center center;
                  background-repeat: no-repeat;
                  background-size: contain;
                  position: absolute;
                  left: 50%;
                  transform: translateX(-50%);

                  &.adventure {
                    background-image: url("https://firebasestorage.googleapis.com/v0/b/reciclage-game-416af.appspot.com/o/icons%2Fadventure.png?alt=media&token=879df8a7-0ffb-4e2a-9853-73ef3851a5c7");
                  }

                  &.eventual {
                    background-image: url("https://firebasestorage.googleapis.com/v0/b/reciclage-game-416af.appspot.com/o/icons%2Fdice.png?alt=media&token=bf204161-731d-4890-9453-65eb4768f835");
                  }

                  &.action {
                    background-image: url("https://firebasestorage.googleapis.com/v0/b/reciclage-game-416af.appspot.com/o/icons%2Ftruck.png?alt=media&token=d0b0eaf4-1ee0-4e61-b5e1-a435ac1c4193");
                  }
                }

                & p {
                  position: absolute;
                  left: -500px;
                  opacity: 0;
                }
              }
            }

            & button {
              width: 100%;
              height: 50px;
              display: flex;
              font-size: var(--fs-p);
              align-items: center;
              justify-content: center;
              background-color: rgba(var(--primary-color), 0.5);
              border-radius: var(--brd-radius);
              color: rgb(255, 255, 255);
              padding: 0.5em;
              z-index: 10000000;
              cursor: url(../lib/assets/cursors/pointer.png), pointer;
              backdrop-filter: blur(62px);
            }
          }
        }
      }
    }
  }

  @keyframes active {
    to {
      top: 0;
    }
  }

  @keyframes active-verso {
    to {
      top: 100%;
    }
  }

  @keyframes expand {
    to {
      width: 100%;
    }
  }

  @keyframes expand-verso {
    to {
      width: 50px;
    }
  }

  @keyframes visibility {
    to {
      left: 50%;
      opacity: 1;
      transform: translateX(-50%);
    }
  }

  @keyframes visibility-verso {
    to {
      left: -300px;
      opacity: 0;
      transform: translateX(0);
    }
  }
</style>
