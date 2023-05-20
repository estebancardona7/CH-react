import React, { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import { db } from "../../firebaseconfig";
import { getDoc, collection, doc } from "firebase/firestore";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  const { agregarAlCarrito, getQuantityById } = useContext(CartContext);

  const { id } = useParams();

  useEffect(() => {
    const itemsColection = collection(db, "products");
    const refDoc = doc(itemsColection, id);
    getDoc(refDoc)
      .then((res) => {
        setProduct({
          ...res.data(),
          id: id,
        });
      })
      .catch((err) => console.log(err));
  }, [id]);

  const onAdd = (cantidad) => {
    let data = {
      ...product,
      quantity: cantidad,
    };

    agregarAlCarrito(data);
    Swal.fire({
      position: "center",
      icon: "success",
      title: `Se agregó tu ${product.title} al carrito`,
      showConfirmButton: false,
      timer: 1900,
    });
  };

  let cantidadTotal = getQuantityById(product.id);

  return (
    <div>
      <ItemDetail
        product={product}
        onAdd={onAdd}
        cantidadTotal={cantidadTotal}
      />
    </div>
  );
};
