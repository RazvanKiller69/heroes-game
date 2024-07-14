let showHeroes = document.getElementById("show-heroes");
let hideHeroes = document.getElementById("hide-heroes");
let startFigtBtn = document.getElementById("start-fight");
let heroesContainer = document.querySelector(".heroes-container");
let showWinner = document.querySelector(".show-winner");
showWinner.innerHTML = epicFight.findWinner();

showHeroes.addEventListener("click", showHeroesFunc);

function showHeroesFunc() {
  heroesContainer.classList.add("d-flex");
  startFigtBtn.classList.add("d-flex");
  showHeroes.classList.add("d-none");
  hideHeroes.classList.add("d-flex");
}
hideHeroes.addEventListener("click", hideHeroesFunc);

function hideHeroesFunc() {
  heroesContainer.classList.remove("d-flex");
  startFigtBtn.classList.remove("d-flex");
  showHeroes.classList.remove("d-none");
  hideHeroes.classList.remove("d-flex");
  showWinner.classList.remove("d-flex");
}

startFigtBtn.addEventListener("click", startFightFunc);
function startFightFunc() {
  showWinner.classList.add("d-flex");
}
