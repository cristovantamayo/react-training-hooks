import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  //when the component is updated
  useEffect(() => {
    console.log("ComponentDidUpdated: " + counter);
  });
  //When the component is mounted
  useEffect(() => {
    console.log("ComponentDidMounted");
  }, []);

  return (
    <div className="App">
      <h1>Contador {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
}

export default App;
