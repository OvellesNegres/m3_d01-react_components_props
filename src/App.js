import "./App.css";
import Greeting from "./components/Greeting"
import GreetingsList from "./components/GreetingsList"

function App() {

  return (
    <div className="App">
      <GreetingsList title="Greetings to:">
        <Greeting name="Eli"/>
        <Greeting name="JaviScript"/>
        <p>This is a built in JSX p tag</p>
      </ GreetingsList>
    </div>
  );
}

console.log("I am outside of the app")

export default App;
