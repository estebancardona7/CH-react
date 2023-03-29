import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import Home from "./Home";
import { Footer } from "./Footer";
import ItemList from "./components/ItemList/ItemList";
import Counter from "./components/Counter/Counter";

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Home />
        {/* <p>Hello from React. </p> */}
        <br />
        <ItemList estaEsUnaProp={"Hola boludito, desde una prop"} edad={22} />
        <br />
        <Counter />
        <br />
        <Footer />
      </header>
    </div>
  );
}

export default App;
