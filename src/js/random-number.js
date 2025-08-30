const inputEl = document.querySelector('.randomnumber__input');
const outputEl = document.querySelector('.randomnumber__output');

let secretNum = Math.floor(Math.random() * 10) + 1;
// console.log(secretNum);
inputEl.addEventListener('input', onTargetInput);
function onTargetInput(event) {
  console.log(event.target.value);
  if (Number(event.target.value) === secretNum) {
    outputEl.textContent = 'Вітаю, ви вгадали число! ' + secretNum;
    outputEl.style.color = 'green';
    secretNum = Math.floor(Math.random() * 10) + 1;
  } else if (event.target.value === null) {
    outputEl.textContent = 'напиши чтото в input';
  } else {
    outputEl.textContent = 'Ви програли, комп’ютер загадав ' + secretNum;
    outputEl.style.color = 'red';
    secretNum = Math.floor(Math.random() * 10) + 1;
  }
}
