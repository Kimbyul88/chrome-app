const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
// const loginButton = loginForm.querySelector("button");
const link = document.querySelector("a");
const h1 = document.querySelector("#greeting");

const HIDDEN_MSG = "hidden";
const USERNAME_KEY = "username";

function greeting() {
  const username = localStorage.getItem(USERNAME_KEY);
  h1.classList.remove(HIDDEN_MSG);
  h1.innerText = "WELCOME, \n" + username.toUpperCase();
}

function handleSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.add(HIDDEN_MSG);
  greeting();
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_MSG);
  loginForm.addEventListener("submit", handleSubmit);
} else {
  greeting();
}
