import P from "prop-types";
import "./App.css";
import { useState, useEffect } from "react";

const Button = ({ incrementButton }) => {
  return <button onClick={() => incrementButton(1)}>+</button>;
};

Button.propTypes = {
  incrementButton: P.func,
};

function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = (value) => {
    setCounter(counter + value);
  };

  return (
    <div className="App">
      <p>Teste 3</p>
      <h1>C1: {counter}</h1>
      <Button incrementButton={incrementCounter} />
    </div>
  );
}

export default App;
