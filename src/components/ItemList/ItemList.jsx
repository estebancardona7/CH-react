import { useEffect } from "react";

const ItemList = ({ greetings }) => {
  useEffect(() => {}, [greetings]);

  return (
    <div>
      <span>Un saludo {greetings}</span>
    </div>
  );
};

export default ItemList;
