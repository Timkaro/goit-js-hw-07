const loginForm = document.querySelector(".login-form");

const loginBtn = loginForm.querySelector("button");
loginBtn.classList.add("login-btn");

loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === "" || password === "") {
    alert("All form fields must be filled in");
  }
  console.log(`Email: ${email.trim()}, Password: ${password.trim()}`);
  form.reset();
}
