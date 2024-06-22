import Button from "./component/Button.js";
import styles from "./App.module.css"

function App() {
  return (
    <div>
      <div className={styles.title}>
        <h1>Welcome back to React!</h1>
        <Button text={"Continue"} />
      </div>
    </div>
  );
}

export default App;
