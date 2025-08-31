// const buttonThemeSwitcher = document.querySelector('.theme__changer');
// const imgThemeSun = document.querySelector('.header__sun');
// buttonThemeSwitcher.onclick = function () {
//   console.log('tps');
// };
// buttonThemeSwitcher.addEventListener('click', () => {
//   console.log('click on btn2');

//   targetBtn.addEventListener('click', buttonThemeSwitcher);
// });
// function onTargetButtonClick() {
//   console.log('click on button');
// }

import day from '../img/sun-bg-changer.png';
import night from '../img/moon-bg-changer.png';

const btnRef = document.querySelector('.header__button');
const switchImg = document.querySelector('.header__sun');
const switchBoxRef = document.querySelector('.theme__changer');

btnRef.addEventListener('click', () => {
  btnRef.classList.toggle('check');
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');

  if (isDark) {
    switchImg.src = night;
  } else {
    switchImg.src = day;
  }
});
//modal----------------------------------
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('header__is-hidden');
    document.body.classList.toggle('no-scroll');
  }
})();

const modelEl = document.querySelector('.header__backdrop');
window.addEventListener('keydown', onEscClose);

function onEscClose(event) {
  if (event.code === 'Escape') {
    modelEl.classList.toggle('header__is-hidden');
  }
}
modelEl.addEventListener('click', onBackdropClick);
function onBackdropClick(event) {
  if (event.target === event.currentTarget) {
    modelEl.classList.toggle('header__is-hidden');
  }
}
// (непонимаю как работает если работает то ненадо трогать его хехе)
//submit
const nameHello = document.querySelector('.helloname');
const formEl = document.querySelector('.header__form');
const nameInputEl = document.querySelector('.header__modal__input');
// console.log(nameInputEl.value)
let name = '';
nameInputEl.addEventListener('input', onTargetInput);
function onTargetInput(event) {
  name = event.target.value;
}
formEl.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();

  if (event.target.value === undefined) {
    nameHello.textContent = name;
    modelEl.classList.toggle('header__is-hidden');
  }
}
