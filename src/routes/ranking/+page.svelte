<script lang="ts">
  import axios from 'axios';
  import {getAuth, onAuthStateChanged} from "firebase/auth";
  import {connectionAPI} from "../../stores";
  import {onMount} from "svelte";

  let points = {
    modality: ['adventure', 'casually', 'arcade'],
    displayName: ['Aventura', 'Casual', 'Arcade'],
    index: 0,
    points: [],
    userRecord: 0,
  }
  let scoreLoaded = false;

  const auth = getAuth();

  onMount(async () => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        return;
      }
      if (user.isAnonymous) {
        scoreLoaded = true;
        return;
      }
      axios
        .get(`${connectionAPI}/user-results/${points.modality[points.index]}/${user.uid}`)
        .then((response) => {
          const results = response.data.result[points.modality[points.index]][0].results;
          points.userRecord = results;
          scoreLoaded = true;
          axios
            .get(`${connectionAPI}/all-results/${points.modality[points.index]}/`)
            .then((response) => {
              points.points = response.data.results;
              const ul = document.querySelector('.ranks')
              ul.innerHTML = ''
              points.points.forEach((value) => {
                const li = document.createElement('li');
                li.textContent = value.name + '-' + value[points.modality[points.index]][0].results
                ul.appendChild(li)
              })
              scoreLoaded = true;
            })
            .catch(() => {
              points.points = [];
              scoreLoaded = true;
            });
        })
        .catch(() => {
          points.userRecord = 0;
          scoreLoaded = true;
        });

    })
  })
  const turnModalityResults = async (type: number) => {
    scoreLoaded = false;
    points.index = type;

    axios
      .get(`${connectionAPI}/user-results/${points.modality[points.index]}/${auth.currentUser.uid}`)
      .then((response) => {
        const results = response.data.result[points.modality[points.index]][0].results;
        points.userRecord = results;
        scoreLoaded = true;
      })
      .catch(() => {
        points.userRecord = 0;
        scoreLoaded = true;
      });
    axios
      .get(`${connectionAPI}/all-results/${points.modality[points.index]}/`)
      .then((response) => {
        points.points = response.data.results;
        const ul = document.querySelector('.ranks')
        ul.innerHTML = ''
        points.points.forEach((value) => {
          const li = document.createElement('li');
          li.textContent =  value.name + '-' + value[points.modality[points.index]][0].results
          ul.appendChild(li)
        })
        scoreLoaded = true;
        scoreLoaded = true;
      })
      .catch(() => {
        points.points = [];
        scoreLoaded = true;
      });


  }
</script>
<main class="page">
  <div class="card">
    <header>
      <nav>
        <div on:click={() => turnModalityResults(0)}>Aventura</div>
        <div on:click={() => turnModalityResults(1)}>Casual</div>
        <div on:click={() => turnModalityResults(2)}>Arcade</div>
      </nav>
    </header>
    <main>
      <div class="user-record">
        <h3>{points.userRecord}</h3>
        <p>Seu recorde</p>
      </div>
      <div class="world-ranking">
        <p>Ranking mundial</p>
        <ul class="ranks">

        </ul>
      </div>
    </main>

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
        height: 2.5em;
        background-color: red;
        display: flex;
        align-items: center;
        justify-content: center;

        & nav {
          width: max-content;
          height: max-content;
          display: flex;
          align-items: center;
          justify-content: center;
          column-gap: 0.5em;

          & div {
            cursor: url(../../lib/assets/cursors/pointer.png), pointer;
          }
        }
      }

      & main {
        width: 100%;
        height: calc(100% - 2.5em);
        background-color: blue;

        & .user-record {
          width: 200px;
          height: max-content;
          background-color: yellow;
          margin: 0.5em;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column-reverse;

          & p {
            font-size: var(--fs-p);
          }

          & h3 {
            font-size: var(--fs-h3);
          }
        }
      }
    }
  }
</style>