const members = [
  {
    name: "Артем Барсуков",
    info: "Розробник таких секцій як: Високосний рік, 3 числа та секції розробників",
    img: "https://i.imgur.com/QsgQWwk.jpeg"
  },
  {
    name: "Нікіта Новський",
    info: "Розробник таких секцій як: Калькулятор, Рандомні числа та шапки сайту (Хедер)",
    img: "https://placeholder.apptor.studio/150/150/product1.png"
  },
  {
    name: "Артем Бараник",
    info: "Розробник таких секцій як: Камінь-ножиці-папір, калькулятор часу та гра Динозавр",
    img: "https://placeholder.apptor.studio/200/200/product1.png"
  },
  {
    name: "Микола Давиденко",
    info: "Розробник таких секцій як: Підвал сайту (футер), гра у футбол та Розумні люди",
    img: "https://placeholder.apptor.studio/200/200/product1.png"
  }
];

let current = 0;

function updateProfile() {
  const member = members[current];
  document.querySelector(".member img").src = member.img;
  document.querySelector(".member h3").textContent = member.name;
  document.querySelector(".member p").textContent = member.info;
  document.querySelector(".progress").textContent = `${current + 1} / ${members.length}`;
}

document.querySelector(".left").onclick = () => {
  current = (current - 1 + members.length) % members.length;
  updateProfile();
};

document.querySelector(".right").onclick = () => {
  current = (current + 1) % members.length;
  updateProfile();
};

updateProfile();