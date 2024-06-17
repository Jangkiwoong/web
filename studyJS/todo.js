const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list")

const TODOS_KEY = "todos";

const todos = [];

saveTodo = () => {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

deleteTodo = (event) => {
    const li = event.target.parentElement
    li.remove();
}

const paintTodo = (newTodo) => {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button); 
    todoList.appendChild(li);
}

const handleTodoSubmit = (event) => {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    todos.push(newTodo);
    paintTodo(newTodo);
    saveTodo(); 
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY)