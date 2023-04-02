import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./components/Home/Home.jsx";
import ItemList from "./components/ItemList/ItemList";

function App() {
  let greetings = "user";
  return (
    <div className="App">
      <div className="navBarContainer">
        <Navbar />
      </div>
      <div className="AppHome">
        <Home />
        <ItemList greetings={greetings} />
      </div>
      <div className="AppFooter">
        <Footer />
      </div>
    </div>
  );
}

export default App;
