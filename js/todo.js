const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
const COMPLETE_KEY = "complete";

let todos = [];
let completeTodos = [];

function saveTodo() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
  localStorage.setItem(COMPLETE_KEY, JSON.stringify(completeTodos));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  todos = todos.filter((todo) => todo.id !== +li.id);
  saveTodo();
}

function completeTodo(event) {
  const li = event.target.parentElement;
  const span = li.querySelector(".todoSpan");
  console.log(span);
  console.log(event);
  const check = li.getElementsByTagName("input");
  if (check[0].checked === true) {
    addCompleteTodo(li, event, span);
  } else {
    removeCompleteTodo(li, event, span);
  }
}

function removeCompleteTodo(li, event, span) {
  span.classList.remove("complete");
  completeTodos = completeTodos.filter((todo) => todo.id !== +li.id);
  saveTodo();
}

function addCompleteTodo(li, event, span) {
  span.classList.add("complete");
  const completeObj = {
    text: event.target.parentElement.childNodes[1].innerText,
    id: +event.target.parentElement.id,
  };
  completeTodos.push(completeObj);
  saveTodo();
}

function callCompleteTodo(todo) {
  const li = document.getElementById(todo.id);
  const check = li.getElementsByTagName("input");
  check[0].checked = true;
  span.classList.add("complete");
}

function writeTodo(todo) {
  const li = document.createElement("li");
  const inputCheck = document.createElement("input");
  li.id = todo.id;
  const button = document.createElement("button");
  const span = document.createElement("span");
  span.innerText = todo.text;
  button.innerText = "X";
  inputCheck.type = "checkbox";

  li.appendChild(inputCheck);
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
  li.classList.add("todoList");
  inputCheck.classList.add("checkbox");
  span.classList.add("todoSpan");
  button.classList.add("removeBtn");
  button.addEventListener("click", deleteTodo);
  inputCheck.addEventListener("click", completeTodo);
}

function submitTodo(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  todos.push(newTodoObj);
  writeTodo(newTodoObj);
  saveTodo();
}

todoForm.addEventListener("submit", submitTodo);

const savedTodos = localStorage.getItem(TODOS_KEY);
const savedCompleteTodos = localStorage.getItem(COMPLETE_KEY);

if (savedTodos !== null) {
  const parsedTodos = JSON.parse(savedTodos);
  todos = parsedTodos;
  parsedTodos.forEach(writeTodo);
}

if (savedCompleteTodos !== null) {
  const parsedCompleteTodos = JSON.parse(savedCompleteTodos);
  completeTodos = parsedCompleteTodos;
  parsedCompleteTodos.forEach((todo) => callCompleteTodo(todo));
}
