import { useState, useEffect } from "react";

const ItemList = ({ greetings, estaEsUnaProp }) => {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log("Hola desde el primer render");
  }, [greetings]);

  return (
    <div>
      <span>Un saludo {greetings}</span>
      <p>{contador}</p>
      <button
        onClick={() => {
          setContador(contador + 1);
        }}
      >
        Sumar
      </button>
    </div>
  );
};

export default ItemList;
