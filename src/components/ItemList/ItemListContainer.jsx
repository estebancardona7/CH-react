import { useState, useEffect } from "react";
import ItemList from "./ItemList";
// import axios from "axios";
import { useParams } from "react-router-dom";
import { products } from "../../productsMock";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();
  // console.log(categoryName);

  useEffect(() => {
    const productsFiltered = products.filter(
      (prod) => prod.category === categoryName
    );

    const tarea = new Promise((resolve, reject) => {
      resolve(categoryName ? productsFiltered : products);
    });

    tarea.then((res) => setItems(res)).catch((error) => console.log(error));
  }, [categoryName]);

  return (
    <div className="itemCard">
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
