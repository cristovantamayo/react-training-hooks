import P from "prop-types";
import "./App.css";
import React, { useState, useEffect, useCallback } from "react";

const Button = React.memo(function Button({ incrementButton }) {
  console.log("Child render");
  return <button onClick={() => incrementButton(1)}>+</button>;
});

Button.propTypes = {
  incrementButton: P.func,
};

function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = useCallback((value) => {
    setCounter((c) => c + value);
  }, []);

  console.log("Father render");

  return (
    <div className="App">
      <p>Teste 3</p>
      <h1>C1: {counter}</h1>
      <Button incrementButton={incrementCounter} />
    </div>
  );
}

export default App;
