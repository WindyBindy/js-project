const gameBtnRef = document.querySelectorAll(".paper__btn");
const resultTextRef = document.querySelector(".paper__result");
const computerBtnRef = document.querySelector(".paper__button");
const computerRef = document.getElementById("computer");
const playerRef = document.getElementById("player");

let playerScore = 0;
let computerScore = 0;

const components = ["paper", "scissors", "rock"]

const getRandomComp = function () {
    const randomIndex = Math.round(Math.random() * 3)
    return components[randomIndex]
}


function gameResult(user, computer) {
    if (user === computer) {
        return "draw"
    }
    if ((user === "paper" && computer === "rock") || (user === "scissors" && computer === "paper") || (user === "rock" && computer === "scissors")) {
        return "won"
    } else {
        return "lost"
    }
}

gameBtnRef.forEach(btn => {
    btn.addEventListener("click", (event) => {
        const userCurrent = event.currentTarget.dataset.choice
        const computerChoice = getRandomComp();
        const result = gameResult(userCurrent, computerChoice)
        console.log(result)
        if (result === "won") {
            playerScore += 1
            resultTextRef.textContent = "Ви перемогли!"
            resultTextRef.style.color = "green"
            if (computerChoice) {
                computerBtnRef.textContent = `Варіант комп'ютера - ${computerChoice}`
            }

        } else if (result === "lost") {
            computerScore += 1;
            resultTextRef.textContent = "Виграв комп'ютер";
            resultTextRef.style.color = "red"
            if (computerChoice) {
                computerBtnRef.textContent = `Варіант комп'ютера - ${computerChoice}`
            }
        } else if (result === "draw") {
            resultTextRef.textContent = 'Нічия'
            resultTextRef.style.color = "black"
            if (computerChoice) {
                computerBtnRef.textContent = `Варіант комп'ютера - ${computerChoice}`
            }
        }
        computerRef.textContent = `Комп'ютер - ${computerScore}`
        playerRef.textContent = `Гравець - ${playerScore}`
    })
})



