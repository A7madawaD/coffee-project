//start of hero
const landingPage = document.querySelector(".head");

const imgsArray = [
  "hero1.png",
  "hero2.png",
  "hero3.png",
  "hero4.png",
  "hero5.png",
  "hero6.png",
];

function changeBackground() {
  let randomNumber = Math.floor(Math.random() * imgsArray.length);

  landingPage.style.backgroundImage = `url("image/${imgsArray[randomNumber]}")`;
}

changeBackground();
setInterval(changeBackground, 3000);
// end of hero
// start of nav
const searchBtn = document.getElementById("searchBtn");
const searchWrapper = document.getElementById("searchWrapper");
const closeSearch = document.getElementById("closeSearch");
const searchInput = document.getElementById("searchInput");

searchBtn.addEventListener("click", function () {
  searchWrapper.classList.add("active");

  searchInput.focus();
});

closeSearch.addEventListener("click", function () {
  searchWrapper.classList.remove("active");

  searchInput.value = "";
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    searchWrapper.classList.remove("active");

    searchInput.value = "";
  }
});
// end of nav
