const scientists = [ 
    { 
        name: "Albert", 
        surname: "Einstein", 
        born: 1879, 
        dead: 1955, 
        id: 1 
    }, 
    { 
        name: "Isaac", 
        surname: "Newton", 
        born: 1643, 
        dead: 1727, 
        id: 2 
    }, 
    { 
        name: "Galileo", 
        surname: "Galilei", 
        born: 1564, 
        dead: 1642, 
        id: 3 
    }, 
    { 
        name: "Marie", 
        surname: "Curie", 
        born: 1867, 
        dead: 1934, 
        id: 4 
    }, 
    { 
        name: "Johannes", 
        surname: "Kepler", 
        born: 1571, 
        dead: 1630, 
        id: 5 
    }, 
    { 
        name: "Nicolaus", 
        surname: "Copernicus", 
        born: 1473, 
        dead: 1543, 
        id: 6 
    }, 
    { 
        name: "Max", 
        surname: "Planck", 
        born: 1858, 
        dead: 1947, 
        id: 7 
    }, 
    { 
        name: "Katherine", 
        surname: "Blodgett", 
        born: 1898, 
        dead: 1979, 
        id: 8 
    }, 
    { 
        name: "Ada", 
        surname: "Lovelace", 
        born: 1815, 
        dead: 1852, 
        id: 9 
    }, 
    { 
        name: "Sarah E.", 
        surname: "Goode", 
        born: 1855, 
        dead: 1905, 
        id: 10 
    }, 
    { 
        name: "Lise", 
        surname: "Meitner", 
        born: 1878, 
        dead: 1968, 
        id: 11 
    }, 
    { 
        name: "Hanna", 
        surname: "Hammarström", 
        born: 1829, 
        dead: 1909, 
        id: 12 
    } 
];


const grid = document.querySelector(".smart__grid");
const buttons = document.querySelectorAll(".questions__item")

const renderSmart = array => {
grid.innerHTML = array.map(({name, surname, born, dead}) => `<li class="smart__item">
  <h3 class="smart__name">${name}</h3>
  <h4 class="smart__surname">${surname}</h4>
  <p class="smart__born">Born: ${born}</p>
  <p class="smart__dead">Dead: ${dead}</p>
</li>`).join("")
}


buttons.forEach(btn => {
 
  

  btn.addEventListener("click", (event) =>{
     const action = event.target.dataset.action;
     
     switch(action){
      case "IXX-ST":  
      // console.log("Які вчені народилися в 19 ст.");
      const nineteenCentury = scientists.filter(s => s.born >= 1800);
      renderSmart(nineteenCentury)
      break;

       case "albert": 
      //  console.log("Знайти рік народження Альберта Ейнштейна");
      const albert = scientists.find(s => s.name === "Albert")
      console.log(albert);
      alert(`Albert Einstein was born in ${albert.born} year.`)
      
       break;

       case "alphabet":
    //   console.log("Відсортувати вчених за алфавітом");
    const sorting = scientists.sort((a, b) => a.surname.localeCompare(b.surname));
    renderSmart(sorting);
      break;

      case "C-surname": 
    //   console.log("Знайти вчених, прізвища яких починаються на літеру “С”");
      const letterC = scientists.filter(s => s.surname.startsWith("C"));
      renderSmart(letterC);
      
      break;

      case "scientists-years":
    //   console.log("Відсортувати вчених за кількістю прожитих років");
    const years = scientists.sort((a, b) => (b.dead - b.born) - (a.dead - a.born));
    renderSmart(years)
      break;

      case "no-A-surname":
        // console.log("Видалити всіх вчених, ім’я яких починається на “А”");
        const noA = scientists.filter(s => !s.name.startsWith("A"));
        renderSmart(noA)
        break;

      case "last-born":
        // console.log("Знайти вченого, який народився найпізніше");
        const latest = scientists.find(s => s.born)
      break;

      case "oldest-eldest": 
// console.log("Знайти вченого, який прожив найдовше і вченого, який прожив найменше");
break;

case "first-letters":
  console.log("Знайти вчених, в яких співпадають перші літери імені і прізвища");
  break;
     }
  })

})




renderSmart(scientists)