import { useState } from "react";

const TodoList = () => {
    const [toDo, setTodo] = useState("");
    console.log("I'm working");
    return (
        <div>
            <form onSubmit={ (event) => { event.preventDefault(); if (toDo === "") {return;} else {console.log(toDo)}; setTodo("") } }>
                <input value={toDo} onChange={ (event) => setTodo(event.target.value)} type="text" placeholder="Write your to do..." />
                <button>Add To Do</button>
            </form>
        </div>
    );
}

export default TodoList;