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
