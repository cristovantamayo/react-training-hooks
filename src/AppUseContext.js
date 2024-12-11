import "./App.css";
import { Div } from "./zComponents/Div";
import { AppContext } from "./zContexts/AppContext";

function App() {
  return (
    <AppContext>
      <Div />
    </AppContext>
  );
}

export default App;
