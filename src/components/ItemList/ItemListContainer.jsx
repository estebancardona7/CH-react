import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { products } from "../../productsMock.js";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const tarea = new Promise((resolve) => {
      resolve(products);
    });

    tarea.then((res) => setItems(res)).catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
