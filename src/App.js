import "./App.css";
import { useState, useEffect } from "react";

const eventFn = () => {
  console.log("Clicked");
};

function App() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  //when the component is updated
  // useEffect(() => {
  //   console.log("ComponentDidUpdated: " + counter);
  // });

  //When the component is mounted
  // useEffect(() => {
  //   console.log("ComponentDidMounted");
  // }, []);

  useEffect(() => {
    document.querySelector("h1")?.addEventListener("click", eventFn);

    //when component is unmounted
    return () => {
      document.querySelector("h1")?.removeEventListener("click", eventFn);
      console.log("ComponentWillUnmount");
    };
  }, []);

  //When the dependecy changes
  useEffect(() => {
    console.log("C1: " + counter + " | C2: " + counter2);
  }, [counter, counter2]);

  return (
    <div className="App">
      <p>17</p>
      <h1>
        C1: {counter} | C2: {counter2}
      </h1>
      <button onClick={() => setCounter(counter + 1)}>+ (1)</button>
      <button onClick={() => setCounter2(counter2 + 1)}>+ (2)</button>
    </div>
  );
}

export default App;
