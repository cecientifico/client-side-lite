<script>
  import {onMount} from "svelte";
  import Music from "$lib/Music.svelte";
  import {connectionAPI, isMusic} from "../../stores";
  import axios from "axios";
  import {getAuth} from "firebase/auth";

  const auth = getAuth();
  let userName = auth.currentUser?.displayName;
  let userEmail = auth.currentUser?.email;
  let userID = auth.currentUser?.uid;
  let modality = "arcade";

  onMount(() => {
    const score = document.querySelector("#score");
    const containerWrapper = document.querySelector(".container-wrapper");
    const gameArea = document.querySelector("#gameArea");
    const truck = document.querySelector(".truck");

    let player = {speed: 15, score: 0};

    let keys = {
      ArrowUp: false,
      ArrowDown: false,
      ArrowRight: false,
      ArrowLeft: false,
    };

    containerWrapper.addEventListener("click", start);
    document.addEventListener("keydown", pressOn);
    document.addEventListener("keyup", pressOff);
    const buttons = document.querySelectorAll(".controll-game button");

    buttons.forEach(btn => {
      btn.addEventListener("touchstart", (e) => {
        keys[e.srcElement.dataset.dir] = true;
        let road = gameArea.getBoundingClientRect();

        if (keys.ArrowDown && player.y < road.bottom - 237) {
          player.y += player.speed;
        }
      });
      btn.addEventListener("touchend", (e) => {
        keys[e.srcElement.dataset.dir] = false;
      })
    });

    function moveLines() {
      let lines = document.querySelectorAll(".line");

      lines.forEach(function (item) {
        if (item.y > 1500) {
          item.y -= 1500;
        }
        item.y += player.speed;
        item.style.top = item.y + "px";
      });
    }

    function isCollide(a, b) {
      var aRect = a.getBoundingClientRect();
      var bRect = b.getBoundingClientRect();
      return !(
        aRect.bottom < bRect.top ||
        aRect.top > bRect.bottom ||
        aRect.right < bRect.left ||
        aRect.left > bRect.right
      );
    }

    function moveDrop(car) {
      let ele = document.querySelectorAll(".drop");

      ele.forEach(function (item) {
        if (isCollide(car, item)) {
          endGame();
        }
        if (item.y > 1500) {
          item.y = -600;
          const random = Math.floor(Math.random() * (gameArea.clientWidth - 50));
          truck.style.left = (random - (truck.clientWidth / 2)) + "px";

          if (truck.style.animation != "truck 3s linear infinite") {
            truck.style.animation = "truck 3s linear infinite";
          }
          item.style.left = random + "px";
        }
        item.y += player.speed;
        item.style.top = item.y + "px";
      });
    }

    function playGame() {
      let car = document.querySelector(".car");
      let road = gameArea.getBoundingClientRect();

      moveLines();
      moveDrop(car);

      if (player.start) {
        if (keys.ArrowUp && player.y > road.top - 542) {
          player.y -= player.speed;
        }
        if (keys.ArrowDown && player.y < road.bottom - 237) {
          player.y += player.speed;
        }
        if (keys.ArrowLeft && player.x > 0) {
          player.x -= player.speed;
        }
        if (keys.ArrowRight && player.x < road.width - 54) {
          player.x += player.speed;
        }
        car.style.left = player.x + "px";
        car.style.top = player.y + "px";
        window.requestAnimationFrame(playGame);
        player.score++;
        score.innerText = player.score;
      }
    }

    function pressOn(e) {
      e.preventDefault();
      keys[e.key] = true;
    }

    function pressOff(e) {
      e.preventDefault();
      keys[e.key] = false;
    }

    async function endGame() {
      player.start = false;
      containerWrapper.classList.remove("hide");
      truck.style.animation = "";
      isMusic.update(value => {
        return false
      })
      if(auth.currentUser.isAnonymous) return
      axios.post(`${connectionAPI}/new-result`, {
        userName,
        userEmail,
        userID,
        modality,
        userResult: player.score,
      })
        .then((response) => {
          console.log(response)
        }).catch((error) => {
        console.log(error)
      })
    }

    function start() {
      containerWrapper.classList.add("hide");

      gameArea.innerHTML = "";
      player.start = true;
      player.score = 0;

      // criar linhas do asphalto
      for (let x = 0; x < 10; x++) {
        let div = document.createElement("div");
        div.classList.add("line");
        div.y = x * 150;
        div.style.top = x * 150 + "px";
        gameArea.appendChild(div);
      }

      let car = document.createElement("div");
      window.requestAnimationFrame(playGame);

      car.setAttribute("class", "car");
      gameArea.appendChild(car);

      player.x = car.offsetLeft;
      player.y = car.offsetTop;

      for (let x = 0; x < 3; x++) {
        let drop = document.createElement("div");
        drop.classList.add("drop");
        drop.y = (x + 1) * 600 * -1;
        drop.style.top = drop.y + "px";

        const random = Math.floor(Math.random() * (gameArea.clientWidth - drop.clientWidth));
        truck.style.left = (random - (truck.clientWidth / 2)) + "px";
        drop.style.left = random + "px";

        drop.style.backgroundImage = randomBackgroundDrop();
        gameArea.appendChild(drop);
      }
    }

    function randomBackgroundDrop() {
      const a = Math.floor(Math.random() * 5)
      return "url('http://localhost:5173/src/lib/assets/images/icons/organico-" + a + ".png')"
    }
  })

</script>
<div class="container">
  <div class="container-wrapper">
    <Music/>
    <h1>Clique para começar</h1>
    <p>Desvie o maximo possivel dos objetos </p>
    <!-- BOTAO DE VOLLUME VAI AQUI -->
  </div>

  <div class="game-content">
    <h1 class="most-score">
      Score:
      <span id="score">0</span>
    </h1>
    <div class="content-game-area">
      <img class="truck" src="http://localhost:5173/src/lib/assets/images/Group-65.png">
      <div id="gameArea"></div>
    </div>
  </div>
</div>

<div class="controll-game">
  <div>
    <button data-dir="ArrowUp">top</button>
  </div>
  <div>
    <button data-dir="ArrowLeft">left</button>
    <button data-dir="ArrowRight">right</button>
  </div>
  <div>
    <button data-dir="ArrowDown">bottom</button>
  </div>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

    * {
        margin: 0px;
        padding: 0px;
        font-family: 'Inter', sans-serif;

    }

    body {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }

</style>
