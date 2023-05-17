import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import { ItemDetailContainer } from "./ItemDetail/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContainer from "./components/Cart/CartContainer";
import FormContainer from "./components/Form/FormContainer";
import CartContextProvider from "./context/CartContext.jsx";

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <CartContextProvider>
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
                <div className="AppHomeDetailed">
                  <ItemDetailContainer />
                </div>
              }
            />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/form" element={<FormContainer />} />
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
        </CartContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
