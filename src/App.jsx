import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import { ItemDetailContainer } from "./ItemDetail/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <div className="AppHome">
                <ItemListContainer />
              </div>
            }
          />
          <Route
            path="/category/:categoryName"
            element={
              <div className="AppHome">
                <ItemListContainer />
              </div>
            }
          />
          <Route
            path="/itemDetail/:id"
            element={
              <div className="AppHome">
                <ItemDetailContainer />
              </div>
            }
          />
          <Route
            path="*"
            element={
              <div className="error-message">
                <h1>Lo siento, la ruta no existe. ERROR 404</h1>
              </div>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

// <div className="App">
//   <div className="navBarContainer">
//     <Navbar />
//   </div>
//   <div className="AppHome">
//     <ItemListContainer />
//     {/* <ItemDetailContainer /> */}
//   </div>
//   <div className="AppFooter">
//     <Footer />
//   </div>
// </div>
