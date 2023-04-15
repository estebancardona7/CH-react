import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import ItemListContainer from "./components/ItemList/ItemListContainer";

function App() {
  return (
    <div className="App">
      <div className="navBarContainer">
        <Navbar />
      </div>
      <div className="AppHome">
        <ItemListContainer />
      </div>
      <div className="AppFooter">
        <Footer />
      </div>
    </div>
  );
}

export default App;
