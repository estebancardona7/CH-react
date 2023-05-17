import React from "react";
import Cart from "./Cart";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartContainer = () => {
  const { cart, clearCart, deleteProductById } = useContext(CartContext);
  return (
    <div>
      <Cart
        cart={cart}
        clearCart={clearCart}
        deleteProductById={deleteProductById}
      />
    </div>
  );
};

export default CartContainer;
