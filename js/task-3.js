const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", () => {
  const trimmedInput = nameInput.value.trim();

  if (trimmedInput === "") {
    nameOutput.textContent = "Anonymous";
    return;
  }
  nameOutput.textContent = trimmedInput;
});
