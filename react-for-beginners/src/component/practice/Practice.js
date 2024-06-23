import { useState, useEffect } from "react";

import Button from "./Button.js";
import Search from "./Search.js";
import Clean from "./Clean.js";

const Practice = () => {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("?");
  const [showing, setShowing] = useState(false);

  useEffect(() => {
    console.log("I run all the time.");
  });
  useEffect(() => {
    console.log("I run only once.");
  }, []);
  useEffect(() => {
    if (keyword !== "?" && keyword !== "") {
      console.log("I run when 'keyword' changes.", keyword);
    }
  }, [keyword]);
  useEffect(() => {
    if (counter !== 0 && counter !== "") {
      console.log("I run when 'counter' changes.", counter);
    }
  }, [counter]);
  useEffect(() => {
    console.log("I run when 'keyword & counter' changes.", counter);
  }, [counter, keyword]);
  // const MemorizedSearch = React.memo(Search);
  return (
    <div>
      <div>
        <Search
          tpye="text"
          placeholder="Search here..."
          onChange={(event) => {
            setKeyword(event.target.value);
          }}
          value={keyword}
        />
        <h1>{counter}</h1>
        <Button
          text={"Continue"}
          onClick={() => {
            setCounter((event) => event + 1);
          }}
        />
      </div>
      <hr />
      <Clean
        temp={showing}
        onClick={() => {
          setShowing((prov) => !prov);
        }}
      />
    </div>
  );
};

export default Practice;
