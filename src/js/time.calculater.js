

const inputRef = document.querySelector(".time__input");
const textRef = document.querySelector(".time__equal")
const buttonRef = document.querySelector(".time__button")


const sek = 86400;
const min = 1440;
const hours = 24;

const calculator = function (event) {
    const sekTime = sek % event.value
    console.log(event.value)
}

buttonRef.addEventListener("click", inputRef.calculator)