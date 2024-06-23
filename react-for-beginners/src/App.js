import React from "react";
import Practice from "./component/practice/Practice.js";
import TodoList from "./component/todoList/TodoList.js";
import styles from "./App.module.css";
import Coin from "./component/Coin/Coin.js";

function App() {
  return (
    <div className={styles.title}>
      <Practice />
      <hr />
      <TodoList />
      <hr />
      <hr />
      <Coin />
    </div>
  );
}

export default App;
