import Practice from "../component/practice/Practice.js";
import TodoList from "../component/todoList/TodoList.js";
import Coin from "../component/Coin/Coin.js";
import Movie from "../component/movie/Movie.js"

const Home = () => {
  return (
    <div>
      <Practice />
      <hr />
      <TodoList />
      <hr />
      <Coin />
      <hr />
      <Movie />
    </div>
  );
};

export default Home; 
