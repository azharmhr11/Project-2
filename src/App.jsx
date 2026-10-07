import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="counter-page">
      <section className="counter-panel">
        <h1>Counter</h1>

        <p className="counter-value">{count}</p>

        <div className="counter-controls">
          <button
            onClick={() => setCount((currentCount) => currentCount + 5)}
            className="counter-button"
            aria-label="Increase count"
          >
            +
          </button>
          <button
            onClick={() => setCount((currentCount) => currentCount - 5)}
            className="counter-button"
            aria-label="Decrease count"
          >
            -
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;