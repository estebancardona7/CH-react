import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { BarLoader } from "react-spinners";
import { db } from "../../firebaseconfig";
import { getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    let consulta;
    const itemColecction = collection(db, "products");

    if (categoryName) {
      const q = query(itemColecction, where("category", "==", categoryName));
      consulta = q;
    } else {
      consulta = itemColecction;
    }

    getDocs(consulta)
      .then((res) => {
        const products = res.docs.map((product) => {
          return {
            ...product.data(),
            id: product.id,
          };
        });

        setItems(products);
      })
      .catch((err) => console.log(err));
  }, [categoryName]);

  return (
    <div className="itemCard">
      {items.length === 0 ? (
        <div>
          Cargando stock...
          <BarLoader
            color="#1672eb"
            cssOverride={{}}
            height={12}
            loading
            speedMultiplier={1.3}
            width={200}
          />
        </div>
      ) : (
        <ItemList items={items} />
      )}
    </div>
  );
};

export default ItemListContainer;
