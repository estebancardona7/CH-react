import React from "react";
import Cart from "./Cart";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CartContainer = () => {
  const { cart, clearCart, deleteProductById, getTotalPrice } =
    useContext(CartContext);

  let total = getTotalPrice();

  const navigate = useNavigate();

  const clearCartWithAlert = () => {
    Swal.fire({
      title: "Seguro que quieres eliminar todo el carrito?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Si, eliminar",
      denyButtonText: `No, no eliminar`,
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Se limpio el carrito", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Carrito sin modificar", "", "info");
      }
    });
  };
  return (
    <Cart
      total={total}
      clearCartWithAlert={clearCartWithAlert}
      cart={cart}
      deleteProductById={deleteProductById}
      navigate={navigate}
    />
  );
};

export default CartContainer;
