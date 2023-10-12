import "./App.css";
import Basic from "./components/Basic";
import Interact from "./components/Interact";
import Parent from "./components/Parent";
import Store from "./components/Store";

function App() {
  return (
    <div className="App">
      <h1>React</h1>
      <Interact onClickHandler={() => console.log("example")}>
        This is an example of children stuff
      </Interact>
      <Interact onClickHandler={() => console.log("another example")}>
        This is another example of children stuff
      </Interact>
      <Store />
      <Basic />
      <Parent />
    </div>
  );
}

export default App;
