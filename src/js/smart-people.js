const scientists = [
  { name: "Альберт", surname: "Ейнштейн", years: "1879–1955" },
  { name: "Ісаак", surname: "Ньютон", years: "1643–1727" },
  { name: "Марія", surname: "Кюрі", years: "1867–1934" },
  { name: "Стівен", surname: "Гокінг", years: "1942–2018" },
  { name: "Чарльз", surname: "Дарвін", years: "1809–1882" },
  { name: "Нікола", surname: "Тесла", years: "1856–1943" },
  { name: "Галілео", surname: "Галілей", years: "1564–1642" },
  { name: "Дмитро", surname: "Менделєєв", years: "1834–1907" },
  { name: "Михайло", surname: "Ломоносов", years: "1711–1765" },
  { name: "Карл", surname: "Саган", years: "1934–1996" },
  { name: "Арістотель", surname: "", years: "384–322 до н.е." },
  { name: "Олександр", surname: "Флемінг", years: "1881–1955" }
];


const grid = document.querySelector(".smart__grid");
function render(list) {
  grid.innerHTML = "";
  list.forEach(scientist => {
    grid.innerHTML += `<li class="smart__card">
      <b>${scientist.name} ${scientist.surname}</b><br>
      <span>${scientist.years}</span>
    </li>`;
  });
}
render(scientists);


document.querySelectorAll(".questions__item").forEach((btn, i) => {
  btn.addEventListener("click", () => {
    let result = [...scientists];
    if (i === 0) {
      result = scientists.filter(scientist => parseInt(scientist.years) >= 1801 && parseInt(scientist.years) <= 1900);
    }
    if (i === 1) {
      alert("Albert Einstein: 1879");
      return;
    }
    if (i === 2) {
      result.sort((a,b)=>a.surname.localeCompare(b.surname));
    }
    if (i === 3) {
      result = scientists.filter(scientist => scientist.surname.startsWith("С"));
    }
    // if (i === 4) {
    //   result.sort((a,b)=>{
    //   });
    // }
    if (i === 5) {
      result = scientists.filter(scientist => !scientist.name.startsWith("А"));
    }
    // if (i === 6) {
    // }
    if (i === 7) {
    //   result = "Нікола Тесла (1856–1943)", "Арістотель (384–322 до н.е.)"        ?????????????????????????????????????????
    }
    if (i === 8) {
      result = scientists.filter(scientist => scientist.name[0]===scientist.surname[0] && scientist.surname!=="");
    }
    render(result);
  });
});
