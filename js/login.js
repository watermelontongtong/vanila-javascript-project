const loginForm = document.getElementById("login-form");
const loginInput = document.getElementById("login-input");
const greeting = document.getElementById("greeting");
const logoutBtn = document.getElementById("logout-btn");
const todo = document.querySelector(".todo");

const CLASS_HIDDEN = "hidden";
const KEYNAME = "name";

function handleLogin(event) {
  event.preventDefault();
  const name = loginInput.value;
  loginForm.classList.add(CLASS_HIDDEN);
  localStorage.setItem(KEYNAME, name);
  handleGreetings(name);
}

function handleGreetings(name) {
  const time = new Date();
  const hour = time.getHours();
  if (hour > 4 && hour < 12) {
    greeting.innerText = `Good Morning ${name}!`;
  } else if (hour >= 12 && hour < 18) {
    greeting.innerText = `Good Afternoon ${name}!`;
  } else if (hour >= 18 && hour < 21) {
    greeting.innerText = `Good Evening ${name}!`;
  } else {
    greeting.innerText = `Good Night ${name}!`;
  }
}

loginForm.addEventListener("submit", handleLogin);

function handleLogout() {
  localStorage.removeItem(KEYNAME);
  logoutBtn.classList.add(CLASS_HIDDEN);
  todo.classList.add(CLASS_HIDDEN);
}

logoutBtn.addEventListener("click", handleLogout);

setInterval(checkGreetings, 100);
checkGreetings();
function checkGreetings() {
  const savedName = localStorage.getItem(KEYNAME);
  if (savedName !== null) {
    handleGreetings(savedName);
    todo.classList.remove(CLASS_HIDDEN);
    logoutBtn.classList.remove(CLASS_HIDDEN);
  } else {
    loginForm.classList.remove(CLASS_HIDDEN);
    logoutBtn.classList.add(CLASS_HIDDEN);
    greeting.innerText = "";
  }
}
