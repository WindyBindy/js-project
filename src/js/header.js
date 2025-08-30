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
