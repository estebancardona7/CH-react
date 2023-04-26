import React from "react";
import "./ItemDetail.css";

const ItemDetail = ({ product }) => {
  return (
    <div>
      <img src={product.img} alt="" className="itemDetailImg" />
      <h3>{product.title}</h3>
      <h3>{product.description}</h3>
      <h3>{product.price}</h3>
    </div>
  );
};

export default ItemDetail;
