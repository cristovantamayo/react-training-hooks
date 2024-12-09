import "./App.css";
import { useReducer, useEffect } from "react";

const globalState = {
  title: "O título que contexto",
  body: "O body do contexto",
  counter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "change":
      console.log("Change called in : " + action.payload);
      return { ...state, title: "All Changed", counter: state.counter + 1 };
    case "reverse":
      return { ...state, title: state.title.split("").reverse().join("") };
  }

  console.log("Nothing happened");
  return { ...state };
};

function App() {
  const [state, dispatch] = useReducer(reducer, globalState);
  const { counter, title, body } = state;

  useEffect(() => {
    console.log("Father rendered!");
  });

  return (
    <div>
      <h1>
        {title} {counter}
      </h1>
      <p></p>
      <button
        onClick={() =>
          dispatch({
            type: "change",
            payload: new Date().toLocaleString("pt-BR"),
          })
        }
      >
        Click
      </button>
      <button onClick={() => dispatch({ type: "reverse" })}>Revert</button>
      <button onClick={() => dispatch({ type: "" })}>no Action</button>
    </div>
  );
}

export default App;
