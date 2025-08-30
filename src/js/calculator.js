//numbers
const firstNumInput = document.querySelector('.calculator__input');
const secondNumInput = document.querySelector('.calculator__num');
//buttons functions
const plusBtn = document.querySelector('.plusBtn');
const mulBtn = document.querySelector('.mulBtn');
const minusBtn = document.querySelector('.minusBtn');
const subBtn = document.querySelector('.subBtn');
//= button
const isBtn = document.querySelector('.calculator__output__btn');
//output
const output = document.querySelector('.calculator__output');
//----------------------------------------------------------------------

output.textContent = 'результат';
let add = '+';
plusBtn.onclick = function () {
  add = '+';
};
minusBtn.onclick = function () {
  add = '-';
};
mulBtn.onclick = function () {
  add = '*';
};
subBtn.onclick = function () {
  add = '/';
};

function calculator() {
  if (add === '+') {
    const sum = Number(firstNumInput.value) + Number(secondNumInput.value);
    output.textContent = sum;
  }
  if (add === '-') {
    const sum = Number(firstNumInput.value) - Number(secondNumInput.value);
    output.textContent = sum;
  }
  if (add === '*') {
    const sum = Number(firstNumInput.value) * Number(secondNumInput.value);
    output.textContent = sum;
  }
  // if (add === '/') {
  //   console.log('ура');
  //   console.log(secondNumInput.value);
  // }
  if (add === '/') {
    if (Number(secondNumInput.value) === 0) {
      output.textContent = 'помилка';
      console.log('ура');
      return;
    }
    const sum = Number(firstNumInput.value) / Number(secondNumInput.value);
    output.textContent = sum;
  }
}
isBtn.onclick = function () {
  calculator();
};
