function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector(".change-color");
const body = document.querySelector("body");
const color = document.querySelector(".color");

btn.addEventListener("click", (event) => {
  const changeColor = getRandomHexColor();
  body.style.backgroundColor = changeColor;
  color.textContent = changeColor;
});
