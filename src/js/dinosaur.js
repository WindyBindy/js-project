const dino = document.getElementById("game__dino");
const cactus = document.getElementById("game__cactus");
const start = document.getElementById("start__button");
const endGame = document.getElementById("game__endgame")

let isGameRunning = false;
let isAlive = null;


function jump() {
    if (dino.classList != "jump") {
        dino.classList.add("jump");
        setTimeout(function () {
            dino.classList.remove("jump")
        },
            600)
    }
}


function handleKeyDown() {
    if (isGameRunning) {
        jump();
    }
}

document.addEventListener("keydown", handleKeyDown);


function startGame() {
    if (isGameRunning) return;

    isGameRunning = true;
    cactus.style.left = "575px";
    cactus.classList.add("cactus__anim");

    isAlive = setInterval(() => {
        let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
        let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

        if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {

            cactus.classList.remove("cactus__anim");
            clearInterval(isAlive);
            isGameRunning = false;
        }
    }, 10);
}



start.addEventListener("click", startGame);