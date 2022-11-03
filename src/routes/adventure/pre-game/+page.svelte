<script lang="ts">
  type Game = {
    game: string;
    data: any;
  }
  import {currentGame} from '../../../stores';
  import {goto,beforeNavigate, afterNavigate} from "$app/navigation";
  import Cloud from "$lib/Cloud.svelte";
  import Music from "$lib/Music.svelte";

  let dumpsterSelected = [];

  const changeInitGame = () => {
    const buttonInitGame = document.querySelector<HTMLButtonElement>('.init-game');
    if (dumpsterSelected.length < 1) {
      buttonInitGame.disabled = true;
      return
    }
    buttonInitGame.disabled = false;
  }
  const selectedItem = (event) => {
    if (dumpsterSelected.length < 1) {
      if (dumpsterSelected.filter(value => value === event.target.id).length === 0) {
        dumpsterSelected.push(event.target.id);
        changeInitGame()
        return;
      }
      dumpsterSelected = dumpsterSelected.filter(value => value !== event.target.id);
      changeInitGame()
      return;
    }
    if (dumpsterSelected.filter(value => value === event.target.id).length > 0) {
      dumpsterSelected = dumpsterSelected.filter(value => value !== event.target.id);
      changeInitGame()
      return
    }
    event.target.checked = false;
    changeInitGame()
  }
  const confirmGameMemory = () => {
    goto('/adventure');

    currentGame.update(value => {
      return {
        game: 'adventure',
        data: {
          dumpsterSelected: dumpsterSelected,
        }
      }
    })
  }
