import ItemCard from "./ItemCard.jsx";

const ItemList = ({ items }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        minHeight: "90vh",
        padding: "40px",
        gap: "20px",
      }}
    >
      {items.map((item) => {
        console.log(item.id);
        return <ItemCard item={item} key={item.id} />;
      })}
    </div>
  );
};

export default ItemList;
