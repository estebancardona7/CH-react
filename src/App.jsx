import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./components/Home/Home.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="AppHome">
        <Home />
      </div>
      <div className="AppFooter">
        <Footer />
      </div>
    </div>
  );
}

export default App;
