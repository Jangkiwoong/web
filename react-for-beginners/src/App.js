import React from "react";
import Home from "./routes/Home"
import Detail from "./routes/Detail"
import styles from "./App.module.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className={styles.title}>
      <Router>
        <Routes>
          <Route path="/movie" element={<Detail />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
