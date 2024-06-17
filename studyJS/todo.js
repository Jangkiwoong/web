const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list")

const paintTodo = (newTodo) => {
    const li = document.createElement("li");
    todoList.appendChild(li);
    li.innerText = newTodo;
}

const handleTodoSubmit = (event) => {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    paintTodo(newTodo);
}

todoForm.addEventListener("submit", handleTodoSubmit);