</script>
<main class="page">
  <div class="card">
    <Cloud/>
    <div class="container">
      <header>
        <h3>O que vamos coletar hoje?</h3>
        <p>Selecione a modalidade</p>
      </header>
      <main>
        <div class="row">
          <div class="dumpsters">
            <div class="checkbox">
              <label class="checkbox-wrapper">
                <input type="checkbox" class="checkbox-input" id="paper"
                       on:change={(event) => selectedItem(event)}/>
                <span class="checkbox-tile paper">
                      <span class="checkbox-icon">
                        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.75 17.5H14.5833H61.25" stroke="#B4CFFC" stroke-width="4" stroke-linecap="round"
                                stroke-linejoin="round"/>
                          <path
                            d="M55.4166 17.5002V58.3335C55.4166 59.8806 54.802 61.3643 53.708 62.4583C52.6141 63.5522 51.1303 64.1668 49.5833 64.1668H20.4166C18.8695 64.1668 17.3858 63.5522 16.2918 62.4583C15.1978 61.3643 14.5833 59.8806 14.5833 58.3335V17.5002M23.3333 17.5002V11.6668C23.3333 10.1197 23.9478 8.636 25.0418 7.54204C26.1358 6.44808 27.6195 5.8335 29.1666 5.8335H40.8333C42.3803 5.8335 43.8641 6.44808 44.958 7.54204C46.052 8.636 46.6666 10.1197 46.6666 11.6668V17.5002"
                            stroke="#B4CFFC" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M29.1667 32.0835V49.5835" stroke="#B4CFFC" stroke-width="4" stroke-linecap="round"
                                stroke-linejoin="round"/>
                          <path d="M40.8333 32.0835V49.5835" stroke="#B4CFFC" stroke-width="4" stroke-linecap="round"
                                stroke-linejoin="round"/>
                          </svg>
                      </span>
                      <span class="checkbox-label">Papel</span>
                    </span>
              </label>
            </div>
            <div class="checkbox">
              <label class="checkbox-wrapper">
                <input type="checkbox" class="checkbox-input" id="plastic"
                       on:change={(event) => selectedItem(event)}/>
                <span class="checkbox-tile plastic">
                      <span class="checkbox-icon">
                        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.75 17.5H14.5833H61.25" stroke="#B4CFFC" stroke-width="4" stroke-linecap="round"
                                stroke-linejoin="round"/>
                          <path
                            d="M55.4166 17.5002V58.3335C55.4166 59.8806 54.802 61.3643 53.708 62.4583C52.6141 63.5522 51.1303 64.1668 49.5833 64.1668H20.4166C18.8695 64.1668 17.3858 63.5522 16.2918 62.4583C15.1978 61.3643 14.5833 59.8806 14.5833 58.3335V17.5002M23.3333 17.5002V11.6668C23.3333 10.1197 23.9478 8.636 25.0418 7.54204C26.1358 6.44808 27.6195 5.8335 29.1666 5.8335H40.8333C42.3803 5.8335 43.8641 6.44808 44.958 7.54204C46.052 8.636 46.6666 10.1197 46.6666 11.6668V17.5002"
                            stroke="#B4CFFC" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M29.1667 32.0835V49.5835" stroke="#B4CFFC" stroke-width="4" stroke-linecap="round"
                                stroke-linejoin="round"/>
                          <path d="M40.8333 32.0835V49.5835" stroke="#B4CFFC" stroke-width="4" stroke-linecap="round"
                                stroke-linejoin="round"/>
                          </svg>
                      </span>
                      <span class="checkbox-label">Plástico</span>
                    </span>
              </label>
            </div>
            <div class="checkbox">
              <label class="checkbox-wrapper">
                <input type="checkbox" class="checkbox-input" id="glass"
                       on:change={(event) => selectedItem(event)}/>
                <span class="checkbox-tile glass">
                      <span class="checkbox-icon">
                        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.75 17.5H14.5833H61.25" stroke="#B4CFFC" stroke-width="4" stroke-linecap="round"
                                stroke-linejoin="round"/>
                          <path
                            d="M55.4166 17.5002V58.3335C55.4166 59.8806 54.802 61.3643 53.708 62.4583C52.6141 63.5522 51.1303 64.1668 49.5833 64.1668H20.4166C18.8695 64.1668 17.3858 63.5522 16.2918 62.4583C15.1978 61.3643 14.5833 59.8806 14.5833 58.3335V17.5002M23.3333 17.5002V11.6668C23.3333 10.1197 23.9478 8.636 25.0418 7.54204C26.1358 6.44808 27.6195 5.8335 29.1666 5.8335H40.8333C42.3803 5.8335 43.8641 6.44808 44.958 7.54204C46.052 8.636 46.6666 10.1197 46.6666 11.6668V17.5002"
                            stroke="#B4CFFC" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M29.1667 32.0835V49.5835" stroke="#B4CFFC" stroke-width="4" stroke-linecap="round"
                                stroke-linejoin="round"/>
                          <path d="M40.8333 32.0835V49.5835" stroke="#B4CFFC" stroke-width="4" stroke-linecap="round"
                                stroke-linejoin="round"/>
                        </svg>
                      </span>
                      <span class="checkbox-label">Vidro</span>
                    </span>
              </label>
            </div>
            <div class="checkbox">
              <label class="checkbox-wrapper">
                <input type="checkbox" class="checkbox-input" id="eletronic"
                       on:change={(event) => selectedItem(event)}/>
                <span class="checkbox-tile eletronic">
                      <span class="checkbox-icon">
                        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.75 17.5H14.5833H61.25" stroke="#B4CFFC" stroke-width="4" stroke-linecap="round"
                                stroke-linejoin="round"/>
                          <path
                            d="M55.4166 17.5002V58.3335C55.4166 59.8806 54.802 61.3643 53.708 62.4583C52.6141 63.5522 51.1303 64.1668 49.5833 64.1668H20.4166C18.8695 64.1668 17.3858 63.5522 16.2918 62.4583C15.1978 61.3643 14.5833 59.8806 14.5833 58.3335V17.5002M23.3333 17.5002V11.6668C23.3333 10.1197 23.9478 8.636 25.0418 7.54204C26.1358 6.44808 27.6195 5.8335 29.1666 5.8335H40.8333C42.3803 5.8335 43.8641 6.44808 44.958 7.54204C46.052 8.636 46.6666 10.1197 46.6666 11.6668V17.5002"
                            stroke="#B4CFFC" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M29.1667 32.0835V49.5835" stroke="#B4CFFC" stroke-width="4" stroke-linecap="round"
                                stroke-linejoin="round"/>
                          <path d="M40.8333 32.0835V49.5835" stroke="#B4CFFC" stroke-width="4" stroke-linecap="round"
                                stroke-linejoin="round"/>
                        </svg>
                      </span>
                      <span class="checkbox-label">Elétronico</span>
                    </span>
              </label>
            </div>
            <div class="checkbox">
              <label class="checkbox-wrapper">
                <input type="checkbox" class="checkbox-input" id="organic"
                       on:change={(event) => selectedItem(event)}/>
                <span class="checkbox-tile organic">
                      <span class="checkbox-icon">
                        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.75 17.5H14.5833H61.25" stroke="#B4CFFC" stroke-width="4" stroke-linecap="round"
                                stroke-linejoin="round"/>
                          <path
                            d="M55.4166 17.5002V58.3335C55.4166 59.8806 54.802 61.3643 53.708 62.4583C52.6141 63.5522 51.1303 64.1668 49.5833 64.1668H20.4166C18.8695 64.1668 17.3858 63.5522 16.2918 62.4583C15.1978 61.3643 14.5833 59.8806 14.5833 58.3335V17.5002M23.3333 17.5002V11.6668C23.3333 10.1197 23.9478 8.636 25.0418 7.54204C26.1358 6.44808 27.6195 5.8335 29.1666 5.8335H40.8333C42.3803 5.8335 43.8641 6.44808 44.958 7.54204C46.052 8.636 46.6666 10.1197 46.6666 11.6668V17.5002"
                            stroke="#B4CFFC" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M29.1667 32.0835V49.5835" stroke="#B4CFFC" stroke-width="4" stroke-linecap="round"
                                stroke-linejoin="round"/>
                          <path d="M40.8333 32.0835V49.5835" stroke="#B4CFFC" stroke-width="4" stroke-linecap="round"
                                stroke-linejoin="round"/>
                        </svg>
                      </span>
                      <span class="checkbox-label">Orgânico</span>
                    </span>
              </label>
            </div>
            <div class="checkbox">
              <label class="checkbox-wrapper">
                <input type="checkbox" class="checkbox-input" id="metal"
                       on:change={(event) => selectedItem(event)}/>
                <span class="checkbox-tile metal">
                      <span class="checkbox-icon">
                        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.75 17.5H14.5833H61.25" stroke="#B4CFFC" stroke-width="4" stroke-linecap="round"
                                stroke-linejoin="round"/>
                          <path
                            d="M55.4166 17.5002V58.3335C55.4166 59.8806 54.802 61.3643 53.708 62.4583C52.6141 63.5522 51.1303 64.1668 49.5833 64.1668H20.4166C18.8695 64.1668 17.3858 63.5522 16.2918 62.4583C15.1978 61.3643 14.5833 59.8806 14.5833 58.3335V17.5002M23.3333 17.5002V11.6668C23.3333 10.1197 23.9478 8.636 25.0418 7.54204C26.1358 6.44808 27.6195 5.8335 29.1666 5.8335H40.8333C42.3803 5.8335 43.8641 6.44808 44.958 7.54204C46.052 8.636 46.6666 10.1197 46.6666 11.6668V17.5002"
                            stroke="#B4CFFC" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M29.1667 32.0835V49.5835" stroke="#B4CFFC" stroke-width="4" stroke-linecap="round"
                                stroke-linejoin="round"/>
                          <path d="M40.8333 32.0835V49.5835" stroke="#B4CFFC" stroke-width="4" stroke-linecap="round"
                                stroke-linejoin="round"/>
                        </svg>
                      </span>
                      <span class="checkbox-label">Metal</span>
                    </span>
              </label>
            </div>
          </div>
        </div>
        <div class="row">
          <Music/>
          <button class="init-game" disabled on:click={() => confirmGameMemory()}>Iniciar</button>
        </div>
      </main>
    </div>
    <svg class="trash-image" width="177" height="200" viewBox="0 0 177 200" fill="none"
         xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_f_207_15)">
        <ellipse cx="108" cy="174" rx="56" ry="13" fill="black" fill-opacity="0.29"/>
      </g>
      <path
        d="M41.9835 40.7343C40.9337 32.9358 46.9984 26 54.8673 26H160.085C167.971 26 174.04 32.9634 172.964 40.7749L155.047 170.775C154.16 177.208 148.663 182 142.169 182H72.3673C65.8579 182 60.3519 177.186 59.4835 170.734L41.9835 40.7343Z"
        fill="url(#paint0_linear_207_15)"/>
      <rect x="56" y="47.3774" width="17.3686" height="95.1972" rx="8.68429" transform="rotate(-7.86739 56 47.3774)"
            fill="url(#paint1_linear_207_15)"/>
      <rect width="17.3686" height="115.82" rx="8.68429"
            transform="matrix(-0.990588 -0.136881 -0.136881 0.990588 160.236 47.3774)"
            fill="url(#paint2_linear_207_15)"/>
      <rect width="17.3686" height="95.1972" rx="8.68429"
            transform="matrix(0.99934 -0.036312 -0.036312 -0.99934 100.734 138.481)" fill="url(#paint3_linear_207_15)"/>
      <rect x="37.5356" y="10.9951" width="52" height="17" rx="8.5" transform="rotate(-12.2071 37.5356 10.9951)"
            fill="url(#paint4_linear_207_15)"/>
      <rect y="31.3931" width="142" height="17" rx="8.5" transform="rotate(-12.2071 0 31.3931)"
            fill="url(#paint5_linear_207_15)"/>
      <defs>
        <filter id="filter0_f_207_15" x="39" y="148" width="138" height="52" filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="6.5" result="effect1_foregroundBlur_207_15"/>
        </filter>
        <linearGradient id="paint0_linear_207_15" x1="90.5" y1="26" x2="142" y2="177.5" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#AFB3B0"/>
          <stop offset="0.826394" stop-color="#878787"/>
          <stop offset="1" stop-color="#747474"/>
        </linearGradient>
        <linearGradient id="paint1_linear_207_15" x1="64.6843" y1="47.3774" x2="64.2136" y2="141.355"
                        gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#747474" stop-opacity="0.29"/>
          <stop offset="0.50868" stop-color="#7F7F7F" stop-opacity="0.17"/>
          <stop offset="1" stop-color="#747474" stop-opacity="0.33"/>
        </linearGradient>
        <linearGradient id="paint2_linear_207_15" x1="8.68429" y1="0" x2="7.9876" y2="114.334"
                        gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#747474" stop-opacity="0.29"/>
          <stop offset="0.50868" stop-color="#7F7F7F" stop-opacity="0.17"/>
          <stop offset="1" stop-color="#747474" stop-opacity="0.33"/>
        </linearGradient>
        <linearGradient id="paint3_linear_207_15" x1="8.68429" y1="0" x2="8.21361" y2="93.9774"
                        gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#747474" stop-opacity="0.29"/>
          <stop offset="0.50868" stop-color="#7F7F7F" stop-opacity="0.17"/>
          <stop offset="1" stop-color="#747474" stop-opacity="0.33"/>
        </linearGradient>
        <linearGradient id="paint4_linear_207_15" x1="63.5356" y1="10.9951" x2="63.5356" y2="27.9951"
                        gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#CECECE"/>
          <stop offset="1" stop-color="#7F7F7F"/>
        </linearGradient>
        <linearGradient id="paint5_linear_207_15" x1="71" y1="31.3931" x2="71" y2="48.3931"
                        gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#AFB3B0"/>
          <stop offset="1" stop-color="#747474"/>
        </linearGradient>
      </defs>
    </svg>
  </div>
</main>

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
      cursor: url(../../../lib/assets/cursors/cursor.png), default;
      @media (max-width: 800px) {
        border-radius: 0;
        height: 100%;
      }
      @media (max-width: 700px) {
        flex-direction: column;
        width: 100%;
      }

      & .trash-image {
        position: absolute;
        bottom: 0.5em;
        right: 0.5em;
        z-index: 0;
      }

      & .container {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1;

        & header {
          width: 100%;
          height: 3em;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          flex-direction: column;
          padding: 0.5em;
          color: rgb(var(--text-secondary));

          & h3 {
            font-size: var(--fs-h3);
          }

          & p {
            font-size: var(--fs-p);
          }
        }

        & main {
          width: 100%;
          height: calc(100% - 2.5em);
          padding: 0.5em;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;

          & .row {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            column-gap: 0.5em;

            &:nth-child(2) {
              display: flex;
              position: relative;
              height: 2.5em;
              align-items: center;
              column-gap: 0.5em;

              & button {
                width: 40%;
                height: 2em;
                background-color: rgb(var(--primary-color));
                color: rgb(255, 255, 255);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: var(--brd-radius);
                border: none;
                outline: none;
                transition: background-color linear 200ms;
                cursor: url(../../../lib/assets/cursors/pointer.png), pointer;
                backdrop-filter: blur(62px);
                &:disabled {
                  background-color: rgba(var(--primary-color), 0.5);
                }
              }
            }
          }

          & .dumpsters {
            display: grid;
            grid-template-columns: 7rem 7rem 7rem;
            grid-template-rows: 7rem 7rem;
            width: max-content;
            gap: 0.2em;

            @media (max-width: 700px) {
              grid-template-columns: 7rem 7rem;
              grid-template-rows: 7rem 7rem 7rem;
            }

            & .checkbox-input {
              clip: rect(0 0 0 0);
              clip-path: inset(100%);
              height: 1px;
              overflow: hidden;
              position: absolute;
              white-space: nowrap;
              width: 1px;

              &:checked + .checkbox-tile {
                &:before {
                  transform: scale(1);
                  opacity: 1;
                  background-color: #BA4BFF;
                  border-color: #a827fc;
                }
              }
            }

            & .checkbox-tile {
              cursor: url(../../../lib/assets/cursors/pointer.png), pointer;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              width: 7rem;
              min-height: 7rem;
              border-radius: 0.7rem;
              background-color: #fff;
              box-shadow: 0 5px 10px rgba(#000, 0.1);
              transition: 0.15s ease;
              position: relative;

              &.paper {
                background-color: #5895F9;
              }

              &.plastic {
                background-color: #FD5151;
              }

              &.glass {
                background-color: #2ECD51;
              }

              &.eletronic {
                background-color: #FF9900;
              }

              &.organic {
                background-color: #A9633C;
              }

              &.metal {
                background-color: #FFC83C;
              }

              &:before {
                content: "";
                position: absolute;
                display: block;
                width: 1.25rem;
                height: 1.25rem;
                border: 2px solid #b5bfd9;
                background-color: #fff;
                border-radius: 50%;
                top: 0.25rem;
                left: 0.25rem;
                opacity: 0;
                transform: scale(0);
                transition: 0.25s ease;
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='192' height='192' fill='%23FFFFFF' viewBox='0 0 256 256'%3E%3Crect width='256' height='256' fill='none'%3E%3C/rect%3E%3Cpolyline points='216 72.005 104 184 48 128.005' fill='none' stroke='%23FFFFFF' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'%3E%3C/polyline%3E%3C/svg%3E");
                background-size: 12px;
                background-repeat: no-repeat;
                background-position: 50% 50%;

              }

              &:hover {
                border-color: #2260ff;

                &:before {
                  transform: scale(1);
                  opacity: 1;
                }
              }
            }

            & .checkbox-label {
              font-size: calc(var(--fs-p) - 0.2em);
              color: rgb(240, 240, 240);
            }

            & .checkbox-icon {
              transition: .375s ease;
              color: #494949;

              svg {
                width: 4rem;
                height: 4rem;
              }
            }
          }
        }
      }
    }
  }

  @keyframes cloud {
    to {
      left: 100%;
    }
  }
</style>
