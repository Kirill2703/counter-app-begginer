import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const onClickPlus = () => {
    setCount(count + 1);
  };

  const onClickMinus = () => {
    setCount(count - 1);
  };

  const onClickReset = () => {
    setCount(0)
  }

  return (
    <div className="App">
      <div className="counter-container">
        <h2>Counter</h2>
        <h1 className={count > 0 ? "positive" : count < 0 ? "negative" : ""}>
          {count}
        </h1>
        <div className="button-group">
          <button onClick={onClickMinus} className="minus">
            − Minus
          </button>
          <button onClick={onClickPlus} className="plus">
            Plus +
          </button>
        </div>
        <button onClick={onClickReset} className="reset">
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
