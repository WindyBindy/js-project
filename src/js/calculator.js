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
//error
const errorSpan = document.querySelector('.calculator__span');
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
  if (add == '+') {
    const sum = Number(firstNumInput.value) + Number(secondNumInput.value);
    output.textContent = sum;
  } else if (add == '-') {
    const sum = Number(firstNumInput.value) - Number(secondNumInput.value);
    output.textContent = sum;
  } else if (add == '*') {
    const sum = Number(firstNumInput.value) * Number(secondNumInput.value);
    output.textContent = sum;
  } else if (add == '/') {
    if (Number(secondNumInput.value) === 0) {
      output.textContent = 'error';
      errorSpan.textContent = 'ділене на нуль не можливе';
      // errorSpan.style.color = 'red';
      errorSpan.style.transform = 'scale(1)';
      return;
    }
    const sum = Number(firstNumInput.value) / Number(secondNumInput.value);
    output.textContent = sum;
    errorSpan.textContent = ' ';
  }
}
isBtn.onclick = function () {
  calculator();
};
