function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

document.addEventListener('DOMContentLoaded', function () {
  const button = document.querySelector('.button-year');
  const input = document.querySelector('.input-year');
  const resultDiv = document.querySelector('.true-false');


  button.addEventListener('click', function () {
    const year = parseInt(input.value);

    if (year > 2025) {
      resultDiv.textContent = 'Рік не може бути більшим за 2025.';
      resultDiv.style.color = 'orange';
    } else if (isLeapYear(year)) {
      resultDiv.textContent = `Ви народилися у високосний рік!`;
      resultDiv.style.color = 'green';
    } else {
      resultDiv.textContent = `Ви народилися не у високосний рік!`;
      resultDiv.style.color = 'red';
    }
  });
});