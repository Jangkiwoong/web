import React from 'react';
import Practice from "./component/practice/Practice.js";
import TodoList from './component/todoList/TodoList.js';
import styles from "./App.module.css"

function App() {
  return (
    <div className={styles.title}>
      <Practice />
      <hr />
      <TodoList />
    </div>
  );
}
 
export default App;
