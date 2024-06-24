import React from "react";
import Practice from "./component/practice/Practice.js";
import TodoList from "./component/todoList/TodoList.js";
import Coin from "./component/Coin/Coin.js";
import Movie from "./component/movie/Movie.js"
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.title}>
      <Practice />
      <hr />
      <TodoList />
      <hr />
      <Coin />
      <hr />
      <Movie />
    </div>
  );
}

export default App;
