

const inputRef = document.querySelector(".time__input");
const textRef = document.querySelector(".time__equal")
const buttonRef = document.querySelector(".time__button")


const timeCalculator = function () {
    let time = parseInt(inputRef.value)

    if (isNaN(time) || time < 0) {
        textRef.textContent = "Уведено не коректне число"
        textRef.classList.add("wrong-text");
        return;
    } else {
        textRef.classList.remove("wrong-text");
    }

    const days = Math.floor(time / (24 * 3600));
    time %= (24 * 3600);

    const hours = Math.floor(time / 3600);
    time %= 3600;

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const formatted = `${days} дн. ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    textRef.textContent = formatted
}


buttonRef.addEventListener("click", timeCalculator)