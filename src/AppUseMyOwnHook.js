import "./App.css";
import { useEffect, useState, useRef } from "react";

const useMyHook = (cb, delay = 1000) => {
  const sabeCb = useRef();

  useEffect(() => {
    sabeCb.current = cb;
  }, [cb]);

  useEffect(() => {
    const interval = setInterval(() => {
      sabeCb.current();
    }, delay);

    return () => {
      clearInterval(interval);
    };
  }, [delay]);
};

// App.jsx
function App() {
  const [counter, setCounter] = useState(0);
  const [delay, setDelay] = useState(1000);
  const [incrementor, setIncrementor] = useState(100);

  useMyHook(() => setCounter((prev) => prev + 1), delay);
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <h3>Counter: {delay}</h3>
      <button
        onClick={() => {
          setDelay((d) => d + incrementor);
        }}
      >
        + {incrementor}
      </button>
      <button
        onClick={() => {
          setDelay((d) => d - incrementor);
        }}
      >
        - {incrementor}
      </button>
      <input
        type="number"
        value={incrementor}
        onChange={(e) => setIncrementor(Number(e.target.value))}
      />
    </div>
  );
}

export default App;
