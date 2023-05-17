import React from "react";
import "./Cart.css";
import { Button } from "@mui/material";

const Cart = ({ cart, clearCart, deleteProductById }) => {
  return (
    <div className="cartDetail">
      <h1>Este es tu carrito actual:</h1>
      {cart.map((product) => {
        return (
          <div key={product.id}>
            <h3>{product?.title}</h3>
            <h4>{product.price}USD</h4>
            <h4>{product.quantity}</h4>
            <Button
              variant="contained"
              onClick={() => deleteProductById(product.id)}
            >
              Eliminar
            </Button>
          </div>
        );
      })}

      <div className="cartDetail">
        <Button variant="outlined" onClick={clearCart}>
          Limpiar carrito
        </Button>
      </div>
      <div>El total del carro es: ${}</div>
    </div>
  );
};

export default Cart;
