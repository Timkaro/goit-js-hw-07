function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector("button[data-create]");
createBtn.classList.add("create-btn");

const destroyBtn = document.querySelector("button[data-destroy]");
destroyBtn.classList.add("destroy-btn");
