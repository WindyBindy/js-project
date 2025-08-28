document.addEventListener("DOMContentLoaded", () => {
  const input1 = document.querySelector(".input1");
  const input2 = document.querySelector(".input2");
  const input3 = document.querySelector(".input3");
  const text = document.querySelector(".text");

  function checkMax() {
    const num1 = parseFloat(input1.value);
    const num2 = parseFloat(input2.value);
    const num3 = parseFloat(input3.value);

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
      text.textContent = "Будь ласка, введіть усі 3 числа.";
      text.style.color = "red";
      return;
    }

    const maxNum = Math.max(num1, num2, num3);
    text.textContent = `Найбільше число, яке ви ввели - ${maxNum}`;
    text.style.color = "green";
  }

  // запускається при зміні в будь-якому інпуті
  input1.addEventListener("input", checkMax);
  input2.addEventListener("input", checkMax);
  input3.addEventListener("input", checkMax);
});