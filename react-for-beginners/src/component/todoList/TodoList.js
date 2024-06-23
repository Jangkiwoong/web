import { useState } from "react";

const TodoList = () => {
    const [toDo, setTodo] = useState("");
    const [toDos, setTodos] = useState([]); 
    console.log(toDos);
    return (
        <div>
            <h1>My To days List /{toDos.length}</h1>
            <form onSubmit={ (event) => { event.preventDefault(); if (toDo === "") {return;}; setTodo(""); setTodos((prov) => [toDo, ...toDos])} }>
                <input value={toDo} onChange={ (event) => setTodo(event.target.value)} type="text" placeholder="Write your to do..." />
                <button>Add To Do</button>
            </form>
        </div>
    );
}

export default TodoList;